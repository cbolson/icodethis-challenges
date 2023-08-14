// get current date, year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// define user lang (not using lang selector in this challende but I will leave the code just in case)
let userLang = 'en';

// constants
const months = [];
const days = [];

months["en"] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

days["en"] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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


const eventTypes = [
    {
        id: 1,
        name: "Personal",
        //icon: "restaurant",
        color: "green"
    },
    {
        id: 2,
        name: "Work",
        //icon: "celebration",
        color: "blue"
    },
    {
        id: 3,
        name: "Family",
        //icon: "shopping_cart",
        color: "red"
    },
]



// user events - it may be more efficent to save events by date but as I copied this from a previous challenfe I didn't want to change things to much
// NOTE - I used currMonth for some of the dates to ensure that we always show events on current month
const userEvents = [
    {
        id: 1,
        date: `2023-${pad(currMonth + 1, 2)}-06`,
        time: '13:00',
        event_id: 3,
        desc: "Meal with dad"
    },
    {
        id: 2,
        date: `2023-${pad(currMonth + 1, 2)}-06`,
        time: '',
        event_id: 2,
        desc: "Tax returns"
    },
    {
        id: 3,
        date: `2023-${pad(currMonth + 1, 2)}-26`,
        time: '',
        event_id: 1,
        desc: "Special Day"
    },
    {
        id: 4,
        date: '2023-09-25',
        time: '11:45',
        event_id: 2,
        desc: "Meeting with John"
    },
    {
        id: 5,
        date: '2023-12-12',
        time: '',
        event_id: 1,
        desc: "My Birthday"
    },
    {
        id: 6,
        date: '2023-11-30',
        time: '17:30',
        event_id: 2,
        desc: "Stock take"
    },
    {
        id: 7,
        date: '2023-05-25',
        time: '19:30',
        event_id: 1,
        desc: "First iCodeThis challenge"
    },
    {
        id: 8,
        date: '2023-09-01',
        time: '',
        event_id: 3,
        desc: "Wife's birthday"
    }
]



// selectors
const daysTag = document.querySelector("[data-dates]");
const currentDate = document.querySelector("[data-month]");
const btnsnNav = document.querySelectorAll("[cal-nav]");
const panelEvents = document.querySelector("#panel-events");
const tplEvent = document.querySelector("#tpl-event");
const tplNoEvents = document.querySelector("#tpl-no-events");
const listEvents = document.querySelector("#list-events");
const weekDays = document.querySelector("[data-weekdays]");
const panelNewEvent = document.querySelector("#panel-new-event");
const btnCloseNewEvent = panelNewEvent.querySelector("#btn-close-add-event");
const btnNewEvent = document.querySelector("#btn-add-event");
const formNewEvent = document.querySelector("#form-new-event");
const formDate = formNewEvent.querySelector("#event-date");
const tplEventType = document.querySelector("#tpl-event-type");
const eventTypesList = document.querySelector("#list-event-types");


// function - render calendar
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

        // checkm if date has an event
        let isEvent = '';

        const thisDate = `${currYear}-${pad(currMonth + 1, 2)}-${pad(i, 2)}`;

        // filter events only by defined month
        const dayEvents = userEvents.filter(event => {
            return event.date == thisDate;
        })

        // add dots for daily events
        let dots = '';
        if (dayEvents.length > 0) {
            dots = '<div>';
            dayEvents.forEach(e => { 
                //console.log(thisDate, e.event_id);
                const eventData = eventTypes.find(x => x.id == e.event_id); 
                dots += `<span class="bg-${eventData.color}-500"></span>`;
            })
            dots += '</div>';
        } 

        dateEl += `<li class="${isToday} ${isEvent}" data-date="${thisDate}">${i} ${dots}</li>`;
    }

    // add days to complete week A
    for (let i = lastDayofMonth; i < 6; i++) {
        dateEl += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }


    // add dates to calendar
    currentDate.innerText = `${months[userLang][currMonth]} ${currYear}`;
    daysTag.innerHTML = dateEl;
})();


