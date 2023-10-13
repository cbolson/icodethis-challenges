const msg = document.querySelector("#msg");
const form = document.querySelector("form");

// form submit
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

// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});
