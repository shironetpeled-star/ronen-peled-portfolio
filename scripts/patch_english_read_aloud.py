from pathlib import Path

APP = Path('assets/app.js')
s = APP.read_text(encoding='utf-8')
marker = '// English read-aloud with native pronunciation.'
if marker in s:
    raise SystemExit(0)

js = r'''

// English read-aloud with native pronunciation.
(function(){
  if(window.__ronenEnglishReadAloud)return;
  window.__ronenEnglishReadAloud=true;

  const page=()=>location.pathname.split('/').pop()||'index-en.html';
  const roles={
    'product-en.html':'Product Manager',
    'project-en.html':'Project Manager',
    'system-en.html':'System Analyst',
    'en-05.html':'MAGIC Developer',
    'en-06.html':'Customer Success'
  };
  const currentPage=page();
  const isHome=currentPage==='index-en.html';
  const isRole=Object.prototype.hasOwnProperty.call(roles,currentPage);
  if(document.documentElement.lang!=='en' && !isHome && !isRole)return;

  const normalize=t=>(t||'').replace(/\s+/g,' ').trim()
    .replace(/\bPRD\b/g,'P R D')
    .replace(/\bQA\b/g,'Q A')
    .replace(/\bUX\b/g,'U X')
    .replace(/\bUI\b/g,'U I')
    .replace(/\bKPI(?:s)?\b/g,'K P I')
    .replace(/\bAPI(?:s)?\b/g,'A P I')
    .replace(/\bAI\b/g,'A I')
    .replace(/\bCRM\b/g,'C R M')
    .replace(/\bERP\b/g,'E R P')
    .replace(/\bBI\b/g,'B I')
    .replace(/\bB2B\b/g,'B to B')
    .replace(/\bB2C\b/g,'B to C')
    .replace(/\bMVP\b/g,'M V P')
    .replace(/\bMLP\b/g,'M L P')
    .replace(/\bWBS\b/g,'W B S')
    .replace(/\bHTML\b/g,'H T M L')
    .replace(/\bCSS\b/g,'C S S')
    .replace(/\bSQL\b/g,'S Q L')
    .replace(/\bNoSQL\b/gi,'No S Q L')
    .replace(/\bJSON\b/g,'J S O N')
    .replace(/\bREST\b/g,'rest')
    .replace(/\bSaaS\b/g,'sass')
    .replace(/\bDevOps\b/gi,'Dev Ops')
    .replace(/\.NET\b/gi,'dot net')
    .replace(/\bC#/g,'C sharp')
    .replace(/\bC\+\+/g,'C plus plus')
    .replace(/\bMS[- ]SQL\b/gi,'Microsoft S Q L')
    .replace(/\bA\/B\b/g,'A B')
    .replace(/360°?/g,'three hundred and sixty degrees')
    .replace(/\bEnd[\s-]?to[\s-]?End\b/gi,'end to end')
    .replace(/\bMAGIC\b/g,'Magic')
    .replace(/\bGitHub\b/g,'Git Hub')
    .replace(/\bLinkedIn\b/g,'Linked In');

  const pickVoice=()=>{
    const voices=speechSynthesis.getVoices();
    return voices.find(v=>/^en-US$/i.test(v.lang)) ||
           voices.find(v=>/^en-GB$/i.test(v.lang)) ||
           voices.find(v=>/^en/i.test(v.lang)) || null;
  };

  let runId=0;
  const stop=btn=>{
    runId++;
    speechSynthesis.cancel();
    if(btn){btn.dataset.reading='0';btn.textContent='🔊 Read this page';}
  };

  const extract=root=>{
    const clone=root.cloneNode(true);
    clone.querySelectorAll('button,script,style,nav,footer,.nextStep,#roleProfessionNavigation,.expQuick,.roleQuickLinks,#pageReadButton,#englishPageReadButton').forEach(x=>x.remove());
    const out=[];
    const seen=new Set();
    clone.querySelectorAll('h1,h2,h3,h4,p,li,article strong,article span,.rdTags a,.rdActions a').forEach(el=>{
      const raw=(el.innerText||el.textContent||'').replace(/\s+/g,' ').trim();
      if(!raw||seen.has(raw))return;
      seen.add(raw);
      const isHeading=/^H[1-4]$/.test(el.tagName);
      out.push({text:normalize(raw),pause:isHeading?1050:(el.tagName==='LI'?420:320)});
    });
    return out;
  };

  const findSmallest=(main,needle)=>[...main.querySelectorAll('section,article')]
    .filter(x=>(x.innerText||'').toLowerCase().includes(needle.toLowerCase()))
    .sort((a,b)=>(a.innerText||'').length-(b.innerText||'').length)[0]||null;

  const homeChunks=main=>{
    const blocks=[
      main.querySelector('.rdHeroCopy'),
      main.querySelector('.rdStats'),
      main.querySelector('.lifecycleSection'),
      findSmallest(main,'five professional'),
      findSmallest(main,'value I bring')
    ].filter(Boolean);
    const out=[];
    const seen=new Set();
    blocks.forEach(block=>{
      const key=(block.innerText||'').trim();
      if(!key||seen.has(key))return;
      seen.add(key);
      if(out.length)out.push({pause:1400});
      out.push(...extract(block));
    });
    return out;
  };

  const speakQueue=(items,btn)=>{
    const my=++runId;
    let i=0;
    btn.dataset.reading='1';
    btn.textContent='⏹ Stop reading';
    speechSynthesis.cancel();
    const next=()=>{
      if(my!==runId)return;
      if(i>=items.length){
        btn.dataset.reading='0';
        btn.textContent='🔊 Read this page';
        return;
      }
      const item=items[i++];
      if(item.pause&&!item.text){setTimeout(next,item.pause);return;}
      if(!item.text){next();return;}
      const u=new SpeechSynthesisUtterance(item.text);
      u.lang='en-US';
      u.rate=0.9;
      u.pitch=1;
      const v=pickVoice();
      if(v)u.voice=v;
      u.onend=()=>setTimeout(next,item.pause||320);
      u.onerror=()=>setTimeout(next,250);
      speechSynthesis.speak(u);
    };
    next();
  };

  const add=()=>{
    if((!isHome&&!isRole)||document.getElementById('englishPageReadButton')||document.getElementById('pageReadButton'))return;
    const main=document.querySelector('main');
    if(!main)return;
    const hero=isHome?main.querySelector('.rdHero'):main.querySelector('.innerHero,.hero,.roleHero,section');
    if(!hero)return;
    const anchor=isHome?(hero.querySelector('.rdHeroCopy')||hero):(hero.querySelector('.page')||hero);
    if(getComputedStyle(anchor).position==='static')anchor.style.position='relative';

    const btn=document.createElement('button');
    btn.id='englishPageReadButton';
    btn.type='button';
    btn.textContent='🔊 Read this page';
    btn.setAttribute('aria-label',isRole?'Read '+roles[currentPage]+' page aloud':'Read the main content of the home page aloud');
    btn.style.cssText='position:absolute;top:18px;right:18px;z-index:5;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:9px 15px;border-radius:11px;background:#edf3ff;border:1px solid #195ed8;color:#195ed8;font:900 14px inherit;cursor:pointer;box-shadow:0 4px 12px rgba(13,34,54,.10)';
    btn.addEventListener('click',()=>{
      if(!('speechSynthesis' in window)){alert('Your browser does not support text-to-speech.');return;}
      if(btn.dataset.reading==='1'){stop(btn);return;}
      const items=isHome?homeChunks(main):[{text:roles[currentPage],pause:1200},...extract(main)];
      if(items.length)speakQueue(items,btn);
    });
    anchor.appendChild(btn);

    if(!document.getElementById('englishPageReadStyle')){
      const st=document.createElement('style');
      st.id='englishPageReadStyle';
      st.textContent='@media(max-width:720px){#englishPageReadButton{position:static!important;margin:14px 0 0!important}}';
      document.head.appendChild(st);
    }
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(add,0),{once:true});
  else setTimeout(add,0);
})();
'''

APP.write_text(s + js, encoding='utf-8')
