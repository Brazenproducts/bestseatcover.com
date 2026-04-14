document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav toggle
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',nav.classList.contains('open'));
    });
  }
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      const target=document.querySelector(this.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
  // Active nav highlighting
  const current=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.main-nav a').forEach(function(a){
    if(a.getAttribute('href')===current)a.classList.add('active');
  });
});
