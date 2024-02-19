const daysOfWeek = {
  en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  es: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
  fr: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
  de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  ro: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
};

// texts
const translations = {
  // English translations
  en: {
    alarm: "Alarm",
    "dark-mode": "Dark mode",
    "24-hour-clock": "24 hour clock",
    "alert-new-alarm-ko":
      "Please enter a valid time and indicate the days for the alarm",
  },
  // Spanish translations
  es: {
    alarm: "Alarma",
    "dark-mode": "Modo oscuro",
    "24-hour-clock": "Reloj de 24 horas",
    "alert-new-alarm-ko":
      "Por favor, ingrese una hora válida e indique los días para la alarma",
  },
  // French translations
  fr: {
    alarm: "Réveil",
    "dark-mode": "Mode sombre",
    "24-hour-clock": "Horloge 24 heures",
    "alert-new-alarm-ko":
      "Veuillez entrer une heure valide et indiquer les jours pour l'alarme",
  },
  // German translations
  de: {
    alarm: "Alarm",
    "dark-mode": "Dunkelmodus",
    "24-hour-clock": "24-Stunden-Uhr",
    "alert-new-alarm-ko":
      "Bitte geben Sie eine gültige Uhrzeit ein und geben Sie die Tage für den Wecker an",
  },
  // Romanian translations
  ro: {
    alarm: "Alarmă",
    "dark-mode": "Mod întunecat",
    "24-hour-clock": "Ceas 24 de ore",
    "alert-new-alarm-ko":
      "Vă rugăm să introduceți o oră validă și să indicați zilele pentru alarma",
  },
};

// selectors
const displayHourEl = document.querySelector("#time-hour");
const displayMinEl = document.querySelector("#time-min");
const displayTimePeriodEl = document.querySelector("#time-period");
const displayTimeSeperatorEl = document.querySelector("#time-separator");
const displayDateEl = document.querySelector("#display-date");
const checkTimeFormat = document.querySelector("#time-format");
const settingsPanel = document.querySelector("#panel-settings");
const settingsBtn = document.querySelector("#btn-settings");
const tplAlarm = document.querySelector("#tpl-alarm");
const alarmsListEl = document.getElementById("alarm-container");
const addAlarmEl = document.querySelector("#panel-add-alarm");
const addAlarmBtn = document.querySelector("#btn-add-alarm");

let userLang = "en";
let settingsPanelVisible = false;
let use24HourFormat = false;

checkTimeFormat.addEventListener("change", () => {
  use24HourFormat = !use24HourFormat;

  // re-render date
  updateTime();

  // re-render alarms
  displayAlarms();
});

function updateTime() {
  const now = new Date();
  // console.log(use24HourFormat)
  if (use24HourFormat) {
    // Display time in 24-hour format
    const hours24 = now.getHours();
    const minutes24 = now.getMinutes();
    displayHourEl.textContent = hours24 < 10 ? "0" + hours24 : hours24;
    displayMinEl.textContent = minutes24 < 10 ? "0" + minutes24 : minutes24;
    displayTimePeriodEl.textContent = ""; // Clear the period for 24-hour format
  } else {
    // Display time in 12-hour format
    const hours12 = now.getHours() % 12 || 12;
    const minutes12 = now.getMinutes();
    const period = now.getHours() < 12 ? "AM" : "PM";
    displayHourEl.textContent = hours12;
    displayMinEl.textContent = minutes12 < 10 ? "0" + minutes12 : minutes12;
    displayTimePeriodEl.textContent = period;
  }
}

// flash the separator every second
function flashSeparator() {
  displayTimeSeperatorEl.classList.toggle("opacity-0");
}

function updateAndFlash() {
  updateTime();
  flashSeparator();
}

updateAndFlash();

// update time every minute
setInterval(updateAndFlash, 60000);

// flash separator every second
setInterval(flashSeparator, 1000);

// set date (this could be combined with the time function but I don't want to reset it every nminute)
function setDate() {
  const now = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = now.toLocaleDateString(userLang, options);
  displayDateEl.textContent = formattedDate;
}

setDate();

const alarms = [
  {
    time: "08:00",
    days: [1, 2, 3, 4, 5],
    status: true,
  },
  {
    time: "12:30",
    days: [2, 4],
    status: false,
  },
  {
    time: "07:45",
    days: [0, 6],
    status: true,
  },
];

