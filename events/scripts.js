const EVENTS = [
  {
    title: "Meeting with Client",
    description:
      "Discuss project updates and deadlines. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis justo at mi consectetur bibendum. Sed a libero ac quam dignissim dictum. <br><br>Vivamus consectetur volutpat mauris, quis scelerisque risus posuere et.",
    day: 10,
    month: "October",
    time: "2:00 PM",
  },
  {
    title: "Team Lunch",
    description:
      "Celebrate a successful project completion. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod fringilla felis, id efficitur tortor rhoncus eget. Suspendisse potenti. <br><br>Donec sed justo vel elit vulputate hendrerit.",
    day: 15,
    month: "November",
    time: "12:30 PM",
  },
  {
    title: "Conference Presentation",
    description:
      "Present on the latest industry trends. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu bibendum libero. Proin sit amet interdum quam. Nulla facilisi. <br><br>Curabitur vel tincidunt arcu.",
    day: 5,
    month: "December",
    time: "9:00 AM",
  },
  {
    title: "Birthday Party",
    description:
      "Celebrate John's birthday. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis quam quis urna hendrerit euismod. Nulla nec nisi ut arcu feugiat aliquet in ac justo.",
    day: 20,
    month: "January",
    time: "6:00 PM",
  },
  {
    title: "Product Launch",
    description:
      "Introduce our new product to the market. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non vestibulum libero. In nec turpis eu purus mattis euismod. <br><br>Nam at ultricies lorem.",
    day: 8,
    month: "February",
    time: "3:30 PM",
  },
  {
    title: "Training Workshop",
    description:
      "Hands-on workshop for new employees. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br><br>Sed vitae dictum purus. Nulla in felis eget purus convallis eleifend a in neque.",
    day: 25,
    month: "March",
    time: "10:00 AM",
  },
];

const buttons = document.querySelectorAll("button");
//const boxes = document.querySelectorAll(".box");
const panelnfo = document.querySelector("#panel-info");
const btnClose = document.querySelector("#btn-close");
const listEvents = document.querySelector("#list-events");
const tplEvent = document.querySelector("#tpl-event");
const eventData = document.querySelector("#event-data");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.value) {
      case "close":
        hideEvent();
        break;
      case "more":
        alert("nI didn't get that far, sorry");
        break;
      default:
        //showEvent();
        break;
    }
  });
});

// show selected event details
function showEvent(event) {
  const boxes = document.querySelectorAll(".box");
  let delay = 900;
  boxes.forEach((b) => {
    setTimeout(() => {
      b.classList.add("translate-x-[1000px]");
    }, delay);
    delay = delay - 150;
    //console.log(delay);
  });

  // add event data
  eventData.querySelector("h2").innerText = event.title;
  eventData.querySelector("day").innerText = event.day;
  eventData.querySelector("date").innerText = event.month;
  eventData.querySelector("time").innerText = event.time;
  eventData.querySelector("p").innerHTML = event.description;

  setTimeout(() => {
    panelnfo.classList.remove("-translate-x-full");
  }, 1050);
}

// hide event and show boxes
function hideEvent() {
  const boxes = document.querySelectorAll(".box");

  panelnfo.classList.add("-translate-x-full");
  let delay = 300;
  boxes.forEach((b) => {
    setTimeout(() => {
      b.classList.remove("translate-x-[1000px]");
    }, delay);
    delay = delay + 100;
  });
}

// add event boxes
function renderEvents() {
  listEvents.innerHTML = "";
  EVENTS.forEach((event) => {
    const clone = tplEvent.content.cloneNode(true);
    clone.querySelector("[event-month]").innerText = event.month;
    clone.querySelector("[event-day]").innerText = event.day;
    clone.querySelector("[event-title]").innerText = event.title;
    clone.querySelector("[event-time]").innerText = event.time;

    clone.querySelector("button").addEventListener("click", () => {
      showEvent(event);
    });
    listEvents.append(clone);
  });
}
renderEvents();
