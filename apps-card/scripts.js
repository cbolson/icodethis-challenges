const apps = [
  {
    id: 1,
    name: "iCodethis",
    included: true,
    img: `https://icodethis.com/logos/small-dark.svg`,
  },
  {
    id: 2,
    name: "Slack",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/slack.png`,
  },
  {
    id: 3,
    name: "Trelio",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/trelio.png`,
  },
  {
    id: 4,
    name: "Jira",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/jira.png`,
  },
  {
    id: 5,
    name: "Dropbox",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/dropbox.png`,
  },
  {
    name: "Guest",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/guest.png`,
  },
  {
    id: 6,
    name: "Kayak",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/kayak.png`,
  },
  {
    id: 7,
    name: "Testlodge",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/testlodge.png`,
  },
  {
    id: 8,
    name: "TikTok",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/tiktok.png`,
  },
  {
    id: 9,
    name: "Maps",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/google-maps.png`,
  },
  {
    id: 10,
    name: "Nextdoor",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/nextdoor.png`,
  },
  {
    id: 11,
    name: "Duolingo",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/duolingo.png`,
  },
  {
    id: 12,
    name: "La Tour",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/latour.png`,
  },
  {
    id: 14,
    name: "Deliveroo",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/deliveroo.png`,
  },
  {
    id: 15,
    name: "Vine",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/vine.png`,
  },
  {
    id: 16,
    name: "Shazam",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/shazam.png`,
  },
  {
    name: "Airbnb",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/airbnb.png`,
  },
  {
    id: 17,
    name: "Twitch",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/twitch.png`,
  },
  {
    id: 18,
    name: "Pando",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/pando-health.png`,
  },
];

const appsList = document.querySelector("#apps-list");
const tplAApp = document.querySelector("#template-app");
function renderUserApps() {
  appsList.innerHTML = "";
  apps.forEach(({ included, name, img }) => {
    if (included) {
      const item = tplAApp.content.cloneNode(true);
      item.querySelector("img").src = img;
      item.querySelector("p").innerText = name;
      appsList.append(item);
    }
  });
}

const btnAddApp = document.querySelector("#btn-add");
const apsAdd = document.querySelector("#more-apps");
const apsAddList = document.querySelector("#more-apps-list");

btnAddApp.addEventListener("click", () => {
  apsAddList.innerHTML = "";
  // load apps into list - ONLY NON selected ones
  apps.forEach(({ id, included, img, name }) => {
    if (!included) {
      const item = tplAApp.content.cloneNode(true);
      const btn = item.querySelector("button");
      item.querySelector("img").src = img;
      item.querySelector("p").innerText = name;
      // add to user apps list
      btn.addEventListener("click", () => {
        addAppToUserList(id);
        btn.style.opacity = "0.2";
        btn.style.scale = "0.8";
      });
      apsAddList.append(item);
    }
  });
  // show apps
  apsAdd.style.transform = "translate(0)";
});

document.querySelector("#btn-close").addEventListener("click", () => {
  apsAdd.style.transform = "translate(0,100%)";
});

function addAppToUserList(id) {
  const app = apps.find((x) => x.id == id);
  app.included = true;
  renderUserApps();
}
// load user apps
renderUserApps();
