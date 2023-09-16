/*

PIXBAY LINK FORMAT: 
Music by <a href="https://pixabay.com/users/sonican-38947841/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=166161">Dvir Silver</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=166161">Pixabay</a>


https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/90s.jpg
*/
/*
TO DO:
- DONE upload tracks and covers to github
- DONE create array of tracks
- DONE  create front-end player design
- PROCESS add list of tracks to player
    - names and duration
- add current track to player
- add play/pause functionaliity
- show progress
- add click on track to play functionlity
- add "next" & "back" functionalty
- add "random & "loop" functionalty

optional
- add volume controls
- mini player
*/
const TRACKS = [
    {
        id: 1,
        title: 'Disco Groove',
        artist: 'QubeSounds',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/disco.jpg',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/disco-groove-122074.mp3',
        url: 'https://pixabay.com/users/qubesounds-24397640/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=122074'
    },
    {
        id: 2,
        title: 'Spanish Latin Uplifting Energy',
        artist: 'Sonican',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/spanish.jpg',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/spanish-latin-uplifting-energy-full-loop-166161.mp3',
        url: 'https://pixabay.com/users/sonican-38947841/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=166161'
    },
    {
        id: 3,
        title: 'Fun Disco 1',
        artist: 'Musictown',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/disco-2.jpg',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/fun-disco-1-108497.mp3',
        url: 'https://pixabay.com/users/musictown-25873992/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=108497'
    },
    {
        id: 4,
        title: 'Back To The 80s',
        artist: 'ROVADOR',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/80s-tape.jpg',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/back-to-the-80s-163722.mp3',
        url: 'https://pixabay.com/users/rovador-33696371/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=163722'
    },
    {
        id: 5,
        title: '90s Euro Electro',
        artist: 'Abydos_Music',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/90s.jpg',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/90s-euro-electro-152103.mp3',
        url: '"https://pixabay.com/users/abydos_music-27178115/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=152103'
    },
    {
        id: 6,
        title: 'Leva - Eternity',
        artist: 'lemonmusicstudio',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/Leva - Eternity.webp',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/leva-eternity-149473.mp3',
        url: '"https://pixabay.com/users/lemonmusicstudio-14942887/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=149473'
    },
    {
        id: 7,
        title: 'For Future Bass',
        artist: 'The_Mountain',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/drum-bass.jpg',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/for-future-bass-159125.mp3',
        url: 'https://pixabay.com/users/the_mountain-3616498/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=159125'
    },
    {
        id: 8,
        title: 'The Paranormal Is Real (ft. Carrie)',
        artist: 'Leonell Cassio',
        img: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/covers/Leonnelljpg.jpg',
        audio: 'https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/audio/leonell-cassio-the-paranormal-is-real-ft-carrie-163742.mp3',
        url: 'https://pixabay.com/users/leonellcassio-2264996/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=163742"'
    }
]

// selectors
const tplTrack = document.querySelector("#tpl-track");
const listTracks = document.querySelector("#list-tracks");

const displayCurrentImg = document.querySelector("#current-img");
const previewImage = document.querySelector("#preview-img");
const displayCurrentTitle = document.querySelector("#current-title");
const displayCurrentArtist = document.querySelector("#current-artist");
const displayCurrentTime = document.querySelector("#current-time");
const displayCurrentDuration = document.querySelector("#current-duration");
const displayCurrentProgress = document.querySelector("#current-progress");
const buttons = document.querySelectorAll("button");
const btnPlay = document.querySelector("#btn-play");
const btnPause = document.querySelector("#btn-pause");
const btnRandom = document.querySelector("#btn-random");
const btnLoop = document.querySelector("#btn-loop");

const infoArtist = document.querySelector("#info-artist");
const infoLink1 = document.querySelector("#info-link-1");
const infoLink2 = document.querySelector("#info-link-2");
const panelInfo = document.querySelector("#panel-info");

