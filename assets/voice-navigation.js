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
    ['military.html','שירות צבאי',['צבא','הצבא','צבאי','צבאית','שרות צבאי','צה ל','צהל','שירות ביטחון']],
    ['skills.html','יכולות',['כישורים','יכולות וכישורים']],
    ['advantages.html','היתרונות שלי',['יתרונות']],
    ['contact.html','צור איתי קשר',['יצירת קשר','צור קשר','קשר']]
  ];
  const normalize=s=>String(s||'').toLowerCase().replace(/[\u0591-\u05c7]/g,'').replace(/[^a-z0-9\u05d0-\u05ea ]/g,' ').replace(/מ(?:א)?ג\s*י?\s*ק/g,'magic').replace(/פרוייקט/g,'פרויקט').replace(/נסיון/g,'ניסיון').replace(/בקבילה/g,'בקהילה').replace(/\s+/g,' ').trim();
  const intentions={
    'index.html':['עמוד ראשי','התחלה','חזור לבית','תחזור לבית','מסך ראשי','ראשי'],
    'experience.html':['איפה רונן עבד','איפה הוא עבד','איפה עבד','מקומות עבודה','קריירה','עבר מקצועי','רקע תעסוקתי','ניסיון מקצועי','תפקידים קודמים','תעסוקה'],
    'projects.html':['דוגמאות לדברים שפיתח','דברים שפיתח','מה הוא פיתח','מה רונן פיתח','מה הוא בנה','דוגמאות לעבודות','דוגמאות לפיתוח','פרויקטים שעשה','תיק עבודות','תוצרים','מיזמים'],
    'magic.html':['מתכנת','תכנות','מגיק','magic','מפתח תוכנה','פיתוח תוכנה','פיתוח מערכות','יכולות פיתוח','קוד'],
    'system.html':['מנתח','אפיון','אפיון מערכות','אפיון דרישות','ניתוח דרישות','ניתוח תהליכים','ארכיטקטורה','סיסטם אנליסט'],
    'product.html':['מוצר','אסטרטגיית מוצר','מפת דרכים','רודמאפ','ניהול מוצר','תיעדוף פיצרים','פרודקט מנגר','פרודקט מנג ר'],
    'project.html':['מנהל פרויקטים','ניהול פרויקטים','ניהול פרויקט','ניהול משימות','תכנון פרויקט','לוחות זמנים','פרוגקט מנגר','פרוג קט מנג ר'],
    'customer.html':['שירות לקוחות','הצלחת לקוחות','עבודה עם לקוחות','ניהול לקוחות','קסטומר סקסס','customer success'],
    'education.html':['מה למד','מה הוא למד','איפה למד','לימודים','קורסים','תעודות','הכשרות','הסמכות'],
    'military.html':['צבא','הצבא','איפה שירת','שירות צבאי','שרות צבאי','שירות בצבא','צה ל','צהל','צבאי','שירות ביטחון'],
    'skills.html':['מה הוא יודע לעשות','מה רונן יודע','כישורים','מיומנויות','במה הוא טוב','מסוגל','יכולות'],
    'advantages.html':['למה לבחור בו','למה לבחור ברונן','למה לגייס','מה מייחד','יתרון','יתרונות','הערך שמביא','מה מביא לארגון'],
    'contact.html':['איך לדבר איתו','לדבר עם רונן','לשלוח הודעה','יצירת קשר','טלפון','מייל','אימייל','לפנות לרונן'],
    'work-environments.html':['סוגי מערכות','סביבות עבודה','טכנולוגיות שעבד','באילו מערכות','מערכות שעבד']
  };
  const stem=w=>w.length>4?w.replace(/^[בלהומש](?=[\u05d0-\u05ea]{3})/,''):w;
  const tokens=text=>normalize(text).split(' ').filter(w=>w.length>1&&!['אני','רוצה','תראה','תציג','תפתח','אפשר','את','של','על','לי','הוא','רונן','לראות','נווט','עכשיו','לשם','עמוד','לשונית','בבקשה','תעבור','עבור'].includes(w)).map(w=>({מנתח:'ניתוח',מאפיין:'אפיון'}[w]||w)).map(stem);
  function distance(a,b){const row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){let prev=row[0];row[0]=i;for(let j=1;j<=b.length;j++){const before=row[j];row[j]=Math.min(row[j]+1,row[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));prev=before;}}return row[b.length];}
  function sound(word){return word.replace(/[כקח]/g,'ק').replace(/[טת]/g,'ת').replace(/[סש]/g,'ס').replace(/[אעהוי]/g,'').replace(/(.)\1+/g,'$1');}
  const command=/נו{1,3}ט\s+(?:עכשיו|לשם)/g;
  let dialog,field,status,hookStatus,options,matches,mic,recognition=null,timer,retryTimer,speechTimer,commandTimer;
  let active=false,mode='listen',speaking=false,blocked=false,session='',generation=0,mapPromise,mapDate='',entries=[],lastFocus;
  let microphoneStream=null,microphonePending=null,voiceContext=null,voiceSource=null,voiceRequest=null,speechRun=0;
  let candidates=[];
  let draft='';try{draft=sessionStorage.getItem('portfolioVoiceDraft')||'';}catch{}
  let wakeRecognition=null,wakeTimer=null,wakePermission=false;
  function stopWakeListening(){clearTimeout(wakeTimer);if(wakeRecognition){const rec=wakeRecognition;wakeRecognition=null;rec.onend=null;rec.onresult=null;rec.onerror=null;try{rec.abort();}catch{}}}
  function startWakeListening(){
    if(active||!wakePermission||document.visibilityState==='hidden'||wakeRecognition)return;
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Speech)return;
    const rec=new Speech();wakeRecognition=rec;rec.lang='he-IL';rec.continuous=true;rec.interimResults=false;
    rec.onresult=event=>{
      if(active||wakeRecognition!==rec||document.visibilityState==='hidden' )return;
      const reading=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');if(window.speechSynthesis?.speaking&&!reading)return;
      for(let i=event.resultIndex||0;i<event.results.length;i++){
        if(!event.results[i].isFinal)continue;const text=normalize(event.results[i][0].transcript);
        if(handleNarrationCommand(text))return;
        if(reading)continue;
        if(isReadPageRequest(text)){readCurrentPage();return;}
        if(/(?:אל|לא)\s+(?:תפעיל|הפעל|להפעיל)/.test(text))continue;
        if(/(?:^|\s)(?:הפעל|תפעיל|הפעילי|תפעילי)\s+(?:את\s+)?(?:ה)?ניווט\s+(?:ה)?קולי(?:$|\s)/.test(text)){
          stopWakeListening();const button=document.getElementById('site_voice_nevegation');if(button)button.click();else open();return;
        }
      }
    };
    rec.onend=()=>{if(wakeRecognition===rec){wakeRecognition=null;if(!active&&wakePermission)wakeTimer=setTimeout(startWakeListening,700);}};
    rec.onerror=()=>{if(wakeRecognition===rec){stopWakeListening();}};
    try{rec.start();const button=document.getElementById('site_voice_nevegation');if(button)button.title='המיקרופון מאזין לפקודה: הפעל ניווט קולי';}catch{stopWakeListening();}
  }
  async function checkWakePermission(){if(!navigator.permissions?.query)return;try{const permission=await navigator.permissions.query({name:'microphone'});wakePermission=permission.state==='granted';if(wakePermission)startWakeListening();permission.onchange=()=>{wakePermission=permission.state==='granted';if(wakePermission)startWakeListening();else stopWakeListening();};}catch{}}
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')stopWakeListening();else if(!active)checkWakePermission();});
  window.addEventListener('pagehide',stopWakeListening);
  checkWakePermission();
  function saveDraft(value){draft=String(value||'').slice(0,1500);if(field)field.value=draft;try{sessionStorage.setItem('portfolioVoiceDraft',draft);}catch{}}
  const day=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jerusalem',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const currentPage=()=>location.pathname.split('/').pop()||'index.html';
  const mapVersion=3;
  function sectionAliases(title){
    const text=normalize(title),aliases=[];
    const groups=[
      [/^התנדבות(?: בקהילה)?$/,['התנדבות','התנדבות בקהילה','תרומה לקהילה','פעילות קהילתית','עזרה לנזקקים','סיוע לקהילה']],
      [/סוגי פיתוח מערכות/,['סוגי פיתוח','תחומי פיתוח מערכות','דרכי פיתוח','איך מפתח מערכות','סוגי תוכנות שפיתח']],
      [/יתרונות|business functional technical/,['יתרונות','יתרונות שלי','היתרונות שלי','למה לבחור ברונן','מה מייחד אותו']],
      [/^צבא$/,['צבא','צבאי','שרות צבאי','שירות צבאי','צה ל','צהל']]
    ];
    for(const [pattern,words] of groups)if(pattern.test(text))aliases.push(...words);
    return [...new Set(aliases)];
  }
  function refreshCurrentSections(){
    entries=entries.filter(entry=>entry.kind!=='section'||entry.path.split('#')[0]!==currentPage());
    markSections(document).forEach(h=>{if(h.title)entries.push({path:currentPage()+'#'+h.id,title:h.title,kind:'section',aliases:sectionAliases(h.title)});});
  }
  function markSections(root){return [...root.querySelectorAll('main h1,main h2,main h3,main h4,main .rdSystemCards article>span')].map((h,i)=>{if(!h.id)h.id='voice-section-'+i;return {title:h.textContent.trim().slice(0,160),id:h.id}});}
  function revealHash(){if(!location.hash.startsWith('#voice-section-'))return;markSections(document);const target=document.getElementById(location.hash.slice(1));if(!target)return;for(let p=target.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;const offset=Math.max(0,...[...document.querySelectorAll('.top,#pageReadTopicControls')].map(el=>getComputedStyle(el).position==='fixed'?el.getBoundingClientRect().bottom:0));window.scrollTo({top:scrollY+target.getBoundingClientRect().top-offset-20,behavior:'instant'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(revealHash,700));else setTimeout(revealHash,700);
  function baseMap(){return pages.map(([path,title,aliases])=>({path,title,aliases,kind:'page'}));}
  async function siteMap(){
    const date=day();if(mapPromise&&mapDate===date)return mapPromise;
    mapDate=date;mapPromise=(async()=>{
      try{const cached=JSON.parse(localStorage.getItem('portfolioVoiceMap')||'null');if(cached?.version===mapVersion&&cached?.date===date&&Array.isArray(cached.entries)&&cached.entries.length){entries=cached.entries;refreshCurrentSections();return {entries,remap:false,date};}}catch{}
      const collected=baseMap();let complete=true;
      await Promise.all(pages.map(async([path])=>{try{let doc;if(path===currentPage())doc=document;else{const response=await fetch('/'+path,{signal:AbortSignal.timeout(6000)});if(!response.ok)throw Error();doc=new DOMParser().parseFromString(await response.text(),'text/html');}markSections(doc).forEach(h=>{if(h.title)collected.push({path:path+'#'+h.id,title:h.title,kind:'section',aliases:sectionAliases(h.title)})});}catch{complete=false;}}));
      entries=collected;if(complete)try{localStorage.setItem('portfolioVoiceMap',JSON.stringify({date,version:mapVersion,entries}));}catch{}
      return {entries,remap:true,date};
    })();return mapPromise;
  }
  async function webhook(action,data={}){
    const response=await fetch('/api/voice-navigation',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,session_id:session,page:currentPage(),date:day(),...data}),signal:AbortSignal.timeout(15000)});
    const result=await response.json();if(!response.ok||!result.ok)throw Error(result.error||'Make unavailable');return result;
  }
  function stopListening(){clearTimeout(retryTimer);clearTimeout(commandTimer);if(recognition){const old=recognition;recognition=null;old.onend=null;old.onresult=null;old.onerror=null;try{old.abort();}catch{}}}
  function hasCommand(text){command.lastIndex=0;return command.test(normalize(text));}
  function stopSpeech(){speechRun++;clearTimeout(speechTimer);voiceRequest?.abort();voiceRequest=null;if(voiceSource){voiceSource.onended=null;try{voiceSource.stop();}catch{}voiceSource=null;}window.speechSynthesis?.cancel();speaking=false;}
  function requestMicrophone(){
    if(microphoneStream||microphonePending||!navigator.mediaDevices?.getUserMedia)return;
    const token=session;
    microphonePending=navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{if(!active||session!==token){stream.getTracks().forEach(track=>track.stop());return;}microphoneStream=stream;wakePermission=true;mic.textContent='חדש האזנה';}).catch(()=>{if(active&&session===token){blocked=true;status.textContent='יש לאשר גישה למיקרופון כדי לנווט בקול.';say(status.textContent);}}).finally(()=>{microphonePending=null;});
  }
  function syncToggle(){const button=document.getElementById('site_voice_nevegation');if(button){const he=document.documentElement.lang!=='en';button.textContent=active?(he?'הפסק ניווט קולי':'Stop voice navigation'):(he?'ניווט קולי':'Voice navigation');button.setAttribute('aria-pressed',String(active));}}
  function close(){generation++;active=false;clearTimeout(timer);stopListening();stopSpeech();microphoneStream?.getTracks().forEach(track=>track.stop());microphoneStream=null;if(dialog?.open)dialog.close();syncToggle();lastFocus?.focus();startWakeListening();}
  function spokenClose(text='חלון הניווט נסגר.'){clearTimeout(timer);mode='navigate';say(text,close);}
  function say(text,after){
    stopListening();stopSpeech();speaking=true;const id=generation,run=speechRun;let finished=false;
    const done=()=>{if(finished||run!==speechRun)return;finished=true;clearTimeout(speechTimer);if(!active||id!==generation)return;speaking=false;after?.();};
    const native=()=>{if(!active||run!==speechRun)return;if(!window.speechSynthesis){done();return;}const utterance=new SpeechSynthesisUtterance(text);utterance.lang='he-IL';const voice=window.speechSynthesis.getVoices().find(v=>v.lang.startsWith('he'));if(voice)utterance.voice=voice;utterance.onend=done;utterance.onerror=done;speechTimer=setTimeout(()=>{window.speechSynthesis.cancel();done();},20000);window.speechSynthesis.speak(utterance);};
    if(window.speechSynthesis?.getVoices().some(v=>v.lang.startsWith('he'))||!voiceContext){native();return;}
    voiceRequest=new AbortController();const controller=voiceRequest;const limit=setTimeout(()=>controller.abort(),8000);
    fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,language:'he'}),signal:controller.signal}).then(async response=>{if(!response.ok)throw Error();const buffer=await voiceContext.decodeAudioData(await response.arrayBuffer());if(!active||run!==speechRun)return;voiceSource=voiceContext.createBufferSource();voiceSource.buffer=buffer;voiceSource.connect(voiceContext.destination);voiceSource.onended=()=>{voiceSource=null;done();};await voiceContext.resume();voiceSource.start();}).catch(native).finally(()=>{clearTimeout(limit);if(voiceRequest===controller)voiceRequest=null;});
  }
  function listen(){
    if(!active||speaking||blocked||mode==='navigate')return;
    if(microphonePending){microphonePending.then(()=>{if(active&&!speaking)listen();});return;}
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!Speech){blocked=true;status.textContent='זיהוי קולי אינו זמין בדפדפן הזה. יש לפתוח את האתר בדפדפן שתומך בזיהוי קולי.';say(status.textContent);return;}
    clearTimeout(retryTimer);if(recognition){const old=recognition;recognition=null;old.onend=null;old.onresult=null;old.onerror=null;try{old.abort();}catch{}}const rec=new Speech();recognition=rec;rec.lang='he-IL';rec.continuous=true;rec.interimResults=true;
    const prefix=['clarify','targets'].includes(mode)?'':field.value.trim();
    rec.onstart=()=>{if(active){mic.textContent='חדש האזנה';status.textContent=mode==='choices'?'המיקרופון פעיל ומקשיב לבחירה: 1, 2 או 3':'המיקרופון פעיל ומקשיב. בסיום אמרו ״נווט עכשיו״.';}};
    rec.onresult=e=>{
      if(!active||speaking||recognition!==rec)return;let words=[],allFinal=true;
      for(let i=0;i<e.results.length;i++){words.push(e.results[i][0].transcript);if(!e.results[i].isFinal)allFinal=false;}
      const spoken=words.join(' ').trim();
      if(allFinal&&handleVoiceChoice(spoken))return;
      if(mode==='choices'&&!hasCommand(spoken)){if(allFinal)chooseSpoken(spoken);return;}
      if(spoken){saveDraft([prefix,spoken].filter(Boolean).join(' '));}
      clearTimeout(commandTimer);
      if(hasCommand(field.value)){
        if(allFinal){navigate();return;}
        const captured=field.value,id=generation;
        commandTimer=setTimeout(()=>{if(active&&!speaking&&id===generation&&field.value===captured&&hasCommand(captured))navigate();},800);
      }
    };
    rec.onerror=e=>{if(!active||recognition!==rec)return;if(['not-allowed','service-not-allowed','audio-capture'].includes(e.error)){blocked=true;stopListening();status.textContent='המיקרופון אינו זמין או שלא ניתנה הרשאה. אשרו מיקרופון בדפדפן ואז הפעילו מחדש.';say(status.textContent);}else if(e.error==='network'){blocked=true;stopListening();status.textContent='שירות הזיהוי הקולי אינו זמין כרגע. נסו לפתוח את האתר בדפדפן אחר או לחדש האזנה.';say(status.textContent);}};
    rec.onend=()=>{if(recognition===rec){recognition=null;if(active&&!speaking&&!['clarify','targets'].includes(mode)&&hasCommand(field.value)){navigate();return;}if(active&&!speaking&&!blocked&&mode!=='navigate')retryTimer=setTimeout(listen,350);}};
    try{rec.start();}catch{recognition=null;status.textContent='לא ניתן להתחיל האזנה. אשרו מיקרופון ונסו שוב.';say(status.textContent);}
  }
  function begin(reset=true){
    generation++;mode='listen';candidates=[];blocked=false;if(reset)saveDraft('');else saveDraft(draft);matches.replaceChildren();options.hidden=true;clearTimeout(timer);status.textContent='האזינו להנחיות, ואז אמרו לאן תרצו לעבור.';
    say('יש להגיד את הלשונית או הנושא שאליו רוצים לעבור. בסיום תגידו נווט לשם, או נווט עכשיו.',()=>{listen();timer=setTimeout(showChoices,30000);});
  }
  function showChoices(){if(!active||mode==='navigate')return;if(field.value.trim()){saveDraft(field.value);navigate();return;}mode='choices';options.hidden=false;status.textContent='לא נקלט יעד לניווט. בחרו אפשרות ואמרו מספר מ־1 עד 3.';say('לא נקלט יעד לניווט. בחרו אחת משלוש אפשרויות ואמרו את המספר. אחת, תתחיל מחדש. שתיים, נווט לפי מה שנאמר. שלוש, סגור ניווט.',()=>{listen();timer=setTimeout(()=>spokenClose('לא נבחרה אפשרות. חלון הניווט נסגר.'),60000);});}
  function voiceNumber(text){const value=normalize(text);const names=[['1','אחת','אחד','ראשונה','ראשון'],['2','שתיים','שתים','שניים','שנים','שנייה','שניה','שני'],['3','שלוש','שלושה','שלישית','שלישי'],['4','ארבע','ארבעה','רביעית'],['5','חמש','חמישה','חמישית']];return names.findIndex(group=>group.some(word=>value.split(' ').includes(word)))+1;}
  let lastNarrationCommand='',lastNarrationTime=0;
  function handleNarrationCommand(text){
    const reader=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');if(!reader)return false;
    const value=normalize(text);
    if(/(?:אל|לא)\s+(?:תעבור|עבור|תדלג|דלג|תחזור|חזור|תתקדם|תמשיך)/.test(value))return false;
    const next=/(?:^|\s)(?:ה?בא|ה?באה|קדימה|next)(?:\s|$)/.test(value);
    const previous=/(?:^|\s)(?:ה?קודם|ה?קודמת|אחורה|previous|prev)(?:\s|$)/.test(value);
    if(next===previous)return false;
    const subject=/(?:^|\s)(?:ל?(?:ה)?פרק|ל?(?:ה)?נושא|ל?(?:ה)?חלק|ל?(?:ה)?קטע|chapter|topic|section)(?:\s|$)/.test(value);
    const action=/(?:^|\s)(?:עבור|תעבור|העבר|תעביר|דלג|תדלג|המשך|תמשיך|תקדם|תתקדם|לעבור|להתקדם|לחזור|קפוץ|תחזור|חזור|חזרי|תחזרי|go|skip)(?:\s|$)/.test(value);
    const short=/^(?:ה?פרק|ה?נושא|ה?חלק|ה?קטע)\s+(?:ה?בא|ה?באה|ה?קודם|ה?קודמת)$/.test(value)||/^(?:קדימה|אחורה|next topic|previous topic)$/.test(value);
    if(!(subject&&(action||short))&&!(action&&/(?:קדימה|אחורה)/.test(value))&&!short)return false;
    const now=Date.now();if(value===lastNarrationCommand&&now-lastNarrationTime<1200)return true;
    const step=next?1:-1,row=document.getElementById('pageReadTopicControls');
    const button=row?.querySelector('button[data-read-step="'+step+'"]')||[...(row?.querySelectorAll('button')||[])].find(b=>!['pageReadButton','englishPageReadButton'].includes(b.id)&&(step===1?/הנושא הבא|next topic/i:/הנושא הקודם|previous topic/i).test(b.textContent));
    if(!button)return false;lastNarrationCommand=value;lastNarrationTime=now;button.click();return true;
  }
  function isReadPageRequest(text){
    const value=normalize(text);
    if(/(?:אל|לא)\s+(?:תקרא|תקריא|הקרא|קרא|להקריא|תפעיל|השמע)/.test(value))return false;
    if(/\bread(?: this| the)? page\b|\bread aloud\b/.test(value))return true;
    const action=/(?:^|\s)(?:הקרא|הקריא|הקראה|הקראת|תקרא|תקריא|קרא|להקריא|השמע|תשמיע|השמיע)(?:\s|$)/.test(value);
    return action&&/(?:^|\s)(?:ה?דף|ה?עמוד|ה?אתר|ה?תוכן)(?:\s|$)|מה שכתוב|בקול/.test(value);
  }
  function readCurrentPage(){
    const reader=document.getElementById(document.documentElement.lang==='en'?'englishPageReadButton':'pageReadButton');
    if(!reader){if(active)say('ההקראה אינה זמינה בעמוד הזה.',listen);return;}
    if(active)close();else stopWakeListening();
    if(reader.dataset.reading!=='1')reader.click();
    startWakeListening();
  }
  function handleVoiceChoice(text){if(handleNarrationCommand(text))return true;if(isReadPageRequest(text)){readCurrentPage();return true;}const value=normalize(text);if(/סגור(?: את)?(?: ה)?(?:ניווט|חלון)|סגור ניווט/.test(value)){spokenClose();return true;}if(/(?:תתחיל|התחל|תתחילי|להתחיל) מחדש/.test(value)){begin();return true;}const number=voiceNumber(text);if(mode==='targets'&&number>0){const target=candidates[number-1];if(target)navigate(target);else say('בחרו מספר מתוך האפשרויות שהקראתי.',listen);return true;}if(mode==='choices'&&number>0){chooseSpoken(text);return true;}return false;}
  function chooseSpoken(text){const value=normalize(text);if(/(?:^|\s)(1|אחת|אחד|ראשונה)(?:\s|$)/.test(value))begin();else if(/(?:^|\s)(2|שתיים|שתים|שניים|שנים|שנייה)(?:\s|$)/.test(value))navigate();else if(/(?:^|\s)(3|שלוש|שלושה|שלישית)(?:\s|$)/.test(value))spokenClose();}
  function resolve(text){
    refreshCurrentSections();
    command.lastIndex=0;const query=normalize(text).replace(command,' ').replace(/(?:^|\s)(?:נו{1,3}ט|תעבור|עבור|לעבור|בבקשה|אל)(?=\s|$)/g,' ').replace(/\s+/g,' ').trim();
    if(/(?:^|\s)(?:ל?עמוד הבית|ל?דף הבית|ל?בית)(?:\s|$)/.test(query))return [{path:document.documentElement.lang==='en'?'index-en.html':'index.html',title:'עמוד הבית'}];
    if(!query)return [];
    const queryTokens=tokens(query),explicitPage=/(?:לשונית|טאב|עמוד|דף)\s/.test(query),sectionHints=queryTokens.filter(w=>['קורס','קורסים','השכלה','שכלה','ניסיון','כישורים','כישרורים','יכולות','הכשרה','יתרונות','השירות','השגים'].includes(w));
    const ranked=entries.filter(entry=>!explicitPage||entry.kind==='page').map(entry=>{let score=0;const labels=[entry.title,...(entry.aliases||[]),...(entry.kind==='page'?intentions[entry.path]||[]:[])];for(const label of labels){const name=normalize(label);if(!name)continue;if(query===name||query==='ל'+name)score=Math.max(score,100+(entry.kind==='page'?10:0));else if(name.length>=3&&query.includes(name))score=Math.max(score,65+Math.min(name.length,25));else{const wanted=tokens(name);if(!wanted.length)continue;let hits=0;for(const word of wanted){if(queryTokens.some(q=>q===word))hits+=1;else if(word.length>=4&&queryTokens.some(q=>q.length>=4&&distance(q,word)<= (Math.max(q.length,word.length)>=7?2:1)))hits+=0.8;else if(word.length>=3&&queryTokens.some(q=>q.length>=3&&sound(q).length>=2&&sound(q)===sound(word)))hits+=0.75;}if(hits===wanted.length)score=Math.max(score,58+Math.min(wanted.length*6,24));else if(hits>=0.75&&hits/wanted.length>=0.65)score=Math.max(score,45+hits*6);}}if(score>0&&entry.kind==='section'){const heading=tokens(entry.title);if(sectionHints.some(h=>heading.includes(h)))score+=25;if(entry.path.split('#')[0]===currentPage())score+=8;}return {entry,score};}).filter(x=>x.score>=45).sort((a,b)=>b.score-a.score);
    if(!ranked.length)return [];const local=!explicitPage?ranked.filter(item=>item.entry.kind==='section'&&item.entry.path.split('#')[0]===currentPage()&&item.score>=80):[];const search=local.length?local:ranked;const best=search[0].score;const unique=search.filter((x,i,a)=>a.findIndex(y=>y.entry.path===x.entry.path)===i);if(best>=55&&(!unique[1]||best-unique[1].score>=8))return [unique[0].entry];return unique.filter(x=>best-x.score<8).map(x=>x.entry).slice(0,5);
  }
  async function navigate(chosen){
    if(!active||mode==='navigate')return;clearTimeout(timer);stopListening();stopSpeech();mode='navigate';options.hidden=true;const id=generation;
    status.textContent='מחפש את העמוד או הנושא…';await siteMap();if(!active||id!==generation)return;
    const targets=chosen?[chosen]:resolve(field.value);
    if(targets.length!==1){candidates=targets;mode=targets.length?'targets':'clarify';matches.replaceChildren();status.textContent=targets.length?'נמצאו כמה יעדים מתאימים. '+targets.map((target,index)=>(index+1)+', '+target.title).join('. ')+'. אמרו את מספר היעד, או את שמו.':'לא מצאתי לשונית או חלק שמתאימים לבקשה. הבקשה נשמרה. אמרו שוב את היעד בניסוח אחר.';say(status.textContent,listen);return;}
    const target=targets[0];status.textContent='מעביר אל '+target.title+'…';
    try{await webhook('navigate',{transcript:field.value,target:target.path});hookStatus.textContent='Make קיבל את בקשת הניווט.';}catch{hookStatus.textContent='Make לא אישר את הבקשה. הניווט באתר יתבצע לפי היעד שנמצא.';}
    if(!active||id!==generation)return;const url=new URL(target.path,location.origin);if(url.origin!==location.origin)return;
    await new Promise(resolve=>say('מעביר כעת אל '+target.title,resolve));if(!active||id!==generation)return;saveDraft('');close();if(url.pathname===location.pathname&&url.hash){location.hash=url.hash;revealHash();}else if(url.pathname===location.pathname&&!url.hash){window.scrollTo({top:0,behavior:'instant'});}else location.assign(url.href);
  }
  function makeDialog(){
    const style=document.createElement('style');style.id='portfolioVoiceNavigationStyle';style.textContent='#portfolioVoiceNavigation{position:fixed;top:50%;left:50%;margin:0;transform:translate(-50%,-50%);z-index:99997;direction:rtl;width:min(520px,calc(100vw - 32px));max-height:calc(100dvh - 32px);box-sizing:border-box;overflow:auto;padding:24px;border:1px solid #d5e0ed;border-radius:18px;background:#fff;color:#102235;box-shadow:0 16px 60px #10223540;font-family:inherit}#portfolioVoiceNavigation::backdrop{background:#10223590}#portfolioVoiceNavigation h2{margin:0 0 12px;font-size:25px}#portfolioVoiceNavigation p{line-height:1.6;margin:10px 0}#portfolioVoiceNavigation textarea{box-sizing:border-box;width:100%;min-height:85px;padding:12px;border:1px solid #bbcddd;border-radius:10px;font:inherit;resize:vertical;color:#102235;background:#fff}#portfolioVoiceNavigation .voiceActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}#portfolioVoiceNavigation button{min-height:42px;padding:10px 14px;border:1px solid #ccd9e7;border-radius:9px;font:inherit;cursor:pointer;background:#edf3ff;color:#195ed8}#portfolioVoiceNavigation button:focus-visible,#portfolioVoiceNavigation textarea:focus-visible{outline:3px solid #195ed8;outline-offset:2px}#portfolioVoiceNavigation button.voicePrimary{background:#195ed8;color:#fff}#portfolioVoiceNavigation [hidden]{display:none!important}#voiceHookStatus{font-size:13px;color:#54677a}#voiceMatches{display:flex;gap:8px;flex-wrap:wrap}';document.head.appendChild(style);
    dialog=document.createElement('dialog');dialog.id='portfolioVoiceNavigation';dialog.setAttribute('aria-labelledby','voiceNavigationTitle');dialog.innerHTML='<h2 id="voiceNavigationTitle">ניווט קולי</h2><div class="voiceIndicator" aria-hidden="true">🎙️</div><input type="hidden" id="voiceNavigationText"><p id="voiceNavigationStatus" hidden></p><p id="voiceHookStatus" hidden></p><div id="voiceMatches" hidden></div><div class="voiceActions"><button type="button" id="voiceMic">חדש האזנה</button><button type="button" id="voiceRestart">התחל מחדש</button><button type="button" id="voiceClose">סגור ניווט</button></div><div id="voiceOptions" aria-hidden="true" hidden></div>';
    const visual=document.createElement('style');visual.textContent='#portfolioVoiceNavigation .voiceIndicator{text-align:center;font-size:54px;margin:20px 0}#portfolioVoiceNavigation .voiceActions{justify-content:center}#portfolioVoiceNavigation #voiceOptions{display:none!important}';document.head.appendChild(visual);
    document.body.appendChild(dialog);field=dialog.querySelector('input[type=hidden]');status=dialog.querySelector('#voiceNavigationStatus');hookStatus=dialog.querySelector('#voiceHookStatus');options=dialog.querySelector('#voiceOptions');matches=dialog.querySelector('#voiceMatches');mic=dialog.querySelector('#voiceMic');
    dialog.querySelector('#voiceRestart').onclick=()=>begin();dialog.querySelector('#voiceClose').onclick=()=>spokenClose();
    mic.onclick=()=>{blocked=false;stopSpeech();requestMicrophone();listen();};
    dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
    document.addEventListener('keydown',e=>{if(active&&e.key==='Escape'){e.preventDefault();close();}});
  }
  function open(){
    if(active)return;stopWakeListening();if(!dialog)makeDialog();lastFocus=document.activeElement;active=true;session=window.crypto?.randomUUID?.()||String(Date.now());dialog.show();syncToggle();
    const Context=window.AudioContext||window.webkitAudioContext;if(Context&&!voiceContext)voiceContext=new Context();voiceContext?.resume().catch(()=>{});requestMicrophone();
    document.querySelectorAll('#pageReadButton,#englishPageReadButton').forEach(b=>{if(b.dataset.reading==='1')b.click();});
    begin(false);hookStatus.textContent='מחבר ל־Make…';const id=generation;
    siteMap().then(async mapping=>{let notified=false;try{notified=localStorage.getItem('portfolioVoiceMakeMapDate')===mapping.date;}catch{}const remap=mapping.remap||!notified;const response=await webhook('open',{remap,site_map:remap?mapping.entries:[],date:mapping.date});try{localStorage.setItem('portfolioVoiceMakeMapDate',mapping.date);}catch{}return response;}).then(()=>{if(active&&id===generation)hookStatus.textContent='Make קיבל את הלחיצה. הניווט מוכן.';}).catch(()=>{if(active&&id===generation)hookStatus.textContent='Make לא אישר את הלחיצה. אפשר עדיין לנווט באתר.';});
  }
  window.PortfolioVoiceNavigation={open,close,isActive:()=>active};
})();