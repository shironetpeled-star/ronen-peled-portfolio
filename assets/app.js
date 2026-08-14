const lang=document.documentElement.lang||'he';
const current=(location.pathname.split('/').pop()||'index.html');
const heNav=[['index.html','בית'],['skills.html','יכולות'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success'],['experience.html','ניסיון'],['projects.html','עבודות'],['education.html','השכלה'],['service.html','שירות צבאי'],['contact.html','צור איתי קשר'],['index-en.html','EN']];
const enNav=[['index-en.html','Home'],['skills-en.html','Skills'],['product-en.html','Product Manager'],['project-en.html','Project Manager'],['system-en.html','System Analyst'],['en-05.html','MAGIC'],['en-06.html','Customer Success'],['history-en.html','Experience'],['role-magic-en.html','Projects'],['role-customer-en.html','Education'],['service-page-en.html','Military Service'],['contact-en.html','Contact Me'],['index.html','עברית']];
let header=document.querySelector('header.top');
if(!header){header=document.createElement('header');header.className='top';document.body.insertBefore(header,document.body.firstChild);}
header.innerHTML='<div class="navwrap"><a class="brand" href="'+(lang==='en'?'index-en.html':'index.html')+'"><b>RONEN PELED</b><small>Product • Systems • Projects • MAGIC • Customer</small></a><button class="menu" aria-label="'+(lang==='en'?'Menu':'תפריט')+'">☰</button><nav></nav></div>';
const nav=header.querySelector('nav');
(lang==='en'?enNav:heNav).forEach(([href,label])=>{const a=document.createElement('a');a.href=href;a.textContent=label;if(current===href)a.classList.add('active');nav.appendChild(a);});
header.querySelector('.menu').addEventListener('click',()=>nav.classList.toggle('open'));
const input=document.getElementById('skillSearch');
if(input){const cards=[...document.querySelectorAll('.searchable')],count=document.getElementById('count'),empty=document.getElementById('noResults');const run=()=>{const q=input.value.trim().toLowerCase();let n=0;cards.forEach(c=>{const ok=!q||c.innerText.toLowerCase().includes(q);c.style.display=ok?'block':'none';if(ok)n++});if(count)count.textContent=lang==='en'?n+' categories':n+' קטגוריות';if(empty)empty.style.display=n?'none':'block'};input.addEventListener('input',run);run();}
if(current==='contact.html'||current==='contact-en.html'){const section=document.querySelector('main .section');if(section&&!document.getElementById('socialActions')){const box=document.createElement('div');box.id='socialActions';box.style.cssText='max-width:760px;margin:28px auto 0;display:flex;gap:14px;flex-wrap:wrap';const li=document.createElement('a');li.href='https://il.linkedin.com/in/%D7%A8%D7%95%D7%A0%D7%9F-%D7%A4%D7%9C%D7%93-a27a771a';li.target='_blank';li.rel='noopener noreferrer';li.textContent=lang==='en'?'My LinkedIn':'LinkedIn שלי';li.style.cssText='display:inline-flex;padding:14px 22px;border:1px solid #cfd5df;border-radius:12px;text-decoration:none;font-weight:700';const wa=document.createElement('a');wa.href='https://wa.me/972546546288';wa.target='_blank';wa.rel='noopener noreferrer';wa.textContent=lang==='en'?'Chat with me on WhatsApp':'שוחח איתי ב‑WhatsApp';wa.style.cssText=li.style.cssText;box.append(li,wa);section.appendChild(box);}}

function splitSkillItems(text){
  return text.split(/\.\s+(?=[^—.]{1,80}\s—\s)|\.\s*(?=[A-Z][A-Za-z0-9 &/+.-]{2,70}\s·\s)|\.\s*(?=[\u0590-\u05FF][^—.]{1,80}\s—\s)/).map(s=>s.trim()).filter(Boolean).map(s=>s.replace(/\.$/,''));
}
function renderCollapsibleList(target,text,type){
  if(!target||!text)return;
  const items=splitSkillItems(text);
  target.innerHTML='';
  if(!items.length)return;
  const list=document.createElement('ol');
  list.style.cssText='margin:8px 0 0;padding-inline-start:24px;display:grid;gap:10px';
  items.forEach((item,i)=>{const li=document.createElement('li');li.textContent=item;li.style.lineHeight='1.65';if(i>=2)li.hidden=true;list.appendChild(li)});
  target.appendChild(list);
  if(items.length>2){
    const btn=document.createElement('button');
    btn.type='button';
    const moreLabel=type==='workplaces'?(lang==='en'?'More workplaces':'מקומות נוספים'):(lang==='en'?'More projects':'עבודות נוספות');
    const lessLabel=lang==='en'?'Show less':'הצג פחות';
    btn.textContent=moreLabel;
    btn.style.cssText='margin-top:12px;padding:8px 14px;border:1px solid #cfd5df;border-radius:10px;background:#fff;font-weight:700;cursor:pointer';
    let expanded=false;
    btn.addEventListener('click',()=>{expanded=!expanded;[...list.children].forEach((li,i)=>{if(i>=2)li.hidden=!expanded});btn.textContent=expanded?lessLabel:moreLabel});
    target.appendChild(btn);
  }
}
if(current==='skills.html'||current==='skills-en.html'){
  const used=document.getElementById('sliderUsed');
  const projects=document.getElementById('sliderProjects');
  if(used){const observer=new MutationObserver(()=>{const text=used.textContent.trim();if(text&&!used.querySelector('ol'))renderCollapsibleList(used,text,'workplaces')});observer.observe(used,{childList:true,characterData:true,subtree:true});}
  if(projects){const observer=new MutationObserver(()=>{const text=projects.textContent.trim();if(text&&!projects.querySelector('ol'))renderCollapsibleList(projects,text,'projects')});observer.observe(projects,{childList:true,characterData:true,subtree:true});}
}