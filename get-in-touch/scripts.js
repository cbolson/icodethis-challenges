const button = document.querySelector("#mode");
button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

const popup = document.querySelector("#popup");

// close it if you can!
document.querySelector("#btn-close").addEventListener("click", () => {
  popup.style.transform = "scale(0)";
  setTimeout(function () {
    popup.style.transform = "scale(1)";
  }, 1000);
});

tailwind.config = {
  darkMode: "class",
};
