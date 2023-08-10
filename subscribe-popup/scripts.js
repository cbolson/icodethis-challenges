// tailwind config
tailwind.config = {
  darkMode: "class",
};

let theme = "";
// load initial theme if saved to local storage
if (localStorage.getItem("theme")) {
  theme = localStorage.getItem("theme");
  document.documentElement.classList.add(`${theme}`);
}
// btn theme swap
document.querySelector("#btn-mode").addEventListener("click", () => {
  if (!theme) {
    theme = "dark";
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", theme);
  } else {
    theme = "";
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }
});

// close it if you can!
const popup = document.querySelector("#popup");
document.querySelector("#btn-close").addEventListener("click", () => {
  popup.style.transform = "scale(1000%)";
  popup.style.opacity = 0;

  // set to 0
  setTimeout(function () {
    popup.style.transform = "scale(0)";
  }, 1000);

  setTimeout(function () {
    popup.style.transform = "scale(1)";
    popup.style.opacity = 1;
  }, 3000);
});

const msg = document.querySelector("#msg");
const btnSubmit = document.querySelector("#btn-submit");
const fieldEmail = document.querySelector("#email");
const fieldTGerms = document.querySelector("#terms");
const form = document.querySelector("form");

fieldTGerms.addEventListener("change", (e) => {
  btnSubmit.disabled = e.target.checked ? false : true;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.style.transform = "translate(0)";

  setTimeout(() => {
    // reset form
    form.reset();

    // slide up
    msg.style.transform = "translate(0, -120%)";
    setTimeout(() => (msg.style.opacity = 0), 200);

    // reset to bottom for next submit
    setTimeout(() => {
      msg.style.transform = "translate(0, 120%)";
      setTimeout(() => (msg.style.opacity = 1), 300);
    }, 600);
  }, 3000);
});

setTimeout(() => {
  //document.querySelector("#wrapper").classList.add("after:animate-pulse");
}, 100);
