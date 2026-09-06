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
  function addPageReadButton(){
    const page=current();
    if(document.documentElement.lang!=='he')return;
    const roleNames={'product.html':'מנהל מוצר','project.html':'מנהל פרויקט','system.html':'מנתח מערכות','magic.html':"מתכנת מג'יק",'customer.html':'Customer Success'};
    const isRole=Object.prototype.hasOwnProperty.call(roleNames,page);
    const isHome=page==='index.html';
    if((!isRole&&!isHome)||document.getElementById('pageReadButton'))return;
    const main=document.querySelector('main');if(!main)return;
    const hero=isHome?main.querySelector('.rdHero'):main.querySelector('.innerHero,.hero,.roleHero,section');
    if(!hero)return;
    const anchor=isHome?(hero.querySelector('.rdHeroCopy')||hero):(hero.querySelector('.page')||hero);
    if(getComputedStyle(anchor).position==='static')anchor.style.position='relative';
    const btn=document.createElement('button');
    btn.id='pageReadButton';btn.type='button';btn.textContent='🔊 הקרא את הדף';
    btn.setAttribute('aria-label',isRole?'הקרא את דף '+roleNames[page]:'הקרא את התוכן המרכזי של דף הבית');
    btn.style.cssText='position:absolute;top:18px;right:18px;z-index:5;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:9px 15px;border-radius:11px;background:#edf3ff;border:1px solid #195ed8;color:#195ed8;font:900 14px inherit;cursor:pointer;box-shadow:0 4px 12px rgba(13,34,54,.10)';
    anchor.appendChild(btn);
    const stop=()=>{if(window.speechSynthesis)window.speechSynthesis.cancel();btn.textContent='🔊 הקרא את הדף';btn.dataset.reading='0'};
    const cleanText=el=>{
      if(!el)return '';
      const clone=el.cloneNode(true);
      clone.querySelectorAll('button,script,style,nav,footer,#pageReadButton').forEach(x=>x.remove());
      return (clone.innerText||clone.textContent||'').replace(/\s+/g,' ').trim();
    };
    const findSmallestSection=needle=>{
      const candidates=[...main.querySelectorAll('section,article')].filter(el=>(el.innerText||'').includes(needle));
      return candidates.sort((a,b)=>(a.innerText||'').length-(b.innerText||'').length)[0]||null;
    };
    btn.addEventListener('click',()=>{
      if(!('speechSynthesis' in window)){alert('הדפדפן אינו תומך בהקראת טקסט.');return}
      if(btn.dataset.reading==='1'){stop();return}
      window.speechSynthesis.cancel();
      let text='';
      if(isRole){
        const clone=main.cloneNode(true);
        clone.querySelectorAll('button,script,style,nav,footer,.nextStep,#roleProfessionNavigation,.expQuick,.roleQuickLinks,#pageReadButton').forEach(el=>el.remove());
        text=(clone.innerText||clone.textContent||'').replace(/\s+/g,' ').trim();
      }else{
        const blocks=[
          main.querySelector('.rdHeroCopy'),
          main.querySelector('.rdStats'),
          main.querySelector('.lifecycleSection'),
          findSmallestSection('חמישה עולמות מקצועיים שמתחברים לתמונה אחת'),
          findSmallestSection('הערך שאני מביא לארגון')
        ].filter(Boolean);
        const seen=new Set();
        text=blocks.map(cleanText).filter(t=>t&&!seen.has(t)&&(seen.add(t),true)).join('. ');
      }
      if(!text)return;
      const u=new SpeechSynthesisUtterance((isRole?roleNames[page]+'. ':'')+text);
      u.lang='he-IL';u.rate=.95;u.onend=stop;u.onerror=stop;
      btn.dataset.reading='1';btn.textContent='⏹ עצור הקראה';window.speechSynthesis.speak(u);
    });
    if(!document.getElementById('pageReadStyle')){
      const st=document.createElement('style');st.id='pageReadStyle';
      st.textContent='@media(max-width:720px){#pageReadButton{position:static!important;margin:14px 0 0!important}}';
      document.head.appendChild(st);
    }
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
  function repairAll(){normalizeHebrewTopbar();ensureExperienceSkills();addRoleNavigation();standardizeRoleOverview();normalizeRoleExperienceButtons();addBottomNavigation();addExperienceBottomNavigation();addPageReadButton()}
  const run=()=>{repairAll();setTimeout(repairAll,150);setTimeout(repairAll,700)};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
  const core=document.createElement('script');core.src='assets/app-core.js?v=20260901-profession-skills-header-1';core.onload=run;core.onerror=run;document.head.appendChild(core);
  if(current()==='experience.html'){const obs=new MutationObserver(()=>ensureExperienceSkills());obs.observe(document.documentElement,{subtree:true,childList:true});setTimeout(()=>obs.disconnect(),5000)}
})();

