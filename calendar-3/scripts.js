// NOTE - this challenge doesn't require language changes but I'll leave the code here for future use

// get current date, year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// constants
const months = [];
let userLang = "en";
months["en"] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

months["es"] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abríl",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
months["fr"] = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "auot",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];
months["de"] = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
months["it"] = [
  "gennaio",
  "febbraio",
  "Marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "Agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];

const days = [];
days["en"] = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
days["es"] = ["Do", "Lu", "Ma", "X", "Ju", "Vi", "Sa"];
days["fr"] = ["Di", "Lu", "Ma", "Mi", "Ji", "Ve", "Sa"];
days["de"] = ["So", "Mo", "Si", "Mi", "Do", "Fr", "So"];
days["it"] = ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"];

// texts
const translations = {
  // English translations
  en: {
    "events-title": "Events of the month",
    "events-btn-add": "Add event",
    "events-btn-save": "Save event",
    "events-date-inst": "Click on a date in the calendar for the new event",
  },
  es: {
    "events-title": "Eventos del mes",
    "events-btn-add": "Añadir evento",
    "events-btn-save": "Guardar evento",
    "events-date-inst":
      "Pinche en una fecha en el calendario para el nuevo evento",
  },
  fr: {
    "events-title": "Les événements du mois",
    "events-btn-add": "Ajouter un évènement",
    "events-btn-save": "Sauvegarder",
    "events-date-inst":
      "Cliquez sur une date dans le calendrier pour le nouvel événement",
  },
  de: {
    "events-title": "Ereignisse des Monats",
    "events-btn-add": "Hinzufügen",
    "events-btn-save": "Speichern",
    "events-date-inst":
      "Klicken Sie im Kalender auf ein Datum für die neue Veranstaltung",
  },
  it: {
    "events-title": "Eventi del mese",
    "events-btn-add": "Aggiungi evento",
    "events-btn-save": "Salva evento",
    "events-date-inst":
      "Fare clic su una data nel calendario per il nuovo evento",
  },
};

const eventTypes = [
  {
    id: 1,
    name: "Meal",
    icon: "restaurant",
  },
  {
    id: 2,
    name: "Celebration",
    icon: "celebration",
  },
  {
    id: 3,
    name: "Payment",
    icon: "shopping_cart",
  },
  {
    id: 4,
    name: "Special",
    icon: "favorite",
  },
  {
    id: 5,
    name: "Meeting",
    icon: "groups",
  },
];

// used currMonth for some of the dates to ensure that we always show events on current month
const userEvents = [
  {
    id: 1,
    date: `2023-${pad(currMonth + 1, 2)}-06`,
    time: "13:00",
    event_id: 1,
    desc: "Meal with dad",
  },
  {
    id: 2,
    date: `2023-${pad(currMonth + 1, 2)}-04`,
    time: "",
    event_id: 3,
    desc: "Pay phone bills",
  },
  {
    id: 3,
    date: `2023-${pad(currMonth + 1, 2)}-26`,
    time: "",
    event_id: 4,
    desc: "Special Day",
  },
  {
    id: 4,
    date: "2023-09-25",
    time: "11:45",
    event_id: 5,
    desc: "Meeting with John",
  },
  {
    id: 5,
    date: "2023-12-12",
    time: "",
    event_id: 2,
    desc: "My Birthday",
  },
  {
    id: 6,
    date: "2023-11-30",
    time: "17:30",
    event_id: 3,
    desc: "Pay House insurance",
  },
  {
    id: 7,
    date: "2023-05-25",
    time: "19:30",
    event_id: 4,
    desc: "First iCodeThis challenge",
  },
  {
    id: 8,
    date: "2023-09-01",
    time: "",
    event_id: 2,
    desc: "Wife's birthday",
  },
];

// selectors
const daysTag = document.querySelector("[data-dates]");
const currentDate = document.querySelector("[data-month]");
const btnsnNav = document.querySelectorAll("[cal-nav]");
const btnsYear = document.querySelectorAll("[cal-year]");

