// constants
const MONTHS = [
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

// selectors
const calendar = document.querySelector("#calendar");
const daysTag = document.querySelector(".days");
const currentDate = document.querySelector("#current-month");
const btnsnNav = document.querySelectorAll(".calendar__nav");
const btnPreselects = document.querySelector("#btn-preselects");
const listPreselects = document.querySelector("#preselect-list");
const dateSelectors = document.querySelectorAll("[preselect-select]");
const dateTitle = document.querySelector("#preselect__desc");

// get current date, year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

let dateFrom = "";
let dateTo = "";

(getCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let dateEl = "";
  let numRows = 0;
  // fill previous month days to 1st date of current month
  for (let i = firstDayofMonth; i > 0; i--) {
    // check if date is within selected dates
    // TO DO

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
    let isSelected = "";
    if (dateFrom && dateTo) {
      // check > from && check < to
      const checkDate = new Date(currYear, currMonth, i);
      isSelected =
        checkDate >= dateFrom && checkDate <= dateTo ? "selected" : "";
    }
    dateEl += `<li class="${isToday} ${isSelected}" data-date="">${i}</li>`;
  }

  // add days to complete week A
  for (let i = lastDayofMonth; i < 6; i++) {
    // check if date is within selected dates
    // TO DO

    dateEl += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  // add dates to calendar
  currentDate.innerText = `${MONTHS[currMonth]} ${currYear}`;
  daysTag.innerHTML = dateEl;
})();

// calendar month nav buttons
btnsnNav.forEach((btn) => {
  btn.addEventListener("click", () => {
    currMonth = btn.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    getCalendar();
  });
});

// preselect toggle
btnPreselects.addEventListener("click", () => {
  // selectDatesShowing = true;
  listPreselects.classList.toggle("show");
});

function daysAgo(startingDate, days) {
  return new Date(new Date().setDate(startingDate.getDate() - days));
}

function getRangeType(type) {
  if (!type) return;

  // in this code the last date will always be the current date so we define that and at the end of
  // this function reload the calendar tp the curremt month
  dateTo = new Date();
  dateTo.setHours(0, 0, 0, 0);
  currYear = dateTo.getFullYear();
  currMonth = dateTo.getMonth();

  switch (type) {
    case "today":
      dateFrom = dateTo;
      break;
    case "yesterday":
      // get date for day -1
      dateFrom = daysAgo(dateTo, 1);
      dateTo = dateFrom;
      break;
    case "7-days":
      // last seven days
      dateFrom = daysAgo(dateTo, 7);
      break;
    case "month":
      // all dates to today from current month
      dateFrom = daysAgo(dateTo, dateTo.getDate() - 1);
      break;
    case "30-days":
      // last 30 days
      dateFrom = daysAgo(dateTo, 30);
      break;
    case "year":
      // year to date
      dateFrom = `${currYear}/01/01`;
      break;
  }

  dateFrom = new Date(dateFrom).setHours(0, 0, 0, 0);

  getCalendar();
}

// presselect dates or peridos
dateSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    const type = selector.getAttribute("preselect-select");
    const str = selector.innerText;

    // hide selectors
    listPreselects.classList.remove("show");

    // update title
    dateTitle.innerText = str;

    // define dates
    getRangeType(type);
  });
});

calendar.addEventListener("click", () => {
  // hide selectors
  listPreselects.classList.remove("show");
});
