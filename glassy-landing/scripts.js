/* NAV */

const navBtn = document.querySelector("#nav-btn");
const navList = document.querySelector("#nav-list");
let navVisitble = false;
navBtn.addEventListener("click", () => {
    if (navVisitble) {
        navList.style.transform = "translate(150px,0)";
        navVisitble = false;
        navBtn.classList.toggle("text-white");
    } else {
        navList.style.transform = "translate(-150px)";
        navVisitble = true;
        navBtn.classList.toggle("text-white");
    }
})

/* dropdown list */
const btnCountries = document.querySelector("#btn-countries");
const listCountries = document.querySelector("#list-countries");
let listCountriesVisible = false;
btnCountries.addEventListener("click", () => { 
    listCountriesVisible ? hideListCountries() : showListCountries();
    btnCountries.querySelector("span").classList.toggle("rotate-180")
})
function showListCountries() { 
    listCountries.style.opacity = 1;
    listCountriesVisible = true
}
function hideListCountries() {
    listCountries.style.opacity = 0;
    listCountriesVisible = false
}

// utility - prevent link clicks
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href") == "#") {
            e.preventDefault();
        }
    });
});