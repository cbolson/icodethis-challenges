const FILTERS = [
  "vegetarian",
  "protein",
  "dinner",
  "snack",
  "vegan",
  "gluten-free",
  "meat",
];
const filtersList = document.querySelector("#filters-list");
const tplItem = document.querySelector("#tpl-item");

const filtersApplied = [];

// filtr options list
function renderFilterList() {
  filtersList.innerHTML = "";

  FILTERS.forEach((filter) => {
    // cjeck it hasn't been applied
    if (!filtersApplied.find((x) => x == filter)) {
      const item = tplItem.content.cloneNode(true);
      const label = item.querySelector("label");
      label.setAttribute("for", `filter-${filter}`);
      const radio = item.querySelector("input");
      radio.setAttribute("id", `filter-${filter}`);
      radio.setAttribute("value", filter);
      item.querySelector("[item-desc]").innerText = filter;

      radio.addEventListener("change", () => {
        if (radio.checked) {
          filtersApplied.push(filter);

          // remove
          radio.closest("label").remove();
        } else {
          filtersApplied.splice(filtersApplied.indexOf(filter), 1);
        }
        renderFiltersApplied();
        renderMeals();
      });
      filtersList.append(item);
    }
  });
  renderMeals();
  filtersList.classList.remove("hidden");
}

const btnFilters = document.querySelector("#btn-filters");
let filtersVisible = false;
btnFilters.addEventListener("click", () => {
  if (filtersVisible) {
    filtersVisible = false;
    filtersList.classList.add("hidden");
  } else {
    renderFilterList();
    filtersVisible = true;
  }
  renderMeals();
});

//renderFilterList();

// appllied filters list
const tplFilter = document.querySelector("#tpl-filter");
const filteredList = document.querySelector("#filters-list-applied");
function renderFiltersApplied() {
  filteredList.innerHTML = "";
  filtersApplied.forEach((filter) => {
    const item = tplFilter.content.cloneNode(true);
    item.querySelector("[item-desc]").innerText = filter;
    item.querySelector("button").addEventListener("click", () => {
      // remove from filters
      filtersApplied.splice(filtersApplied.indexOf(filter), 1);
      renderFilterList();
      renderFiltersApplied();
      renderMeals();
    });
    filteredList.append(item);
  });
}

const MEALS = [
  {
    id: 1,
    desc: "Avocado sandwich with boiled egg",
    time: "15 mins",
    img: "https://source.unsplash.com/NoczeWSAF_w/200x200",
    tags: ["vegetarian", "vegan", "dinner", "protein"],
    bookmark: false,
  },
  {
    id: 2,
    desc: "Avocado salad with Bacon",
    time: "25 mins",
    img: "https://source.unsplash.com/AibVl6o117k/200x200",
    tags: ["snack", "meat", "protein"],
    bookmark: false,
  },
  {
    id: 3,
    desc: "Fresh Avocado salad ",
    time: "15 mins",
    img: "https://source.unsplash.com/IGfIGP5ONV0/200x200",
    tags: ["vegetarian", "vegan", "snack"],
    bookmark: true,
  },
  {
    id: 4,
    desc: "Avocado and spinach pesto spagetti",
    time: "30 mins",
    img: "https://source.unsplash.com/RTyHbFUVOnQ/200x200",
    tags: ["vegetarian", "vegan", "dinner", "protein"],
    bookmark: false,
  },
  {
    id: 5,
    desc: "Avocado tuna hashe",
    time: "20 mins",
    img: "https://source.unsplash.com/Xmy0XM1U1rE/200x200",
    tags: ["meat", "dinner", "protein"],
    bookmark: false,
  },
  {
    id: 6,
    desc: "Avocado",
    time: "1 min",
    img: "https://source.unsplash.com/cueV_oTVsic/200x200",
    tags: ["vegetarian", "vegan", "snack", "gluten-free"],
    bookmark: false,
  },
];

const tplMeal = document.querySelector("#tpl-meal");
const mealsList = document.querySelector("#meals-list");
const resultsCounter = document.querySelector("[num-results]");

function renderMeals() {
  let count = 0;
  mealsList.innerHTML = "";
  MEALS.forEach((meal) => {
    let showMeal = true;

    if (filtersApplied.length > 0) {
      showMeal = false;
      // only return meals with tags
      filtersApplied.forEach((filter) => {
        if (meal.tags.includes(filter)) {
          showMeal = true;
        } else {
          showMeal = false;
        }
      });
    }

    if (showMeal) {
      const item = tplMeal.content.cloneNode(true);
      item.querySelector("h3").innerText = meal.desc;
      item.querySelector("p").innerText = meal.time;
      item.querySelector("img").src = meal.img;
      const btn = item.querySelector("[bookmark]");
      if (meal.bookmark) {
        btn.classList.add("material-fill-1");
        btn.classList.add("text-red-600");
      }
      btn.addEventListener("click", () => {
        if (meal.bookmark) {
          // remove
          meal.bookmark = false;
          btn.classList.remove("material-fill-1");
          btn.classList.remove("text-red-600");
        } else {
          // add
          meal.bookmark = true;
          btn.classList.add("material-fill-1");
          btn.classList.add("text-red-600");
        }
      });

      mealsList.append(item);
      count++;
    }
    resultsCounter.innerText = count;
  });
}

renderMeals();

// layout toggles
const layoutToggles = document.querySelectorAll("[toggle-layout]");
const layout = document.querySelector("#layout");
layoutToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const display = btn.getAttribute("toggle-layout");
    layout.classList.remove("gridded", "list");
    layout.classList.add(display);

    layoutToggles.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
