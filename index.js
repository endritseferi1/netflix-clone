const buttonRight = document.querySelector(".rightSvg");
const buttonLeft = document.querySelector(".leftSvg");
const carouselWrapper = document.getElementById("carousel");

let isMoving = false;
const delay = 150;

buttonRight.onclick = () => moveCarousel();

buttonLeft.onclick = () => moveCarousel(true);

function moveCarousel(leftMovement = false) {
  if (isMoving) return;
  isMoving = !isMoving;

  setTimeout(() => {
    carouselWrapper.scrollBy({
      left: leftMovement ? -600 : 600,
      behavior: "smooth",
    });
    isMoving = !isMoving;
  }, delay);
}

function updateArrowVisibility() {
  const scrollLeft = carouselWrapper.scrollLeft;
  const maxScrollLeft =
    carouselWrapper.scrollWidth - carouselWrapper.clientWidth;

  // Nëse jemi në fillim → fshi butonin e majtë
  if (scrollLeft <= 0) {
    buttonLeft.style.display = "none";
  } else {
    buttonLeft.style.display = "block";
  }

  // Nëse jemi në fund → fshi butonin e djathtë
  if (scrollLeft >= maxScrollLeft - 1) {
    buttonRight.style.display = "none";
  } else {
    buttonRight.style.display = "block";
  }
}

// Kurdo që scroll-on (edhe me mouse ose buton), kontrollo
carouselWrapper.addEventListener("scroll", updateArrowVisibility);

const hamburgerOne = document.querySelector(".headerOne");
const hamburgerTwo = document.querySelector(".headerTwo");
const hamburgerThree = document.querySelector(".headerThree");
const hamburgerFour = document.querySelector(".headerFour");
const hamburgerFive = document.querySelector(".headerFive");
const hamburgerSix = document.querySelector(".headerSix");
const theXbutton = document.querySelector(".theXbutton");
const firstDiv = document.querySelector(".firstDiv");
const secDiv = document.querySelector(".secDiv");
const thrDiv = document.querySelector(".thrDiv");
const frDiv = document.querySelector(".frDiv");
const fvDiv = document.querySelector(".fvDiv");
const sxDiv = document.querySelector(".sxDiv");

hamburgerOne.addEventListener("click", () => {
  hamburgerOne.classList.toggle("active");
  firstDiv.classList.toggle("active");
});
hamburgerTwo.addEventListener("click", () => {
  hamburgerTwo.classList.toggle("active");
  secDiv.classList.toggle("active");
});
hamburgerThree.addEventListener("click", () => {
  hamburgerThree.classList.toggle("active");
  thrDiv.classList.toggle("active");
});
hamburgerFour.addEventListener("click", () => {
  hamburgerFour.classList.toggle("active");
  frDiv.classList.toggle("active");
});
hamburgerFive.addEventListener("click", () => {
  hamburgerFive.classList.toggle("active");
  fvDiv.classList.toggle("active");
});
hamburgerSix.addEventListener("click", () => {
  hamburgerSix.classList.toggle("active");
  sxDiv.classList.toggle("active");
});
