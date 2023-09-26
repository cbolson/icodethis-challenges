const ACTIVITES = [
  {
    activity_type: "walk",
    activity_name: "Stroll along the river bank",
    distance_km: 1.5,
    duration_minutes: 90,
    map_image_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/activity-special.webp",
    calories_burned: 220,
    comment:
      "Went for a stroll and bumped into my friend Florin. Thanks for creating this amazing platform!",
    start_time: "2023-09-26T15:22:14",
  },
  {
    activity_type: "run",
    activity_name: "Morning Jog",
    distance_km: 5,
    duration_minutes: 30,
    map_image_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/activity-3.webp",
    calories_burned: 250,
    comment: "Enjoyed a peaceful run in the park.",
    start_time: "2023-09-26T07:00:00",
  },
  {
    activity_type: "cycle",
    activity_name: "Bike Ride",
    distance_km: 15,
    duration_minutes: 45,
    map_image_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/activity-1.webp",
    calories_burned: 350,
    comment: "Scenic route along the river.",
    start_time: "2023-09-25T09:30:00",
  },
  {
    activity_type: "swim",
    activity_name: "Swim Practice",
    distance_km: 2,
    duration_minutes: 60,
    map_image_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/activity-swim.webp",
    calories_burned: 400,
    comment: "Focused on improving my freestyle stroke.",
    start_time: "2023-09-24T09:12:14",
  },
  {
    activity_type: "run",
    activity_name: "Interval Training",
    distance_km: 7,
    duration_minutes: 40,
    map_image_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/activity-2..webp",
    calories_burned: 320,
    comment: "Pushed myself with sprint intervals.",
    start_time: "2023-09-23T12:15:00",
  },
];
/*
,
,,
    {
        "activity_type": "swim",
        "activity_name": "Swim Practice",
        "distance_km": 2,
        "duration_minutes": 60,
        "map_image_url": "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/activity-3.webp",
        "calories_burned": 400,
        "comment": "Focused on improving my freestyle stroke."
    }
    
    {
        "activity_type": "cycle",
        "activity_name": "Mountain Biking",
        "distance_km": 20,
        "duration_minutes": 90,
        "map_image_url": "https://example.com/mountain_biking_map.jpg",
        "calories_burned": 550,
        "comment": "Challenging trails with breathtaking views."
    }
*/

const ICONS = [
  {
    code: "run",
    icon: "directions_run",
  },
  {
    code: "cycle",
    icon: "directions_bike",
  },
  {
    code: "swim",
    icon: "pool",
  },
  {
    code: "walk",
    icon: "hiking",
  },
];

// selectors
const btnGo = document.querySelector("#btn-go");
const listActivities = document.querySelector("#list-activites");
const tplActivity = document.querySelector("#tpl-activity");
const elDate = document.querySelector("[today-date]");
const elDay = document.querySelector("[today-day]");
const panelActivity = document.querySelector("#panel-activity");
const btnCloseActivity = document.querySelector("#btn-close-activity");
const elActivityMap = document.querySelector("[activity-map]");
const elActivityIcon = document.querySelector("[activity-icon]");
const elActivityTitle = document.querySelector("[activity-title]");
const elActivityDistance = document.querySelector("[activity-distance]");
const elActivityDuration = document.querySelector("[activity-duration]");
const elActivityCalories = document.querySelector("[activity-calories]");
const elActivityNotes = document.querySelector("[activity-notes]");
const elActivityDate = document.querySelector("[activity-date]");

// format current date
const date = new Date();
const optionsDate = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};
const optionsDay = {
  weekday: "long",
};
// set current day and date
function setTime() {
  elDay.innerText = date.toLocaleString("en-US", optionsDay);
  elDate.innerText = date.toLocaleString("en-US", optionsDate);
}
setTime();
// keep the clock going every minute
setInterval(setTime, 60000);

// activity start button. -I was going to do more with this but got distracted
let activyStarted = false;
btnGo.addEventListener("click", () => {
  btnGo.innerText = !activyStarted ? "pause" : "Go";
  activyStarted = activyStarted ? false : true;
});

// lsit of activities
function renderActivites() {
  listActivities.innerHTML = "";
  let totalDistance = 0;
  let totalTime = 0;
  let totalCalories = 0;
  ACTIVITES.forEach((a) => {
    const img = ICONS.find((i) => i.code === a.activity_type);
    const clone = tplActivity.content.cloneNode(true);
    clone.querySelector("[data-icon]").innerHTML = img.icon;
    clone.querySelector("[data-distance]").innerText = `${a.distance_km} km`;
    clone.querySelector("[data-time]").innerText = `${a.duration_minutes} mins`;
    clone.querySelector(
      "[data-calories]"
    ).innerText = `${a.calories_burned} kcal`;
    clone.querySelector("button").title = a.activity_name;
    clone.querySelector("button").addEventListener("click", () => {
      renderActivity(a);
    });
    listActivities.append(clone);

    // sum totals
    totalDistance += a.distance_km;
    totalTime += a.duration_minutes;
    totalCalories += a.calories_burned;
  });

  // add summary data
  document.querySelector("[summary-distance]").innerText = totalDistance;
  document.querySelector("[summary-time]").innerText = `${totalTime} mins`;
  document.querySelector("[summary-calories]").innerText = totalCalories;
  document.querySelector("[summary-activities]").innerText = ACTIVITES.length;
}
renderActivites();

function renderActivity(a) {
  // define icon
  const img = ICONS.find((i) => i.code === a.activity_type);
  elActivityMap.src = a.map_image_url;
  elActivityIcon.innerHTML = img.icon;
  elActivityTitle.innerText = a.activity_name;
  elActivityDate.innerText = formatDate(a.start_time);
  elActivityDistance.innerText = `${a.distance_km} km`;
  elActivityDuration.innerText = `${a.duration_minutes} mins`;
  elActivityCalories.innerText = `${a.calories_burned} kcal`;
  elActivityNotes.innerText = a.comment;
  panelActivity.classList.remove("translate-y-full");
  setTimeout(() => {
    elActivityMap.classList.remove("scale-0");
  }, 500);

  setTimeout(() => {
    btnCloseActivity.classList.remove("translate-x-full");
  }, 1200);
}
// button - close activity button
btnCloseActivity.addEventListener("click", () => {
  btnCloseActivity.classList.add("translate-x-full");
  setTimeout(() => {
    panelActivity.classList.add("translate-y-full");
  }, 400);
  // reset contents for next load
  setTimeout(() => {
    elActivityMap.classList.add("scale-0");
    elActivityMap.src = "";
    elActivityIcon.innerHTML = "";
    elActivityTitle.innerText = "";
    elActivityDate.innerText = "";
    elActivityDistance.innerText = "";
    elActivityDuration.innerText = "";
    elActivityCalories.innerText = "";
    elActivityNotes.innerText = "";
    // empty contents for next load
  }, 700);
});
// format date ()
function formatDate(date) {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const newDate = new Date(date);
  return newDate.toLocaleString("en-US", options);
}
