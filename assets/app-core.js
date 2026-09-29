(function(){
  var original=document.createElement('script');
  original.src='assets/app-core-original.js?v=20260929-experience-nav';
  original.onload=function(){
    if((location.pathname.split('/').pop()||'index.html').toLowerCase()!=='experience.html')return;
    function fix(){
      var nav=document.getElementById('sharedBottomNavigation');
      if(!nav)return;
      var row=nav.querySelector('.sbnRow');
      if(!row)return;
      row.style.setProperty('display','grid','important');
      row.style.setProperty('grid-template-columns','minmax(0,1fr) minmax(0,1fr)','important');
      row.style.setProperty('grid-template-rows','auto','important');
      row.style.setProperty('column-gap','18px','important');
      row.style.setProperty('row-gap','0','important');
      row.style.setProperty('align-items','stretch','important');
      row.style.setProperty('width','100%','important');
      row.style.setProperty('box-sizing','border-box','important');
      row.style.setProperty('direction','rtl','important');
      row.style.setProperty('flex-wrap','nowrap','important');
      var groups=row.querySelectorAll(':scope > .sbnGroup');
      groups.forEach(function(group){
        group.style.setProperty('width','auto','important');
        group.style.setProperty('max-width','none','important');
        group.style.setProperty('min-width','0','important');
        group.style.setProperty('margin','0','important');
        group.style.setProperty('box-sizing','border-box','important');
        group.style.setProperty('grid-column','auto','important');
        group.style.setProperty('grid-row','1','important');
      });
    }
    fix();
    var observer=new MutationObserver(fix);
    observer.observe(document.getElementById('sharedBottomNavigation')||document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['style','class']});
    [50,250,800,1500,3000].forEach(function(ms){setTimeout(fix,ms)});
  };
  original.onerror=function(){};
  document.head.appendChild(original);
})();