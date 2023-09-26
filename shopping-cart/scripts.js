const CART = [
  {
    product: "Cat Toy",
    quantity: 1,
    unit_price: 19.99,
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/random-product-4.jpg",
  },
  {
    product: "Mega Gadget",
    quantity: 1,
    unit_price: 9.5,
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/random-product-1.webp",
  },
  {
    product: "Fantastic Doodad",
    quantity: 4,
    unit_price: 19.99,
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/random-product-2.webp",
  },
  {
    product: "Wonder Thingamajig",
    quantity: 2,
    unit_price: 29.75,
    image:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/random-product-3.jpg",
  },
];

// create clone of cart to allow reset for demo (this would't be needed in a real-world example)
let cartClone = JSON.parse(JSON.stringify(CART));

const tplProduct = document.querySelector("#tpl-product");
const productsList = document.querySelector("#products-list");
const displaySubtotal = document.querySelector("#subtotal");
const btnReset = document.querySelector("#btn-reset");
const iconCart =
  '<span class="material-symbols-outlined">shopping_cart</span >';
const btnCheckout = document.querySelector("#btn-checkout");
const panelCheckout = document.querySelector("#panel-checkout");
const btnCloseCheckout = document.querySelector("#btn-close");
const DELAY_STEPS = 500; // delay between loading

let initalLoad = true;

// show cart list
function renderCart() {
  productsList.innerHTML = "";
  subtotal = 0;
  let delay = 0;

  if (cartClone.length === 0) {
    showEmptyCart();
  } else {
    cartClone.forEach((item, idx) => {
      // calculate price
      const totalItem = parseFloat(item.unit_price) * parseFloat(item.quantity);

      const clone = tplProduct.content.cloneNode(true);
      const article = clone.querySelector("article");
      const selectQuantity = clone.querySelector("select");
      const btnDelete = clone.querySelector("[data-delete]");
      const priceEl = clone.querySelector("p");
      const titleEl = clone.querySelector("h2");
      const imgEl = clone.querySelector("[data-img]");

      selectQuantity.value = item.quantity;
      const newImg = document.createElement("img");
      newImg.classList.add("w-full", "h-full", "object-cover");
      newImg.src = item.image;

      // only show skeleton effect on intial load or after reset
      delay = initalLoad ? delay + DELAY_STEPS : 0;
      setTimeout(() => {
        imgEl.classList.remove("animate-pulse");
        imgEl.append(newImg);
        titleEl.innerText = item.product;
        priceEl.innerHTML = `$${totalItem.toFixed(2)}`;
      }, delay);

      // add product to dom
      productsList.append(clone);

      // add upt total
      subtotal = subtotal + totalItem;

      // add functions
      selectQuantity.addEventListener("change", (e) => {
        // update item quantity in array
        item.quantity = e.target.value;
        // re render the cart with the new value
        renderCart();
      });
      // delete item from cart
      btnDelete.addEventListener("click", () => {
        const confirmation = confirm(
          `Are you sure you want to delete the ${item.product}?`
        );
        if (confirmation) {
          if (idx >= 0 && idx < cartClone.length) {
            // remove from array
            cartClone.splice(idx, 1);
            // fade out
            article.classList.add("opacity-0");
            // rerender cart after short delay
            setTimeout(() => renderCart(), 500);
          }
        }
      });
    });
  }

  // prevent delay on re-loading items after inital load
  if (initalLoad) initalLoad = false;

  subtotal = subtotal.toFixed(2);

  // add subtotal
  displaySubtotal.innerText = `$${subtotal}`;
}
// show message and button if cart empty
function showEmptyCart() {
  // add empty cart message and reset bnutton
  // NTOE - I normally don0t like to add html directly in JavaScript, preferring to use templates. However for a one of instance I can maje an exception :)
  const btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add(
    "mx-auto",
    "border",
    "w-fit",
    "rounded-md",
    "py-1",
    "px-4",
    "border-fuchsia-500",
    "flex",
    "items-center",
    "justify-center",
    "gap-1",
    "tranistion",
    "hover:bg-fuchsia-500",
    "hover:text-white"
  );
  btn.innerHTML = `
        ${iconCart}
        Reset cart
    `;
  btn.addEventListener("click", () => {
    resetCart();
  });
  const msg = document.createElement("p");
  msg.classList.add(
    "text-center",
    "p-6",
    "text-red",
    "font-bold",
    "flex",
    "items-center",
    "justify-center",
    "gap-4",
    "flex-col"
  );
  msg.innerText = `You don't have any products in your cart.`;
  msg.append(btn);

  productsList.append(msg);
}

// reset
btnReset.addEventListener("click", () => {
  // re clone cart
  resetCart();
});

// reset cart by re-cloning the original array
function resetCart() {
  cartClone = JSON.parse(JSON.stringify(CART));
  // reset inital load to show skeleton effect
  initalLoad = true;

  // reload cart
  renderCart();
}
/*
const headerHeight = document.querySelector("header").offsetHeight;
const wrapperheight = document.querySelector("#wrapper").offsetHeight;
const h = wrapperheight - headerHeight;
panelCheckout.classList.add(`h-[${h}]`);
*/
// show checkout panel
btnCheckout.addEventListener("click", () => {
  btnCheckout.classList.add("translate-y-full");
  // show panel after short delay
  setTimeout(() => {
    panelCheckout.classList.remove("translate-y-full");
    //panelCheckout.classList.add(`-translate-y-`)
  }, 300);
});
// close checkout panel
btnCloseCheckout.addEventListener("click", () => {
  panelCheckout.classList.remove("translate-y-[80px]");
  panelCheckout.classList.add("translate-y-full");

  // show button after short delay
  setTimeout(() => {
    btnCheckout.classList.remove("translate-y-full");
  }, 500);
});

renderCart();
