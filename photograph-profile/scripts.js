const listImages = document.querySelector("#list-images");
const tplItem = document.querySelector("#tpl-item");
const imgTypeTitle = document.querySelector("#img-type-title");
const imgTypeTotal = document.querySelector("#img-type-total");
const userAlbums = document.querySelector("#user-albums");
const userFollowers = document.querySelector("#user-followers");
const userFollowing = document.querySelector("#user-following");
const buttonsAlbumNav = document.querySelectorAll("[album-nav]");
const btnFollow = document.querySelector("#btn-follow");
const btnInfo = document.querySelector("#btn-info");
const panelInfo = document.querySelector("#panel-info");

// array of image types
const ALBUMBS = [
  {
    title: "Portraits",
    images: PORTRAITS,
  },
  {
    title: "Landscapes",
    images: LANDSCAPES,
  },
  {
    title: "Cities",
    images: CITIES,
  },
  {
    title: "Animals",
    images: ANIMALS,
  },
  {
    title: "Flowers",
    images: FLOWERS,
  },
];
const userData = {
  followers: 231,
  following: 23,
};

// definine
let currentAlbum = ALBUMBS[0];
let following = false;

function displayUserData() {
  userFollowers.innerText = userData.followers;
  userFollowing.innerText = userData.following;
}

function loadCurrentAlbum() {
  imgTypeTitle.classList.add("-translate-y-full");
  imgTypeTotal.classList.add("translate-y-full");

  setTimeout(() => {
    imgTypeTitle.innerText = currentAlbum.title;
    imgTypeTotal.innerText = `${currentAlbum.images.length} photos`;
    userAlbums.innerText = ALBUMBS.length;
    imgTypeTitle.classList.remove("-translate-y-full");
    imgTypeTotal.classList.remove("translate-y-full");
  }, 700);

  renderItems();
}

// add results to page
function renderItems() {
  listImages.querySelectorAll("img").forEach((img) => {
    img.classList.add("scale-0");
  });
  setTimeout(() => {
    listImages.innerHTML = "";

    if (currentAlbum.images.length < 1) {
      listResults.innerHTML = '<p class="text-xl">No results</p>';
    } else {
      let delay = 100;
      // let counter = 1;

      currentAlbum.images.forEach((photo) => {
        // let colSpan = 2;
        // if (counter % 6 === 0) colSpan = 6;
        // else if (counter % 4 === 0 || counter % 5 === 0 ) colSpan = 3;

        const item = tplItem.content.cloneNode(true);
        const img = item.querySelector("img");
        img.src = photo.src.small;
        img.setAttribute("alt", photo.alt);
        // img.classList.add(`col-span-${colSpan}`);
        listImages.append(item);

        delay = delay + 50;
        setTimeout(() => img.classList.remove("scale-0"), delay);

        //  counter++;
      });
    }
  }, 300);
}

// display general user data
displayUserData();

// load images
loadCurrentAlbum();

buttonsAlbumNav.forEach((btn) => {
  btn.addEventListener("click", () => {
    const direction = btn.getAttribute("album-nav");
    albumNav(direction);
  });
});

// get index of current array item
function currentIndex() {
  return ALBUMBS.indexOf(currentAlbum);
}

function albumNav(direction) {
  let index = currentIndex();
  let newItem;
  if (direction === "next") {
    newItem = index < ALBUMBS.length - 1 ? index + 1 : 0;
  } else {
    newItem = index > 0 ? index - 1 : ALBUMBS.length - 1;
  }
  currentAlbum = ALBUMBS[newItem];
  loadCurrentAlbum();
}

// toggle info panel
let infoVisible = false;
btnInfo.addEventListener("click", () => {
  panelInfo.classList.toggle("-translate-y-full");
  btnInfo.innerText = !infoVisible ? "close" : "more_horiz";
  infoVisible = infoVisible ? false : true;
});

// following
btnFollow.addEventListener("click", () => {
  if (!following) {
    btnFollow.classList.add("following");
    btnFollow.querySelector("p").innerText = "Unfollow";
    btnFollow.querySelector("span").innerText = "group_remove";
    userData.followers++;
  } else {
    btnFollow.classList.remove("following");
    btnFollow.querySelector("p").innerText = "Follow";
    btnFollow.querySelector("span").innerText = "group_add";
    userData.followers--;
  }
  userFollowers.innerText = userData.followers;

  following = following ? false : true;
});

/*
// UTILITY - get random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
*/
