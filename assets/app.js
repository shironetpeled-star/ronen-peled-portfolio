(function(){
  const current=()=>location.pathname.split('/').pop()||'index.html';
  const unifiedHeNav=[['index.html','בית'],['skills.html','יכולות'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html',"מתכנת מג'יק"],['customer.html','Customer Success'],['experience.html','ניסיון'],['projects.html','עבודות'],['work-environments.html','סוגי מערכות'],['education.html','השכלה'],['military.html','שירות צבאי'],['advantages.html','היתרונות שלי'],['contact.html','צור איתי קשר'],['index-en.html','EN']];
  function normalizeHebrewTopbar(){
    if(document.documentElement.lang!=='he')return;
    let header=document.querySelector('header.top');if(!header)return;
    header.innerHTML='<div class="navwrap"><div class="brandBlock"><a class="brand" href="index.html"><b>רונן פלד</b><small>Product • Systems • Projects • MAGIC • Customer Success</small></a><span class="brandPhone">054-6546288</span></div><button class="menu" aria-label="תפריט">☰</button><nav></nav></div>';
    const nav=header.querySelector('nav');
    unifiedHeNav.forEach(([href,label])=>{const a=document.createElement('a');a.href=href;a.textContent=label;if(current()===href||(current()==='service.html'&&href==='military.html'))a.classList.add('active');nav.appendChild(a)});
    const menu=header.querySelector('.menu');if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
    if(!document.getElementById('exactSkillsTopbarStyle')){const s=document.createElement('style');s.id='exactSkillsTopbarStyle';s.textContent=`
      .top .brandBlock .brand b{font-size:24px!important;line-height:1.15!important;font-weight:900!important}
      .top .brandBlock .brand small::after{content:"מנהל מוצר • מנהל פרויקט • מנתח מערכות\\Aמתכנת מג'יק • Customer Success"!important;white-space:pre-line!important;font-size:15px!important;line-height:1.3!important;font-weight:700!important;color:#4f6073!important}
      .top .brandBlock .brandPhone{font-size:13px!important;font-weight:800!important}
      .top .brandBlock{min-width:260px!important}
      html[lang="he"] .top nav a,html[lang="he"] .top nav a.active{background:#74e8dd!important;color:#1f5fbf!important;border:1px solid #4c7fc8!important;box-shadow:0 2px 7px rgba(0,0,0,.18)!important;font-weight:900!important}
      html[lang="he"] .top nav a:hover{background:#8cece3!important;color:#174f9f!important}
      html[lang="he"] .top .brand b,html[lang="he"] .top .brandPhone{color:#fff!important}
      html[lang="he"] .top nav a[href="magic.html"]{font-size:13px!important}
      html[lang="he"] .top nav a[href="magic.html"]::after{content:none!important}
      @media(min-width:951px){
        html[lang="he"] .top{background:#0d2946!important;border-bottom-color:#143c64!important}
        html[lang="he"] .top .navwrap{min-height:112px!important}
        html[lang="he"] .top nav{grid-template-columns:repeat(45,1fr)!important;grid-template-rows:35px 35px!important;row-gap:20px!important;column-gap:0!important;padding-left:48px!important}
        html[lang="he"] body .top nav>a{position:static!important;transform:none!important;width:max-content!important;max-width:none!important;min-width:0!important;min-height:34px!important;box-sizing:border-box!important;justify-self:center!important;padding:7px 11px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}
        html[lang="he"] .top nav>a:nth-child(1){grid-row:1!important;grid-column:1/span 5!important}
        html[lang="he"] .top nav>a:nth-child(2){grid-row:1!important;grid-column:6/span 5!important}
        html[lang="he"] .top nav>a:nth-child(8){grid-row:1!important;grid-column:11/span 5!important}
        html[lang="he"] .top nav>a:nth-child(9){grid-row:1!important;grid-column:16/span 5!important}
        html[lang="he"] .top nav>a:nth-child(10){grid-row:1!important;grid-column:21/span 5!important}
        html[lang="he"] .top nav>a:nth-child(11){grid-row:1!important;grid-column:26/span 5!important}
        html[lang="he"] .top nav>a:nth-child(12){grid-row:1!important;grid-column:31/span 5!important}
        html[lang="he"] .top nav>a:nth-child(13){grid-row:1!important;grid-column:36/span 5!important}
        html[lang="he"] .top nav>a:nth-child(14){grid-row:1!important;grid-column:41/span 5!important}
        html[lang="he"] .top nav>a:nth-child(3){grid-row:2!important;grid-column:1/span 9!important}
        html[lang="he"] .top nav>a:nth-child(4){grid-row:2!important;grid-column:10/span 9!important}
        html[lang="he"] .top nav>a:nth-child(5){grid-row:2!important;grid-column:19/span 9!important}
        html[lang="he"] .top nav>a:nth-child(6){grid-row:2!important;grid-column:28/span 9!important}
        html[lang="he"] .top nav>a:nth-child(7){grid-row:2!important;grid-column:37/span 9!important}
        html[lang="he"] body .top nav>a:nth-child(n+3):nth-child(-n+7){width:100%!important;min-width:0!important;box-sizing:border-box!important;justify-self:stretch!important;padding-left:12px!important;padding-right:12px!important}
        html[lang="he"] body.home-redesign:not(:has(#skillSearch)) .top nav>a{width:calc(100% - 10px)!important;justify-self:center!important;padding-left:7px!important;padding-right:7px!important;white-space:nowrap!important}
        html[lang="he"] .top .navwrap{grid-template-columns:260px minmax(0,900px)!important;gap:24px!important}
        html[lang="he"] .top nav{grid-template-columns:repeat(54,minmax(0,1fr))!important;padding-left:0!important;padding-right:0!important}
        html[lang="he"] body .top nav>a{width:calc(100% - 8px)!important;padding-left:6px!important;padding-right:6px!important;font-size:12.5px!important;justify-self:center!important}
        html[lang="he"] .top nav>a:nth-child(1){grid-row:1!important;grid-column:1/span 6!important;justify-self:start!important}
        html[lang="he"] .top nav>a:nth-child(2){grid-row:1!important;grid-column:7/span 6!important}
        html[lang="he"] .top nav>a:nth-child(8){grid-row:1!important;grid-column:13/span 6!important}
        html[lang="he"] .top nav>a:nth-child(9){grid-row:1!important;grid-column:19/span 6!important}
        html[lang="he"] .top nav>a:nth-child(10){grid-row:1!important;grid-column:25/span 6!important}
        html[lang="he"] .top nav>a:nth-child(11){grid-row:1!important;grid-column:31/span 6!important}
        html[lang="he"] .top nav>a:nth-child(12){grid-row:1!important;grid-column:37/span 6!important}
        html[lang="he"] .top nav>a:nth-child(13){grid-row:1!important;grid-column:43/span 6!important}
        html[lang="he"] .top nav>a:nth-child(14){grid-row:1!important;grid-column:49/span 6!important;justify-self:end!important}
        html[lang="he"] .top nav>a:nth-child(3){grid-row:2!important;grid-column:1/span 9!important;justify-self:start!important}
        html[lang="he"] .top nav>a:nth-child(4){grid-row:2!important;grid-column:10/span 9!important}
        html[lang="he"] .top nav>a:nth-child(5){grid-row:2!important;grid-column:19/span 9!important}
        html[lang="he"] .top nav>a:nth-child(6){grid-row:2!important;grid-column:28/span 9!important}
        html[lang="he"] .top nav>a:nth-child(7){grid-row:2!important;grid-column:37/span 9!important}
        html[lang="he"] .top nav>a:nth-child(15){grid-row:2!important;grid-column:46/span 9!important;justify-self:end!important}
      }
      @media(max-width:950px){
        html[lang="he"] .top nav{background:#0d2946!important;border-color:#143c64!important}
        .menu{color:#fff!important}
        html[lang="he"] .top nav.open a[href="index.html"]{order:1}
        html[lang="he"] .top nav.open a[href="skills.html"]{order:2}
        html[lang="he"] .top nav.open a[href="product.html"]{order:3}
        html[lang="he"] .top nav.open a[href="project.html"]{order:4}
        html[lang="he"] .top nav.open a[href="system.html"]{order:5}
        html[lang="he"] .top nav.open a[href="magic.html"]{order:6}
        html[lang="he"] .top nav.open a[href="customer.html"]{order:7}
        html[lang="he"] .top nav.open a[href="experience.html"]{order:8}
        html[lang="he"] .top nav.open a[href="projects.html"]{order:9}
        html[lang="he"] .top nav.open a[href="work-environments.html"]{order:10}
        html[lang="he"] .top nav.open a[href="education.html"]{order:11}
        html[lang="he"] .top nav.open a[href="military.html"]{order:12}
        html[lang="he"] .top nav.open a[href="advantages.html"]{order:13}
        html[lang="he"] .top nav.open a[href="contact.html"]{order:14}
        html[lang="he"] .top nav.open a[href="index-en.html"]{order:15}
      }
    `;document.head.appendChild(s)}
  }
  const roles=['product.html','project.html','system.html','magic.html','customer.html'];
  const quick=[['experience.html','פירוט ניסיון'],['projects.html','רשימת פרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה']];
  const professions=[['index.html','עמוד בית - ראייה 360°'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success']];
  const buttonStyle='display:inline-flex;align-items:center;justify-content:center;min-height:44px;box-sizing:border-box;padding:10px 16px;border-radius:11px;background:#edf3ff;border:1px solid #c9d9f5;color:#0f4fbf;text-decoration:none;font-weight:950;font-size:13px;line-height:1.2;font-family:inherit;transition:.15s ease;white-space:nowrap';
  function makeRow(items,id){const row=document.createElement('div');row.id=id;row.style.cssText='display:flex;gap:8px;flex-wrap:nowrap;align-items:center;direction:rtl;width:100%';items.forEach(function(item){const a=document.createElement('a');a.href=item[0];a.textContent=item[1];a.style.cssText=buttonStyle+';flex:1 1 auto';row.appendChild(a)});return row}
  function findExperienceRow(){let row=document.getElementById('experienceQuickButtons');if(row)return row;const more=document.querySelector('details.moreJobs');if(more&&more.parentElement&&more.parentElement.querySelectorAll){const candidates=[...more.parentElement.children].filter(el=>el!==more&&el.querySelectorAll&&el.querySelectorAll('a').length>=2);row=candidates.find(el=>[...el.querySelectorAll('a')].some(a=>/projects\.html/.test(a.getAttribute('href')||''))&&[...el.querySelectorAll('a')].some(a=>/education\.html/.test(a.getAttribute('href')||'')));if(row){row.id='experienceQuickButtons';return row}}return null}
  function ensureExperienceSkills(){if(current()!=='experience.html')return;const more=document.querySelector('details.moreJobs');let row=findExperienceRow();if(!row&&more){row=makeRow([['projects.html','רשימת עבודות ופרויקטים'],['work-environments.html','סוגי פרויקטים'],['education.html','השכלה']],'experienceQuickButtons');more.parentNode.insertBefore(row,more);row.insertBefore(more,row.firstChild)}if(!row)return;let skills=[...row.querySelectorAll('a')].find(a=>/skills\.html(?:$|[?#])/.test(a.getAttribute('href')||'')||a.textContent.trim()==='יכולות');if(!skills){skills=document.createElement('a');skills.href='skills.html';skills.textContent='יכולות';row.appendChild(skills)}row.style.cssText='display:flex;gap:8px;flex-wrap:nowrap;align-items:center;direction:rtl;width:100%;margin:30px 0 24px;box-sizing:border-box;justify-content:space-between';row.querySelectorAll(':scope > a').forEach(a=>{a.style.cssText=buttonStyle+';flex:1 1 0;min-width:0;padding-left:20px;padding-right:20px'});if(more&&more.parentElement===row){more.style.cssText+=';margin-top:0;flex:1 1 0;min-width:0';const summary=more.querySelector(':scope > summary');if(summary)summary.style.cssText=buttonStyle+';cursor:pointer;width:100%;min-height:44px;padding-left:20px;padding-right:20px'}}
  function addRoleNavigation(){if(!roles.includes(current()))return;const main=document.querySelector('main');if(!main)return;const old=document.getElementById('roleExperienceQuickButtons');if(old)old.remove();const exp=main.querySelector('.highlight');if(exp&&!exp.querySelector('.expQuick')){const row=makeRow(quick,'roleExperienceQuickButtons');row.className='expQuick';row.style.margin='18px 0 4px';exp.appendChild(row)}if(!document.getElementById('roleProfessionNavigation')){const next=main.querySelector('.nextStep')||[...main.querySelectorAll('section')].find(s=>/NEXT STEP/i.test(s.textContent||''));const nav=document.createElement('section');nav.id='roleProfessionNavigation';nav.className='page';nav.style.cssText='padding:0 0 54px';const title=document.createElement('div');title.textContent='עבור למקצועות אחרים';title.style.cssText='font-size:14px;font-weight:900;color:#405469;margin:0 0 12px';nav.appendChild(title);const filtered=professions.filter(x=>x[0]!==current());const row=makeRow(filtered,'roleProfessionButtons');row.style.flexWrap='wrap';row.querySelectorAll('a').forEach(a=>a.style.flex='0 1 auto');nav.appendChild(row);if(next&&next.nextSibling)next.parentNode.insertBefore(nav,next.nextSibling);else main.appendChild(nav)}}
  function normalizeRoleExperienceButtons(){if(!roles.includes(current()))return;const exp=document.querySelector('.roleExperience,.highlight');if(!exp)return;exp.querySelectorAll('.roleQuickLinks').forEach(row=>row.remove());let row=exp.querySelector('.expQuick');if(!row){row=makeRow(quick,'roleExperienceQuickButtons');row.className='expQuick';exp.appendChild(row)}else{row.innerHTML='';const fresh=makeRow(quick,'roleExperienceQuickButtonsFresh');while(fresh.firstChild)row.appendChild(fresh.firstChild)}row.id='roleExperienceQuickButtons';row.className='expQuick';row.style.margin='18px 0 4px'}
  function standardizeRoleOverview(){
    const page=current();if(!roles.includes(page))return;
    if(!document.getElementById('roleOverviewStandardStyles')){
      const style=document.createElement('style');style.id='roleOverviewStandardStyles';style.textContent=`
        .roleOverview{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:28px!important;align-items:stretch!important;padding-top:26px!important}
        .roleOverview>.roleBringCard,.roleOverview>.roleExperience{box-sizing:border-box;min-width:0;height:100%!important;margin:0!important}
        .roleBringCard{display:flex;flex-direction:column;justify-content:flex-start}
        .roleBringCard>.sectionTitle{margin-bottom:14px}
        .roleBringCard>.bigtext{margin-top:0}
        .roleBringCard .roleTrainingInline{margin-top:34px!important}
        .roleExperience{display:flex!important;flex-direction:column!important;height:470px!important;min-height:470px!important;padding:28px 30px!important;border-radius:20px!important;box-shadow:0 14px 34px rgba(13,34,54,.14)!important;overflow:visible!important}
        .roleExperience>span:first-child{display:block;margin-bottom:8px}
        .roleExperience .expQuick{margin-top:auto!important;padding-top:16px!important;display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:6px!important;width:100%!important;flex-wrap:nowrap!important}
        .roleExperience .expQuick a{width:100%!important;min-width:0!important;white-space:nowrap!important;text-align:center!important;font-size:13px!important;font-weight:1000!important;color:#0b3f9c!important;background:#ffffff!important;border:2px solid #b8cff3!important;padding:9px 5px!important;line-height:1.15!important;box-shadow:0 4px 10px rgba(13,34,54,.12)!important}
        .roleExperience .expQuick a:hover{background:#195ed8!important;color:#fff!important;border-color:#195ed8!important;transform:translateY(-1px)}
        .roleEducation{padding-top:0!important}
        .roleEducation .educationBlock{margin-top:0!important;max-width:calc(50% - 14px)}
        .magicOverview.magicTrainingOnly{grid-template-columns:1fr!important;padding-top:0!important}
        .magicOverview.magicTrainingOnly .trainingPanel{height:auto!important}
        .experienceMore{display:none!important}
        @media(max-width:900px){.roleOverview{grid-template-columns:1fr!important}.roleEducation .educationBlock{max-width:none}.roleExperience{height:auto!important;min-height:470px!important}.roleBringCard .roleTrainingInline{margin-top:28px!important}}
        @media(max-width:520px){.roleExperience{padding:24px 18px!important}.roleExperience .expQuick{gap:4px!important}.roleExperience .expQuick a{font-size:11px!important;padding:8px 3px!important}}
      `;document.head.appendChild(style)
    }
    const main=document.querySelector('main');if(!main)return;
    let overview=main.querySelector('.roleOverview');
    if(page==='magic.html'){
      const intro=main.querySelector('.magicIntro');const magicOverview=main.querySelector('.magicOverview');const exp=magicOverview&&magicOverview.querySelector('.highlight');
      if(!overview&&intro&&magicOverview&&exp){
        overview=document.createElement('section');overview.className='page section two roleOverview';
        const bring=document.createElement('div');bring.className='roleBringCard';
        while(intro.firstChild)bring.appendChild(intro.firstChild);
        exp.classList.add('roleExperience');overview.appendChild(bring);overview.appendChild(exp);
        intro.parentNode.insertBefore(overview,intro);intro.remove();magicOverview.classList.add('magicTrainingOnly');
      }
    }else{
      overview=main.querySelector('.page.section.two');
      if(overview){
        overview.classList.add('roleOverview');
        const bring=overview.children[0];const exp=overview.querySelector('.highlight');
        if(bring)bring.classList.add('roleBringCard');if(exp)exp.classList.add('roleExperience');
        const education=bring&&bring.querySelector('.educationBlock');
        if(education){
          if(page==='product.html'||page==='system.html'){
            education.classList.add('roleTrainingInline');
          }else if(!education.closest('.roleEducation')){
            const wrap=document.createElement('section');wrap.className='page section roleEducation';wrap.appendChild(education);overview.parentNode.insertBefore(wrap,overview.nextSibling);
          }
        }
      }
    }
    const exp=main.querySelector('.roleExperience,.highlight');
    if(exp){const more=exp.querySelector('.experienceMore');if(more)more.remove();}
  }
  function bottomMarkup(page){const educationGroups=page==='education.html';return '<style>#sharedBottomNavigation{max-width:1240px;margin-left:auto;margin-right:auto;padding:0 24px 54px}.sbnNext{background:linear-gradient(135deg,#0e2945,#195ed8);color:#fff;border-radius:20px;padding:28px 30px;box-shadow:0 14px 34px rgba(13,34,54,.14);border-right:5px solid #21c7b7;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}.sbnNext span{display:block;color:#8ee8df;font-size:12px;letter-spacing:1.5px;font-weight:900;margin-bottom:5px}.sbnNext h2{margin:0 0 5px;font-size:clamp(1.5rem,3vw,2.15rem)}.sbnNext p{margin:0;color:#dce9f7}.sbnContact{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:11px;background:#fff;color:#195ed8!important;font-weight:900;text-decoration:none!important;white-space:nowrap}.sbnTitle{font-size:14px;font-weight:900;color:#405469;margin:22px 0 8px}.sbnRow{display:grid;grid-template-columns:minmax(310px,.72fr) minmax(0,1.28fr);gap:14px;direction:rtl;align-items:stretch}.sbnGroup{min-width:0;background:#fff;border:1px solid #dce6f2;border-radius:16px;padding:13px 14px;box-shadow:0 8px 20px rgba(13,34,54,.05)}.sbnGroupTitle{font-size:15px;font-weight:950;color:#10284a;margin:0 0 9px;padding:7px 10px;border-radius:9px;background:#eef5ff}.sbnLinks{display:flex;gap:7px;flex-wrap:wrap}.sbnLinks a{display:inline-flex;align-items:center;justify-content:center;min-height:38px;padding:8px 11px;border-radius:10px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8!important;text-decoration:none!important;font-weight:900;font-size:12.5px;white-space:nowrap}.sbnLinks a:hover{background:#195ed8;color:#fff!important}.sbnProfessional .sbnLinks{flex-wrap:nowrap;gap:6px}.sbnProfessional .sbnLinks a{flex:1 1 0;min-width:0;padding-left:7px;padding-right:7px;font-size:12px}@media(max-width:900px){.sbnRow{grid-template-columns:1fr}.sbnProfessional .sbnLinks{flex-wrap:wrap}.sbnProfessional .sbnLinks a{flex:1 1 calc(33.333% - 8px)}}@media(max-width:720px){.sbnLinks a,.sbnProfessional .sbnLinks a{flex:1 1 calc(50% - 8px)}}</style><div class="sbnNext"><div><span>NEXT STEP</span><h2>בואו נדבר על התפקיד הבא</h2><p>אשמח לשיחה קצרה על התפקיד, האתגרים והערך שאני יכול להביא.</p></div><a class="sbnContact" href="contact.html">צור איתי קשר ←</a></div><div class="sbnTitle">מעבר מהיר</div>'+(educationGroups?'<div class="sbnRow"><div class="sbnGroup"><div class="sbnGroupTitle">ניסיון</div><div class="sbnLinks"><a href="experience.html">ניסיון</a><a href="projects.html">עבודות ופרויקטים</a><a href="work-environments.html">סוגי מערכות</a><a href="military.html">צבא</a><a href="skills.html">יכולות</a></div></div><div class="sbnGroup sbnProfessional"><div class="sbnGroupTitle">יכולות מקצועיות</div><div class="sbnLinks"><a href="index.html">עמוד בית - ראייה 360°</a><a href="product.html">מנהל מוצר</a><a href="project.html">מנהל פרויקט</a><a href="system.html">מנתח מערכות</a><a href="magic.html">MAGIC</a><a href="customer.html">Customer Success</a></div></div></div>':'<div class="sbnRow"><div class="sbnGroup"><div class="sbnGroupTitle">ניסיון</div><div class="sbnLinks"><a href="experience.html">ניסיון</a><a href="projects.html">עבודות ופרויקטים</a><a href="work-environments.html">סוגי מערכות</a><a href="education.html">השכלה</a></div></div><div class="sbnGroup sbnProfessional"><div class="sbnGroupTitle">יכולות מקצועיות</div><div class="sbnLinks"><a href="index.html">עמוד בית - ראייה 360°</a><a href="product.html">מנהל מוצר</a><a href="project.html">מנהל פרויקט</a><a href="system.html">מנתח מערכות</a><a href="magic.html">MAGIC</a><a href="customer.html">Customer Success</a></div></div></div>')}
  function addBottomNavigation(){const page=current();if(!['education.html','work-environments.html','advantages.html','military.html','skills.html','service.html','contact.html'].includes(page))return;const main=document.querySelector('main');if(!main)return;let section=document.getElementById('sharedBottomNavigation');if(!section){section=document.createElement('section');section.id='sharedBottomNavigation';main.appendChild(section)}section.innerHTML=bottomMarkup(page==='contact.html'?'education.html':page);if(page==='contact.html'){const next=section.querySelector('.sbnNext');if(next)next.remove()}const experienceLinks=section.querySelector('.sbnGroup .sbnLinks');if(experienceLinks&&!experienceLinks.querySelector('a[href="advantages.html"]')){const advantages=document.createElement('a');advantages.href='advantages.html';advantages.textContent='היתרונות שלי';const systems=experienceLinks.querySelector('a[href="work-environments.html"]');if(systems)systems.insertAdjacentElement('afterend',advantages);else experienceLinks.appendChild(advantages)}if(['work-environments.html','advantages.html','military.html','skills.html','service.html'].includes(page)){const links=section.querySelector('.sbnGroup .sbnLinks');if(links&&!links.querySelector('a[href="skills.html"]')){const skills=document.createElement('a');skills.href='skills.html';skills.textContent='יכולות';links.appendChild(skills)}}section.style.marginTop=['work-environments.html','advantages.html'].includes(page)?'42px':'';if(page==='military.html'){const direct=document.querySelector('.milBottom');if(direct&&direct!==section)direct.style.display='none'}}
  function addExperienceBottomNavigation(){if(current()!=='experience.html')return;const main=document.querySelector('main');if(!main)return;let section=document.getElementById('sharedBottomNavigation');if(!section){section=document.createElement('section');section.id='sharedBottomNavigation';main.appendChild(section)}section.innerHTML=bottomMarkup('experience.html');section.style.marginTop='42px';document.querySelectorAll('main>.nextStep,main>.professionBottomNav,.experienceMoreJobsRow,#experienceQuickButtons').forEach(el=>{if(el!==section)el.style.display='none'});const links=section.querySelector('.sbnGroup .sbnLinks');if(!links)return;const self=links.querySelector('a[href="experience.html"]');if(self)self.remove();const advantages=links.querySelector('a[href="advantages.html"]');if(advantages)advantages.remove();const projects=links.querySelector('a[href="projects.html"]');if(projects)projects.textContent='רשימת עבודות ופרויקטים';if(!links.querySelector('a[href="skills.html"]')){const skills=document.createElement('a');skills.href='skills.html';skills.textContent='יכולות';links.appendChild(skills)}let more=links.querySelector('a[href="#additional-work"]');if(!more){more=document.createElement('a');more.href='#additional-work';more.textContent='עבודות נוספות';links.insertBefore(more,links.firstChild);more.addEventListener('click',e=>{e.preventDefault();const details=document.querySelector('details.moreJobs');if(details){details.id='additional-work';details.open=true;details.style.display='block';details.scrollIntoView({behavior:'smooth',block:'start'})}})}}
  if(current()==='experience.html')ensureExperienceSkills=function(){};
  function repairAll(){normalizeHebrewTopbar();ensureExperienceSkills();addRoleNavigation();standardizeRoleOverview();normalizeRoleExperienceButtons();addBottomNavigation();addExperienceBottomNavigation()}
  const run=()=>{repairAll();setTimeout(repairAll,150);setTimeout(repairAll,700)};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
  const core=document.createElement('script');core.src='assets/app-core.js?v=20260901-profession-skills-header-1';core.onload=run;core.onerror=run;document.head.appendChild(core);
  if(current()==='experience.html'){const obs=new MutationObserver(()=>ensureExperienceSkills());obs.observe(document.documentElement,{subtree:true,childList:true});setTimeout(()=>obs.disconnect(),5000)}
})();

// Base44 blocks iframe embedding, so expose the recruiter assistant as a
// persistent launcher that opens the working bot directly.
(function(){
  if(document.getElementById('ronen-bot-launcher'))return;
  var style=document.createElement('style');
  style.textContent='#ronen-bot-launcher{position:fixed;left:20px;top:29px;bottom:auto;z-index:99999;display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:999px;background:#0d2946;color:#fff;text-decoration:none;font-weight:900;font-size:15px;box-shadow:0 10px 28px rgba(0,0,0,.28);border:2px solid #74e8dd;direction:rtl;transition:transform .2s ease,box-shadow .2s ease}#ronen-bot-launcher:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(0,0,0,.34)}#ronen-bot-launcher:focus-visible{outline:3px solid #195ed8;outline-offset:3px}.ronenBotIcon{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#74e8dd;color:#0d2946;font-size:20px}@media(max-width:1599px) and (min-width:601px){#ronen-bot-launcher{top:124px}}@media(max-width:600px){#ronen-bot-launcher{left:12px;top:auto;bottom:12px;padding:10px 12px;font-size:14px}.ronenBotIcon{width:32px;height:32px}}';
  document.head.appendChild(style);
  var launcher=document.createElement('a');
  launcher.id='ronen-bot-launcher';
  launcher.href='https://ronan-hire-flow.base44.app/bot-embed?bot=open';
  launcher.target='_blank';
  launcher.rel='noopener noreferrer';
  launcher.setAttribute('aria-label','פתיחת הבוט החכם למגייסים');
  launcher.innerHTML='<span>שאל והבוט החכם יענה</span><span class="ronenBotIcon" aria-hidden="true">🤖</span>';
  launcher.addEventListener('click',function(e){
    e.preventDefault();
    var popupWidth=Math.min(500,Math.max(360,screen.availWidth-40));
    var popupHeight=Math.min(780,Math.max(600,screen.availHeight-80));
    var popupLeft=Math.max(0,screen.availLeft+20);
    var popupTop=Math.max(0,screen.availTop+30);
    var botWindow=window.open(launcher.href,'ronenRecruiterBot','popup=yes,width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+',resizable=yes,scrollbars=yes');
    if(botWindow)botWindow.focus();
    else window.open(launcher.href,'_blank','noopener,noreferrer');
  });
  document.body.appendChild(launcher);
})();
