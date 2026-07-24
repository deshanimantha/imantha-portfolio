const menuToggle=document.getElementById('menuToggle');const navLinks=document.getElementById('navLinks');menuToggle.addEventListener('click',()=>{navLinks.classList.toggle('open');menuToggle.textContent=navLinks.classList.contains('open')?'✕':'☰'});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.textContent='☰'}));
const roles=['Cyber Security Undergraduate','Web Security Learner','Python & Linux Explorer','Future Security Professional'];let role=0,index=0,deleting=false;const typing=document.getElementById('typing');function type(){const text=roles[role];typing.textContent=text.slice(0,index);if(!deleting){index++;if(index>text.length){deleting=true;setTimeout(type,1100);return}}else{index--;if(index<0){deleting=false;role=(role+1)%roles.length;index=0}}setTimeout(type,deleting?35:70)}type();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();const topBtn=document.getElementById('topBtn');window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>500));topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));


// Active navigation section
const sections=[...document.querySelectorAll('main section[id]')];
const navAnchors=[...document.querySelectorAll('.nav-links a')];
const setActiveNav=()=>{
  let current='home';
  sections.forEach(section=>{
    if(window.scrollY>=section.offsetTop-180) current=section.id;
  });
  navAnchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${current}`));
};
window.addEventListener('scroll',setActiveNav,{passive:true});
setActiveNav();

// Subtle cursor glow
const cursorGlow=document.getElementById('cursorGlow');
if(cursorGlow){
  window.addEventListener('pointermove',e=>{
    cursorGlow.style.left=`${e.clientX}px`;
    cursorGlow.style.top=`${e.clientY}px`;
  },{passive:true});
}

// Gentle 3D tilt on certificate cards
document.querySelectorAll('.tilt-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*7}deg) translateY(-4px)`;
  });
  card.addEventListener('pointerleave',()=>{
    card.style.transform='';
  });
});
