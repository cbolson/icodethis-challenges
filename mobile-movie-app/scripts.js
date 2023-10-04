/**
 * get genreas
 * loop through genreas and get first 20 (default) films from current year
 * show 5 films per genre plus button to "show more" (probably not working in the demo)
 * link each film to details page
 **/

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
      colors: {
        "primary-100": "#ECEBFD",
        "primary-200": "#67A8E9",
        "primary-300": "#1F1D37",
        "primary-400": "#5C96D0",
        "primary-900": "#171726",
      },
    },
  },
};

// selectors
const tplGenre = document.querySelector("#tpl-genre");
const listGenres = document.querySelector("#list-genres");
const tplMovie = document.querySelector("#tpl-movie");
const panelDetails = document.querySelector("#panel-details");
const detailsTitle = panelDetails.querySelector("[data-title]");
const detailsDuration = panelDetails.querySelector("[data-duration]");
const detailsDetails = panelDetails.querySelector("[data-details]");
const detailsRating = panelDetails.querySelector("[data-rate]");
const detailsVotes = panelDetails.querySelector("[data-votes]");
const detailsStars = panelDetails.querySelector("[data-stars]");
const detailsImg = panelDetails.querySelector("img");
const detailsCast = panelDetails.querySelector("[data-cast]");

//const detailsLink = panelDetails.querySelector("[data-link]");
const btnBack = document.querySelector("#btn-back");
const tplCast = document.querySelector("#tpl-cast");
const btnInfo = document.querySelector("#btn-info");
const btnInfoClose = document.querySelector("#btn-info-close");
const panelInfo = document.querySelector("#panel-info");
const infoTitle = panelInfo.querySelector("[data-title]");
const infoDate = panelInfo.querySelector("[data-release]");
const infoGenres = panelInfo.querySelector("[data-genre]");
const infoRevenue = panelInfo.querySelector("[data-revenue]");
const infoCompanies = panelInfo.querySelector("[data-companies]");
//const infoDirector = panelInfo.querySelector("[data-director]");
//const infoCast = panelInfo.querySelector("[data-cast]");

//console.log(tplCast);

let userLang = "en-US";
let year = 2023;

// commmon API options
// IMPORTANT - this is a FREE api but please don't use my API key - it is free to get your own
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTliMTc5OWFmYTRjNDU0ZmMzN2I4Y2E3MGUwN2I4NCIsInN1YiI6IjY1MWQxNTMwZjA0ZDAxMDBhZDExYTNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrB-NumJQ5BfcmTLAD4UNdjGycfPowv_spu8bXO79FY",
  },
};

// search movies
/*
function searchMovies(){
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
*/
//searchtMovies()

const genres = [];
// API - return list of genres
function getGenres() {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=${userLang}`,
    options
  )
    .then((response) => response.json())
    // .then(response => renderGenres(response.genres))
    .then((response) => {
      response.genres.forEach((g) => genres.push(g));
      renderGenres(genres);
    })
    .catch((err) => console.error(err));
}

// API - search by genre
function getMoviesInGenre(el, genre) {
  // need to exclude all other genres...
  /*const arr = genres.filter(g => {
        return g.name !== genre;
    });
    */

  // console.log(genre);
  const arr = genres.map((g) => {
    if (g.name !== genre) return g.id;
  });
  //console.log(arr)
  const exclude = arr.join(",");
  // console.log(arr);

  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${userLang}&page=1&with_genres=${genre}`;
  // console.log(url);
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      //console.log(response.results);
      response.results.forEach((m) => {
        // console.log(m);
        el.append(renderMovieCard(m));
      });
    })
    .catch((err) => console.error(err));
}

