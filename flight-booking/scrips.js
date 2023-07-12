const URL_API = "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json";
const searchInput = document.querySelector("#search");
const airportList = document.querySelector("#airportList");
const tplAirport = document.querySelector("#tpl-airport");

let airports = [];
let origin = '';
let destination = '';

// retrieve airports from api
(async function getData() {
    try {
        // We are using fetch to get the response
        const response = await fetch(URL_API); 
        airports = await response.json();
    } catch (error) {
        console.log(error);
    }
})()
// search airports
let resultsList = '';
const searchFields = document.querySelectorAll("[search-airport]");
searchFields.forEach(searchInput => {
    searchInput.addEventListener("input", () => {
        // clear list
        resultsList.innerHTML = '';

        const term = searchInput.value;
        let matches = airports.filter((airport) => {
            const regex = new RegExp(`^${term}`, "gi");
            return (
                airport.country.match(regex) ||
                airport.name.match(regex) ||
                airport.city.match(regex) ||
                airport.iata_code.match(regex)
            );
        });

        // add matches to dom
        if (matches.length > 0) {
            // create new list
            resultsList = document.createElement("ul");
            resultsList.classList.add("absolute", "bg-white", "shadow-xl", "z-10", "w-full");

            matches.forEach(airport => {
                const item = tplAirport.content.cloneNode(true);
                item.querySelector("[airport-code]").innerText = airport.iata_code;
                item.querySelector("[airport-name]").innerText = airport.name;
                item.querySelector("button").addEventListener("click", () => {
                    origin = airport.iata_code;
                    searchInput.value = `${airport.name} | ${airport.iata_code}`;

                    resultsList.remove();
                    return;
                })
                resultsList.append(item);
            });
            if (resultsList) searchInput.closest("div").append(resultsList);
        }
    });
});

// PASSENFWERS
selectNumbers(document.querySelector("#num-passengers"), 1, 10, 2);

// TABS
const tabButtons = document.querySelectorAll("[tab-select]");
const tabPanels = document.querySelectorAll("[tab-panel]");

tabButtons.forEach(tab => {
    const idPanel = tab.getAttribute("tab-select");
    tab.addEventListener("change", () => {
        tabPanels.forEach(panel => {
            panel.classList.add("hidden");
        })
        console.log(`[tab-panel="${idPanel}"]`);
        document.querySelector(`[tab-panel="${idPanel}"]`).classList.remove("hidden");
    })
})

// utility - select numbers
function selectNumbers(selectElement, start, end, current) {
    selectElement.innerHTML = '';
    for (var i = start; i <= end; i++) {
        if (i === current) {
            selectElement[i] = new Option(i, i, true, true);
        } else {
            selectElement[i] = new Option(i, i);
        }
    }
}

// dates
const dateDepart = document.querySelector("#date-departure");
const dateReturn = document.querySelector("#date-return");

dateDepart.addEventListener("change", (event) => {
    // set min date to return date - selected plus 1
    let newDate = addDaysToDate(event.target.value, 1);
    dateReturn.value = newDate;
    dateReturn.setAttribute("min", newDate);
})


// utility - prevent link clicks
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href") == "#") {
            e.preventDefault();
        }
    });
});

// utility  - add days to date
function addDaysToDate(date,n){
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d.toISOString().split('T')[0];
};