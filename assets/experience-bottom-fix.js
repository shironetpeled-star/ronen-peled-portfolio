(function(){
  function forceExperienceBottom(){
    if(!location.pathname.endsWith('/experience.html')) return;
    const nav=document.getElementById('sharedBottomNavigation');
    if(!nav) return;
    const row=nav.querySelector('.sbnRow');
    if(!row) return;
    row.style.setProperty('display','grid','important');
    row.style.setProperty('grid-template-columns','minmax(0,1fr) minmax(0,1fr)','important');
    row.style.setProperty('grid-template-rows','1fr','important');
    row.style.setProperty('gap','14px','important');
    row.style.setProperty('width','100%','important');
    row.style.setProperty('align-items','stretch','important');
    row.style.setProperty('direction','rtl','important');
    row.querySelectorAll(':scope > .sbnGroup').forEach(g=>{
      g.style.setProperty('width','auto','important');
      g.style.setProperty('min-width','0','important');
      g.style.setProperty('box-sizing','border-box','important');
    });
  }
  function run(){forceExperienceBottom();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
  setTimeout(run,100);setTimeout(run,500);setTimeout(run,1200);setTimeout(run,2500);
  new MutationObserver(run).observe(document.documentElement,{subtree:true,childList:true});
})();
