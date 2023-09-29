const RECIPIES = [
  {
    name: "Classic Chocolate Cake",
    description:
      "Indulge in the rich and moist layers of chocolate goodness. A timeless dessert for any occasion.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 cups granulated sugar",
      "3/4 cup unsweetened cocoa powder",
      "1 1/2 tsp baking powder",
      "1 1/2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup buttermilk",
      "1/2 cup vegetable oil",
      "2 tsp pure vanilla extract",
      "1 cup boiling water",
      "For frosting: 1 cup unsalted butter, 1 1/2 cups powdered sugar, 1/2 cup cocoa powder, 2 tsp vanilla extract, 1/4 cup milk",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
      "In a large bowl, sift together flour, sugar, cocoa, baking powder, baking soda, and salt.",
      "Add eggs, buttermilk, oil, and vanilla; beat until well combined.",
      "Stir in boiling water until the batter is smooth. Pour into prepared pans.",
      "Bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.",
      "For the frosting, beat butter, sugar, cocoa, and vanilla until fluffy. Gradually add milk to achieve desired consistency.",
      "Once the cakes are cooled, frost and enjoy!",
    ],
    reviews: 25,
    averageReview: 4.8,
    img: "https://images.unsplash.com/photo-1576618148423-df549bcb6972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Homemade Apple Pie",
    description:
      "A classic American dessert featuring tender, spiced apples in a flaky pie crust.",
    ingredients: [
      "Pastry for a double-crust 9-inch pie",
      "1/2 cup unsalted butter",
      "3 tablespoons all-purpose flour",
      "1/4 cup water",
      "1/2 cup white sugar",
      "1/2 cup brown sugar",
      "8 Granny Smith apples - peeled, cored, and sliced",
      "1 tsp cinnamon",
      "1/4 tsp nutmeg",
      "1 egg, beaten (for egg wash)",
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Place one pastry crust in a 9-inch pie pan.",
      "Melt butter in a saucepan. Stir in flour to form a paste. Add water, white sugar, and brown sugar, and bring to a boil. Reduce temperature and let simmer.",
      "Place the sliced apples in a large bowl. Add the cinnamon and nutmeg, and mix well.",
      "Pour the sugar mixture over the apples and stir to coat. Pour evenly into the pie crust.",
      "Cover with the second crust, seal the edges, and cut a few small slits in the top crust to allow steam to escape. Brush the top crust with beaten egg.",
      "Bake for 15 minutes at 425°F (220°C), then reduce the oven temperature to 350°F (175°C) and continue baking for 35 to 45 minutes, or until apples are soft and the crust is golden brown.",
      "Allow to cool before serving. Enjoy!",
    ],
    reviews: 32,
    averageReview: 4.9,
    img: "https://images.unsplash.com/photo-1562007908-17c67e878c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Vanilla Bean Panna Cotta",
    description:
      "A silky and creamy Italian dessert infused with vanilla bean flavor.",
    ingredients: [
      "2 cups heavy cream",
      "1/4 cup granulated sugar",
      "1 vanilla bean, split lengthwise and seeds scraped",
      "2 1/4 tsp gelatin powder",
      "3 tbsp cold water",
      "Fresh berries for garnish",
    ],
    instructions: [
      "In a saucepan, combine the heavy cream and sugar. Add the vanilla bean seeds and the split pod. Heat over medium heat until it simmers. Remove from heat and let it steep for 20 minutes.",
      "In a separate bowl, sprinkle the gelatin over cold water and let it bloom for 5 minutes.",
      "Remove the vanilla bean pod from the cream mixture. Reheat the cream until it's warm but not boiling. Remove from heat.",
      "Add the gelatin mixture to the warm cream and stir until fully dissolved.",
      "Pour the mixture into serving glasses or molds. Refrigerate for at least 4 hours or until set.",
      "Serve with fresh berries on top. Enjoy!",
    ],
    reviews: 18,
    averageReview: 4.7,
    img: "https://images.pexels.com/photos/5228768/pexels-photo-5228768.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1",
  },
  {
    name: "Lemon Bars",
    description: "Tangy and sweet lemon bars with a buttery shortbread crust.",
    ingredients: [
      "For the crust: 1 cup all-purpose flour, 1/2 cup unsalted butter, 1/4 cup powdered sugar, 1/4 tsp salt",
      "For the filling: 1 cup granulated sugar, 2 tbsp all-purpose flour, 1/2 tsp baking powder, 2 large eggs, 2 tbsp fresh lemon juice, 1 tsp lemon zest",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease a 9x9-inch baking pan.",
      "In a bowl, combine the flour, powdered sugar, and salt for the crust. Cut in the butter until the mixture resembles coarse crumbs. Press into the bottom of the prepared pan.",
      "Bake for 18-20 minutes or until the edges are golden brown.",
      "In another bowl, whisk together the granulated sugar, flour, and baking powder for the filling. Add the eggs, lemon juice, and lemon zest. Mix until well combined.",
      "Pour the filling over the hot crust and return to the oven. Bake for an additional 20-25 minutes or until the filling is set and lightly golden.",
      "Let cool completely, then cut into squares. Dust with powdered sugar if desired. Enjoy!",
    ],
    reviews: 22,
    averageReview: 4.6,
    img: "https://images.unsplash.com/photo-1528252941458-c1d19f902318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBiYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Strawberry Shortcake",
    description:
      "A delightful dessert featuring sweet strawberries, fluffy biscuits, and whipped cream.",
    ingredients: [
      "For the biscuits: 2 cups all-purpose flour, 1/4 cup granulated sugar, 2 tsp baking powder, 1/2 tsp baking soda, 1/2 tsp salt, 1/2 cup unsalted butter (cold, cut into cubes), 3/4 cup buttermilk",
      "For the strawberry filling: 4 cups fresh strawberries (sliced), 1/4 cup granulated sugar, 1 tsp vanilla extract",
      "Whipped cream for topping",
    ],
    instructions: [
      "Preheat oven to 450°F (230°C).",
      "In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt. Add the cold butter cubes and cut into the dry ingredients using a pastry cutter or fork until the mixture resembles coarse crumbs.",
      "Add the buttermilk and stir until just combined. Turn the dough out onto a floured surface and gently knead it a few times. Pat the dough into a 1-inch thick rectangle. Using a round biscuit cutter, cut out biscuits",
    ],
    reviews: 15,
    averageReview: 4.5,
    img: "https://plus.unsplash.com/premium_photo-1672152726272-523db6b481c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RyYXdiZXJyeSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const main = document.querySelector("main");
const header = document.querySelector("header");
const tplItem = document.querySelector("#tpl-item");
const listItems = document.querySelector("#list-items");
const dots = document.querySelector("#list-dots");
const panelInfo = document.querySelector("#panel-info");
const btnCloseInfo = document.querySelector("#btn-close-item");
//

let currentSlideIndex = 4;
let prevSlideIndex = currentSlideIndex;
let currentSlideEl = "";

// add recepies to slides
function renderRecepies() {
  listItems.innerHTML = "";
  RECIPIES.forEach((r, idx) => {
    const clone = tplItem.content.cloneNode(true);
    const slide = clone.querySelector("article");
    const btn = clone.querySelector("button");
    clone.querySelector("[data-title]").innerText = r.name;
    clone.querySelector("[data-desc]").innerText = r.description;
    clone.querySelector("[data-stars]").innerHTML = rating(r.averageReview);
    clone.querySelector("[data-average]").innerHTML = r.averageReview;
    clone.querySelector("[data-reviews]").innerHTML = `${r.reviews} Reviews`;

    // button
    btn.addEventListener("click", () => showRecepie(r));

    // add to dom
    listItems.append(clone);

    setTimeout(() => {
      slide.classList.add("transition-all", "duration-500");
    }, 500);

    // how first item & dots
    const dot = document.createElement("button");
    if (idx === currentSlideIndex) {
      // define this slide element as the current selected one
      currentSlideEl = slide;
      // remove styling
      currentSlideEl.classList.remove("translate-x-96", "scale-90");
      // set bacjground image
      //setBG(r)
      main.style.setProperty("--bg-img", `url(${r.img})`);
      // mark dot as active
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      if (currentSlideIndex === idx) return;

      // define previous slide as current slide
      prevSlideIndexEl = currentSlideEl;
      // set new slide to selected
      currentSlideEl = slide;
      // update index (for dots)
      currentSlideIndex = idx;

      // SLIDE OUT CURRENT SLIDE FIRST
      slideOut();

      // SLIDE INT NEW SLIDE
      slideIn();
    });
    dots.append(dot);
  });
}

