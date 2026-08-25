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
  function addBottomNavigation(){
    const page=(location.pathname.split('/').pop()||'index.html');
    if(!['education.html','work-environments.html','military.html'].includes(page) || document.getElementById('sharedBottomNavigation')) return;
    const main=document.querySelector('main'); if(!main) return;
    const section=document.createElement('section'); section.id='sharedBottomNavigation';
    if(page==='work-environments.html') section.style.marginTop='42px';
    section.innerHTML='<style>#sharedBottomNavigation{max-width:1240px;margin-left:auto;margin-right:auto;padding:0 24px 54px}.sbnNext{background:linear-gradient(135deg,#0e2945,#195ed8);color:#fff;border-radius:20px;padding:28px 30px;box-shadow:0 14px 34px rgba(13,34,54,.14);border-right:5px solid #21c7b7;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}.sbnNext span{display:block;color:#8ee8df;font-size:12px;letter-spacing:1.5px;font-weight:900;margin-bottom:5px}.sbnNext h2{margin:0 0 5px;font-size:clamp(1.5rem,3vw,2.15rem)}.sbnNext p{margin:0;color:#dce9f7}.sbnContact{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:11px;background:#fff;color:#195ed8!important;font-weight:900;text-decoration:none;white-space:nowrap}.sbnTitle{font-size:14px;font-weight:900;color:#405469;margin:28px 0 10px}.sbnRow{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;direction:rtl}.sbnLinks{display:flex;gap:10px;flex-wrap:wrap}.sbnLinks a{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:10px 16px;border-radius:11px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8!important;text-decoration:none;font-weight:900;font-size:13px}.sbnLinks a:hover{background:#195ed8;color:#fff!important}.sbnSecondary{margin-inline-start:auto}@media(max-width:720px){#sharedBottomNavigation{padding:0 18px 40px}.sbnNext{padding:24px 20px}.sbnLinks,.sbnSecondary{width:100%;margin-inline-start:0}.sbnLinks a{flex:1 1 calc(50% - 10px)}}</style><div class="sbnNext"><div><span>NEXT STEP</span><h2>בואו נדבר על התפקיד הבא</h2><p>אשמח לשיחה קצרה על התפקיד, האתגרים והערך שאני יכול להביא.</p></div><a class="sbnContact" href="contact.html">צור איתי קשר ←</a></div><div class="sbnTitle">מעבר מהיר</div><div class="sbnRow"><div class="sbnLinks"><a href="experience.html">ניסיון</a><a href="projects.html">עבודות ופרויקטים</a><a href="work-environments.html">סוגי מערכות</a><a href="education.html">השכלה</a><a href="military.html">צבא</a></div><div class="sbnLinks sbnSecondary"><a href="index.html">עמוד בית - ראייה 360°</a><a href="product.html">מנהל מוצר</a><a href="project.html">מנהל פרויקט</a><a href="system.html">מנתח מערכות</a><a href="magic.html">MAGIC</a><a href="customer.html">Customer Success</a></div></div>';
    main.appendChild(section);
  }
  const core=document.createElement('script');
  core.src='assets/app-core.js';
  core.onload=function(){enhanceExperience();addBottomNavigation();};
  core.onerror=function(){enhanceExperience();addBottomNavigation();};
  document.head.appendChild(core);
})();