/*
0 	Clear sky
1, 2, 3 	Mainly clear, partly cloudy, and overcast
45, 48 	Fog and depositing rime fog
51, 53, 55 	Drizzle: Light, moderate, and dense intensity
56, 57 	Freezing Drizzle: Light and dense intensity
61, 63, 65 	Rain: Slight, moderate and heavy intensity
66, 67 	Freezing Rain: Light and heavy intensity
71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
77 	Snow grains
80, 81, 82 	Rain showers: Slight, moderate, and violent
85, 86 	Snow showers slight and heavy
95 * 	Thunderstorm: Slight or moderate
96, 99 * 	Thunderstorm with slight and heavy hail
*/
function addMapping(values, icon) {
  values.forEach((val) => {
    ICON_MAP.set(val, icon);
  });
}

const ICON_MAP = new Map();
addMapping([0, 1], "sunny");
addMapping([2], "partly_cloudy_day");
addMapping([3], "cloud");
addMapping([45, 48], "cloud");
addMapping([51, 52, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloud-rain");
addMapping([71, 73, 75, 77, 85, 86], "snow");
addMapping([95, 96, 99], "storn");

//console.log(ICON_MAP);

const URL_API = "https://api.open-meteo.com/v1/forecast?";

// cities in Spain
const LOCATIONS = [
  {
    city: "A Coruña",
    latitude: 43.362344,
    longitude: -8.41154,
  },
  {
    city: "Álava",
    latitude: 42.846718,
    longitude: -2.672695,
  },
  {
    city: "Albacete",
    latitude: 38.994349,
    longitude: -1.858542,
  },
  {
    city: "Alicante",
    latitude: 38.345487,
    longitude: -0.481905,
  },
  {
    city: "Almería",
    latitude: 36.834047,
    longitude: -2.463713,
  },
  {
    city: "Asturias",
    latitude: 43.362347,
    longitude: -5.84555,
  },
  {
    city: "Ávila",
    latitude: 40.655006,
    longitude: -4.700919,
  },
  {
    city: "Badajoz",
    latitude: 38.878623,
    longitude: -6.970681,
  },
  {
    city: "Barcelona",
    latitude: 41.385064,
    longitude: 2.173403,
  },
  {
    city: "Burgos",
    latitude: 42.343992,
    longitude: -3.696906,
  },
  {
    city: "Cáceres",
    latitude: 39.474892,
    longitude: -6.371874,
  },
  {
    city: "Cádiz",
    latitude: 36.527061,
    longitude: -6.288596,
  },
  {
    city: "Cantabria",
    latitude: 43.462306,
    longitude: -3.80998,
  },
  {
    city: "Castellón",
    latitude: 39.985674,
    longitude: -0.045188,
  },
  {
    city: "Ciudad Real",
    latitude: 38.984106,
    longitude: -3.92741,
  },
  {
    city: "Córdoba",
    latitude: 37.888175,
    longitude: -4.779383,
  },
  {
    city: "Cuenca",
    latitude: 40.070392,
    longitude: -2.137416,
  },
  {
    city: "Girona",
    latitude: 41.979401,
    longitude: 2.821426,
  },
  {
    city: "Granada",
    latitude: 37.176804,
    longitude: -3.590451,
  },
  {
    city: "Guadalajara",
    latitude: 40.632727,
    longitude: -3.166365,
  },
  {
    city: "Huelva",
    latitude: 37.262197,
    longitude: -6.944586,
  },
  {
    city: "Huesca",
    latitude: 42.140006,
    longitude: -0.408746,
  },
  {
    city: "Jaén",
    latitude: 37.779594,
    longitude: -3.784909,
  },
  {
    city: "La Rioja",
    latitude: 42.465401,
    longitude: -2.449974,
  },
  {
    city: "Las Palmas",
    latitude: 28.124823,
    longitude: -15.430006,
  },
  {
    city: "León",
    latitude: 42.598726,
    longitude: -5.567095,
  },
  {
    city: "Lleida",
    latitude: 41.617589,
    longitude: 0.620012,
  },
  {
    city: "Lugo",
    latitude: 43.011015,
    longitude: -7.555259,
  },
  {
    city: "Madrid",
    latitude: 40.416775,
    longitude: -3.70379,
  },
  {
    city: "Málaga",
    latitude: 36.719648,
    longitude: -4.420016,
  },
  {
    city: "Murcia",
    latitude: 37.98381,
    longitude: -1.12952,
  },
  {
    city: "Navarre",
    latitude: 42.812526,
    longitude: -1.645774,
  },
  {
    city: "Ourense",
    latitude: 42.335193,
    longitude: -7.863245,
  },
  {
    city: "Palencia",
    latitude: 42.011063,
    longitude: -4.529366,
  },
  {
    city: "Palma de Mallorca",
    latitude: 39.5696,
    longitude: 2.65016,
  },
  {
    city: "Pontevedra",
    latitude: 42.431954,
    longitude: -8.648019,
  },
  {
    city: "Salamanca",
    latitude: 40.963427,
    longitude: -5.667329,
  },
  {
    city: "Santa Cruz de Tenerife",
    latitude: 28.46363,
    longitude: -16.251846,
  },
  {
    city: "Segovia",
    latitude: 40.94758,
    longitude: -4.120002,
  },
  {
    city: "Seville",
    latitude: 37.389092,
    longitude: -5.984459,
  },
  {
    city: "Soria",
    latitude: 41.76312,
    longitude: -2.46492,
  },
  {
    city: "Tarragona",
    latitude: 41.118882,
    longitude: 1.244491,
  },
  {
    city: "Teruel",
    latitude: 40.343979,
    longitude: -1.107176,
  },
  {
    city: "Toledo",
    latitude: 39.862832,
    longitude: -4.027323,
  },
  {
    city: "Valencia",
    latitude: 39.469907,
    longitude: -0.376288,
  },
  {
    city: "Valladolid",
    latitude: 41.652874,
    longitude: -4.723642,
  },
  {
    city: "Zamora",
    latitude: 41.504713,
    longitude: -5.746069,
  },
  {
    city: "Zaragoza",
    latitude: 41.648822,
    longitude: -0.889085,
  },
];
// Define an array of weekday names
const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date();
const dateStr = currentDate.toDateString();

let data;
const todayDay = currentDate.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday

// define default start city
let currentCity = "Madrid";
function getLocationGeo(location) {
  return LOCATIONS.find((l) => l.city.toLowerCase() === location.toLowerCase());
}

// fetch weather for location
async function getWeather() {
  const geo = getLocationGeo(currentCity);
  let lat = geo.latitude;
  let lng = geo.longitude;

  const paramsString = `latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation_probability,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin&current_weather=true`;
  const searchParams = new URLSearchParams(paramsString);

  try {
    const response = await fetch(URL_API + searchParams);
    data = await response.json();
    //console.log(results);
    renderWeather();
  } catch (error) {
    console.log(error);
  }
}
getWeather();

const elCurrentDate = document.querySelector("[data-current-date]");
const elCurrentIcon = document.querySelector("[data-current-icon]");
const elCurrentTemp = document.querySelector("[data-current-temp]");
const elCurrentHigh = document.querySelector("[data-current-high]");
const elCurrentLow = document.querySelector("[data-current-low]");
const elCurrentWind = document.querySelector("[data-current-wind]");
const elCurrentPrecip = document.querySelector("[data-current-precip]");

function renderWeather() {
  renderCurrentWeather(data.current_weather, data.daily);
  renderDailyWeather(data.daily);
}
function getIconUrl(iconCode) {
  return `<span class="material-symbols-outlined">${ICON_MAP.get(
    iconCode
  )}</span>`;
}

function renderCurrentWeather(current, daily) {
  // console.log(daily);
  const date = new Date(current.time);

  elCurrentIcon.classList.add("scale-0");
  elCurrentTemp.classList.add("scale-0");
  elCurrentHigh.classList.add("scale-0");
  elCurrentLow.classList.add("scale-0");
  elCurrentWind.classList.add("scale-0");

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formattedDate = date.toLocaleString("en-US", options);

  elCurrentDate.innerText = formattedDate;
  elCurrentIcon.innerHTML = getIconUrl(current.weathercode);
  elCurrentTemp.innerHTML = `${Math.floor(current.temperature)}&deg;`;
  elCurrentHigh.innerHTML = `${Math.floor(
    daily.temperature_2m_max[todayDay]
  )}&deg;`;
  elCurrentLow.innerHTML = `${Math.floor(
    daily.temperature_2m_min[todayDay]
  )}&deg;`;
  elCurrentWind.innerHTML = `${current.windspeed}km/h`;
  // setValue("current-precip", current.precip);

  // delay = delay + 50;
  setTimeout(() => {
    elCurrentIcon.classList.remove("scale-0");
    elCurrentTemp.classList.remove("scale-0");
    elCurrentHigh.classList.remove("scale-0");
    elCurrentLow.classList.remove("scale-0");
    elCurrentWind.classList.remove("scale-0");
  }, 200);

  // daytime
  const bgImage = current.is_day
    ? "https://images.unsplash.com/photo-1562095913-157049267fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=50"
    : "https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=50";

  document.body.style.setProperty("--bg-img", `url(${bgImage})`);
}

//const DAY_FORMATTER = new Intl.DateTimeFormat("es-ES", { weekday: "short" });
const dailySection = document.querySelector("[data-day-section]");
const tplDay = document.querySelector("#tpl-day");
const listDays = document.querySelector("#list-days");

// forcast
function renderDailyWeather(daily) {
  listDays.innerHTML = "";

  // Iterate from the current day plus 1 day to 7 days into the future
  counter = 0;
  let delay = 500;
  for (var i = 1; i <= 6; i++) {
    // Clone the current date
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    const dayOfWeek = nextDate.getDay();
    const weekdayName = weekdayNames[dayOfWeek];

    const minTemp = Math.floor(daily.temperature_2m_min[counter]);
    const maxTemp = Math.floor(daily.temperature_2m_max[counter]);
    const icon = getIconUrl(daily.weathercode[counter]);
    const item = tplDay.content.cloneNode(true);
    const elDay = item.querySelector("div");
    item.querySelector("[date-day]").innerText = weekdayName;
    item.querySelector("[date-icon]").innerHTML = icon;
    item.querySelector("[date-min]").innerHTML = `${minTemp}&deg;`;
    item.querySelector("[date-max]").innerHTML = `${maxTemp}&deg;`;

    delay = delay + 50;
    setTimeout(() => elDay.classList.remove("scale-0"), delay);

    listDays.append(item);
    counter++;
  }
}

const selectCity = document.querySelector("#list-cities");

// create select list of locations from array
function renderSelectListCities() {
  LOCATIONS.forEach(({ city }, i) => {
    if (city == currentCity) {
      selectCity[i] = new Option(city, city, true, true);
    } else {
      selectCity[i] = new Option(city, city);
    }
  });
}
renderSelectListCities();

selectCity.addEventListener("change", (e) => {
  currentCity = e.target.value;
  getWeather();
});

document.querySelector("#btn-info").addEventListener("click", () => {
  document.querySelector("#panel-info").classList.toggle("opacity-0");
});
