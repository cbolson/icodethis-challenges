// tailwind config
tailwind.config = {
  darkMode: "class",
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

/****************** dark mode toggle ***************/
document.querySelector("#toggle-mode").addEventListener("change", () => {
  document.documentElement.classList.toggle("dark");
});

/************** LOGO ANIMATION **************/
const logoBlocks = document.querySelectorAll("#icodethis-logo path");
let logoInterval;
let currentIndex = 0;
function animateLogo() {
  // check if an interval has already been set up
  if (!logoInterval) {
    logoInterval = setInterval(moveBlocks, 500);
  }
}
const locations = [
  "M 0 0 H 40 V 25 H 60 V 0 Z",
  "M 20 25 V 60 H 80 V 25 Z",
  "M 0 60 V 100 H 100 V 60",
];

function moveBlocks() {
  logoBlocks.forEach((b, i) => {
    let newKey = (i + currentIndex) % logoBlocks.length;
    b.setAttribute("d", locations[newKey]);
  });
  currentIndex = (currentIndex + 1) % locations.length;
}

function stopTextColor() {
  clearInterval(logoInterval);
  logoInterval = null;
}

animateLogo();

//**************** SLIDE TO ANCHOR ***************/
function scrollToSection(sectionId) {
  document
    .querySelector(`#panel-${sectionId}`)
    .scrollIntoView({ behavior: "smooth" });
}
// nav button event handler to simulate anchors
document
  .querySelectorAll("[nav-btn]")
  .forEach((btn) =>
    btn.addEventListener("pointerdown", () =>
      scrollToSection(btn.getAttribute("nav-btn"))
    )
  );

/***************** COUNTDOWN ********************/
const panelCountdown = document.querySelector("#panel-countdown");
const elDays = document.querySelector("#days");
const elDaysSpan = elDays.querySelectorAll("span");
const elHours = document.querySelector("#hours");
const elHoursSpan = elHours.querySelectorAll("span");
const elMinutes = document.querySelector("#minutes");
const elMinutesSpan = elMinutes.querySelectorAll("span");
const elSeconds = document.querySelector("#seconds");
const elSecondsSpan = elSeconds.querySelectorAll("span");

const expirationDate = new Date("2023-12-25 00:00");

const SPEED = 150;

let currentDays = [];
let currentHours = [];
let currentMins = [];
let currentSecs = {};
//let tempCounter = 0;

function updateCountdown() {
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
  currentSecs = { ...s };

  // tempCounter++;
  //console.log(tempCounter);
}

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
  currentSecs = { ...s };
  elSecondsSpan[0].innerText = currentSecs[0];
  elSecondsSpan[1].innerText = currentSecs[1];
}

// Intersection Observer options
const observerOptions = {
  root: null,
  rootMargin: "-250px",
  threshold: 0.01,
};

// Callback function for the Intersection Observer
function countdownIntersectionHandler(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Update the countdown when the target element is visible
      startCountdownInterval();
    } else {
      // Clear the interval when the element is not visible
      clearInterval(expirationDateInterval);
    }
  });
}

// Create an Intersection Observer
const intersectionObserver = new IntersectionObserver(
  countdownIntersectionHandler,
  observerOptions
);

// in attempt to reduce load, I stop the countdown when it is not in view
intersectionObserver.observe(panelCountdown);

// Update the countdown initially in case the element is already visible
initalLoad();

// Set interval to update the countdown every second (as before)
let expirationDateInterval;

function startCountdownInterval() {
  clearInterval(expirationDateInterval);
  expirationDateInterval = setInterval(() => {
    updateCountdown();
  }, 1000);
}

// Start the countdown interval initially
startCountdownInterval();

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

