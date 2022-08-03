// Hire
let hireForm = document.querySelector('.login-container');
let hireBtn = document.querySelector('.hire');
let hireClose = document.querySelector('#form-close');
hireBtn.addEventListener('click', () =>{
    hireForm.classList.add('active1');
});
hireClose.addEventListener('click', () =>{
    hireForm.classList.remove('active1');
});




// Stickybar
const header = document.querySelector('header');
window.addEventListener ('scroll', function() {
    header.classList.toggle ('sticky', window.scrollY > 0);
})
// Nav Toggle
let menu = document.querySelector('.fa-bars');
let navList = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navList.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navList.classList.remove('active');
}


