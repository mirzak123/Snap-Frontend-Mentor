const navItems = document.querySelectorAll('.nav__list--primary .nav__item');
const hamburger = document.querySelector('.hamburger');


function toggleActive () {
    this.classList.toggle('active');
}

function toggleNav () {
    hamburger.classList.toggle('active');
    document.body.classList.toggle('nav-open');
}

function closeMenus () {
    navItems.forEach(navItem => navItem.classList.remove('active'));
    document.body.classList.remove('nav-open');
}

hamburger.addEventListener('click', toggleNav);
navItems.forEach(navItem => navItem.addEventListener('click', toggleActive));
window.addEventListener('resize', closeMenus);