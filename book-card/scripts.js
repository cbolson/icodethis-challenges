// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});

/*
https://openlibrary.org/dev/docs/api/search
*/
const URL_API_SEARCH = "https://openlibrary.org/search.json?";
const URL_API_DETAILS = "https://openlibrary.org";
const URL_API_COVERS = "https://covers.openlibrary.org/b/";
const MIN_CHARS = 3;
let books = [];
let recentSearches = [];

const searchInput = document.querySelector("#search");
const searchSpinner = document.querySelector("#search-spinner");
const booksList = document.querySelector("#search-list-books");
const tplListBook = document.querySelector("#tpl-list-book");

const bookDetails = document.querySelector("#book-details");
const detailsTitle = bookDetails.querySelector("[details-title]");
const detailsAuthor = bookDetails.querySelector("[details-author]");
const detailsSummary = bookDetails.querySelector("[details-summary]");
const detailsRating = bookDetails.querySelector("[details-rating]");
const detailsPublished = bookDetails.querySelector("[details-published]");
const detailsPages = bookDetails.querySelector("[details-pages]");
const detailsImg = bookDetails.querySelector("[details-img]");
const detailsCharacters = bookDetails.querySelector("[details-characters]");

const spinner = `<span id="search-spinner" class="material-symbols-outlined animate-spin text-red-500">progress_activity</span>`;

// close detilas

document.querySelector("#btn-close").addEventListener("click", () => {
  bookDetails.classList.add("opacity-0");
});

// debounce to prevent calling the apis if the user is still typing
function debounce(func, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const sendDebounce = debounce((term) => {
  searchBooks(term);
}, 500);

// clear input on focus
searchInput.addEventListener("focus", () => {
  searchInput.value = "";
});

searchInput.addEventListener("keyup", (e) => {
  const term = e.target.value;
  if (term.length > MIN_CHARS) {
    // start searching
    sendDebounce(term);
  }
});

// retrieve characters from api
async function searchBooks(term) {
  searchSpinner.innerText = "progress_activity";
  searchSpinner.classList.toggle("animate-spin");

  const paramsString = `title=${term}&limit=20`;
  const searchParams = new URLSearchParams(paramsString);
  try {
    // We are using fetch to get the response
    const response = await fetch(URL_API_SEARCH + searchParams);
    books = await response.json();
    //console.log(books);
    searchSpinner.innerText = "search";
    searchSpinner.classList.toggle("animate-spin");
    renderListBooks();
    //
  } catch (error) {
    console.log(error);
  }
}

let first_publish_year,
  author_name,
  cover,
  ratings_average,
  person = [],
  pages,
  language = [];
//const noImg = '<span class="material-symbols-outlined">panorama</span >';

function renderListBooks() {
  booksList.innerHTML = "";
  books.docs.forEach((book) => {
    //console.log(book);
    let isbn;
    if (book.isbn[0]) isbn = book.isbn[0];

    // add book to list
    const item = tplListBook.content.cloneNode(true);
    const btn = item.querySelector("button");
    item.querySelector("[book-title]").innerText = book.title;
    item.querySelector("[book-author]").innerText = book.author_name;
    if (isbn)
      item.querySelector(
        "[book-cover]"
      ).src = `${URL_API_COVERS}isbn/${isbn}-S.jpg`;

    btn.addEventListener("click", () => {
      bookDetails.classList.add("opacity-0");
      clearDetails();
      console.log(book);

      // clear list
      booksList.innerHTML = "";

      // set search box with selected book name
      searchInput.value = `${book.title}, ${book.author_name}`;

      // add details for this book to dom
      detailsTitle.innerText = book.title;
      if (book.author_name) detailsAuthor.innerText = book.author_name;
      if (book.first_publish_year)
        detailsPublished.innerHTML = book.first_publish_year;
      if (book.number_of_pages_median)
        detailsPages.innerHTML = book.number_of_pages_median;
      if (isbn) {
        detailsImg.src = `${URL_API_COVERS}isbn/${isbn}-M.jpg`;
        // set body bg image
        const urlBG = `${URL_API_COVERS}isbn/${isbn}-L.jpg`;
        document.body.style.setProperty("--bg-img", `url(${urlBG})`);
      }

      if (book.ratings_average) rating(book.ratings_average);
      if (book.person) detailsCharacters.innerText = book.person.join(", ");

      // load book summary
      fetchSummary(URL_API_DETAILS + book.key + ".json");

      // show book summary (only need to do this the first tine)
      bookDetails.classList.remove("opacity-0");
    });
    booksList.append(item);
  });
}

function clearDetails() {
  detailsTitle.innerText = "-";
  detailsAuthor.innerText = "-";
  detailsPublished.innerHTML = "-";
  detailsPages.innerHTML = "-";
  detailsRating.innerText = "";
  detailsImg.src = "-";
  detailsCharacters.innerText = "-";
}

// fetch book summary
async function fetchSummary(url) {
  detailsSummary.innerHTML = spinner;
  try {
    // We are using fetch to get the response
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    if (data.description) detailsSummary.innerText = data.description;
    else detailsSummary.innerText = "No description available";
  } catch (error) {
    console.log(error);
  }
}
// convert rating to stars
function rating(rate) {
  const val = Math.floor(rate);
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    const fill = i <= val ? "material-fill-1" : "";
    stars += `<span  class="material-symbols-outlined ${fill}">star</span>`;
  }
  detailsRating.innerHTML = stars;
}
