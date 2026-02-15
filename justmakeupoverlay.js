

function closeBox() {
  document.getElementById("JMoverlay").style.display = "none";
}

function openBox() {
  document.getElementById("JMoverlay").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  document.getElementById("JMoverlay").style.display = "block"; 
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshowimg");
  var thumbnail = document.getElementsByClassName("slidethumbnail");
  var overlaycaption = document.getElementById("lightboxoverlaycaption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnail.length; i++) {
      thumbnail[i].className = thumbnail[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnail[slideIndex-1].className += " active";
  overlaycaption.innerHTML = thumbnail[slideIndex-1].alt;
}
