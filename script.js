(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var hero=document.querySelector('.hero');
if(!rm&&hero){hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px')})}
var lns=document.querySelectorAll('.code .ln');
if(!rm&&lns.length){lns.forEach(function(l){l.style.visibility='hidden'});var i=0,cur=document.createElement('span');cur.className='cur';
(function step(){if(i<lns.length){lns[i].style.visibility='visible';lns[i].appendChild(cur);i++;setTimeout(step,420)}})()}
var cs=document.querySelectorAll('.cnt');
if(!rm&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var t=e.target,m=t.textContent.match(/^(\d+(?:\.\d+)?)(.*)$/);if(!m)return;var n=parseFloat(m[1]),dec=(m[1].split('.')[1]||'').length,suf=m[2],t0=performance.now();(function f(now){var p=Math.min((now-t0)/1200,1);t.textContent=(n*(1-Math.pow(1-p,3))).toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.6});cs.forEach(function(c){io.observe(c)})}
var out=document.getElementById('tout'),inp=document.getElementById('tin');
var R={help:'Available commands:\n  about         who I am\n  education     where I studied\n  skills        what I work with\n  projects      selected work\n  experience    where I have worked\n  architecture  how I structure software\n  testing       how I ensure quality\n  systems       what I have built\n  contact       how to reach me\n  clear         clean the screen',
about:'Ibtissame Arrassi, Software Engineering graduate (2026). I build reliable software systems, from architecture and backend development to testing and AI-powered applications.',
skills:'Languages: Python, Java, JavaScript, TypeScript, C++\nFrameworks: React, Next.js, Node.js, FastAPI, Spring Boot\nData: PostgreSQL, MongoDB, SQLite, SQLAlchemy\nArchitecture: repositories, REST API design, RBAC, migrations\nTesting: Pytest, unit and integration tests\nAI-assisted tools: Cursor, GitHub Copilot, ChatGPT',
projects:'1. SignBridge: 97.04% static and 99.94% dynamic gesture accuracy\n2. FIDOMEK ONE: 87 automated tests passed\n3. MediBot: AI healthcare assistant (Llama 3)\n4. PassVault: full-stack password manager\n5. EcoTrack: ESG reporting platform\n6. CPU Scheduling Simulator (C++)',
experience:'FIDOMEK SARL AU: Software Engineer, on-site (Aug 2026 to present)\nIEEE HONET 2026: Technical Program Committee Reviewer, online\nHouXplore: Full-Stack Developer Intern, online (2026)\nCOPAG: Full-Stack Developer Intern, on-site (2025)',
contact:'Email: ibtissamearrassi2@gmail.com\nGitHub: github.com/arrassiibtissame\nLinkedIn: linkedin.com/in/ibtissame-arrassi',
architecture:'I design software with structure in mind.\n\nCurrent focus:\n- Layered architecture\n- Repository pattern\n- REST API design\n- Database modeling\n- System integration\n\nExplore: FIDOMEK ONE | SignBridge',
testing:'Quality is part of the development process.\n\nExperience:\n- Pytest\n- Postman\n- Repository testing\n- Data integrity validation\n- Error handling\n- Automated test suites\n\nLatest reported result: 87 tests passed.\nProject: FIDOMEK ONE',
systems:'Systems I’ve worked on:\n\n01. SignBridge — AI + real-time systems\n02. FIDOMEK ONE — Full-stack + database + testing\n03. MediBot — Generative AI + APIs\n04. PassVault — Full-stack + authentication\n05. EcoTrack — Full-stack + layered architecture\n06. CPU Scheduler — C++ + algorithms',
education:'BSc in Software Engineering, Cyprus International University (Sep 2022 to Jul 2026)\n75% Merit Scholarship, Dean’s Honor List, 100% English-medium program',
whoami:'Not just a coder. Someone who creates solutions.',
'sudo hire ibtissame':'Permission granted. Send the offer to ibtissamearrassi2@gmail.com'};
function add(t,c){var p=document.createElement('p');if(c)p.className=c;p.textContent=t;out.appendChild(p);out.scrollTop=out.scrollHeight}
function run(v){v=v.trim().toLowerCase();if(!v)return;add(v,'c');if(v==='clear'){out.innerHTML='';return}add(R.hasOwnProperty(v)?R[v]:'command not found: '+v+'. Type help.')}
add('Welcome. Type a command or tap one below. Try help.');
inp.addEventListener('keydown',function(e){if(e.key==='Enter'){run(inp.value);inp.value=''}});
document.querySelectorAll('.tchips button').forEach(function(b){b.addEventListener('click',function(){run(b.dataset.c)})});
var fb=document.querySelectorAll('.filt button'),pj=document.querySelectorAll('.pj');
fb.forEach(function(b){b.addEventListener('click',function(){fb.forEach(function(x){x.setAttribute('aria-pressed',x===b)});pj.forEach(function(p){p.hidden=b.dataset.f!=='all'&&p.dataset.cat!==b.dataset.f})})});
var tb=document.querySelectorAll('.tabs [role=tab]'),tp=document.querySelectorAll('.tpanel');
function pick(i,f){tb.forEach(function(t,k){var on=k===i;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;tp[k].hidden=!on});if(f)tb[i].focus()}
tb.forEach(function(t,i){t.addEventListener('click',function(){pick(i)});t.addEventListener('keydown',function(e){var n=tb.length,k=e.key==='ArrowRight'?(i+1)%n:e.key==='ArrowLeft'?(i+n-1)%n:e.key==='Home'?0:e.key==='End'?n-1:-1;if(k>=0){e.preventDefault();pick(k,true)}})});
var st=document.querySelector('.stamp');
if(st&&!rm&&'IntersectionObserver' in window){st.classList.add('pre');new IntersectionObserver(function(es,o){es.forEach(function(x){if(x.isIntersecting){st.classList.remove('pre');o.disconnect()}})},{threshold:.6}).observe(st.parentElement)}
var cb=document.getElementById('copy'),cs=document.getElementById('cs');
if(cb){cb.addEventListener('click',function(){var t='ibtissamearrassi2@gmail.com';function ok(){cb.textContent='Copied ✓';cs.textContent='Email address copied';setTimeout(function(){cb.textContent='Copy email';cs.textContent=''},2200)}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,function(){location.href='mailto:'+t})}else{location.href='mailto:'+t}})}
var nr=document.querySelectorAll('.nrow'),sl=document.querySelectorAll('.sdlc li');
function lit(r,on){r.dataset.ph.split(' ').forEach(function(p){sl.forEach(function(s){if(s.dataset.p===p)s.classList.toggle('on',on)})})}
nr.forEach(function(r){r.addEventListener('mouseenter',function(){lit(r,true)});r.addEventListener('mouseleave',function(){lit(r,false)})});
var mb=document.querySelector('.menu'),nl=document.getElementById('nl');
if(mb&&nl){function cl(){nl.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Open menu')}
mb.addEventListener('click',function(){var o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')});
nl.addEventListener('click',function(e){if(e.target.tagName==='A')cl()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')cl()})}
if(!rm&&'IntersectionObserver' in window){
document.documentElement.classList.add('js');
var G=['.hero .pill','.hero h1','.hero p.lead','.hero p.lead+p','.hero .btns','.hero .tech','.hero .pic','.sec-t','.nt-top','.edu','.job','.tabs','.pj','.nrow','.recgrid','.letter','.cta'],hi=0;
G.forEach(function(sel){document.querySelectorAll(sel).forEach(function(el,k){el.classList.add('rv');el.style.setProperty('--i',sel.indexOf('.hero')===0?hi++:k%3)})});
var ro=new IntersectionObserver(function(es,o){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}})},{threshold:.1,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv').forEach(function(el){ro.observe(el)});
}
var lb=document.getElementById('lb');
if(lb&&lb.showModal){document.querySelectorAll('.shot').forEach(function(b){b.addEventListener('click',function(){var im=b.querySelector('img');lb.querySelector('img').src=im.src;lb.querySelector('img').alt=im.alt;lb.showModal()})});
lb.querySelector('.lb-x').addEventListener('click',function(){lb.close()});
lb.addEventListener('click',function(e){if(e.target===lb)lb.close()})}
document.querySelectorAll('.mswitch').forEach(function(g){var sh=g.parentElement.querySelectorAll('.shot'),bs=g.querySelectorAll('button');bs.forEach(function(b,i){b.addEventListener('click',function(){sh.forEach(function(x,k){x.hidden=k!==i});bs.forEach(function(y,k){y.setAttribute('aria-pressed',k===i)})})})});


// Subtle transition when navigating between sections
document.querySelectorAll('#nl a[href^="#"], .hero a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function() {
    var target = document.querySelector(link.getAttribute('href'));

    if (!target || rm) return;

    target.classList.remove('section-transition');

    void target.offsetWidth;

    target.classList.add('section-transition');
  });
});

})();