function changeNum(el, newVal, timing) {
  el.classList.add("scale-0");

  setTimeout(() => {
    el.innerText = "";
    el.classList.remove("scale-0");
    el.classList.add("-translate-y-24");
  }, timing);

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

// categories
const CATEGORIES = {
  1: "Cookies",
  2: "Candies",
  3: "Ornaments",
  4: "Accessories",
};
const COLORS = {
  1: "Red",
  2: "Green",
  3: "Brown",
};
const SIZES = ["Small", "Medium", "Large"];

const PRODUCTS = [
  {
    id: 90001,
    name: "Gift Card $30",
    desc: ``,
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/gift-card-svg.svg",
    price: 2500,
    sales: 2324,
    display_in_shop: false,
  },
  {
    id: 90002,
    name: "Gift Card $50",
    desc: ``,
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/gift-card-svg.svg",
    price: 5000,
    sales: 2324,
    display_in_shop: false,
  },
  {
    id: 90003,
    name: "Gift Card $75",
    desc: ``,
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/gift-card-svg.svg",
    price: 7500,
    sales: 2324,
    display_in_shop: false,
  },
  {
    id: 90004,
    name: "Gift Card $100",
    desc: ``,
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/gift-card-svg.svg",
    price: 10000,
    sales: 2324,
    display_in_shop: false,
  },
  {
    id: 90005,
    name: "Gift Card $200",
    desc: ``,
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/gift-card-svg.svg",
    price: 20000,
    sales: 2324,
    display_in_shop: false,
  },
  {
    id: 90006,
    name: "Gift Card $300",
    desc: ``,
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/gift-card-svg.svg",
    price: 30000,
    sales: 2324,
    display_in_shop: false,
  },
  {
    id: 1,
    name: "Christmas Tree Decoration",
    desc: `Perfect for adding a festive touch to any space, this minature tree brings the magic of Christmas right into your home. Crafted with care, it's delighful...'`,
    img: "/images/iCodeMas/tree.png",
    rating: 4.5,
    price: 1999,
    discount: 0,
    category: 3,
    size: "large",
    colors: ["green"],
    featured: true,
    recent: true,
    stock: 10,
    rating: 3.5,
    sales: 124,
    display_in_shop: true,
  },
  {
    id: 2,
    name: "Gift Box",
    desc: `A quality box designed to make your presents have that added quality feel.
        30cm x 30cm with a red ribbon.`,
    img: "/images/iCodeMas/gift.png",
    rating: 5,
    price: 950,
    discount: 25,
    category: 4,
    size: "medium",
    colors: ["red", "white"],
    featured: true,
    recent: false,
    stock: 10,
    rating: 4,
    sales: 45,
    display_in_shop: true,
  },
  {
    id: 3,
    name: "Ginger Bread Man",
    desc: `A whole box overflowing with home-made gingerbread men using our very own secret recepie. You will want to eat them all!`,
    img: "/images/iCodeMas/gingerbread_cookie.png",
    rating: 3,
    price: 1099,
    discount: 0,
    category: 1,
    size: "small",
    colors: ["red", "brown"],
    featured: true,
    recent: false,
    stock: 10,
    rating: 5,
    sales: 475,
    display_in_shop: true,
  },
  {
    id: 4,
    name: "Snowflake Decoration",
    desc: `Add some "cool" features to your Christmas decorations`,
    img: "/images/iCodeMas/snowflake.png",
    rating: 3,
    price: 499,
    discount: 0,
    category: 3,
    size: "small",
    colors: ["blue"],
    featured: false,
    recent: false,
    stock: 2,
    rating: 2.8,
    sales: 584,
    display_in_shop: true,
  },
  {
    id: 5,
    name: "Star Shaped Cookie",
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/star_cookie.png",
    rating: 5,
    price: 1299,
    discount: 0,
    category: 1,
    size: "small",
    colors: ["brown", "white"],
    featured: false,
    recent: false,
    stock: 10,
    rating: 4.8,
    sales: 2153,
    display_in_shop: true,
  },
  {
    id: 6,
    name: `Santas's Hat`,
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/santa_hat.png",
    rating: 5,
    price: 3999,
    discount: 15,
    category: 4,
    size: "medium",
    colors: ["red", "white"],
    featured: false,
    recent: false,
    stock: 100,
    msg: "Back in stock",
    rating: 5,
    sales: 5143,
    display_in_shop: true,
  },
  {
    id: 7,
    name: "Candy Cane",
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/candy_cane.png",
    rating: 5,
    price: 999,
    discount: 0,
    category: 2,
    size: "small",
    colors: ["red", "white"],
    featured: false,
    recent: true,
    stock: 10,
    rating: 4.3,
    sales: 785,
    display_in_shop: true,
  },
  {
    id: 8,
    name: "Snowman Decoration",
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/snowman_deco.png",
    rating: 5,
    price: 3999,
    discount: 10,
    category: 3,
    size: "small",
    colors: ["red", "white"],
    featured: false,
    recent: false,
    stock: 10,
    rating: 3,
    sales: 177,
    display_in_shop: true,
  },
  {
    id: 9,
    name: "Christmas Ball",
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/christmas_ball.png",
    rating: 5,
    price: 399,
    discount: 0,
    category: 3,
    size: "small",
    colors: ["red", "white"],
    featured: false,
    recent: false,
    stock: 0,
    rating: 3.5,
    sales: 633,
    display_in_shop: true,
  },
  {
    id: 10,
    name: `Christmas Red Sock's`,
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/christmas_sock.png",
    rating: 5,
    price: 2999,
    discount: 0,
    category: 4,
    size: "medium",
    colors: ["red", "white"],
    featured: false,
    recent: false,
    stock: 10,
    rating: 5,
    sales: 1975,
    display_in_shop: true,
  },
  {
    id: 11,
    name: "Red Ribbon",
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/red_ribbon.png",
    rating: 5,
    price: 399,
    discount: 0,
    category: 3,
    size: "small",
    colors: ["red"],
    featured: false,
    recent: true,
    stock: 3,
    rating: 1,
    sales: 23,
    display_in_shop: true,
  },
  {
    id: 12,
    name: "Christmas Tree Cookie",
    desc: ``,
    img: "https://icodethis.com/images/iCodeMas/tree_cookie.png",
    rating: 5,
    price: 1399,
    discount: 0,
    category: 1,
    size: "small",
    colors: ["red", "white", "brown", "green"],
    featured: false,
    recent: false,
    stock: 6,
    rating: 4.8,
    sales: 2541,
    display_in_shop: true,
  },
  {
    id: 21,
    name: "Festive Gingerbread Cookies",
    desc: "A delightful cookies for the holidays. Perfect for adding a touch of magic to your Christmas festivities.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: getRandomNumber(0, 20),
    category: 1,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 22,
    name: "Peppermint Twist Candy Canes",
    desc: "Add a twist of peppermint magic to your holiday season with these delightful candy canes.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: getRandomNumber(0, 20),
    category: 2,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"], COLORS["2"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 23,
    name: "Golden Christmas Bauble Ornament",
    desc: "Elevate your tree decor with this elegant golden bauble ornament. A timeless addition to your festive collection.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: 0,
    category: 3,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["3"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 24,
    name: `Santa's Workshop Accessory Set`,
    desc: `Transform your space into Santa\'s workshop with this charming accessory set. Perfect for creating a festive atmosphere.`,
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: getRandomNumber(0, 20),
    category: 4,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"], COLORS["2"], COLORS["3"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 25,
    name: `Snowflake Sugar Cookies`,
    desc: `Delicious snowflake-shaped sugar cookies that will melt in your mouth. A sweet treat for the winter season`,
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: 0,
    category: 1,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"], COLORS["2"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 26,
    name: "Mint Chocolate Truffles",
    desc: "Indulge in the rich and creamy goodness of mint chocolate truffles. A delightful treat for chocolate lovers.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: getRandomNumber(0, 20),
    category: 2,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["2"], COLORS["3"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 27,
    name: "Silver Glitter Snowflake Ornament",
    desc: "Add a touch of sparkle to your tree with this silver glitter snowflake ornament. The perfect accent for a winter wonderland theme.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: 0,
    category: 3,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["2"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 8,
    name: "Cozy Christmas Scarf",
    desc: "Stay warm and festive with this cozy Christmas scarf. A stylish accessory for chilly winter days.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: getRandomNumber(0, 20),
    category: 4,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"], COLORS["3"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 29,
    name: "Holiday Star-Shaped Cookies",
    desc: "Bite into the magic of the season with these delightful star-shaped cookies. Perfect for sharing joy with loved ones.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: 0,
    category: 1,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"], COLORS["3"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 30,
    name: "Christmas Joy Lollipops",
    desc: "Spread Christmas joy with these colorful and delicious lollipops. A sweet way to celebrate the season.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: 0,
    category: 2,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"], COLORS["2"], COLORS["3"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 31,
    name: "Classic Glass Ball Ornament",
    desc: "Embrace the classics with this timeless glass ball ornament. A sophisticated addition to your Christmas tree.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: 0,
    category: 3,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["1"], COLORS["2"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 32,
    name: `Santa's Helper Elf Hat`,
    desc: "Get into the holiday spirit with this adorable elf hat. Perfect for adding a touch of whimsy to your Christmas celebrations.",
    img: "/images/iCodeMas/snowflake.png",
    rating: getRandomNumber(1, 5),
    price: getRandomNumber(2000, 500),
    discount: 0,
    category: 4,
    size: getRandomFromArray(SIZES),
    colors: [COLORS["2"], COLORS["3"]],
    featured: false,
    recent: getRandomBoolean(),
    stock: getRandomNumber(1, 100),
    sales: getRandomNumber(1000, 6000),
    display_in_shop: true,
  },
  {
    id: 33,
    name: "Cranberry Bliss Cookies",
    desc: "Experience the bliss of the season with these cranberry-infused cookies. A perfect blend of sweet and tart flavors.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 3,
    price: 1000,
    discount: 8,
    category: 1,
    size: "Small",
    colors: ["Red", "Green"],
    featured: false,
    recent: true,
    stock: 20,
    sales: 3800,
    display_in_shop: true,
  },
  {
    id: 34,
    name: "Winter Wonderland Gummies",
    desc: "Create your own winter wonderland with these festive gummies. A fun and delicious treat for the holiday season.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 4,
    price: 1300,
    discount: 10,
    category: 2,
    size: "Medium",
    colors: ["Red", "Green"],
    featured: false,
    recent: false,
    stock: 15,
    sales: 3100,
    display_in_shop: true,
  },
  {
    id: 35,
    name: "Holly Jolly Christmas Ornaments",
    desc: "Decorate your tree with these holly jolly Christmas ornaments. A cheerful addition to your holiday decorations.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 5,
    price: 1800,
    discount: 15,
    category: 0,
    size: "Large",
    colors: ["Brown"],
    featured: false,
    recent: true,
    stock: 12,
    sales: 2600,
    display_in_shop: true,
  },
  {
    id: 36,
    name: "Joyful Jingle Bell Earrings",
    desc: "Spread joy with these delightful jingle bell earrings. A festive accessory for holiday parties and gatherings.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 3,
    price: 1000,
    discount: 5,
    category: 4,
    size: "Small",
    colors: ["Red", "Brown"],
    featured: false,
    recent: false,
    stock: 18,
    sales: 3300,
    display_in_shop: true,
  },
  {
    id: 37,
    name: "Cinnamon Spice Snickerdoodles",
    desc: "Indulge in the warmth of the season with these cinnamon spice snickerdoodles. A perfect treat for cozy winter nights.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 4,
    price: 1400,
    discount: 8,
    category: 1,
    size: "Large",
    colors: ["Red", "Brown"],
    featured: false,
    recent: true,
    stock: 14,
    sales: 2900,
    display_in_shop: true,
  },
  {
    id: 38,
    name: "Festive Peppermint Bark",
    desc: "Celebrate the season with the classic taste of festive peppermint bark. A delicious combination of chocolate and mint.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 5,
    price: 1600,
    discount: 0,
    category: 2,
    size: "Medium",
    colors: ["Green", "Brown"],
    featured: false,
    recent: false,
    stock: 10,
    sales: 2400,
    display_in_shop: true,
  },
  {
    id: 39,
    name: "Crystal Snowflake Pendant Necklace",
    desc: "Adorn yourself with the beauty of winter with this crystal snowflake pendant necklace. A charming accessory for holiday outfits.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 4,
    price: 1200,
    discount: 0,
    category: 3,
    size: "Large",
    colors: ["Red", "Green"],
    featured: false,
    recent: true,
    stock: 16,
    sales: 3700,
    display_in_shop: true,
  },
  {
    id: 40,
    name: "Santa Claus Plush Toy",
    desc: "Bring the magic of Santa Claus to your home with this adorable plush toy. A cuddly companion for the holiday season.",
    img: "/images/iCodeMas/snowflake.png",
    rating: 5,
    price: 2000,
    discount: 10,
    category: 4,
    size: "Medium",
    colors: ["Red", "Green", "Brown"],
    featured: false,
    recent: false,
    stock: 12,
    sales: 2600,
    display_in_shop: true,
  },
];
// UTILITY - return random number between values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// utility - return random from array
function getRandomFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function getRandomBoolean() {
  return Math.random() < 0.5;
}

const CART = [];
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
const ITEMS_PER_PAGE = 10; // number if items to show on each page
const PAGINATION_NUM_TO_SHOW = 5; // the number of numbers to display - this could be adjusted according to screen size (TO TO)

let curPage = 0;

// define intital total results (this will be the products in the JSON )
//let totalResults = data.length;
let totalResults = 0;

const offset = curPage * ITEMS_PER_PAGE;

const panelPagination = document.querySelector("#panel-pagination");
const paginationList = panelPagination.querySelector("#pages-numbers");
const paginationButtons = panelPagination.querySelectorAll("[data-page]");
const panelPageContent = document.querySelector("#panel-page"); // temp - replace with products listing in final project

/* SELECTORS */
const main = document.querySelector("main");
const tplProductItem = document.querySelector("#tpl-product-item");
const tplProductItemFeatured = document.querySelector(
  "#tpl-product-item-featured"
);
const panelFeaturedList = document.querySelector("#panel-featured-list");
const tplProductDetails = document.querySelector("#tpl-product-details");
const panelFeaturedProduct = document.querySelector("#panel-featured-product");
const panelShop = document.querySelector("#panel-shop");
const navCartIcon = document.querySelector("#nav-cart");
const panelCart = document.querySelector("#panel-cart");

const tplProduct = document.querySelector("#tpl-product-item");
const panelProductsList = document.querySelector("#products-list");

// define to avoid delay on product list clearance etc.
let firstLoad = true;
// delay between product loading each item
let delayProductDisplay = 100;
//// thumbnail hack (thanks marcinmalecki)
// overide the delays etc for the thumbnail generation
if (navigator.userAgent.includes("Headless")) {
  delayProductDisplay = 0;
  document.body.classList.add("pt-32");
}

/************** FEATURED **************/

// FEATURED - products list (I orginally used the same code as I use for the shop products but it got over complicated)
function renderFeaturedProducts() {
  panelFeaturedList.innerHTML = "";
  let arr = filterProductsByProperty(PRODUCTS, "featured", true);

  let delay = 0;
  let delaySpacer = 300;

  arr.forEach((a) => {
    const clone = tplProductItemFeatured.content.cloneNode(true);
    const product = clone.querySelector("button");
    const elProductImg = product.querySelector(".product-img");
    const img = elProductImg.querySelector("img");
    img.src = a.img;
    img.setAttribute("alt", a.name);
    if (a.recent) {
      elProductImg.setAttribute("label", "new");
      product.classList.add("new");
    }
    if (a.discount) {
      elProductImg.setAttribute("label", `${a.discount}%`);
      product.classList.add("offer");
    }
    // add to dom
    panelFeaturedList.append(clone);

    // animate in
    setTimeout(() => product.classList.remove("scale-0"), delay);
    delay += delaySpacer;
    product.addEventListener("pointerdown", () => {
      // need to add some code to prevent clicking on the button again
      displayFeatured(a.id);
    });
  });
}

// FEATURED - show product details
function displayFeatured(idItem) {
  // get selected item data
  const item = PRODUCTS.find((p) => p.id === idItem);
  const dest = panelFeaturedProduct;

  // remove current contents (to animate)
  let delay = 0;
  const delaySpacer = 50;

  let delayLoadProduct = 500;
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
    elButton.addEventListener("click", () => {
      if (!isProductInCart(item.id)) {
        // not in cart - add
        moveToCart(elImg);
        addProductToCart(item.id);
        updateProductButton(elButton, true, "featured");
      } else {
        // in cart - remove

        removeProductFromCart(item.id);
        updateProductButton(elButton, false, "featured");
      }
    });

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

// FEATURED - render list and inital product to display (this could be randomized???)
renderFeaturedProducts();
displayFeatured(1);

/************ END FEATURED ************/

/**************** SHOP *******************/

const radioSort = document.querySelector("#show-sort-order");
const dropDownButtons = document.querySelector("#sort-options-list");
const buttonSortOrder = document.querySelector("#btn-sort-order");

let currentSortOption = "newest"; // Default selected option
let currProductsArr = PRODUCTS;

// SHOP - render products
function renderShopProducts() {
  panelProductsList.innerHTML = "";

  if (currProductsArr.length === 0) {
    panelProductsList.innerHTML = `<p class=" col-span-2 text-red-600 font-semibold">Sorry, Santa doesn't have any products that fulfill your search criteria.</p>`;
  } else {
    // let arr
    // if (type) arr = filterProductsByProperty(PRODUCTS, type, true);
    //else arr = PRODUCTS
    let delay = 0;

    // sort array according to currently defined method
    currProductsArr = sortProducts(currProductsArr);

    // Filter out products where display_in_shop is false
    const filteredProducts = currProductsArr.filter(
      (product) => product.display_in_shop
    );
    //console.log(filteredProducts);
    // Calculate the start and end index based on the current page and products per page
    const startIndex = curPage * ITEMS_PER_PAGE;
    const endIndex = Math.min(
      startIndex + ITEMS_PER_PAGE,
      filteredProducts.length
    );
    //console.log("OFFSET", startIndex,endIndex);
    // Slice the array to get the products for the current page
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    // ensure pagination is showing based on filterd products
    pagination(startIndex, filteredProducts.length);

    productsToDisplay.forEach((a) => {
      //console.log(a.recent);
      const clone = tplProduct.content.cloneNode(true);
      const product = clone.querySelector("article");
      const btn = product.querySelector("button");
      const img = product.querySelector("img");
      // const elProductImg = product.querySelector(".product-img");
      // const elBanner = product.querySelector("[data-banner]");
      const elPrice = product.querySelector("[data-price]");
      const elPriceOrig = product.querySelector("[data-price-orig]");

      img.src = a.img;
      img.setAttribute("alt", a.name);
      clone.querySelector("[data-title]").innerText = a.name;

      if (a.recent) {
        product.setAttribute("label", "new");
        product.classList.add("new");
        // console.log(a.name);
      }
      if (a.discount) {
        product.setAttribute("label", `${a.discount}%`);
        product.classList.add("offer");
      }
      // check if in cart
      if (isProductInCart(a.id)) {
        // product is in cart - change button text
        updateProductButton(btn, true);
      }
      /*
                if (a.stock < 1) {
                    img.classList.add("opacity-30")
                    btn.remove()
                    elBanner.innerText = `Sold Out`;
                   // elBanner.classList.add("-rotate-12", "!bottom-10")
                    elBanner.classList.remove("hidden")

                } else if (a.stock < 5) {
                    // img.classList.add("opacity-50")
                   // elBanner.innerText = `Only ${a.stock} left!`;
                    elBanner.classList.remove("hidden")
                    //elBanner.classList.add("animate-pulse")
                } else if (a.msg) {
                    // img.classList.add("opacity-50")
                    elBanner.innerText = a.msg;
                    elBanner.classList.remove("hidden")
                    //elBanner.classList.add("animate-pulse")
                }
                */ 0;

      // calculate price
      let finalPrice = a.price;
      if (a.discount) {
        finalPrice = calculateDiscountedPrice(a.price, a.discount);
        elPriceOrig.innerText = formatAsDollarsAndCents(a.price);
      } else {
        elPriceOrig.remove();
      }
      elPrice.innerText = formatAsDollarsAndCents(finalPrice);

      // add to dom
      panelProductsList.append(clone);

      // animate in
      setTimeout(() => product.classList.remove("scale-0"), delay);
      delay += delayProductDisplay;
      btn.addEventListener("pointerdown", () => {
        // need to add some code to prevent clicking on the button again
        // console.log("add to cart");
        if (!isProductInCart(a.id)) {
          //console.log("add to cart");
          // not in cart - add
          moveToCart(img);
          addProductToCart(a.id);
          updateProductButton(btn, true);
        } else {
          // in cart - remove
          removeProductFromCart(a.id);
          updateProductButton(btn, false);
        }
      });
    });
  }
}

// SHOP - update cart button when added or removed
function updateProductButton(btn, inCart, btnType = "") {
  if (inCart) {
    btn.classList.add("bg-[#C5E0FB]", "text-black");
    if (btnType != "featured") btn.classList.remove("sm:translate-y-full");
    btn.querySelector("[data-btn-add]").classList.add("scale-0");
    btn.querySelector("[data-btn-remove]").classList.remove("scale-0");
  } else {
    btn.classList.remove("bg-[#C5E0FB]", "text-black");
    if (btnType != "featured") btn.classList.add("sm:translate-y-full");
    btn.querySelector("[data-btn-add]").classList.remove("scale-0");
    btn.querySelector("[data-btn-remove]").classList.add("scale-0");
  }
}
renderShopProducts();

// FILTER - get unique values for a given key (eg for cat which has it's own definitions JSON)
function getSortedUniqueValues(data, key) {
  return [...new Set(data.flatMap((item) => item[key]))].sort();
}

// FILTER - generate filter options for a given key
const tplFilterCheckbox = document.querySelector("#tpl-filter-checkbox");

// FILTER - generate filter options
function generateFilterOptions(data, key, definitions, containerId) {
  const uniqueValues = getSortedUniqueValues(data, key);
  const filterOptionsContainer = document.getElementById(containerId);
  //console.log(uniqueValues);
  uniqueValues.forEach((value) => {
    if (value) {
      const clone = tplFilterCheckbox.content.cloneNode(true);
      const label = clone.querySelector("label");
      const input = clone.querySelector("input");

      input.name = key;
      input.value = value;
      input.id = `filter-${value}`;
      input.addEventListener("change", updateFilteredResults);

      // define label
      label.querySelector("p").innerText = definitions[value] || value;
      label.setAttribute("for", `filter-${value}`);
      filterOptionsContainer.appendChild(clone);
    }
  });
}
// FILTER - specil filter hadlers (these are hardcoded in the HTML)
document
  .querySelectorAll("#filter-options input")
  .forEach((el) => el.addEventListener("change", updateFilteredResults));

// FILTER - update filtered results based on selected filters
function updateFilteredResults() {
  //console.log("filering...");
  // get checked filters (and convet node list to array)
  const arrFiltersCategory = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  );
  const arrFiltersSize = Array.from(
    document.querySelectorAll('input[name="size"]:checked')
  );
  const arrFilterColor = Array.from(
    document.querySelectorAll('input[name="colors"]:checked')
  );
  const filterOffer = document.querySelector("#filter-discount:checked");
  const filterRecent = document.querySelector("#filter-recent:checked");
  const filterFeatured = document.querySelector("#filter-featured:checked");
  const filterStock = document.querySelector("#filter-stock:checked");

  // Perform filtering based on selected options
  currProductsArr = PRODUCTS.filter((product) => {
    return (
      (!arrFiltersCategory.length ||
        arrFiltersCategory.some(
          (filter) => product.category === parseInt(filter.value, 10)
        )) &&
      (!arrFiltersSize.length ||
        arrFiltersSize.some((filter) => product.size === filter.value)) &&
      (!arrFilterColor.length ||
        arrFilterColor.some((filter) =>
          product.colors.includes(filter.value)
        )) &&
      (!filterOffer || product.discount) &&
      (!filterRecent || product.recent) &&
      (!filterFeatured || product.featured) &&
      (!filterStock || product.stock > 0)
    );
  });

  // display filtered results
  renderShopProducts();
}

// FILTER - clear all button
document
  .querySelector("#btn-filter-clear")
  .addEventListener("click", clearAllFilters);

const elFilters = document.querySelector("#filters-options");

// FILTER - clear all filters
function clearAllFilters() {
  elFilters.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
  // reset current products array to full list
  currProductsArr = PRODUCTS;
  // Update filtered results
  renderShopProducts();

  // uncheck filters radio to close the filters
  radioShowFilters.checked = false;
}

// FILTERS - radio button
const radioShowFilters = document.querySelector("#show-filters");
radioShowFilters.addEventListener("change", (e) => {
  if (e.target.checked)
    document.addEventListener("click", handleDocClickFilters);
  else document.removeEventListener("click", handleDocClickFilters);
});
// FILTERS - doc click event handler to close filters if user clicks outsidechange event listener
function handleDocClickFilters(e) {
  // Check if the clicked element or its ancestors include the "filters-options" element
  const isClickInsideFilters = e.target.closest("#filters-options");

  if (!isClickInsideFilters) {
    radioShowFilters.checked = false;
    document.removeEventListener("click", handleDocClickFilters);
  }
}

// Generate filters
generateFilterOptions(PRODUCTS, "category", CATEGORIES, "filters-categories");
generateFilterOptions(PRODUCTS, "size", {}, "filters-size");
generateFilterOptions(PRODUCTS, "colors", {}, "filters-color");

const searchProducts = document.querySelector("#search-products");

searchProducts.addEventListener("input", (e) => filterProducts(e));
// FILTER - filter products based on search input
function filterProducts(e) {
  const searchInput = e.target.value.toLowerCase();
  currProductsArr = PRODUCTS.filter((product) => {
    return product.name.toLowerCase().includes(searchInput);
  });
  // slide shop to top of page
  scrollToShop();
  renderShopProducts();
}

function scrollToShop() {
  // slide shop to top of page
  document.querySelector(`#panel-shop`).scrollIntoView({ behavior: "smooth" });
}

// SORT products
const SORT_OPTIONS = [
  { newest: "Most recent" },
  { popular: "Most popular" },
  { sales: "Sales" },
  { "price-lowest": "Lowest price first" },
  { "price-highest": "Highest price first" },
];

// SORT - generate sort option list (excluing currently selected)
function updateSortOptionsList() {
  dropDownButtons.innerHTML = ""; // Clear existing buttons
  SORT_OPTIONS.forEach((option) => {
    const key = Object.keys(option)[0];

    if (key !== currentSortOption) {
      const value = option[key];
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-sort", key);
      button.textContent = value;

      button.addEventListener("click", function () {
        radioSort.checked = false;
        updatebuttonSortOrder(key);
        renderShopProducts();
      });
      dropDownButtons.appendChild(button);
    }
  });
}

// SORT - radio button
radioSort.addEventListener("change", (e) => {
  if (e.target.checked)
    document.addEventListener("click", handleDocClickSorting);
  else document.removeEventListener("click", handleDocClickSorting);
});
// SORT - doc click event handler to close sort list if user clicks outsidechange event listener
function handleDocClickSorting(e) {
  // Check if the clicked element or its ancestors include the "sort-options-wrapper" element
  const isClickInsideSort = e.target.closest("#sort-options-wrapper");

  if (!isClickInsideSort) {
    radioSort.checked = false;
    document.removeEventListener("click", handleDocClickSorting);
  }
}

// SORT - buttton - this will eventually update the products list
function updatebuttonSortOrder(option) {
  buttonSortOrder.querySelector("p").textContent =
    SORT_OPTIONS.find((item) => Object.keys(item)[0] === option)?.[option] ||
    "Most Recent";
  buttonSortOrder.setAttribute("data-sort", option);
  currentSortOption = option;
  updateSortOptionsList();
}

updateSortOptionsList(); // Initial generation of the sort options list

function sortProducts(arr) {
  switch (currentSortOption) {
    case "newest":
      // Sorting by id in descending order for most recent
      arr.sort((a, b) => b.id - a.id);
      break;
    case "popular":
      // Sorting by sales in descending order for most popular
      arr.sort((a, b) => b.sales - a.sales);
      break;
    case "sales":
      // Sorting by sales in ascending order
      arr.sort((a, b) => a.sales - b.sales);
      break;
    case "price-lowest":
      // Sorting by price in ascending order
      arr.sort((a, b) => a.price - b.price);
      break;
    case "price-highest":
      // Sorting by price in descending order
      arr.sort((a, b) => b.price - a.price);
      break;
    default:
      // Default to sorting by id in descending order for most recent
      products.sort((a, b) => b.id - a.id);
  }

  return arr;

  // Call a function to update the display with the sorted products
  displaySortedProducts();
}

// UTILITY calculate total pages
function numPages(num) {
  return Math.round(num / ITEMS_PER_PAGE);
}

// PAGINATION

// PAGINATAION - render page number buttons
function pagination(offset, totalResults) {
  //console.log(offset, totalResults)
  // ensure that curPage is a number
  curPage = Number(curPage);

  let totalPages = numPages(totalResults);

  paginationList.innerHTML = "";
  const maxNumbers = 5;
  const startPage = Math.max(0, Math.min(curPage - 3, totalPages - maxNumbers));
  const endPage = Math.min(totalPages - 1, startPage + maxNumbers - 1);
  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement("button");
    btn.value = i;
    btn.innerText = i + 1;

    // add class to current page number
    if (i === curPage) setTimeout(() => btn.classList.add("current"), 150);

    paginationList.append(btn);
    btn.addEventListener("click", () => {
      curPage = btn.value;
      console.log(curPage, offset, totalResults);
      //pagination(curPage, totalResults); // Refresh pagination after a click
      renderShopProducts();
    });
  }
  checkCurrentPage();

  paginationButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      switch (page) {
        case "first":
          curPage = 0;
          break;
        case "prev":
          curPage = curPage > 0 ? curPage - 1 : 0;
          break;
        case "next":
          curPage = curPage < totalPages ? curPage + 1 : totalPages - 1;
          break;
        case "last":
          curPage = totalPages - 1;
          break;
      }
      renderShopProducts();
      // render pagination
      //pagination(curPage, totalResults)
    });
  });

  // PAGINATION - disabled/enable paginationButtons
  function checkCurrentPage() {
    // first & prev buttons
    paginationButtons[0].disabled = curPage == 0 ? true : false;
    paginationButtons[1].disabled = curPage == 0 ? true : false;
    // next & last  buttons
    paginationButtons[2].disabled = curPage == totalPages - 1 ? true : false;
    paginationButtons[3].disabled = curPage == totalPages - 1 ? true : false;
  }
  //renderCurrentPage(curPage)
}

