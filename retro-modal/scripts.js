tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
      colors: {
        "primary-200": "#CBD5E1",
        "primary-400": "#2C62AB",
      },
    },
  },
};
const body = document.body;
const popup = document.querySelector("#alert");
const icon = popup.querySelector("#icon");
const btnConfirm = popup.querySelector("#btn-confirm");
const btnClose = popup.querySelector("#btn-cancel");

const btnPage1 = document.querySelector("#btn-page-1");
const btnPage2 = document.querySelector("#btn-page-2");
const imgPage1 =
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";
const imgPage2 =
  "https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

// define start page
let currentPage = 1;

// buttons page swap
btnPage1.addEventListener("click", () => revealPopUP());
btnPage2.addEventListener("click", () => revealPopUP());

// button - confirm page change
btnConfirm.addEventListener("click", () => {
  // define new page number
  currentPage = currentPage === 1 ? 2 : 1;
  // hide popo
  hidePop();
  // reveal new page
  revealPage();
});

// reveal new page ()
function revealPage() {
  // fade out background and page contents (buttons in this demo)
  body.classList.add("before:opacity-0");
  btnPage1.classList.add("scale-0");
  btnPage2.classList.add("scale-0");

  // swap bg images
  setTimeout(() => {
    if (currentPage === 1) {
      body.classList.add(`before:bg-[url('${imgPage1}')]`);
      body.classList.remove(`before:bg-[url('${imgPage2}')]`);
    } else {
      body.classList.remove(`before:bg-[url('${imgPage1}')]`);
      body.classList.add(`before:bg-[url('${imgPage2}')]`);
    }
  }, 500);

  setTimeout(() => {
    if (currentPage === 1) btnPage1.classList.remove("scale-0");
    else btnPage2.classList.remove("scale-0");
  }, 1000);
  setTimeout(() => body.classList.remove("before:opacity-0"), 700);
}

// close alert (no page change)
document.querySelectorAll("[btn-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    hidePop();
    // setTimeout(() => revealPopUP(), 2000);
  });
});

// hide alert
function hidePop() {
  popup.classList.add("scale-150");
  setTimeout(() => {
    popup.classList.remove("scale-150");
    popup.classList.add("scale-0");
    body.classList.remove("before:blur-xl");
  }, 200);
}
// revela alert (animations only on first iteration)
function revealPopUP() {
  popup.classList.remove("scale-0");
  //newPage.classList.add("-z-10");
  body.classList.add("before:blur-xl");

  // inistal setup
  setTimeout(() => {
    icon.classList.remove("-translate-y-full");
    icon.classList.remove("before:-translate-y-full");
  }, 500);

  setTimeout(() => {
    btnConfirm.classList.remove("translate-x-[-300px]");
    btnClose.classList.remove("translate-x-[300px]");
  }, 1000);
}