let currentTrack;
let currentAudio = '';
let currentTrackTime = 0;
let isPaused = false;
let progressInterval = '';
let infoVisible = false
let playRandom = false;
let playLoop = false;
let playPressed = false;
let currentDuration = 1;
// get randoom track to staart
//currentTrack = TRACKS[(Math.floor(Math.random() * TRACKS.length))]


// catch all button actions
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.value;
     // console.log(value);
        switch (value) {
            case "play":
               // playPressed = true
                playTrack();
                break;
            case "pause":
                pauseTrack();
                break;
            case "next":
                nextTrack()
                break;
            case "prev":
                prevTrack();
                break;
            case "random":
                setRandom();
                break;
            case "loop":
                setLoop();
                break;  
            case "btn-info":
                showInfo(btn) 
                break;
            default:
                console.log(value);
                break;
        }
    })
})

function showInfo(btn) { 
    panelInfo.classList.toggle("-translate-y-full");
    btn.innerText = infoVisible ? "more_vert" : "close";
    infoVisible = infoVisible ? false : true
}

// list tracks
function renderTracksList() { 
    listTracks.innerHTML = '';
    TRACKS.forEach(track => {
        // define audio for each track
        const audio = document.createElement('audio');
        audio.src = track.audio;
        

        const clone = tplTrack.content.cloneNode(true);
        clone.querySelector("p").innerText = track.title;
        clone.querySelector("img").src = track.img;
        const btnEl = clone.querySelector("button");
        const timeEl = clone.querySelector("time");
        timeEl.innerText = '00:00';

        // mark current track
        if (track === currentTrack) {
            btnEl.classList.add("current");

        }
        // set duration
        audio.addEventListener('loadedmetadata', function () {
            const duration = audio.duration;
            timeEl.innerText = secondsToMinutesAndSeconds(duration);
            
        }, false);

        // track click event
        btnEl.addEventListener("click", () => { 
            btnPlay.disabled = false;
            currentTrack = track;
            setUpCurrentTrack() 
            playTrack()
        })

        listTracks.append(clone)
    });
}

// setup current track image, texts and audio
function setUpCurrentTrack() { 

    previewImage.classList.add("scale-0");
   // console.log("setting up track");
    // add track display elements
    displayCurrentImg.classList.add("scale-0");
    displayCurrentTitle.classList.add("translate-x-[400px]");
    displayCurrentArtist.classList.add("-translate-x-[400px]");

    // add info data for link to pixbay
    infoArtist.innerText = currentTrack.artist;
    infoLink1.setAttribute("href", currentTrack.url);
    infoLink2.setAttribute("href", currentTrack.url);

    // zoom effect
    setTimeout(() => {
        displayCurrentImg.src = currentTrack.img;
        displayCurrentImg.classList.remove("scale-0");
        displayCurrentTitle.innerText = currentTrack.title;
        displayCurrentArtist.innerText = currentTrack.artist;

    }, 200);

    setTimeout(() => {

        displayCurrentTitle.classList.remove("translate-x-[400px]");
        displayCurrentArtist.classList.remove("-translate-x-[400px]");

    }, 300);
    

    // reset active track in list
    resetActiveTrack();

    // stop current audio
    if (currentAudio) currentAudio.pause();

    // define new current track
    currentAudio = new Audio(currentTrack.audio);
    currentAudio.pause();
    currentAudio.currentTime = 0
    currentDuration = 1;
    currentTrackTime = 0;
    displayCurrentProgress.value = 0;
   displayCurrentTime.innerText = "00:00";

}




