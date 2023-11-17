const hamburger = document.querySelector('#hamburger');
const sideBar = document.querySelector('#sidebar');
const close = document.querySelector('.close-btn');

hamburger.addEventListener('click', ()=> {
    sideBar.style.left = '0px'
})

close.addEventListener('click', ()=>{
    sideBar.style.left = '-250px'
})