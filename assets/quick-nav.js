(function(){
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const btn='display:inline-flex;align-items:center;justify-content:center;min-height:42px;box-sizing:border-box;padding:10px 14px;border-radius:11px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8;text-decoration:none;font-weight:900;font-size:13px;line-height:1.2;white-space:normal;text-align:center';
  function link(href,text){const a=document.createElement('a');a.href=href;a.textContent=text;a.style.cssText=btn;return a}
  function buildExperienceNav(nav){
    if(!nav)return;
    nav.dataset.rebuilt='1';
    nav.innerHTML='';
    const style=document.createElement('style');
    style.textContent=`
      .professionBottomNav{width:100%!important;box-sizing:border-box!important;padding:0 0 54px!important}
      .professionBottomNavTitle{display:none!important}
      #experienceBottomNav{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;grid-template-rows:auto!important;gap:18px!important;direction:rtl!important;width:100%!important;box-sizing:border-box!important;align-items:stretch!important}
      .experienceNavBox{display:flex!important;flex-direction:column!important;background:#fff!important;border:1px solid #dce6f2!important;border-radius:16px!important;padding:14px!important;box-shadow:0 8px 20px rgba(13,34,54,.05)!important;min-width:0!important;width:auto!important;box-sizing:border-box!important;grid-row:1!important}
      .experienceNavBoxTitle{font-size:15px!important;font-weight:950!important;color:#10284a!important;margin:0 0 10px!important;padding:7px 10px!important;border-radius:9px!important;background:#eef5ff!important;text-align:center!important}
      .experienceNavLinks{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;width:100%!important;box-sizing:border-box!important}
      .experienceNavLinks a{width:100%!important;min-width:0!important;box-sizing:border-box!important}
    `;
    nav.appendChild(style);
    const wrap=document.createElement('div');wrap.id='experienceBottomNav';
    const exp=document.createElement('div');exp.className='experienceNavBox';
    const expTitle=document.createElement('div');expTitle.className='experienceNavBoxTitle';expTitle.textContent='מעבר מהיר';exp.appendChild(expTitle);
    const expLinks=document.createElement('div');expLinks.className='experienceNavLinks';
    [['projects.html','רשימת עבודות ופרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה'],['experience.html','ניסיון']].forEach(x=>expLinks.appendChild(link(x[0],x[1])));
    exp.appendChild(expLinks);
    const prof=document.createElement('div');prof.className='experienceNavBox';
    const profTitle=document.createElement('div');profTitle.className='experienceNavBoxTitle';profTitle.textContent='יכולות מקצועיות';prof.appendChild(profTitle);
    const profLinks=document.createElement('div');profLinks.className='experienceNavLinks';
    [['index.html','עמוד בית - ראייה 360°'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success']].forEach(x=>profLinks.appendChild(link(x[0],x[1])));
    prof.appendChild(profLinks);
    wrap.appendChild(exp);wrap.appendChild(prof);nav.appendChild(wrap);
  }
  function ensureExperience(){
    if(page!=='experience.html')return;
    const nav=document.querySelector('.professionBottomNav,#sharedBottomNavigation');
    if(!nav)return;
    if(nav.dataset.rebuilt==='1' && nav.querySelector('#experienceBottomNav'))return;
    buildExperienceNav(nav);
  }
  function ensureOtherExperience(){
    if(page==='experience.html')return;
    const more=document.querySelector('details.moreJobs');
    if(!more)return;
    const legacy=document.getElementById('experienceQuickButtons');
    if(legacy&&legacy.id!=='centralExperienceQuickNav'){
      if(legacy.contains(more))legacy.parentNode.insertBefore(more,legacy);
      legacy.style.display='none';
    }
    let row=document.getElementById('centralExperienceQuickNav');
    if(!row){row=document.createElement('div');row.id='centralExperienceQuickNav';row.style.cssText='display:flex;gap:8px;align-items:center;direction:rtl;width:100%;margin:30px 0 24px;box-sizing:border-box;flex-wrap:nowrap';more.parentNode.insertBefore(row,more);row.appendChild(more)}
    const wanted=[['projects.html','רשימת עבודות ופרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה'],['skills.html','יכולות']];
    wanted.forEach(([href,text])=>{if(![...row.querySelectorAll('a')].some(a=>(a.getAttribute('href')||'').includes(href)))row.appendChild(link(href,text))});
    more.style.cssText+=';margin:0;flex:1 1 0;min-width:0';
    const summary=more.querySelector(':scope > summary');if(summary)summary.style.cssText=btn+';cursor:pointer;width:100%;min-height:42px';
    [...row.children].forEach(el=>{if(el.tagName==='A'){el.style.flex='1 1 0';el.style.minWidth='0'}});
  }
  function ensureSkills(){
    if(page!=='skills.html')return;
    const main=document.querySelector('main');if(!main)return;
    let sec=document.getElementById('skillsBottomNav');if(sec)return;
    sec=document.createElement('section');sec.id='skillsBottomNav';
    sec.innerHTML='<style>#skillsBottomNav{max-width:1240px;margin:0 auto;padding:0 24px 54px;box-sizing:border-box}.skillsNavGrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-rows:auto;gap:18px;direction:rtl;align-items:stretch}.skillsNavBox{display:flex;flex-direction:column;background:#fff;border:1px solid #dce6f2;border-radius:16px;padding:14px;box-shadow:0 8px 20px rgba(13,34,54,.05);min-width:0;box-sizing:border-box;grid-row:1}.skillsNavTitle{font-size:15px;font-weight:950;color:#10284a;margin:0 0 10px;padding:7px 10px;border-radius:9px;background:#eef5ff;text-align:center}.skillsNavLinks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;width:100%;box-sizing:border-box;align-items:stretch}.skillsNavLinks a{width:100%;min-width:0;min-height:42px;height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;white-space:normal;line-height:1.2;text-align:center}.skillsNavLinks a{font-size:13px!important}@media(max-width:760px){.skillsNavGrid{grid-template-columns:1fr}.skillsNavBox{grid-row:auto}}</style>';
    const wrap=document.createElement('div');wrap.className='skillsNavGrid';
    const quick=document.createElement('div');quick.className='skillsNavBox';
    const quickTitle=document.createElement('div');quickTitle.className='skillsNavTitle';quickTitle.textContent='מעבר מהיר';quick.appendChild(quickTitle);
    const quickLinks=document.createElement('div');quickLinks.className='skillsNavLinks';
    [['projects.html','רשימת עבודות ופרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה'],['experience.html','ניסיון']].forEach(x=>quickLinks.appendChild(link(x[0],x[1])));
    quick.appendChild(quickLinks);
    const prof=document.createElement('div');prof.className='skillsNavBox';
    const profTitle=document.createElement('div');profTitle.className='skillsNavTitle';profTitle.textContent='יכולות מקצועיות';prof.appendChild(profTitle);
    const profLinks=document.createElement('div');profLinks.className='skillsNavLinks';
    [['index.html','עמוד בית - ראייה 360°'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success']].forEach(x=>profLinks.appendChild(link(x[0],x[1])));
    prof.appendChild(profLinks);
    wrap.appendChild(quick);wrap.appendChild(prof);sec.appendChild(wrap);main.appendChild(sec);
  }
  function group(title,items,professional){const box=document.createElement('div');box.className='cqnGroup'+(professional?' cqnProfessional':'');const h=document.createElement('div');h.className='cqnGroupTitle';h.textContent=title;box.appendChild(h);const links=document.createElement('div');links.className='cqnLinks';items.forEach(x=>links.appendChild(link(x[0],x[1])));box.appendChild(links);return box}
  function ensureMilitary(){
    if(page!=='military.html')return;
    const main=document.querySelector('main');if(!main)return;
    const old=document.querySelector('.milBottom');if(old)old.style.display='none';
    const legacy=document.getElementById('sharedBottomNavigation');if(legacy)legacy.style.display='none';
    let sec=document.getElementById('centralMilitaryQuickNav');if(sec)return;
    sec=document.createElement('section');sec.id='centralMilitaryQuickNav';sec.innerHTML='<style>#centralMilitaryQuickNav{max-width:1240px;margin:0 auto;padding:0 24px 54px}.cqnNext{background:linear-gradient(135deg,#0e2945,#195ed8);color:#fff;border-radius:20px;padding:28px 30px;box-shadow:0 14px 34px rgba(13,34,54,.14);border-right:5px solid #21c7b7;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}.cqnNext span{display:block;color:#8ee8df;font-size:12px;letter-spacing:1.5px;font-weight:900;margin-bottom:5px}.cqnNext h2{margin:0 0 5px;font-size:clamp(1.5rem,3vw,2.15rem)}.cqnNext p{margin:0;color:#dce9f7}.cqnNext a{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:11px;background:#fff;color:#195ed8!important;font-weight:900;text-decoration:none!important}.cqnTitle{font-size:14px;font-weight:900;color:#405469;margin:22px 0 8px}.cqnGroups{display:grid;grid-template-columns:minmax(310px,.72fr) minmax(0,1.28fr);gap:14px;direction:rtl}.cqnGroup{min-width:0;background:#fff;border:1px solid #dce6f2;border-radius:16px;padding:13px 14px;box-shadow:0 8px 20px rgba(13,34,54,.05)}.cqnGroupTitle{font-size:15px;font-weight:950;color:#10284a;margin:0 0 9px;padding:7px 10px;border-radius:9px;background:#eef5ff}.cqnLinks{display:flex;gap:7px;flex-wrap:wrap}.cqnLinks a{min-height:38px;padding:8px 11px;border-radius:10px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8!important;text-decoration:none!important;font-weight:900;font-size:12.5px}.cqnProfessional .cqnLinks{flex-wrap:nowrap}.cqnProfessional .cqnLinks a{flex:1 1 0;min-width:0;font-size:12px}@media(max-width:900px){.cqnGroups{grid-template-columns:1fr}.cqnProfessional .cqnLinks{flex-wrap:wrap}}@media(max-width:720px){.cqnLinks a{flex:1 1 calc(50% - 8px)}}</style>';
    const next=document.createElement('div');next.className='cqnNext';next.innerHTML='<div><span>NEXT STEP</span><h2>בואו נדבר על התפקיד הבא</h2><p>אשמח לשיחה קצרה על התפקיד, האתגרים והערך שאני יכול להביא.</p></div><a href="contact.html">צור איתי קשר ←</a>';sec.appendChild(next);
    const t=document.createElement('div');t.className='cqnTitle';t.textContent='מעבר מהיר';sec.appendChild(t);
    const groups=document.createElement('div');groups.className='cqnGroups';groups.appendChild(group('ניסיון',[['experience.html','ניסיון'],['projects.html','עבודות ופרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה']],false));groups.appendChild(group('יכולות מקצועיות',[['index.html','עמוד בית - ראייה 360°'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success']],true));sec.appendChild(groups);main.appendChild(sec);
  }
  function run(){ensureExperience();ensureOtherExperience();ensureSkills();ensureMilitary()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
  setTimeout(run,250);setTimeout(run,1000);
  if(page==='experience.html')setInterval(ensureExperience,500);
  if(page==='experience.html'){const observer=new MutationObserver(()=>{const nav=document.querySelector('.professionBottomNav,#sharedBottomNavigation');if(nav&&(!nav.querySelector('#experienceBottomNav')||nav.dataset.rebuilt!=='1'))buildExperienceNav(nav)});observer.observe(document.documentElement,{subtree:true,childList:true});setTimeout(()=>observer.disconnect(),5000)}
})();