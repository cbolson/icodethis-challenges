// close it if you can!
const buttonsClose = document.querySelectorAll("[btn-close]");

buttonsClose.forEach((btn) => {
  const parent = btn.parentElement;
  btn.addEventListener("click", () => {
    parent.style.transform = "scale(0)";
    setTimeout(function () {
      parent.style.transform = "scale(1)";
    }, 1000);
  });
});
