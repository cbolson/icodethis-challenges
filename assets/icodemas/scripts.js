// tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "serif"],
      },
      colors: {
        teal: "#18617E",
      },
    },
  },
};

//************* COUNTDOWN  ***************** //
const elDays = document.querySelector("#days");
const elDaysSpan = elDays.querySelectorAll("span");
const elHours = document.querySelector("#hours");
const elHoursSpan = elHours.querySelectorAll("span");
const elMinutes = document.querySelector("#minutes");
const elMinutesSpan = elMinutes.querySelectorAll("span");
const elSeconds = document.querySelector("#seconds");
const elSecondsSpan = elSeconds.querySelectorAll("span");
//const elDate = document.querySelector("#date-today");

// get next specific date (always in the furture so once current year date has passed, it will calculate for next year)
//let today = new Date();
//const expirationDate = new Date("Dec 12, 2023 00:00:00").getTime();
const expirationDate = new Date("2023-12-25 00:00");

// add date to dom
//elDate.innerText = formatDate(expirationDate);

const SPEED = 150;

let currentDays = [];
let currentHours = [];
let currentMins = [];
let currentSecs = [];

// start coundown
const expirationDateInterval = setInterval(() => {
  const { days, hours, minutes, seconds } = getCurrentDate();

  // update days
  let d = padTo2(days);
  if (d[0] != currentDays[0]) changeNum(elDaysSpan[0], d[0], 500);
  if (d[1] != currentDays[1]) changeNum(elDaysSpan[1], d[1], 450);
  currentDays = [d[0], d[1]];

  // update hours
  let h = padTo2(hours);
  if (h[0] != currentHours[0]) changeNum(elHoursSpan[0], h[0], 400);
  if (h[1] != currentHours[1]) changeNum(elHoursSpan[1], h[1], 350);
  currentHours = [h[0], h[1]];

  // update mins
  let m = padTo2(minutes);
  if (m[0] != currentMins[0]) changeNum(elMinutesSpan[0], m[0], 300);
  if (m[1] != currentMins[1]) changeNum(elMinutesSpan[1], m[1], 250);
  currentMins = [m[0], m[1]];

  // update seconds
  let s = padTo2(seconds);
  if (s[0] != currentSecs[0]) changeNum(elSecondsSpan[0], s[0], 200);
  if (s[1] != currentSecs[1]) changeNum(elSecondsSpan[1], s[1], 150);
  currentSecs = [s[0], s[1]];
}, 1000);

function initalLoad() {
  const { days, hours, minutes, seconds } = getCurrentDate();

  // update days
  let d = padTo2(days);
  currentDays = [d[0], d[1]];
  elDaysSpan[0].innerText = currentDays[0];
  elDaysSpan[1].innerText = currentDays[1];

  // update hours
  let h = padTo2(hours);
  currentHours = [h[0], h[1]];
  elHoursSpan[0].innerText = currentHours[0];
  elHoursSpan[1].innerText = currentHours[1];

  // update mins
  let m = padTo2(minutes);
  currentMins = [m[0], m[1]];
  elMinutesSpan[0].innerText = currentMins[0];
  elMinutesSpan[1].innerText = currentMins[1];

  // update seconds
  let s = padTo2(seconds);
  currentSecs = [s[0], s[1]];
  elSecondsSpan[0].innerText = currentSecs[0];
  elSecondsSpan[1].innerText = currentSecs[1];
}

initalLoad();

