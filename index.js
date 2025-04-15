

const buttonRight = document.querySelector(".rightSvg");
const buttonLeft = document.querySelector(".leftSvg");
const carouselWrapper = document.getElementById("carousel");

buttonRight.onclick = function () {
  carouselWrapper.scrollBy ({
    left: 300,
    behavior: "smooth",
  });
};
buttonLeft.onclick = function () {
  carouselWrapper.scrollBy({
    left: -300,
    behavior: "smooth",
  });
};



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



const hamburger  = document.querySelector(".header");
const theXbutton = document.getElementById(".theXbutton");



  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
  });