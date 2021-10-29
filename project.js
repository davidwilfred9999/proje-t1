
window.addEventListener('scroll', (e)=>{
const nav = document.getElementById('nav');
    if(window.pageYOffset>200) {
        nav.classList.add('current');
    }else {
        nav.classList.remove('current');
    }
});
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const ul = document.querySelector('.ul')

open_btn.addEventListener('click', () => {
    ul.classList.add('visible')
})
close_btn.addEventListener('click', () => {
    ul.classList.remove('visible')
})






