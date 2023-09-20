const progressBar = document.querySelector("#progress");
const percentCounter = document.querySelector("#percent");
const btnContinue = document.querySelector("#btn-continue");
const btnContinueTxt = btnContinue.querySelector("div");
const txtInfo = document.querySelector("#txt-inst");
const txtProgress = document.querySelector("#txt-progress");
const txtFinish = document.querySelector("#txt-finish");
const party = document.querySelector("#party");
const man = document.querySelector("#man");
const txtMsg = document.querySelector("#text-msg");

let interval;
let started = false;
let pause = false;
let percent = 0;
let steps = 50; // timer for progress - higher number = slower progress bar

const MESSAGES = [
  "Starting is the hard part!",
  "You are on your way!",
  "You can do this!",
  "It is only going to get easier!",
  "Almost 50% done!",
  "More than half way there!",
  "The hardest part is behind you!",
  "Not long to go now!",
  "You've got this!",
  "Ready to party?",
];

// main button action
btnContinue.addEventListener("click", () => {
  if (pause) {
    pauseProgress();
    btnContinueTxt.classList.add("scale-0");

    setTimeout(() => {
      btnContinueTxt.innerText = "Continue";
      btnContinue.classList.add("animate-pulse");
      btnContinueTxt.classList.remove("scale-0");
    }, 300);
  } else {
    // continue
    startProgress();
    btnContinueTxt.classList.add("scale-0");
    btnContinue.classList.remove("animate-pulse");
    setTimeout(() => {
      btnContinueTxt.innerText = "Pause";
      btnContinueTxt.classList.remove("scale-0");
    }, 300);
  }
  pause = pause ? false : true;
});

// start/continue progress bar
function startProgress() {
  man.classList.add("opacity-0");
  if (!started) {
    // swap texts
    txtFinish.classList.add("-translate-x-full");
    txtInfo.classList.add("translate-x-full");
    txtProgress.classList.remove("-translate-x-full");
    txtProgress.classList.remove("translate-x-full");
    party.classList.remove("scale-100");
    started = true;
  }
  interval = setInterval(incrementProgress, steps);
}

// pause bar
function pauseProgress() {
  clearInterval(interval);

  // set message according to percent
  txtMsg.innerText = textByPercentage(percent);

  // show man after short delay
  setTimeout(() => man.classList.remove("opacity-0"), 300);
}

// get text according to percent
function textByPercentage(percent) {
  if (percent === 100) return "Well done Richard!";
  const i = Math.floor((percent / 100) * MESSAGES.length);
  //console.log(percent, i,MESSAGES[i])
  return MESSAGES[i];
}

// progress bar animation
function incrementProgress() {
  if (percent >= 100) {
    clearInterval(interval);
    progressCompleted();
  } else {
    percent++;
    progressBar.style.width = percent + "%";
    percentCounter.innerText = `${percent}%`;

    party.classList.remove("scale-100");
  }
}

function progressCompleted() {
  // swap texts
  txtProgress.classList.add("translate-x-full");
  txtFinish.classList.remove("-translate-x-full");

  btnContinueTxt.classList.add("scale-0");

  setTimeout(() => {
    btnContinueTxt.innerText = "Restart";
    btnContinueTxt.classList.remove("scale-0");
    party.classList.add("scale-150");
    setTimeout(() => {
      party.classList.remove("scale-150");
      party.classList.add("scale-100");
    }, 250);
  }, 300);

  started = false;
  percent = 0;
  pause = false;
}

// hide main - I left him visible for the preview capture
man.classList.add("opacity-0");

//setTimeout(() => man.classList.add("opacity-0"), 50)
//setTimeout(startProgress, 2000);
