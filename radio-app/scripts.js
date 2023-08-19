const btnMenu = document.querySelector("#btn-menu");
const btnsNav = document.querySelectorAll("[data-nav]");

const stationIcon = document.querySelector("#station-icon");
const stationName = document.querySelector("#station-name");
const stationBroadcaster = document.querySelector("#station-broadcaster");

const dialBars = document.querySelector("#dial-bars");
const dialValues = document.querySelector("#dial-values");
const stationsList = document.querySelector("#stations-list");
const btnPlayPause = document.querySelector("#btn-power");
const volumeControl = document.querySelector('[name="volume"]');
const currentlyPlaying = document.querySelector(".currently-playing-title");
const volumeButton = document.querySelector("#btn-mute");

const defaultIcon =
  '<span class="material-symbols-outlined animate-pulse">graphic_eq</span >';
const tplBtnStation = document.querySelector("#tpl-station");

// user saved chaneels
const myStations = [
  {
    uuid: "327ae7b0-3554-4b51-8e04-82b8847b5ba9",
    name: "Box UK",
  },
  {
    uuid: "d7a93b27-f973-4d13-8b2b-7e460a94e5b5",
    name: "Radio Caroline",
  },
  {
    uuid: "2da7b065-db61-4602-b6b7-bf9980c20481",
    name: "EKR - Oldies Paradise",
  },
  {
    uuid: "ac58f3e0-6f41-41bb-a93c-23df9517c8ae",
    name: "KAOS Sound - Pink Floyd Radio",
  },
];

const URL_API =
  "https://de1.api.radio-browser.info/json/stations/search?countrycode=gb&tagList=pop,rock&limit=40&stateExact=true&codec=mp3";

// get stations
let stations = [];
let totalStations = 0;
let currStation = "";
let audio;
let currentVolume = 0.2;
let isPlaying = false;
let fetchInterval = null;

// retrieve characters from api
async function getData() {
  try {
    // We are using fetch to get the response
    const response = await fetch(URL_API);
    // console.log(response);
    stations = await response.json();
    totalStations = stations.length;
    currentStationRender();
    listStationsRender();
  } catch (error) {
    console.log(error);
  }
}
getData();

function getRandomStation() {
  return stations[Math.floor(Math.random() * stations.length)];
}

function currentStationRender() {
  if (isPlaying) {
    audio.pause();
    audio = "";
    isPlaying = false;
  }

  // get random station if not defeinded
  if (!currStation) currStation = getRandomStation();

  stationName.innerText = currStation.name;
  if (currStation.favicon)
    stationIcon.innerHTML = `<img src="${currStation.favicon}">`;
  else stationIcon.innerHTML = defaultIcon;

  audio = new Audio(currStation.url);
  audio.volume = currentVolume;
  audio.play();
  isPlaying = true;
  btnPlayPause.classList.add("!text-green-500");

  /*
    stationsList.querySelectorAll("button").forEach(t => {
        t.classList.remove("!border-white/30");
    })
    console.log(currStation.changeuuid);
    stationsList.querySelector(`[data-uuid="${currStation.changeuuid}"]`).classList.add("!border-white/30");
    */
}

// list my saved stations
function listStationsRender() {
  stationsList.innerHTML = "";
  console.log(stations);
  stations.forEach((s) => {
    // console.log(s.name)
    const item = tplBtnStation.content.cloneNode(true);

    if (s.favicon) {
      item.querySelector("img").src = s.favicon;
      item.querySelector("p").remove();
    } else {
      item.querySelector("img").remove();
      item.querySelector("p").innerText = s.name;
    }
    const btn = item.querySelector("button");
    btn.setAttribute("data-uuid", s.changeuuid);
    btn.addEventListener("click", () => {
      stationsList.querySelectorAll("button").forEach((t) => {
        t.classList.remove("!border-white/30");
      });
      btn.classList.add("!border-white/30");
      currStation = s;

      currentStationRender();
    });

    stationsList.append(item);
  });
}