// movie details
function getMovieDetails(id) {
  // console.log(id)
  // panelDetails.classList.add("translate-x-full")
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=${userLang}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //console.log(response);
      //backdrop_path
      // runtime
      // vote_average
      //homepage
      //release_date
      //vote_count
      panelDetails.classList.add(
        `before:bg-[url('https://image.tmdb.org/t/p/original/${response.poster_path}')]`
      );
      detailsTitle.innerText = response.title;
      detailsImg.src = `https://image.tmdb.org/t/p/original/${response.poster_path}`;
      detailsDetails.innerText = response.overview;
      detailsDuration.innerText = `${response.runtime} mins`;
      detailsRating.innerText = response.vote_average.toFixed(1);
      detailsVotes.innerText = response.vote_count;
      detailsStars.innerHTML = renderStars(
        Math.floor(response.vote_average / 2).toFixed(1)
      );
      //.href=response.homepage

      // add info
      infoTitle.innerText = response.title;
      infoDate.innerText = response.release_date;
      infoRevenue.innerText = response.revenue;
      let movieGenres = [];
      response.genres.forEach((idg) => {
        // console.log(idg);
        const g = genres.find((i) => i.id === idg.id);
        movieGenres.push(g.name);
      });
      infoGenres.innerText = movieGenres.join(",");

      // companies

      let companies = [];
      response.production_companies.forEach((c) => {
        companies.push(c.name);
      });
      infoCompanies.innerText = companies.join(",");
      //console.log(genres);

      setTimeout(() => panelDetails.classList.remove("translate-x-full"), 500);

      getCredits(id);
    })
    .catch((err) => console.error(err));
}

// get movie cast and credits
function getCredits(id) {
  detailsCast.innerHTML = "";
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=${userLang}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //(response)
      const cast = response.cast;
      //console.log(cast)
      // only show first 10
      cast.length = 8;
      cast.forEach((a) => {
        const clone = tplCast.content.cloneNode(true);
        clone.querySelector(
          "[data-img]"
        ).src = `https://image.tmdb.org/t/p/original/${a.profile_path}`;
        clone.querySelector("[data-img]").setAttribute("alt", `${a.name}`);
        clone.querySelector("p").innerText = a.name;
        detailsCast.append(clone);
      });

      //infoDirector.innerText = ""
    })
    .catch((err) => console.error(err));
}

btnBack.addEventListener("click", () => {
  panelDetails.classList.add("translate-x-full");
});
// load movie card details and reveal
function renderMovieCard(m) {
  let delay = 0;
  const clone = tplMovie.content.cloneNode(true);
  const btnEl = clone.querySelector("button");
  const ratingEl = clone.querySelector("[data-rating]");
  const imgEl = clone.querySelector("img");

  clone.querySelector("[data-title]").innerText = m.title;
  imgEl.src = `https://image.tmdb.org/t/p/original/${m.poster_path}`;

  ratingEl.innerText = m.vote_average;
  if (m.vote_average >= 8) ratingEl.classList.add("text-green-500");
  else if (m.vote_average >= 5) ratingEl.classList.add("text-orange-500");
  else ratingEl.classList.add("text-red-500");
  btnEl.addEventListener("click", () => {
    getMovieDetails(m.id);
    //console.log("load the movie details....");
  });

  setTimeout(() => {
    imgEl.classList.remove("scale-0");
    btnEl.classList.remove("animate-pulse");
  }, delay);
  delay = delay + 50;
  return clone;
}

// load genres and corresponding latest 20 movies
function renderGenres(genres) {
  //console.log(genres);
  listGenres.innerHTML = "";

  // to reduce load I clone the genres array and recude it to just 5
  // NTOE - I don't want to shorten the original genres array as we need all the genres for the info panel
  const arr = JSON.parse(JSON.stringify(genres));
  // arr.length = 10;
  arr.forEach((g) => {
    // console.log(g.name);
    const clone = tplGenre.content.cloneNode(true);
    const cardsList = clone.querySelector("[data-cards]");
    clone.querySelector("[data-title]").innerText = g.name;

    // add genre list to DOM
    listGenres.append(clone);

    // get movies for this genre
    getMoviesInGenre(cardsList, g.id);
  });
}
getGenres();

// btn load movie details
btnInfo.addEventListener("click", () => {
  panelInfo.classList.remove("-translate-x-full");
});

btnInfoClose.addEventListener("click", () => {
  panelInfo.classList.add("-translate-x-full");
});

// create stars
function renderStars(rating, max = 5) {
  let stars = "";
  for (let i = 0; i < max; i++) {
    const filled = i < rating ? "material-fill-1" : "";
    stars += `<span class="material-symbols-outlined text-base text-yellow-500 ${filled}">star</span>`;
  }
  return stars;
}
