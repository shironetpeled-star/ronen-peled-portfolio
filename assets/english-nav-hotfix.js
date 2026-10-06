(()=>{
 if(document.documentElement.lang!=='en')return;
 function apply(){
  if(document.getElementById('englishNavExactHebrewLayout'))return;
  const style=document.createElement('style');
  style.id='englishNavExactHebrewLayout';
  style.textContent='html[lang="en"] body header.top .brandPhone{display:block!important;width:100%!important;text-align:left!important;align-self:flex-start!important;margin-left:0!important;margin-right:auto!important}';
  document.head.appendChild(style);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();