const adjustVolumeIcon = (volume) => {
  if (volume >= 0.75) {
    volumeButton.innerText = "volume_up";
  }
  if (volume < 0.75 && volume >= 0.2) {
    volumeButton.innerText = "volume_up";
  }
  if (volume < 0.2 && volume > 0) {
    volumeButton.innerText = "volume_down";
  }
  if (volume === 0) {
    volumeButton.innerText = "volume_off";
  }
};

// buttons - prev/next station
btnsNav.forEach((btn) => {
  const direction = btn.getAttribute("data-nav");
  btn.addEventListener("click", () => {
    currStationKey = stations.indexOf(currStation);
    let newStationKey;
    if (direction === "next") {
      if (currStationKey + 1 >= totalStations) newStationKey = 0;
      else newStationKey = currStationKey + 1;
    } else {
      if (currStationKey - 1 < 0) newStationKey = totalStations - 1;
      else newStationKey = currStationKey - 1;
    }

    currStation = stations[newStationKey];
    currentStationRender();
  });
});

function nextElem(arr, index, current) {
  document.body.removeChild(currentElem);
  index++;
  // showElem(arr, index);
}

function prevElem(arr, index, current) {
  let currentElem = current.parentElement;
  document.body.removeChild(currentElem);
  index--;
  // showElem(arr, index);
}

volumeControl.addEventListener("input", () => {
  const volume = parseFloat(volumeControl.value);
  audio.volume = currentVolume = volume;
  currentVolume = volume;
  adjustVolumeIcon(volume);
});

volumeButton.addEventListener("click", () => {
  if (audio.volume > 0) {
    adjustVolumeIcon(0);
    audio.volume = 0;
    volumeControl.value = 0;
  } else {
    adjustVolumeIcon(currentVolume);
    audio.volume = currentVolume;
    volumeControl.value = currentVolume;
  }
});

btnPlayPause.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    btnPlayPause.classList.remove("!text-green-500");
  } else {
    audio.play();
    btnPlayPause.classList.add("!text-green-500");
  }
  isPlaying = !isPlaying;
});

// add station click
//https://de1.api.radio-browser.info/#Stations_by_clicks

/*
   bitrate: 128
​
changeuuid: "323ab7f3-f0fc-4609-9cf3-837e81e25159"
​
clickcount: 3
​
clicktimestamp: "2023-08-18 11:12:00"
​
clicktimestamp_iso8601: "2023-08-18T11:12:00Z"
​
clicktrend: -1
​
codec: "MP3"
​
country: "The United Kingdom Of Great Britain And Northern Ireland"
​
countrycode: "GB"
​
favicon: "https://www.heart.co.uk/assets_v4r/heart/img/favicon-196x196.png"
​
geo_lat: null
​
geo_long: null
​
has_extended_info: false
​
hls: 0
​
homepage: "https://www.heart.co.uk/peterborough/"
​
iso_3166_2: null
​
language: "english"
​
languagecodes: "en"
​
lastchangetime: "2022-03-28 09:28:19"
​
lastchangetime_iso8601: "2022-03-28T09:28:19Z"
​
lastcheckok: 1
​
lastcheckoktime: "2023-08-19 08:11:07"
​
lastcheckoktime_iso8601: "2023-08-19T08:11:07Z"
​
lastchecktime: "2023-08-19 08:11:07"
​
lastchecktime_iso8601: "2023-08-19T08:11:07Z"
​
lastlocalchecktime: "2023-08-18 20:40:56"
​
lastlocalchecktime_iso8601: "2023-08-18T20:40:56Z"
​
name: "Heart Peterborough"
​
serveruuid: "9272421d-d777-45d3-ac5b-ac76c67e5daa"
​
ssl_error: 0
​
state: "Peterborough"
​
stationuuid: "213b0921-bc2e-11e9-acb2-52543be04c81"
​
tags: "charts,pop,rock"
​
url: "http://media-ice.musicradio.com/HeartPeterboroughMP3.m3u"
​
url_resolved: "http://media-ice.musicradio.com/HeartPeterboroughMP3"
​
votes: 20
   */
