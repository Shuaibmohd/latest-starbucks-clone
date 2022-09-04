const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');
const coffeeBtn = document.querySelector('#coffee-btn');
const coffeeMenu = document.querySelector('.coffee-menu');
const aboutBtn = document.querySelector('#about-btn');
const mainMenuBtn = document.querySelector('#main-menu-btn');
const aboutMenu = document.querySelector('.about-menu');
const mainMenu = document.querySelector('.main-menu');


function navToggle() {
    btn.classList.toggle('open');
    mobileMenu.classList.toggle('show');
}

btn.addEventListener('click', navToggle);


coffeeBtn.addEventListener('mouseenter', () => {
    coffeeMenu.classList.add('show');
});
coffeeBtn.addEventListener('mouseleave', () => {
    coffeeMenu.classList.remove('show');
})
aboutBtn.addEventListener('mouseenter', () => {
    aboutMenu.classList.add('show');
});
aboutBtn.addEventListener('mouseleave', () => {
    aboutMenu.classList.remove('show');
})
mainMenuBtn.addEventListener('mouseenter', () => {
    mainMenu.classList.add('show');
});
mainMenuBtn.addEventListener('mouseleave', () => {
    mainMenu.classList.remove('show');
})