// Vertikal/hamburger menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const button = document.querySelector('.button-nav');

menuToggle.addEventListener('click', function () {
      nav.classList.toggle('slide');
      button.classList.toggle('slide');
});