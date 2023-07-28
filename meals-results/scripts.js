const FILTERS = [
  "vegetarian",
  "protein",
  "dinner",
  "snack",
  "vegan",
  "gluten-free",
  "meat",
];
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
    desc: "Avocado tuna hash",
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

// start with no filters
const filtersApplied = [];

// filtr options list
const filtersList = document.querySelector("#filters-list");
const tplItem = document.querySelector("#tpl-item");

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
// meals
const tplMeal = document.querySelector("#tpl-meal");
const mealsList = document.querySelector("#meals-list");
const resultsCounter = document.querySelector("[num-results]");

function renderMeals() {
  // reset
  let count = 0;
  mealsList.innerHTML = "";

  //
  let arr;
  // filter meals if defined
  if (filtersApplied.length > 0) {
    arr = MEALS.filter((item) => {
      return filtersApplied.every((str) => {
        return item.tags.includes(str);
      });
    });
  } else {
    arr = MEALS;
  }

  arr.forEach((meal) => {
    const item = tplMeal.content.cloneNode(true);
    item.querySelector("h3").innerText = meal.desc;
    item.querySelector("p").innerText = meal.time;
    item.querySelector("img").src = meal.img;
    const ul = item.querySelector("ul");
    // tags
    meal.tags.forEach((tag) => {
      const el = document.createElement("li");
      el.innerText = tag;
      ul.append(el);
    });
    const btn = item.querySelector("[bookmark]");
    if (meal.bookmark) {
      btn.classList.add("material-fill-1");
      btn.classList.add("text-red-600");
    }
    btn.addEventListener("click", () => {
      if (meal.bookmark) {
        // remove
        meal.bookmark = false;
        // btn.classList.remove('material-fill-1');
        btn.classList.remove("text-red-600");
      } else {
        // add
        meal.bookmark = true;
        //btn.classList.add('material-fill-1');
        btn.classList.add("text-red-600");
      }
    });
    mealsList.append(item);
    count++;
  });
  if (count === 0) {
    const msg = "We don't have any meals that match your filters";
    const el = document.createElement("div");
    el.classList.add("rounded-xl", "bg-red-100", "p-6", "mx-auto", "w-fit");
    el.innerText = msg;
    mealsList.append(el);
  }
  resultsCounter.innerText = count;
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