// load selected track
function playTrack() {
    if (!currentTrack) return
    isPaused = false;

    // reset for progress
    
   // displayCurrentProgress.value = 0;
   // displayCurrentTime.innerText = "00:00";
    if (progressInterval) {
        clearInterval(progressInterval);
    }

    btnPlay.classList.add("hidden");
    btnPause.classList.remove("hidden");

    // play audio
    if (currentAudio.pause) {
        //console.log("here");
        currentAudio.play();
    } else {
        //console.log("there");
        currentAudio = new Audio(currentTrack.audio);
        currentAudio.play();
    }



    // set duration and interval once track is loaded
    //let currentDuration = 1; // needs to be higher than zero to avoid infinity percent calculation
    if (currentDuration === 1) {
        currentAudio.addEventListener('loadedmetadata', function () {
            currentDuration = currentAudio.duration;
            displayCurrentDuration.innerText = secondsToMinutesAndSeconds(currentDuration);
        }, false);
    }


    displayCurrentProgress.addEventListener("click", (e) => {
        //console.log("click range")
        currentTrackTime = currentDuration / 100 * e.target.value;
        currentAudio.currentTime = currentTrackTime
    })
    // set progress bar progression
    progressInterval = setInterval(function () {


        if (!isPaused) {
            currentTrackTime++;
           // console.log(currentTrackTime);
            const percent = Math.floor(percentage(currentTrackTime, currentDuration));
           // console.log(percent);
            displayCurrentProgress.value = percent;
            displayCurrentTime.innerText = secondsToMinutesAndSeconds(currentTrackTime);
            if (currentTrackTime >= currentDuration) {
                clearInterval(progressInterval);
                //pauseTrack();
               // console.log(currentTrackTime, currentDuration);
                if (playLoop) {
                    currentTrackTime = 1;
                    setTimeout(() => playTrack(), 200);
                }
                else if (playRandom) ramdomTrack()
                else nextTrack();
            }
        }
    }, 1000); 

    
   


      
    
}
// set active track display in list
function resetActiveTrack() { 
    const index = currentTrackIndex();
    listTracks.querySelectorAll("button").forEach((btn, idx) => {
        btn.classList.remove("current");
        if (idx == index) btn.classList.add("current");
    });
}

// puase current track
function pauseTrack() { 
    isPaused = true;
    currentAudio.pause();
    btnPlay.classList.remove("hidden");
    btnPause.classList.add("hidden");
}

// get index of current track (used for back and next buttons)
function currentTrackIndex() { 
    return TRACKS.indexOf(currentTrack);
}

// play next track (will loop to start)
function nextTrack() {
    let index = currentTrackIndex();
   // console.log(index)
    let nextTrack;
    if (index === TRACKS.length - 1) nextTrack = 0;
    else nextTrack = index + 1;
    currentTrack = TRACKS[nextTrack];
    setUpCurrentTrack();
    playTrack()
    return
}

// play the previous track (will loop to end)
function prevTrack() {
    let index = currentTrackIndex();
   // console.log(index)
    let nextTrack;
    if (index === 0) nextTrack = TRACKS.length-1;
    else nextTrack = index - 1;
    //console.log(nextTrack);
    currentTrack = TRACKS[nextTrack];
    setUpCurrentTrack();
    playTrack()
    return
}

// get a radnom track and play
function ramdomTrack(btn = false) {
    currentTrack = TRACKS[(Math.floor(Math.random() * TRACKS.length))]
    setUpCurrentTrack();
    playTrack();
}

// set random state (for next track play)
function setRandom() { 
    // change random state only if clicking button
    playRandom = playRandom ? false : true;
    if (playRandom)  btnRandom.classList.add("bg-red-500");
    else btnRandom.classList.remove("bg-red-500");
}

// set loop to repeat track
function setLoop() {
    // change random state only if clicking button
    playLoop = playLoop ? false : true;

   // console.log(playLoop);
    if (playLoop) btnLoop.classList.add("bg-red-500");
    else   btnLoop.classList.remove("bg-red-500");
    return
}


// utility - seconds to min:secondss
function secondsToMinutesAndSeconds(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const mins = minutes.toString().padStart(2, "0");
    const secs = seconds.toString().padStart(2, "0");
    return `${mins}:${secs}`;
    
}

// utility - percent
function percentage(val,total) {
    return (100 * val) / total;
} 
// play that funky muisc
renderTracksList()

// NOTE - not loading random track on load as it was causing issues with the timer etc.
//setUpCurrentTrack()