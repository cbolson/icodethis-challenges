const events = [
    {
        id: 1,
        band: "The Cure",
        title: "The Cure Tour 2023",
        img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/the-cure.webp",
        location: "Lima, Peru",
        date: "22nd November, 2023",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam inventore dolorum temporibus, quaerat voluptatem, placeat doloribus vero illum consectetur tempora  pariatur animi distinctio veritatis ipsam delectus a odio.",
        link: "https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/The-Cure-Tickets/E-151977082"

    },
    {
        id: 2,
        band: "New Order",
        title: "New Order on Tour",
        img: " https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/new-order.jpg",
        location: "Leeds, UK",
        date: "7th October, 2023",
        desc: "Ex exercitationem odit ipsam, quas temporibus, dicta quod saepe sequi doloribus facere nostrum quisquam repellat corporis tempora, obcaecati cum nisi modi! Totam iusto fuga, obcaecati magnam sapiente sit culpa vitae!",
        link: "https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/New-Order-Tickets/E-151668029"

    },
    {
        id: 3,
        band: "Rick Astley",
        title: "Rick Astley",
        img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/rick-astley.webp",
        location: "Paloznak, Hungary",
        date: "3rd October, 2023",
        desc: "Aut perferendis consequuntur repellendus quam sapiente voluptatem quis dolores recusandae saepe! Assumenda facilis a deserunt nam tempore itaque. Cum dolorem voluptas quam fugiat veniam. Ad est rem laborum vel facilis.",
        link: "https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/Rick-Astley-Tickets/E-151254666"

    },
    {
        id: 4,
        band: "Hombres-G",
        title: "Hombres-G Tour",
        img: "https://img.vggcdn.net/img/cat/15747/1/13.jpg",
        location: "Palma de Mallorca, Spain ",
        date: "29th July, 2023",
        desc: "Lorem ipsum, dolor sit amet. Aperiam deserunt nam  inventore dolorum temporibus, quaerat voluptatem, placeat doloribus vero illum consectetur tempora alias praesentium pariatur animi distinctio veritatis ipsam delectus a odio.",
        link: "https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/Hombres-G-Tickets/E-151247979"

    },

];


let currentEvent = 3;

// insert current band details
const currentImg = document.querySelector("[current-img]");
const currentName = document.querySelector("[current-name]");
const currentLocation = document.querySelector("[current-location]");
const currentSchedule = document.querySelector("[current-schedule]");
const currentDesc = document.querySelector("[current-desc]");
const currentLink = document.querySelector("[current-link]");


function setCurrentEvent() { 
    item = events.find(x => x.id == currentEvent);
    currentImg.src = item.img;
    currentName.innerText = item.title;
    currentLocation.innerText = item.location;
    currentSchedule.innerText = item.date;
    currentDesc.innerText = item.desc;
    currentLink.href = item.link;
}



/*
// utility - prevent link clicks
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href") == "#") {
            e.preventDefault();
        }
    });
});
*/

// events list

const eventTpl = document.querySelector("#tpl-bands");
const eventsList = document.querySelector("#events-list");
events.forEach(item => { 
    const clone = eventTpl.content.cloneNode(true);
    clone.querySelector("img").src = item.img;
    clone.querySelector("[event-band]").innerText = item.band;
    clone.querySelector("[event-title]").innerText = item.title;
    // add event to image - I wouldn't normally do this as it is not accesssible

    clone.querySelector("img").addEventListener("click", () => { 
        currentEvent = item.id;
        setCurrentEvent();
    })
    eventsList.append(clone);
})

// load current event
setCurrentEvent();