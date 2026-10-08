(function(){
  'use strict';
  if(window.PortfolioVoiceNavigation)return;
  const pages=[
    ['index.html','עמוד הבית',['בית','דף הבית','עמוד הבית']],
    ['product.html','מנהל מוצר',['ניהול מוצר','מוצר']],
    ['project.html','מנהל פרויקט',['ניהול פרויקטים','מנהל פרויקטים']],
    ['system.html','מנתח מערכות',['ניתוח מערכות']],
    ['magic.html','מתכנת MAGIC',['מגיק','מג יק','מג׳יק','magic']],
    ['customer.html','Customer Success',['לקוחות','קסטומר סקסס']],
    ['experience.html','ניסיון',['נסיון','ניסיון תעסוקתי']],
    ['projects.html','עבודות ופרויקטים',['פרויקטים','עבודות']],
    ['work-environments.html','סוגי מערכות',['סביבות עבודה']],
    ['education.html','השכלה',['לימודים']],
    ['military.html','שירות צבאי',['צבא']],
    ['skills.html','יכולות',['כישורים','יכולות וכישורים']],
    ['advantages.html','היתרונות שלי',['יתרונות']],
    ['contact.html','צור איתי קשר',['יצירת קשר','צור קשר','קשר']]
  ];
  const normalize=s=>String(s||'').toLowerCase().replace(/[\u0591-\u05c7]/g,'').replace(/[^a-z0-9\u05d0-\u05ea ]/g,' ').replace(/מ(?:א)?ג\s*י?\s*ק/g,'magic').replace(/\s+/g,' ').trim();
  const command=/נו{1,3}ט\s+(?:עכשיו|לשם)/g;
  let dialog,field,status,hookStatus,options,matches,mic,recognition=null,timer,retryTimer,speechTimer,commandTimer;
  let active=false,mode='listen',speaking=false,blocked=false,session='',generation=0,mapPromise,mapDate='',entries=[],lastFocus;
  const day=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jerusalem',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const currentPage=()=>location.pathname.split('/').pop()||'index.html';
  function markSections(root){return [...root.querySelectorAll('main h1,main h2,main h3')].map((h,i)=>{if(!h.id)h.id='voice-section-'+i;return {title:h.textContent.trim().slice(0,160),id:h.id}});}
  function revealHash(){if(!location.hash.startsWith('#voice-section-'))return;markSections(document);const target=document.getElementById(location.hash.slice(1));if(!target)return;for(let p=target.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;const offset=Math.max(0,...[...document.querySelectorAll('.top,#pageReadTopicControls')].map(el=>getComputedStyle(el).position==='fixed'?el.getBoundingClientRect().bottom:0));window.scrollTo({top:scrollY+target.getBoundingClientRect().top-offset-20,behavior:'instant'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(revealHash,700));else setTimeout(revealHash,700);
  function baseMap(){return pages.map(([path,title,aliases])=>({path,title,aliases,kind:'page'}));}
  async function siteMap(){
    const date=day();if(mapPromise&&mapDate===date)return mapPromise;
    mapDate=date;mapPromise=(async()=>{
      try{const cached=JSON.parse(localStorage.getItem('portfolioVoiceMap')||'null');if(cached?.date===date&&Array.isArray(cached.entries)&&cached.entries.length){entries=cached.entries;return {entries,remap:false,date};}}catch{}
      const collected=baseMap();let complete=true;
      await Promise.all(pages.map(async([path])=>{try{let doc;if(path===currentPage())doc=document;else{const response=await fetch('/'+path,{signal:AbortSignal.timeout(6000)});if(!response.ok)throw Error();doc=new DOMParser().parseFromString(await response.text(),'text/html');}markSections(doc).forEach(h=>{if(h.title)collected.push({path:path+'#'+h.id,title:h.title,kind:'section',aliases:[]})});}catch{complete=false;}}));
      entries=collected;if(complete)try{localStorage.setItem('portfolioVoiceMap',JSON.stringify({date,entries}));}catch{}
      return {entries,remap:true,date};
    })();return mapPromise;
  }
  async function webhook(action,data={}){
    const response=await fetch('/api/voice-navigation',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,session_id:session,page:currentPage(),date:day(),...data}),signal:AbortSignal.timeout(15000)});
    const result=await response.json();if(!response.ok||!result.ok)throw Error(result.error||'Make unavailable');return result;
  }
  function stopListening(){clearTimeout(retryTimer);clearTimeout(commandTimer);if(recognition){const old=recognition;recognition=null;old.onend=null;old.onresult=null;old.onerror=null;try{old.abort();}catch{}}}
  function hasCommand(text){command.lastIndex=0;return command.test(normalize(text));}
  function close(){generation++;active=false;clearTimeout(timer);clearTimeout(speechTimer);stopListening();window.speechSynthesis?.cancel();speaking=false;if(dialog?.open)dialog.close();lastFocus?.focus();}
  function say(text,after){
    stopListening();speaking=true;const id=generation;let finished=false;
    const done=()=>{if(finished)return;finished=true;clearTimeout(speechTimer);if(!active||id!==generation)return;speaking=false;after?.();};
    if(!window.speechSynthesis){done();return;}
    window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang='he-IL';const voice=window.speechSynthesis.getVoices().find(v=>v.lang.startsWith('he'));if(voice)utterance.voice=voice;
    utterance.onend=done;utterance.onerror=done;speechTimer=setTimeout(()=>{window.speechSynthesis.cancel();done();},20000);window.speechSynthesis.speak(utterance);
  }
  function listen(){
    if(!active||speaking||blocked||mode==='navigate')return;
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!Speech){status.textContent='זיהוי קולי אינו זמין בדפדפן הזה. אפשר להקליד את הבקשה וללחוץ על נווט עכשיו.';return;}
    stopListening();const rec=new Speech();recognition=rec;rec.lang='he-IL';rec.continuous=true;rec.interimResults=true;
    const prefix=field.value.trim();
    rec.onstart=()=>{if(active)status.textContent=mode==='choices'?'מקשיב לבחירה: 1, 2 או 3':'המיקרופון מקשיב. בסיום אמרו ״נווט עכשיו״.';};
    rec.onresult=e=>{
      if(!active||speaking||recognition!==rec)return;let words=[],allFinal=true;
      for(let i=0;i<e.results.length;i++){words.push(e.results[i][0].transcript);if(!e.results[i].isFinal)allFinal=false;}
      const spoken=words.join(' ').trim();
      if(mode==='choices'&&!hasCommand(spoken)){if(allFinal)chooseSpoken(spoken);return;}
      field.value=[prefix,spoken].filter(Boolean).join(' ');
      clearTimeout(commandTimer);
      if(hasCommand(field.value)){
        if(allFinal){navigate();return;}
        const captured=field.value,id=generation;
        commandTimer=setTimeout(()=>{if(active&&!speaking&&id===generation&&field.value===captured&&hasCommand(captured))navigate();},800);
      }
    };
    rec.onerror=e=>{if(!active||recognition!==rec)return;if(['not-allowed','service-not-allowed','audio-capture'].includes(e.error)){blocked=true;stopListening();status.textContent='המיקרופון אינו זמין או שלא ניתנה הרשאה. אפשר להקליד את הבקשה.';}else if(e.error==='network'){blocked=true;stopListening();status.textContent='שירות הזיהוי הקולי אינו זמין כרגע. אפשר להקליד את הבקשה.';}};
    rec.onend=()=>{if(recognition===rec){recognition=null;if(active&&!speaking&&hasCommand(field.value)){navigate();return;}if(active&&!speaking&&!blocked&&mode!=='navigate')retryTimer=setTimeout(listen,350);}};
    try{rec.start();}catch{recognition=null;status.textContent='אפשר להקליד את הבקשה או ללחוץ על הפעל מיקרופון.';}
  }
  function begin(){
    generation++;mode='listen';blocked=false;field.value='';matches.replaceChildren();options.hidden=true;clearTimeout(timer);status.textContent='האזינו להנחיות, ואז אמרו לאן תרצו לעבור.';
    say('יש להגיד את הלשונית או הנושא שאליו רוצים לעבור. בסיום תגידו נווט לשם, או נווט עכשיו.',()=>{listen();timer=setTimeout(showChoices,30000);});
  }
  function showChoices(){if(!active||mode==='navigate')return;if(hasCommand(field.value)){navigate();return;}mode='choices';options.hidden=false;status.textContent=field.value.trim()?'נקלטה הבקשה: '+field.value+'. בחרו 2 כדי לנווט לפיה, או אפשרות אחרת.':'לא נקלטה בקשה. בחרו אפשרות ואמרו מספר מ־1 עד 3.';say('בחרו אחת משלוש אפשרויות ואמרו את המספר. אחת, תתחיל מחדש. שתיים, נווט לפי מה שנאמר. שלוש, סגור ניווט.',()=>{listen();timer=setTimeout(close,60000);});}
  function chooseSpoken(text){const value=normalize(text);if(/(?:^|\s)(1|אחת|אחד|ראשונה)(?:\s|$)/.test(value))begin();else if(/(?:^|\s)(2|שתיים|שתים|שניים|שנים|שנייה)(?:\s|$)/.test(value))navigate();else if(/(?:^|\s)(3|שלוש|שלושה|שלישית)(?:\s|$)/.test(value))close();}
  function resolve(text){
    command.lastIndex=0;const query=normalize(text).replace(command,' ').replace(/(?:^|\s)(?:נו{1,3}ט|תעבור|עבור|לעבור|בבקשה|אל)(?=\s|$)/g,' ').replace(/\s+/g,' ').trim();
    if(/(?:^|\s)(?:ל?עמוד הבית|ל?דף הבית|ל?בית)(?:\s|$)/.test(query))return [{path:document.documentElement.lang==='en'?'index-en.html':'index.html',title:'עמוד הבית'}];
    if(!query)return [];
    const ranked=entries.map(entry=>{let score=0;for(const label of [entry.title,...(entry.aliases||[])]){const name=normalize(label);if(!name)continue;if(query===name||query==='ל'+name)score=Math.max(score,100+(entry.kind==='page'?10:0));else if(name.length>=3&&(query.includes(name)||name.includes(query)))score=Math.max(score,60+Math.min(name.length,25));}return {entry,score};}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
    if(!ranked.length)return [];const best=ranked[0].score;return ranked.filter(x=>x.score===best).map(x=>x.entry).filter((e,i,a)=>a.findIndex(x=>x.path===e.path)===i).slice(0,5);
  }
  async function navigate(chosen){
    if(!active||mode==='navigate')return;clearTimeout(timer);stopListening();window.speechSynthesis?.cancel();speaking=false;mode='navigate';options.hidden=true;const id=generation;
    status.textContent='מחפש את העמוד או הנושא…';await siteMap();if(!active||id!==generation)return;
    const targets=chosen?[chosen]:resolve(field.value);
    if(targets.length!==1){command.lastIndex=0;field.value=normalize(field.value).replace(command,' ').trim();mode='listen';matches.replaceChildren();if(!targets.length){status.textContent='לא נמצא יעד ברור. אמרו או הקלידו שם לשונית או נושא.';}else{status.textContent='נמצאו כמה יעדים. בחרו לאן לעבור:';targets.forEach(target=>{const b=document.createElement('button');b.type='button';b.textContent=target.title;b.addEventListener('click',()=>navigate(target));matches.appendChild(b);});}listen();timer=setTimeout(showChoices,30000);return;}
    const target=targets[0];status.textContent='מעביר אל '+target.title+'…';
    try{await webhook('navigate',{transcript:field.value,target:target.path});hookStatus.textContent='Make קיבל את בקשת הניווט.';}catch{hookStatus.textContent='Make לא אישר את הבקשה. הניווט באתר יתבצע לפי היעד שנמצא.';}
    if(!active||id!==generation)return;const url=new URL(target.path,location.origin);if(url.origin!==location.origin)return;
    close();if(url.pathname===location.pathname&&url.hash){location.hash=url.hash;revealHash();}else if(url.pathname===location.pathname&&!url.hash){window.scrollTo({top:0,behavior:'instant'});}else location.assign(url.href);
  }
  function makeDialog(){
    const style=document.createElement('style');style.id='portfolioVoiceNavigationStyle';style.textContent='#portfolioVoiceNavigation{direction:rtl;width:min(520px,calc(100vw - 32px));max-height:calc(100dvh - 32px);box-sizing:border-box;overflow:auto;padding:24px;border:1px solid #d5e0ed;border-radius:18px;background:#fff;color:#102235;box-shadow:0 16px 60px #10223540;font-family:inherit}#portfolioVoiceNavigation::backdrop{background:#10223590}#portfolioVoiceNavigation h2{margin:0 0 12px;font-size:25px}#portfolioVoiceNavigation p{line-height:1.6;margin:10px 0}#portfolioVoiceNavigation textarea{box-sizing:border-box;width:100%;min-height:85px;padding:12px;border:1px solid #bbcddd;border-radius:10px;font:inherit;resize:vertical;color:#102235;background:#fff}#portfolioVoiceNavigation .voiceActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}#portfolioVoiceNavigation button{min-height:42px;padding:10px 14px;border:1px solid #ccd9e7;border-radius:9px;font:inherit;cursor:pointer;background:#edf3ff;color:#195ed8}#portfolioVoiceNavigation button:focus-visible,#portfolioVoiceNavigation textarea:focus-visible{outline:3px solid #195ed8;outline-offset:2px}#portfolioVoiceNavigation button.voicePrimary{background:#195ed8;color:#fff}#portfolioVoiceNavigation [hidden]{display:none!important}#voiceHookStatus{font-size:13px;color:#54677a}#voiceMatches{display:flex;gap:8px;flex-wrap:wrap}';document.head.appendChild(style);
    dialog=document.createElement('dialog');dialog.id='portfolioVoiceNavigation';dialog.setAttribute('aria-labelledby','voiceNavigationTitle');dialog.innerHTML='<h2 id="voiceNavigationTitle">ניווט קולי</h2><p>אמרו את שם הלשונית או הנושא. בסיום אמרו <b>״נווט לשם״</b> או <b>״נווט עכשיו״</b>.</p><p id="voiceNavigationStatus" role="status" aria-live="polite"></p><label for="voiceNavigationText">הבקשה שלכם — אפשר גם להקליד</label><textarea id="voiceNavigationText" placeholder="למשל: נווט לעמוד הבית"></textarea><p id="voiceHookStatus" role="status"></p><div id="voiceMatches"></div><div class="voiceActions"><button type="button" class="voicePrimary" id="voiceNavigateNow">נווט עכשיו</button><button type="button" id="voiceMic">הפעל מיקרופון</button><button type="button" id="voiceRestart">התחל מחדש</button><button type="button" id="voiceClose">סגור ניווט</button></div><div id="voiceOptions" hidden><p>אמרו מספר אפשרות, או לחצו עליה. ללא בחירה החלון ייסגר לאחר דקה.</p><div class="voiceActions"><button type="button" data-choice="1">1 — תתחיל מחדש</button><button type="button" data-choice="2">2 — נווט לפי מה שנאמר</button><button type="button" data-choice="3">3 — סגור ניווט</button></div></div>';
    document.body.appendChild(dialog);field=dialog.querySelector('textarea');status=dialog.querySelector('#voiceNavigationStatus');hookStatus=dialog.querySelector('#voiceHookStatus');options=dialog.querySelector('#voiceOptions');matches=dialog.querySelector('#voiceMatches');mic=dialog.querySelector('#voiceMic');
    dialog.querySelector('#voiceNavigateNow').onclick=()=>navigate();dialog.querySelector('#voiceRestart').onclick=begin;dialog.querySelector('#voiceClose').onclick=close;
    mic.onclick=()=>{blocked=false;window.speechSynthesis?.cancel();speaking=false;listen();};
    options.querySelectorAll('button').forEach(b=>b.onclick=()=>b.dataset.choice==='1'?begin():b.dataset.choice==='2'?navigate():close());
    field.addEventListener('focus',()=>{stopListening();window.speechSynthesis?.cancel();speaking=false;});
    field.addEventListener('input',()=>{if(mode==='choices'){mode='listen';options.hidden=true;clearTimeout(timer);timer=setTimeout(showChoices,30000);}});
    dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
  }
  function open(){
    if(active)return;if(!dialog)makeDialog();lastFocus=document.activeElement;active=true;session=window.crypto?.randomUUID?.()||String(Date.now());dialog.showModal();
    document.querySelectorAll('#pageReadButton,#englishPageReadButton').forEach(b=>{if(b.dataset.reading==='1')b.click();});
    begin();hookStatus.textContent='מחבר ל־Make…';const id=generation;
    siteMap().then(async mapping=>{let notified=false;try{notified=localStorage.getItem('portfolioVoiceMakeMapDate')===mapping.date;}catch{}const remap=mapping.remap||!notified;const response=await webhook('open',{remap,site_map:remap?mapping.entries:[],date:mapping.date});try{localStorage.setItem('portfolioVoiceMakeMapDate',mapping.date);}catch{}return response;}).then(()=>{if(active&&id===generation)hookStatus.textContent='Make קיבל את הלחיצה. הניווט מוכן.';}).catch(()=>{if(active&&id===generation)hookStatus.textContent='Make לא אישר את הלחיצה. אפשר עדיין לנווט באתר.';});
  }
  window.PortfolioVoiceNavigation={open};
})();