// PAGINATION - load inital page numbers
//pagination(curPage)

/************** END SHOP ****************/

/**************** CART *****************/
// CART - add a product
function addProductToCart(productId) {
  // console.log(productId);

  // Check if the product already exists in the cart
  const existingProduct = CART.find(
    (product) => product.productId === productId
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    CART.push({ productId, quantity: 1 });
  }

  // update cart in nav
  updateCartIconCounter();
}

const TIME_TO_CART = 1000;
function moveToCart(productImage) {
  const clone = productImage.cloneNode(true);

  clone.style.transition = `transform ${TIME_TO_CART}ms ease-in-out,opacity ${
    TIME_TO_CART * 2
  }ms ease-in-out`;
  // Append the clone to the document body
  document.body.appendChild(clone);

  // Calculate the difference between the current and destination positions
  const cartIconRect = navCartIcon.getBoundingClientRect();
  const initialPosition = productImage.getBoundingClientRect();
  const diffX = cartIconRect.left - initialPosition.left;
  const diffY = cartIconRect.top - initialPosition.top;
  //console.log(cartIconRect.left, cartIconRect.top)
  // Set the initial position of the clone
  clone.style.position = "absolute";
  clone.style.zIndex = "999";
  clone.style.left = `${initialPosition.left - 20 + window.scrollX}px`;
  clone.style.top = `${initialPosition.top + window.scrollY}px`;
  //console.log(clone.style.left, clone.style.top)

  // Force a reflow to ensure the starting position is set before transitioning
  clone.offsetHeight;

  // Add the transformation
  clone.style.transform = `translate(${diffX}px, ${diffY}px)  scale(20%)`;
  //clone.style.opacity = `10%`;

  // Remove the clone once the transition is complete
  clone.addEventListener("transitionend", () => {
    clone.remove();
  });
}

