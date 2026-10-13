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
  const normalize=s=>String(s||'').toLowerCase().replace(/[\u0591-\u05c7]/g,'').replace(/[^a-z0-9\u05d0-\u05ea ]/g,' ').replace(/מ(?:א)?ג\s*י?\s*ק/g,'magic').replace(/פרוייקט/g,'פרויקט').replace(/נסיון/g,'ניסיון').replace(/בקבילה/g,'בקהילה').replace(/(?:^|\s)(?:עסור|אבור)(?=\s|$)/g,' עבור').replace(/\s+/g,' ').trim();
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
  const command=/(?:נו{1,3}ט|תנווט|עבור|תעבור|לך|לכי|קח אותי|העבר אותי|תעביר אותי)\s+(?:עכשיו|לשם|למקום הזה)|(?:פתח|תפתח)\s+(?:את זה|את המקום הזה)/g;
  const moveRequest=/(?:^|\s)(?:נו{1,3}ט|תנווט|עבור|תעבור|לך|לכי|קח|העבר|תעביר|פתח|תפתח|הצג|תציג|תראה|להגיע|לעבור|להיכנס|לחזור|חזור|תחזור|תלך|ללכת|כנס|תיכנס|תגיע)\s/;
  let dialog,field,status,hookStatus,options,matches,mic,recognition=null,timer,retryTimer,speechTimer,commandTimer;
  let active=false,mode='listen',speaking=false,blocked=false,session='',generation=0,mapPromise,mapDate='',entries=[],lastFocus;
  let microphoneStream=null,microphonePending=null,voiceContext=null,voiceSource=null,voiceRequest=null,speechRun=0;
  let candidates=[];
  let commandFeedback=null,feedbackTimer=null,feedbackSequence=0;
  function showCommandFeedback(text='מעבד את בקשתך…',busy=true){
    clearTimeout(feedbackTimer);feedbackSequence++;
    if(!commandFeedback){commandFeedback=document.createElement('div');commandFeedback.id='voiceCommandFeedback';commandFeedback.setAttribute('role','status');commandFeedback.setAttribute('aria-live','polite');commandFeedback.style.cssText='position:fixed;right:16px;bottom:84px;z-index:100003;max-width:min(360px,calc(100vw - 32px));box-sizing:border-box;padding:12px 18px;border:1px solid #bcd6ea;border-radius:12px;background:#eef8ff;color:#102235;box-shadow:0 5px 20px #10223525;font:inherit;direction:rtl;pointer-events:none';document.body.appendChild(commandFeedback);}
    commandFeedback.hidden=false;commandFeedback.textContent=text;commandFeedback.dataset.state=busy?'processing':'ready';commandFeedback.setAttribute('aria-busy',String(busy));
    if(status&&active){status.hidden=false;status.textContent=text;}
    if(!busy)feedbackTimer=setTimeout(()=>{if(commandFeedback)commandFeedback.hidden=true;},1600);
  }
  function readyForCommand(){showCommandFeedback('מקשיב לפקודה הבאה',false);}
  window.addEventListener('portfolioNarrationState',event=>{
    if(event.detail==='preparing'){showCommandFeedback('הבקשה התקבלה. מכין את הקראת הדף…');commandFeedback.dataset.kind='reading';}
    else if(event.detail==='fallback')showCommandFeedback('שירות הקול אינו זמין. מתחיל הקראה מובנית בדפדפן…');else if(event.detail==='playing')showCommandFeedback('ההקראה התחילה. אפשר לתת פקודה נוספת',false);
    else if(event.detail==='blocked')showCommandFeedback('הדפדפן חסם את הפעלת הקול. לחצו על כפתור הקראת הדף כדי להתחיל',false);
  });
  function hideCommandFeedback(){clearTimeout(feedbackTimer);feedbackSequence++;if(commandFeedback)commandFeedback.hidden=true;}
  function paintCommandFeedback(){return new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done)));}
  const captureState={recognition:'idle',error:'',audioStarted:false,speechDetected:false,resultReceived:false,microphoneSignal:false,level:0};
  let diagnosticRun=0,diagnosticBusy=false,diagnosticTimer=null;
  let microphoneMonitor=null,microphoneInput=null,microphoneAnalyser=null;
  function stopMicrophoneMonitor(){clearInterval(microphoneMonitor);microphoneMonitor=null;try{microphoneInput?.disconnect();microphoneAnalyser?.disconnect();}catch{}microphoneInput=null;microphoneAnalyser=null;}
  function monitorMicrophone(){
    stopMicrophoneMonitor();if(!microphoneStream)return;
    const context=primeSharedAudio();if(!context?.createMediaStreamSource||!context?.createAnalyser)return;
    try{
      microphoneInput=context.createMediaStreamSource(microphoneStream);microphoneAnalyser=context.createAnalyser();microphoneAnalyser.fftSize=512;microphoneInput.connect(microphoneAnalyser);
      const values=new Float32Array(512);let frames=0;
      microphoneMonitor=setInterval(()=>{
        if(!microphoneAnalyser||voiceSessionEnded)return;
        microphoneAnalyser.getFloatTimeDomainData(values);const level=Math.sqrt(values.reduce((sum,value)=>sum+value*value,0)/values.length);captureState.level=level;
        const meter=dialog?.querySelector('#voiceMicLevel');if(meter)meter.value=Math.min(1,level*8);
        const indicator=dialog?.querySelector('.voiceIndicator');if(indicator){indicator.style.transform='scale('+Math.min(1.2,1+level*3)+')';indicator.style.opacity=level>.012?'1':'.65';}
        if(!speaking&&!window.__portfolioNarrationOutput?.playing&&level>.012){if(++frames>=3)captureState.microphoneSignal=true;}else frames=0;
      },100);
    }catch{}
  }
  function trackRecognition(rec){
    captureState.recognition='starting';captureState.audioStarted=false;
    rec.onaudiostart=()=>{captureState.audioStarted=true;captureState.recognition='listening';};
    rec.onspeechstart=()=>{captureState.speechDetected=true;};
  }
  function captureFailureMessage(){
    if(['language-not-supported','language-unavailable'].includes(captureState.error))return 'זיהוי דיבור בעברית אינו זמין כרגע בדפדפן הזה. הרשאת מיקרופון לבדה אינה מספיקה. נסו את אותו אתר בגוגל כרום.';
    if(['not-allowed','service-not-allowed'].includes(captureState.error))return 'שירות זיהוי הדיבור חסום או שלא ניתנה לו הרשאה. המיקרופון יכול להיות פתוח ועדיין לא יתקבלו מילים.';
    if(captureState.error==='network')return 'יש תקלה בחיבור לשירות זיהוי הדיבור. הבקשה לא נקלטה. ההאזנה תנסה להתחבר שוב.';
    if(captureState.error==='audio-capture')return 'שירות זיהוי הדיבור לא הצליח לקבל קול מהמיקרופון. בדקו שהמיקרופון הנכון נבחר ושאינו בשימוש בלעדי של יישום אחר.';
    if(captureState.microphoneSignal||captureState.speechDetected)return 'המיקרופון קולט קול, אבל שירות זיהוי הדיבור לא מחזיר מילים לאתר. לא מדובר ביעד שלא נבחר. נסו להפעיל מחדש את ההאזנה, או לפתוח את אותו אתר בגוגל כרום.';
    if(!captureState.audioStarted)return 'המיקרופון קיבל הרשאה, אבל זיהוי הדיבור עדיין לא התחיל לקלוט קול. לחצו על חדש האזנה.';
    return 'לא התקבל קול מזוהה מהמיקרופון. בדקו שהוא אינו מושתק ושהמיקרופון הנכון נבחר, ואז אמרו שוב לאן לעבור.';
  }
  function showMicrophoneHelp(text,manual=''){
    const panel=dialog.querySelector('#voiceDiagnostics');panel.hidden=false;
    panel.querySelector('#voiceDiagnosticMessage').textContent=text;
    panel.querySelector('#voiceManualHelp').hidden=!manual;
    panel.querySelector('#voiceManualInstructions').textContent=manual;
  }
  const permissionHelp='ב־Edge לחצו על המנעול ליד כתובת האתר, פתחו הרשאות לאתר ואפשרו מיקרופון. אם הוא חסום גם ב־Windows, פתחו את הגדרות הגישה למיקרופון בקישור למטה. לאחר השינוי חזרו ולחצו על בדוק מיקרופון.';
  const soundHelp='פתחו את הגדרות הקול בקישור למטה, בחרו קלט ואת המיקרופון שבו אתם מדברים, ובדקו עוצמה והשתקה. סגרו יישום שמשתמש במיקרופון באופן בלעדי, ואז חזרו ולחצו על בדוק עוצמת מיקרופון.';
  async function runMicrophoneCheck(volume=false){
    if(!active||diagnosticBusy)return;
    diagnosticBusy=true;const run=++diagnosticRun;clearTimeout(timer);stopSpeech();
    const checkButton=dialog.querySelector('#voiceCheckMic'),volumeButton=dialog.querySelector('#voiceCheckLevel');checkButton.disabled=true;volumeButton.disabled=true;
    showMicrophoneHelp('בודק את המיקרופון…');dialog.querySelector('#voiceMicMeter').hidden=!volume;
    const valid=()=>active&&run===diagnosticRun&&!voiceSessionEnded;
    try{
      if(!navigator.mediaDevices?.getUserMedia){showMicrophoneHelp('גישה למיקרופון אינה זמינה בדפדפן הזה.','פתחו את האתר בדפדפן מעודכן בחיבור מאובטח.');return;}
      let permission='unknown';try{permission=(await navigator.permissions?.query({name:'microphone'}))?.state||'unknown';}catch{}
      if(!valid())return;
      if(permission==='denied'){showMicrophoneHelp('המיקרופון חסום בהרשאות. האפליקציה אינה יכולה לשנות את ההרשאה בעצמה.',permissionHelp);say('המיקרופון חסום. יש לאפשר גישה למיקרופון בהרשאות האתר או בהגדרות ווינדוס. ההוראות מופיעות בחלון.');return;}
      await microphonePending;if(!valid())return;
      if(!microphoneStream?.getTracks().some(track=>track.kind!=='video'&&track.readyState!=='ended')){
        const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}});
        if(!valid()){stream.getTracks().forEach(track=>track.stop());return;}
        microphoneStream=stream;wakePermission=true;
      }
      const track=microphoneStream.getAudioTracks?.()[0]||microphoneStream.getTracks()[0];if(track&&track.enabled===false)track.enabled=true;
      monitorMicrophone();
      const supported=Boolean(window.SpeechRecognition||window.webkitSpeechRecognition);
      if(!volume){
        if(!supported){showMicrophoneHelp('המיקרופון נפתח, אך זיהוי דיבור אינו נתמך בדפדפן.','פתחו את אותו אתר בדפדפן שתומך בזיהוי דיבור בעברית.');say('המיקרופון נפתח, אבל הדפדפן אינו תומך בזיהוי דיבור.');return;}
        if(!recognition||['error','idle'].includes(captureState.recognition)){blocked=false;captureState.error='';stopListening();listen();}
        await new Promise(resolve=>setTimeout(resolve,1200));if(!valid())return;
        if(captureState.error){const text=captureFailureMessage();showMicrophoneHelp(text,['not-allowed','service-not-allowed'].includes(captureState.error)?permissionHelp:soundHelp);say(text);}
        else if(captureState.audioStarted){showMicrophoneHelp('המיקרופון נפתח ושירות זיהוי הדיבור התחיל לקלוט קול. אמרו: עבור לעמוד הבית. זיהוי מילים ייבדק כשאתם מדברים.');say('המיקרופון פתוח וזיהוי הדיבור התחיל לקלוט. אמרו עבור לעמוד הבית.');}
        else{showMicrophoneHelp('המיקרופון נפתח. ההאזנה חודשה, אך שירות זיהוי הדיבור עדיין לא אישר קליטת קול. נסו לדבר; אם אין תגובה, בדקו את עוצמת המיקרופון.',soundHelp);say('המיקרופון נפתח וההאזנה חודשה. יש לבדוק גם את עוצמת הקול.');}
        return;
      }
      if(!microphoneAnalyser){showMicrophoneHelp('מד עוצמת המיקרופון אינו זמין בדפדפן הזה.',soundHelp);return;}
      captureState.resultReceived=false;showMicrophoneHelp('לאחר ההנחיה הקולית, דברו במשך שש שניות. המד מציג את עוצמת הקול המתקבלת מהמיקרופון.');
      await new Promise(resolve=>say('אמרו כמה מילים לבדיקת עוצמת המיקרופון.',resolve));if(!valid())return;
      showMicrophoneHelp('דברו כעת במשך שש שניות. המד מציג את עוצמת הקול המתקבלת מהמיקרופון.');let peak=0,samples=0;
      await new Promise(resolve=>{
        const began=Date.now();diagnosticTimer=setInterval(()=>{
          if(!valid()){clearInterval(diagnosticTimer);resolve();return;}
          if(!speaking){peak=Math.max(peak,captureState.level);samples++;}
          if(Date.now()-began>=6000){clearInterval(diagnosticTimer);resolve();}
        },100);
      });if(!valid())return;
      if(!samples||peak<.012){const text='לא התקבל קול ברור בבדיקה. ניסיתי לחדש את ההאזנה; יש לבדוק בחירת מיקרופון, השתקה ועוצמת קלט.';blocked=false;stopListening();listen();showMicrophoneHelp(text,soundHelp);say(text);}
      else{const text=captureState.resultReceived?'עוצמת המיקרופון מספיקה ונקלטו מילים בזיהוי הדיבור.':'נקלט קול מהמיקרופון. עדיין לא נקלטו מילים בזיהוי הדיבור; ייתכן שהתקלה בשירות הזיהוי.';showMicrophoneHelp(text,captureState.resultReceived?'':'אם הדיבור אינו מזוהה גם אחרי חדש האזנה, נסו לפתוח את אותו אתר בדפדפן אחר.');say(text);}
    }catch(error){if(valid()){const denied=['NotAllowedError','SecurityError'].includes(error.name);const text=denied?'לא ניתנה גישה למיקרופון.':error.name==='NotFoundError'?'לא נמצא מיקרופון מחובר.':'לא ניתן לפתוח את המיקרופון כרגע.';showMicrophoneHelp(text,denied?permissionHelp:soundHelp);say(text);}}
    finally{if(run===diagnosticRun){diagnosticBusy=false;checkButton.disabled=false;volumeButton.disabled=false;if(active&&!blocked)timer=setTimeout(showChoices,30000);}}
  }
  let promptText='',promptEndedAt=0;
  function isOutputEcho(text){
    const value=normalize(text);if(!value)return false;
    const output=window.__portfolioNarrationOutput;
    const sources=[];
    if(promptText&&(speaking||Date.now()-promptEndedAt<1200))sources.push(promptText);
    if(output&&!window.__portfolioNarrationPaused&&(output.playing||Date.now()-output.endedAt<1200))sources.push(output.text);
    return sources.some(source=>{const spoken=normalize(source);return spoken&&(' '+spoken+' ').includes(' '+value+' ');});
  }
  let draft='';try{draft=sessionStorage.getItem('portfolioVoiceDraft')||'';}catch{}
  let voiceSessionEnded=false,reconnectAttempts=0;
  try{voiceSessionEnded=sessionStorage.getItem('portfolioVoiceSessionEnded')==='1';}catch{}
  let continuousMicrophone=false;
  try{continuousMicrophone=sessionStorage.getItem('portfolioContinuousMicrophone')==='1';}catch{}
  function rememberContinuousMicrophone(){voiceSessionEnded=false;continuousMicrophone=true;try{sessionStorage.setItem('portfolioContinuousMicrophone','1');sessionStorage.removeItem('portfolioVoiceSessionEnded');}catch{}syncToggle();}
  function resumeContinuousMicrophone(){
    if(!continuousMicrophone||!wakePermission||microphoneStream||microphonePending||document.visibilityState==='hidden'||!navigator.mediaDevices?.getUserMedia)return microphonePending||Promise.resolve();
    microphonePending=navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}}).then(stream=>{if(!continuousMicrophone||voiceSessionEnded||document.visibilityState==='hidden'){stream.getTracks().forEach(track=>track.stop());return;}microphoneStream=stream;primeSharedAudio();monitorMicrophone();}).catch(()=>{}).finally(()=>{microphonePending=null;});
    return microphonePending;
  }
  let wakeRecognition=null,wakeTimer=null,wakeCommandTimer=null,wakePermission=false;
  function stopWakeListening(){clearTimeout(wakeTimer);clearTimeout(wakeCommandTimer);if(wakeRecognition){const rec=wakeRecognition;wakeRecognition=null;rec.onend=null;rec.onresult=null;rec.onerror=null;try{rec.abort();}catch{}}}
  function startRecognition(rec){trackRecognition(rec);if('processLocally' in rec)rec.processLocally=false;rec.start();}
  function startWakeListening(){
    syncToggle();
    if(active||voiceSessionEnded||!wakePermission||document.visibilityState==='hidden'||wakeRecognition)return;
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Speech)return;
    const rec=new Speech();wakeRecognition=rec;rec.lang='he-IL';rec.continuous=true;rec.interimResults=true;
    rec.onresult=event=>{
      if(active||wakeRecognition!==rec||document.visibilityState==='hidden' )return;
      const reading=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');
      for(let i=event.resultIndex||0;i<event.results.length;i++){
        clearTimeout(wakeCommandTimer);
        const text=normalize(event.results[i][0].transcript);
        if(!event.results[i].isFinal){
          if(!isOutputEcho(text)&&isReadPageRequest(text)){wakeCommandTimer=setTimeout(()=>{if(!active&&wakeRecognition===rec&&!voiceSessionEnded)readCurrentPage();},300);}else if(!isOutputEcho(text)&&continuousMicrophone&&hasCommand(text)&&resolve(text).length===1){
            wakeCommandTimer=setTimeout(()=>{if(!active&&wakeRecognition===rec&&!voiceSessionEnded)open(text);},450);
          }
          continue;
        }if(isOutputEcho(text))continue;captureState.resultReceived=true;captureState.error='';
        if(isFinishVoiceRequest(text)){finishVoiceSession();return;}
        if(handleBackRequest(text))return; if(handlePageTopRequest(text))return;
        reconnectAttempts=0;
        if(handlePauseNarration(text))return;
        if(stopCurrentNarration(text))return;
        if(handleNarrationCommand(text))return;
        if(isReadPageRequest(text)){readCurrentPage();return;}
        if(/(?:אל|לא)\s+(?:תפעיל|הפעל|להפעיל|תעבור|עבור|לך|תפתח|פתח|נווט|תנווט|להגיע|לעבור)/.test(text))continue;
        if(/(?:^|\s)(?:הפעל|תפעיל|הפעילי|תפעילי)\s+(?:את\s+)?(?:ה)?ניווט\s+(?:ה)?קולי(?:$|\s)/.test(text)){
          stopWakeListening();open();return;
        }
        if(continuousMicrophone&&hasCommand(text)){open(text);return;}
      }
    };
    rec.onstart=()=>{captureState.recognition='started';if(commandFeedback?.dataset.state==='processing'&&commandFeedback?.dataset.kind==='navigation'&&!active)readyForCommand();};
    rec.onend=()=>{if(wakeRecognition===rec){wakeRecognition=null;if(!active&&wakePermission)wakeTimer=setTimeout(startWakeListening,200);}};
    rec.onerror=event=>{if(wakeRecognition!==rec)return;captureState.error=event.error;captureState.recognition='error';stopWakeListening();if(['not-allowed','service-not-allowed','language-not-supported','language-unavailable'].includes(event.error)){wakePermission=false;return;}if(!voiceSessionEnded&&wakePermission){const delay=Math.min(10000,700*Math.pow(2,Math.min(reconnectAttempts++,4)));wakeTimer=setTimeout(()=>active?listen():startWakeListening(),delay);}};
    try{startRecognition(rec);const button=document.getElementById('site_voice_nevegation');if(button)button.title='המיקרופון מאזין לפקודות קוליות עד לסיום מפורש';}catch(error){stopWakeListening();if(!voiceSessionEnded&&wakePermission)wakeTimer=setTimeout(startWakeListening,error.name==='InvalidStateError'?250:1000);}
  }
  async function checkWakePermission(){
    if(voiceSessionEnded)return;
    const restore=async()=>{await resumeContinuousMicrophone();if(!voiceSessionEnded)startWakeListening();};
    try{
      if(!navigator.permissions?.query)throw new Error('Microphone permission query unavailable');
      const permission=await navigator.permissions.query({name:'microphone'});
      wakePermission=permission.state==='granted';if(wakePermission)await restore();
      permission.onchange=()=>{wakePermission=permission.state==='granted';if(wakePermission)restore();else stopWakeListening();};
    }catch{if(continuousMicrophone&&!voiceSessionEnded){wakePermission=true;await restore();}}
  }
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')stopWakeListening();else if(!active)checkWakePermission();});
  window.addEventListener('pagehide',stopWakeListening);
  window.addEventListener('pageshow',()=>{if(!voiceSessionEnded)checkWakePermission();});
  checkWakePermission();
  function saveDraft(value){draft=String(value||'').slice(0,1500);if(field)field.value=draft;try{sessionStorage.setItem('portfolioVoiceDraft',draft);}catch{}}
  const day=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jerusalem',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const currentPage=()=>location.pathname.split('/').pop()||'index.html';
  const mapVersion=5;
  function sectionAliases(title){
    const text=normalize(title),aliases=[];
    const groups=[
      [/חמישה עולמות|5 עולמות/,['חמישה עולמות שמתחברים','חמש עולמות שמתחברים','5 עולמות שמתחברים','חמישה עולמות','חמשת העולמות','עולמות שמתחברים','העולמות המקצועיים','חמישה תחומים שמתחברים']],
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
  function revealHash(){if(!location.hash)return;markSections(document);let sectionId;try{sectionId=decodeURIComponent(location.hash.slice(1));}catch{return;}const target=document.getElementById(sectionId);if(!target||!target.closest('main'))return;for(let p=target.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;const offset=Math.max(0,...[...document.querySelectorAll('.top,#pageReadTopicControls')].map(el=>getComputedStyle(el).position==='fixed'?el.getBoundingClientRect().bottom:0));window.scrollTo({top:scrollY+target.getBoundingClientRect().top-offset-20,behavior:'instant'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(revealHash,700));else setTimeout(revealHash,700);
  function baseMap(){return pages.map(([path,title,aliases])=>({path,title,aliases,kind:'page'}));}
  async function siteMap(){
    const date=day();if(mapPromise&&mapDate===date)return mapPromise;
    mapDate=date;mapPromise=(async()=>{
      try{const cached=JSON.parse(localStorage.getItem('portfolioVoiceMap')||'null');if(cached?.version===mapVersion&&Array.isArray(cached.entries)&&cached.entries.length){entries=cached.entries;refreshCurrentSections();if(cached.date===date)return {entries,remap:false,date};}}catch{}
      const collected=baseMap(),seen=new Set(),pending=[...pages.map(page=>page[0])];let complete=true;
      const primary=new Set(pending);
      if(!pending.includes(currentPage()))pending.push(currentPage());
      async function mapPage(path){
        try{
          let doc;if(path===currentPage())doc=document;else{const response=await fetch('/'+path,{signal:AbortSignal.timeout(8000)});if(!response.ok)throw Error();doc=new DOMParser().parseFromString(await response.text(),'text/html');}
          if(!primary.has(path)){const title=(path==='index-en.html'?'Home':doc.querySelector('main h1')?.textContent||doc.title||path).trim().replace(/\s*[|·]\s*.*$/,'');collected.push({path,title,aliases:[],kind:'page'});}
          markSections(doc).forEach(h=>{if(h.title)collected.push({path:path+'#'+h.id,title:h.title,kind:'section',aliases:sectionAliases(h.title)});});
          doc.querySelectorAll('header nav a[href],main a[href],footer a[href],a[hreflang][href]').forEach(link=>{try{const url=new URL(link.getAttribute('href'),location.origin+'/'+path),next=url.pathname.split('/').filter(Boolean).join('/');if(url.origin===location.origin&&next.endsWith('.html')&&/^[a-z0-9.-]+$/i.test(next)&&!seen.has(next)&&!pending.includes(next)&&seen.size+pending.length<80)pending.push(next);}catch{}});
        }catch{if(primary.has(path))complete=false;}finally{const mappedPaths=new Set(collected.map(entry=>entry.path));entries=[...entries.filter(entry=>!mappedPaths.has(entry.path)),...collected];refreshCurrentSections();}
      }
      while(pending.length){const batch=pending.splice(0,6).filter(path=>!seen.has(path));batch.forEach(path=>seen.add(path));await Promise.all(batch.map(mapPage));}
      entries=collected;if(complete)try{localStorage.setItem('portfolioVoiceMap',JSON.stringify({date,version:mapVersion,entries}));}catch{}
      return {entries,remap:true,date};
    })();return mapPromise;
  }
  async function webhook(action,data={}){
    const response=await fetch('/api/voice-navigation',{method:'POST',keepalive:action==='navigate',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,session_id:session,page:currentPage(),date:day(),...data}),signal:AbortSignal.timeout(15000)});
    const result=await response.json();if(!response.ok||!result.ok)throw Error(result.error||'Make unavailable');return result;
  }
  function stopListening(){clearTimeout(retryTimer);clearTimeout(commandTimer);if(recognition){const old=recognition;recognition=null;old.onend=null;old.onresult=null;old.onerror=null;try{old.abort();}catch{}}}
  function hasCommand(text){const value=normalize(text);if(/(?:אל|לא)\s+(?:תעבור|עבור|לך|תפתח|פתח|נווט|תנווט|להגיע|לעבור)/.test(value))return false;command.lastIndex=0;if(command.test(value))return true;return moveRequest.test(value)&&tokens(value).some(word=>!['לך','לכי','קח','אותי','תעביר','העבר','פתח','תפתח','הצג','תציג','תראה','להגיע','לעבור','להיכנס','לחזור'].includes(word));}
  function stopSpeech(){speechRun++;clearTimeout(speechTimer);voiceRequest?.abort();voiceRequest=null;if(voiceSource){voiceSource.onended=null;try{voiceSource.stop();}catch{}voiceSource=null;}window.speechSynthesis?.cancel();speaking=false;}
  function requestMicrophone(){
    if(microphoneStream||microphonePending||!navigator.mediaDevices?.getUserMedia)return;
    const token=session;
    microphonePending=navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}}).then(stream=>{if(!active||session!==token){stream.getTracks().forEach(track=>track.stop());return;}microphoneStream=stream;monitorMicrophone();wakePermission=true;mic.textContent='חדש האזנה';}).catch(()=>{if(active&&session===token){blocked=true;status.textContent='יש לאשר גישה למיקרופון כדי לנווט בקול.';say(status.textContent);}}).finally(()=>{microphonePending=null;});
  }
  function syncToggle(){const button=document.getElementById('site_voice_nevegation');if(button){const he=document.documentElement.lang!=='en';const running=active||continuousMicrophone;button.textContent=running?(he?'סיים ניווט קולי':'End voice navigation'):(he?'ניווט קולי':'Voice navigation');button.setAttribute('aria-pressed',String(running));}}
  function close({keepMicrophone=true}={}){diagnosticRun++;diagnosticBusy=false;dialog?.querySelectorAll('#voiceCheckMic,#voiceCheckLevel').forEach(button=>button.disabled=false);generation++;active=false;clearTimeout(timer);stopListening();stopSpeech();if(!keepMicrophone){microphoneStream?.getTracks().forEach(track=>track.stop());microphoneStream=null;}if(dialog?.open)dialog.close();syncToggle();lastFocus?.focus();startWakeListening();}
  function isFinishVoiceRequest(text){
    const value=normalize(text);
    if(/(?:אל|לא)\s+(?:תסיים|סיים|סימי|תסגור|סגור|הפסק|תפסיק|עצור|תעצור|כבה)/.test(value))return false;
    return /(?:סיים|סימי|תסיים|תסיימי|סיום|לסיים|סגור|תסגור|הפסק|תפסיק|עצור|תעצור|כבה)\s+(?:את\s+)?(?:ה)?ניווט(?:\s+(?:ה)?קולי)?(?:$|\s)|כבה(?: את)?(?: ה)?מיקרופון|(?:הפסק|תפסיק|עצור|תעצור)\s+(?:להאזין|להקשיב)|(?:סיים|תסיים)\s+(?:את\s+)?(?:ה)?האזנה/.test(value);
  }
  function finishVoiceSession(){
    voiceSessionEnded=true;continuousMicrophone=false;wakePermission=false;hideCommandFeedback();try{sessionStorage.removeItem('portfolioVoiceTransition');}catch{}stopMicrophoneMonitor();captureState.recognition='ended';
    try{sessionStorage.setItem('portfolioContinuousMicrophone','0');sessionStorage.setItem('portfolioVoiceSessionEnded','1');}catch{}
    readRequestId++;readStartPending=false;saveDraft('');stopWakeListening();
    const reader=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');if(reader)reader.click();
    close({keepMicrophone:false});syncToggle();
  }
  function spokenClose(text='חלון הניווט נסגר.'){clearTimeout(timer);mode='navigate';say(text,close);}
  function say(text,after){
    stopSpeech();speaking=true;promptText=text;listen();const id=generation,run=speechRun;let finished=false;
    const done=()=>{if(finished||run!==speechRun)return;finished=true;clearTimeout(speechTimer);if(!active||id!==generation)return;speaking=false;promptEndedAt=Date.now();after?.();};
    speechTimer=setTimeout(done,8000);
    const native=()=>{if(!active||run!==speechRun)return;if(!window.speechSynthesis){done();return;}const utterance=new SpeechSynthesisUtterance(text);utterance.lang='he-IL';const voice=window.speechSynthesis.getVoices().find(v=>v.lang.startsWith('he'));if(voice)utterance.voice=voice;utterance.onend=done;utterance.onerror=done;speechTimer=setTimeout(()=>{window.speechSynthesis.cancel();done();},20000);window.speechSynthesis.speak(utterance);};
    if(window.speechSynthesis?.getVoices().some(v=>v.lang.startsWith('he'))||!voiceContext){native();return;}
    voiceRequest=new AbortController();const controller=voiceRequest;const limit=setTimeout(()=>controller.abort(),8000);
    fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,language:'he'}),signal:controller.signal}).then(async response=>{if(!response.ok)throw Error();const buffer=await voiceContext.decodeAudioData(await response.arrayBuffer());if(!active||run!==speechRun)return;voiceSource=voiceContext.createBufferSource();voiceSource.buffer=buffer;voiceSource.connect(voiceContext.destination);voiceSource.onended=()=>{voiceSource=null;done();};await voiceContext.resume();voiceSource.start();}).catch(native).finally(()=>{clearTimeout(limit);if(voiceRequest===controller)voiceRequest=null;});
  }
  function listen(){
    if(!active||blocked)return;
    if(microphonePending){microphonePending.then(()=>{if(active)listen();});return;}
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!Speech){blocked=true;status.textContent='זיהוי קולי אינו זמין בדפדפן הזה. יש לפתוח את האתר בדפדפן שתומך בזיהוי קולי.';say(status.textContent);return;}
    if(recognition&&recognition.navigationMode===mode)return;
    clearTimeout(retryTimer);if(recognition){const old=recognition;recognition=null;old.onend=null;old.onresult=null;old.onerror=null;try{old.abort();}catch{}}const rec=new Speech();recognition=rec;rec.navigationMode=mode;rec.lang='he-IL';rec.continuous=true;rec.interimResults=true;
    const prefix=['clarify','targets'].includes(mode)?'':field.value.trim(),heard=new Map();
    rec.onstart=()=>{captureState.recognition='started';if(active&&mode!=='navigate'){mic.textContent='חדש האזנה';status.textContent=mode==='choices'?'המיקרופון פעיל ומקשיב לבחירה: 1, 2 או 3':'המיקרופון פעיל ומקשיב. בסיום אמרו ״נווט עכשיו״.';}};
    rec.onresult=e=>{
      if(!active||recognition!==rec)return;let words=[],allFinal=true;
      for(let i=e.resultIndex||0;i<e.results.length;i++){const part=e.results[i][0].transcript;if(isOutputEcho(part)){heard.delete(i);continue;}heard.set(i,part);words.push(part);if(!e.results[i].isFinal)allFinal=false;}
      const spoken=words.join(' ').trim();if(!spoken)return;if(!allFinal&&isReadPageRequest(spoken)){captureState.resultReceived=true;captureState.error='';clearTimeout(commandTimer);commandTimer=setTimeout(()=>{if(active&&recognition===rec&&!voiceSessionEnded)readCurrentPage();},300);return;}captureState.resultReceived=true;captureState.error='';reconnectAttempts=0;
      if(mode==='navigate'){if(!allFinal)return;if(handleVoiceChoice(spoken))return;if(hasCommand(spoken)){generation++;mode='listen';saveDraft(spoken);navigate();}return;}
      if(allFinal&&handleVoiceChoice(spoken))return; if(allFinal&&/(?:אל|לא)\s+(?:תעבור|עבור|לך|תפתח|פתח|נווט|תנווט|להגיע|לעבור)/.test(normalize(spoken)))return;
      if(mode==='choices'&&!hasCommand(spoken)){if(allFinal)chooseSpoken(spoken);return;}
      if(spoken){saveDraft([prefix,[...heard.values()].join(' ')].filter(Boolean).join(' '));}
      clearTimeout(commandTimer);
      if(hasCommand(field.value)){
        if(allFinal){navigate();return;}
        const captured=field.value,id=generation;
        commandTimer=setTimeout(()=>{if(active&&id===generation&&field.value===captured&&hasCommand(captured)&&resolve(captured).length===1)navigate();},450);
      }
    };
    rec.onerror=e=>{if(!active||recognition!==rec)return;captureState.error=e.error;captureState.recognition='error';stopListening();if(['not-allowed','service-not-allowed','language-not-supported','language-unavailable'].includes(e.error)){blocked=true;clearTimeout(timer);status.textContent=captureFailureMessage();say(status.textContent);}else if(!voiceSessionEnded){blocked=false;const delay=Math.min(10000,700*Math.pow(2,Math.min(reconnectAttempts++,4)));retryTimer=setTimeout(listen,delay);}};
    rec.onend=()=>{if(recognition===rec){recognition=null;if(active&&!speaking&&mode==='listen'&&hasCommand(field.value)){navigate();return;}if(active&&!blocked)retryTimer=setTimeout(listen,150);}};
    try{startRecognition(rec);}catch(error){recognition=null;if(['NotAllowedError','NotSupportedError'].includes(error.name)){blocked=true;status.textContent='לא ניתן להתחיל האזנה. אשרו מיקרופון ונסו שוב.';say(status.textContent);}else if(active&&!voiceSessionEnded)retryTimer=setTimeout(listen,error.name==='InvalidStateError'?250:1000);}
  }
  function begin(reset=true){
    generation++;mode='listen';candidates=[];blocked=false;if(reset)saveDraft('');else saveDraft(draft);matches.replaceChildren();options.hidden=true;clearTimeout(timer);status.textContent='לאן לנווט?';
    say('לאן לנווט?',()=>{listen();timer=setTimeout(showChoices,30000);});
  }
  function showChoices(){if(!active||mode==='navigate')return;if(!captureState.resultReceived||blocked){mode='listen';status.textContent=captureFailureMessage();say(status.textContent,()=>{if(!blocked){listen();timer=setTimeout(showChoices,30000);}});return;}if(field.value.trim()){saveDraft(field.value);navigate();return;}mode='choices';options.hidden=false;status.textContent='לא נקלט יעד לניווט. בחרו אפשרות ואמרו מספר מ־1 עד 3.';say('לא נקלט יעד לניווט. בחרו אחת משלוש אפשרויות ואמרו את המספר. אחת, תתחיל מחדש. שתיים, נווט לפי מה שנאמר. שלוש, סגור ניווט.',()=>{listen();timer=setTimeout(()=>spokenClose('לא נבחרה אפשרות. חלון הניווט נסגר.'),60000);});}
  function voiceNumber(text){const value=normalize(text);const names=[['1','אחת','אחד','ראשונה','ראשון'],['2','שתיים','שתים','שניים','שנים','שנייה','שניה','שני'],['3','שלוש','שלושה','שלישית','שלישי'],['4','ארבע','ארבעה','רביעית'],['5','חמש','חמישה','חמישית']];return names.findIndex(group=>group.some(word=>value.split(' ').includes(word)))+1;}
  let lastNarrationCommand='',lastNarrationTime=0;
  function handlePauseNarration(text){
    if(!document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]'))return false;
    const value=normalize(text);if(/(?:אל|לא)\s+(?:תשהה|השהה|תעצור|עצור|תמשיך|המשך)/.test(value))return false;
    const pause=/(?:השהה|תשהה|השהייה|השהיה|פאוז|פאוזה|pause)|(?:עצור|תעצור|הפסק|תפסיק)\s+(?:לרגע|רגע|זמנית)/.test(value);
    const resume=/(?:המשך|תמשיך|תחזור)\s+(?:את\s+)?(?:ההקראה|הקראה|לקרוא)|resume/.test(value)||(window.__portfolioNarrationPaused&&/^(?:המשך|תמשיך|קדימה)$/.test(value));
    if(!pause&&!resume)return false;window.dispatchEvent(new CustomEvent('portfolioReadPause',{detail:pause}));return true;
  }
  function handleBackRequest(text){
    const value=normalize(text).replace(/(?:^|\s)בבקשה(?:\s|$)/g,' ').trim();
    if(/(?:אל|לא)\s+(?:תחזור|חזור|לך|עבור|תעבור)/.test(value))return false;
    const back=/^(?:חזור|תחזור|לך|עבור|תעבור)?\s*(?:אחורה|בחזרה)$|(?:חזור|תחזור|לך|עבור|תעבור|בחזרה)\s+(?:אל\s+)?ל?(?:ה)?(?:עמוד|דף)\s+(?:ה)?קודם|^(?:go back|back|previous page)$/.test(value);
    if(!back)return false;
    const reader=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');if(reader)reader.click();
    saveDraft('');rememberContinuousMicrophone();if(active)close({keepMicrophone:true});
    if(history.length>1)history.back();else location.assign(document.documentElement.lang==='en'?'/index-en.html':'/index.html');
    return true;
  }
  function handlePageTopRequest(text){
    const value=normalize(text);
    if(/(?:אל|לא)\s+(?:תעבור|עבור|לך|תחזור|חזור|נווט|תגלול|גלול)/.test(value))return false;
    const top=/(?:תחילת|התחלת|ראש|התחלה של)\s+(?:ה)?(?:עמוד|דף)|(?:עמוד|דף)\s+(?:מההתחלה|בהתחלה)|(?:גלול|תגלול)\s+(?:עד\s+)?(?:למעלה|לראש)|back to top|top of (?:the )?page/.test(value);
    if(!top)return false;
    const reader=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');
    if(reader)reader.click();
    if(active)close({keepMicrophone:true});
    window.scrollTo({top:0,behavior:'instant'});
    const heading=document.querySelector('main h1');if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
    window.__portfolioReadPosition?.reset?.();
    return true;
  }
  function handleNarrationCommand(text){
    const reader=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');if(!reader)return false;
    const value=normalize(text).replace(/(?:^|\s)בבקשה(?:\s|$)/g,' ').trim();
    if(/(?:אל|לא)\s+(?:תעבור|עבור|תדלג|דלג|תחזור|חזור|תתקדם|תמשיך)/.test(value))return false;
    const shortcutNext=/^(?:תתקדם|המשך|תמשיך|קדימה)$/.test(value),shortcutPrevious=/^(?:תחזור|חזור|אחורה)$/.test(value);
    const next=shortcutNext||/(?:^|\s)(?:ה?בא|ה?באה|קדימה|next)(?:\s|$)/.test(value);
    const previous=shortcutPrevious||/(?:^|\s)(?:ה?קודם|ה?קודמת|אחורה|previous|prev)(?:\s|$)/.test(value);
    if(next===previous)return false;
    const subject=/(?:^|\s)(?:ל?(?:ה)?פרק|ל?(?:ה)?נושא|ל?(?:ה)?חלק|ל?(?:ה)?קטע|chapter|topic|section)(?:\s|$)/.test(value);
    const action=/(?:^|\s)(?:עבור|תעבור|העבר|תעביר|דלג|תדלג|המשך|תמשיך|תקדם|תתקדם|לעבור|להתקדם|לחזור|קפוץ|לך|לכי|תחזור|חזור|חזרי|תחזרי|go|skip)(?:\s|$)/.test(value);
    const short=shortcutNext||shortcutPrevious||/^(?:ה?פרק|ה?נושא|ה?חלק|ה?קטע)\s+(?:ה?בא|ה?באה|ה?קודם|ה?קודמת)$/.test(value)||/^(?:קדימה|אחורה|next topic|previous topic)$/.test(value);
    if(!(subject&&(action||short))&&!(action&&/(?:קדימה|אחורה)/.test(value))&&!short)return false;
    const now=Date.now();
    const step=next?1:-1,row=document.getElementById('pageReadTopicControls');
    const button=row?.querySelector('button[data-read-step="'+step+'"]')||[...(row?.querySelectorAll('button')||[])].find(b=>!['pageReadButton','englishPageReadButton'].includes(b.id)&&(step===1?/הנושא הבא|next topic/i:/הנושא הקודם|previous topic/i).test(b.textContent));
    if(!button)return false;lastNarrationCommand=value;lastNarrationTime=now;button.click();return true;
  }
  function primeSharedAudio(){
    const Context=window.AudioContext||window.webkitAudioContext;
    if(Context&&!voiceContext)voiceContext=window.__ronenAudioContext||new Context();
    if(voiceContext){window.__ronenAudioContext=voiceContext;voiceContext.resume().catch(()=>{});}
    return voiceContext;
  }
  document.addEventListener('pointerdown',primeSharedAudio,{once:true,capture:true});
  document.addEventListener('keydown',primeSharedAudio,{once:true,capture:true});
  function stopNarrationRequest(text){
    const value=normalize(text);
    if(/(?:אל|לא)\s+(?:תעצור|עצור|תפסיק|הפסק|להפסיק)/.test(value))return false;
    if(/^(?:השתק|תשתיק|שקט|די לקרוא)$/.test(value))return true;
    return /(?:^|\s)(?:עצור|תעצור|תפסיק|הפסק|הפסיק|להפסיק|stop)(?:\s|$)/.test(value)&&/(?:הקראה|קריאה|להקריא|לקרוא|הקול|לדבר|reading|narration)/.test(value);
  }
  let readStartPending=false,readRequestId=0;
  function stopCurrentNarration(text){
    if(!stopNarrationRequest(text))return false;
    readRequestId++;readStartPending=false;
    const reader=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');
    if(reader)reader.click();return true;
  }
  function isReadPageRequest(text){
    const value=normalize(text);
    if(/(?:אל|לא)\s+(?:תקרא|תקריא|הקרא|קרא|להקריא|תפעיל|השמע)/.test(value))return false;
    if(/\bread(?: this| the)? page\b|\bread aloud\b/.test(value))return true;
    if(/(?:תתחיל|התחל|תתחילי)\s+(?:להקריא|לקרוא)|(?:הפעל|תפעיל|התחל)\s+(?:את\s+)?(?:ה)?הקראה/.test(value))return true;
    const verbs=['הקרא','הקריא','הקראה','הקראת','תקרא','תקריא','קרא','להקריא','השמע','תשמיע','השמיע'];
    const action=value.split(' ').some(word=>verbs.includes(word)||(word.length>=4&&verbs.some(verb=>verb.length>=4&&(distance(word,verb)<=1||sound(word)===sound(verb)))));
    return action&&(value.split(' ').some(word=>/^(?:את)?(?:ל|ה|ת)?(?:דף|עמוד|אתר|תוכן)$/.test(word))||/מה שכתוב|בקול/.test(value));
  }
  async function readCurrentPage(){
    if(readStartPending)return;showCommandFeedback();commandFeedback.dataset.kind='reading';readStartPending=true;const request=++readRequestId;
    if(active){rememberContinuousMicrophone();close({keepMicrophone:true});}
    try{
      await Promise.resolve(microphonePending);
      if(request!==readRequestId)return;
      let reader;for(let attempt=0;attempt<80;attempt++){reader=document.getElementById(document.documentElement.lang==='en'?'englishPageReadButton':'pageReadButton');if(reader)break;await new Promise(resolve=>setTimeout(resolve,50));if(request!==readRequestId)return;}
      if(!reader){showCommandFeedback('לא ניתן להתחיל הקראה כרגע. נסו את כפתור הקראת הדף',false);return;}
      primeSharedAudio();
      if(reader.dataset.reading!=='1')reader.click();showCommandFeedback('הבקשה התקבלה. מכין את הקראת הדף…');const feedback=feedbackSequence;const checkPlayback=setInterval(()=>{if(feedback!==feedbackSequence||voiceSessionEnded){clearInterval(checkPlayback);return;}if((window.__ronenPageSource&&window.__ronenAudioContext?.state==='running')||window.__ronenPageAudio||window.speechSynthesis?.speaking){clearInterval(checkPlayback);readyForCommand();}else if(reader.dataset.reading!=='1'){clearInterval(checkPlayback);showCommandFeedback('ההקראה נעצרה. מקשיב לפקודה הבאה',false);}},100);
    }finally{if(request===readRequestId)readStartPending=false;startWakeListening();}
  }
  function handleVoiceChoice(text){if(handleBackRequest(text))return true;if(handlePageTopRequest(text))return true;if(handlePauseNarration(text))return true;if(isFinishVoiceRequest(text)){finishVoiceSession();return true;}if(stopCurrentNarration(text))return true;if(handleNarrationCommand(text))return true;if(isReadPageRequest(text)){readCurrentPage();return true;}const value=normalize(text);if(/סגור(?: את)?(?: ה)?(?:ניווט|חלון)|סגור ניווט/.test(value)){spokenClose();return true;}if(/(?:תתחיל|התחל|תתחילי|להתחיל) מחדש/.test(value)){begin();return true;}const number=voiceNumber(text);if(mode==='targets'&&number>0){const target=candidates[number-1];if(target)navigate(target);else say('בחרו מספר מתוך האפשרויות שהקראתי.',listen);return true;}if(mode==='choices'&&number>0){chooseSpoken(text);return true;}return false;}
  function chooseSpoken(text){const value=normalize(text);if(/(?:^|\s)(1|אחת|אחד|ראשונה)(?:\s|$)/.test(value))begin();else if(/(?:^|\s)(2|שתיים|שתים|שניים|שנים|שנייה)(?:\s|$)/.test(value))navigate();else if(/(?:^|\s)(3|שלוש|שלושה|שלישית)(?:\s|$)/.test(value))spokenClose();}
  function resolve(text){
    if(!entries.length){try{const cached=JSON.parse(localStorage.getItem('portfolioVoiceMap')||'null');if(cached?.version===mapVersion&&Array.isArray(cached.entries))entries=cached.entries;}catch{}if(!entries.length)entries=baseMap();}
    refreshCurrentSections();
    command.lastIndex=0;const query=normalize(text).replace(command,' ').replace(/(?:^|\s)(?:נו{1,3}ט|תעבור|עבור|לעבור|בבקשה|אל)(?=\s|$)/g,' ').replace(/\s+/g,' ').trim();
    if(/(?:^|\s)(?:ל?עמוד הבית|ל?דף הבית|ל?בית)(?:\s|$)/.test(query))return [{path:document.documentElement.lang==='en'?'index-en.html':'index.html',title:'עמוד הבית'}];
    if(!query)return [];
    const queryTokens=tokens(query),explicitPage=/(?:לשונית|טאב|עמוד|דף)\s/.test(query),sectionHints=queryTokens.filter(w=>['קורס','קורסים','השכלה','שכלה','ניסיון','כישורים','כישרורים','יכולות','הכשרה','יתרונות','השירות','השגים'].includes(w));
    const ranked=entries.filter(entry=>!explicitPage||entry.kind==='page').map(entry=>{let score=0;const labels=[entry.title,...(entry.aliases||[]),...(entry.kind==='page'?intentions[entry.path]||[]:[])];for(const label of labels){const name=normalize(label);if(!name)continue;if(query===name||query==='ל'+name)score=Math.max(score,100+(entry.kind==='page'?10:0));else if(name.length>=3&&query.includes(name))score=Math.max(score,65+Math.min(name.length,25));else{const wanted=tokens(name);if(!wanted.length)continue;let hits=0;for(const word of wanted){if(queryTokens.some(q=>q===word))hits+=1;else if(word.length>=4&&queryTokens.some(q=>q.length>=4&&distance(q,word)<= (Math.max(q.length,word.length)>=7?2:1)))hits+=0.8;else if(word.length>=3&&queryTokens.some(q=>q.length>=3&&sound(q).length>=2&&sound(q)===sound(word)))hits+=0.75;}if(hits===wanted.length)score=Math.max(score,58+Math.min(wanted.length*6,24));else if(hits>=0.75&&hits/wanted.length>=0.65)score=Math.max(score,45+hits*6);}}if(score>0&&pages.some(([path])=>path===entry.path.split('#')[0]))score+=10;if(score>0&&entry.kind==='section'){const heading=tokens(entry.title);if(sectionHints.some(h=>heading.includes(h)))score+=25;if(entry.path.split('#')[0]===currentPage())score+=8;}return {entry,score};}).filter(x=>x.score>=45).sort((a,b)=>b.score-a.score);
    if(!ranked.length)return [];
    const bare=tokens(query).join(' ');
    const exactSections=!explicitPage?ranked.filter(item=>item.entry.kind==='section'&&[item.entry.title,...(item.entry.aliases||[])].some(label=>tokens(label).join(' ')===bare)):[];
    if(exactSections.length){
      const localExact=exactSections.filter(item=>item.entry.path.split('#')[0]===currentPage());
      const canonical=exactSections.filter(item=>pages.some(([path,title,aliases])=>path===item.entry.path.split('#')[0]&&[title,...aliases].some(label=>tokens(label).join(' ')===bare)));
      const exact=localExact.length?localExact:canonical.length?canonical:exactSections;
      return [...new Map(exact.map(item=>[item.entry.path,item.entry])).values()].slice(0,5);
    }
    const local=!explicitPage?ranked.filter(item=>item.entry.kind==='section'&&item.entry.path.split('#')[0]===currentPage()&&item.score>=80):[];const search=local.length?local:ranked;const best=search[0].score;const unique=search.filter((x,i,a)=>a.findIndex(y=>y.entry.path===x.entry.path)===i);if(best>=55&&(!unique[1]||best-unique[1].score>=8))return [unique[0].entry];return unique.filter(x=>best-x.score<8).map(x=>x.entry).slice(0,5);
  }
  async function navigate(chosen){
    if(!active||mode==='navigate')return;showCommandFeedback();commandFeedback.dataset.kind='navigation';clearTimeout(timer);stopSpeech();mode='navigate';options.hidden=true;if(!recognition)listen();const id=generation;
    status.textContent='מעבד את בקשתך… מחפש את העמוד או הנושא';
    if(!entries.length){entries=baseMap();refreshCurrentSections();}
    let targets=chosen?[chosen]:resolve(field.value);
    if(targets.length!==1){
      await new Promise(done=>{
        let finished=false;const complete=()=>{if(finished)return;finished=true;clearInterval(interval);done();};
        const interval=setInterval(()=>{if(!active||id!==generation||resolve(field.value).length===1)complete();},50);
        siteMap().then(complete,complete);
      });
      if(!active||id!==generation)return;targets=chosen?[chosen]:resolve(field.value);
    }
    if(targets.length!==1){candidates=targets;mode=targets.length?'targets':'clarify';matches.replaceChildren();status.textContent=targets.length?'נמצאו כמה יעדים מתאימים. '+targets.map((target,index)=>(index+1)+', '+target.title).join('. ')+'. אמרו את מספר היעד, או את שמו.':'לא מצאתי לשונית או חלק שמתאימים לבקשה. הבקשה נשמרה. אמרו שוב את היעד בניסוח אחר.';showCommandFeedback(status.textContent,false);say(status.textContent,listen);return;}
    const target=targets[0];showCommandFeedback('הבקשה התקבלה. מעביר אל '+target.title+'…');
    webhook('navigate',{transcript:field.value,target:target.path}).catch(()=>{});
    if(!active||id!==generation)return;const url=new URL(target.path,location.origin);if(url.origin!==location.origin)return;
    await paintCommandFeedback();if(!active||id!==generation)return;try{sessionStorage.setItem('portfolioVoiceTransition',JSON.stringify({at:Date.now(),path:url.pathname}));}catch{}saveDraft('');rememberContinuousMicrophone();close({keepMicrophone:true});if(url.pathname===location.pathname&&url.hash){location.hash=url.hash;revealHash();}else if(url.pathname===location.pathname&&!url.hash){window.scrollTo({top:0,behavior:'instant'});}else location.assign(url.href);
  }
  function makeDialog(){
    const style=document.createElement('style');style.id='portfolioVoiceNavigationStyle';style.textContent='#portfolioVoiceNavigation{position:fixed;top:50%;left:50%;margin:0;transform:translate(-50%,-50%);z-index:99997;direction:rtl;width:min(520px,calc(100vw - 32px));max-height:calc(100dvh - 32px);box-sizing:border-box;overflow:auto;padding:24px;border:1px solid #d5e0ed;border-radius:18px;background:#fff;color:#102235;box-shadow:0 16px 60px #10223540;font-family:inherit}#portfolioVoiceNavigation::backdrop{background:#10223590}#portfolioVoiceNavigation h2{margin:0 0 12px;font-size:25px}#portfolioVoiceNavigation p{line-height:1.6;margin:10px 0}#portfolioVoiceNavigation textarea{box-sizing:border-box;width:100%;min-height:85px;padding:12px;border:1px solid #bbcddd;border-radius:10px;font:inherit;resize:vertical;color:#102235;background:#fff}#portfolioVoiceNavigation .voiceActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}#portfolioVoiceNavigation button{min-height:42px;padding:10px 14px;border:1px solid #ccd9e7;border-radius:9px;font:inherit;cursor:pointer;background:#edf3ff;color:#195ed8}#portfolioVoiceNavigation button:focus-visible,#portfolioVoiceNavigation textarea:focus-visible{outline:3px solid #195ed8;outline-offset:2px}#portfolioVoiceNavigation button.voicePrimary{background:#195ed8;color:#fff}#portfolioVoiceNavigation [hidden]{display:none!important}#voiceHookStatus{font-size:13px;color:#54677a}#voiceMatches{display:flex;gap:8px;flex-wrap:wrap}';document.head.appendChild(style);
    dialog=document.createElement('dialog');dialog.id='portfolioVoiceNavigation';dialog.setAttribute('aria-labelledby','voiceNavigationTitle');dialog.innerHTML='<h2 id="voiceNavigationTitle">ניווט קולי</h2><div class="voiceIndicator" aria-hidden="true">🎙️</div><input type="hidden" id="voiceNavigationText"><p id="voiceNavigationStatus" hidden></p><p id="voiceHookStatus" hidden></p><div id="voiceMatches" hidden></div><div class="voiceActions"><button type="button" id="voiceMic">חדש האזנה</button><button type="button" id="voiceRestart">התחל מחדש</button><button type="button" id="voiceClose">סיים ניווט קולי</button></div><div class="voiceActions"><button type="button" id="voiceCheckMic">בדוק מיקרופון</button><button type="button" id="voiceCheckLevel">בדוק עוצמת מיקרופון</button></div><section id="voiceDiagnostics" hidden><p id="voiceDiagnosticMessage" role="status" aria-live="polite"></p><div id="voiceMicMeter" hidden><label for="voiceMicLevel">עוצמת הקול הנקלטת</label><meter id="voiceMicLevel" min="0" max="1" value="0" aria-label="עוצמת המיקרופון"></meter></div><div id="voiceManualHelp" hidden><p id="voiceManualInstructions"></p><div class="voiceActions"><a href="ms-settings:sound">הגדרות קול ב־Windows</a><a href="ms-settings:privacy-microphone">גישה למיקרופון ב־Windows</a><a href="https://support.microsoft.com/en-us/windows/hardware/drivers/fix-microphone-problems" target="_blank" rel="noopener noreferrer">עזרה בפתרון בעיות מיקרופון</a></div></div></section><div id="voiceOptions" aria-hidden="true" hidden></div>';
    const visual=document.createElement('style');visual.textContent='#portfolioVoiceNavigation .voiceIndicator{text-align:center;font-size:54px;margin:20px 0}#portfolioVoiceNavigation .voiceActions{justify-content:center}#portfolioVoiceNavigation #voiceOptions{display:none!important}';document.head.appendChild(visual);
    dialog.querySelector('#voiceCheckMic').onclick=()=>runMicrophoneCheck(false);dialog.querySelector('#voiceCheckLevel').onclick=()=>runMicrophoneCheck(true); visual.textContent+='#portfolioVoiceNavigation{right:auto;bottom:auto;z-index:100001;max-width:calc(100vw - 32px)}#voiceDiagnostics{padding:12px;margin-top:14px;border:1px solid #d5e0ed;border-radius:10px;background:#f6f9ff;font-size:14px}#voiceMicLevel{display:block;width:100%;height:24px;margin-top:6px}#voiceManualHelp a{color:#195ed8;text-decoration:underline}#portfolioVoiceNavigation button:disabled{opacity:.55;cursor:wait}'; document.body.appendChild(dialog);field=dialog.querySelector('input[type=hidden]');status=dialog.querySelector('#voiceNavigationStatus');hookStatus=dialog.querySelector('#voiceHookStatus');options=dialog.querySelector('#voiceOptions');matches=dialog.querySelector('#voiceMatches');mic=dialog.querySelector('#voiceMic');
    dialog.querySelector('#voiceRestart').onclick=()=>begin();dialog.querySelector('#voiceClose').onclick=finishVoiceSession;
    mic.onclick=()=>{blocked=false;captureState.error='';stopSpeech();stopListening();requestMicrophone();listen();clearTimeout(timer);timer=setTimeout(showChoices,30000);};
    dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
    document.addEventListener('keydown',e=>{if(active&&e.key==='Escape'){e.preventDefault();close();}});
  }
  function open(request=''){
    if(active)return;Object.assign(captureState,{recognition:'idle',error:'',audioStarted:false,speechDetected:false,resultReceived:false,microphoneSignal:false});rememberContinuousMicrophone();readRequestId++;readStartPending=false;stopWakeListening();if(!dialog)makeDialog();lastFocus=document.activeElement;active=true;session=window.crypto?.randomUUID?.()||String(Date.now());dialog.show();syncToggle();
    primeSharedAudio();requestMicrophone();
    document.querySelectorAll('#pageReadButton,#englishPageReadButton').forEach(b=>{if(b.dataset.reading==='1')b.click();});
    if(typeof request==='string'&&request){generation++;mode='listen';saveDraft(request);navigate();}else begin(false);hookStatus.textContent='מחבר ל־Make…';const id=generation;
    siteMap().then(async mapping=>{let notified=false;try{notified=localStorage.getItem('portfolioVoiceMakeMapDate')===mapping.date;}catch{}const remap=mapping.remap||!notified;const response=await webhook('open',{remap,site_map:remap?mapping.entries:[],date:mapping.date});try{localStorage.setItem('portfolioVoiceMakeMapDate',mapping.date);}catch{}return response;}).then(()=>{if(active&&id===generation)hookStatus.textContent='Make קיבל את הלחיצה. הניווט מוכן.';}).catch(()=>{if(active&&id===generation)hookStatus.textContent='Make לא אישר את הלחיצה. אפשר עדיין לנווט באתר.';});
  }
  try{const transition=JSON.parse(sessionStorage.getItem('portfolioVoiceTransition')||'null');sessionStorage.removeItem('portfolioVoiceTransition');if(transition&&Date.now()-transition.at<10000&&continuousMicrophone&&!voiceSessionEnded){showCommandFeedback('העמוד נפתח. מחדש האזנה…');commandFeedback.dataset.kind='navigation';}}catch{}
  window.PortfolioVoiceNavigation={open,close:finishVoiceSession,finish:finishVoiceSession,isActive:()=>active||continuousMicrophone,getDiagnostics:()=>({...captureState,microphoneOpen:Boolean(microphoneStream?.getTracks().some(track=>track.readyState!=='ended')),speechRecognitionSupported:Boolean(window.SpeechRecognition||window.webkitSpeechRecognition),sessionActive:active||continuousMicrophone})};
})();