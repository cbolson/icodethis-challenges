const modeButtons = document.querySelectorAll("[mode-btn]");
const modePanels = document.querySelectorAll("[mode-panel");

let activeMode = "alarm";

// toggle panels
modeButtons.forEach((btn) => {
  const mode = btn.getAttribute("mode-btn");
  btn.addEventListener("click", () => {
    setActivePanel(mode);
  });
});
function setActivePanel(mode) {
  const modePanel = document.querySelector(`[mode-panel=${mode}]`);
  // modePanel.scrollIntoView({ behavior: "smooth", inline: "start" });
  modeButtons.forEach((b) => {
    b.classList.remove("active");
    modePanels.forEach((panel) => {
      //panel.classList.add("hidden");
      panel.style.transform = "scale(0)";
    });
  });
  modePanel.classList.remove("hidden");
  modePanel.style.transform = "scale(1)";
  document.querySelector(`[mode-btn=${mode}]`).classList.add("active");
}
// set inital active panel
setActivePanel(activeMode);

// time selects

// get current time to set selected values
const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();

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

// get all select numnber list
const timeSelect = document.querySelectorAll("[time-type]");
timeSelect.forEach((t) => {
  const type = t.getAttribute("time-type");
  const intial = t.getAttribute("time-default");
  switch (type) {
    case "hour":
      selectNumbers(t, 0, 24, intial === "current" ? currentHour : 0);
      break;
    case "min":
      selectNumbers(t, 0, 59, intial === "current" ? currentMinute : 0);
      break;
    case "sec":
      selectNumbers(t, 0, 59, intial === "current" ? currentSecond : 0);
      break;
  }
});

// ALARM
const selectHours = document.querySelector("#hour");
const selectMin = document.querySelector("#min");
const btnAlarn = document.querySelector("#btn-set");
const tplAlarm = document.querySelector("#template-alarm");
const alarms = document.querySelector("#alarms");
const alarmIcon = document.querySelector("#icon-alarm");
let alarmsCounter = 0;
btnAlarn.addEventListener("click", () => {
  // create alert
  const alarm = tplAlarm.content.cloneNode(true).querySelector("li");

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
    setTimeout(function () {
      alarm.remove();
    }, 300);
  });
});

// timer
let timerState = "stop";
let deadline;
var timerInterval;
const timerMP3 = "https://www.cbolson.com/sounds/whistle.mp3";
let timerAudio = new Audio(timerMP3);

const timerBtnStart = document.querySelector("#btn-timer-start");
const timerBtnReset = document.querySelector("#btn-timer-reset");
const timerCounter = document.querySelector("#timer-counter");
const timerHour = document.querySelector("#timer-hour");
const timerMin = document.querySelector("#timer-min");
const timerSec = document.querySelector("#timer-sec");
const timerCounterH = document.querySelector("#timer-h");
const timerCounterM = document.querySelector("#timer-m");
const timerCounterS = document.querySelector("#timer-s");

function myTimer() {
  deadline = deadline - 1;
  const newTime = toTimeString(deadline);
  displayTimer(newTime);
  if (deadline < 1) {
    timerAudio.play();
    resetTimer();
  }
}
// play then pause audio
function playAudioAuto() {
  timerAudio.play();
  timerAudio.pause();
}

timerHour.addEventListener("change", () => {
  timerCounterH.innerText = timerHour.value;
});
timerMin.addEventListener("change", () => {
  timerCounterM.innerText = timerMin.value;
});
timerSec.addEventListener("change", () => {
  timerCounterS.innerText = timerSec.value;
});
let timeEnd;
timerBtnStart.addEventListener("click", () => {
  //console.log(timerState);
  if (timerState == "counting") {
    clearInterval(timerInterval);
    timerState = "pause";
    timerBtnStart.innerText = "play_arrow";
    timerBtnStart.style.transform = "rotate(0)";
    return;
  } else if (timerState == "pause") {
    timerInterval = setInterval(myTimer, 1000);
    timerBtnStart.innerText = "equal";
    timerBtnStart.style.transform = "rotate(90deg)";
    timerState = "counting";
  } else {
    const h = timerHour.value;
    const m = timerMin.value;
    const s = timerSec.value;

    deadline = convertToSeconds(h, m, s);
    if (deadline > 0) {
      clearInterval(timerInterval);
      timerInterval = null; //clean timerInterval

      timerState = "counting";
      timerBtnStart.innerText = "equal";
      timerBtnStart.style.transform = "rotate(90deg)";

      timeEnd = deadline;
      // console.log(deadline);

      displayTimer(toTimeString(deadline));
      timerInterval = setInterval(myTimer, 1000);

      playAudioAuto();
    }
  }
});
function displayTimer(newTime) {
  const p = newTime.split(":");
  timerCounterH.innerText = p[0];
  timerCounterM.innerText = p[1];
  timerCounterS.innerText = p[2];

  setTimerCircle(convertToSeconds(p[0], p[1], p[2]));
}