const footerMonths = document.querySelector("#footer-months");
const langElements = document.querySelectorAll("[data-lang]");
const tplEvent = document.querySelector("#tpl-event");
const listEvents = document.querySelector("#list-events");

//const btnAddEvent = document.querySelector("#btn-add-event");

//const btnMOnth = document.querySelectorAll("[cal-month]");

// nav months - dinamic to use languages

function renderFooterMonths() {
  footerMonths.innerHTML = "";
  months[userLang].forEach((m, idx) => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.innerText = m.substring(0, 3);
    btn.setAttribute("id", `m-${idx}`);
    btn.addEventListener("click", () => {
      currMonth = idx;
      //btn.classList.add("text-red-500");
      renderCalendar();
    });
    footerMonths.append(btn);
  });
}

renderFooterMonths();

(renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let dateEl = "";
  // fill previous month days to 1st date of current month
  for (let i = firstDayofMonth; i > 0; i--) {
    dateEl += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  // current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "today"
        : "";

    // checkm if date has an event
    let isEvent = "";

    const thisDate = `${currYear}-${pad(currMonth + 1, 2)}-${pad(i, 2)}`;
    if (userEvents.find((x) => x.date == thisDate)) {
      isEvent = "event";
    }

    dateEl += `<li class="${isToday} ${isEvent}" data-date="${thisDate}">${i}</li>`;
  }

  // add days to complete week A
  for (let i = lastDayofMonth; i < 6; i++) {
    dateEl += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  // add dates to calendar
  currentDate.innerText = `${months[userLang][currMonth].substring(
    0,
    3
  )}. ${currYear}`;
  daysTag.innerHTML = dateEl;

  // scroll footer months
  document.querySelector(`#m-${currMonth}`).scrollIntoView();

  // render events
  renderEvents(currMonth + 1);
})();

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
// calendar month nav buttons
/*
// default calender nav - leave in for reference
btnsnNav.forEach(btn => {
    const direction = btn.getAttribute("cal-nav");

    btn.addEventListener("click", () => {
        currMonth = direction === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});
*/
const WIDTH = 50; // this should be calculated dinamically
btnsnNav.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.getAttribute("cal-nav") === "prev"
      ? (footerMonths.scrollLeft -= WIDTH)
      : (footerMonths.scrollLeft += WIDTH);
  });
});

// change year (keep seledcted month)
btnsYear.forEach((btn) => {
  const direction = btn.getAttribute("cal-year");
  btn.addEventListener("click", (e) => {
    currYear = direction === "prev" ? currYear - 1 : currYear + 1;
    // update year nav values
    btnsYear[0].innerText = currYear - 1;
    btnsYear[1].innerText = currYear + 1;
    renderCalendar();
  });
});

// day titles
const weekDays = document.querySelector("[data-weekdays]");
(renderWeekdays = () => {
  weekDays.innerHTML = "";
  days[userLang].forEach((day) => {
    const d = document.createElement("li");
    d.innerText = day;
    weekDays.append(d);
  });
})();

// load month events
function renderEvents(m) {
  // console.log(m)
  listEvents.innerHTML = "";
  // filter events only by defined month
  const monthEvents = userEvents.filter((event) => {
    return event.date.split("-")[1] == m;
  });
  monthEvents.forEach((e) => {
    const item = tplEvent.content.cloneNode(true);

    const eventData = eventTypes.find((x) => x.id == e.event_id);
    item.querySelector("[event-icon]").innerText = eventData.icon;
    item.querySelector("[event-title]").innerText = e.desc;
    item.querySelector("[event-date]").innerText = `${e.date} ${e.time}`;
    item.querySelector(["[event-delete]"]).addEventListener("click", () => {
      removeItem(e.id);
      renderEvents(m);
    });
    item.querySelector(["[event-edit]"]).addEventListener("click", () => {
      alert("TO DO");
    });

    listEvents.append(item);
  });
}

// remove event from user list
function removeItem(itemID) {
  userEvents.forEach((ev, key) => {
    if (ev.id == itemID) {
      delete userEvents[key];
    }
  });
}

