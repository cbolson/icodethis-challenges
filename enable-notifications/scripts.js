// Marcin Małecki preview hack
// NOTE - This JS is not relevant to the submission, it is just to ensure that the preview thumnail looks ok.
if (navigator.userAgent.includes("Headless")) {
  // remove intro amimations
  const attributesToRemove = [
    "slide-in-left",
    "slide-in-right",
    "slide-down",
    "slide-up",
    "scale-up",
    "scale-from-top",
  ];
  attributesToRemove.forEach((attribute) => {
    document.querySelectorAll(`[${attribute}]`).forEach((el) => {
      if (el.hasAttribute(attribute)) {
        el.removeAttribute(attribute);
      }
    });
  });
}

const closeBtns = document.querySelectorAll("[btn-close]");

closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const wrapper = e.target.closest("article");

    // set random transform origin
    wrapper.style.transformOrigin = getRandomTransformOrigin();
    // scale down
    wrapper.classList.add("scale-0");

    // change random transform origin
    setTimeout(
      () => (wrapper.style.transformOrigin = getRandomTransformOrigin()),
      800
    );
    // rescale
    setTimeout(() => wrapper.classList.remove("scale-0"), 2000);
  });
});

// get random transform origin posiion
function getRandomTransformOrigin() {
  const transformOrigins = [
    "top left",
    "top right",
    "bottom left",
    "bottom right",
    "center top",
    "center bottom",
    "left center",
    "right center",
    "center",
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * transformOrigins.length);

  // Return the randomly selected transform origin
  return transformOrigins[randomIndex];
}

btnInfo.addEventListener("click", () => {
  panelInfo.classList.toggle("-translate-y-full");
  setTimeout(() => panelInfo.classList.remove("-translate-y-full"), 6000);
});
