// tailwind config
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Kanit', 'sans-serif'],
            },
        }
    }
}


// SELECTORS
const elDays = document.getElementById("days");
const elHours = document.getElementById("hours");
const elMinutes = document.getElementById("minutes");
const elSeconds = document.getElementById("seconds");


//const expirationDate = new Date("Sep 9, 2023 15:37:25").getTime();

// get next specific date (always in the furture so once current year date has passed, it will calculate for next year)
let today = new Date();
let dateYear = today.getFullYear();

// if hallowwen has passed, get next year
//if (today.getMonth() == 11 && today.getDate() > 25) { // for XMAX

if (today.getMonth() >9) { // for halowwen
    dateYear = dateYear + 1;
}

let expirationDate = new Date(dateYear, 09, 31).getTime();

// specifc date
//const expirationDate = new Date("Oct 31, 2023 00:00:00").getTime();


// get X days in future 
//const timeEnd = new Date()
//const expirationDate = timeEnd.setDate(new Date().getDate() + 2) // tomorrow
//const expirationDate = new Date("Oct 31, 2023 00:00:00").getTime();

const expirationDateInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const totalTimeLeft = expirationDate - currentDate;
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((totalTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalTimeLeft % (1000 * 60)) / 1000);

    elDays.innerHTML = formatTime(days);
    elHours.innerHTML = formatTime(hours);
    elMinutes.innerHTML = formatTime(minutes);
    elSeconds.innerHTML = formatTime(seconds);

}, 1000);

// function - wrap string in html tags (could be improved)
function splitAndWrap(str, bef, aft) {
    str = str.toString().split('').join(aft + bef);
    return str ? bef + str + aft : '';
}

// function - format time to have leadning "0" and wrap in span so we can treat each number individually and avoid cls
function formatTime(t) {
    // pad with leading 0
    const num = t.toString().padStart(2, "0");
    // return within spans
    return splitAndWrap(num, '<span>', '</span>');
};




// images
const imageArray = [
    'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/halloween-14-min.png',
    'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/halloween-30.png',
    'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/halloween-31.png',
    'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/halloween-32.png',
   
]



const arrLocationsY = ["-bottom-24"];
const arrLocationsX = ["-left-12", "-right-12"];
const imageContainer = document.getElementById('imageContainer');

// Function to insert a random image into the page
function insertRandomImage() {
    imageContainer.innerHTML = '';

   // const randomY = Math.floor(Math.random() * arrLocationsY.length);
   // const randomX = Math.floor(Math.random() * arrLocationsX.length);
    const randomIndex = Math.floor(Math.random() * imageArray.length);
   
    const img = document.createElement('img');
   // img.classList.add(`${arrLocationsY[randomY]}`, `${arrLocationsX[randomX]}`);
    img.src = imageArray[randomIndex];
    setTimeout(() => {
        img.classList.add("opacity-0");
    }, 2000);
    
    imageContainer.appendChild(img);
}

// Function to start random image insertion at random times
function startRandomImageInsertion() {


    // Set a timeout for the next image insertion (between 2 to 5 seconds)
    const minDelay = 3000; // 2 seconds
    const maxDelay = 7000; // 5 seconds
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    setTimeout(function () {
        insertRandomImage();
        // Recursive call to insert images at random times
        startRandomImageInsertion();
    }, randomDelay);
}
//startRandomImageInsertion();



