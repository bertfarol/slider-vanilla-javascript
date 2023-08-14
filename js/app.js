const sliderContainer = document.querySelector(".slider-container");
const sliderContent = document.querySelector(".list-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const displayScrollButton = () => {
  const cssDisplay = window.outerWidth < 1440 ? "flex" : "none";
  prevButton.style.display = cssDisplay;
  nextButton.style.display = cssDisplay;
};

const updateButtonState = () => {
  const sliderScrollLeft = sliderContainer.scrollLeft;
  const maxScroll = sliderContainer.scrollWidth - sliderContainer.offsetWidth;

  const disablePrev = sliderScrollLeft === 0;
  const disableNext = sliderScrollLeft === maxScroll;

  prevButton.setAttribute("btn-disable", disablePrev);
  nextButton.setAttribute("btn-disable", disableNext);
};

const scrollSlider = (direction) => {
  const containerWidth = sliderContainer.clientWidth;
  const contentWidth = sliderContent.offsetWidth + 12;

  const contentScrollValue =
    Math.floor(containerWidth / contentWidth) * contentWidth;

  const scrollPosition =
    direction === "next"
      ? sliderContainer.scrollLeft + contentScrollValue
      : sliderContainer.scrollLeft - contentScrollValue;

  sliderContainer.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
};

//initilize event listener:
window.onresize = () => displayScrollButton();
sliderContainer.onscroll = () => updateButtonState();
prevButton.onclick = () => scrollSlider("prev");
nextButton.onclick = () => scrollSlider("next");

//initialize all function:
displayScrollButton();