// slide out current slide
function slideOut() {
  prevSlideIndexEl.classList.add("scale-50");
  // slide out to left and fade out
  setTimeout(
    () => prevSlideIndexEl.classList.add("-translate-x-96", "opacity-0"),
    300
  );
  // move to right
  setTimeout(() => prevSlideIndexEl.classList.add("translate-x-96"), 520);
  // remove left translate
  setTimeout(() => prevSlideIndexEl.classList.remove("-translate-x-96"), 600);
}

// slide in new slide
function slideIn() {
  const dots = document.querySelectorAll("#list-dots button");

  setBG(RECIPIES[currentSlideIndex]);

  // remove scale and opacity
  currentSlideEl.classList.remove("scale-50", "opacity-0");

  // slide back in
  setTimeout(() => {
    currentSlideEl.classList.remove("translate-x-96");
  }, 600);

  // set bg on dots
  dots.forEach((d) => d.classList.remove("active"));
  dots[currentSlideIndex].classList.add("active");
}

renderRecepies();

// set background image according to current recepie
function setBG({ img }) {
  // fade bg image out
  setTimeout(() => main.classList.add("before:opacity-0"), 300);

  // set new image
  setTimeout(() => main.style.setProperty("--bg-img", `url(${img})`), 510);

  // fade in new image
  setTimeout(() => main.classList.remove("before:opacity-0"), 520);
}

