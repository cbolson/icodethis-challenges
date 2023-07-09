// API GOT
const URL_API = "https://thronesapi.com/api/v2/Characters";
let characters = [];
let currentPlayerID = 11;

// define default selected chars for players
const players = [
  {
    id: 3,
    targets: [
      {
        id: 9,
        done: true,
      },
      {
        id: 6,
        done: false,
      },
      {
        id: 2,
        done: false,
      },
      {
        id: 4,
        done: true,
      },
      {
        id: 11,
        done: true,
      },
    ],
  },
  {
    id: 11,
    targets: [
      {
        id: 3,
        done: true,
      },
      {
        id: 14,
        done: true,
      },
      {
        id: 13,
        done: false,
      },
    ],
  },
  {
    id: 1,
    targets: [
      {
        id: 3,
        done: false,
      },
      {
        id: 7,
        done: true,
      },
      {
        id: 11,
        done: false,
      },
    ],
  },
];
const playerImgLogin = document.querySelector("[player-img-login]");
const playerNameLogin = document.querySelector("[player-name-login]");
const playerImg = document.querySelector("[player-img]");
const playerName = document.querySelector("[player-name]");
const playerFamily = document.querySelector("[player-family]");
const playerTargets = document.querySelector("#player-targets");
const tplItem = document.querySelector("#tpl-character");
const listCharacters = document.querySelector("#list-characters");

function renderPlayerData() {
  const currentPlayerData = getCurrentPlayerData(currentPlayerID);

  //  get current player details
  const currentPlayerDetails = getCharDetails(currentPlayerID);

  // avatar
  playerImgLogin.src = currentPlayerDetails.imageUrl;
  playerImg.src = currentPlayerDetails.imageUrl;

  // name
  playerNameLogin.innerText = currentPlayerDetails.firstName;
  playerName.innerText = currentPlayerDetails.firstName;
  playerFamily.innerText = currentPlayerDetails.family;

  loadPlayerTargets(currentPlayerData.targets);
}

function loadPlayerTargets(targets) {
  playerTargets.innerHTML = "";

  /// targets
  let targetsDone = 0;
  targets.forEach((target) => {
    // add character
    addCharacter(target);
    if (target.done !== false) targetsDone++;
  });

  // calculate percent done
  const total = targets.length;
  //  10/40 × 100
  const percentDone = (targetsDone / total) * 100;

  document
    .querySelector("#circle-completed")
    .setAttribute("stroke-dasharray", `${percentDone}, 100`);
  document.querySelector("[targets-done]").innerText = targetsDone;
}

function addCharacter({ id, done }) {
  // get char data
  const char = characters.find((x) => x.id == id);
  const item = tplItem.content.cloneNode(true);
  item.querySelector("label").setAttribute("for", `player-${id}`);
  item.querySelector("[data-target-name]").innerText = char.fullName;
  item.querySelector("[data-target-family]").innerText = char.family;
  item.querySelector("img").src = char.imageUrl;
  const chk = item.querySelector("input");
  chk.setAttribute("id", `player-${id}`);
  chk.value = id;
  if (done) chk.setAttribute("checked", true);
  // add checbox event
  chk.addEventListener("change", () => {
    updatePlayerTargets(chk);
  });
  playerTargets.append(item);
}

function updatePlayerTargets(chk) {
  // console.log(chk);

  // current player data
  const currentPlayerData = getCurrentPlayerData(currentPlayerID);
  // current player target
  const char = currentPlayerData.targets.find((x) => x.id == chk.value);
  // update char done state
  char.done = chk.checked ? true : false;

  // reload player targets and stats
  loadPlayerTargets(currentPlayerData.targets);

  // set total targets
}

// list all characters
function listAlChars() {
  listCharacters.innerHTML = "";
  // current player data
  const playerTargets = getCurrentPlayerTargets(currentPlayerID);

  // Loop through each result and append the data.
  characters.map(({ id, fullName, family, image }) => {
    const char = characters.find((x) => x.id == id);

    // don't include current player
    if (id == currentPlayerID) return;

    // check char isn't already in current player list - TO DO
    if (playerTargets.find((x) => x.id == id)) return;

    const item = tplItem.content.cloneNode(true);
    item.querySelector("label").setAttribute("for", `target-${id}`);
    item.querySelector("[data-target-name]").innerText = char.fullName;
    item.querySelector("[data-target-family]").innerText = char.family;
    item.querySelector("img").src = char.imageUrl;
    const chk = item.querySelector("input");
    chk.setAttribute("id", `target-${id}`);
    chk.value = id;
    // add checbox event
    chk.addEventListener("change", () => {
      addPlayerTarget(chk);
    });
    listCharacters.append(item);
  });
}