// CART - remove a product
function removeProductFromCart(productId) {
  // Find the index of the product in the cart
  const productIndex = CART.findIndex(
    (product) => product.productId === productId
  );
  if (productIndex !== -1) {
    // If the product is found, remove it from the cart
    CART.splice(productIndex, 1);
  }
  // update cart in nav
  updateCartIconCounter();
}

// CART - check if a product is in the cart
function isProductInCart(productId) {
  return CART.some((product) => product.productId === productId);
}

// CART - get total in cart
function getTotalItemsInCart() {
  // Use the reduce method to sum the quantities of all products
  return CART.reduce((acc, product) => acc + product.quantity, 0);
}

// CART - update an HTML element with the total number of items
function updateCartIconCounter() {
  navCartIcon.classList.add("after:scale-0");
  const totalItems = getTotalItemsInCart();
  navCartIcon.setAttribute("data-num", totalItems);
  setTimeout(() => {
    if (totalItems > 0) navCartIcon.classList.remove("after:scale-0");
  }, 200);
}

/****************** PANEL CART ***************/
let cartVisible = false;
const tplCartItem = document.querySelector("#tpl-cart-item");
const cartListItems = document.querySelector("#list-cart-items");
const btnCartClose = document.querySelector("#btn-close-cart");
const cartTotal = panelCart.querySelector("#cart-total");
const btnCheckOut = document.querySelector("#btn-checkout");

