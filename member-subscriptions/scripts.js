const slider = document.querySelector("#slider");
const WUDTH =
  slider.querySelector(".card").clientWidth +
  16; /* width of each card + flex gap - this assumes that all cards have equal width */
const sliderButtons = document.querySelectorAll("[data-slide]");
sliderButtons.forEach((btn) => {
  btn.addEventListener("click", () =>
    btn.getAttribute("data-slide") === "prev"
      ? (slider.scrollLeft -= WUDTH)
      : (slider.scrollLeft += WUDTH)
  );
});