// get player api details
function getCharDetails(id) {
  return (currentPlayerDetails = characters.find((x) => x.id == id));
}
// get current player base data
function getCurrentPlayerData(id) {
  return players.find((x) => x.id == id);
}
// get current player targets
function getCurrentPlayerTargets(id) {
  return getCurrentPlayerData(id).targets;
}

function addPlayerTarget(chk) {
  // current player tragets
  const playerTargets = getCurrentPlayerTargets(currentPlayerID);

  // add or remove player
  if (chk.checked) {
    // add to current player targets
    playerTargets.push({ id: chk.value, done: false });
  } else {
    // remove from current player targets (note this list only includes targets NOT already included)
    playerTargets.forEach((target, key) => {
      if (target.id === chk.value) {
        delete playerTargets[key];
      }
    });
  }
  // reload player targets and stats
  loadPlayerTargets(playerTargets);
}

// ACCOUNTS
const accounts = document.querySelector("#accounts");
const btnAccounts = document.querySelector("#bt-account");
const btnAccountsIcon = btnAccounts.querySelector("span");
const tplAccounts = document.querySelector("#tpl-accounts");
const btbCloseAccounts = accounts.querySelector("#btn-close-accounts");

// load list of cuurent players
function loadPlayers() {
  // list of current players
  players.forEach((player) => {
    const playerID = player.id;

    const playerDetails = characters.find((x) => x.id == playerID);
    const item = tplAccounts.content.cloneNode(true);
    item.querySelector("[account-name]").innerText = playerDetails.fullName;
    item.querySelector("img").src = playerDetails.imageUrl;

    // add button event
    item.querySelector("button").addEventListener("click", () => {
      currentPlayerID = playerDetails.id;
      // load new user data
      renderPlayerData();
      closeAccountsList();
    });
    accounts.append(item);
  });
}

let accountsVisible = false;
btnAccounts.addEventListener("click", () => {
  if (!accountsVisible) {
    btnAccountsIcon.style.transform = "rotate(180deg)";
    accounts.style.transform = "translateY(0)";
    accountsVisible = true;
  } else {
    closeAccountsList();
  }
});
btbCloseAccounts.addEventListener("click", () => closeAccountsList());

function closeAccountsList() {
  btnAccountsIcon.style.transform = "rotate(0)";
  accounts.style.transform = "translateY(-120%)";
  accountsVisible = false;
}

const btnLogin = document.querySelector("#btn-login");

document
  .querySelector("input[type=password]")
  .addEventListener("keyup", (event) => {
    if (event.target.value.length > 3) btnLogin.disabled = false;
    else btnLogin.disabled = true;
  });
// nav buttons
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  showPanel("profile");
});
document.querySelector("#btn-logout").addEventListener("click", (event) => {
  showPanel("login");
});

document.querySelector("#btn-profile").addEventListener("click", (event) => {
  showPanel("profile");
});

document.querySelector("#btn-targets").addEventListener("click", (event) => {
  showPanel("targets");
});

document
  .querySelector("#btn-targets-list")
  .addEventListener("click", (event) => {
    showPanel("targets");
  });

document
  .querySelector("#btn-targets-done")
  .addEventListener("click", (event) => {
    showPanel("targets");
  });
document
  .querySelector("#btn-new-targets")
  .addEventListener("click", (event) => {
    showPanel("characters");
  });
function showPanel(panelID) {
  //console.log(panelID);
  const panel = document.querySelector(`#panel-${panelID}`);

  panel.scrollIntoView({ behavior: "smooth", inline: "start" });
}

// retrieve characters from api
(async function getData() {
  try {
    // We are using fetch to get the response
    const response = await fetch(URL_API);
    characters = await response.json();
    //console.log(characters);
    //
    renderPlayerData();
    listAlChars();

    loadPlayers();
  } catch (error) {
    console.log(error);
  }
})();

