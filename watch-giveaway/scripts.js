"use strict";

// tailwind config
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Titillium Web', 'sans-serif'],
            },
        }
    }
}

// SELECTORS

//const daysEl = document.getElementById("days");
const elHours = document.getElementById("hours");
const elMinutes = document.getElementById("minutes");
const elSeconds = document.getElementById("seconds");
const colorChangers = document.querySelectorAll("[data-color]");

// time between color changes 
const TIME_COLOR_CHANGE = 3; 

let timerInterval;

// define time to countdown to.
const timeEnd = new Date()
timeEnd.setDate(new Date().getDate() + 1) // tomorrow

const startCountdown = () => {
    //const countDownTo = new Date(timeEnd);
    const countDownTo = timeEnd.toISOString().substring(0, 10); // 2022-07-04

    // get current time
    const now = new Date().getTime();
    const countdown = new Date(countDownTo).getTime();
    const difference = (countdown - now) / 1000;
    
    const days = Math.floor(difference / (60 * 60 * 24));
    const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((difference % (60 * 60)) / 60);
    const seconds = Math.floor(difference % 60);

    // update countdown clocl
    updateClock(days, hours, minutes, seconds)

    // change colors 
    if (seconds % TIME_COLOR_CHANGE === 0) { 
        changeColor()
    }
};

function updateClock(d, h, m, s) { 
    //daysEl.innerHTML = formatTime(d);
    elHours.innerHTML = formatTime(h);
    elMinutes.innerHTML = formatTime(m);
    elSeconds.innerHTML = formatTime(s);
}

// function - wrap string in html tags (could be improved)
function splitAndWrap(str, bef, aft) {
    str = str.toString().split('').join(aft + bef);
    return str ? bef + str + aft : '';
}

// function - format time to have leadning "0" and wrap in span
function formatTime(t) {
    // pad with leading 0
    const num = t.toString().padStart(2, "0");
    // return within spans
    return splitAndWrap(num, '<span>', '</span>') ;
};

// function - change (hue) of all elments defined in colorChanges
function changeColor() {
    const random = getRandomInt(0, 260);
    colorChangers.forEach(el => {
        el.style.setProperty('filter', `hue-rotate(${random}deg)`);
    })
}

// Utility function - random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// initiate coundown
startCountdown();
timerInterval = setInterval(startCountdown, 1000);