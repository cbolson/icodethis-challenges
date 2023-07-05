const SHIPPING = 299;
const VAT = 0; // percent
const CURRENCY_CODE = "$";

// list of food items
const foodItems = [
  {
    id: 1,
    name: "British Pizza",
    price: 799,
  },
  {
    id: 2,
    name: "British DIavola",
    price: 799,
  },
  {
    id: 3,
    name: "Four Cheeses",
    price: 899,
  },
  {
    id: 4,
    name: "Hawaiana",
    price: 799,
  },
];

const drinkItems = [
  {
    id: 1,
    name: "Cola",
    price: 199,
  },
  {
    id: 2,
    name: "Beer",
    price: 399,
  },
  {
    id: 3,
    name: "Milkshake",
    price: 199,
  },
  {
    id: 4,
    name: "Fizzy Water",
    price: 250,
  },
];
// existing menu items (could use local storage??)
const userOrder = {
  userID: 233,
  name: "John",
  tel: "612222822",
  address: {
    street: "London Road",
    number: 13,
    city: "Luton",
  },
  order: [
    {
      type: "food",
      itemID: 1,
      quantity: 1,
    },
    {
      type: "food",
      itemID: 3,
      quantity: 2,
    },
    {
      type: "drink",
      itemID: 1,
      quantity: 1,
    },
  ],
};

const tplItem = document.querySelector("#tpl-item");
const orderItems = document.querySelector("#items");
let totalCost = 0;
let totalCostAcc = 0;

(function renderUerName() {
  document.querySelector("[user-name]").innerText = userOrder.name;
  renderUserOrder();
})();

function toCents(num) {
  return num / 100;
}

function resetOrderDisplay() {
  orderItems.innerHTML = "";
  totalCost = 0;
  totalCostAcc = 0;
}

function renderUserOrder() {
  resetOrderDisplay();
  userOrder.order.forEach((item) => {
    listItem(item);
  });
  renderSummary();
}

function listItem(orderItem) {
  const { type, itemID, quantity } = orderItem;

  if (quantity < 1) return;

  // get item data
  let item = "";
  if (type === "food") {
    item = foodItems.find((x) => x.id == itemID);
  } else {
    item = drinkItems.find((x) => x.id === itemID);
  }

  const { name, price } = item;
  const itemTotal = price * quantity;
  totalCost = totalCost + itemTotal;

  const order = tplItem.content.cloneNode(true);
  order.querySelector("[item-desc]").innerText = name;
  order.querySelector("[item-price]").innerText = `${CURRENCY_CODE}${toCents(
    itemTotal
  )}`;
  order.querySelector("[item-quantity]").value = quantity;

  const itemButtons = [...order.querySelectorAll(["button"])];
  itemButtons.forEach((btn) => {
    const action = btn.getAttribute("data-action");

    btn.addEventListener("click", () => {
      switch (action) {
        case "add":
          increaseQuantity(orderItem);
          break;
        case "less":
          decreaseQuantity(orderItem);
          break;
        case "remove":
          removeItem(orderItem);
          break;
      }
      renderUserOrder();
    });
  });
  // add to dom
  orderItems.append(order);
}

function increaseQuantity(orderItem) {
  orderItem.quantity++;
}
function decreaseQuantity(orderItem) {
  orderItem.quantity--;
  if (orderItem.quantity == 0) {
    removeItem(orderItem);
  }
}

function removeItem({ type, itemID }) {
  userOrder.order.forEach((order, key) => {
    if (order.type === type && order.itemID == itemID) {
      delete userOrder.order[key];
    }
  });
}

function renderSummary() {
  // claculate overall cost (accumulated)
  totalCostAcc = totalCost + SHIPPING;
  const vat = (totalCostAcc / 100) * VAT;
  totalCostAcc = totalCostAcc + vat;
  totalCostAcc = parseFloat(toCents(totalCostAcc).toFixed(2));

  document.querySelector(
    "[summary-total]"
  ).innerText = `${CURRENCY_CODE}${toCents(totalCost)}`;
  document.querySelector(
    "[summary-total-acc]"
  ).innerText = `${CURRENCY_CODE}${totalCostAcc}`;
}

// MENU ITEMS
const menuEl = document.querySelector("#menu");
const btnsAdd = document.querySelectorAll("[btn-add]");
const tplMenu = document.querySelector("#tpl-menu");
const menuList = menuEl.querySelector("#menu-list");

btnsAdd.forEach((btn) => {
  const action = btn.getAttribute("btn-add");
  btn.addEventListener("click", () => {
    loadMenu(action);
  });
});
function loadMenu(action) {
  // empty menu
  menuList.innerHTML = "";

  let desc = "";

  // loop menu items to add to list
  if (action === "food") {
    desc = "Food";

    // get food items
    foodItems.forEach((item) => {
      const menuItem = tplMenu.content.cloneNode(true);
      menuItem.querySelector("[item-name]").innerText = item.name;
      menuItem.querySelector(
        "[item-price]"
      ).innerText = `${CURRENCY_CODE}${toCents(item.price)}`;

      // button
      menuItem.querySelector("button").addEventListener("click", () => {
        addItem("food", item.id);
      });

      // add to dom
      menuList.append(menuItem);
    });
  } else {
    // get drink items

    desc = "Drinks";

    drinkItems.forEach((item) => {
      const menuItem = tplMenu.content.cloneNode(true);
      menuItem.querySelector("[item-name]").innerText = item.name;
      menuItem.querySelector(
        "[item-price]"
      ).innerText = `${CURRENCY_CODE}${toCents(item.price)}`;

      // button
      menuItem.querySelector("button").addEventListener("click", () => {
        addItem("drinks", item.id);
      });
      // add to dom
      menuList.append(menuItem);
    });
  }

  menuEl.querySelector("[menu-type]").innerText = desc;

  // slide into view
  menuEl.style.transform = "translateY(0)";
}
function addItem(itemType, itemID) {
  let itemExists = false;
  // check if item is already in user order
  userOrder.order.forEach((order, key) => {
    if (order.type === itemType && order.itemID == itemID) {
      userOrder.order[key].quantity++;
      itemExists = true;
    }
  });

  // else add it
  if (!itemExists) {
    const newOrderItem = {
      type: `${itemType}`,
      itemID: itemID,
      quantity: 1,
    };
    userOrder.order.push(newOrderItem);
  }
  renderUserOrder();
}

document.querySelector("#btn-close-menu").addEventListener("click", () => {
  menuEl.style.transform = "translateY(-120%)";
});

// checkout
const msgEl = document.querySelector("#checkout-msg");
document.querySelector("#btn-checkout").addEventListener("click", () => {
  checkout();
});
function checkout() {
  // show thank you message
  const msg = `
    <p><strong>${userOrder.name}</strong>, Thanks for placing your order at Pizza Hut</p>
    <p>Your order will be deliverd within 45 minutes to:
    <br><strong>${userOrder.address.number} ${userOrder.address.street}, ${userOrder.address.city}</strong></p>
    `;
  msgEl.querySelector("[data-msg]").innerHTML = msg;
  msgEl.style.transform = "translateY(0)";
}

document.querySelector("#btn-close-msg").addEventListener("click", () => {
  msgEl.style.transform = "translateY(-120%)";
});
