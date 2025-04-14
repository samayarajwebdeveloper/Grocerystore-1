let currentSlide = 0;
const slides = document.getElementById('slides');

setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}, 3000);