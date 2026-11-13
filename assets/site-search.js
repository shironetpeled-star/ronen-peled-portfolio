// Independent text-search engine. Matching rules copied from voice navigation; no voice API or microphone dependency.
(function(){
'use strict';
if(window.PortfolioSiteSearch)return;
  const pages=[
    ['index.html','עמוד הבית',['בית','דף הבית','עמוד הבית']],
    ['product.html','מנהל מוצר',['ניהול מוצר','מוצר','פרודקט','product management','product','PM']],
    ['project.html','מנהל פרויקט',['ניהול פרויקטים','מנהל פרויקטים','ניהול פרויקט','project management','project manager','PM']],
    ['system.html','מנתח מערכות',['ניתוח מערכות','אפיון מערכות','מנתח','systems analysis','system analysis']],
    ['magic.html','מתכנת MAGIC',['מגיק','מג יק','מג׳יק','magic']],
    ['customer.html','Customer Success',['לקוחות','קסטומר סקסס','קאסטומר סקסס','הצלחת לקוחות','customer success']],
    ['experience.html','ניסיון',['נסיון','ניסיון תעסוקתי']],
    ['projects.html','עבודות ופרויקטים',['פרויקטים','עבודות']],
    ['work-environments.html','סוגי מערכות',['סביבות עבודה']],
    ['education.html','השכלה',['לימודים','קורסים','הכשרות','education','training']],
    ['military.html','שירות צבאי',['צבא','הצבא','צבאי','צבאית','שרות צבאי','צה ל','צהל','שירות ביטחון']],
    ['skills.html','יכולות',['כישורים','יכולות וכישורים']],
    ['advantages.html','היתרונות שלי',['יתרונות']],
    ['contact.html','צור איתי קשר',['יצירת קשר','צור קשר','קשר']],
    ['personal.html','פרטים אישיים',['מידע אישי','קצת על רונן','פרטים איישיים']],
    ['employment.html','העדפות תעסוקה',['העדפות עבודה','העדפות משרה','פרטי חיפוש עבודה','חיפוש עבודה','משרה מבוקשת','תנאי עבודה','job preferences','employment preferences']]
  ];
  const pagePairs=[["index.html","index-en.html","Home"],["product.html","product-en.html","Product Manager"],["project.html","project-en.html","Project Manager"],["system.html","system-en.html","System Analyst"],["magic.html","en-05.html","MAGIC Developer"],["customer.html","en-06.html","Customer Success"],["experience.html","history-en.html","Experience"],["projects.html","role-magic-en.html","Work & Projects"],["work-environments.html","work-environments-en.html","System Types"],["education.html","role-customer-en.html","Education"],["military.html","service-page-en.html","Military Service"],["skills.html","skills-en.html","Skills"],["advantages.html","advantages-en.html","My Advantages"],["contact.html","contact-en.html","Contact Me"],["personal.html","personal-en.html","Personal Details"],["employment.html","employment-en.html","Employment Preferences"]];
  const englishPaths=new Set(pagePairs.map(pair=>pair[1]));
  const canonicalPath=path=>pagePairs.find(pair=>pair[1]===path)?.[0]||path;
  pages.push(...pagePairs.map(([he,en,title])=>{const source=pages.find(page=>page[0]===he);return [en,title,[source[1],...source[2],...(he==='employment.html'?['Job Preferences','Job Search Details']:[])]];}));
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

const currentPage=()=>location.pathname.split('/').pop()||'index.html';
const mapVersion=2;let entries=[],mapPromise,candidates=[];
  function sectionAliases(title){
    const text=normalize(title),aliases=[];
    const groups=[
      [/אזורי עבודה|preferred work locations/i,['מיקום עבודה','מיקום משרה','אזור עבודה','מקומות עבודה מועדפים','איפה לעבוד','work locations','location preferences']],
      [/מתכונת עבודה|work arrangement/i,['עבודה מהבית','עבודה מרחוק','היברידי','היברידית','משרד','מיקור חוץ','אאוטסורסינג','אוטסורסינג','outsourcing','hybrid','remote work','office work']],
      [/דרגת תפקיד|role level/i,['דרגות תפקיד','דרגת משרה','רמת תפקיד','ג׳וניור','גוניור','מיד לבל','סניור','ראש צוות','hands on','הנדס און','seniority','junior','mid level','senior','team lead']],
      [/היקף משרה|employment scope/i,['משרה מלאה','משרה זמנית','לפי שעות','היקף עבודה','full time','temporary','hourly']],
      [/פרטי חיפוש עבודה|job search details/i,['חיפוש משרה','פרטי משרה','job search']],
      [/טווח אזורי עבודה|regional work range/i,['אשדוד גדרה','תל אביב פתח תקווה','טווח יישובים','יישובים באוטובוס','רשימת יישובים','רשימת ישובים','locality list','ashdod gedera']],
      [/עבודה בירושלים|work in jerusalem/i,['ירושלים','הר חוצבים','ממילא','תחנה מרכזית ירושלים','jerusalem','har hotzvim','mamilla']],
      [/יישובים בקרבת רכבת|localities near railway stations/i,['קרוב לרכבת','ליד רכבת','יישובים ברכבת','ישובים ליד רכבת','הרצליה','אשקלון','שדרות','כפר סילבר','herzliya','ashkelon','sderot','kfar silver','railway locations']],
      [/תחומים מבוקשים|desired roles/i,['תפקידים מבוקשים','סוגי משרות','תחומי תפקיד','desired positions']],
      [/^זמינות$|^availability$/i,['מועד התחלה','התחלת עבודה','זמין','מתי אפשר להתחיל','start date','availability']],
      [/^שפות$|^languages$/i,['ידיעת שפות','רמות שפות','שפות מדוברות','language skills']],
      [/תחביבים|outside work|hobbies/i,['פנאי','תחומי עניין','תחביב','hobbies','interests']],
      [/תאריך לידה|date of birth/i,['יום הולדת','תאריך הלידה','birth date','birthday']],
      [/אימייל|^email$/i,['מייל','דואר אלקטרוני','כתובת מייל','email address']],
      [/טלפון|^phone$/i,['נייד','מספר נייד','מספר טלפון','mobile number']],
      [/מיקוד|postal code/i,['מספר מיקוד','postcode','zip code']],

      [/השכלה|הכשרות|הסמכות|education|training|certifications/,['השכלה','לימודים','הכשרות','education','training']],
      [/חמישה עולמות|5 עולמות/,['חמישה עולמות שמתחברים','חמש עולמות שמתחברים','5 עולמות שמתחברים','חמישה עולמות','חמשת העולמות','עולמות שמתחברים','העולמות המקצועיים','חמישה תחומים שמתחברים']],
      [/^התנדבות(?: בקהילה)?$/,['התנדבות','התנדבות בקהילה','תרומה לקהילה','פעילות קהילתית','עזרה לנזקקים','סיוע לקהילה']],
      [/סוגי פיתוח מערכות/,['סוגי פיתוח','תחומי פיתוח מערכות','דרכי פיתוח','איך מפתח מערכות','סוגי תוכנות שפיתח']],
      [/יתרונות|business functional technical/,['יתרונות','יתרונות שלי','היתרונות שלי','למה לבחור ברונן','מה מייחד אותו']],
      [/^צבא$/,['צבא','צבאי','שרות צבאי','שירות צבאי','צה ל','צהל']]
    ];
    for(const [pattern,words] of groups)if(pattern.test(text))aliases.push(...words);
    return [...new Set(aliases)];
  }
  function choiceNumber(text){
    let value=normalize(text).replace(/^(?:(?:בחר|בחרי|תבחר|תבחרי|בחירה|אני בוחר|אני בוחרת)\s+)?(?:ב?אפשרות\s+)?(?:מספר\s+)?/,'').replace(/\s+בבקשה$/,'').trim();
    value=value.replace(/^(?:(?:choose|select)\s+)?(?:option\s+)?(?:number\s+)?/,'').trim();
    if(/^\d{1,2}$/.test(value))return Number(value);
    const names=[['1','אחת','אחד','ראשונה','ראשון','one','first'],['2','שתיים','שתים','שניים','שנים','שנייה','שניה','שני','two','second'],['3','שלוש','שלושה','שלישית','שלישי','three','third'],['4','ארבע','ארבעה','רביעית','four'],['5','חמש','חמישה','חמישית','five'],['6','שש','שישה','שישית','six'],['7','שבע','שבעה','שביעית','seven'],['8','שמונה','שמינית','eight'],['9','תשע','תשעה','תשיעית','nine'],['10','עשר','עשרה','עשירית','ten'],['אחת עשרה','אחד עשר','eleven'],['שתים עשרה','שתיים עשרה','שנים עשר','twelve'],['שלוש עשרה','שלושה עשר','thirteen'],['ארבע עשרה','ארבעה עשר','fourteen'],['חמש עשרה','חמישה עשר','fifteen'],['שש עשרה','שישה עשר','sixteen']];
    return names.findIndex(group=>group.includes(value))+1;
  }
  function targetPage(target){return pages.find(page=>page[0]===target.path.split('#')[0]);}
  function targetLabel(target){
    const page=targetPage(target),title=page?.[1]||target.path.split('#')[0],english=document.documentElement.lang==='en';
    return target.kind==='page'||!target.path.includes('#')?(english?title+' tab':'לשונית '+title):(english?(target.title+(target.context?' — '+target.context:''))+' on the '+title+' page':(target.title+(target.context?' — '+target.context:''))+' בדף '+title);
  }
  function navigationPhrase(value){
    return tokens(normalize(value).replace(/(?:^|\s)(?:בדף|בעמוד|בלשונית|ללשונית|לשונית|ל?דף|ל?עמוד|ל?חלק|ל?נושא|ל?קטע|החלק|חלק|נושא|אפשרות|מספר|בחר|בחרי|תבחר|תבחרי|פתח|תפתח|תציג|הצג|תראה|קח|אותי|page|tab|section|on|in|the|option|choose|select|open|show|go|navigate|to)(?=\s|$)/g,' ')).join(' ');
  }
  function navigationNameScore(text,name){
    const query=navigationPhrase(text),key=navigationPhrase(name);if(!query||!key)return 0;
    if(query===key)return 100+key.split(' ').length;
    const wanted=query.split(' '),available=key.split(' ');if(!wanted.some(word=>word.length>=3))return 0;
    let penalty=0;for(const word of wanted){if(available.includes(word))continue;if(word.length>=3&&available.some(part=>part.startsWith(word)))continue;if(word.length>=4&&available.some(part=>part.length>=4&&distance(word,part)<=1)){penalty+=8;continue;}return 0;}
    return 60+wanted.length*5-penalty;
  }
  function matchingCandidates(text,list=candidates){
    const query=navigationPhrase(text);if(!query)return [];
    const tabRequest=/(?:^|\s)(?:ל?לשונית|טאב|tab)(?:\s|$)/.test(normalize(text));
    const ranked=list.filter(target=>!tabRequest||target.kind==='page'||!target.path.includes('#')).map(target=>{
      const page=targetPage(target),parentNames=page?[page[1],...page[2],...(intentions[canonicalPath(page[0])]||[])]:[],names=[targetLabel(target)];
      if(target.kind==='page'||!target.path.includes('#'))names.push(target.title,...(target.aliases||[]),...(intentions[canonicalPath(target.path.split('#')[0])]||[]));
      else{for(const title of [target.title,...(target.aliases||[])])for(const parent of parentNames)names.push(title+' '+parent);names.push(target.title,...(target.aliases||[]),...parentNames);}
      const score=Math.max(0,...names.map(name=>navigationNameScore(text,name)));
      return {target,score};
    }).filter(item=>item.score>0).sort((a,b)=>b.score-a.score);
    if(!ranked.length)return [];return ranked.filter(item=>item.score===ranked[0].score).map(item=>item.target);
  }
  function resolve(text){
    if(!entries.length){try{const cached=JSON.parse(localStorage.getItem('portfolioTextSearchMap')||'null');if(cached?.version===mapVersion&&Array.isArray(cached.entries))entries=cached.entries;}catch{}if(!entries.length)entries=baseMap();}
    refreshCurrentSections();
    command.lastIndex=0;const query=normalize(text).replace(command,' ').replace(/(?:^|\s)(?:נו{1,3}ט|תעבור|עבור|לעבור|בבקשה|אל)(?=\s|$)/g,' ').replace(/\s+/g,' ').trim();
    if(/(?:^|\s)(?:ל?עמוד הבית|ל?דף הבית)(?:\s|$)/.test(query)||/^(?:ל?בית)$/.test(query))return [{path:document.documentElement.lang==='en'?'index-en.html':'index.html',title:'עמוד הבית'}];
    if(!query)return [];
    const queryTokens=tokens(query),explicitPage=/(?:^|\s)(?:ל?לשונית|טאב|ל?עמוד|ל?דף|page|tab)\s/.test(query),sectionHints=queryTokens.filter(w=>['קורס','קורסים','השכלה','שכלה','ניסיון','כישורים','כישרורים','יכולות','הכשרה','יתרונות','השירות','השגים'].includes(w));
    const sectionRequest=/(?:^|\s)(?:ל?חלק|ל?נושא|ל?קטע|section|topic)(?:\s|$)/.test(query);
    if(!explicitPage&&!sectionRequest&&['השכלה','שכלה','לימודים','ימודים','הכשרות','כשרות','הסמכות','סמכות','קורסים','קורס','education','training','courses','certifications'].includes(queryTokens.join(' '))){
      const page=pages.find(([path])=>canonicalPath(path)==='education.html'&&englishPaths.has(path)===englishPaths.has(currentPage()));
      const sections=entries.filter(entry=>entry.kind==='section'&&['product.html','project.html','system.html','magic.html','customer.html'].includes(canonicalPath(entry.path.split('#')[0]))&&englishPaths.has(entry.path.split('#')[0])===englishPaths.has(currentPage())&&/השכלה|הכשרות|הסמכות|education|training|certifications/i.test(entry.title));
      sections.sort((a,b)=>pages.findIndex(page=>page[0]===a.path.split('#')[0])-pages.findIndex(page=>page[0]===b.path.split('#')[0]));
      const choices=[...(page?[{path:page[0],title:page[1],aliases:page[2],kind:'page'}]:[]),...sections];
      if(choices.length>1)return [...new Map(choices.map(target=>[target.path,target])).values()].slice(0,10);
    }
    const contextRequest=/(?:^|\s)(?:בדף|בעמוד|in the|on the)(?:\s|$)/.test(query);
    const languageEntries=entries.filter(entry=>englishPaths.has(entry.path.split('#')[0])===englishPaths.has(currentPage()));
    if(contextRequest){const contextual=matchingCandidates(text,languageEntries);if(contextual.length)return contextual;}
    if(!sectionRequest){
      const bareQuery=tokens(query).join(' ');
      const pageExact=pages.filter(([path])=>englishPaths.has(path)===englishPaths.has(currentPage())).filter(([,title,aliases])=>[title,...aliases].some(label=>tokens(label).join(' ')===bareQuery));
      if(pageExact.length===1)return [{path:pageExact[0][0],title:pageExact[0][1],kind:'page'}];
    }
    if(explicitPage){
      const exactPages=pages.filter(([path])=>englishPaths.has(path)===englishPaths.has(currentPage())).flatMap(([path,title,aliases])=>[title,...aliases].map(label=>({path,title,length:normalize(label).length,label:normalize(label)}))).filter(item=>query===item.label||query.endsWith(' '+item.label)).sort((a,b)=>b.length-a.length);
      if(exactPages.length&&(!exactPages[1]||exactPages[0].length>exactPages[1].length||exactPages[0].path===exactPages[1].path))return [{path:exactPages[0].path,title:exactPages[0].title,kind:'page'}];
    }
    if(!sectionRequest&&!contextRequest){
      const partialPages=matchingCandidates(text,baseMap().filter(target=>englishPaths.has(target.path)===englishPaths.has(currentPage()))).filter(target=>[target.title,...(target.aliases||[]),...(intentions[canonicalPath(target.path)]||[])].some(label=>navigationNameScore(text,label)>=65));
      if(partialPages.length)return partialPages;
    }
    const ranked=entries.filter(entry=>englishPaths.has(entry.path.split('#')[0])===englishPaths.has(currentPage())).filter(entry=>!explicitPage||entry.kind==='page').map(entry=>{let score=0;const labels=[entry.title,...(entry.aliases||[]),...(entry.kind==='page'?intentions[canonicalPath(entry.path)]||[]:[])];for(const label of labels)score=Math.max(score,navigationNameScore(text,label));for(const label of labels){const name=normalize(label);if(!name)continue;if(query===name||query==='ל'+name)score=Math.max(score,100+(entry.kind==='page'?10:0));else if(name.length>=3&&query.includes(name))score=Math.max(score,65+Math.min(name.length,25));else{const wanted=tokens(name);if(!wanted.length)continue;let hits=0;for(const word of wanted){if(queryTokens.some(q=>q===word))hits+=1;else if(word.length>=4&&queryTokens.some(q=>q.length>=4&&distance(q,word)<= (Math.max(q.length,word.length)>=7?2:1)))hits+=0.8;else if(word.length>=3&&queryTokens.some(q=>q.length>=3&&sound(q).length>=2&&sound(q)===sound(word)))hits+=0.75;}if(hits===wanted.length)score=Math.max(score,58+Math.min(wanted.length*6,24));else if(hits>=0.75&&hits/wanted.length>=0.65)score=Math.max(score,45+hits*6);}}if(score>0&&pages.some(([path])=>path===entry.path.split('#')[0]))score+=10;if(score>0&&entry.kind==='section'){const heading=tokens(entry.title);if(sectionHints.some(h=>heading.includes(h)))score+=25;if(entry.path.split('#')[0]===currentPage())score+=8;}return {entry,score};}).filter(x=>x.score>=45).sort((a,b)=>b.score-a.score);
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

const english=document.documentElement.lang==='en';
const words=english?{label:'Search this site',placeholder:'Page, section or field title',search:'Search',reset:'New search',title:'Search results',close:'Close search results',loading:'Finding pages, sections and fields…',empty:'Enter a page, section or field title.',none:'No matching destination was found. You can choose a page below or start a new search.',found:'Choose a result, or enter its number or name.',choice:'Result number or name',choose:'Go',ambiguous:'More than one result matches. Choose from the options below.',invalid:'Choose a number from the list or enter a matching name.',error:'Search could not load. Please try again.'}:{label:'חפש באתר',placeholder:'שם דף, חלק בדף או כותרת שדה',search:'חיפוש',reset:'חיפוש מחדש',title:'תוצאות חיפוש',close:'סגירת תוצאות החיפוש',loading:'מחפש דפים, חלקי דפים וכותרות שדות…',empty:'יש להזין שם דף, חלק בדף או כותרת שדה.',none:'לא נמצא יעד מתאים. ניתן לבחור דף מהרשימה או להתחיל חיפוש מחדש.',found:'בחרו תוצאה, או הקלידו את המספר או את שם המקום.',choice:'מספר אפשרות או שם מקום',choose:'מעבר',ambiguous:'יש יותר מאפשרות אחת מתאימה. בחרו מבין האפשרויות הבאות.',invalid:'יש לבחור מספר מהרשימה או להקליד שם מתאים.',error:'לא ניתן לטעון את החיפוש כרגע. נסו שוב.'};
function baseMap(){return pages.map(([path,title,aliases])=>({path,title,aliases,kind:'page'}));}
function markTargets(root){
 const counts=new Map(),selector='main h1,main h2,main h3,main h4,main label,main legend,main dt,main th,main p>b,main p>strong,main .professionSkillsHeading,main .skillsHeaderTitle,main .skillAbility,main .workAreaFirstRow>span,main .workAreaFollowingRow,main input[aria-label],main select[aria-label],main textarea[aria-label]';
 return [...root.querySelectorAll(selector)].filter(h=>!h.closest('nav,#sharedBottomNavigation,#englishSharedBottom,#roleProfessionNavigation,.professionBottomNav,.enRoleNavigation,#centralMilitaryQuickNav,#siteSearchResults')).flatMap(h=>{
  const copy=h.cloneNode(true);copy.querySelectorAll('[aria-hidden="true"],img,script,style').forEach(x=>x.remove());
  const title=(h.getAttribute('data-voice-title')||h.getAttribute('aria-label')||copy.textContent).replace(/\s+/g,' ').trim().slice(0,180);
  if(!title||!normalize(title))return [];
  if(h.matches('p>b,p>strong')&&!/[:：]$/.test(title))return [];
  const key=normalize(title),ordinal=(counts.get(key)||0)+1;counts.set(key,ordinal);
  let hash=2166136261;for(const char of key){hash^=char.charCodeAt(0);hash=Math.imul(hash,16777619);}
  const id='site-search-'+(hash>>>0).toString(36)+(ordinal>1?'-'+ordinal:'');
  h.dataset.siteSearchId=id;
  const field=h.matches('label,legend,dt,th,input,select,textarea,.skillAbility,p>b,p>strong');
  let context='';if(field){const heading=h.closest('article,.personalCard,.skill,.job,.experienceCard')?.querySelector('h2,h3,h4');if(heading){const c=heading.cloneNode(true);c.querySelectorAll('[aria-hidden="true"],img').forEach(x=>x.remove());context=c.textContent.replace(/\s+/g,' ').trim().slice(0,180);if(normalize(context)===key)context='';}}
  return [{title,id,field,context}];
 });
}
function refreshCurrentSections(){
 entries=entries.filter(e=>e.kind!=='section'||e.path.split('#')[0]!==currentPage());
 markTargets(document).forEach(h=>entries.push({path:currentPage()+'#'+h.id,title:h.title,kind:'section',field:h.field,context:h.context,aliases:[...sectionAliases(h.title),...(h.context?[h.title+' '+h.context]:[])]}));
}
async function siteMap(){
 if(mapPromise)return mapPromise;
 mapPromise=(async()=>{
  const date=new Date().toISOString().slice(0,10);
  try{const old=JSON.parse(localStorage.getItem('portfolioTextSearchMap')||'null');if(old?.version===mapVersion&&old.date===date&&Array.isArray(old.entries)&&old.entries.length){entries=old.entries;refreshCurrentSections();return entries;}}catch{}
  const collected=baseMap(),pending=pages.map(p=>p[0]);let complete=true;
  while(pending.length)await Promise.all(pending.splice(0,6).map(async path=>{
   try{
    let doc;
    if(path===currentPage())doc=document;
    else{const r=await fetch('/'+path,{signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error();doc=new DOMParser().parseFromString(await r.text(),'text/html');}
    markTargets(doc).forEach(h=>collected.push({path:path+'#'+h.id,title:h.title,kind:'section',field:h.field,context:h.context,aliases:[...sectionAliases(h.title),...(h.context?[h.title+' '+h.context]:[])]}));
   }catch{complete=false;}
  }));
  entries=collected;refreshCurrentSections();
  if(complete)try{localStorage.setItem('portfolioTextSearchMap',JSON.stringify({version:mapVersion,date,entries}));}catch{}
  if(!complete)mapPromise=null;
  return entries;
 })();
 return mapPromise;
}
function revealHash(){
 if(!location.hash.startsWith('#site-search-'))return;
 markTargets(document);
 const id=decodeURIComponent(location.hash.slice(1));
 const target=[...document.querySelectorAll('[data-site-search-id]')].find(h=>h.dataset.siteSearchId===id);
 if(!target)return;
 for(let p=target;p&&p.tagName!=='MAIN';p=p.parentElement){
  if(p.tagName==='DETAILS')p.open=true;
  if(p.hidden){p.hidden=false;if(p.id)document.querySelectorAll('[aria-controls]').forEach(a=>{if(a.getAttribute('aria-controls')===p.id)a.setAttribute('aria-expanded','true');});}
 }
 requestAnimationFrame(()=>{
  const top=Math.max(0,...[...document.querySelectorAll('header.top,#pageReadTopicControls')].map(el=>['fixed','sticky'].includes(getComputedStyle(el).position)?el.getBoundingClientRect().bottom:0));
  scrollTo({top:Math.max(0,scrollY+target.getBoundingClientRect().top-top-20),behavior:'instant'});
  target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
  target.classList.add('siteSearchHighlight');setTimeout(()=>target.classList.remove('siteSearchHighlight'),2200);
 });
}
let bar,dialog,queryInput,searchButton,resultList,resultStatus,choiceInput,run=0,lastFocus;
function go(target){
 const url=new URL(target.path,location.origin);
 if(url.origin!==location.origin)return;
 lastFocus=null;dialog.close();
 if(url.pathname===location.pathname){if(url.hash){location.hash=url.hash;revealHash();}else{scrollTo({top:0,behavior:'instant'});document.querySelector('main h1')?.focus();}}
 else location.assign(url.href);
}
function render(targets,message=words.found){
 candidates=[...new Map(targets.map(t=>[t.path,t])).values()].slice(0,16);
 resultList.replaceChildren();resultStatus.textContent=message;choiceInput.value='';
 candidates.forEach((target,index)=>{
  const item=document.createElement('li'),link=document.createElement('a');
  link.href=target.path;link.textContent=(index+1)+'. '+targetLabel(target);
  link.addEventListener('click',event=>{if(event.button||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();go(target);});
  item.appendChild(link);resultList.appendChild(item);
 });
 dialog.querySelector('.siteSearchChoice').hidden=!candidates.length;
 choiceInput.focus();
}
function reset(){
 run++;queryInput.value='';choiceInput.value='';resultList.replaceChildren();resultStatus.textContent='';candidates=[];searchButton.disabled=false;bar.removeAttribute('aria-busy');
 lastFocus=queryInput;if(dialog.open)dialog.close();queryInput.focus();
}
async function search(event){
 event?.preventDefault();
 const text=queryInput.value.trim();
 if(!text){queryInput.setCustomValidity(words.empty);queryInput.reportValidity();queryInput.focus();return;}
 queryInput.setCustomValidity('');const id=++run;lastFocus=document.activeElement;bar.setAttribute('aria-busy','true');searchButton.disabled=true;
 resultList.replaceChildren();choiceInput.value='';resultStatus.textContent=words.loading;dialog.querySelector('.siteSearchChoice').hidden=true;
 if(!dialog.open)dialog.showModal();
 try{await siteMap();if(id!==run)return;const results=resolve(text);render(results.length?results:baseMap().filter(t=>englishPaths.has(t.path)===englishPaths.has(currentPage())),results.length?words.found:words.none);}
 catch{if(id===run)resultStatus.textContent=words.error;}
 finally{if(id===run){searchButton.disabled=false;bar.removeAttribute('aria-busy');}}
}
function choose(event){
 event.preventDefault();const text=choiceInput.value.trim(),n=choiceNumber(text);
 if(n>0&&n<=candidates.length){go(candidates[n-1]);return;}
 const found=matchingCandidates(text,candidates);
 if(found.length===1)go(found[0]);
 else if(found.length>1)render(found,words.ambiguous);
 else{resultStatus.textContent=words.invalid;choiceInput.focus();}
}
function makeUI(){
 bar=document.createElement('section');bar.id='siteSearchBar';bar.setAttribute('aria-label',words.label);
 bar.innerHTML='<form role="search" class="siteSearchForm"><label for="siteSearchQuery"></label><input id="siteSearchQuery" type="search" autocomplete="off" maxlength="180"><button class="siteSearchSubmit" type="submit"></button><button class="siteSearchReset" type="button"></button></form>';
 bar.querySelector('label').textContent=words.label;queryInput=bar.querySelector('input');queryInput.placeholder=words.placeholder;searchButton=bar.querySelector('.siteSearchSubmit');searchButton.textContent=words.search;bar.querySelector('.siteSearchReset').textContent=words.reset;
 bar.querySelector('form').addEventListener('submit',search);bar.querySelector('.siteSearchReset').addEventListener('click',reset);queryInput.addEventListener('input',()=>queryInput.setCustomValidity(''));
 dialog=document.createElement('dialog');dialog.id='siteSearchResults';dialog.dir=english?'ltr':'rtl';dialog.setAttribute('aria-labelledby','siteSearchResultsTitle');
 dialog.innerHTML='<div class="siteSearchDialogHeading"><h2 id="siteSearchResultsTitle"></h2><button class="siteSearchClose" type="button">×</button></div><p class="siteSearchStatus" role="status" aria-live="polite"></p><ol class="siteSearchResultList"></ol><form class="siteSearchChoice"><label for="siteSearchChoiceInput"></label><div><input id="siteSearchChoiceInput" autocomplete="off" maxlength="180"><button type="submit"></button></div></form><button class="siteSearchAgain" type="button"></button>';
 dialog.querySelector('h2').textContent=words.title;const close=dialog.querySelector('.siteSearchClose');close.setAttribute('aria-label',words.close);close.addEventListener('click',()=>dialog.close());
 resultList=dialog.querySelector('ol');resultStatus=dialog.querySelector('.siteSearchStatus');choiceInput=dialog.querySelector('#siteSearchChoiceInput');choiceInput.placeholder=words.choice;dialog.querySelector('label').textContent=words.choice;dialog.querySelector('form button').textContent=words.choose;dialog.querySelector('form').addEventListener('submit',choose);dialog.querySelector('.siteSearchAgain').textContent=words.reset;dialog.querySelector('.siteSearchAgain').addEventListener('click',reset);
 dialog.addEventListener('close',()=>{run++;searchButton.disabled=false;bar.removeAttribute('aria-busy');if(lastFocus?.isConnected)lastFocus.focus();});
 document.body.appendChild(dialog);
 const style=document.createElement('style');style.id='portfolioSiteSearchStyle';style.textContent="#siteSearchBar{box-sizing:border-box;padding:4px 0 12px;color:#10284a;clear:both}#siteSearchBar .siteSearchForm{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:10px;align-items:center;margin:0;width:100%}#siteSearchBar label{color:var(--site-search-label,#10284a);font-size:16px;font-weight:800;white-space:nowrap}#siteSearchBar input{width:100%;min-width:0;min-height:42px;box-sizing:border-box;padding:9px 13px;border:1px solid #b9cbde;border-radius:9px;background:#fff;color:#10284a;font:inherit;font-size:15px}#siteSearchBar button{min-height:42px;padding:9px 16px;box-sizing:border-box;white-space:nowrap;border:1px solid #4c7fc8;border-radius:9px;background:#74e8dd;color:#174f9f;font:inherit;font-size:14px;font-weight:800;cursor:pointer}#siteSearchBar .siteSearchReset{background:#edf3ff}html[lang=\"en\"] #siteSearchBar label{color:#fff}#siteSearchBar button:disabled{opacity:.65;cursor:wait}#siteSearchBar input:focus-visible,#siteSearchBar button:focus-visible,#siteSearchResults :is(input,button,a):focus-visible{outline:3px solid #195ed8;outline-offset:2px}#siteSearchResults{position:fixed;inset:0;margin:auto;width:min(650px,calc(100vw - 28px));max-height:calc(100dvh - 32px);overflow:auto;box-sizing:border-box;padding:24px;border:1px solid #d5e0ed;border-radius:18px;background:#fff;color:#10284a;box-shadow:0 16px 60px #10223540;font-family:inherit;z-index:100010}#siteSearchResults::backdrop{background:#10223590}#siteSearchResults .siteSearchDialogHeading{display:flex;align-items:center;justify-content:space-between;gap:12px}#siteSearchResults h2{font-size:25px;margin:0}#siteSearchResults .siteSearchStatus{font-size:16px;line-height:1.6;margin:14px 0}#siteSearchResults button{min-height:42px;border:1px solid #b9cbde;border-radius:9px;padding:9px 14px;background:#edf3ff;color:#195ed8;font:inherit;font-weight:700;cursor:pointer}#siteSearchResults .siteSearchClose{font-size:25px;min-width:42px;padding:0}#siteSearchResults .siteSearchResultList{list-style:none;padding:0;margin:0;display:grid;gap:8px}#siteSearchResults .siteSearchResultList a{display:block;text-decoration:none;padding:12px 14px;border:1px solid #d1deec;border-radius:10px;background:#f4f8ff;color:#174f9f;font-size:16px;line-height:1.5;overflow-wrap:anywhere}#siteSearchResults .siteSearchResultList a:hover{background:#e5f7f5}#siteSearchResults .siteSearchChoice{margin:18px 0 12px}#siteSearchResults .siteSearchChoice[hidden]{display:none}#siteSearchResults .siteSearchChoice label{display:block;font-weight:700;margin-bottom:6px}#siteSearchResults .siteSearchChoice>div{display:flex;gap:8px}#siteSearchResults input{min-width:0;flex:1;min-height:42px;box-sizing:border-box;border:1px solid #b9cbde;border-radius:9px;padding:9px 12px;background:#fff;color:#10284a;font:inherit}.siteSearchHighlight{outline:3px solid #21c7b7!important;outline-offset:5px;border-radius:4px}@media(max-width:700px){#siteSearchBar{padding-top:4px;padding-bottom:10px}#siteSearchBar .siteSearchForm{grid-template-columns:minmax(0,1fr) auto auto;gap:7px}#siteSearchBar label{grid-column:1/-1;font-size:15px}#siteSearchBar button{padding:8px 9px;font-size:12px}#siteSearchBar input{font-size:14px;padding:8px}#siteSearchResults{padding:20px 16px}}";
 document.head.appendChild(style);
}
function align(){
 const header=document.querySelector('header.top');if(!header||!bar)return;
 if(bar.parentElement!==header)header.appendChild(bar);
 const nav=header.querySelector('nav'),wrap=header.querySelector('.navwrap'),rect=(nav?.getClientRects().length?nav:wrap)?.getBoundingClientRect();
 if(!rect)return;
 const width=Math.min(rect.width,innerWidth-28),left=Math.max(14,Math.min(rect.left,innerWidth-width-14));
 bar.style.width=width+'px';bar.style.marginLeft=(left-header.getBoundingClientRect().left)+'px';bar.style.marginRight=Math.max(0,header.getBoundingClientRect().right-left-width)+'px';bar.style.setProperty('--site-search-label',getComputedStyle(header.querySelector('.brand b')||header).color);
}
let queued=false;
function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;align();});}
function start(){makeUI();align();new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});addEventListener('resize',schedule);addEventListener('load',()=>{align();revealHash();});setTimeout(()=>{align();revealHash();},800);revealHash();}
addEventListener('hashchange',revealHash);
window.PortfolioSiteSearch={search:async text=>{await siteMap();return resolve(text).map(t=>({...t,label:targetLabel(t)}));},reset:()=>bar&&reset()};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