/*

// TEMP FUNCTION WHILST IN DEV
function getDataTEmp() {
    // temp data without calling api
    const tmpData = [
        {
            "id": 0,
            "firstName": "Daenerys",
            "lastName": "Targaryen",
            "fullName": "Daenerys Targaryen",
            "title": "Mother of Dragons",
            "family": "House Targaryen",
            "image": "daenerys.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
        },
        {
            "id": 1,
            "firstName": "Samwell",
            "lastName": "Tarly",
            "fullName": "Samwell Tarly",
            "title": "Maester",
            "family": "House Tarly",
            "image": "sam.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/sam.jpg"
        },
        {
            "id": 2,
            "firstName": "Jon",
            "lastName": "Snow",
            "fullName": "Jon Snow",
            "title": "King of the North",
            "family": "House Stark",
            "image": "jon-snow.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
        },
        {
            "id": 3,
            "firstName": "Arya",
            "lastName": "Stark",
            "fullName": "Arya Stark",
            "title": "No One",
            "family": "House Stark",
            "image": "arya-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/arya-stark.jpg"
        },
        {
            "id": 4,
            "firstName": "Sansa",
            "lastName": "Stark",
            "fullName": "Sansa Stark",
            "title": "Lady of Winterfell",
            "family": "House Stark",
            "image": "sansa-stark.jpeg",
            "imageUrl": "https://thronesapi.com/assets/images/sansa-stark.jpeg"
        },
        {
            "id": 5,
            "firstName": "Brandon",
            "lastName": "Stark",
            "fullName": "Brandon Stark",
            "title": "Lord of Winterfell",
            "family": "House Stark",
            "image": "bran-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/bran-stark.jpg"
        },
        {
            "id": 6,
            "firstName": "Ned",
            "lastName": "Stark",
            "fullName": "Ned Stark",
            "title": "Lord of Winterfell",
            "family": "House Stark",
            "image": "ned-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/ned-stark.jpg"
        },
        {
            "id": 7,
            "firstName": "Robert",
            "lastName": "Baratheon",
            "fullName": "Robert Baratheon",
            "title": "Lord of the Seven Kingdoms",
            "family": "House Baratheon",
            "image": "robert-baratheon.jpeg",
            "imageUrl": "https://thronesapi.com/assets/images/robert-baratheon.jpeg"
        },
        {
            "id": 8,
            "firstName": "Jamie",
            "lastName": "Lannister",
            "fullName": "Jamie Lannister",
            "title": "Lord Commander of the Kingsguard",
            "family": "House Lannister",
            "image": "jaime-lannister.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg"
        },
        {
            "id": 9,
            "firstName": "Cersei",
            "lastName": "Lannister",
            "fullName": "Cersei Lannister",
            "title": "Lady of Casterly Rock",
            "family": "House Lannister",
            "image": "cersei.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg"
        },
        {
            "id": 10,
            "firstName": "Cateyln",
            "lastName": "Stark",
            "fullName": "Catelyn Stark",
            "title": "Lady of Winterfell",
            "family": "House Stark",
            "image": "catelyn-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/catelyn-stark.jpg"
        },
        {
            "id": 11,
            "firstName": "Robb",
            "lastName": "Stark",
            "fullName": "Rob Stark",
            "title": "Lord of Winterfell",
            "family": "House Stark",
            "image": "robb-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/robb-stark.jpg"
        },
        {
            "id": 12,
            "firstName": "Theon",
            "lastName": "Greyjoy",
            "fullName": "Theon Greyjoy",
            "title": "Captain of Sea Bitch",
            "family": "House Greyjoy",
            "image": "theon.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/theon.jpg"
        },
        {
            "id": 13,
            "firstName": "Joffrey",
            "lastName": "Baratheon",
            "fullName": "Joffrey Baratheon",
            "title": "Lord of the Seven Kingdoms, Protector of the Realm",
            "family": "House Lanister",
            "image": "joffrey.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/joffrey.jpg"
        },
        {
            "id": 14,
            "firstName": "Tyrion",
            "lastName": "Lannister",
            "fullName": "Tyrion Lannister",
            "title": "Hand of the Queen",
            "family": "House Lanister",
            "image": "tyrion-lannister.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/tyrion-lannister.jpg"
        },
        {
            "id": 15,
            "firstName": "Sandor",
            "lastName": "Clegane",
            "fullName": "The Hound",
            "title": "The Hound",
            "family": "House Clegane",
            "image": "the-hound.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/the-hound.jpg"
        },
        {
            "id": 16,
            "firstName": "Petyr",
            "lastName": "Baelish",
            "fullName": "Petyr Baelish",
            "title": "Littlefinger",
            "family": "House Baelish",
            "image": "littlefinger.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/littlefinger.jpg"
        }
    ]
    characters = tmpData;
    renderPlayerData();
    listAlChars();
}
*/
