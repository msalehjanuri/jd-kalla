// SCRIPT FOR DETAIL PAGE
var showPageButton = document.getElementById('showPageButton');
// var showPageButton = document.querySelectorAll(".product")
var hiddenPage = document.getElementById('hiddenPage');
var closeButton = document.getElementById('closeButton');


showPageButton.addEventListener('click', function () {
      hiddenPage.classList.add('active');
});

closeButton.addEventListener('click', function () {
      hiddenPage.classList.remove('active')
});

// Vertikal/hamburger menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const button = document.querySelector('.button-nav');

menuToggle.addEventListener('click', function () {
      nav.classList.toggle('slide');
      button.classList.toggle('slide');
});