// show all alarms
function displayAlarms() {
  alarmsListEl.innerHTML = "";

  // Sort alarms by time
  alarms.sort((a, b) => {
    const timeA = new Date("1970-01-01 " + a.time);
    const timeB = new Date("1970-01-01 " + b.time);
    return timeA - timeB;
  });

  alarms.forEach(function (alarm, index) {
    const alarmEl = tplAlarm.content.cloneNode(true);
    const alermItem = alarmEl.querySelector("article");

    const alarmCheckbox = alarmEl.querySelector("input");
    const alarmLabel = alarmEl.querySelector("label");
    const alarmDaysEl = alarmEl.querySelector("[alarm-days]");
    const alarmBtnDelete = alarmEl.querySelector("[btn-delete]");

    alarmEl.querySelector("[alarm-time]").innerText = formatTime(alarm.time);
    alarmCheckbox.id = `alarm-${index}`;
    alarmCheckbox.checked = alarm.status ? "checked" : "";
    alarmLabel.htmlFor = `alarm-${index}`;
    alarmDaysEl.innerHTML = getDaysOfWeek(alarm.days).join("");

    // update alarm state
    alarmCheckbox.addEventListener("change", (e) => {
      alarms[index].status = e.target.checked ? true : false;
    });
    // delete alarm
    alarmBtnDelete.addEventListener("click", (e) => {
      // Get the index of the alarm
      if (index !== -1) {
        alermItem.classList.add("scale-0");
        setTimeout(() => {
          alarms.splice(index, 1);
          displayAlarms();
        }, 300);
      } else {
        console.error("Invalid index for deleting alarm");
      }
    });

    alarmsListEl.appendChild(alarmEl);
  });
}

// format time in 12 or 24 hour clock (wthis will be changable in settings)
function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);

  if (use24HourFormat) {
    // Format time in 24-hour format
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  } else {
    // Format time in 12-hour format
    const period = hours >= 12 ? "pm" : "am";
    const formattedHours = (hours % 12 === 0 ? 12 : hours % 12)
      .toString()
      .padStart(2, "0");
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }
}

function getDaysOfWeek(activeDays) {
  const selectedDays = daysOfWeek[userLang];
  return selectedDays.map((day, index) => {
    return `<span class="${
      activeDays.includes(index) ? "" : "opacity-20"
    }">${day}</span>`;
  });
}

// show existing alarms
displayAlarms();

// just a bit of fun :P
// use the "back" button to slode the container to the left or right
const containerEl = document.querySelector("main");
const btMove = document.querySelector("#btn-move");
const msgEl = document.querySelector("#msg");

btMove.addEventListener("click", () => {
  containerEl.classList.toggle("-translate-x-10");
  btMove.classList.toggle("rotate-180");
  msgEl.classList.toggle("opacity-0");
  msgEl.classList.toggle("-translate-x-10");
});

// add alarm

addAlarmBtn.addEventListener("click", toggleAddAlarmPanel);
function toggleAddAlarmPanel() {
  addAlarmEl.classList.toggle("!translate-y-10");
  addAlarmBtn.classList.toggle("rotate-45");
  if (settingsPanelVisible) {
    settingsPanel.classList.remove("[grid-template-rows:1fr]");
    settingsPanelVisible = false;
  }
}

// new alarm form
const newAlarmBtn = document.querySelector("#btn-new-alarm");
const newAlarmInput = document.querySelector("#new-alarm-time");
const newAlarmDaysEl = document.querySelector("#new-alarm-days");

// add alarm days
function renderDays() {
  const selectedDays = daysOfWeek[userLang];

  const daysHTML = selectedDays
    .map((day, index) => {
      const checkboxId = `day-${index + 1}`;
      return `
            <div>
                <input type="checkbox" id="${checkboxId}" value="${index}" class="sr-only"> 
                <label for="${checkboxId}">${day}</label>
            </div>`;
    })
    .join("");

  newAlarmDaysEl.innerHTML = daysHTML;
}
renderDays();

newAlarmBtn.addEventListener("click", () => {
  const newAlarmDays = newAlarmDaysEl.querySelectorAll(
    "input[type='checkbox']"
  );
  const newTime = newAlarmInput.value;
  const selectedDays = Array.from(newAlarmDays)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => parseInt(checkbox.value));

  if (newTime && selectedDays.length > 0) {
    alarms.push({
      time: newTime,
      days: selectedDays,
      status: true,
    });
    displayAlarms();
    toggleAddAlarmPanel();
    newAlarmDays.forEach((checkbox) => (checkbox.checked = false));
    newAlarmInput.value = "12:00:00";
  } else {
    alert(translations[userLang]["alert-new-alarm-ko"]);
  }
});

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("[grid-template-rows:1fr]");
  settingsPanelVisible = !settingsPanelVisible;
  //document.querySelector("#panel-current-time").classList.toggle("blur-sm","pointer-events-none")
});

// language buttons
function generateLanguageRadioButtons() {
  const radioButtonsContainer = document.querySelector(
    "#language-radio-buttons"
  );

  for (const langCode in translations) {
    const label = langCode.toUpperCase();

    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.id = `radio-${langCode}`;
    radioButton.name = "language";
    radioButton.value = langCode;
    radioButton.checked = langCode === userLang ? true : false;
    radioButton.addEventListener("change", () => {
      setUserLang(radioButton.value);
    });

    const labelElement = document.createElement("label");
    labelElement.htmlFor = `radio-${langCode}`;
    labelElement.textContent = label;

    radioButtonsContainer.appendChild(radioButton);
    radioButtonsContainer.appendChild(labelElement);
  }
}
generateLanguageRadioButtons();

// langauge swap
const langElements = document.querySelectorAll("[txt-code]");
function setUserLang(l) {
  userLang = l;
  setDate();
  renderDays();
  displayAlarms();
  translateTexts();
}
function translateTexts() {
  langElements.forEach((el) => {
    const key = el.getAttribute("txt-code");
    el.innerText = translations[userLang][key];
  });
}
