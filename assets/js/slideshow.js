let slideIndex = 1;
let slideChangeInterval;

function moveSlideshow(n, stopAutoPlay = false) {
  if (stopAutoPlay) {
    clearInterval(slideChangeInterval);
  }

  const newIndex = slideIndex + n;
  const slides = document.getElementsByClassName("slide");

  if (newIndex > slides.length) {
    slideIndex = 1;
  } else if (newIndex < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = newIndex;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  moveSlideshow(0);
  slideChangeInterval = setInterval(function () {
    moveSlideshow(1);
  }, 5000);
});

document.addEventListener("keydown", function (e) {
  const key = e.key;

  if (key === "ArrowLeft") {
    moveSlideshow(-1, true);
  } else if (key === "ArrowRight") {
    moveSlideshow(1, true);
  }
});