navCartIcon.addEventListener("pointerdown", (e) => {
  if (!cartVisible) loadCart();
  else closeCart();
});

function closeCart() {
  cartVisible = false;
  panelCart.classList.remove("translate-x-0");
  //main.classList.remove("blur-md", "pointer-events-none", "select-none");
  document.removeEventListener("click", handleDocClickCart);
  toggleBlurOverlay(false); // Remove blur when closing the cart
}
btnCartClose.addEventListener("pointerdown", () => closeCart());

function loadCart() {
  cartVisible = true;
  cartListItems.innerHTML = "";
  let subtotal = 0;
  // get items from cart
  if (CART.length === 0) {
    cartListItems.innerHTML =
      '<div class="mt-12 text-red-500 flex flex-col items-center gap-4"><p>Your cart is empty. Santa is sad.</p><img src="https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/icodemas/sad-santa.png"></div>';
  } else {
    //console.log(CART)
    CART.forEach((c) => {
      // get item details
      const product = PRODUCTS.find((p) => p.id == c.productId);

      // calculate price
      let unitPrice = product.price;
      if (product.discount) {
        unitPrice = calculateDiscountedPrice(product.price, product.discount);
      }
      let finalPrice = unitPrice * c.quantity;

      const clone = tplCartItem.content.cloneNode(true);
      clone.querySelector("[data-title]").innerText = product.name;
      clone.querySelector("[data-price]").innerText =
        formatAsDollarsAndCents(unitPrice);
      clone.querySelector("[data-quantity]").innerText = c.quantity;
      clone.querySelector("img").src = product.img;
      clone.querySelector("img").setAttribute("alt", product.name);
      // quantity buttons
      clone.querySelectorAll("[data-action]").forEach((btn) => {
        btn.addEventListener("pointerdown", () => {
          updateQuantity(c, btn.dataset.action);
        });
      });
      // btn - remove from cart
      clone
        .querySelector("[data-btn-delete]")
        .addEventListener("pointerdown", () => {
          removeProductFromCart(c.productId);

          updateCartIconCounter();
          loadCart();
          renderShopProducts();
        });
      cartListItems.append(clone);

      // running total
      subtotal += finalPrice;
    });
  }
  cartTotal.innerText = formatAsDollarsAndCents(subtotal);
  if (subtotal == 0) {
    // hide subtotal and button
    panelCart.querySelector("footer").classList.add("hidden");
  } else {
    panelCart.querySelector("footer").classList.remove("hidden");
  }

  // main.classList.add("blur-md", "pointer-events-none", "select-none")
  panelCart.classList.add("translate-x-0");
  toggleBlurOverlay(true);
  document.addEventListener("click", handleDocClickCart);
}

