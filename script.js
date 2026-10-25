const menu=document.querySelector('.menu');const nav=document.querySelector('#navlinks');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();

document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}else{els.forEach(e=>e.classList.add('in'))}

document.querySelectorAll('[data-n]').forEach(el=>{const t=+el.dataset.n;const go=()=>{let i=0;const s=setInterval(()=>{el.textContent=++i;if(i>=t)clearInterval(s)},300)};if('IntersectionObserver' in window){const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){go();o.disconnect()}});o.observe(el)}else el.textContent=t});
const lb=document.querySelector('#lang');const tx=[...document.querySelectorAll('[data-bg]')];tx.forEach(e=>e.dataset.en=e.textContent);let bg=false;
lb.addEventListener('click',()=>{bg=!bg;tx.forEach(e=>e.textContent=bg?e.dataset.bg:e.dataset.en);lb.textContent=bg?'EN':'BG';document.documentElement.lang=bg?'bg':'en'});