// get curreent date - return object with "days", "hours", "minunts", "seconds"
function getCurrentDate() {
  const currentDate = new Date().getTime();
  const totalTimeLeft = expirationDate - currentDate;
  const obj = {
    days: Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (totalTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((totalTimeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((totalTimeLeft % (1000 * 60)) / 1000),
  };
  return obj;
}

// hide element, change content then reveal after delay
function changeNum(el, newVal, timing) {
  // note - if we want stagggered aniamtions we can pass the "timing" with the function call
  // alternatively we can define a set speed for all the numbers
  // timing = SPEED

  // remove current number with animation
  el.classList.add("scale-0");

  // empty element and move back to top (if using translate)
  setTimeout(() => {
    el.innerText = "";
    el.classList.remove("scale-0");
    el.classList.add("-translate-y-24");
  }, timing);

  // set new value and return to view
  setTimeout(() => {
    el.innerText = newVal;
    el.classList.remove("-translate-y-24");
  }, timing * 2);
}

function padTo2(num) {
  return num.toString().padStart(2, "0");
}

/*****************  AUDIO *********** */

//
/*
Music by <a href="https://pixabay.com/users/grand_project-19033897/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=172985">Grand_Project</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=172985">Pixabay</a>

Music by <a href="https://pixabay.com/users/grand_project-19033897/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=174155">Grand_Project</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=174155">Pixabay</a>

Music by <a href="https://pixabay.com/users/grand_project-19033897/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=177544">Grand_Project</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=177544">Pixabay</a>
*/

const TRACKS = [
  {
    id: 1,
    title: "Jingle Bells",
    artist: "Grand Projec",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/cover-jingle-bells.jpg",
    audio:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/jingle-bells.mp3",
    url: "ttps://pixabay.com/users/grand_project-19033897/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=172985",
  },
  {
    id: 2,
    title: "We Wish You a Merry Christmas",
    artist: "Grand Projec",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/cover-we-wish-you-a-merry-christmas.jpg",
    audio:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/we-wish-you-a-merry-christmas.mp3",
    url: "https://pixabay.com/users/grand_project-19033897/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=174155",
  },
  {
    id: 3,
    title: "Rock n Christmas",
    artist: "Grand Projec",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/cover-rock-n-christmas.webp",
    audio:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/rock-n-christmas.mp3",
    url: "https://pixabay.com/users/grand_project-19033897/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=177544",
  },
];

// get a radnom track and play
function ramdomArrItem(arr) {
  return Math.floor(Math.random() * arr.length);
}

const audioInfo = document.querySelector("#audio-info");
const audioTitle = audioInfo.querySelector("[audio-title]");
const audioArtist = audioInfo.querySelector("[audio-artist]");
const audioLink = audioInfo.querySelectorAll("a");
const elAudioImg = audioInfo.querySelector("[audio-img]");
const audioImg = audioInfo.querySelector("img");
const toggleMusic = document.querySelector("#toggle-music");
const btnMusic = document.querySelector("#btn-music");
const btnMusicNext = document.querySelector("#btn-audio-next");

// select random track
let currentTrackIndex = ramdomArrItem(TRACKS);

let currentTrack = TRACKS[currentTrackIndex];
let myAudio = new Audio(currentTrack.audio);
// Example: gradually increase the percentage over time
let currentPercentage = 0;

audioData();
// add random track data to hidden panel
function audioData() {
  audioTitle.innerText = currentTrack.title;
  audioArtist.innerText = currentTrack.artist;
  audioImg.src = currentTrack.img;
  audioLink.forEach((a) => a.setAttribute("href", currentTrack.url));
}

toggleMusic.addEventListener("change", (e) => startPauseAudio());
btnMusicNext.addEventListener("click", () => nextTrack());
myAudio.addEventListener("timeupdate", updateConicalGradient);
myAudio.addEventListener("ended", () => nextTrack());

// Function - start or pause the audio
function startPauseAudio() {
  if (myAudio.paused) {
    btnMusic.innerText = "pause";
    myAudio.play();
  } else {
    btnMusic.innerText = "music_note";
    myAudio.pause();
  }
}

// Function - move to the next track
function nextTrack() {
  currentTrackIndex++;
  // Check if the index is within the array bounds
  if (currentTrackIndex >= TRACKS.length) {
    currentTrackIndex = 0;
  }
  // Set the new audio source and play
  currentTrack = TRACKS[currentTrackIndex];
  myAudio.src = currentTrack.audio;
  audioData();
  myAudio.play();
}

// Function -  update the conical gradient based on the percentage
function updateConicalGradient() {
  const percentage = (myAudio.currentTime / myAudio.duration) * 100;
  const gradientSize = percentage.toFixed(2);
  const conicalGradient = `conic-gradient(from 0deg at 50% 50%, #18617E ${gradientSize}%, transparent ${gradientSize}%)`;
  elAudioImg.style.background = conicalGradient;
}

//*************** SANTA ****************/
//Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=92240">Pixabay</a>

// click on santa
document.querySelector("#santa").addEventListener("pointerdown", () => {
  const mp3 =
    "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/santa-ho-ho-ho.mp3";
  const audio = new Audio(mp3);
  audio.play();
  audio.addEventListener("ended", function () {
    // sound has finished, reset the timer and class - not sure if we need this here but best to clear everything out if we can
    audio.currentTime = 0;
  });
});
//************* END SANTA ****************/

/*************** PRODUCTS *****************/

const PRODUCTS = [
  {
    id: 1,
    name: "Christmas Tree Decoration",
    desc: `Perfect for adding a festive touch to any space, this minature tree brings the magic of Christmas right into your home. Crafted with care, it's delighful...'`,
    img: "/images/iCodeMas/tree.png",
    rating: 4.5,
    price: 1999,
    discount: 0,
    cat: 1,
    featured: true,
    recent: true,
  },
  {
    id: 2,
    name: "Box it up",
    desc: `A quality box designed to make your presents have that added quality feel.
        30cm x 30cm with a red ribbon.`,
    img: "/images/iCodeMas/gift.png",
    rating: 5,
    price: 950,
    discount: 25,
    cat: 1,
    featured: true,
    recent: false,
  },
  {
    id: 3,
    name: "Ginger Bread Man",
    desc: `A whole box overflowing with home-made gingerbread men using our very own secret recepie. You will want to eat them all!`,
    img: "/images/iCodeMas/gingerbread_cookie.png",
    rating: 5,
    price: 1099,
    discount: 0,
    cat: 1,
    featured: true,
    recent: false,
  },
];
/*
{
        id: 0,
        name: '',
        desc: ``,
        img: '',
        rating: 5,
        price: 999,
        discount: 0,
        cat: 1,
        featured: false,
        recent: false
    }
*/

// selectors

const tplProductButton = document.querySelector("#tpl-product-button");
const panelFeaturedList = document.querySelector("#panel-featured-list");
const tplProductDetails = document.querySelector("#tpl-product-details");
const panelFeaturedProduct = document.querySelector("#panel-featured-product");

let firstLoad = true;

function renderProducts(dest, type = "") {
  dest.innerHTML = "";

  const arr = filterProductsByProperty(PRODUCTS, "featured", true);

  let delay = 0;
  let delaySpacer = 300;

  arr.forEach((a) => {
    const clone = tplProductButton.content.cloneNode(true);
    const btn = clone.querySelector("button");
    const img = btn.querySelector("img");
    img.src = a.img;
    img.setAttribute("alt", a.name);
    if (a.recent) {
      btn.setAttribute("label", "new");
      btn.classList.add("new");
    }
    if (a.discount) {
      btn.setAttribute("label", `${a.discount}%`);
      btn.classList.add("offer");
    }
    // add to dom
    dest.append(clone);

    // animate in
    setTimeout(() => btn.classList.remove("scale-0"), delay);
    delay += delaySpacer;
    btn.addEventListener("pointerdown", () => {
      // need to add some code to prevent clicking on the button again

      if (type === "featured") displayFeatured(a);
    });
  });
}
// funciton - display featured product item when clicked
function displayFeatured(item) {
  displayProductDetails(panelFeaturedProduct, item);
}
renderProducts(panelFeaturedList, "featured");
displayFeatured(PRODUCTS[0]);

function displayProductDetails(dest, item) {
  // remove current contents (to animate)
  let delay = 0;
  const delaySpacer = 150;

  let delayLoadProduct = 1000;
  if (firstLoad) {
    delayLoadProduct = 0;
    firstLoad = false;
  } else {
    // hide elements
    dest.querySelector(".product").removeAttribute("label");
    dest.querySelector(".product").classList.remove("new", "offer");

    setTimeout(
      () => dest.querySelector("button").classList.add("scale-0"),
      delay
    );
    delay += 50;
    setTimeout(
      () => dest.querySelector("[product-desc]").classList.add("scale-0"),
      delay
    );
    delay += 50;
    setTimeout(
      () => dest.querySelector("[product-stars]").classList.add("scale-0"),
      delay
    );
    delay += 50;
    setTimeout(
      () => dest.querySelector("[product-price").classList.add("scale-0"),
      delay
    );
    delay += 50;
    if (dest.querySelector("[product-price-orig")) {
      setTimeout(
        () =>
          dest.querySelector("[product-price-orig").classList.add("scale-0"),
        delay
      );
      delay += 50;
    }
    setTimeout(
      () => dest.querySelector("[product-name").classList.add("scale-0"),
      delay
    );
    delay += 50;
    setTimeout(() => dest.querySelector("img").classList.add("scale-0"), delay);
  }

  setTimeout(() => {
    dest.innerHTML = "";

    const clone = tplProductDetails.content.cloneNode(true);
    const elProductImg = clone.querySelector(".product");
    const elImg = clone.querySelector("img");
    const elName = clone.querySelector("[product-name]");
    const elPriceOrig = clone.querySelector("[product-price-orig]");
    const elPrice = clone.querySelector("[product-price]");
    const elStars = clone.querySelector("[product-stars]");
    const elDesc = clone.querySelector("[product-desc]");
    const elButton = clone.querySelector("[product-btn]");
    //    console.log(elButton);
    // calculate price
    let finalPrice = item.price;
    if (item.discount) {
      finalPrice = calculateDiscountedPrice(item.price, item.discount);
      elPriceOrig.innerText = formatAsDollarsAndCents(item.price);
    } else {
      elPriceOrig.remove();
    }

    elImg.src = item.img;
    elName.innerText = item.name;
    elPrice.innerText = formatAsDollarsAndCents(finalPrice);
    elStars.innerHTML = rating(item.rating);
    elDesc.innerText = item.desc;

    // button event handlear
    elButton.addEventListener("click", () => addToCart(item));

    dest.append(clone);

    // reveal elements
    setTimeout(() => elImg.classList.remove("scale-0"), delay);
    delay += delaySpacer;
    setTimeout(() => elName.classList.add("translate-x-0"), delay);
    delay += delaySpacer;

    if (item.discount) {
      setTimeout(() => elPriceOrig.classList.add("translate-x-0"), delay);
      delay += delaySpacer;
    }
    setTimeout(() => elPrice.classList.add("translate-x-0"), delay);
    delay += delaySpacer;
    setTimeout(() => elStars.classList.add("translate-x-0"), delay);
    delay += delaySpacer;
    setTimeout(() => elDesc.classList.add("translate-x-0"), delay);
    delay += delaySpacer * 3;
    setTimeout(() => elButton.classList.remove("scale-0"), delay);
    delay += delaySpacer;
    if (item.discount) {
      setTimeout(() => {
        elProductImg.setAttribute("label", `${item.discount}%`);
        elProductImg.classList.add("offer");
      }, delay);
    }
    if (item.recent) {
      setTimeout(() => {
        elProductImg.classList.add("new");
        elProductImg.setAttribute("label", "New");
      }, delay);
    }
  }, delayLoadProduct);
}

function addToCart(item) {
  // TO DO
  console.log("ADD TO CART: ", item.name);
}

/************ END PRODUCTS ***************/

/*************** DIALOG *****************/

// get all dialog buttons
const buttonsDialog = document.querySelectorAll("[data-dialog]");
buttonsDialog.forEach((btn) => {
  btn.addEventListener("pointerdown", () => {
    // get dialog ID
    const dialogID = btn.dataset.dialog;
    const dialogType = btn.dataset.type;

    const elDialog = document.querySelector(`#${dialogID}`);
    const btnClose = elDialog.querySelector("[btn-close]");

    // show dialg
    elDialog.showModal();
    elDialog.classList.remove("translate-y-[-1000px]");
    setTimeout(() => elDialog.classList.remove("scale-[25%]"), 700);

    // add backdrop with fade
    setTimeout(() => elDialog.classList.add("fadeUp"), 1000);

    // fade out and close dialog
    btnClose.addEventListener("click", () => closeDialog());

    // close this dialog
    function closeDialog() {
      elDialog.classList.add("scale-[25%]");
      setTimeout(() => elDialog.classList.add("translate-y-[-1000px]"), 700);
      setTimeout(() => elDialog.classList.remove("fadeUp"), 200);
      setTimeout(() => elDialog.close(), 1000);
    }

    // special promo dialog
    if (dialogType === "promo") {
      const btnConfirm = elDialog.querySelector("#btn-dialog-confirm");
      const dialogForm = elDialog.querySelector("#form-promo");
      const panelMessage = elDialog.querySelector("#panel-dialog-msg");
      const btnCloseMsg = panelMessage.querySelector("#btn-dialog-close");
      const btnCancel = elDialog.querySelector("#btn-dialog-cancel");

      btnCancel.addEventListener("pointerdown", () => closeDialog());
      btnCloseMsg.addEventListener("pointerdown", () => closeDialog());

      // reset form and message on close
      elDialog.addEventListener("close", (e) => {
        //console.log("dialog closed")
        panelMessage.classList.remove("translate-x-0");
        btnConfirm.innerText = "Save Email";
        dialogForm.reset();
      });

      // form submit - show message
      dialogForm.addEventListener("submit", (e) => {
        e.preventDefault();
        panelMessage.querySelector("[promo-email]").innerText =
          dialogForm.querySelector("#promo-email").value;
        btnConfirm.innerText = "Saving Email...";
        setTimeout(() => panelMessage.classList.add("translate-x-0"), 500);
      });
    }
  });
});

/************* END DIALOG ***************/

/*************** UTILITIES *****************/

// utility - convert rating to stars
function rating(rate) {
  // console.log(rate);
  const val = Math.floor(rate);
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    const fill = i <= val ? "material-fill-1" : "";
    stars += `<span class="star material-symbols-outlined ${fill}">star</span>`;
  }
  return stars;
}

// utility function - filter given array by key and value pair
function filterProductsByProperty(arr, key, value) {
  return arr.filter((a) => a[key] === value);
}

// utility funciton - format number as price
function formatAsDollarsAndCents(number) {
  // Ensure that the input is a valid number
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  // Divide the number by 100 to represent dollars and cents
  const adjustedNumber = number / 100;

  // Use toLocaleString to format as dollars and cents
  const formattedNumber = adjustedNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}

// utility function - calculate price after percent discount
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // Ensure the discount percentage is a valid number between 0 and 100
  if (
    isNaN(discountPercentage) ||
    discountPercentage < 0 ||
    discountPercentage > 100
  ) {
    console.error(
      "Invalid discount percentage. Please provide a number between 0 and 100."
    );
    return null;
  }

  // Calculate the discounted amount
  const discountAmount = (originalPrice * discountPercentage) / 100;

  // Calculate the discounted price
  const discountedPrice = originalPrice - discountAmount;

  return discountedPrice;
}

// utility - format date ()
function formatDate(date) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  /*
      hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        */
  const newDate = new Date(date);
  return newDate.toLocaleString("en-US", options);
}

