// const testimony = document.getElementsByClassName('testimony')
var slideIndex = 0
showSlides()
clickSlide()


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimony");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].style.backgroundColor = '#adadad'
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.backgroundColor = '#777777'
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
function clickSlide() {
  var i;
  var slides = document.getElementsByClassName("testimony");
  var dots = document.getElementsByClassName("dot");
}