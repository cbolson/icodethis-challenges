// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sorry, not done any form submission code yet...");
});

// stars
const stars = document.querySelectorAll("[data-stars]");

stars.forEach((star) => {
  const rating = star.value;

  star.addEventListener("change", (e) => {
    stars.forEach((s, i) => {
      if (i < rating)
        stars[i].nextElementSibling.classList.add("material-fill-1");
      else s.nextElementSibling.classList.remove("material-fill-1");
    });
  });
});

// close it if you can!
const popup = document.querySelector("#popup");
document.querySelector("#btn-close").addEventListener("click", () => {
  popup.style.transform = "scale(0)";
  setTimeout(function () {
    popup.style.transform = "scale(1)";
  }, 1000);
});
