const HOURS_WORKED = [];

const formEl = document.querySelector("#form-hours");
const counterButtons = document.querySelectorAll("[btn-counter]");
const counterDisplay = document.querySelector("#counter-display");
const hoursTypeEl = document.querySelector("#hours-type");
const listHoursEl = document.querySelector("#list-hours");
const hoursWorkedTpl = document.querySelector("#tpl-hours-worked");
const radio1 = document.querySelector("#radio-1");
const cancelBtn = document.querySelector("#btn-cancel");

let currentCounterVal = 1;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const hoursType = hoursTypeEl.value;
  console.log(hoursType, currentCounterVal);

  // Push new values to the JSON object
  HOURS_WORKED.push({
    type: hoursType,
    hours: currentCounterVal,
  });

  renderHours();
  radio1.checked = true;
});

cancelBtn.addEventListener("click", () => {
  currentCounterVal = 1;
  setCurrentCounterDisplay();
  radio1.checked = true;
});

function renderHours() {
  listHoursEl.innerHTML = "";

  if (HOURS_WORKED.length === 0) {
    listHoursEl.innerHTML = `<p class="px-10 text-center opacity-70">You haven't logged any hours yet</p >`;
    return;
  }

  HOURS_WORKED.forEach(({ type, hours }) => {
    const clone = hoursWorkedTpl.content.cloneNode(true);
    clone.querySelector("p").innerText = type;
    clone.querySelector("time").innerText = hours;

    listHoursEl.append(clone);
  });
}
renderHours();

function setCurrentCounterDisplay() {
  counterDisplay.innerText = currentCounterVal;
}

counterButtons.forEach((btn) => {
  btn.addEventListener("pointerdown", () => {
    const direction = btn.getAttribute("btn-counter");
    if (direction === "more") {
      currentCounterVal++;
    } else {
      currentCounterVal--;
      if (currentCounterVal < 1) currentCounterVal = 1;
    }
    setCurrentCounterDisplay();
  });
});