// function - add blurred overlay
function createBlurOverlay() {
  if (!document.querySelector(".blur-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "blur-overlay";
    document.body.appendChild(overlay);
  }
}

// function - remove blurred overlay
function removeBlurOverlay() {
  const overlay = document.querySelector(".blur-overlay");
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
}

// Function to toggle the blur overlay based on cart state
function toggleBlurOverlay(isBlur) {
  if (isBlur) {
    createBlurOverlay();
  } else {
    removeBlurOverlay();
  }
  // Adjust the z-index of the cart based on the blur state
  panelCart.style.zIndex = isBlur ? "1001" : "1000";
}

// CART - close if click outside
function handleDocClickCart(e) {
  // Check if the clicked element or its ancestors include the "filters-options" element
  const isClickInsideCart = e.target.closest("#panel-cart");
  // Check if the clicked element or its ancestors include the "open-cart-icon" element
  const isOpenCartIconClicked = e.target.closest("#nav-cart");

  if (!isClickInsideCart && !isOpenCartIconClicked) {
    closeCart();
  }
}

// CART - update quantity
function updateQuantity(cartItem, action) {
  if (action === "add") {
    // add 1 to cart quantitu
    // should probably check stock but I will leave that for later. -TO DO
    cartItem.quantity++;
  } else {
    // remove 1
    cartItem.quantity--;
    if (cartItem.quantity < 1) {
      // remove from cart
      removeProductFromCart(cartItem.productId);
      // need to update product list to remove product "remove from cart" button - TO DO
      //updateProductButton(btn, false)
      renderShopProducts();
    }
  }
  updateCartIconCounter();
  loadCart();
}

/************ END CART ***************/

/*************** DIALOG *****************/

// get all dialog buttons
const buttonsDialog = document.querySelectorAll("[data-dialog]");
buttonsDialog.forEach((btn) => {
  btn.addEventListener("pointerdown", (e) => {
    openDialog(btn.dataset.dialog);
  });
});

let currentDialog = null;

function openDialog(dialogID) {
  // Close the current dialog if there is one
  closeDialog();
  // wait for closedialog delay ebfore defining and opening the new dialog - this prevents us closing the wrong dialog
  setTimeout(() => {
    const elDialog = document.querySelector(`#dialog-${dialogID}`);
    const btnClose = elDialog.querySelector("[btn-close]");

    // show dialg
    elDialog.showModal();

    // dialog scale and fade in bg
    setTimeout(() => elDialog.classList.add("scale-100", "fadeUp"), 150);

    // buttton to close dialog
    btnClose.addEventListener("click", () => closeDialog());

    console.log(dialogID);
    switch (dialogID) {
      // special promo dialog
      case "promo":
        const btnConfirm = elDialog.querySelector("#btn-dialog-confirm");
        const dialogForm = elDialog.querySelector("#form-promo");
        const panelMessage = elDialog.querySelector("#panel-dialog-msg");
        const btnCloseMsg = panelMessage.querySelector("#btn-dialog-close");
        const btnCancel = elDialog.querySelector("#btn-dialog-cancel");

        btnCancel.addEventListener("pointerdown", () => closeDialog());
        btnCloseMsg.addEventListener("pointerdown", () => closeDialog());

        // reset form and message on close
        elDialog.addEventListener("close", (e) => {
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

        break;

      case "feedback":
        elDialog
          .querySelector("#btn-feedback")
          .addEventListener("pointerdown", () => {
            // get value of radion
            const val = getCheckedValue("rating");
            // define message
            const text = `<p class="w-72 p-8">Thanks for your feedback.<br>Santa will take into account that your rated the service as "<strong>${val}</strong>"</p>`;

            // define message element
            const elMsg = elDialog.querySelector("[data-msg]");

            // add message to DOM
            elMsg.innerHTML = text;

            // show message
            setTimeout(() => elMsg.classList.remove("scale-0"), 600);

            // hide messsage new dialog
            setTimeout(() => {
              elMsg.classList.add("scale-0");
              closeDialog();
            }, 4000);
          });
        break;
      case "order-complete":
        // show me the confetti!
        reloadConetti();

        break;

      case "gift-card":
        // TO FINISH
        const giftDisplayCurrent = document.querySelector("#current-gift-card");

        // update giftcard display on radio change
        const radioGiftCards = document.querySelectorAll(
          `input[name="gift-card`
        );
        radioGiftCards.forEach((radio) => {
          radio.addEventListener("change", () => {
            giftDisplayCurrent.innerText = `$${radio.dataset.value}`;
          });
        });

        // gift card nav "-", "+" buttons to rotate through gift card options
        document.querySelectorAll("[data-giftnav]").forEach((btn) => {
          btn.addEventListener("pointerdown", () => {
            const currentValue = navigateRadioButtons(
              btn.dataset.giftnav,
              "gift-card"
            );
            giftDisplayCurrent.innerText = `$${currentValue}`;
          });
        });

        elDialog
          .querySelector("#btn-gift-card-send")
          .addEventListener("pointerdown", (e) => {
            // get ID of radion
            const giftID = getCheckedValue("gift-card");
            // add to cart
            addProductToCart(giftID);

            // show message
            const text = `<p class="w-72 p-8">Your gift card for has been added to your cart.</p>`;

            // define message element
            const elMsg = elDialog.querySelector("[data-msg]");

            // add message to DOM
            elMsg.innerHTML = text;

            // show message
            setTimeout(() => elMsg.classList.remove("scale-0"), 300);

            // hide dialog
            // setTimeout(() => closeDialog(), 3000);
            // hide messsage new dialog
            setTimeout(() => elMsg.classList.add("scale-0"), 3000);
          });

        break;
    }

    currentDialog = elDialog;
  }, 152);
}

// DIALOG - close
function closeDialog() {
  //console.log("close dialog if open")
  // Check if there is a current open dialog
  if (currentDialog && currentDialog.close) {
    currentDialog.classList.remove("fadeUp", "scale-100");
    setTimeout(() => {
      //console.log("CLOSING: ", currentDialog);
      currentDialog.close();
      currentDialog = null;
    }, 150);
  }
}

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

/****************** CHAT BOX **********************/

const CHAT_USERS = [
  {
    id: 1,
    username: "You",
    avatar: "",
  },
  {
    id: 2,
    username: "Santa",
    avatar: "/images/iCodeMas/tiny_santa.png",
  },
];

const CHAT_MESSAGES = [
  {
    id: 1,
    parent_id: 0,
    user_id: 2,
    ts: "2023-12-13 09:31:23",
    msg: "Ho,Ho,Ho!",
  },
  {
    id: 2,
    parent_id: 1,
    user_id: 2,
    ts: "2023-12-13 09:31:29",
    msg: "What can I help you with?",
  },
  {
    id: 3,
    parent_id: 1,
    user_id: 1,
    ts: "2023-12-13 09:32:01",
    msg: "Hello Santa",
  },
  {
    id: 4,
    parent_id: 11,
    user_id: 1,
    ts: "2023-12-13 09:33:12",
    msg: "I'd like to know when you'll bring my gift?",
  },
];

// silly santa replies provided by ChatGPT
const santaReplies = [
  "Ho, ho, ho! Merry Christmas!",
  "Jingle all the way!",
  "Santa is on his way with gifts!",
  "Wishing you a joyful holiday season!",
  "Santa's workshop is bustling with activity!",
  "Remember to leave out some cookies and milk!",
  "Sending you warm wishes for a magical Christmas!",
  "Santa loves spreading joy and happiness!",
  "May your days be merry and bright!",
  "Ho-ho-ho! Have a holly, jolly Christmas!",
  "Santa has just added your favorite items to his online shopping cart!",
  "Jingle bells, jingle bells, check out the great deals in Santa's online store!",
  "Santa's online workshop is now open for holiday shopping!",
  "Ho, ho, ho! Enjoy exclusive online discounts from Santa's workshop!",
  "Santa's sleigh is equipped with high-speed internet for faster online deliveries!",
  "Shop online with Santa and sleigh your holiday shopping list!",
  "Santa's online elves are working around the clock to fulfill your orders!",
  "Treat yourself to some festive online shopping with Santa's special deals!",
  "Online sales alert! Santa's gift selection is now available for purchase!",
  "Santa's secret to stress-free shopping: Online sleigh-side delivery!",
];

// CHAT selectors
const chatListMessages = document.querySelector("#chat-list-messages");
const chatTpleMessage = document.querySelector("#tpl-chat-message");
const chatTplDate = document.querySelector("#tpl-chat-date");
const chatButtonOpen = document.querySelector("#btn-chat");
const chatBox = document.querySelector("#panel-chat");
const chatButtonClose = document.querySelector("#btn-chat-close");
const chatForm = document.querySelector("#chat-form");
const chatNewMessage = document.querySelector("#new-msg");

const today = new Date();
let chatCurrentUserID = 2;
let chatCurrentParentID = 1;
let chatLastUserID = chatCurrentUserID;
const chatReplyDelay = 1000; // delay until santa gets back to you with a silly reply

//// thumbnail hack (thanks marcinmalecki)
// overide the delays etc for the thumbnail generation
if (navigator.userAgent.includes("Headless")) {
  loadChatBox();
}

// get  user byt id
function findUserById(id) {
  return CHAT_USERS.find((x) => x.id === id);
}

// CHAT - group CHAT_MESSAGES by parent message and sort to cronological order
function groupCHAT_MESSAGESByUser(CHAT_MESSAGES, userId) {
  // get the messass int the correct orded
  const sortedCHAT_MESSAGES = sortByTimestamp(CHAT_MESSAGES);

  const initialMessage = sortedCHAT_MESSAGES.find(
    (message) => message.user_id === userId
  );
  if (!initialMessage) {
    console.error(`Initial message with user id: ${userId} not found.`);
    return [];
  }

  // Build the conversation thread starting with the initial message
  const createConversation = (parentId) => {
    const parentMessage = sortedCHAT_MESSAGES.find(
      (message) => message.id === parentId
    );
    if (!parentMessage) {
      return [];
    }
    // filter CHAT_MESSAGES by parentId
    const filteredCHAT_MESSAGES = sortedCHAT_MESSAGES.filter(
      (message) => message.parent_id === parentId
    );
    const conversationArray = filteredCHAT_MESSAGES.map((reply) =>
      createConversation(reply.id)
    );
    const replies = conversationArray.flat();
    /*
                const replies = sortedCHAT_MESSAGES
                    .filter(message => message.parent_id === parentId)
                    .map(reply => createConversation(reply.id))
                    .flat();
                    */

    return [parentMessage, ...replies];
  };
  const conversation = createConversation(initialMessage.id);
  return conversation;
}

// CHAT - load CHAT_MESSAGES for given user
function loadChatBox() {
  // get all CHAT_MESSAGES and their replies from this user
  const conversationThread = groupCHAT_MESSAGESByUser(
    CHAT_MESSAGES,
    chatCurrentUserID
  );

  // clear previous chat CHAT_MESSAGES
  chatListMessages.innerHTML = "";

  // get other user data (name & Avatar)
  let chatLastUserID = "";
  let previousDate = null;

  conversationThread.forEach((message, idx) => {
    if (idx === 0) {
      // define parent id for new replies to be added
      chatCurrentParentID = message.id;
    }
    const currentDate = message.ts.split(" ")[0]; // Extract date from timestamp
    if (currentDate !== previousDate) {
      // add date to DOM
      const cloneDate = chatTplDate.content.cloneNode(true);
      cloneDate.querySelector("div").innerText = formatLongDate(currentDate);
      chatListMessages.append(cloneDate);
      previousDate = currentDate;
    }
    // create message element and add to list
    renderMessage(message, chatLastUserID);

    // define last user ID so that we only show the other user avatar once per message group
    chatLastUserID = message.user_id;
  });
  chatListMessages.scrollTop = chatListMessages.scrollHeight;
  // define last parent id for next message
  // reveal newly loaded chatbox
  openChatBox();
}
let chatBoxOpen = false;

// promo button also loads chatbox
document
  .querySelector("#btn-promo-chat")
  .addEventListener("pointerdown", loadChatBox);

// CHAT button - load CHAT_MESSAGES and reveal chatbox
chatButtonOpen.addEventListener("pointerdown", () => {
  if (chatBoxOpen) {
    closeChatBox();
  } else {
    loadChatBox();
  }
});

// CHAT button - close CHAT_MESSAGES
chatButtonClose.addEventListener("click", closeChatBox);

// CHAT function -  open chatbox
function openChatBox() {
  chatBox.classList.remove("scale-0");
  chatButtonOpen.querySelector("#chat-open").classList.add("scale-0");
  chatButtonOpen.querySelector("#chat-close").classList.remove("scale-0");
  chatBoxOpen = true;
}
// CHAT function - close message windo
function closeChatBox() {
  chatBox.classList.add("scale-0");
  chatButtonOpen.querySelector("#chat-open").classList.remove("scale-0");
  chatButtonOpen.querySelector("#chat-close").classList.add("scale-0");
  chatBoxOpen = false;
}

// CHAT - render individual message contents
function renderMessage(message, chatLastUserID) {
  // get other user data (name & Avatar)
  const userData = findUserById(message.user_id);
  const userAvatar = userData.avatar;
  const userName = userData.username;

  // add message to DOM
  const clone = chatTpleMessage.content.cloneNode(true);
  const elArticle = clone.querySelector("article");
  const elImg = clone.querySelector("img");
  const elMsg = clone.querySelector("[msg-container]");

  if (message.user_id === 1) {
    // user typing
    // int this specific chatbox we ddon't show the avatar for the current user
    elImg.closest("div").classList.add("hidden");
    elArticle.classList.add("flex-row-reverse", "text-right");
    elMsg.classList.add("bg-green-50");
  } else {
    elMsg.classList.add("bg-red-50");
    if (message.user_id != chatLastUserID) {
      elImg.src = userAvatar;
      elImg.setAttribute("alt", userName);
    } else {
      // in this version we are only showing the user image once per message grouping
      elImg.remove();
    }
  }

  clone.querySelector("[msg-txt]").innerText = message.msg;
  clone.querySelector("time").innerText = formatTimestamp(message.ts);

  // add message to DOM
  chatListMessages.append(clone);

  // smooth scroll to latest message
  elArticle.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });

  setTimeout(() => elArticle.classList.remove("opacity-0"), 300);
}

// CHAT - form - add new message to chat array and chat box
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = chatNewMessage.value;
  const obj = {
    id: generateRandomId(),
    parent_id: chatCurrentParentID,
    ts: getCurrentDateTime(),
    user_id: 1,
    msg: `${msg}`,
  };
  // console.log(obj)
  // add new message to message array
  CHAT_MESSAGES.push(obj);

  // add new message to DOM
  renderMessage(obj, 1);

  // add random reply (this should really be an AI response based on the user message)
  const randomSantaReply =
    santaReplies[Math.floor(Math.random() * santaReplies.length)];
  const reply = {
    id: generateRandomId(),
    parent_id: chatCurrentParentID,
    ts: getCurrentDateTime(),
    user_id: 2,
    msg: `${randomSantaReply}`,
  };
  //console.log(reply)
  // add new reply to message array
  CHAT_MESSAGES.push(reply);
  // display reply after a short timeout
  setTimeout(() => renderMessage(reply, 1), chatReplyDelay);

  // clear input
  chatNewMessage.value = "";

  // reload CHAT_MESSAGES - this works but is not the smoothest solution
  //loadChatBox(chatCurrentUserID)
});

