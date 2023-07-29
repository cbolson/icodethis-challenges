// constants
const months = [];

months["en"] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

months["es"] = ["Enero", "Febrero", "Marzo", "Abríl", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months["fr"] = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "auot", "septembre", "octobre", "novembre", "décembre"];

months["de"] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

months["it"] = ["gennaio", "febbraio", "Marzo", "aprile", "maggio", "giugno", "luglio", "Agosto", "settembre", "ottobre", "novembre", "dicembre"];

const days = [];
days["en"] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
days["es"] = ["Do", "Lu", "Ma", "X", "Ju", "Vi", "Sa"];
days["fr"] = ["Di", "Lu", "Ma", "Mi", "Ji", "Ve", "Sa"];
days["de"] = ["So", "Mo", "Si", "Mi", "Do", "Fr", "So"];
days["it"] = ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"];

let lang = 'es';

// selectors
const daysTag = document.querySelector("[data-dates]");
const currentDate = document.querySelector("[data-month]");
const btnsnNav = document.querySelectorAll("[cal-nav]");

// get current date, year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

let dateFrom = '';
let dateTo = '';

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
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "today" : "";
        dateEl += `<li class="${isToday}" data-date="">${i}</li>`;
    }

    // add days to complete week A
    for (let i = lastDayofMonth; i < 6; i++) {
        dateEl += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }


    // add dates to calendar
    //console.log(months[lang]);
    currentDate.innerText = `${months[lang][currMonth]} ${currYear}`;
    daysTag.innerHTML = dateEl;
})();


// calendar month nav buttons
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

// day titles
const weekDays = document.querySelector("[data-weekdays]");
(renderWeekdays = () => {
    weekDays.innerHTML = '';
    days[lang].forEach(day => {
        const d = document.createElement("li");
        d.innerText = day;
        weekDays.append(d);
    })
})();

const langBtns = document.querySelectorAll("[lang-choose]");
langBtns.forEach(btn => { 
    const l = btn.getAttribute("lang-choose")
    btn.addEventListener("click", () => { 
        langBtns.forEach(b => b.classList.remove("active"))
        btn.classList.add("active");
        setUserLang(l);
        setTimeout(() => hideLanguages(), 3000);
       
    })
})

function setUserLang(l) { 
    lang = l;
    renderCalendar();
    renderWeekdays();
}
let langListVisible = false
const listLang = document.querySelector("#list-lang");
document.querySelector("#btn-lang").addEventListener("click", () => { 
    langListVisible ? hideLanguages() : showLanguages()
})

function showLanguages() { 
    listLang.style.transform = "translateX(0)";
    langListVisible = true
   // setTimeout(() => hideLanguages(), 4000);
}
function hideLanguages() { 
    listLang.style.transform = "translateX(-300px)";
    langListVisible = false;
}