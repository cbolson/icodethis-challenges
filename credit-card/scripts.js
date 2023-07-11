const paymentButtons = document.querySelectorAll("[payment-type]");
const paymentPanels = document.querySelectorAll("[payment-panel]");

console.log(paymentPanels);

paymentButtons.forEach((btn) => {
  const type = btn.getAttribute("payment-type");
  btn.addEventListener("change", () => {
    paymentPanels.forEach((panel) => {
      // this is not the best method as it will break if we have more than 2 methods but it will do for this challenge
      panel.classList.toggle("active");
    });
    //document.querySelector(`[payment-panel=${type}]`).classList.add("active");
  });
});

// utilities

// date selectors
const yearSelect = document.querySelector("#card-year");
const monthSelect = document.querySelector("#card-month");
const daySelect = document.querySelector("#card-day");

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

  const maxYears = currentYear + 10;

  // load years
  let j = 0;
  for (let i = currentYear; i <= maxYears; i++) {
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

// credit card format (thanks Google)
const input = document.querySelector("#credit-card");
input.addEventListener("input", () => {
  input.value = formatNumber(input.value.replaceAll(" ", ""));
});
const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

// utility - numbers only
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});
