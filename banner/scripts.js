// close it if you can!
const popup = document.querySelector("#popup");
document.querySelector("#btn-close").addEventListener("click", () => {
  popup.style.transform = "scale(0)";
  setTimeout(function () {
    popup.style.transform = "scale(1)";
  }, 1000);
});