// Recruiter assistant: the localized Hebrew/English launcher opens the Base44 bot as a
// left-side slide while leaving the rest of the site visible.
(function(){
  if(document.getElementById('ronen-bot-launcher'))return;
  var isEnglish=document.documentElement.lang.toLowerCase().startsWith('en');
  var style=document.createElement('style');
  style.textContent='#ronen-bot-launcher{position:fixed;left:20px;top:29px;bottom:auto;z-index:99998;display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:999px;background:#0d2946;color:#fff;border:2px solid #74e8dd;cursor:pointer;font-family:inherit;font-weight:900;font-size:15px;box-shadow:0 10px 28px rgba(0,0,0,.28);direction:rtl;transition:transform .2s ease,box-shadow .2s ease}#ronen-bot-launcher:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(0,0,0,.34)}#ronen-bot-launcher:focus-visible{outline:3px solid #195ed8;outline-offset:3px}.ronenBotIcon{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#74e8dd;color:#0d2946;font-size:20px}@media(max-width:1599px) and (min-width:601px){#ronen-bot-launcher{top:124px}}@media(max-width:600px){#ronen-bot-launcher{left:12px;top:auto;bottom:12px;padding:10px 12px;font-size:14px}.ronenBotIcon{width:32px;height:32px}}';
  document.head.appendChild(style);

  var iframe=document.createElement('iframe');
  iframe.src='https://ronan-hire-flow.base44.app/bot-embed';
  iframe.style.position='fixed';
  iframe.style.bottom='0';
  iframe.style.left='0';
  iframe.style.width='0px';
  iframe.style.height='0px';
  iframe.style.border='none';
  iframe.style.zIndex='99999';
  iframe.style.background='transparent';
  iframe.style.pointerEvents='none';
  iframe.style.transition='width .28s ease';
  iframe.setAttribute('allow','microphone; autoplay');
  iframe.setAttribute('scrolling','no');
  iframe.setAttribute('title',isEnglish?'Smart recruiter bot':'הבוט החכם למגייסים');
  iframe.id='ronen-bot-iframe';
  document.body.appendChild(iframe);

  function isMobile(){return window.innerWidth<640}
  function setBotOpen(open){
    iframe.style.width=open?(isMobile()?'100%':'420px'):'0px';
    iframe.style.height=open?'100vh':'0px';
    iframe.style.pointerEvents=open?'auto':'none';
  }

  window.addEventListener('message',function(e){
    if(e.data&&e.data.type==='ronen-bot-state')setBotOpen(Boolean(e.data.open));
  });
  window.addEventListener('resize',function(){
    if(iframe.style.height==='100vh')iframe.style.width=isMobile()?'100%':'420px';
  });

  var launcher=document.createElement('button');
  launcher.type='button';
  launcher.id='ronen-bot-launcher';
  launcher.setAttribute('aria-label',isEnglish?'Open the smart recruiter bot':'פתיחת הבוט החכם למגייסים');
  launcher.innerHTML='<span>'+(isEnglish?'Ask the Smart Bot':'שאל והבוט החכם יענה')+'</span><span class="ronenBotIcon" aria-hidden="true">🤖</span>';
  launcher.addEventListener('click',function(){
    iframe.contentWindow.postMessage({type:'open-ronen-bot'},'*');
  });
  document.body.appendChild(launcher);
})();