// button - close recepie
btnCloseInfo.addEventListener("click", () => {
  hideRecepie();
});

// load recepie details
function showRecepie(r) {
  // load data
  panelInfo.querySelector("[data-ingredients]").innerHTML = "";
  panelInfo.querySelector("[data-instructions]").innerHTML = "";

  panelInfo.querySelector("[data-title]").innerText = r.name;
  panelInfo.querySelector("[data-desc]").innerText = r.description;
  panelInfo
    .querySelector("[data-ingredients]")
    .appendChild(createUnorderedListFromArray(r.ingredients));
  panelInfo
    .querySelector("[data-instructions]")
    .appendChild(createUnorderedListFromArray(r.instructions));

  setTimeout(() => dots.classList.add("translate-y-96"), 0);
  setTimeout(() => header.classList.add("-translate-y-96"), 0);
  setTimeout(() => currentSlideEl.classList.add("scale-0"), 400);
  setTimeout(() => panelInfo.classList.remove("scale-0"), 900);
}

// hide recepie and reveal slide and dos
function hideRecepie() {
  panelInfo.classList.add("scale-0");
  setTimeout(() => currentSlideEl.classList.remove("scale-0"), 300);
  setTimeout(() => dots.classList.remove("translate-y-96"), 600);
  setTimeout(() => header.classList.remove("-translate-y-96"), 600);
}

// convert rating to stars
function rating(rate) {
  // console.log(rate);
  const val = Math.floor(rate);
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    const fill = i <= val ? "material-fill-1" : "";
    stars += `<span  class="star material-symbols-outlined ${fill}">star</span>`;
  }
  return stars;
}

// convert array to ul list
function createUnorderedListFromArray(array) {
  const ul = document.createElement("ul");

  // Iterate through the array and create list items (li) for each item
  array.forEach((item) => {
    // console.log(item);
    const li = document.createElement("li");
    li.textContent = ` - ${item}`;
    ul.appendChild(li);
  });
  return ul;
}
