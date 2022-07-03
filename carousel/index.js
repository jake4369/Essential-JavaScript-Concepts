const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("carousel-btn-prev");
const nextBtn = document.getElementById("carousel-btn-next");

let slidePosition = 0;
const totalSlides = slides.length;

// showSlides = () => {
//   slides.forEach((slide) => (slide.style.display = "none"));
//   slidePosition++;

//   if (slidePosition > slides.length) {
//     slidePosition = 1;
//   }

//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slidePosition - 1].style.display = "block";
//   dots[slidePosition - 1].className += " active";
//   setTimeout(showSlides, 2000);
// };

// AUTOMIC SLIDE
switchClass = () => {
  slides.forEach((slide) => {
    slide.classList.add("carousel-item-hidden");
    slide.classList.remove("carousel-item-visible");
  });

  dots.forEach((dot) => dot.classList.remove("active"));
};

// MANUAL SLIDE
// hideAllSlides = () => {
//   slides.forEach((slide) => {
//     slide.classList.remove("carousel-item-visible");
//     slide.classList.add("carousel-item-hidden");
//   });
// };

moveToPrevSlide = () => {
  //   hideAllSlides();
  switchClass();
  slidePosition === 0 ? (slidePosition = totalSlides - 1) : slidePosition--;
  slides[slidePosition].classList.add("carousel-item-visible");
  dots[slidePosition].classList.add("active");
};

moveTonextSlide = () => {
  //   hideAllSlides();
  switchClass();
  slidePosition === totalSlides - 1 ? (slidePosition = 0) : slidePosition++;
  slides[slidePosition].classList.add("carousel-item-visible");
  dots[slidePosition].classList.add("active");
};

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveTonextSlide);

setInterval(() => moveTonextSlide(), 5000);
