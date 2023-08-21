tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0B3131",
        },
        secondary: "#1EBAAA",
      },
    },
  },
};
/* Utility - random number  */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
/* utility - get percentage */
function percentage(val, total) {
  return (100 * val) / total;
}

// define array of series (ideally this would be fetched from an API)
const SERIES = [
  {
    id: 1,
    name: "Game of Thrones",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/got.jpg",
    duration: 80,
  },
  {
    id: 2,
    name: "Dr Who",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/dr-who.jpg",
    duration: 44,
  },
  {
    id: 3,
    name: "Friends",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/friends.jpg",
    duration: 37,
  },
  {
    id: 4,
    name: "Squid Game",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/squid-game.jpg",
    duration: 49,
  },
  {
    id: 5,
    name: "Money Heist",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/money-heist.jpg",
    duration: 85,
  },
  {
    id: 6,
    name: "Breaking Bad",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/breaking-bad.jpg",
    duration: 120,
  },
  {
    id: 7,
    name: "Pokemon",
    episode: "Episode 1",
    cat: "kids",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/pokeman.jpg",
    duration: 24,
  },
  {
    id: 8,
    name: "Loki",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/loki.jpg",
    duration: 71,
  },
  {
    id: 9,
    name: "Riverdale",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/riverdale.jpg",
    duration: 71,
  },
  {
    id: 10,
    name: "Peaky Blinders",
    episode: "Episode 1",
    cat: "series",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/peaky-blinders.jpg",
    duration: 71,
  },
  {
    id: 10,
    name: "Thor",
    episode: "",
    cat: "movies",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/thor.jpg",
    duration: 124,
  },
  {
    id: 10,
    name: "Avatar",
    episode: "",
    cat: "movies",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/avatar.jpg",
    duration: 231,
  },
  {
    id: 10,
    name: "Star Wars",
    episode: "",
    cat: "movies",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/star-wars.jpg",
    duration: 231,
  },
  {
    id: 10,
    name: "Dune",
    episode: "",
    cat: "movies",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/dune.jpg",
    duration: 98,
  },
  {
    id: 10,
    name: "Back to the Future",
    episode: "",
    cat: "movies",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/back-to-the-future.jpg",
    duration: 98,
  },
  {
    id: 10,
    name: "Interstellar",
    episode: "",
    cat: "movies",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/interstellar.jpg",
    duration: 146,
  },
  {
    id: 10,
    name: "Cpatain Marvel",
    episode: "",
    cat: "movies",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/captain-marvel.jpg",
    duration: 146,
  },
  {
    id: 10,
    name: "Disney",
    episode: "",
    cat: "kids",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/disney.jpg",
    duration: 19,
  },
  {
    id: 10,
    name: "National Geographic",
    episode: "",
    cat: "science",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/national-geographic.jpg",
    duration: 19,
  },
  {
    id: 10,
    name: "The Leauge",
    episode: "",
    cat: "sports",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/football.jpg",
    duration: 19,
  },
  {
    id: 10,
    name: "Bob Squarepants",
    episode: "",
    cat: "kids",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/bob-sqarepants.jpg",
    duration: 19,
  },
  {
    id: 10,
    name: "Bein",
    episode: "",
    cat: "sports",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/bein.jpg",
    duration: 19,
  },
  {
    id: 10,
    name: "ABC",
    episode: "",
    cat: "news",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/ABC.png",
    duration: 19,
  },
  {
    id: 10,
    name: "ESPN",
    episode: "",
    cat: "news",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/ESPN.png",
    duration: 19,
  },
  {
    id: 10,
    name: "The History Channel",
    episode: "",
    cat: "science",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/history-channels.png",
    duration: 19,
  },
  {
    id: 10,
    name: "NBC",
    episode: "",
    cat: "news",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/NBC-1.png",
    duration: 19,
  },
  {
    id: 10,
    name: "Nickledon",
    episode: "",
    cat: "kids",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/nickelodeon.png",
    duration: 19,
  },
  {
    id: 10,
    name: "CBeebies",
    episode: "",
    cat: "kids",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/CBeebies.png",
    duration: 19,
  },
  {
    id: 10,
    name: "MTV",
    episode: "",
    cat: "music",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/mtv.png",
    duration: 19,
  },
  {
    id: 10,
    name: "4 Music",
    episode: "",
    cat: "music",
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/movies/4-music.svg",
    duration: 19,
  },
];

