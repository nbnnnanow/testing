let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  slides2[slideIndex2-1].style.display = "block";  
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}