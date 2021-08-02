var slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("mySlides-auto");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexAuto++;
  
  if (slideIndexAuto > slides.length) {slideIndexAuto = 1}    

  slides[slideIndexAuto-1].style.display = "block";  
  setTimeout(showSlidesAuto, 10000);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
                localStorage.fechaModal = modalID;
            }
        });
    }
}

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('modal-linha').scrollLeft -= (delta * 40); // Multiplied by 40
    e.preventDefault();
}