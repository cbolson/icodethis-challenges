// tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        opensans: ["open-sans", "sans-serif"],
      },
    },
  },
};
const TEAMS = [
  {
    team: "Mercedes",
    hex: "#00A19B",
    hexAccent: "#C8CCCE",
    "hex-3": "",
    rgb: [39, 244, 210],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-mercedes.jpg",
  },
  {
    team: "Red Bull Racing",
    hex: "#3671C6",
    hexAccent: "#C0BFBF",
    rgb: [54, 113, 198],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-redbull.jpg",
  },
  {
    team: "Ferrari",
    hex: "#EF1A2D",
    hexAccent: "#FFF",
    rgb: [232, 0, 45],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-ferrari.jpg",
  },
  {
    team: "McLaren",
    hex: "#FF8000",
    hexAccent: "#000000",
    rgb: [255, 128, 0],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-mclaren.jpg",
  },
  {
    team: "Alpine",
    hex: "#02192B",
    hexAccent: "#2173B8",
    rgb: [255, 135, 188],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-alpine.jpg",
  },
  {
    team: "RB",
    hex: "#6692FF",
    hexAccent: "#FFFFFF",
    rgb: [102, 146, 255],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-rb.jpg",
  },
  {
    team: "Aston Martin",
    hex: "#00594F",
    hexAccent: "#CEDC00",
    rgb: [34, 153, 113],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-aston-martin-2023.jpg",
  },
  {
    team: "Williams",
    hex: "#00A0DE",
    hexAccent: "#000000",
    rgb: [100, 196, 255],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-william.jpg",
  },
  {
    team: "Kick Sauber",
    hex: "#00e701",
    hexAccent: "#000000",
    rgb: [82, 226, 82],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-sauber.jpg",
  },
  {
    team: "Haas",
    hex: "#E6002B",
    hexAccent: "#FFFFFF",
    rgb: [182, 186, 189],
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/bg-f1-haas.jpg",
  },
];

const RACES = [
  {
    country: "Bahrain",
    name: "Bahrain Grand Prix",
    date: "2024-03-02",
    time: "16:00 - 18:00",
  },
  {
    country: "Saudi Arabia",
    name: "Saudi Arabian Grand Prix",
    date: "2024-03-09",
    time: "18:00 - 20:00",
  },
  {
    country: "Australia",
    name: "Australian Grand Prix",
    date: "2024-03-24",
    time: "05:00 - 07:00",
  },
  {
    country: "Japan",
    name: "Japanese Grand Prix",
    date: "2024-04-07",
    time: "07:00 - 09:00",
  },
  {
    country: "China",
    name: "Chinese Grand Prix",
    date: "2024-04-21",
    time: "09:00 - 11:00",
  },
  {
    country: "USA",
    name: "Miami Grand Prix",
    date: "2024-05-05",
    time: "22:00 - 00:00",
  },
  {
    country: "Italy",
    name: "Emilia Romagna Grand Prix",
    date: "2024-05-19",
    time: "15:00 - 17:00",
  },
  {
    country: "Monaco",
    name: "Monaco Grand Prix",
    date: "2024-05-26",
    time: "15:00 - 17:00",
  },
  {
    country: "Canada",
    name: "Canadian Grand Prix",
    date: "2024-06-09",
    time: "20:00 - 22:00",
  },
  {
    country: "Spain",
    name: "Spanish Grand Prix",
    date: "2024-06-23",
    time: "15:00 - 17:00",
  },
  {
    country: "Austria",
    name: "Austrian Grand Prix",
    date: "2024-06-30",
    time: "15:00 - 17:00",
  },
  {
    country: "UK",
    name: "British Grand Prix",
    date: "2024-07-07",
    time: "16:00 - 18:00",
  },
  {
    country: "Hungary",
    name: "Hungarian Grand Prix",
    date: "2024-07-21",
    time: "15:00 - 17:00",
  },
  {
    country: "Belgium",
    name: "Belgian Grand Prix",
    date: "2024-07-28",
    time: "15:00 - 17:00",
  },
  {
    country: "Netherlands",
    name: "Dutch Grand Prix",
    date: "2024-08-25",
    time: "15:00 - 17:00",
  },
  {
    country: "Italy",
    name: "Italian Grand Prix",
    date: "2024-09-01",
    time: "15:00 - 17:00",
  },
  {
    country: "Azerbaijan",
    name: "Azerbaijan Grand Prix",
    date: "2024-09-15",
    time: "13:00 - 15:00",
  },
  {
    country: "Singapore",
    name: "Singapore Grand Prix",
    date: "2024-09-22",
    time: "14:00 - 16:00",
  },
  {
    country: "USA",
    name: "United States Grand Prix",
    date: "2024-10-20",
    time: "21:00 - 23:00",
  },
  {
    country: "Mexico",
    name: "Mexican Grand Prix",
    date: "2024-10-27",
    time: "21:00 - 23:00",
  },
  {
    country: "Brazil",
    name: "Brazilian Grand Prix",
    date: "2024-11-03",
    time: "18:00 - 20:00",
  },
  {
    country: "USA",
    name: "Las Vegas Grand Prix",
    date: "2024-11-23",
    time: "07:00 - 09:00",
  },
  {
    country: "Qatar",
    name: "Qatar Grand Prix",
    date: "2024-12-01",
    time: "18:00 - 20:00",
  },
  {
    country: "UAE",
    name: "Abu Dhabi Grand Prix",
    date: "2024-12-08",
    time: "",
  },
];

