const toast = document.querySelector("#toast");

document.querySelector("#btn-close-toast").addEventListener("click", () => {
  toast.style.transform = "scale(0)";
});
document.querySelector("#btn-toast").addEventListener("click", () => {
  toast.style.transform = "scale(1)";

  // bring it back for the demo
  setTimeout(function () {
    toast.style.transform = "scale(0)";
  }, 3000);
});

// profile
const profile = document.querySelector("#profile");
document.querySelector("#bt-close-profile").addEventListener("click", () => {
  profile.style.transform = "scale(0)";

  // bring it back for the demo
  setTimeout(function () {
    profile.style.transform = "scale(1)";
  }, 1500);
});
