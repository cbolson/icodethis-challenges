// tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Miriam Libre", "sans-serif"],
      },
    },
  },
};

// selectors
const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const textPlaceCircle = document.querySelector("#svg-path");
const textPlacePath = textPlaceCircle.querySelector("#text-place");

//console.log(textPlace);
// settings
let x = 0;
let counter = sliderItems.length;
let AUTO_TIMER;
const DEGRESS = 360 / sliderItems.length;
const DELAY = 3000;
let START_DEG = -90;

// set up inistal image position
// NOTE - the degree is calculated based on the number of images
sliderItems.forEach((i, idx) => {
  const deg = idx * DEGRESS;
  i.style.transform = `rotateY(${deg}deg) translateZ(100px)`;
});

// update gallery (auto o via button clicks)
function updateGallery() {
  // rotate and set perspective
  slider.style.transform = `perspective(200px) rotateY(${x}deg)`;

  // timeout to rotate (callback)
  AUTO_TIMER = setTimeout(() => {
    x = x - DEGRESS;
    counter++;
    updateGallery();
  }, DELAY);

  // set the current image
  setCurrentImg(counter);
}

// set "current" image
function setCurrentImg() {
  // ensure the counter doesn't go beyound the limits
  if (counter === sliderItems.length) counter = 0;
  if (counter < 0) counter = sliderItems.length;

  //textPlaceCircle.classList.add("remove-45")
  textPlaceCircle.style.opacity = "0";
  textPlaceCircle.style.transform = "rotate(-45deg)";

  // add opacity to all sliderItems
  sliderItems.forEach((item, idx) => {
    if (idx === counter) {
      item.classList.remove("opacity-25");
      // add text
      textPlacePath.innerHTML = item.dataset.name;
      setTimeout(() => {
        textPlaceCircle.style.opacity = "100";
        textPlaceCircle.style.transform = "rotate(45deg)";
      }, 600);
    } else {
      item.classList.add("opacity-25");
    }
  });
}

// initate galler slider
updateGallery();

// button - back
btnPrev.addEventListener("click", () => {
  x = x + DEGRESS;
  counter--;
  if (counter < 0) counter = sliderItems.length - 1;
  clearTimeout(AUTO_TIMER);
  updateGallery();
});
// button - next
btnNext.addEventListener("click", () => {
  x = x - DEGRESS;
  counter++;

  if (counter === sliderItems.length) counter = 0;
  clearTimeout(AUTO_TIMER);
  updateGallery();
});
