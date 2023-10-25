// get current date, year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// Format the time as HH:MM
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const currentTime = `${hours}:${minutes}`;

// Set the value of the input field to the current time
document.getElementById("event-time").value = currentTime;

// define user lang (not using lang selector in this challende but I will leave the code just in case)
let userLang = "en";

// constants
const months = [];
const days = [];

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

days["en"] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/*
months["es"] = ["Enero", "Febrero", "Marzo", "Abríl", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months["fr"] = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "auot", "septembre", "octobre", "novembre", "décembre"];

months["de"] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

months["it"] = ["gennaio", "febbraio", "Marzo", "aprile", "maggio", "giugno", "luglio", "Agosto", "settembre", "ottobre", "novembre", "dicembre"];


days["es"] = ["Do", "Lu", "Ma", "X", "Ju", "Vi", "Sa"];
days["fr"] = ["Di", "Lu", "Ma", "Mi", "Ji", "Ve", "Sa"];
days["de"] = ["So", "Mo", "Si", "Mi", "Do", "Fr", "So"];
days["it"] = ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"];
*/

// user events - it may be more efficent to save events by date but as I copied this from a previous challenfe I didn't want to change things to much
// NOTE - I used currMonth for some of the dates to ensure that we always show events on current month
const userEvents = [
  {
    id: "1",
    date: "2023-10-25",
    title: "Team Building Workshop",
    alarm_set: true,
    time: "09:00 AM",
  },
  {
    id: "2",
    date: "2023-10-25",
    title: "Project Kick-off Meeting",
    alarm_set: false,
    time: "02:30 PM",
  },
  {
    id: "3",
    date: "2023-11-11",
    title: "Veterans Day",
    alarm_set: true,
  },
  {
    id: "4",
    date: "2023-11-22",
    title: "Thanksgiving Day",
    alarm_set: true,
  },
  {
    id: "5",
    date: "2023-11-22",
    title: "Family Dinner",
    alarm_set: false,
    time: "07:00 PM",
  },
  {
    id: "6",
    date: "2023-12-06",
    title: "Company Holiday Party",
    alarm_set: true,
    time: "06:30 PM",
  },
  {
    id: "7",
    date: "2023-12-06",
    title: "Year-End Review",
    alarm_set: false,
    time: "11:00 AM",
  },
  {
    id: "8",
    date: "2023-12-24",
    title: "Christmas Eve",
    alarm_set: true,
  },
  {
    id: "9",
    date: "2023-12-24",
    title: "Gift Shopping",
    alarm_set: false,
    time: "03:45 PM",
  },
  {
    id: "10",
    date: "2023-12-25",
    title: "Christmas Day",
    alarm_set: true,
  },
  {
    id: "11",
    date: "2023-12-25",
    title: "Holiday Feast",
    alarm_set: true,
  },
  {
    id: "12",
    date: "2024-01-01",
    title: "New Year's Day",
    alarm_set: false,
  },
  {
    id: "13",
    date: "2024-01-01",
    title: "Resolution Party",
    alarm_set: true,
    time: "08:00 PM",
  },
  {
    id: "14",
    date: "2024-01-20",
    title: "Martin Luther King Jr. Day",
    alarm_set: true,
  },
  {
    id: "15",
    date: "2024-02-14",
    title: "Valentine's Day",
    alarm_set: false,
  },
  {
    id: "16",
    date: "2024-02-14",
    title: "Romantic Dinner",
    alarm_set: true,
    time: "06:30 PM",
  },
  {
    id: "17",
    date: "2024-02-22",
    title: "President's Day",
    alarm_set: true,
  },
  {
    id: "18",
    date: "2024-02-22",
    title: "Shopping Sale",
    alarm_set: false,
  },
  {
    id: "19",
    date: "2024-03-17",
    title: "St. Patrick's Day",
    alarm_set: true,
  },
  {
    id: "20",
    date: "2024-03-17",
    title: "Parade Celebration",
    alarm_set: false,
    time: "02:00 PM",
  },
  {
    id: "21",
    date: "2024-03-25",
    title: "Team Building Workshop",
    alarm_set: false,
    time: "10:00 AM",
  },
  {
    id: "22",
    date: "2024-03-31",
    title: "Project Deadline",
    alarm_set: true,
    time: "03:00 PM",
  },
  {
    id: "23",
    date: "2023-12-12",
    title: "My Birthday",
    alarm_set: false,
    time: "",
  },
  {
    id: "23",
    date: "2023-12-12",
    title: "iCodeThis 1ts Anniversary",
    alarm_set: false,
    time: "",
  },
];

// selectors
const daysTag = document.querySelector("[data-dates]");
const currentDate = document.querySelector("[data-month]");
const btnsnNav = document.querySelectorAll("[cal-nav]");
const tplEvent = document.querySelector("#tpl-event");
const tplNoEvents = document.querySelector("#tpl-no-events");
const listEvents = document.querySelector("#list-events");
const weekDays = document.querySelector("[data-weekdays]");
const panelNewEvent = document.querySelector("#panel-new-event");
const btnCloseNewEvent = panelNewEvent.querySelector("#btn-close-add-event");
const btnNewEvent = document.querySelector("#btn-add-event");
const formNewEvent = document.querySelector("#form-new-event");
const formDate = formNewEvent.querySelector("#event-date");
//const tplEventType = document.querySelector("#tpl-event-type");
const elAlarm = formNewEvent.querySelector("#alarm");
const elDesc = formNewEvent.querySelector("#event-desc");
const elTime = formNewEvent.querySelector("#event-time");

