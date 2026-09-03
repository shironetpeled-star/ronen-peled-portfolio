(()=>{
  if(document.documentElement.lang!=='en')return;
  const apply=()=>{
    let style=document.getElementById('englishNavEdgeHotfix');
    if(!style){
      style=document.createElement('style');
      style.id='englishNavEdgeHotfix';
      style.textContent=`
@media(min-width:951px){
  html[lang="en"] body header.top nav{
    display:grid!important;
    grid-template-columns:repeat(7,minmax(0,1fr))!important;
    grid-template-rows:35px 35px!important;
    column-gap:10px!important;
    row-gap:20px!important;
    width:100%!important;
    max-width:none!important;
    min-width:0!important;
    padding:0!important;
    margin:0!important;
    box-sizing:border-box!important;
    align-items:stretch!important;
    justify-items:stretch!important;
  }
  html[lang="en"] body header.top nav>a,
  html[lang="en"] body header.top nav>a:nth-child(14),
  html[lang="en"] body header.top nav>a[href="index.html"]{
    position:static!important;
    inset:auto!important;
    top:auto!important;
    right:auto!important;
    bottom:auto!important;
    left:auto!important;
    transform:none!important;
    width:100%!important;
    max-width:none!important;
    min-width:0!important;
    height:35px!important;
    min-height:35px!important;
    max-height:35px!important;
    margin:0!important;
    padding:0 7px!important;
    box-sizing:border-box!important;
    align-self:stretch!important;
    justify-self:stretch!important;
    display:flex!important;
    align-items:center!important;
    justify-content:center!important;
    line-height:1!important;
    white-space:nowrap!important;
  }
  html[lang="en"] body header.top nav>a:nth-child(-n+7){grid-row:1!important}
  html[lang="en"] body header.top nav>a:nth-child(n+8){grid-row:2!important}
  html[lang="en"] body header.top nav>a:nth-child(1),html[lang="en"] body header.top nav>a:nth-child(8){grid-column:1!important}
  html[lang="en"] body header.top nav>a:nth-child(2),html[lang="en"] body header.top nav>a:nth-child(9){grid-column:2!important}
  html[lang="en"] body header.top nav>a:nth-child(3),html[lang="en"] body header.top nav>a:nth-child(10){grid-column:3!important}
  html[lang="en"] body header.top nav>a:nth-child(4),html[lang="en"] body header.top nav>a:nth-child(11){grid-column:4!important}
  html[lang="en"] body header.top nav>a:nth-child(5),html[lang="en"] body header.top nav>a:nth-child(12){grid-column:5!important}
  html[lang="en"] body header.top nav>a:nth-child(6),html[lang="en"] body header.top nav>a:nth-child(13){grid-column:6!important}
  html[lang="en"] body header.top nav>a:nth-child(7),html[lang="en"] body header.top nav>a:nth-child(14){grid-column:7!important}
}
`;
      document.head.appendChild(style);
    }
    const nav=document.querySelector('header.top nav');
    if(nav){
      const he=[...nav.querySelectorAll('a')].find(a=>(a.getAttribute('href')||'').split('/').pop()==='index.html');
      if(he){he.textContent='HE';he.setAttribute('aria-label','Hebrew');}
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
  setTimeout(apply,200);setTimeout(apply,800);
  new MutationObserver(apply).observe(document.documentElement,{subtree:true,childList:true});
})();
