const listCat = document.querySelector("#list-cat");
const inputCat = document.querySelector("#cat-input");
const inputCatDesc = inputCat.querySelector("p");
const inputCatArrow = inputCat.querySelector("span");
let catListVisible = false;

const DELAY = 100; // time for each option so slide in
function renderList() {
  listCat.style.maxHeight = "300px";
  let i = DELAY;
  listCat.querySelectorAll("label").forEach((p) => {
    setTimeout(() => {
      p.style.transform = "translate(0)";
    }, i);
    i += DELAY;
  });
}

inputCat.addEventListener("click", () => {
  inputCat.classList.toggle(
    "border-slate-300"
  ); /* I am taking advantage of Tawilind css order by having 2 bg colors on this element and toggleing off the first one */
  inputCatArrow.classList.add("rotate-180");
  if (catListVisible) {
    closeCatList();
  } else {
    renderList();
    catListVisible = true;
  }
});
// close list on click outside - this also includes selection an option
document.addEventListener("click", function handleClickOutsideBox(event) {
  if (!inputCat.contains(event.target)) {
    closeCatList();
  }
});

function closeCatList() {
  listCat.style.maxHeight = "0";
  inputCat.classList.add("border-slate-300");
  inputCatArrow.classList.remove("rotate-180");
  catListVisible = false;
}

// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});
