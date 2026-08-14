const lang=document.documentElement.lang||'he';
const current=(location.pathname.split('/').pop()||'index.html');
const heNav=[['index.html','בית'],['skills.html','יכולות'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success'],['experience.html','ניסיון'],['projects.html','עבודות'],['education.html','השכלה'],['service.html','שירות צבאי'],['contact.html','צור איתי קשר'],['index-en.html','EN']];
const enNav=[['index-en.html','Home'],['skills-en.html','Skills'],['product-en.html','Product Manager'],['project-en.html','Project Manager'],['system-en.html','System Analyst'],['en-05.html','MAGIC'],['en-06.html','Customer Success'],['history-en.html','Experience'],['role-magic-en.html','Projects'],['role-customer-en.html','Education'],['service-page-en.html','Military Service'],['contact-en.html','Contact Me'],['index.html','עברית']];
let header=document.querySelector('header.top');
if(!header){header=document.createElement('header');header.className='top';document.body.insertBefore(header,document.body.firstChild);}
header.innerHTML='<div class="navwrap"><a class="brand" href="'+(lang==='en'?'index-en.html':'index.html')+'"><b>RONEN PELED</b><small>Product • Systems • Projects • MAGIC • Customer</small></a><button class="menu" aria-label="'+(lang==='en'?'Menu':'תפריט')+'">☰</button><nav></nav></div>';
const nav=header.querySelector('nav');
(lang==='en'?enNav:heNav).forEach(([href,label])=>{const a=document.createElement('a');a.href=href;a.textContent=label;if(current===href)a.classList.add('active');nav.appendChild(a);});
header.querySelector('.menu').addEventListener('click',()=>nav.classList.toggle('open'));
const input=document.getElementById('skillSearch');
if(input){const cards=[...document.querySelectorAll('.searchable')],count=document.getElementById('count'),empty=document.getElementById('noResults');const run=()=>{const q=input.value.trim().toLowerCase();let n=0;cards.forEach(c=>{const ok=!q||c.innerText.toLowerCase().includes(q);c.style.display=ok?'block':'none';if(ok)n++});if(count)count.textContent=lang==='en'?n+' categories':n+' קטגוריות';if(empty)empty.style.display=n?'none':'block'};input.addEventListener('input',run);run();}
if(current==='contact.html'||current==='contact-en.html'){const section=document.querySelector('main .section');if(section&&!document.getElementById('socialActions')){const box=document.createElement('div');box.id='socialActions';box.style.cssText='max-width:760px;margin:28px auto 0;display:flex;gap:14px;flex-wrap:wrap';const li=document.createElement('a');li.href='https://il.linkedin.com/in/%D7%A8%D7%95%D7%A0%D7%9F-%D7%A4%D7%9C%D7%93-a27a771a';li.target='_blank';li.rel='noopener noreferrer';li.textContent=lang==='en'?'My LinkedIn':'LinkedIn שלי';li.style.cssText='display:inline-flex;padding:14px 22px;border:1px solid #cfd5df;border-radius:12px;text-decoration:none;font-weight:700';const wa=document.createElement('a');wa.href='https://wa.me/972546546288';wa.target='_blank';wa.rel='noopener noreferrer';wa.textContent=lang==='en'?'Chat with me on WhatsApp':'שוחח איתי ב‑WhatsApp';wa.style.cssText=li.style.cssText;box.append(li,wa);section.appendChild(box);}}

function splitSkillItems(text){
  return text.split(/\.\s+(?=[^—.]{1,80}\s—\s)|\.\s*(?=[A-Z][A-Za-z0-9 &/+.-]{2,70}\s·\s)|\.\s*(?=[\u0590-\u05FF][^—.]{1,80}\s—\s)/).map(s=>s.trim()).filter(Boolean).map(s=>s.replace(/\.$/,''));
}
function renderCollapsibleList(target,text,type){
  if(!target||!text)return;
  const items=splitSkillItems(text);
  target.innerHTML='';
  if(!items.length)return;
  const list=document.createElement('ol');
  list.style.cssText='margin:8px 0 0;padding-inline-start:24px;display:grid;gap:10px';
  items.forEach((item,i)=>{const li=document.createElement('li');li.textContent=item;li.style.lineHeight='1.65';if(i>=2)li.hidden=true;list.appendChild(li)});
  target.appendChild(list);
  if(items.length>2){
    const btn=document.createElement('button');
    btn.type='button';
    const moreLabel=type==='workplaces'?(lang==='en'?'More workplaces':'מקומות נוספים'):(lang==='en'?'More projects':'עבודות נוספות');
    const lessLabel=lang==='en'?'Show less':'הצג פחות';
    btn.textContent=moreLabel;
    btn.style.cssText='margin-top:12px;padding:8px 14px;border:1px solid #cfd5df;border-radius:10px;background:#fff;font-weight:700;cursor:pointer';
    let expanded=false;
    btn.addEventListener('click',()=>{expanded=!expanded;[...list.children].forEach((li,i)=>{if(i>=2)li.hidden=!expanded});btn.textContent=expanded?lessLabel:moreLabel});
    target.appendChild(btn);
  }
}

const capabilityDescriptions={
  'SWOT':{he:'ניתוח חוזקות, חולשות, הזדמנויות ואיומים לצורך בחינת מצב קיים, בחירת כיוון וקבלת החלטות מוצריות ועסקיות.',en:'Analysis of strengths, weaknesses, opportunities and threats to assess a situation and support product and business decisions.'},
  'MS Project':{he:'שימוש בכלי Microsoft Project לתכנון ומעקב אחר משימות, לוחות זמנים, תלויות ואבני דרך בפרויקט.',en:'Using Microsoft Project to plan and track tasks, schedules, dependencies and project milestones.'},
  'Roadmap':{he:'בניית מפת דרכים שמחברת בין יעדים, צרכי לקוחות, פיצ’רים וסדרי עדיפויות לאורך זמן.',en:'Building a roadmap that connects goals, customer needs, features and priorities over time.'},
  'RICE':{he:'שיטת תיעדוף פיצ’רים לפי Reach, Impact, Confidence ו-Effort כדי להשוות הזדמנויות באופן שיטתי.',en:'Feature-prioritization method using Reach, Impact, Confidence and Effort to compare opportunities systematically.'},
  'MVP/MLP':{he:'הגדרת גרסה ראשונית ממוקדת שמספקת ערך, מאפשרת בדיקה מהירה ולמידה לפני הרחבת הפתרון.',en:'Defining a focused initial version that delivers value, enables fast validation and learning before expansion.'},
  'MVP / MLP':{he:'הגדרת גרסה ראשונית ממוקדת שמספקת ערך, מאפשרת בדיקה מהירה ולמידה לפני הרחבת הפתרון.',en:'Defining a focused initial version that delivers value, enables fast validation and learning before expansion.'},
  'MAGIC':{he:'פיתוח ותחזוקת מערכות בסביבת MAGIC, כולל פיתוח פיצ’רים, התאמות, תיקון תקלות ואינטגרציה עם בסיסי נתונים.',en:'Developing and maintaining MAGIC systems, including features, customizations, debugging and database integration.'},
  'Oracle':{he:'עבודה עם בסיס נתונים Oracle במסגרת פיתוח מערכות, לוגיקה עסקית, שאילתות ופונקציונליות תפעולית.',en:'Working with Oracle databases for application development, business logic, queries and operational functionality.'},
  'MS-SQL':{he:'עבודה עם בסיסי נתונים MS-SQL לצורך אחסון, שליפה, ניתוח וחיבור נתונים למערכות.',en:'Working with MS-SQL databases for storing, retrieving, analyzing and integrating application data.'},
  'HTML':{he:'שימוש ב-HTML להצגת מידע ולבניית מנגנוני דוחות נגישים שניתנים לפתיחה במכשירים ובכלים שונים.',en:'Using HTML to present information and create accessible reporting mechanisms across devices and tools.'},
  'Debugging':{he:'איתור מקור תקלות בקוד ובתהליכים, ניתוח ההתנהגות בפועל ותיקון הבעיה עד פתרון עובד.',en:'Finding root causes in code and processes, analyzing actual behavior and fixing issues through to a working solution.'},
  'WBS':{he:'פירוק פרויקט למרכיבי עבודה ומשימות ברורות כדי לתכנן, להעריך ולעקוב אחר הביצוע.',en:'Breaking a project into clear work packages and tasks for planning, estimation and execution tracking.'},
  'Risk':{he:'זיהוי סיכונים בפרויקט או במוצר, הערכת ההשפעה והסתברות, ותכנון פעולות לצמצום הסיכון.',en:'Identifying project or product risks, assessing impact and likelihood, and planning mitigation actions.'},
  'Risk Management':{he:'זיהוי, הערכה ומעקב אחר סיכונים ותכנון פעולות מניעה או צמצום לאורך הפרויקט.',en:'Identifying, assessing and tracking risks while planning mitigation throughout the project.'},
  'Stakeholder Management':{he:'ניהול תקשורת, ציפיות ותיאום בין לקוחות, משתמשים, הנהלה, צוותי פיתוח וגורמים נוספים.',en:'Managing communication, expectations and coordination across customers, users, management, development teams and other stakeholders.'},
  'Requirements':{he:'איסוף, חידוד ותיעוד דרישות עסקיות ופונקציונליות והפיכתן לבסיס ברור לפיתוח.',en:'Gathering, refining and documenting business and functional requirements as a clear basis for development.'},
  'KPIs':{he:'הגדרת מדדי ביצוע מרכזיים ומעקב אחריהם כדי להבין תוצאות, לזהות בעיות ולכוון שיפור.',en:'Defining and tracking key performance indicators to understand results, identify issues and guide improvement.'},
  'A/B Testing':{he:'השוואת שתי חלופות בצורה מדידה כדי לבדוק איזו מהן נותנת תוצאה טובה יותר למשתמש או לעסק.',en:'Comparing two alternatives in a measurable way to determine which performs better for users or the business.'},
  'Root Cause':{he:'ניתוח שורש הבעיה כדי לטפל בגורם האמיתי לתקלה ולא רק בסימפטום.',en:'Root-cause analysis to address the underlying cause of a problem rather than only its symptoms.'},
  'Leadership Without Authority':{he:'הובלת אנשים ותהליכים ללא סמכות ניהולית ישירה באמצעות השפעה, תיאום, מקצועיות ויצירת מחויבות.',en:'Leading people and processes without direct managerial authority through influence, coordination, expertise and commitment.'},
  'Ownership':{he:'לקיחת אחריות מלאה על משימה, מערכת או תהליך משלב הצורך ועד פתרון ומעקב אחר התוצאה.',en:'Taking full responsibility for a task, system or process from initial need through solution and outcome follow-up.'},
  'Customer Engagement':{he:'יצירת קשר עבודה רציף עם לקוחות, הבנת הצרכים שלהם וליווי השימוש והערך שהם מקבלים מהמערכת.',en:'Maintaining ongoing customer engagement, understanding needs and supporting product usage and value realization.'},
  'Escalations':{he:'טיפול במקרים מורכבים או קריטיים שהוסלמו, כולל תחקור, תיאום גורמים ומתן פתרון.',en:'Handling complex or critical escalated cases through investigation, stakeholder coordination and resolution.'},
  'Data-Driven Decisions':{he:'קבלת החלטות על בסיס נתונים, תוצאות ומדדים ולא רק על תחושות או הנחות.',en:'Making decisions based on data, outcomes and metrics rather than intuition alone.'}
};
function specificDescription(term,categoryDetail){
  const d=capabilityDescriptions[term];
  if(d)return lang==='en'?d.en:d.he;
  return lang==='en'?('Practical use of '+term+' within this capability area. '+categoryDetail):('שימוש מעשי ב-'+term+' כחלק מתחום היכולת הזה. '+categoryDetail);
}
function makeCapabilityButtons(){
  const cards=[...document.querySelectorAll('.skill.searchable')];
  cards.forEach(oldCard=>{
    const card=oldCard.cloneNode(true);
    oldCard.replaceWith(card);
    card.style.cursor='default';
    const p=card.querySelector('p');
    if(!p)return;
    const terms=p.textContent.split(',').map(s=>s.trim().replace(/\.$/,'' )).filter(Boolean);
    const wrap=document.createElement('div');
    wrap.className='capabilityButtons';
    wrap.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin-top:14px';
    terms.forEach(term=>{
      const b=document.createElement('button');
      b.type='button';b.textContent=term;
      b.style.cssText='padding:7px 11px;border:1px solid #cbd7e3;border-radius:999px;background:#f7f9fc;color:#195ed8;font-weight:700;cursor:pointer;font-size:13px';
      b.addEventListener('click',e=>{
        e.stopPropagation();
        const slider=document.getElementById('skillSlider'),overlay=document.getElementById('sliderOverlay'),title=document.getElementById('sliderTitle'),text=document.getElementById('sliderText'),used=document.getElementById('sliderUsed'),projects=document.getElementById('sliderProjects');
        if(!slider||!title||!text)return;
        title.textContent=term;
        text.textContent=specificDescription(term,card.dataset.detail||'');
        if(used)used.textContent=card.dataset.used||'';
        if(projects)projects.textContent=card.dataset.projects||'';
        slider.classList.add('open');if(overlay)overlay.classList.add('open');slider.setAttribute('aria-hidden','false');
      });
      wrap.appendChild(b);
    });
    p.replaceWith(wrap);
  });
}

if(current==='skills.html'||current==='skills-en.html'){
  const used=document.getElementById('sliderUsed');
  const projects=document.getElementById('sliderProjects');
  if(used){const observer=new MutationObserver(()=>{const text=used.textContent.trim();if(text&&!used.querySelector('ol'))renderCollapsibleList(used,text,'workplaces')});observer.observe(used,{childList:true,characterData:true,subtree:true});}
  if(projects){const observer=new MutationObserver(()=>{const text=projects.textContent.trim();if(text&&!projects.querySelector('ol'))renderCollapsibleList(projects,text,'projects')});observer.observe(projects,{childList:true,characterData:true,subtree:true});}
  window.addEventListener('DOMContentLoaded',makeCapabilityButtons);
}