const btnsPlay = document.querySelectorAll("[data-play]");
const easter = document.querySelector("#easter");
const SOUNDS = [
    "./assets/cow.mp3",
    "./assets/whistle.mp3",
    "./assets/doorbell.mp3",
    "./assets/clapping.mp3"
]

btnsPlay.forEach(btn => { 
    const idParent = btn.getAttribute("data-play");
    const parent = document.querySelector(`[data-target='${idParent}']`)
    let audio = new Audio(SOUNDS[idParent]);
    btn.addEventListener("click", () => { 
        btnsPlay.forEach(item => {
            
            if (item !== btn) item.closest("[data-target]").classList.remove("playing");
        })
        if (parent.classList.contains("playing")) {
            // stop autdio and remove class
            audio.pause();
            parent.classList.remove("playing");
            if (idParent == 0) {
                easter.classList.remove("scare-me");
            }
        } else { 
            // play that sound!
            audio.play();
            parent.classList.add("playing");
            if (idParent == 0) { 
                easter.classList.add("scare-me");
            }
        }
        

        audio.addEventListener("ended", function () {
            // sound has finished, reset the timer and class
            audio.currentTime = 0;
            parent.classList.remove("playing");
            if (idParent == 0) {
                easter.classList.remove("scare-me");
            }
        });
       
    })
})
 