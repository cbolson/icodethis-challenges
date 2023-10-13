const msg = document.querySelector("#msg");
const form = document.querySelector("form");

// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});

// close it if you can!
const popup = document.querySelector("main");
document.querySelector("#btn-close").addEventListener("click", () => {
  popup.style.transform = "scale(0,2)";

  setTimeout(function () {
    popup.style.transform = "scale(1)";
  }, 3000);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.style.transform = "translate(0)";

  setTimeout(() => {
    msg.querySelector("p").classList.remove("opacity-0");
  }, 300);
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
      msg.querySelector("p").classList.add("opacity-0");
    }, 600);
  }, 3000);
});
