// Add JavaScript code here
const btn = document.querySelector("#btn-testimonials");
const testimonials = document.querySelectorAll(".testimonials");
const results = document.querySelector("#results");
const resultsInner = results.querySelector("#results__inner");
let testimonalDisplay = false;

const offsetDelay = 600;
let offsetPosition = 40;
let delay = 0;

function resetDefaults() {
  offsetPosition = 50;
  delay = 0;
  testimonalDisplay = false;
  testimonials.forEach((item) => {
    item.classList.remove("show");
  });
  resultsInner.classList.remove("blur");
  btn.disabled = false;
}
//github.com/cbolson/icodethis-challenges.git
https: btn.addEventListener("click", () => {
  btn.disabled = true;
  testimonials.forEach((item, e) => {
    event.stopPropagation();
    item.setAttribute("style", `--offset: ${offsetPosition}px`);
    setTimeout(() => {
      item.classList.add("show");
    }, delay);
    delay = delay + offsetDelay;
    offsetPosition = offsetPosition + item.offsetHeight + 20;
  });
  resultsInner.classList.add("blur");
  testimonalDisplay = true;
});

results.addEventListener("click", () => {
  if (!testimonalDisplay) return;
  resetDefaults();
});
