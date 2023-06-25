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
// get current time to set selected values
const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();

const selectHours = document.querySelector("#hour");
const selectMin = document.querySelector("#min");
const btnAlarn = document.querySelector("#btn-set");
const template = document.querySelector("#template-alarm");
const alarms = document.querySelector("#alarms");
const alarmIcon = document.querySelector("#icon-alarm");
let alarmsCounter = 0;

selectNumbers(selectHours, 0, 24, currentHour);
selectNumbers(selectMin, 0, 59, currentMinute);

/*
ideally the alarms would be stored as an array and saved to local storage
*/

btnAlarn.addEventListener("click", () => {
  // create alert
  const alarm = template.content.cloneNode(true).querySelector("li");

  // get time
  const h = selectHours.value;
  const m = selectMin.value;

  // should add local storage here.....

  alarm.querySelector("p").innerHTML = `${h}:${m}`;
  alarms.append(alarm);

  // increase alarms counter
  alarmsCounter++;

  // add delete button
  alarm.querySelector("button").addEventListener("click", () => {
    alarm.style.transform = "scale(0)";
    alarmsCounter--;
    setAlarmIconState(alarmsCounter);
    setTimeout(function () {
      alarm.remove();
    }, 300);
  });
  setAlarmIconState(alarmsCounter);
});

function setAlarmIconState(counter) {
  if (counter > 0) {
    alarmIcon.classList.add("text-red-400");
  } else {
    alarmIcon.classList.remove("text-red-400");
  }
}
