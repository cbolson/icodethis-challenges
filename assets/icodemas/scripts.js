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

const PRODUCTS = [
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
  },
];

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
const navCart = document.querySelector("#nav-cart");
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
      displayFeatured(a);
    });
  });
}
// FEATURED - display featured product item when clicked
function displayFeatured(item) {
  displayProductDetails(panelFeaturedProduct, item);
}

// FEATURED - show product details
function displayProductDetails(dest, item) {
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
displayFeatured(PRODUCTS[0]);

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

    currProductsArr.forEach((a) => {
      const clone = tplProduct.content.cloneNode(true);
      const product = clone.querySelector("article");
      const btn = product.querySelector("button");
      const img = product.querySelector("img");
      const elProductImg = product.querySelector(".product-img");
      const elBanner = product.querySelector("[data-banner]");
      const elPrice = product.querySelector("[data-price]");
      const elPriceOrig = product.querySelector("[data-price-orig]");

      img.src = a.img;
      img.setAttribute("alt", a.name);
      clone.querySelector("[data-title]").innerText = a.name;

      if (a.recent) {
        elProductImg.setAttribute("label", "new");
        product.classList.add("new");
      }
      if (a.discount) {
        elProductImg.setAttribute("label", `${a.discount}%`);
        product.classList.add("offer");
      }
      // check if in cart
      if (isProductInCart(a.id)) {
        // product is in cart - change button text
        updateProductButton(btn, true);
      }
      if (a.stock < 1) {
        img.classList.add("opacity-30");
        btn.remove();
        elBanner.innerText = `Sold Out`;
        elBanner.classList.add("-rotate-12", "!bottom-10");
        elBanner.classList.remove("hidden");
      } else if (a.stock < 5) {
        // img.classList.add("opacity-50")
        elBanner.innerText = `Only ${a.stock} left!`;
        elBanner.classList.remove("hidden");
        //elBanner.classList.add("animate-pulse")
      } else if (a.msg) {
        // img.classList.add("opacity-50")
        elBanner.innerText = a.msg;
        elBanner.classList.remove("hidden");
        //elBanner.classList.add("animate-pulse")
      }

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
  });
}

//document.querySelectorAll("#filter-options input").forEach(el => el.addEventListener("change", updateFilteredResults))

// FILTER - update filtered results based on selected filters
function updateFilteredResults() {
  //console.log("asdsa");
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
  console.log("as");
  // display filtered results
  renderShopProducts();
}

const elFilters = document.querySelector("#filters");
const btnFiltersClear = document.querySelector("#btn-filter-clear");
// FILTER - clear all button
btnFiltersClear.addEventListener("click", clearAllFilters);

// FILTER - clear all filters
function clearAllFilters() {
  elFilters.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
  // reset current products array to full list
  currProductsArr = PRODUCTS;
  // Update filtered results
  renderShopProducts();
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
  document.querySelector(`#panel-shop`).scrollIntoView({ behavior: "smooth" });
  renderShopProducts();
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

/************** END SHOP ****************/

/**************** CART *****************/
// CART - add a product
function addProductToCart(productId) {
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
  navCart.classList.add("after:scale-0");
  const totalItems = getTotalItemsInCart();
  navCart.setAttribute("data-num", totalItems);
  setTimeout(() => {
    if (totalItems > 0) navCart.classList.remove("after:scale-0");
  }, 200);
}

/****************** PANEL CART ***************/
let cartVisible = false;
const tplCartItem = document.querySelector("#tpl-cart-item");
const cartListItems = document.querySelector("#list-cart-items");
const btnCartClose = document.querySelector("#btn-close-cart");
const cartTotal = panelCart.querySelector("#cart-total");

navCart.addEventListener("pointerdown", (e) => {
  if (!cartVisible) loadCart();
  else closeCart();
});
function closeCart() {
  cartVisible = false;
  panelCart.classList.remove("translate-x-0");
  main.classList.remove("blur-md", "pointer-events-none", "select-none");
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
  main.classList.add("blur-md", "pointer-events-none", "select-none");
  panelCart.classList.add("translate-x-0");
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
  btn.addEventListener("pointerdown", () => {
    // get dialog ID
    const dialogID = btn.dataset.dialog;

    const elDialog = document.querySelector(`#dialog-${dialogID}`);
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
            setTimeout(() => elMsg.classList.add("scale-0"), 3500);
          });
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
            giftDisplayCurrent.innerText = `$${radio.value}`;
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
          .addEventListener("pointerdown", () => {
            // get value of radion
            const val = getCheckedValue("gift-card");
            // add value to cart - TO DO IN FINAL CHALLENGE

            // show message
            const text = `<p class="w-72 p-8">Your gift card for <strong class="text-2xl">$${val}</strong> has been added to your cart.</p>`;

            // define message element
            const elMsg = elDialog.querySelector("[data-msg]");

            // add message to DOM
            elMsg.innerHTML = text;

            // ADD TO CARD - TO DO
            console.log("NEED TO ADD THIS TO THE CART..... TO DO");

            // show message
            setTimeout(() => elMsg.classList.remove("scale-0"), 600);

            // hide messsage new dialog
            setTimeout(() => elMsg.classList.add("scale-0"), 3500);
          });

        break;
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
  loadCHAT_MESSAGES();
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
function loadCHAT_MESSAGES() {
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
// CHAT button - load CHAT_MESSAGES and reveal chatbox
chatButtonOpen.addEventListener("pointerdown", () => {
  if (chatBoxOpen) {
    closeChatBox();
  } else {
    loadCHAT_MESSAGES();
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
  //loadCHAT_MESSAGES(chatCurrentUserID)
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
//createSnow()

document.querySelector("#toggle-snow").addEventListener("change", (e) => {
  if (e.target.checked) createSnow();
  else snow.classList.add("hidden");
});

/********************* SVG onSCROLL ********************/
const path = document.querySelector(".path");
const circle = document.querySelector("#sleigh-amimate");

let pathPosition = path.getBoundingClientRect();
let documentPosition = document.body.getBoundingClientRect();
const pathTotalLength = path.getTotalLength();

function positionElements() {
  // SVG passes center of screen
  const relativePageOffset =
    -pathPosition.top + (window.pageYOffset + window.innerHeight * 0.5);

  const pointPercentage = relativePageOffset / pathPosition.height;
  const pointOnPath = pointPercentage * pathTotalLength;
  const pathPoint = path.getPointAtLength(pointOnPath);

  circle.style.transform = `translate(
			${pathPosition.left + pathPoint.x}px,
			${pathPosition.top + pathPoint.y}px
		)`;
}

window.addEventListener("scroll", () => {
  positionElements();
});

window.addEventListener("resize", () => {
  pathPosition = path.getBoundingClientRect();
  documentPosition = document.body.getBoundingClientRect();

  positionElements();
});

positionElements();

const panelHeader = document.getElementById("header-principal");
const panelAlert = document.getElementById("panel-alert");

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