// slide out events panel
let eventsVisible = false;
const btnEvents = document.querySelector("#btn-events");
const panelEvents = document.querySelector("#panel-events");

btnEvents.addEventListener("click", () => {
  eventsVisible ? hideEvents() : showEvents();
});

function showEvents() {
  // get screen width
  const w = window.innerWidth;
  if (w < 1050) panelEvents.style.transform = "translateY(100%)";
  else panelEvents.style.transform = "translateX(100%)";
  eventsVisible = true;
}
function hideEvents() {
  panelEvents.style.transform = "translateX(0)";
  eventsVisible = false;
}
function reportWindowSize() {
  hideEvents();
}
window.onresize = reportWindowSize;

const panelNewEvent = document.querySelector("#panel-new-event");
const btnCloseNewEvent = panelNewEvent.querySelector("#btn-close-add-event");

// add events to date
daysTag.addEventListener("click", (e) => {
  const selectedDate = e.target.getAttribute("data-date");
  if (e.target.classList.contains("event")) showEvents();
  else panelNewEvent.classList.add("scale-100");

  formDate.value = selectedDate;
});

// create list of event types for new event form
const tplEventType = document.querySelector("#tpl-event-type");
const eventTypesList = document.querySelector("#list-event-types");
function renderAddEventForm() {
  eventTypesList.innerHTML = "";
  eventTypes.forEach((ev) => {
    const item = tplEventType.content.cloneNode(true);
    item.querySelector("input").setAttribute("id", `type-${ev.id}`);
    item.querySelector("input").value = ev.id;
    item.querySelector("label").setAttribute("for", `type-${ev.id}`);
    item.querySelector("label").innerText = ev.icon;

    //item.querySelector("p").innerText = ev.name;
    eventTypesList.append(item);
  });
}
renderAddEventForm();

// add event

/*
btnAddEvent.addEventListener("click", () => { 
    panelNewEvent.style.transform = "translate(0)";
})
*/
//closeNewEvent();
btnCloseNewEvent.addEventListener("click", () => {
  closeNewEvent();
});
function closeNewEvent() {
  panelNewEvent.classList.remove("scale-100");
}

const formNewEvent = document.querySelector("#form-new-event");
const formDate = formNewEvent.querySelector("#event-date");

formNewEvent.addEventListener("submit", (e) => {
  e.preventDefault();
  // save new event to list and rerender everything
  const newCat = formNewEvent.querySelector(
    'input[name="event-type"]:checked'
  ).value;
  const newDesc = formNewEvent.querySelector("#event-desc").value;
  const newTime = formNewEvent.querySelector("#event-time").value;
  const newDate = formDate.value;
  if (!newDate) {
    alert("Please select a date");
    return;
  }
  const newEvent = {
    id: "",
    date: newDate,
    time: newTime,
    desc: newDesc,
    event_id: parseInt(newCat),
  };
  userEvents.push(newEvent);
  closeNewEvent();
  renderCalendar();
  renderEvents(currMonth + 1);
  showEvents();
});

// lang select
const langBtns = document.querySelectorAll("[lang-choose]");
langBtns.forEach((btn) => {
  const l = btn.getAttribute("lang-choose");
  btn.addEventListener("click", () => {
    langBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    setUserLang(l);
    setTimeout(() => hideLanguages(), 3000);
  });
});

function setUserLang(l) {
  userLang = l;
  renderCalendar();
  renderWeekdays();
  renderFooterMonths();
  langElements.forEach(translateElement);
}
function translateElement(element) {
  const key = element.getAttribute("data-lang");
  const translation = translations[userLang][key];
  element.innerText = translation;
}

let langListVisible = false;
const listLang = document.querySelector("#list-lang");
document.querySelector("#btn-lang").addEventListener("click", () => {
  langListVisible ? hideLanguages() : showLanguages();
});

function showLanguages() {
  listLang.style.transform = "translatey(-40px)";
  langListVisible = true;
}
function hideLanguages() {
  listLang.style.transform = "translateY(0)";
  langListVisible = false;
}
