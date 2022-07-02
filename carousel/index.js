const slides = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("carousel-btn-prev");
const nextBtn = document.getElementById("carousel-btn-next");

let slidePosition = 0;
const totalSlides = slides.length;

hideAllSlides = () => {
  slides.forEach((slide) => {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  });
};

moveToPrevSlide = () => {
  hideAllSlides();
  slidePosition === 0 ? (slidePosition = totalSlides - 1) : slidePosition--;
  slides[slidePosition].classList.add("carousel-item-visible");
};

moveTonextSlide = () => {
  hideAllSlides();
  slidePosition === totalSlides - 1 ? (slidePosition = 0) : slidePosition++;
  slides[slidePosition].classList.add("carousel-item-visible");
};

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveTonextSlide);
