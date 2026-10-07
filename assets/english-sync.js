(()=>{
const page=()=>location.pathname.split('/').pop()||'index-en.html';
const enNav=[
 ['index-en.html','Home'],['skills-en.html','Skills'],['product-en.html','Product Manager'],['project-en.html','Project Manager'],['system-en.html','System Analyst'],['en-05.html','MAGIC Developer'],['en-06.html','Customer Success'],['history-en.html','Experience'],['role-magic-en.html','Work & Projects'],['work-environments-en.html','System Types'],['role-customer-en.html','Education'],['service-page-en.html','Military Service'],['advantages-en.html','My Advantages'],['contact-en.html','Contact Me'],['index.html','HE']
];
const rolePages=['product-en.html','project-en.html','system-en.html','en-05.html','en-06.html'];
const roleQuick=[['history-en.html','Experience Details'],['role-magic-en.html','Project List'],['work-environments-en.html','System Types'],['role-customer-en.html','Education']];
const roleNav=[['index-en.html','Home · 360° View'],['product-en.html','Product Manager'],['project-en.html','Project Manager'],['system-en.html','System Analyst'],['en-05.html','MAGIC Developer'],['en-06.html','Customer Success']];
const buttonCss='display:inline-flex;align-items:center;justify-content:center;min-height:44px;box-sizing:border-box;padding:10px 14px;border-radius:11px;background:#edf3ff;border:1px solid #c9d9f5;color:#0f4fbf;text-decoration:none;font-weight:900;font-size:13px;line-height:1.2;white-space:nowrap';
function ensureStyles(){if(document.getElementById('englishSiteSyncStyles'))return;const s=document.createElement('style');s.id='englishSiteSyncStyles';s.textContent=`
html[lang="en"] .top{background:#0d2946!important;border-bottom:1px solid #143c64!important}
html[lang="en"] .top .navwrap{min-height:112px!important;grid-template-columns:270px minmax(0,900px)!important;gap:24px!important}
html[lang="en"] .top .brandBlock{min-width:270px!important}
html[lang="en"] .top .brand b{font-size:24px!important;line-height:1.15!important;font-weight:900!important;color:#fff!important}
html[lang="en"] .top .brand small{font-size:15px!important;line-height:1.3!important;font-weight:700!important;color:#dce9f7!important;white-space:normal!important}
html[lang="en"] .top .brandPhone{font-size:13px!important;font-weight:800!important;color:#fff!important}
html[lang="en"] .top nav a,html[lang="en"] .top nav a.active{background:#74e8dd!important;color:#1f5fbf!important;border:1px solid #4c7fc8!important;box-shadow:0 2px 7px rgba(0,0,0,.18)!important;font-weight:900!important;text-decoration:none!important}
html[lang="en"] .top nav a:hover{background:#8cece3!important;color:#174f9f!important}
.roleOverview{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:28px!important;align-items:stretch!important;padding-top:26px!important}
.roleBringCard,.roleExperience{box-sizing:border-box;min-width:0;margin:0!important}
.roleBringCard{display:flex!important;flex-direction:column!important;justify-content:flex-start!important}
.roleExperience{display:flex!important;flex-direction:column!important;height:470px!important;min-height:470px!important;padding:28px 30px!important;border-radius:20px!important;box-shadow:0 14px 34px rgba(13,34,54,.14)!important;overflow:visible!important}
.roleExperience .expQuick{margin-top:auto!important;padding-top:16px!important;display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:6px!important;width:100%!important}
.roleExperience .expQuick a{width:100%!important;min-width:0!important;white-space:nowrap!important;text-align:center!important;font-size:12px!important;font-weight:900!important;color:#0b3f9c!important;background:#fff!important;border:2px solid #b8cff3!important;padding:9px 5px!important;line-height:1.15!important;box-shadow:0 4px 10px rgba(13,34,54,.12)!important}
.roleExperience .expQuick a:hover{background:#195ed8!important;color:#fff!important;border-color:#195ed8!important}
.enSkillsHeader{display:flex;align-items:center;justify-content:space-between;gap:16px;width:min(1160px,calc(100% - 40px));margin:0 auto 20px}
.enSkillsHeader strong{display:flex;align-items:center;gap:12px;font-size:25px;font-weight:900;color:#0e2945}.enSkillsHeader strong:before{content:'🧠';width:42px;height:42px;border-radius:12px;display:inline-grid;place-items:center;background:#195ed8;color:#fff;font-size:22px}
.enSkillsHeader a{${buttonCss};background:#195ed8;color:#fff!important;border-color:#195ed8;box-shadow:0 7px 16px rgba(25,94,216,.18)}
.enAdvList{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 24px;margin:20px 0 0;padding:0;list-style:none}.enAdvList li{position:relative;padding:11px 12px 11px 34px;background:#f7faff;border:1px solid #e0e8f2;border-radius:12px;line-height:1.65;color:#405469}.enAdvList li:before{content:'✓';position:absolute;left:12px;top:11px;color:#195ed8;font-weight:900}.enAdvList strong{color:#173b6c}
.enAllAdvantages{position:absolute;top:18px;right:18px;${buttonCss};background:#fff}.adv{position:relative!important}
.enNextStep{padding:0 0 58px}.enNextStepCard{background:linear-gradient(135deg,#0e2945,#195ed8);color:#fff;border-radius:20px;padding:28px 30px;box-shadow:0 14px 34px rgba(13,34,54,.14);border-left:5px solid #74e8dd;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}.enNextStepCard span{display:block;color:#8ee8df;font-size:12px;letter-spacing:1.5px;font-weight:900;margin-bottom:5px}.enNextStepCard h2{margin:0 0 5px;font-size:clamp(1.5rem,3vw,2.15rem)}.enNextStepCard p{margin:0;color:#dce9f7}.enNextStepCard a{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:11px;background:#fff;color:#195ed8;font-weight:900;text-decoration:none}
.enProfessionNav{padding:0 0 54px}.enProfessionNav>div:first-child{font-size:14px;font-weight:900;color:#405469;margin:0 0 12px}.enProfessionButtons{display:flex;gap:8px;flex-wrap:wrap}.enProfessionButtons a{${buttonCss}}
.enQuickRow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;width:100%;margin:28px 0 24px}.enQuickRow a{${buttonCss}}
@media(min-width:951px){
 html[lang="en"] .top nav{display:grid!important;grid-template-columns:repeat(54,minmax(0,1fr))!important;grid-template-rows:35px 35px!important;row-gap:20px!important;column-gap:0!important;width:100%!important;max-width:none!important;padding:0!important;box-sizing:border-box!important;align-items:stretch!important}
 html[lang="en"] body .top nav>a{position:static!important;inset:auto!important;transform:none!important;width:calc(100% - 8px)!important;max-width:none!important;min-width:0!important;height:35px!important;min-height:35px!important;box-sizing:border-box!important;justify-self:center!important;align-self:stretch!important;padding:7px 5px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:clip!important;font-size:12px!important;line-height:1.1!important}
 html[lang="en"] .top nav>a:nth-child(1){grid-row:1!important;grid-column:1/span 6!important;justify-self:start!important}
 html[lang="en"] .top nav>a:nth-child(2){grid-row:1!important;grid-column:7/span 6!important}
 html[lang="en"] .top nav>a:nth-child(8){grid-row:1!important;grid-column:13/span 6!important}
 html[lang="en"] .top nav>a:nth-child(9){grid-row:1!important;grid-column:19/span 6!important}
 html[lang="en"] .top nav>a:nth-child(10){grid-row:1!important;grid-column:25/span 6!important}
 html[lang="en"] .top nav>a:nth-child(11){grid-row:1!important;grid-column:31/span 6!important}
 html[lang="en"] .top nav>a:nth-child(12){grid-row:1!important;grid-column:37/span 6!important}
 html[lang="en"] .top nav>a:nth-child(13){grid-row:1!important;grid-column:43/span 6!important}
 html[lang="en"] .top nav>a:nth-child(14){grid-row:1!important;grid-column:49/span 6!important;justify-self:end!important}
 html[lang="en"] .top nav>a:nth-child(3){grid-row:2!important;grid-column:1/span 9!important;justify-self:start!important}
 html[lang="en"] .top nav>a:nth-child(4){grid-row:2!important;grid-column:10/span 9!important}
 html[lang="en"] .top nav>a:nth-child(5){grid-row:2!important;grid-column:19/span 9!important}
 html[lang="en"] .top nav>a:nth-child(6){grid-row:2!important;grid-column:28/span 9!important}
 html[lang="en"] .top nav>a:nth-child(7){grid-row:2!important;grid-column:37/span 9!important}
 html[lang="en"] .top nav>a:nth-child(15){grid-row:2!important;grid-column:46/span 9!important;justify-self:end!important}
}
@media(max-width:950px){html[lang="en"] .top nav{background:#0d2946!important;border-color:#143c64!important}.top .menu{color:#fff!important}}
@media(max-width:900px){.roleOverview{grid-template-columns:1fr!important}.roleExperience{height:auto!important;min-height:470px!important}.enAdvList{grid-template-columns:1fr!important}.enQuickRow{grid-template-columns:1fr 1fr!important}}
`;document.head.appendChild(s)}
function headerIsComplete(h){if(!h)return false;const links=[...h.querySelectorAll('nav>a')];if(links.length!==enNav.length)return false;return enNav.every(([href,label],i)=>{const a=links[i];if(!a)return false;const actual=(a.getAttribute('href')||'').split('/').pop();return actual===href&&a.textContent.trim()===label})}
function normalizeHeader(){if(document.documentElement.lang!=='en')return;ensureStyles();let h=document.querySelector('header.top');if(!h){h=document.createElement('header');h.className='top';document.body.insertBefore(h,document.body.firstChild)}const expected='english-unified-nav-v3';if(h.dataset.sync===expected&&headerIsComplete(h))return;h.dataset.sync=expected;h.innerHTML='<div class="navwrap"><div class="brandBlock"><a class="brand" href="index-en.html"><b>RONEN PELED</b><small>Product Manager • Project Manager • System Analyst<br>MAGIC Developer • Customer Success</small></a><span class="brandPhone">054-6546288</span></div><button class="menu" aria-label="Menu">☰</button><nav></nav></div>';const n=h.querySelector('nav');enNav.forEach(([href,label])=>{const a=document.createElement('a');a.href=href;a.textContent=label;if(page()===href)a.classList.add('active');n.appendChild(a)});h.querySelector('.menu').addEventListener('click',()=>n.classList.toggle('open'))}
function row(items,cls){const d=document.createElement('div');d.className=cls||'enQuickRow';items.forEach(([href,label])=>{const a=document.createElement('a');a.href=href;a.textContent=label;d.appendChild(a)});return d}

const englishPageMap={"index-en.html":"index.html","product-en.html":"product.html","project-en.html":"project.html","system-en.html":"system.html","en-05.html":"magic.html","en-06.html":"customer.html","history-en.html":"experience.html","role-magic-en.html":"projects.html","role-customer-en.html":"education.html","service-page-en.html":"military.html","skills-en.html":"skills.html","work-environments-en.html":"work-environments.html","advantages-en.html":"advantages.html","contact-en.html":"contact.html"};
const navigationByPage={
 'history-en.html':[['role-magic-en.html','Work & Projects'],['work-environments-en.html','System Types'],['role-customer-en.html','Education'],['service-page-en.html','Military Service'],['skills-en.html','Skills'],['advantages-en.html','My Advantages']],
 'work-environments-en.html':[['history-en.html','Experience'],['role-magic-en.html','Work & Projects'],['role-customer-en.html','Education'],['service-page-en.html','Military Service'],['skills-en.html','Skills'],['advantages-en.html','My Advantages']],
 'role-customer-en.html':[['history-en.html','Experience'],['role-magic-en.html','Work & Projects'],['work-environments-en.html','System Types'],['service-page-en.html','Military Service'],['advantages-en.html','My Advantages'],['skills-en.html','Skills']],
 'service-page-en.html':[['history-en.html','Experience'],['role-magic-en.html','Work & Projects'],['work-environments-en.html','System Types'],['role-customer-en.html','Education'],['skills-en.html','Skills'],['advantages-en.html','My Advantages']],
 'skills-en.html':[['history-en.html','Experience'],['role-magic-en.html','Work & Projects'],['work-environments-en.html','System Types'],['advantages-en.html','My Advantages'],['role-customer-en.html','Education'],['service-page-en.html','Military Service']],
 'advantages-en.html':[['history-en.html','Experience'],['role-magic-en.html','Work & Projects'],['work-environments-en.html','System Types'],['advantages-en.html','My Advantages'],['role-customer-en.html','Education'],['service-page-en.html','Military Service'],['skills-en.html','Skills']],
 'contact-en.html':[['history-en.html','Experience'],['role-magic-en.html','Work & Projects'],['work-environments-en.html','System Types'],['advantages-en.html','My Advantages'],['role-customer-en.html','Education'],['service-page-en.html','Military Service'],['skills-en.html','Skills']]
};
function addParityStyles(){
 if(document.getElementById('englishParityStyles'))return;
 const style=document.createElement('style');style.id='englishParityStyles';style.textContent=`
 html[lang="en"] .innerHero{text-align:left}@media(min-width:951px){html[lang="en"] body header.top nav>a[href="role-magic-en.html"]{width:100%!important;font-size:clamp(8px,.7vw,10px)!important;letter-spacing:0!important;padding-left:3px!important;padding-right:3px!important}} @media(min-width:951px){html[lang="en"] .top .navwrap{grid-template-columns:320px minmax(0,900px)!important}html[lang="en"] .top .brandBlock{min-width:320px!important}html[lang="en"] .top .brand small{font-size:12px!important}html[lang="en"] body .top nav>a{font-size:10px!important;overflow:visible!important}}
 html[lang="en"] footer{direction:ltr}
 html[lang="en"] .skillSlider{direction:ltr}
 html[lang="en"] .skillSlider h3{font-size:17px} html[lang="en"] .skillGrid>.skill{min-width:0;max-width:100%;overflow-wrap:anywhere} html[lang="en"] .titleWithIcon h3{min-width:0;white-space:normal} @media(max-width:620px){html[lang="en"] .skillGrid{grid-template-columns:minmax(0,1fr)!important}html[lang="en"] .titleWithIcon{flex-wrap:wrap}}
 html[lang="en"] .skillGrid .skill p{overflow-wrap:anywhere}
 #englishSharedBottom{max-width:1240px;margin:42px auto 0;padding:0 24px 54px;box-sizing:border-box}
 .esbNext{background:linear-gradient(135deg,#0e2945,#195ed8);color:#fff;border-radius:20px;padding:28px 30px;box-shadow:0 14px 34px rgba(13,34,54,.14);border-left:5px solid #21c7b7;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
 .esbNext span{display:block;color:#8ee8df;font-size:12px;letter-spacing:1.5px;font-weight:900;margin-bottom:5px}
 .esbNext h2{margin:0 0 5px;font-size:clamp(1.5rem,3vw,2.15rem)}.esbNext p{margin:0;color:#dce9f7}
 .esbContact{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:11px;background:#fff;color:#195ed8!important;font-weight:900;text-decoration:none;white-space:nowrap}
 .esbTitle{font-size:14px;font-weight:900;color:#405469;margin:22px 0 8px}
 .esbRow{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;align-items:stretch}
 .esbGroup{min-width:0;background:#fff;border:1px solid #dce6f2;border-radius:16px;padding:13px 14px;box-shadow:0 8px 20px rgba(13,34,54,.05)}
 .esbGroupTitle{font-size:15px;font-weight:950;color:#10284a;margin:0 0 9px;padding:7px 10px;border-radius:9px;background:#eef5ff}
 .esbLinks{display:grid;grid-template-columns:repeat(var(--link-count,6),minmax(0,1fr));gap:5px;overflow-x:auto;min-width:0;width:100%;align-items:stretch}
 .esbLinks a{display:flex;align-items:center;justify-content:center;min-height:44px;padding:8px 4px;border-radius:10px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8!important;text-decoration:none;font-weight:900;font-size:11px;line-height:1.2;white-space:normal;text-align:center;box-sizing:border-box}
 .esbLinks a:hover{background:#195ed8;color:#fff!important}
 .enRoleNavigation{padding-bottom:54px}.enRoleNavigation .enProfessionButtons{flex-wrap:nowrap;overflow-x:auto;align-items:stretch}.enRoleNavigation a{white-space:nowrap;flex:0 0 auto}
 html[lang="en"] .companyMark{direction:ltr}
 @media(max-width:900px){.esbLinks{grid-template-columns:repeat(var(--link-count,6),minmax(105px,1fr))}} @media(max-width:620px){html[lang="en"] footer:has(.footerPageLinks){padding-bottom:100px}.esbNext{padding:24px 20px}}
 `;document.head.appendChild(style);
}
function navigationGroup(title,items,professional){
 const box=document.createElement('div');box.className='esbGroup'+(professional?' esbProfessional':'');
 const heading=document.createElement('div');heading.className='esbGroupTitle';heading.textContent=title;
 const links=row(items,'esbLinks');links.style.setProperty('--link-count',items.length);
 box.append(heading,links);return box;
}
function addEnglishBottom(){
 const p=page(),items=navigationByPage[p];if(!items||document.getElementById('englishSharedBottom'))return;
 const main=document.querySelector('main');if(!main)return;
 main.querySelectorAll('.nextStep,.professionBottomNav,.experienceMoreJobsRow,#experienceQuickButtons,.milBottom').forEach(el=>el.style.display='none');
 const section=document.createElement('section');section.id='englishSharedBottom';
 if(p!=='contact-en.html'){const next=document.createElement('div');next.className='esbNext';next.innerHTML='<div><span>NEXT STEP</span><h2>Let’s discuss the next role</h2><p>I would be glad to discuss the role, its challenges and the value I can bring.</p></div><a class="esbContact" href="contact-en.html">Contact Me →</a>';section.appendChild(next);}
 const title=document.createElement('div');title.className='esbTitle';title.textContent='Quick Navigation';
 const groups=document.createElement('div');groups.className='esbRow';groups.append(navigationGroup('Experience',items,false),navigationGroup('Professional Capabilities',roleNav,true));section.append(title,groups);main.appendChild(section);
}
function normalizeFooter(){
 const footer=document.querySelector('footer');if(!footer)return;
 const copyright=footer.querySelector('.siteCopyright');if(copyright)copyright.textContent='© All website creation and design rights reserved to Ronen Peled.';
 const home=footer.querySelector('.footerPageLinks a:last-child, :scope > a');if(home){home.href='index-en.html';if(!home.querySelector('svg'))home.textContent='Back to home page';}
}
function normalizeEnglishRole(){
 if(!rolePages.includes(page()))return;
 const main=document.querySelector('main');const overview=main.querySelector('.page.section.two');
 if(overview){overview.classList.add('roleOverview');overview.children[0].classList.add('roleBringCard');const exp=overview.querySelector('.highlight');if(exp){exp.classList.add('roleExperience');if(!exp.querySelector('.expQuick'))exp.appendChild(row(roleQuick,'expQuick'));}}
 if(!main.querySelector('.professionBottomNav,.enRoleNavigation')){
  const nav=document.createElement('section');nav.className='page enRoleNavigation';nav.innerHTML='<div class="professionBottomNavTitle">Quick Navigation</div>';nav.appendChild(row(roleNav.filter(x=>x[0]!==page()).concat([['skills-en.html','Skills'],['advantages-en.html','My Advantages']]),'enProfessionButtons'));main.appendChild(nav);
 }
}
function localizeGeneratedControls(){
 const labels={'הרחב לפירוט':'Expand for details','הרחב פירוט':'Expand for details','צמצם פירוט':'Collapse details','מקומות עבודה נוספים':'Additional Workplaces','עבודות נוספות':'Additional Work','הצג פחות':'Show less'};
 document.querySelectorAll('details>summary,button').forEach(el=>{const translated=labels[el.textContent.trim()];if(translated)el.textContent=translated;});
}
function sync(){
 if(document.documentElement.lang!=='en')return;
 normalizeHeader();localizeGeneratedControls();addParityStyles();addEnglishBottom();normalizeEnglishRole();normalizeFooter();
 const he=document.querySelector('header.top nav a[href="index.html"]');if(he)he.href=englishPageMap[page()]||(page()==='thanks-en.html'?'thanks.html':'index.html');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',sync,{once:true});else sync();
setTimeout(sync,150);setTimeout(sync,700);
let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;localizeGeneratedControls();const h=document.querySelector('header.top');if(!h)return;const expected=enNav.map(x=>x[0]);const actual=[...h.querySelectorAll('nav>a')].map(a=>a.getAttribute('href'));if(actual.length!==expected.length||actual.some((v,i)=>i<expected.length-1&&v!==expected[i])){normalizeHeader();const he=h.querySelector('nav a[href="index.html"]');if(he)he.href=englishPageMap[page()]||(page()==='thanks-en.html'?'thanks.html':'index.html');}})}).observe(document.documentElement,{childList:true,subtree:true});
})();
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
