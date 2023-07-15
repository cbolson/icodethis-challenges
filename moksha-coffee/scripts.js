const slides = [
  "https://picsum.photos/id/30/300/200",
  "https://picsum.photos/id/113/300/200",
  "https://picsum.photos/id/431/300/200",
  "https://picsum.photos/id/1060/300/200",
  "https://picsum.photos/id/495/300/200",
  "https://picsum.photos/id/513/300/200",
  "https://picsum.photos/id/635/300/200",
  "https://picsum.photos/id/1060/300/200",
  "https://picsum.photos/id/113/300/200",
  "https://picsum.photos/id/513/300/200",
  "https://picsum.photos/id/431/300/200",
  "https://picsum.photos/id/113/300/200",
  "https://picsum.photos/id/495/300/200",
  "https://picsum.photos/id/1060/300/200",
];
const IMG_W = "192px";

const slideshow = document.querySelector("#slideshow");
const slideNav = document.querySelectorAll("[slide-nav]");
slides.forEach((slide) => {
  const item = document.createElement("img");
  item.src = slide;
  slideshow.append(item);
});
let currentImg = 0;
slideNav.forEach((btn) => {
  const direction = btn.getAttribute("slide-nav");
  btn.addEventListener("click", () => {
    slide(direction);
  });
});

function slide(direction) {
  let left;
  const { scrollLeft, clientWidth } = slideshow;
  switch (direction) {
    case "prev":
      left = scrollLeft - clientWidth;
      break;
    case "next":
    default:
      left = scrollLeft + clientWidth;
      break;
  }
  slideshow.scroll({ left, behavior: "smooth" });
}

// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});
