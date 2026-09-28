(function(){
  var original=document.createElement('script');
  original.src='assets/app-core-original.js?v=20260928-experience-nav-fix';
  original.onload=function(){
    if((location.pathname.split('/').pop()||'index.html').toLowerCase()!=='experience.html')return;
    function fix(){
      var row=document.querySelector('#sharedBottomNavigation .sbnRow');
      if(!row)return;
      row.style.setProperty('display','grid','important');
      row.style.setProperty('grid-template-columns','minmax(0,1fr) minmax(0,1fr)','important');
      row.style.setProperty('gap','14px','important');
      row.style.setProperty('align-items','stretch','important');
      row.style.setProperty('width','100%','important');
      row.style.setProperty('box-sizing','border-box','important');
      row.style.setProperty('direction','rtl','important');
      var groups=row.querySelectorAll('.sbnGroup');
      groups.forEach(function(group){
        group.style.setProperty('width','auto','important');
        group.style.setProperty('min-width','0','important');
        group.style.setProperty('box-sizing','border-box','important');
      });
    }
    fix();
    setTimeout(fix,50);
    setTimeout(fix,250);
    setTimeout(fix,800);
  };
  original.onerror=function(){};
  document.head.appendChild(original);
})();