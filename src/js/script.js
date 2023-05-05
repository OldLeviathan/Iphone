const btn = document.querySelector('.header-menu-btn');
const nav = document.querySelector('.header-nav');

btn.addEventListener('click', ()=>{
   nav.classList.toggle('menu-open');
});