// UTILITY - sort by timestamp
function sortByTimestamp(jsonArray) {
  if (!Array.isArray(jsonArray)) {
    console.error("Invalid input. Please provide an array of objects.");
    return;
  }
  // Sorting the array of objects by the 'ts' property
  jsonArray.sort((a, b) => {
    const dateA = new Date(a.ts.replace(/-/g, "/")).getTime();
    const dateB = new Date(b.ts.replace(/-/g, "/")).getTime();
    return dateA - dateB;
  });
  return jsonArray;
}

// UTILTY - format date according to time passed
function formatTimestamp(timestamp) {
  const currentDate = new Date();
  const messageDate = new Date(timestamp);
  const timeDifference = currentDate - messageDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const options = { hour: "numeric", minute: "numeric", hour12: false };

  if (seconds < 60) {
    //return `${seconds} seconds ago`;
    return `${messageDate.toLocaleTimeString("en-US", options)}`;
  } else if (minutes < 60) {
    //return `${minutes} minutes ago`;
    return `${messageDate.toLocaleTimeString("en-US", options)}`;
  } else if (hours < 24) {
    //return `${hours} hours ago`;
    return `${messageDate.toLocaleTimeString("en-US", options)}`;
  } else if (days < 3) {
    return `${days} days ago`;
  } else {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return messageDate.toLocaleDateString(undefined, options);
  }
}

// UTILITY - random id
function generateRandomId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000000); // Adjust the range as needed
  return `${timestamp}_${random}`;
}

// UTILITY - current timestamp
function getCurrentDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// UTILITY  - return date as string
function formatLongDate(date) {
  const d = new Date(date);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return d.toLocaleDateString("en-US", options);
}

/****************** END CHAT BOX **********************/

/***************** SNOW *******************/
// adapted from here: https://www.cssscript.com/falling-snowflakes-pure/
/*
let snowflakesCount = 200; // Snowflake count, can be overwritten by attrs
let baseCSS = ``;


// set global attributes
if (typeof SNOWFLAKES_COUNT !== 'undefined') {
  snowflakesCount = SNOWFLAKES_COUNT;
}
if (typeof BASE_CSS !== 'undefined') {
  baseCSS = BASE_CSS;
}

let bodyHeightPx = null;
let pageHeightVh = null;

function setHeightVariables() {
  bodyHeightPx = document.body.offsetHeight;
  pageHeightVh = (100 * bodyHeightPx / window.innerHeight);
}

// get params set in snow div
function getSnowAttributes() {
  const snowWrapper = document.getElementById('snow');
  snowflakesCount = Number(
    snowWrapper?.dataset?.count || snowflakesCount
  );
}

// Creating snowflakes
function generateSnow(snowDensity = 200) {
  snowDensity -= 1;
  const snowWrapper = document.getElementById('snow');
  snowWrapper.innerHTML = '';
  for (let i = 0; i < snowDensity; i++) {
    let board = document.createElement('div');
    board.className = "snowflake";
    snowWrapper.appendChild(board);
  }
}

function getOrCreateCSSElement() {
  let cssElement = document.getElementById("psjs-css");
  if (cssElement) return cssElement;

  cssElement = document.createElement('style');
  cssElement.id = 'psjs-css';
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
    let randomOffset = Math.random() * 10 // vw;
    let randomXEnd = randomX + randomOffset;
    let randomXEndYoyo = randomX + (randomOffset / 2);
    let randomYoyoTime = getRandomArbitrary(0.3, 0.8);
    let randomYoyoY = randomYoyoTime * pageHeightVh; // vh
    let randomScale = Math.random();
    let fallDuration = randomIntRange(10, pageHeightVh / 10 * 3); // s
    let fallDelay = randomInt(pageHeightVh / 10 * 3) * -1; // s
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
    `
  }
  addCSS(rule);
}

// Load the rules and execute after the DOM loads
function createSnow() {
  setHeightVariables();
  getSnowAttributes();
  generateSnowCSS(snowflakesCount);
  generateSnow(snowflakesCount);
};

const snow = document.querySelector('#snow');

document.querySelector("#toggle-snow").addEventListener("change", (e) => {
    if (e.target.checked)  snow.classList.remove("hidden")
    else  snow.classList.add("hidden")
})

//window.addEventListener('resize', createSnow);
//createSnow()





document.querySelector("#toggle-snow").addEventListener("change", (e) => {
    if (e.target.checked)  createSnow();
    else  snow.classList.add("hidden")
})
*/

/********************* SVG onSCROLL ********************/

const motionPath = document.querySelector("#scroll-line path");
const follower = document.getElementById("santa-sleigh");

const pathLength = motionPath.getTotalLength();

// Function to update the image position based on the scroll and path
function updateImagePosition() {
  const scrollPercentage =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const offset = pathLength * scrollPercentage;
  const point = motionPath.getPointAtLength(offset);

  follower.style.transform = `translate(${point.x}px, ${point.y}px)`;
}

// Update image position on scroll
window.addEventListener("scroll", updateImagePosition);

// Update image position on page load
updateImagePosition();

// EHADER ALERT

const panelHeader = document.getElementById("header-principal");
const panelAlert = document.getElementById("panel-alert");

/******************** PAYMENT *******************/

// PAYMENT - credit card selectors
//const elDialog = document.querySelector("dialog")
const formPayment = document.querySelector("#form-payment");
const cardNumber = formPayment.querySelector("#credit-card");
const cardCVC = formPayment.querySelector("#credit-cvc");
const cardDate = formPayment.querySelector("#expiration-date");

// PAYMENT - Format credit card number
const formatNumber = (number) => {
  const numericOnly = number.replace(/\D/g, "");
  return numericOnly.replace(/(\d{4}(?=\d))/g, "$1 ");
};

// PAYMENT - Event listener for card bunber
cardNumber.addEventListener("input", () => {
  cardNumber.value = formatNumber(cardNumber.value);
});

// PAYMENT - Event listener for cardCVC
cardCVC.addEventListener("input", () => {
  cardCVC.value = formatNumber(cardCVC.value);
});
// PAYMENT - Event listener to allow only numbers
cardNumber.addEventListener("keypress", onlyNumberKey);

// PAYMENT - Event listener card date
cardDate.addEventListener("input", () => {
  let inputValue = cardDate.value;

  // Remove non-numeric and non-slash characters
  inputValue = inputValue.replace(/[^\d/]/g, "");

  // Ensure it's in the format "mm/yy"
  inputValue = inputValue.replace(
    /^(\d{0,2})\/?(\d{0,2})$/,
    (match, p1, p2) => {
      if (p1.length > 0) {
        const month = Math.min(parseInt(p1, 10), 12);
        const year = p2 ? `/${p2}` : "";
        return `${month}${year}`;
      } else {
        return "";
      }
    }
  );

  cardDate.value = inputValue;
});

// PAYMENT - handle payment method change
function handlePaymentMethodChange() {
  let selectedValue = getCheckedValue("payment-method");
  console.log(selectedValue);
  switch (selectedValue) {
    case "1":
      // card - enable fields
      cardNumber.disabled = false;
      cardDate.disabled = false;
      cardCVC.disabled = false;
      break;
    default:
      // clear values to ensure that no data is sent
      cardNumber.value = "";
      cardDate.value = "";
      cardCVC.value = "";
      // disable so that they won't be "required"
      cardNumber.disabled = true;
      cardDate.disabled = true;
      cardCVC.disabled = true;
      break;
  }
}

