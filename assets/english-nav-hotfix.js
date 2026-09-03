(()=>{
  if(document.documentElement.lang!=='en')return;

  const apply=()=>{
    if(document.getElementById('englishNavExactHebrewLayout'))return;
    const style=document.createElement('style');
    style.id='englishNavExactHebrewLayout';
    style.textContent=`
html[lang="en"] body header.top .brandPhone{
  display:block!important;
  width:100%!important;
  text-align:left!important;
  align-self:flex-start!important;
  margin-left:0!important;
  margin-right:auto!important;
}
@media(min-width:951px){
  html[lang="en"] body header.top .navwrap{min-height:112px!important}
  html[lang="en"] body header.top nav{
    display:grid!important;
    grid-template-columns:repeat(45,minmax(0,1fr))!important;
    grid-template-rows:35px 35px!important;
    row-gap:20px!important;
    column-gap:0!important;
    width:100%!important;
    max-width:none!important;
    min-width:0!important;
    padding-left:48px!important;
    padding-right:0!important;
    margin:0!important;
    box-sizing:border-box!important;
    align-items:stretch!important;
  }
  html[lang="en"] body header.top nav>a{
    position:static!important;inset:auto!important;transform:none!important;
    min-width:0!important;height:35px!important;min-height:35px!important;max-height:35px!important;
    margin:0!important;box-sizing:border-box!important;align-self:stretch!important;
    display:inline-flex!important;align-items:center!important;justify-content:center!important;
    line-height:1.1!important;white-space:nowrap!important;font-size:12px!important;
  }
  html[lang="en"] body header.top nav>a:nth-child(1){grid-row:1!important;grid-column:1/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(2){grid-row:1!important;grid-column:6/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(8){grid-row:1!important;grid-column:11/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(9){grid-row:1!important;grid-column:16/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(10){grid-row:1!important;grid-column:21/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(11){grid-row:1!important;grid-column:26/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(12){grid-row:1!important;grid-column:31/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(13){grid-row:1!important;grid-column:36/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(14){grid-row:1!important;grid-column:41/span 5!important}
  html[lang="en"] body header.top nav>a:nth-child(3){grid-row:2!important;grid-column:1/span 9!important}
  html[lang="en"] body header.top nav>a:nth-child(4){grid-row:2!important;grid-column:10/span 9!important}
  html[lang="en"] body header.top nav>a:nth-child(5){grid-row:2!important;grid-column:19/span 9!important}
  html[lang="en"] body header.top nav>a:nth-child(6){grid-row:2!important;grid-column:28/span 9!important}
  html[lang="en"] body header.top nav>a:nth-child(7){grid-row:2!important;grid-column:37/span 9!important}

  /* Top row: fixed 10px visual gap while preserving exact left/right edges. */
  html[lang="en"] body header.top nav>a:nth-child(1),
  html[lang="en"] body header.top nav>a:nth-child(2),
  html[lang="en"] body header.top nav>a:nth-child(8),
  html[lang="en"] body header.top nav>a:nth-child(9),
  html[lang="en"] body header.top nav>a:nth-child(10),
  html[lang="en"] body header.top nav>a:nth-child(11),
  html[lang="en"] body header.top nav>a:nth-child(12),
  html[lang="en"] body header.top nav>a:nth-child(13),
  html[lang="en"] body header.top nav>a:nth-child(14){
    width:calc(100% - 10px)!important;max-width:none!important;
    justify-self:center!important;padding:7px 5px!important;overflow:hidden!important;
  }
  html[lang="en"] body header.top nav>a:nth-child(1){width:calc(100% - 5px)!important;justify-self:start!important}
  html[lang="en"] body header.top nav>a:nth-child(14){width:calc(100% - 5px)!important;justify-self:end!important}

  html[lang="en"] body header.top nav>a:nth-child(n+3):nth-child(-n+7){
    width:100%!important;max-width:none!important;justify-self:stretch!important;
    padding-left:12px!important;padding-right:12px!important;
  }
}
@media(max-width:950px){html[lang="en"] body header.top nav>a{height:auto!important;min-height:44px!important;max-height:none!important;width:100%!important}}
`;
    document.head.appendChild(style);
    const nav=document.querySelector('header.top nav');
    if(nav){const he=[...nav.querySelectorAll('a')].find(a=>(a.getAttribute('href')||'').split('/').pop()==='index.html');if(he){if(he.textContent!=='HE')he.textContent='HE';he.setAttribute('aria-label','Hebrew')}}
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
  setTimeout(apply,250);setTimeout(apply,900);
})();