timerBtnReset.addEventListener("click", () => {
  resetTimer();
});

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null; //clean timerInterval
  timerHour.value = "00";
  timerMin.value = "00";
  timerSec.value = "00";
  displayTimer("00:00:00");
  timerBtnStart.innerText = "play_arrow";
  timerBtnStart.style.transform = "rotate(0)";
  timerState = "stop";
}

function setTimerCircle(t) {
  const percentDone = (t / timeEnd) * 100;
  document
    .querySelector("#circle-completed")
    .setAttribute("stroke-dasharray", `${percentDone}, 100`);
}

// stopwatch

const stopBtnStart = document.querySelector("#stop-bt-start");
const stopBtnLap = document.querySelector("#stop-bt-lap");
const stopBtnReset = document.querySelector("#stop-bt-reset");
const laps = document.querySelector("#stopwatch-laps");
const tplLap = document.querySelector("#template-lap");

const millisecondsEl = document.querySelector("#stopwatch-milliseconds");
const secondsEl = document.querySelector("#stopwatch-seconds");
const minutesEl = document.querySelector("#stopwatch-minutes");
const hoursEl = document.querySelector("#stopwatch-hours");

let stopwatchStarted = false;
var stopWatchInterval;

stopBtnStart.addEventListener("click", () => {
  // console.log("start stopwatch");
  if (stopwatchStarted) {
    stopBtnStart.innerText = "play_arrow";
    stopBtnStart.style.transform = "rotate(0)";
    stopwatchStarted = false;

    pauseStopwatch();
  } else {
    stopBtnStart.innerText = "equal";

    stopBtnStart.style.transform = "rotate(90deg)";
    stopwatchStarted = true;

    startStopwatch();
  }
});

stopBtnLap.addEventListener("click", () => {
  //console.log("lap stopwatch");
  lapStopwatch();
});
stopBtnReset.addEventListener("click", () => {
  //console.log("resesst stopwatch");
  //  stopBtnReset.classList.add("animate-spin");
  // stopBtnReset.style.transform = "rotate(360deg)";
  resetStopwatch();
});

let counter;
let ms = 0;
let s = 0;
let m = 0;
let h = 0;

function count() {
  ms++;
  if (ms === 100) {
    s++;
    ms = 0;
  }
  if (s === 60) {
    m++;
    s = 0;
  }
  if (m === 60) {
    h++;
    m = 0;
  }

  millisecondsEl.innerText = formatNum(ms);
  secondsEl.innerText = formatNum(s);
  minutesEl.innerText = formatNum(m);
  hoursEl.innerText = formatNum(h);
}

function formatNum(num) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
function startStopwatch() {
  counter = setInterval(count, 10);
}
function pauseStopwatch() {
  clearInterval(counter);
}
function resetStopwatch() {
  clearInterval(counter);
  counter = 0;
  millisecondsEl.innerText = "00";
  secondsEl.innerText = "00";
  minutesEl.innerText = "00";
  hoursEl.innerText = "00";
  laps.innerHTML = "";
}
let lapCounter = 1;
function lapStopwatch() {
  const currentTime = `${formatNum(h)}:${formatNum(m)}:${formatNum(
    s
  )}:${formatNum(ms)}`;
  const newLap = tplLap.content.cloneNode(true).querySelector("li");
  newLap.querySelector(
    "[lap-num]"
  ).innerHTML = `# <strong>${lapCounter}</strong>`;
  newLap.querySelector("[lap-time]").innerText = currentTime;
  laps.prepend(newLap);
  ++lapCounter;
}

function convertToSeconds(hours, minutes, seconds) {
  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
}

function toTimeString(totalSeconds) {
  const totalMs = totalSeconds * 1000;
  const result = new Date(totalMs).toISOString().slice(11, 19);
  return result;
}