/***************** SNOW *******************/
// adapted from here: https://www.cssscript.com/falling-snowflakes-pure/

let snowflakesCount = 200; // Snowflake count, can be overwritten by attrs
let baseCSS = ``;

// set global attributes
if (typeof SNOWFLAKES_COUNT !== "undefined") {
  snowflakesCount = SNOWFLAKES_COUNT;
}
if (typeof BASE_CSS !== "undefined") {
  baseCSS = BASE_CSS;
}

let bodyHeightPx = null;
let pageHeightVh = null;

function setHeightVariables() {
  bodyHeightPx = document.body.offsetHeight;
  pageHeightVh = (100 * bodyHeightPx) / window.innerHeight;
}

// get params set in snow div
function getSnowAttributes() {
  const snowWrapper = document.getElementById("snow");
  snowflakesCount = Number(snowWrapper?.dataset?.count || snowflakesCount);
}

// Creating snowflakes
function generateSnow(snowDensity = 200) {
  snowDensity -= 1;
  const snowWrapper = document.getElementById("snow");
  snowWrapper.innerHTML = "";
  for (let i = 0; i < snowDensity; i++) {
    let board = document.createElement("div");
    board.className = "snowflake";
    snowWrapper.appendChild(board);
  }
}

function getOrCreateCSSElement() {
  let cssElement = document.getElementById("psjs-css");
  if (cssElement) return cssElement;

  cssElement = document.createElement("style");
  cssElement.id = "psjs-css";
  document.head.appendChild(cssElement);
  return cssElement;
}

