// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});

let socialVisible = false;
let dataVisible = false;

const panelData = document.querySelector("#panel-data");
const panelSocial = document.querySelector("#panel-social");

document.querySelector("#btn-data").addEventListener("click", (e) => {
  if (dataVisible) {
    panelData.style.transform = "translate(0)";
    dataVisible = false;
    e.target.innerText = "density_large";
  } else {
    panelData.style.transform = "translate(0,-70px)";
    dataVisible = true;
    e.target.innerText = "close";
  }
});

document.querySelector("#btn-social").addEventListener("click", () => {
  if (socialVisible) {
    panelSocial.style.transform = "translate(0)";
    socialVisible = false;
  } else {
    panelSocial.style.transform = "translate(0,40px)";
    socialVisible = true;
  }
});