// PAYMENT - Add change event listener to payment method radio buttons
document
  .querySelectorAll('input[name="payment-method"]')
  .forEach((radio) =>
    radio.addEventListener("change", handlePaymentMethodChange)
  );

// PAYMENT - handler for form submit
formPayment.addEventListener("submit", (e) => {
  e.preventDefault();
  // const elDialog = document.querySelector("#dialog-checkout");
  // elDialog.setAttribute("open", "false")
  //elDialog.classList.remove("scale-100", "fadeUp");
  //setTimeout(() => elDialog.close(), 500);
  openDialog("order-complete");
});

/********************* END PAYMENT ***********************/

//****************** CONFETTI *********************/

const btnConfetti = document.querySelector("#btn-confetti-start");

// Start the confetti animation
let stopConfetti = "";
//loadConfetti();
//setTimeout(() => {
//stopConfetti.stop();
//}, 5000);
btnConfetti.addEventListener("click", reloadConetti);

const dialogCompletePurchase = document.querySelector("dialog");
// close button - will be diffferent on final challenge
/*
document.querySelector("#btn-confetti-close").addEventListener("click", () => {
    dialogCompletePurchase.classList.add("scale-y-[5%]");
    setTimeout(() => dialogCompletePurchase.classList.add("scale-x-[5%]"), 750)
    setTimeout(() => dialogCompletePurchase.classList.add("opacity-0"), 1500)
    stopConfetti.stop()

    // bring it back again
    setTimeout(() => {
        //formPayment.reset();
        dialogCompletePurchase.classList.remove("opacity-0", "scale-y-[5%]", "scale-x-[5%]")
        stopConfetti = loadConfetti();
    }, 3500)
})
*/

reloadConetti();

// COFETTI - reload
function reloadConetti() {
  //console.log("reload")
  stopConfetti = loadConfetti();
  setTimeout(() => {
    stopConfetti.stop();
  }, 500000);
}
// CONFETTI
/*
* confetti copied from here https://codepen.io/bananascript/pen/EyZeWm
Modified to add a stopConfetti function.
I also optimized the code slightly, swapping out the "var" for const or let.
I also updated the confetti container so that it doesn't cause overflow on the body
*/

function loadConfetti() {
  btnConfetti.classList.add("scale-0");

  // Globals
  let frame;
  const confetti = [];
  let timer;
  const random = Math.random;
  const cos = Math.cos;
  const sin = Math.sin;
  const PI = Math.PI;
  const PI2 = PI * 2;
  const particles = 10;
  const spread = 40;
  const sizeMin = 3;
  const sizeMax = 12 - sizeMin;
  const eccentricity = 10;
  const deviation = 100;
  const dxThetaMin = -0.1;
  const dxThetaMax = -dxThetaMin - dxThetaMin;
  const dyMin = 0.13;
  const dyMax = 0.18;
  const dThetaMin = 0.4;
  const dThetaMax = 0.7 - dThetaMin;
  const colorThemes = [
    () => {
      // christmas colors
      const colors = [
        { r: 255, g: 0, b: 0 }, // Red
        { r: 0, g: 255, b: 0 }, // Green
      ];
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];
      return color(selectedColor.r, selectedColor.g, selectedColor.b);
    },
  ];

  function color(r, g, b) {
    return `rgb(${r},${g},${b})`;
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return ((1 - cos(PI * t)) / 2) * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  const radius = 1 / eccentricity;
  const radius2 = radius + radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    let domain = [radius, 1 - radius];
    let measure = 1 - radius2;
    const spline = [0, 1];

    while (measure) {
      let dart = measure * random();
      let i, l, interval, a, b, c, d;

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i];
        b = domain[i + 1];
        interval = b - a;

        if (dart < measure + interval) {
          spline.push((dart += a - measure));
          break;
        }
        measure += interval;
      }

      c = dart - radius;
      d = dart + radius;

      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1;
        a = domain[l];
        b = domain[i];

        if (a >= c && a < d) {
          if (b > d) {
            domain[l] = d;
          } else {
            domain.splice(l, 2);
          }
        } else if (a < c && b > c) {
          if (b <= d) {
            domain[i] = c;
          } else {
            domain.splice(i, 0, c, d);
          }
        }
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        measure += domain[i + 1] - domain[i];
      }
    }

    return spline.sort();
  }

  // Create the overarching container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.id = "confetti";
  container.style.inset = "0";
  container.style.pointerEvents = "none";
  container.style.overflow = "hidden";

  container.style.isolation = "isolate";
  container.style.zIndex = "999999";

  // Confetto constructor
  class Confetto {
    constructor(theme) {
      this.frame = 0;
      this.outer = document.createElement("div");
      this.inner = document.createElement("div");
      this.outer.appendChild(this.inner);

      const outerStyle = this.outer.style;
      const innerStyle = this.inner.style;
      outerStyle.position = "absolute";
      outerStyle.width = `${sizeMin + sizeMax * random()}px`;
      outerStyle.height = `${sizeMin + sizeMax * random()}px`;
      innerStyle.width = "100%";
      innerStyle.height = "100%";
      // innerStyle.borderRadius = '50%';
      innerStyle.backgroundColor = theme();

      outerStyle.perspective = "50px";
      outerStyle.transform = `rotate(${360 * random()}deg)`;
      this.axis = `rotate3D(${cos(360 * random())},${cos(360 * random())},0,`;
      this.theta = 360 * random();
      this.dTheta = dThetaMin + dThetaMax * random();
      innerStyle.transform = `${this.axis}${this.theta}deg)`;

      this.x = window.innerWidth * random();
      this.y = -deviation;
      this.dx = sin(dxThetaMin + dxThetaMax * random());
      this.dy = dyMin + dyMax * random();
      outerStyle.left = `${this.x}px`;
      outerStyle.top = `${this.y}px`;

      // Create the periodic spline
      this.splineX = createPoisson();
      this.splineY = [];
      let l;
      for (let i = 1, length = this.splineX.length - 1; i < length; ++i) {
        l = i;
        this.splineY[i] = deviation * random();
      }
      this.splineY[0] = this.splineY[l] = deviation * random();

      this.update = function (height, delta) {
        this.frame += delta;
        this.x += this.dx * delta;
        this.y += this.dy * delta;

        let phi = (this.frame % 7777) / 7777;
        let i = 0,
          j = 1;

        while (phi >= this.splineX[j]) {
          i = j++;
        }

        let phiModifier =
          (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i]);
        let rho = interpolation(this.splineY[i], this.splineY[j], phiModifier);

        phi *= PI2;

        outerStyle.left = `${this.x + rho * cos(phi)}px`;
        outerStyle.top = `${this.y + rho * sin(phi)}px`;
        innerStyle.transform = `${this.axis}${this.theta}deg)`;
        return this.y > height + deviation;
      };

      this.stop = function () {
        container.removeChild(this.outer);
        const index = confetti.indexOf(this);
        if (index !== -1) {
          confetti.splice(index, 1);
        }
      };
    }
  }

  function poof() {
    if (!frame) {
      document.body.appendChild(container);

      const theme = colorThemes[0];
      (function addConfetto() {
        const confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);

      let prev = undefined;
      function loop(timestamp) {
        const delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        const height = window.innerHeight;

        for (let i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length) {
          frame = requestAnimationFrame(loop);
        } else {
          document.body.removeChild(container);
          frame = undefined;
        }
      }

      frame = requestAnimationFrame(loop);
    }
  }

  poof();

  return {
    stop: function () {
      clearTimeout(timer); // Clear the timer to stop adding new confetti
      btnConfetti.classList.remove("scale-0");
    },
  };

  return {
    stop: function () {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    },
  };
}

//****************** END CONFETTI *********************/

// Function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      panelHeader.style.top = "0";
    } else {
      panelHeader.style.top = "2rem";
    }
  });
}

// Set up the Intersection Observer
var observer = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: 0,
});

// Observe the alert panel - when out of view update the header "top" position
observer.observe(panelAlert);

// utility - get checked radio button value
function getCheckedValue(radioName) {
  var radios = document.getElementsByName(`${radioName}`);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // console.log("Checked value:", radios[i].value);
      return radios[i].value;
    }
  }

  //console.log("No radio button checked");
  return null; // or whatever default value you want
}

// utility - nav through radio buttons series. Returns current value
function navigateRadioButtons(direction, radioName) {
  const radioButtons = document.querySelectorAll(`input[name="${radioName}"]`);
  let currentIndex = -1;

  // Find the index of the currently checked radio button
  radioButtons.forEach((radioButton, index) => {
    if (radioButton.checked) {
      currentIndex = index;
    }
  });

  // Update the index based on the navigation direction
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % radioButtons.length;
  } else if (direction === "prev") {
    currentIndex =
      (currentIndex - 1 + radioButtons.length) % radioButtons.length;
  }

  // Check the radio button at the new index
  radioButtons[currentIndex].checked = true;

  // Return current value
  return radioButtons[currentIndex].value;
}

// UTILITY - prevent link clicks (only if #)
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") === "#") {
      e.preventDefault();
    }
  });
});

// Utility - numbers only
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    return false;
  }
  return true;
}