// COUNTDOWN

/***************** COUNTDOWN ********************/
const panelCountdown = document.querySelector("#panel-countdown");
//const elYears = document.querySelector("#years");
//const elYearsSpan = elYears.querySelectorAll("span");
//const elMonths = document.querySelector("#months");
//const elMonthsSpan = elMonths.querySelectorAll("span");
const elDays = document.querySelector("#days");
const elDaysSpan = elDays.querySelectorAll("span");
const elHours = document.querySelector("#hours");
const elHoursSpan = elHours.querySelectorAll("span");
const elMinutes = document.querySelector("#minutes");
const elMinutesSpan = elMinutes.querySelectorAll("span");
const elSeconds = document.querySelector("#seconds");
const elSecondsSpan = elSeconds.querySelectorAll("span");

const currentDate = new Date();

// Find the next event after the current date
let nextEvent = null;

for (const race of RACES) {
  const raceDate = new Date(`${race.date} ${race.time.split(" - ")[0]}`);

  if (raceDate > currentDate) {
    nextEvent = race;
    break;
  }
}

// Set expirationDate to the date of the next event
const expirationDate = new Date(
  `${nextEvent.date} ${nextEvent.time.split(" - ")[0]}`
);

document.querySelector("#race-country").innerText = nextEvent.country;
document.querySelector("#race-name").innerText = nextEvent.name;
document.querySelector("#race-date").innerText = nextEvent.date;
document.querySelector(
  "#race-time"
).innerText = `${nextEvent.time} (local time)`;

let currentYears = [];
let currentMonths = [];
let currentDays = [];
let currentHours = [];
let currentMins = [];
let currentSecs = {};

function getCurrentDate() {
  const currentDate = new Date();
  const timeDifference = expirationDate - currentDate;

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { years, months, days, hours, minutes, seconds };
}

function updateCountdown() {
  const { years, months, days, hours, minutes, seconds } = getCurrentDate();

  // update years
  //let y = padTo2(years);
  //if (y[0] != currentYears[0]) changeNum(elYearsSpan[0], y[0], 700);
  //if (y[1] != currentYears[1]) changeNum(elYearsSpan[1], y[1], 650);
  //currentYears = [y[0], y[1]];

  // update months
  //let m = padTo2(months);
  //if (m[0] != currentMonths[0]) changeNum(elMonthsSpan[0], m[0], 600);
  //if (m[1] != currentMonths[1]) changeNum(elMonthsSpan[1], m[1], 550);
  //currentMonths = [m[0], m[1]];

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
  let mns = padTo2(minutes);
  if (mns[0] != currentMins[0]) changeNum(elMinutesSpan[0], mns[0], 300);
  if (mns[1] != currentMins[1]) changeNum(elMinutesSpan[1], mns[1], 250);
  currentMins = [mns[0], mns[1]];

  // update seconds
  let s = padTo2(seconds);
  if (s[0] != currentSecs[0]) changeNum(elSecondsSpan[0], s[0], 200);
  if (s[1] != currentSecs[1]) changeNum(elSecondsSpan[1], s[1], 150);
  currentSecs = { ...s };
}

