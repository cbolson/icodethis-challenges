// tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};

// Marcin Małecki preview hack
// NOTE - This JS is not relevant to the submission, it is just to ensure that the preview thumnail looks ok.
if (navigator.userAgent.includes("Headless")) {
  // remove intro amimations
  const attributesToRemove = [
    "slide-in-left",
    "slide-in-right",
    "slide-in-bottom",
    "slide-in-top",
    "scale-up",
    "scale-from-top",
    "scale-from-center",
  ];
  attributesToRemove.forEach((attribute) => {
    document.querySelectorAll(`[${attribute}]`).forEach((el) => {
      if (el.hasAttribute(attribute)) {
        el.removeAttribute(attribute);
      }
    });
  });
}

const closeBtn = document.querySelector("#btn-close");
const wrapperEl = document.querySelector("#wrapper");
const titleEl = document.querySelector("#title");
const subtitleEl = document.querySelector("#subtitle");
const button1El = document.querySelector("#button-1");
const button2El = document.querySelector("#button-2");
const button3El = document.querySelector("#button-3");
const themeToggleEl = document.querySelector("#theme-toggle");

closeBtn.addEventListener("click", () => {
  button1El.classList.add("-translate-x-96");
  button2El.classList.add("translate-y-96");
  button3El.classList.add("translate-x-96");
  setTimeout(() => {
    titleEl.classList.add("scale-0");
    subtitleEl.classList.add("scale-0");
  }, 500);
  setTimeout(() => {
    themeToggleEl.classList.add("-translate-x-32");
    closeBtn.classList.add("translate-x-32");
  }, 1000);

  setTimeout(() => {
    wrapperEl.classList.add("scale-0");
  }, 1500);

  setTimeout(() => {
    wrapperEl.classList.remove("scale-0");
    setTimeout(() => {
      themeToggleEl.classList.remove("-translate-x-32");
      closeBtn.classList.remove("translate-x-32");
    }, 500);

    setTimeout(() => {
      titleEl.classList.remove("scale-0");
      subtitleEl.classList.remove("scale-0");
    }, 1000);

    setTimeout(() => {
      button1El.classList.remove("-translate-x-96");
      button2El.classList.remove("translate-y-96");
      button3El.classList.remove("translate-x-96");
    }, 1500);
  }, 3500);
});