// Enhanced read-aloud pacing and pronunciation.
(function(){
  if(window.__ronenReadEnhanced)return;window.__ronenReadEnhanced=true;
  const map=t=>(t||'').replace(/\s+/g,' ').trim()
    .replace(/\s*[|•·]\s*/g,'. ')
    .replace(/\s*&\s*/g,' וגם ')
    .replace(/\bWHAT I BRING\b/gi,'מה אני מביא')
    .replace(/\bMY ADVANTAGE\b/gi,'היתרונות שלי')
    .replace(/\bEXPERIENCE\b/gi,'ניסיון מקצועי')
    .replace(/\bPROFESSIONAL (?:SKILLS|CAPABILITIES)\b/gi,'יכולות מקצועיות')
    .replace(/\bPERSONAL (?:SKILLS|CAPABILITIES)\b/gi,'יכולות אישיות')
    .replace(/\bNEXT STEP\b/gi,'השלב הבא')
    .replace(/\b360°?\b/gi,'שלוש מאות ושישים מעלות')
    .replace(/\bEnd[\s-]?to[\s-]?End\b/gi,'אנד טו אנד')
    .replace(/\bHands?[\s-]?On\b/gi,'הנדס און')
    .replace(/\bCustomer Success\b/gi,'קאסטומר סקסס')
    .replace(/\bProduct Manager\b/gi,'פרודקט מנג׳ר')
    .replace(/\bProject Manager\b/gi,'פרוג׳קט מנג׳ר')
    .replace(/\bProduct Management\b/gi,'פרודקט מנג׳מנט')
    .replace(/\bProject Management\b/gi,'פרוג׳קט מנג׳מנט')
    .replace(/\bSystem Analysis\b/gi,'סיסטם אנליסיס')
    .replace(/\bSystem Analyst\b/gi,'סיסטם אנליסט')
    .replace(/\bMAGIC Development\b/gi,'מג׳יק דבלופמנט')
    .replace(/\bMAGIC\b/gi,'מג׳יק')
    .replace(/\bPRD\b/gi,'פי. אר. די')
    .replace(/\bQA\b/gi,'קיו. איי')
    .replace(/\bUX\b/gi,'יו. אקס')
    .replace(/\bUI\b/gi,'יו. איי')
    .replace(/\bA\/B(?:\s+Testing)?\b/gi,'איי בי טסטינג')
    .replace(/\bMVP\b/gi,'אם. וי. פי')
    .replace(/\bMLP\b/gi,'אם. אל. פי')
    .replace(/\bKPI(?:s)?\b/gi,'קיי. פי. איי')
    .replace(/\bAPI(?:s)?\b/gi,'איי. פי. איי')
    .replace(/\bAI\b/gi,'איי. איי')
    .replace(/\bCRM\b/gi,'סי. אר. אם')
    .replace(/\bERP\b/gi,'אי. אר. פי')
    .replace(/\bHTML\b/gi,'אייץ׳. טי. אם. אל')
    .replace(/\bSQL\b/gi,'אס. קיו. אל')
    .replace(/\bPrototype Management\b/gi,'פרוטוטייפ מנג׳מנט')
    .replace(/\bPrototype\b/gi,'פרוטוטייפ')
    .replace(/\bStakeholders\b/gi,'סטייקהולדרס')
    .replace(/\bPrioritization\b/gi,'פריוריטיזיישן')
    .replace(/\bIntegrations?\b/gi,'אינטגרציות')
    .replace(/\bArchitecture\b/gi,'ארכיטקטורה')
    .replace(/\bEnterprise\b/gi,'אנטרפרייז')
    .replace(/\bRollout\b/gi,'רול אאוט')
    .replace(/\bDelivery\b/gi,'דליברי')
    .replace(/\bFeedback\b/gi,'פידבק')
    .replace(/\bData\b/gi,'דאטה')
    .replace(/\bSoftware\b/gi,'סופטוור')
    .replace(/\bBusiness\b/gi,'ביזנס')
    .replace(/\bTechnical\b/gi,'טכני')
    .replace(/\bFunctional\b/gi,'פונקציונלי')
    .replace(/\bSMARTi\b/gi,'סמארטי')
    .replace(/\bVerifone\b/gi,'וריפון')
    .replace(/\bSIXT\b/gi,'סיקסט')
    .replace(/\bOracle\b/gi,'אורקל')
    .replace(/\bGo To Market\b/gi,'גו טו מרקט')
    .replace(/\bHelp Desk\b/gi,'הלפ דסק')
    .replace(/\bImplementation\b/gi,'אימפלמנטיישן')
    .replace(/\bAdoption\b/gi,'אדופשן')
    .replace(/\bDiscovery\b/gi,'דיסקאברי')
    .replace(/\bRequirements\b/gi,'ריקוויירמנטס')
    .replace(/\bDevelopment\b/gi,'דבלופמנט')
    .replace(/\bTesting\b/gi,'טסטינג')
    .replace(/\bValidation\b/gi,'ולידיישן')
    .replace(/\bExperimentation\b/gi,'אקספרימנטיישן')
    .replace(/\bLaunch\b/gi,'לאנץ׳')
    .replace(/\bTraining\b/gi,'טריינינג')
    .replace(/\bTechnical Support\b/gi,'טקניקל ספורט')
    .replace(/\bCustomer Service\b/gi,'קאסטומר סרוויס');
  const voice=()=>{
    const he=speechSynthesis.getVoices().filter(v=>/^he(?:-|_)/i.test(v.lang));
    return he.find(v=>/Natural|Online|Google|Microsoft/i.test(v.name))||he[0]||null;
  };
  const split=t=>{
    const parts=t.split(/(?<=[.!?;:])\s+/).filter(Boolean),out=[];
    parts.forEach(part=>{if(part.length<=230)out.push(part);else{const words=part.split(' ');let line='';words.forEach(word=>{if((line+' '+word).trim().length>210){out.push(line.trim());line=word}else line=(line+' '+word).trim()});if(line)out.push(line)}});
    return out;
  };
  let run=0;
  const chunks=root=>{
    const c=root.cloneNode(true);c.querySelectorAll('button,script,style,nav,footer,.nextStep,#roleProfessionNavigation,.expQuick,.roleQuickLinks,#pageReadButton').forEach(x=>x.remove());
    const a=[],seen=new Set();
    c.querySelectorAll('h1,h2,h3,h4,.highlight>span:first-child,.roleExperience>span:first-child,.skillsHeaderTitle,p,li,.rdTags a,.rdActions a,article strong,article span').forEach(el=>{
      const t=(el.innerText||el.textContent||'').replace(/\s+/g,' ').trim();if(!t||seen.has(t))return;seen.add(t);
      split(map(t)).forEach((part,index)=>a.push({t:part,p:/^H[1-4]$/.test(el.tagName)?1000:(index?500:420)}));
    });
    return a;
  };
  const small=(main,s)=>[...main.querySelectorAll('section,article')].filter(x=>(x.innerText||'').includes(s)).sort((a,b)=>a.innerText.length-b.innerText.length)[0];
  const build=()=>{
    const main=document.querySelector('main'),page=location.pathname.split('/').pop()||'index.html';if(!main)return[];
    const role={'product.html':'מנהל מוצר','project.html':'מנהל פרויקט','system.html':'מנתח מערכות','magic.html':"מתכנת מג'יק",'customer.html':'קאסטומר סקסס'};
    if(role[page])return [{t:role[page],p:1100},...chunks(main)];
    if(page!=='index.html')return[];
    const blocks=[main.querySelector('.rdHeroCopy'),main.querySelector('.rdStats'),main.querySelector('.lifecycleSection'),small(main,'חמישה עולמות מקצועיים שמתחברים לתמונה אחת'),small(main,'הערך שאני מביא לארגון')].filter(Boolean);
    const out=[],seen=new Set();blocks.forEach(b=>{const k=b.innerText.trim();if(!k||seen.has(k))return;seen.add(k);if(out.length)out.push({pause:1300});out.push(...chunks(b))});return out;
  };
  const stopAudio=()=>{const source=window.__ronenPageSource;if(source){try{source.onended=null;source.stop()}catch{}window.__ronenPageSource=null}const audio=window.__ronenPageAudio;if(audio){audio.pause();if(audio.dataset&&audio.dataset.url)URL.revokeObjectURL(audio.dataset.url);window.__ronenPageAudio=null}};
  const primeAudio=()=>{const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return null;const context=window.__ronenAudioContext||new AudioContext();window.__ronenAudioContext=context;context.resume();return context};
  const stop=btn=>{run++;stopAudio();speechSynthesis.cancel();if(btn){btn.dataset.reading='0';btn.textContent='🔊 הקרא את הדף'}};
  const speak=(btn,list)=>{
    const id=++run;btn.dataset.reading='1';btn.textContent='⏹ עצור הקראה';let i=0,spoken=0;
    const next=()=>{if(id!==run)return;if(i>=list.length){stop(btn);return}const x=list[i++];if(x.pause){setTimeout(next,x.pause);return}
      const u=new SpeechSynthesisUtterance((spoken++===0?'... ':'')+x.t);u.lang='he-IL';u.rate=.78;u.pitch=1;const v=voice();if(v)u.voice=v;u.onend=u.onerror=()=>{if(id===run)setTimeout(next,x.p||420)};speechSynthesis.speak(u)};
    setTimeout(next,550);
  };
  const packForAudio=(values,max)=>{const parts=[];let part='';values.forEach(value=>{if(!value)return;const next=part?part+'. '+value:value;if(next.length>max&&part){parts.push(part);part=value}else part=next});if(part)parts.push(part);return parts};
  const fetchAudioPart=async(text,language)=>{const response=await fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:text,language:language})});if(!response.ok)throw new Error('TTS unavailable');return response.blob()};
  const speakWithEleven=async(btn,list,context)=>{
    const requestId=++run;
    const parts=packForAudio(list.filter(x=>x.t).map(x=>x.t),1100).slice(0,5);
    if(!parts.length)throw new Error('No text');
    btn.dataset.reading='1';btn.textContent='⏳ מכין הקראה…';
    const first=await fetchAudioPart(parts[0],'he');
    if(requestId!==run)return;
    if(!context)throw new Error('Web Audio unavailable');
    const playPart=async(index,blob)=>{if(requestId!==run)return;const next=index+1<parts.length?fetchAudioPart(parts[index+1],'he'):null;const buffer=await context.decodeAudioData(await blob.arrayBuffer());if(requestId!==run)return;const source=context.createBufferSource();source.buffer=buffer;source.connect(context.destination);window.__ronenPageSource=source;btn.textContent='⏹ עצור הקראה';
      source.onended=async()=>{if(window.__ronenPageSource===source)window.__ronenPageSource=null;if(requestId!==run)return;if(!next){stop(btn);return}btn.textContent='⏳ מכין את ההמשך…';try{await playPart(index+1,await next)}catch{stop(btn)}};
      source.start(0)};
    await playPart(0,first);
  };
  document.addEventListener('click',e=>{
    const btn=e.target.closest&&e.target.closest('#pageReadButton');if(!btn)return;
    e.preventDefault();e.stopImmediatePropagation();
    if(!('speechSynthesis' in window))return alert('הדפדפן אינו תומך בהקראת טקסט.');
    if(btn.dataset.reading==='1'){stop(btn);return}
    stopAudio();speechSynthesis.cancel();const list=build();if(list.length){const context=primeAudio();speakWithEleven(btn,list,context).catch(()=>{if(btn.dataset.reading==='1'){stopAudio();btn.textContent='⏹ עצור הקראה';setTimeout(()=>speak(btn,list),180)}})};
  },true);
})();