function initalLoad() {
  const { years, months, days, hours, minutes, seconds } = getCurrentDate();

  // update years
  //let y = padTo2(years);
  //currentYears = [y[0], y[1]];
  //elYearsSpan[0].innerText = currentYears[0];
  //elYearsSpan[1].innerText = currentYears[1];

  // update months
  //let m = padTo2(months);
  //currentMonths = [m[0], m[1]];
  //elMonthsSpan[0].innerText = currentMonths[0];
  //elMonthsSpan[1].innerText = currentMonths[1];

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
  let mns = padTo2(minutes);
  currentMins = [mns[0], mns[1]];
  elMinutesSpan[0].innerText = currentMins[0];
  elMinutesSpan[1].innerText = currentMins[1];

  // update seconds
  let s = padTo2(seconds);
  currentSecs = { ...s };
  elSecondsSpan[0].innerText = currentSecs[0];
  elSecondsSpan[1].innerText = currentSecs[1];
}

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

function changeNum(el, newVal, timing) {
  timing = 250;
  el.classList.add("scale-0");

  setTimeout(() => {
    el.innerText = "";
    el.classList.remove("scale-0");
    //el.classList.add("-translate-y-24");
  }, timing);

  setTimeout(() => {
    el.innerText = newVal;
    //el.classList.remove("-translate-y-24");
  }, timing * 2);
}

function padTo2(num) {
  return num.toString().padStart(2, "0");
}
/*
// utility - format date ()
function formatDate(date) {
    const options = {
        weekday: 'long',
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    const newDate = new Date(date);
    return newDate.toLocaleString('en-US', options);
}
*/

let selectedTeam = "Aston Martin";

const bgMasksEl = document.querySelector("#bg-masks");

const listTeamToggles = document.querySelector("#list-team-toggles");

// Function to create and append HTML elements
function addTeamElements() {
  const body = document.body;
  bgMasksEl.innerHTML = "";

  TEAMS.forEach((team, index) => {
    // Create label for the team toggle
    const label = document.createElement("label");
    label.setAttribute("for", `radio-team-${index}`);
    label.setAttribute("title", team.team);
    //label.className = "hidden";
    label.className = `hover:bg-[${team.hex}]`;

    const imgEl = document.createElement("img");
    imgEl.src = team.image;
    imgEl.id = `image-${index}`;
    bgMasksEl.append(imgEl);

    // Create SVG element for the team color
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", `hover:text-[${team.hexAccent}]`);
    svg.setAttribute("version", "1.1");
    svg.setAttribute("viewBox", "0 0 512 512");

    // Create 'use' element for SVG icon
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#svg-car");

    svg.appendChild(use);
    label.appendChild(svg);

    // create dropdown name
    const nameEl = document.createElement("div");
    nameEl.innerText = team.team;
    label.append(nameEl);

    // Create radio button for`the team
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("id", `radio-team-${index}`);
    radio.setAttribute("name", "team-selection");
    radio.setAttribute("value", team.team);
    radio.className = `sr-only peer/team-${index}`;

    // Append label and radio button to the list and body, respectively
    listTeamToggles.appendChild(label);
    body.prepend(radio);

    if (team.team == selectedTeam) {
      setTheme(index);
    }
    radio.addEventListener("change", () => {
      setTheme(index);
    });
  });
}
// Call the function to add team elements
addTeamElements();

function setTheme(index) {
  const currentTeam = TEAMS[index];
  const bgImages = bgMasksEl.querySelectorAll("img");

  bgImages.forEach((img, idx) => {
    if (idx === index) img.classList.add("!opacity-20");
    else img.classList.remove("!opacity-20");
  });

  const teamToggles = listTeamToggles.querySelectorAll("label");
  console.log(teamToggles);
  teamToggles.forEach((t, idx) => {
    if (idx === index) t.classList.add("active");
    else t.classList.remove("active");
  });
  console.log(teamToggles);

  // document.querySelectorAll("#bg-masks img")[index].classList.add("opacity-20");

  document.body.style.backgroundColor = currentTeam.hex;
  document.body.style.setProperty("--accent", `${currentTeam.hexAccent}`);
}