const CHANNELS = [
  {
    name: "Movies",
    cat: "movies",
    count: 18,
    current: false,
  },
  {
    name: "Music",
    cat: "music",
    count: 9,
    current: false,
  },
  {
    name: "Series",
    cat: "series",
    count: SERIES.length,
    current: true,
  },
  {
    name: "Live",
    cat: "live",
    count: 15,
    current: false,
  },
  {
    name: "Science",
    cat: "science",
    count: 4,
    current: false,
  },
  {
    name: "Sports",
    cat: "sports",
    count: 23,
    current: false,
  },
  {
    name: "News",
    cat: "news",
    count: 11,
    current: false,
  },
  {
    name: "Kids",
    cat: "kids",
    count: 9,
    current: false,
  },
];

let selectedCat = "series";

const tplMovie = document.querySelector("#tpl-movie");
const listMovies = document.querySelector("#list-movies");
const listFeatured = document.querySelector("#list-featured");
const tplChannel = document.querySelector("#tpl-channel");
const listChannels = document.querySelector("#list-channels");

function renderItems() {
  listMovies.innerHTML = "";
  listFeatured.innerHTML = "";

  // return items from selected categroy
  const filtered = SERIES.filter((i) => {
    return i.cat === selectedCat;
  });

  if (filtered.length < 1) {
    listMovies.innerHTML =
      "Sorry, we don't have any channels in this category at the moment";
  }
  //    console.log(i.cat);
  //return i.cat === selectedCat;

  //let pequeños = gente.filter(persona => persona.edad <= 3)

  //console.log(filtered);

  // random order
  const shuffledArr = filtered.sort(() => Math.random() - 0.5);
  // console.log(shuffledArr);

  count = 0;
  shuffledArr.forEach((movie) => {
    // clone template
    const item = tplMovie.content.cloneNode(true);

    item.querySelector("img").src = movie.img;
    if (count < 6) {
      // currently watching

      const progress = getRandomInt(0, movie.duration);
      const percent = percentage(progress, movie.duration);
      const remaining = movie.duration - progress;
      const episode = getRandomInt(1, 24);

      item.querySelector("h3").innerText = movie.name;
      item.querySelector("[data-epsisode]").innerText = `Episode ${episode}`;
      item.querySelector(
        "[data-remaining]"
      ).innerText = `${remaining} min. remaining`;

      const bar = item.querySelector("[data-progress]");
      bar.classList.add(`before:w-[0%]`);
      setTimeout(() => {
        // sliight delay to add animation
        bar.classList.add(`before:w-[${percent}%]`);
      }, 500);

      listMovies.append(item);
    } else {
      // featured
      item.querySelector("h3").innerText = movie.name;
      item.querySelector("h4").remove();
      item.querySelector("[data-progress]").remove();
      listFeatured.append(item);
    }
    count++;
  });
}
renderItems();

// add channels
CHANNELS.forEach(({ name, cat, current }) => {
  // count items in this cat
  //const count = SERIES.reduce(a, b => x.cat === cat).length;
  const count = SERIES.filter((i) => {
    return i.cat === cat;
  }).length;

  if (count > 0) {
    // clone template
    const item = tplChannel.content.cloneNode(true);
    item.querySelector("h2").innerText = name;
    item.querySelector("p").innerText = `${count} channels`;
    if (current) item.querySelector("button").classList.add("current");

    item.querySelector("button").addEventListener("click", () => {
      selectedCat = cat;
      renderItems();
    });
    listChannels.append(item);
  }
});