// English read-aloud with native pronunciation.
(function(){
  if(window.__ronenEnglishReadAloud)return;
  window.__ronenEnglishReadAloud=true;

  const page=()=>location.pathname.split('/').pop()||'index-en.html';
  const roles={
    'product-en.html':'Product Manager',
    'project-en.html':'Project Manager',
    'system-en.html':'System Analyst',
    'en-05.html':'MAGIC Developer',
    'en-06.html':'Customer Success'
  };
  const currentPage=page();
  const isHome=currentPage==='index-en.html';
  const isRole=Object.prototype.hasOwnProperty.call(roles,currentPage);
  if(document.documentElement.lang!=='en' && !isHome && !isRole)return;

  const normalize=t=>(t||'').replace(/\s+/g,' ').trim()
    .replace(/\bPRD\b/g,'P R D')
    .replace(/\bQA\b/g,'Q A')
    .replace(/\bUX\b/g,'U X')
    .replace(/\bUI\b/g,'U I')
    .replace(/\bKPI(?:s)?\b/g,'K P I')
    .replace(/\bAPI(?:s)?\b/g,'A P I')
    .replace(/\bAI\b/g,'A I')
    .replace(/\bCRM\b/g,'C R M')
    .replace(/\bERP\b/g,'E R P')
    .replace(/\bBI\b/g,'B I')
    .replace(/\bB2B\b/g,'B to B')
    .replace(/\bB2C\b/g,'B to C')
    .replace(/\bMVP\b/g,'M V P')
    .replace(/\bMLP\b/g,'M L P')
    .replace(/\bWBS\b/g,'W B S')
    .replace(/\bHTML\b/g,'H T M L')
    .replace(/\bCSS\b/g,'C S S')
    .replace(/\bSQL\b/g,'S Q L')
    .replace(/\bNoSQL\b/gi,'No S Q L')
    .replace(/\bJSON\b/g,'J S O N')
    .replace(/\bREST\b/g,'rest')
    .replace(/\bSaaS\b/g,'sass')
    .replace(/\bDevOps\b/gi,'Dev Ops')
    .replace(/\.NET\b/gi,'dot net')
    .replace(/\bC#/g,'C sharp')
    .replace(/\bC\+\+/g,'C plus plus')
    .replace(/\bMS[- ]SQL\b/gi,'Microsoft S Q L')
    .replace(/\bA\/B\b/g,'A B')
    .replace(/360°?/g,'three hundred and sixty degrees')
    .replace(/\bEnd[\s-]?to[\s-]?End\b/gi,'end to end')
    .replace(/\bMAGIC\b/g,'Magic')
    .replace(/\bGitHub\b/g,'Git Hub')
    .replace(/\bLinkedIn\b/g,'Linked In');

  const pickVoice=()=>{
    const voices=speechSynthesis.getVoices();
    return voices.find(v=>/^en-US$/i.test(v.lang)&&/Natural|Online|Google|Microsoft/i.test(v.name)) ||
           voices.find(v=>/^en-GB$/i.test(v.lang)&&/Natural|Online|Google|Microsoft/i.test(v.name)) ||
           voices.find(v=>/^en-US$/i.test(v.lang)) ||
           voices.find(v=>/^en-GB$/i.test(v.lang)) ||
           voices.find(v=>/^en/i.test(v.lang)) || null;
  };

  let runId=0;
  const stopEnglishAudio=()=>{const source=window.__ronenPageSource;if(source){try{source.onended=null;source.stop()}catch{}window.__ronenPageSource=null}const audio=window.__ronenPageAudio;if(audio){audio.pause();if(audio.dataset&&audio.dataset.url)URL.revokeObjectURL(audio.dataset.url);window.__ronenPageAudio=null}};
  const primeEnglishAudio=()=>{const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return null;const context=window.__ronenAudioContext||new AudioContext();window.__ronenAudioContext=context;context.resume();return context};
  const stop=btn=>{
    runId++;
    stopEnglishAudio();
    speechSynthesis.cancel();
    if(btn){btn.dataset.reading='0';btn.textContent='🔊 Read this page';}
  };

  const extract=root=>{
    const clone=root.cloneNode(true);
    clone.querySelectorAll('button,script,style,nav,footer,.nextStep,#roleProfessionNavigation,.expQuick,.roleQuickLinks,#pageReadButton,#englishPageReadButton').forEach(x=>x.remove());
    const out=[];
    const seen=new Set();
    clone.querySelectorAll('h1,h2,h3,h4,.highlight>span:first-child,.roleExperience>span:first-child,.skillsHeaderTitle,p,li,article strong,article span,.rdTags a,.rdActions a').forEach(el=>{
      const raw=(el.innerText||el.textContent||'').replace(/\s+/g,' ').trim();
      if(!raw||seen.has(raw))return;
      seen.add(raw);
      const isHeading=/^H[1-4]$/.test(el.tagName);
      out.push({text:normalize(raw),pause:isHeading?1050:(el.tagName==='LI'?420:320)});
    });
    return out;
  };

  const findSmallest=(main,needle)=>[...main.querySelectorAll('section,article')]
    .filter(x=>(x.innerText||'').toLowerCase().includes(needle.toLowerCase()))
    .sort((a,b)=>(a.innerText||'').length-(b.innerText||'').length)[0]||null;

  const homeChunks=main=>{
    const blocks=[
      main.querySelector('.rdHeroCopy'),
      main.querySelector('.rdStats'),
      main.querySelector('.lifecycleSection'),
      findSmallest(main,'five professional'),
      findSmallest(main,'value I bring')
    ].filter(Boolean);
    const out=[];
    const seen=new Set();
    blocks.forEach(block=>{
      const key=(block.innerText||'').trim();
      if(!key||seen.has(key))return;
      seen.add(key);
      if(out.length)out.push({pause:1400});
      out.push(...extract(block));
    });
    return out;
  };

  const speakQueue=(items,btn)=>{
    const my=++runId;
    let i=0,spoken=0;
    btn.dataset.reading='1';
    btn.textContent='⏹ Stop reading';
    speechSynthesis.cancel();
    const next=()=>{
      if(my!==runId)return;
      if(i>=items.length){
        btn.dataset.reading='0';
        btn.textContent='🔊 Read this page';
        return;
      }
      const item=items[i++];
      if(item.pause&&!item.text){setTimeout(next,item.pause);return;}
      if(!item.text){next();return;}
      const u=new SpeechSynthesisUtterance((spoken++===0?'... ':'')+item.text);
      u.lang='en-US';
      u.rate=0.84;
      u.pitch=1;
      const v=pickVoice();
      if(v)u.voice=v;
      u.onend=()=>setTimeout(next,item.pause||320);
      u.onerror=()=>setTimeout(next,250);
      speechSynthesis.speak(u);
    };
    setTimeout(next,550);
  };
  const packEnglishAudio=(values,max)=>{const parts=[];let part='';values.forEach(value=>{if(!value)return;const next=part?part+'. '+value:value;if(next.length>max&&part){parts.push(part);part=value}else part=next});if(part)parts.push(part);return parts};
  const fetchEnglishAudio=async text=>{const response=await fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:text,language:'en'})});if(!response.ok)throw new Error('TTS unavailable');return response.blob()};
  const speakEnglishWithEleven=async(items,btn,context)=>{
    const requestId=++runId;
    const parts=packEnglishAudio(items.filter(item=>item.text).map(item=>item.text),1100).slice(0,5);
    if(!parts.length)throw new Error('No text');
    btn.dataset.reading='1';btn.textContent='⏳ Preparing audio…';
    const first=await fetchEnglishAudio(parts[0]);
    if(requestId!==runId)return;
    if(!context)throw new Error('Web Audio unavailable');
    const playPart=async(index,blob)=>{if(requestId!==runId)return;const next=index+1<parts.length?fetchEnglishAudio(parts[index+1]):null;const buffer=await context.decodeAudioData(await blob.arrayBuffer());if(requestId!==runId)return;const source=context.createBufferSource();source.buffer=buffer;source.connect(context.destination);window.__ronenPageSource=source;btn.textContent='⏹ Stop reading';
      source.onended=async()=>{if(window.__ronenPageSource===source)window.__ronenPageSource=null;if(requestId!==runId)return;if(!next){stop(btn);return}btn.textContent='⏳ Preparing the next part…';try{await playPart(index+1,await next)}catch{stop(btn)}};
      source.start(0)};
    await playPart(0,first);
  };

  const add=()=>{
    if((!isHome&&!isRole)||document.getElementById('englishPageReadButton')||document.getElementById('pageReadButton'))return;
    const main=document.querySelector('main');
    if(!main)return;
    const hero=isHome?main.querySelector('.rdHero'):main.querySelector('.innerHero,.hero,.roleHero,section');
    if(!hero)return;
    const anchor=isHome?(hero.querySelector('.rdHeroCopy')||hero):(hero.querySelector('.page')||hero);
    if(getComputedStyle(anchor).position==='static')anchor.style.position='relative';

    const btn=document.createElement('button');
    btn.id='englishPageReadButton';
    btn.type='button';
    btn.textContent='🔊 Read this page';
    btn.setAttribute('aria-label',isRole?'Read '+roles[currentPage]+' page aloud':'Read the main content of the home page aloud');
    btn.style.cssText='position:absolute;top:18px;right:18px;z-index:5;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:9px 15px;border-radius:11px;background:#edf3ff;border:1px solid #195ed8;color:#195ed8;font:900 14px inherit;cursor:pointer;box-shadow:0 4px 12px rgba(13,34,54,.10)';
    btn.addEventListener('click',()=>{
      if(!('speechSynthesis' in window)){alert('Your browser does not support text-to-speech.');return;}
      if(btn.dataset.reading==='1'){stop(btn);return;}
      const items=isHome?homeChunks(main):[{text:roles[currentPage],pause:1200},...extract(main)];
      if(items.length){stopEnglishAudio();speechSynthesis.cancel();const context=primeEnglishAudio();speakEnglishWithEleven(items,btn,context).catch(()=>{if(btn.dataset.reading==='1'){stopEnglishAudio();btn.textContent='⏹ Stop reading';setTimeout(()=>speakQueue(items,btn),180)}});}
    });
    anchor.appendChild(btn);

    if(!document.getElementById('englishPageReadStyle')){
      const st=document.createElement('style');
      st.id='englishPageReadStyle';
      st.textContent='@media(max-width:720px){#englishPageReadButton{position:static!important;margin:14px 0 0!important}}';
      document.head.appendChild(st);
    }
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(add,0),{once:true});
  else setTimeout(add,0);
})();