// Append style for each snowflake to the head
function addCSS(rule) {
  const cssElement = getOrCreateCSSElement();
  cssElement.innerHTML = rule; // safe to use innerHTML
  document.head.appendChild(cssElement);
}

// Math
function randomInt(value = 100) {
  return Math.floor(Math.random() * value) + 1;
}

function randomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Create style for snowflake
function generateSnowCSS(snowDensity = 200) {
  let snowflakeName = "snowflake";
  let rule = baseCSS;

  for (let i = 1; i < snowDensity; i++) {
    let randomX = Math.random() * 100; // vw
    let randomOffset = Math.random() * 10; // vw;
    let randomXEnd = randomX + randomOffset;
    let randomXEndYoyo = randomX + randomOffset / 2;
    let randomYoyoTime = getRandomArbitrary(0.3, 0.8);
    let randomYoyoY = randomYoyoTime * pageHeightVh; // vh
    let randomScale = Math.random();
    let fallDuration = randomIntRange(10, (pageHeightVh / 10) * 3); // s
    let fallDelay = randomInt((pageHeightVh / 10) * 3) * -1; // s
    let opacity = Math.random();

    rule += `
      .${snowflakeName}:nth-child(${i}) {
        opacity: ${opacity};
        transform: translate(${randomX}vw, -10px) scale(${randomScale});
        animation: fall-${i} ${fallDuration}s ${fallDelay}s linear infinite;
      }
      @keyframes fall-${i} {
        ${randomYoyoTime * 100}% {
          transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
        }
        to {
          transform: translate(${randomXEndYoyo}vw, ${pageHeightVh}vh) scale(${randomScale});
        }
      }
    `;
  }
  addCSS(rule);
}

// Load the rules and execute after the DOM loads
function createSnow() {
  setHeightVariables();
  getSnowAttributes();
  generateSnowCSS(snowflakesCount);
  generateSnow(snowflakesCount);
}

const snow = document.querySelector("#snow");

document.querySelector("#toggle-snow").addEventListener("change", (e) => {
  if (e.target.checked) snow.classList.remove("hidden");
  else snow.classList.add("hidden");
});

window.addEventListener("resize", createSnow);
createSnow();
