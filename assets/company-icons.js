(()=>{
  const page=location.pathname.split('/').pop()||'index.html';
  if(!['projects.html','experience.html'].includes(page))return;
  const rules=[
    {names:['SMARTi','Smarti','דור אלי שני'],src:'assets/images/smarti-logo.svg',fallback:'👥',title:'SMARTi'},
    {names:['Shlomo SIXT','Shlomo Sixt','שלמה SIXT','קבוצת שלמה','שלמה'],src:'https://www.shlomo.co.il/favicon.ico',fallback:'🚗',title:'Shlomo SIXT'},
    {names:['SYSNET','Sysnet','סיסנת'],src:'assets/images/amanet-user-logo.svg',fallback:'🏢',title:'SYSNET / Aman'},
    {names:['Magnolia','מגנוליה'],src:'assets/images/magnolia-logo.svg',fallback:'💎',title:'Magnolia'},
    {names:['SecuLife','Seculife','SECULIFE','Secuitech','סקיוטק','Natali','נטלי'],src:'https://www.natali.co.il/favicon.ico',fallback:'❤️',title:'Natali / SecuLife'},
    {names:['Verifone','א.ח. יישומים'],src:'assets/images/verifone.png',fallback:'🧾',title:'Verifone'},
    {names:['Aman Group','אמן'],src:'assets/images/amanet-user-logo.svg',fallback:'🏢',title:'Aman Group'},
    {names:['Anirim','אנירים'],src:'assets/images/anirim-user-logo.svg',fallback:'🧾',title:'Anirim'},
    {names:['Beta Soft','BetaSoft'],src:'assets/images/netvision-logo.svg',fallback:'🌐',title:'Beta Soft / NetVision'}
  ];
  const makeIcon=rule=>{const box=document.createElement('span');box.className='companyIcon';box.title=rule.title;box.setAttribute('aria-hidden','true');box.style.cssText='display:inline-grid;place-items:center;width:1.65em;height:1.65em;margin-inline-end:.38em;border-radius:.38em;background:#fff;border:1px solid #d9e4ef;line-height:1;vertical-align:middle;overflow:hidden;flex:0 0 auto';if(rule.src){const img=document.createElement('img');img.src=rule.src;img.alt='';img.loading='lazy';img.referrerPolicy='no-referrer';img.style.cssText='width:100%;height:100%;object-fit:contain;padding:2px;box-sizing:border-box';img.onerror=()=>{box.textContent=rule.fallback||'🏢'};box.appendChild(img)}else box.textContent=rule.fallback||'🏢';return box};
  const apply=()=>{
    const candidates=[...document.querySelectorAll('main article h3,main .job h3,main .job h2,main .experienceCard h3,main .experienceCard h2,main details summary')];
    candidates.forEach(el=>{
      if(el.querySelector('.companyIcon'))return;
      const text=el.textContent||'';
      const rule=rules.find(r=>r.names.some(n=>text.toLowerCase().includes(n.toLowerCase())));
      if(rule)el.prepend(makeIcon(rule));
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
  setTimeout(apply,250);setTimeout(apply,900);
})();
