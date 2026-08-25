(function(){
  function enhanceExperience(){
    if((location.pathname.split('/').pop()||'index.html')!=='experience.html') return;
    const more=document.querySelector('details.moreJobs');
    if(!more || document.getElementById('experienceQuickButtons')) return;
    const row=document.createElement('div');
    row.id='experienceQuickButtons';
    row.style.cssText='display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;margin-top:30px;margin-bottom:24px;direction:rtl';
    more.parentNode.insertBefore(row,more);
    row.appendChild(more);
    more.style.marginTop='0';
    const summary=more.querySelector(':scope > summary');
    const common='display:inline-flex;align-items:center;justify-content:center;min-height:44px;box-sizing:border-box;padding:10px 16px;border-radius:11px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8;text-decoration:none;font-weight:900;font-size:13px;line-height:1.2;cursor:pointer;font-family:inherit;transition:.15s ease';
    if(summary){summary.style.cssText=common;}
    [['projects.html','רשימת עבודות ופרויקטים'],['work-environments.html','סוגי פרויקטים'],['education.html','השכלה']].forEach(function(item){
      const a=document.createElement('a');a.href=item[0];a.textContent=item[1];a.style.cssText=common;
      a.addEventListener('mouseenter',function(){a.style.background='#195ed8';a.style.color='#fff'});
      a.addEventListener('mouseleave',function(){a.style.background='#edf3ff';a.style.color='#195ed8'});
      row.appendChild(a);
    });
    more.addEventListener('toggle',function(){more.style.flexBasis=more.open?'100%':'auto';});
  }
  const core=document.createElement('script');
  core.src='assets/app-core.js';
  core.onload=function(){enhanceExperience();};
  core.onerror=function(){enhanceExperience();};
  document.head.appendChild(core);
})();