// function - render calendar
function renderCalendar(dateSent = "") {
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
    // checkm if date has an event
    let isEvent = "";
    const thisDate = `${currYear}-${pad(currMonth + 1, 2)}-${pad(i, 2)}`;
    let isToday = "";
    if (dateSent) {
      renderEventsList(dateSent);
    }

    if (
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
    ) {
      // mark current date
      isToday = "today";
      // load todays events
      renderEventsList(thisDate);
    }

    // filter events only by defined month
    const dayEvents = userEvents.filter((event) => {
      return event.date == thisDate;
    });

    // add dots for daily events
    let dots = "";
    if (dayEvents.length > 0) {
      dots = "<div>";
      dayEvents.forEach((e) => {
        //console.log(thisDate, e.event_id);
        // const eventData = eventTypes.find(x => x.id == e.event_id);
        dots += `<span class="bg-cyan-800"></span>`;
      });
      dots += "</div>";
    }

    dateEl += `<li class="${isToday} ${isEvent}" data-date="${thisDate}">${i} ${dots}</li>`;
  }

  // add days to complete week A
  for (let i = lastDayofMonth; i < 6; i++) {
    dateEl += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  // add dates to calendar
  currentDate.innerText = `${months[userLang][currMonth]} ${currYear}`;
  daysTag.innerHTML = dateEl;
}
renderCalendar();

// buttons - calendar nav
btnsnNav.forEach((btn) => {
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

// function - day titles
function renderWeekdays() {
  weekDays.innerHTML = "";
  days[userLang].forEach((day) => {
    const d = document.createElement("li");
    d.innerText = day.substring(0, 2);
    weekDays.append(d);
  });
}
renderWeekdays();

// add events to date
daysTag.addEventListener("click", (e) => {
  const selectedDate = e.target.getAttribute("data-date");
  daysTag.querySelectorAll("li").forEach((d) => d.classList.remove("active"));
  e.target.classList.add("active");
  renderEventsList(selectedDate);
});

// function -  list events for selected date
function renderEventsList(thisDate) {
  formDate.value = thisDate;

  let delay = 0;
  // hide exisiting events first
  const exisitngEvents = listEvents.querySelectorAll("article");
  if (exisitngEvents.length) {
    exisitngEvents.forEach((el) => {
      setTimeout(() => el.classList.add("scale-0"), delay);
      delay += 100;
    });
  } else if (document.querySelector("#icon-no-event")) {
    // hide "no events" icon
    document.querySelector("#icon-no-event").classList.add("scale-0");
    delay += 300;
  }

  // after dekay, show current events for selected date
  setTimeout(() => {
    // empty events
    listEvents.innerHTML = "";
    // get events for this date
    // filter events only by defined month
    const dayEvents = userEvents.filter((event) => {
      return event.date == thisDate;
    });

    if (dayEvents.length > 0) {
      let delay = 0;

      dayEvents.forEach((e) => {
        const item = tplEvent.content.cloneNode(true);
        const article = item.querySelector("article");

        const elAlarm = item.querySelector("[event-alarm]");
        const elTime = item.querySelector("[event-time]");

        item.querySelector("[event-title]").innerText = e.title;

        if (!e.alarm_set) {
          elAlarm.classList.remove("text-green-400");
          elAlarm.classList.add("text-red-400");
          elAlarm.innerText = "timer_off";
        }
        if (e.time) {
          elTime.innerText = e.time;
        } else {
          elTime.remove();
        }
        item.querySelector(["[event-delete]"]).addEventListener("click", () => {
          removeItem(e.id);
          renderEventsList(thisDate);
        });
        //item.querySelector(["[event-edit]"]).addEventListener("click", () => {
        //    alert("TO DO");
        // })
        // add event to dom
        listEvents.append(item);

        setTimeout(() => article.classList.remove("opacity-0"), delay);
        delay += 0;
      });
    } else {
      const item = tplNoEvents.content.cloneNode(true);
      listEvents.append(item);
    }
  }, delay);
}

// remove event from user list
function removeItem(itemID) {
  userEvents.forEach((ev, key) => {
    if (ev.id == itemID) {
      delete userEvents[key];
    }
  });
}

// btn - show new event panel
btnNewEvent.addEventListener("click", () => {
  // console.log(panelNewEvent);
  panelNewEvent.classList.remove("translate-y-full");
});

// btn - close new event panel
btnCloseNewEvent.addEventListener("click", () => {
  closeNewEvent();
});

// function - close events panel
function closeNewEvent() {
  panelNewEvent.classList.add("translate-y-full");
}

// form - new event add
formNewEvent.addEventListener("submit", (e) => {
  e.preventDefault();
  // save new event to list and rerender everything
  const newDesc = elDesc.value;
  const newTime = elTime.value;
  const setAlarm = elAlarm.checked ? true : false;
  const newDate = formDate.value;
  if (!newDate) {
    alert("Please select a date");
    return;
  }
  // add event to object
  const newEvent = {
    id: "",
    date: newDate,
    time: newTime,
    alarm_set: setAlarm,
    title: newDesc,
  };
  //  console.log(newEvent);
  userEvents.push(newEvent);

  // redraw calender to show date with events indicators
  renderCalendar(newDate);
  //renderEventsList(currMonth + 1);
  // close new event panel
  closeNewEvent();

  // clear event title for next new event
  elDesc.value = "";
  elAlarm.checked = false;
});

// pad number -  used in months and days to add leading 0
function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
