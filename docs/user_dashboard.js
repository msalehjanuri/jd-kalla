// SCRIPT FOR SLIDER
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
      showSlides(slideIndex += n);
}

function currentSlide(n) {
      showSlides(slideIndex = n);
}

function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("slide");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
}

// SCRIPT POP-UP REGISTER FORM
// Get the modal
var modal = document.getElementById('id01');

// Jika user menekan apapun di luar form akan otomatis close
window.onclick = function (event) {
      if (event.target == modal) {
            modal.style.display = "none"
      }
}

// SCRIPT FOR NAVBAR
// Vertikal/hamburger menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const button = document.querySelector('.button-nav');

menuToggle.addEventListener('click', function () {
      nav.classList.toggle('slide');
      button.classList.toggle('slide');
});