// buttons - calendar month nav
btnsnNav.forEach(btn => {
    const direction = btn.getAttribute("cal-nav");

    btn.addEventListener("click", () => {

        // hide events
        hideEvents()

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

// auto function - day titles
(renderWeekdays = () => {
    weekDays.innerHTML = '';
    days[userLang].forEach(day => {
        const d = document.createElement("li");
        d.innerText = day.substring(0, 3);
        weekDays.append(d);
    })
})();

// date click
// add events to date
daysTag.addEventListener("click", (e) => {
    const selectedDate = e.target.getAttribute("data-date");
    showEvents(selectedDate);

})

// window resize - hide events as they may need to be loaded in a new location
function reportWindowSize() {
    hideEvents()
}
window.onresize = reportWindowSize;


// function show events panel
// note - for visual effect the panel slides away first then slides in again with the new date data
function showEvents(thisDate) { 
    hideEvents()
    setTimeout(() =>  { 
        // load selected date data into events panel

        let dateNum = thisDate.split("-")[2];
        const date = new Date(thisDate);
        let day = date.getDay();
        let month = date.getMonth();
        const options = {  month: 'long', day: 'numeric' };
        const dateStr = date.toLocaleDateString('en-GB', options);
        panelEvents.querySelector("h2").innerText = days[userLang][day];
        panelEvents.querySelector("p").innerText = `${dateStr}`;
        formDate.value = thisDate;
        renderEventsList(thisDate);
        const w = window.innerWidth;
        if (w < 768) panelEvents.style.transform = "translateY(100%)";
        else panelEvents.style.transform = "translateX(100%)";

    }, 200);
}

// function - hide events panel
function hideEvents() { 
    //panelEvents.classList.add("absolute");
    panelEvents.style.transform = "translate(0)";
}

// function -  list events for selected date
function renderEventsList(thisDate) { 
    // empty events
    listEvents.innerHTML = '';
        // get events for this date
        // filter events only by defined month
        const dayEvents = userEvents.filter(event => {
            return event.date == thisDate;
        })

        if (dayEvents.length > 0) {
            dayEvents.forEach(e => {
                const item = tplEvent.content.cloneNode(true);

                const eventData = eventTypes.find(x => x.id == e.event_id);
                item.querySelector("[event-title]").innerText = e.desc;
                item.querySelector("[event-title]").classList.add(`before:bg-[${eventData.color}]`);
                item.querySelector(["[event-delete]"]).addEventListener("click", () => {
                    removeItem(e.id);
                    renderEventsList(thisDate);
                })
                item.querySelector(["[event-edit]"]).addEventListener("click", () => {
                    alert("TO DO");
                })

                listEvents.append(item);
            })
        } else {
            const item = tplNoEvents.content.cloneNode(true);
            listEvents.append(item);
        }
}


// remove event from user list
function removeItem(itemID) {
    userEvents.forEach((ev, key) => {
        if (ev.id == itemID) {
            delete userEvents[key];
        }
    })
}

// btn - show new event panel
btnNewEvent.addEventListener("click", () => { 
    panelNewEvent.classList.add("scale-100");
})

// btn - close new event panel
btnCloseNewEvent.addEventListener("click", () => {
    console.log("close it");
    closeNewEvent();
})

// function - close events panel
function closeNewEvent() {
    panelNewEvent.classList.remove("scale-100");
}

// form - new event add
formNewEvent.addEventListener("submit", (e) => {
    e.preventDefault();
    // save new event to list and rerender everything
    const newCat = formNewEvent.querySelector('input[name="event-type"]:checked').value;
    const newDesc = formNewEvent.querySelector('#event-desc').value;
    //const newTime = formNewEvent.querySelector('#event-time').value;
    const newDate = formDate.value;
    if (!newDate) {
        alert("Please select a date");
        return;
    }
    const newEvent = {
        id: '',
        date: newDate,
        //time: newTime,
        desc: newDesc,
        event_id: parseInt(newCat)
    };
    userEvents.push(newEvent);
    closeNewEvent();
    renderCalendar();
    renderEventsList(currMonth + 1);
    showEvents(newDate)
})

// function - create list of event types for new event form
function renderAddEventForm() {
    eventTypesList.innerHTML = '';
    eventTypes.forEach((ev,idx) => {
        const item = tplEventType.content.cloneNode(true);
        item.querySelector("input").setAttribute("id", `type-${ev.id}`);
        item.querySelector("input").value = ev.id;
        item.querySelector("label").setAttribute("for", `type-${ev.id}`);
        item.querySelector("label").innerText = ev.name;
        item.querySelector("label").classList.add(`before:bg-[${ev.color}]`);
        if (idx === 0) item.querySelector("input").checked = true;
        eventTypesList.append(item);
    })
}
renderAddEventForm();


// pad number -  used in months and days to add leading 0
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

/*
// NOT USED IN THIS CHALLENGE
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
*/