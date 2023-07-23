// close it if you can!
const popup = document.querySelector("#popup");
document.querySelector("#btn-close").addEventListener("click", () => {
  popup.style.transform = "scale(0)";
  setTimeout(function () {
    popup.style.transform = "scale(1)";
  }, 1000);
});

// form submit
const msg = document.querySelector("#msg");
const btnSave = document.querySelector("button[type=submit]");
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  msg.style.transform = "translate(0)";
  btnSave.disabled = true;
  setTimeout(function () {
    btnSave.disabled = false;
    // bounce effect
    msg.style.transform = "translate(0, -20%)"; // move slightly up before down
    setTimeout(function () {
      msg.style.transform = "translate(0, 100%)";
      btnSave.disabled = false;
    }, 300);
  }, 3000);
});

// create select options from given numbers
function selectNumbers(sel, start, end, current) {
  for (var i = start; i <= end; i++) {
    const t = String(i).padStart(2, "0");
    if (t == current) {
      sel[i] = new Option(t, t, true, true);
    } else {
      sel[i] = new Option(t, t);
    }
  }
}

// utilities

// date selectors
const yearSelect = document.querySelector("#select-year");
const monthSelect = document.querySelector("#select-month");
const daySelect = document.querySelector("#select-day");

const months = [
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

(function loadSelectLists() {
  let d = new Date();
  let currentYear = d.getFullYear();
  let curentMonth = d.getMonth();

  const minYear = currentYear - 99;

  // load years
  let j = 0;
  for (let i = minYear; i <= currentYear; i++) {
    yearSelect[j] = new Option(i, i);
    j++;
  }

  // load months
  let k = 0;
  for (let i = 0; i < months.length; i++) {
    if (i == curentMonth)
      monthSelect[k] = new Option(months[i], i, true, true); // current month
    else monthSelect[k] = new Option(months[i], i);
    k++;
  }

  populateDays(monthSelect.value);
})();
// year change - reload days
yearSelect.onchange = function () {
  populateDays(monthSelect.value);
};

// month change - reload days
monthSelect.onchange = function () {
  populateDays(monthSelect.value);
};

function populateDays(month) {
  // empty list
  daySelect.innerText = null;

  // default num days in month
  let daysInMonth = 31;

  // define days according to month
  switch (month) {
    case "1":
      //Check for a leap year
      let year = yearSelect.value;
      if (new Date(year, 1, 29).getMonth() === 1) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
      break;
    case "3":
    case "5":
    case "8":
    case "10":
      daysInMonth = 30;
      break;
  }
  // add days
  let j = 0;
  for (let i = 1; i <= daysInMonth; i++) {
    daySelect[j] = new Option(i, i);
    j++;
  }
}
