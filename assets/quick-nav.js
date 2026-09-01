(function(){
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const btn='display:inline-flex;align-items:center;justify-content:center;min-height:42px;box-sizing:border-box;padding:10px 14px;border-radius:11px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8;text-decoration:none;font-weight:900;font-size:13px;line-height:1.2;white-space:nowrap';
  function link(href,text){const a=document.createElement('a');a.href=href;a.textContent=text;a.style.cssText=btn;return a}
  function ensureExperience(){
    if(page==='experience.html')return;
    const more=document.querySelector('details.moreJobs');
    if(!more)return;
    const legacy=document.getElementById('experienceQuickButtons');
    if(legacy&&legacy.id!=='centralExperienceQuickNav'){
      if(legacy.contains(more))legacy.parentNode.insertBefore(more,legacy);
      legacy.style.display='none';
    }
    let row=document.getElementById('centralExperienceQuickNav');
    if(!row){
      row=document.createElement('div');row.id='centralExperienceQuickNav';
      row.style.cssText='display:flex;gap:8px;align-items:center;direction:rtl;width:100%;margin:30px 0 24px;box-sizing:border-box;flex-wrap:nowrap';
      more.parentNode.insertBefore(row,more);
      row.appendChild(more);
    }
    const wanted=[['projects.html','רשימת עבודות ופרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה'],['skills.html','יכולות']];
    wanted.forEach(([href,text])=>{if(![...row.querySelectorAll('a')].some(a=>(a.getAttribute('href')||'').includes(href))){row.appendChild(link(href,text))}});
    more.style.cssText+=';margin:0;flex:1 1 0;min-width:0';
    const summary=more.querySelector(':scope > summary');
    if(summary)summary.style.cssText=btn+';cursor:pointer;width:100%;min-height:42px';
    [...row.children].forEach(el=>{if(el.tagName==='A'){el.style.flex='1 1 0';el.style.minWidth='0'}});
  }
  function group(title,items,professional){
    const box=document.createElement('div');box.className='cqnGroup'+(professional?' cqnProfessional':'');
    const h=document.createElement('div');h.className='cqnGroupTitle';h.textContent=title;box.appendChild(h);
    const links=document.createElement('div');links.className='cqnLinks';items.forEach(x=>links.appendChild(link(x[0],x[1])));box.appendChild(links);return box;
  }
  function ensureMilitary(){
    if(page!=='military.html')return;
    const main=document.querySelector('main');if(!main)return;
    const old=document.querySelector('.milBottom');if(old)old.style.display='none';
    const legacy=document.getElementById('sharedBottomNavigation');if(legacy)legacy.style.display='none';
    let sec=document.getElementById('centralMilitaryQuickNav');
    if(sec)return;
    sec=document.createElement('section');sec.id='centralMilitaryQuickNav';sec.innerHTML='<style>#centralMilitaryQuickNav{max-width:1240px;margin:0 auto;padding:0 24px 54px}.cqnNext{background:linear-gradient(135deg,#0e2945,#195ed8);color:#fff;border-radius:20px;padding:28px 30px;box-shadow:0 14px 34px rgba(13,34,54,.14);border-right:5px solid #21c7b7;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}.cqnNext span{display:block;color:#8ee8df;font-size:12px;letter-spacing:1.5px;font-weight:900;margin-bottom:5px}.cqnNext h2{margin:0 0 5px;font-size:clamp(1.5rem,3vw,2.15rem)}.cqnNext p{margin:0;color:#dce9f7}.cqnNext a{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:11px;background:#fff;color:#195ed8!important;font-weight:900;text-decoration:none!important}.cqnTitle{font-size:14px;font-weight:900;color:#405469;margin:22px 0 8px}.cqnGroups{display:grid;grid-template-columns:minmax(310px,.72fr) minmax(0,1.28fr);gap:14px;direction:rtl}.cqnGroup{min-width:0;background:#fff;border:1px solid #dce6f2;border-radius:16px;padding:13px 14px;box-shadow:0 8px 20px rgba(13,34,54,.05)}.cqnGroupTitle{font-size:15px;font-weight:950;color:#10284a;margin:0 0 9px;padding:7px 10px;border-radius:9px;background:#eef5ff}.cqnLinks{display:flex;gap:7px;flex-wrap:wrap}.cqnLinks a{min-height:38px;padding:8px 11px;border-radius:10px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8!important;text-decoration:none!important;font-weight:900;font-size:12.5px}.cqnProfessional .cqnLinks{flex-wrap:nowrap}.cqnProfessional .cqnLinks a{flex:1 1 0;min-width:0;font-size:12px}@media(max-width:900px){.cqnGroups{grid-template-columns:1fr}.cqnProfessional .cqnLinks{flex-wrap:wrap}}@media(max-width:720px){.cqnLinks a{flex:1 1 calc(50% - 8px)}}</style>';
    const next=document.createElement('div');next.className='cqnNext';next.innerHTML='<div><span>NEXT STEP</span><h2>בואו נדבר על התפקיד הבא</h2><p>אשמח לשיחה קצרה על התפקיד, האתגרים והערך שאני יכול להביא.</p></div><a href="contact.html">צור איתי קשר ←</a>';sec.appendChild(next);
    const t=document.createElement('div');t.className='cqnTitle';t.textContent='מעבר מהיר';sec.appendChild(t);
    const groups=document.createElement('div');groups.className='cqnGroups';
    groups.appendChild(group('ניסיון',[['experience.html','ניסיון'],['projects.html','עבודות ופרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה']],false));
    groups.appendChild(group('יכולות מקצועיות',[['index.html','עמוד בית - ראייה 360°'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success']],true));
    sec.appendChild(groups);main.appendChild(sec);
  }
  function run(){ensureExperience();ensureMilitary()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
  setTimeout(run,250);setTimeout(run,1000);
})();
