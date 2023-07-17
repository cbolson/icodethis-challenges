// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});

const formEmail = document.querySelector("#form-email");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // scale down
  formEmail.style.transform = "scale(0)";

  setTimeout(function () {
    formEmail.classList.remove("flex");
    formEmail.classList.add(
      "bg-[#5845FE]",
      "py-2",
      "px-4",
      "rounded-md",
      "text-center"
    );
    formEmail.innerHTML = "THANK for signing up!";
    formEmail.style.transform = "scale(1)";
  }, 500);
});

const navBtn = document.querySelector("#nav-btn");
const navList = document.querySelector("#nav-list");
let navVisitble = false;
navBtn.addEventListener("click", () => {
  if (navVisitble) {
    navList.style.transform = "translate(0,-400px)";
    navVisitble = false;
    navBtn.style.transform = "rotate(0)";
  } else {
    navList.style.transform = "translate(0)";
    navVisitble = true;
    navBtn.style.transform = "rotate(90deg)";
  }
});
