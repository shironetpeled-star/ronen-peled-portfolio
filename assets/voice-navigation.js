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
  const normalize=s=>String(s||'').toLowerCase().replace(/[\u0591-\u05c7]/g,'').replace(/[^a-z0-9\u05d0-\u05ea ]/g,' ').replace(/מ(?:א)?ג\s*י?\s*ק/g,'magic').replace(/פרוייקט/g,'פרויקט').replace(/נסיון/g,'ניסיון').replace(/\s+/g,' ').trim();
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
    'military.html':['איפה שירת','שירות צבאי','שירות בצבא','צה ל','צבאי'],
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
  let draft='';try{draft=sessionStorage.getItem('portfolioVoiceDraft')||'';}catch{}
  let recorder=null,captureTimer=null,captureSource=null,captureHasSpeech=false,transcribing=false,heardSpeech=false;
  function saveDraft(value){draft=String(value||'').slice(0,1500);if(field)field.value=draft;try{sessionStorage.setItem('portfolioVoiceDraft',draft);}catch{}}
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
  function stopCapture(){clearInterval(captureTimer);captureSource?.disconnect();captureSource=null;if(recorder){const old=recorder;recorder=null;old.onstop=null;if(old.state!=='inactive')try{old.stop();}catch{}}}
  function stopListening(){clearTimeout(retryTimer);clearTimeout(commandTimer);stopCapture();if(recognition){const old=recognition;recognition=null;old.onend=null;old.onresult=null;old.onerror=null;try{old.abort();}catch{}}}
  function captureSpeech(){
    if(recorder||transcribing||!microphoneStream||!window.MediaRecorder||!voiceContext?.createMediaStreamSource)return;
    try{
      const rec=new MediaRecorder(microphoneStream,{audioBitsPerSecond:64000});recorder=rec;captureHasSpeech=false;const chunks=[],id=generation,prefix=field.value.trim();let lastSound=0;
      captureSource=voiceContext.createMediaStreamSource(microphoneStream);const analyser=voiceContext.createAnalyser();analyser.fftSize=1024;captureSource.connect(analyser);const samples=new Float32Array(analyser.fftSize);
      rec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
      rec.onstop=async()=>{
        clearInterval(captureTimer);captureSource?.disconnect();captureSource=null;if(recorder===rec)recorder=null;if(!active||id!==generation||speaking||!captureHasSpeech)return;
        if(field.value.trim()&&hasCommand(field.value)){navigate();return;}
        const blob=new Blob(chunks,{type:rec.mimeType});if(blob.size<100)return;transcribing=true;status.textContent='הקול נקלט. מתמלל את הבקשה…';
        const original=field.value;
        try{const audio=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result).split(',')[1]);reader.onerror=reject;reader.readAsDataURL(blob);});const response=await fetch('/api/voice-transcript',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({audio,type:rec.mimeType.split(';')[0]}),signal:AbortSignal.timeout(25000)});if(!response.ok)throw Error();const result=await response.json();if(!active||id!==generation||speaking||field.value!==original)return;if(result.text?.trim()){if(mode==='choices'&&/^(?:אפשרות\s*)?(?:1|2|3|אחד|אחת|שתיים|שתים|שניים|שלוש|שלושה)[.!\s]*$/.test(result.text.trim())){chooseSpoken(result.text);return;}saveDraft([prefix,result.text].filter(Boolean).join(' '));if(mode==='choices'){mode='listen';options.hidden=true;}if(hasCommand(field.value)||resolve(field.value).length===1){transcribing=false;navigate();return;}status.textContent='נקלטה ונשמרה הבקשה: '+field.value;}else status.textContent='לא זוהה טקסט בקול שנקלט. אפשר להקליד את הבקשה.';}catch{if(active&&id===generation)status.textContent='הקול נקלט, אך התמלול לא הצליח. אפשר להקליד את היעד.';}finally{transcribing=false;if(active&&id===generation&&!speaking&&mode!=='navigate')captureSpeech();}
      };
      rec.start();captureTimer=setInterval(()=>{if(!active||speaking||id!==generation){stopCapture();return;}analyser.getFloatTimeDomainData(samples);const level=Math.sqrt(samples.reduce((sum,n)=>sum+n*n,0)/samples.length);if(level>0.025){captureHasSpeech=true;heardSpeech=true;lastSound=Date.now();}if(captureHasSpeech&&Date.now()-lastSound>1500&&rec.state==='recording')rec.stop();},150);
    }catch{stopCapture();}
  }
  function hasCommand(text){command.lastIndex=0;return command.test(normalize(text));}
  function stopSpeech(){speechRun++;clearTimeout(speechTimer);voiceRequest?.abort();voiceRequest=null;if(voiceSource){voiceSource.onended=null;try{voiceSource.stop();}catch{}voiceSource=null;}window.speechSynthesis?.cancel();speaking=false;}
  function requestMicrophone(){
    if(microphoneStream||microphonePending||!navigator.mediaDevices?.getUserMedia)return;
    const token=session;
    microphonePending=navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{if(!active||session!==token){stream.getTracks().forEach(track=>track.stop());return;}microphoneStream=stream;mic.textContent='חדש האזנה';}).catch(()=>{if(active&&session===token){blocked=true;status.textContent='יש לאשר גישה למיקרופון כדי לנווט בקול. אפשר גם להקליד.';}}).finally(()=>{microphonePending=null;});
  }
  function close(){generation++;active=false;clearTimeout(timer);stopListening();stopSpeech();microphoneStream?.getTracks().forEach(track=>track.stop());microphoneStream=null;if(dialog?.open)dialog.close();lastFocus?.focus();}
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
    captureSpeech();
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!Speech){status.textContent=recorder?'המיקרופון פעיל. אמרו את היעד וסיימו ב״נווט עכשיו״.':'זיהוי קולי אינו זמין בדפדפן הזה. אפשר להקליד את הבקשה וללחוץ על נווט עכשיו.';return;}
    clearTimeout(retryTimer);if(recognition){const old=recognition;recognition=null;old.onend=null;old.onresult=null;old.onerror=null;try{old.abort();}catch{}}const rec=new Speech();recognition=rec;rec.lang='he-IL';rec.continuous=true;rec.interimResults=true;
    const prefix=mode==='clarify'?'':field.value.trim();
    rec.onstart=()=>{if(active){mic.textContent='חדש האזנה';status.textContent=mode==='choices'?'המיקרופון פעיל ומקשיב לבחירה: 1, 2 או 3':'המיקרופון פעיל ומקשיב. בסיום אמרו ״נווט עכשיו״.';}};
    rec.onresult=e=>{
      if(!active||speaking||recognition!==rec)return;let words=[],allFinal=true;
      for(let i=0;i<e.results.length;i++){words.push(e.results[i][0].transcript);if(!e.results[i].isFinal)allFinal=false;}
      const spoken=words.join(' ').trim();
      if(mode==='choices'&&!hasCommand(spoken)){if(allFinal)chooseSpoken(spoken);return;}
      if(spoken){heardSpeech=true;saveDraft([prefix,spoken].filter(Boolean).join(' '));}
      clearTimeout(commandTimer);
      if(hasCommand(field.value)){
        if(allFinal){navigate();return;}
        const captured=field.value,id=generation;
        commandTimer=setTimeout(()=>{if(active&&!speaking&&id===generation&&field.value===captured&&hasCommand(captured))navigate();},800);
      }
    };
    rec.onerror=e=>{if(!active||recognition!==rec)return;if(['not-allowed','service-not-allowed','audio-capture','network'].includes(e.error)){rec.onend=null;recognition=null;if(recorder){status.textContent='המיקרופון פעיל. הקול יתומלל בסיום הדיבור.';}else{blocked=true;status.textContent='שירות הזיהוי הקולי אינו זמין. אפשר להקליד את הבקשה.';}}};
    rec.onend=()=>{if(recognition===rec){recognition=null;if(active&&!speaking&&mode!=='clarify'&&hasCommand(field.value)){navigate();return;}if(active&&!speaking&&!blocked&&mode!=='navigate')retryTimer=setTimeout(listen,350);}};
    try{rec.start();}catch{recognition=null;status.textContent='אפשר להקליד את הבקשה או ללחוץ על הפעל מיקרופון.';}
  }
  function begin(reset=true){
    generation++;mode='listen';blocked=false;heardSpeech=false;if(reset)saveDraft('');else saveDraft(draft);matches.replaceChildren();options.hidden=true;clearTimeout(timer);status.textContent='האזינו להנחיות, ואז אמרו לאן תרצו לעבור.';
    say('יש להגיד את הלשונית או הנושא שאליו רוצים לעבור. בסיום תגידו נווט לשם, או נווט עכשיו.',()=>{listen();timer=setTimeout(showChoices,30000);});
  }
  function showChoices(){if(!active||mode==='navigate')return;if(transcribing){timer=setTimeout(showChoices,1000);return;}if(recorder&&captureHasSpeech){if(recorder.state==='recording')recorder.stop();timer=setTimeout(showChoices,1000);return;}if(field.value.trim()){saveDraft(field.value);navigate();return;}if(heardSpeech){mode='clarify';options.hidden=true;status.textContent='הקול נקלט אך לא זוהה יעד ברור. נסו לומר שוב את הלשונית או החלק, או הקלידו.';return;}mode='choices';options.hidden=false;status.textContent='לא נקלט יעד לניווט. בחרו אפשרות ואמרו מספר מ־1 עד 3.';say('לא נקלט יעד לניווט. בחרו אחת משלוש אפשרויות ואמרו את המספר. אחת, תתחיל מחדש. שתיים, נווט לפי מה שנאמר. שלוש, סגור ניווט.',()=>{listen();timer=setTimeout(()=>spokenClose('לא נבחרה אפשרות. חלון הניווט נסגר.'),60000);});}
  function chooseSpoken(text){const value=normalize(text);if(/(?:^|\s)(1|אחת|אחד|ראשונה)(?:\s|$)/.test(value))begin();else if(/(?:^|\s)(2|שתיים|שתים|שניים|שנים|שנייה)(?:\s|$)/.test(value))navigate();else if(/(?:^|\s)(3|שלוש|שלושה|שלישית)(?:\s|$)/.test(value))spokenClose();}
  function resolve(text){
    command.lastIndex=0;const query=normalize(text).replace(command,' ').replace(/(?:^|\s)(?:נו{1,3}ט|תעבור|עבור|לעבור|בבקשה|אל)(?=\s|$)/g,' ').replace(/\s+/g,' ').trim();
    if(/(?:^|\s)(?:ל?עמוד הבית|ל?דף הבית|ל?בית)(?:\s|$)/.test(query))return [{path:document.documentElement.lang==='en'?'index-en.html':'index.html',title:'עמוד הבית'}];
    if(!query)return [];
    const queryTokens=tokens(query),explicitPage=/(?:לשונית|טאב|עמוד|דף)\s/.test(query),sectionHints=queryTokens.filter(w=>['קורס','קורסים','השכלה','שכלה','ניסיון','כישורים','כישרורים','יכולות','הכשרה','יתרונות','השירות','השגים'].includes(w));
    const ranked=entries.filter(entry=>!explicitPage||entry.kind==='page').map(entry=>{let score=0;const labels=[entry.title,...(entry.aliases||[]),...(entry.kind==='page'?intentions[entry.path]||[]:[])];for(const label of labels){const name=normalize(label);if(!name)continue;if(query===name||query==='ל'+name)score=Math.max(score,100+(entry.kind==='page'?10:0));else if(name.length>=3&&query.includes(name))score=Math.max(score,65+Math.min(name.length,25));else{const wanted=tokens(name);if(!wanted.length)continue;let hits=0;for(const word of wanted){if(queryTokens.some(q=>q===word))hits+=1;else if(word.length>=4&&queryTokens.some(q=>q.length>=4&&distance(q,word)<= (Math.max(q.length,word.length)>=7?2:1)))hits+=0.8;else if(word.length>=3&&queryTokens.some(q=>q.length>=3&&sound(q).length>=2&&sound(q)===sound(word)))hits+=0.75;}if(hits===wanted.length)score=Math.max(score,58+Math.min(wanted.length*6,24));else if(hits>=0.75&&hits/wanted.length>=0.65)score=Math.max(score,45+hits*6);}}if(score>0&&entry.kind==='section'){const heading=tokens(entry.title);if(sectionHints.some(h=>heading.includes(h)))score+=25;if(entry.path.split('#')[0]===currentPage())score+=8;}return {entry,score};}).filter(x=>x.score>=45).sort((a,b)=>b.score-a.score);
    if(!ranked.length)return [];const best=ranked[0].score;const unique=ranked.filter((x,i,a)=>a.findIndex(y=>y.entry.path===x.entry.path)===i);if(best>=55&&(!unique[1]||best-unique[1].score>=8))return [unique[0].entry];return unique.filter(x=>best-x.score<8).map(x=>x.entry).slice(0,5);
  }
  async function navigate(chosen){
    if(!active||mode==='navigate')return;clearTimeout(timer);stopListening();stopSpeech();mode='navigate';options.hidden=true;const id=generation;
    status.textContent='מחפש את העמוד או הנושא…';await siteMap();if(!active||id!==generation)return;
    const targets=chosen?[chosen]:resolve(field.value);
    if(targets.length!==1){mode='clarify';matches.replaceChildren();if(!targets.length){status.textContent='הבקשה נשמרה, אך לא נמצא יעד ברור: '+field.value+'. אמרו או הקלידו שם לשונית או נושא.';}else{status.textContent='הבקשה נשמרה. נמצאו כמה יעדים, בחרו לאן לעבור:';targets.forEach(target=>{const b=document.createElement('button');b.type='button';b.textContent=target.title;b.addEventListener('click',()=>navigate(target));matches.appendChild(b);});}listen();return;}
    const target=targets[0];status.textContent='מעביר אל '+target.title+'…';
    try{await webhook('navigate',{transcript:field.value,target:target.path});hookStatus.textContent='Make קיבל את בקשת הניווט.';}catch{hookStatus.textContent='Make לא אישר את הבקשה. הניווט באתר יתבצע לפי היעד שנמצא.';}
    if(!active||id!==generation)return;const url=new URL(target.path,location.origin);if(url.origin!==location.origin)return;
    saveDraft('');close();if(url.pathname===location.pathname&&url.hash){location.hash=url.hash;revealHash();}else if(url.pathname===location.pathname&&!url.hash){window.scrollTo({top:0,behavior:'instant'});}else location.assign(url.href);
  }
  function makeDialog(){
    const style=document.createElement('style');style.id='portfolioVoiceNavigationStyle';style.textContent='#portfolioVoiceNavigation{direction:rtl;width:min(520px,calc(100vw - 32px));max-height:calc(100dvh - 32px);box-sizing:border-box;overflow:auto;padding:24px;border:1px solid #d5e0ed;border-radius:18px;background:#fff;color:#102235;box-shadow:0 16px 60px #10223540;font-family:inherit}#portfolioVoiceNavigation::backdrop{background:#10223590}#portfolioVoiceNavigation h2{margin:0 0 12px;font-size:25px}#portfolioVoiceNavigation p{line-height:1.6;margin:10px 0}#portfolioVoiceNavigation textarea{box-sizing:border-box;width:100%;min-height:85px;padding:12px;border:1px solid #bbcddd;border-radius:10px;font:inherit;resize:vertical;color:#102235;background:#fff}#portfolioVoiceNavigation .voiceActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}#portfolioVoiceNavigation button{min-height:42px;padding:10px 14px;border:1px solid #ccd9e7;border-radius:9px;font:inherit;cursor:pointer;background:#edf3ff;color:#195ed8}#portfolioVoiceNavigation button:focus-visible,#portfolioVoiceNavigation textarea:focus-visible{outline:3px solid #195ed8;outline-offset:2px}#portfolioVoiceNavigation button.voicePrimary{background:#195ed8;color:#fff}#portfolioVoiceNavigation [hidden]{display:none!important}#voiceHookStatus{font-size:13px;color:#54677a}#voiceMatches{display:flex;gap:8px;flex-wrap:wrap}';document.head.appendChild(style);
    dialog=document.createElement('dialog');dialog.id='portfolioVoiceNavigation';dialog.setAttribute('aria-labelledby','voiceNavigationTitle');dialog.innerHTML='<h2 id="voiceNavigationTitle">ניווט קולי</h2><p>אמרו את שם הלשונית או הנושא. בסיום אמרו <b>״נווט לשם״</b> או <b>״נווט עכשיו״</b>.</p><p id="voiceNavigationStatus" role="status" aria-live="polite"></p><label for="voiceNavigationText">הבקשה שלכם — אפשר גם להקליד</label><textarea id="voiceNavigationText" placeholder="למשל: נווט לעמוד הבית"></textarea><p id="voiceHookStatus" role="status"></p><div id="voiceMatches"></div><div class="voiceActions"><button type="button" class="voicePrimary" id="voiceNavigateNow">נווט עכשיו</button><button type="button" id="voiceMic">הפעל מיקרופון</button><button type="button" id="voiceRestart">התחל מחדש</button><button type="button" id="voiceClose">סגור ניווט</button></div><div id="voiceOptions" hidden><p>אמרו מספר אפשרות, או לחצו עליה. ללא בחירה החלון ייסגר לאחר דקה.</p><div class="voiceActions"><button type="button" data-choice="1">1 — תתחיל מחדש</button><button type="button" data-choice="2">2 — נווט לפי מה שנאמר</button><button type="button" data-choice="3">3 — סגור ניווט</button></div></div>';
    document.body.appendChild(dialog);field=dialog.querySelector('textarea');status=dialog.querySelector('#voiceNavigationStatus');hookStatus=dialog.querySelector('#voiceHookStatus');options=dialog.querySelector('#voiceOptions');matches=dialog.querySelector('#voiceMatches');mic=dialog.querySelector('#voiceMic');
    dialog.querySelector('#voiceNavigateNow').onclick=()=>navigate();dialog.querySelector('#voiceRestart').onclick=begin;dialog.querySelector('#voiceClose').onclick=close;
    mic.onclick=()=>{blocked=false;stopSpeech();requestMicrophone();listen();};
    options.querySelectorAll('button').forEach(b=>b.onclick=()=>b.dataset.choice==='1'?begin():b.dataset.choice==='2'?navigate():spokenClose());
    field.addEventListener('focus',()=>{stopListening();stopSpeech();});
    field.addEventListener('input',()=>{saveDraft(field.value);if(mode==='choices'||mode==='clarify'){mode='listen';options.hidden=true;}clearTimeout(timer);timer=setTimeout(showChoices,30000);if(hasCommand(field.value))navigate();});
    dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
  }
  function open(){
    if(active)return;if(!dialog)makeDialog();lastFocus=document.activeElement;active=true;session=window.crypto?.randomUUID?.()||String(Date.now());dialog.showModal();
    const Context=window.AudioContext||window.webkitAudioContext;if(Context&&!voiceContext)voiceContext=new Context();voiceContext?.resume().catch(()=>{});requestMicrophone();
    document.querySelectorAll('#pageReadButton,#englishPageReadButton').forEach(b=>{if(b.dataset.reading==='1')b.click();});
    begin(false);hookStatus.textContent='מחבר ל־Make…';const id=generation;
    siteMap().then(async mapping=>{let notified=false;try{notified=localStorage.getItem('portfolioVoiceMakeMapDate')===mapping.date;}catch{}const remap=mapping.remap||!notified;const response=await webhook('open',{remap,site_map:remap?mapping.entries:[],date:mapping.date});try{localStorage.setItem('portfolioVoiceMakeMapDate',mapping.date);}catch{}return response;}).then(()=>{if(active&&id===generation)hookStatus.textContent='Make קיבל את הלחיצה. הניווט מוכן.';}).catch(()=>{if(active&&id===generation)hookStatus.textContent='Make לא אישר את הלחיצה. אפשר עדיין לנווט באתר.';});
  }
  window.PortfolioVoiceNavigation={open};
})();