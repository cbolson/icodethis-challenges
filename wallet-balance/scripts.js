const COMPANIES = [
  {
    name: "ABC Electronics",
    amount: 2500.5,
    paid: true,
  },
  {
    name: "XYZ Manufacturing",
    amount: 1800.75,
    paid: false,
  },
  {
    name: "Tech Solutions Inc.",
    amount: 3200.25,
    paid: true,
  },
  {
    name: "Global Services Corp.",
    amount: 1450.9,
    paid: false,
  },
  {
    name: "Smith & Associates",
    amount: 2100.6,
    paid: true,
  },
  {
    name: "Green Energy Group",
    amount: 2800.4,
    paid: false,
  },
  {
    name: "Blue Sky Innovations",
    amount: 1950.25,
    paid: true,
  },
  {
    name: "Sunrise Technologies",
    amount: 3200.75,
    paid: false,
  },
  {
    name: "Dynamic Solutions Co.",
    amount: 1650.3,
    paid: true,
  },
  {
    name: "Infinite Networks",
    amount: 2300.2,
    paid: false,
  },
  {
    name: "Pioneer Systems Ltd.",
    amount: 2750.7,
    paid: true,
  },
  {
    name: "Swift Enterprises",
    amount: 1900.55,
    paid: false,
  },
];

const waves = document.querySelector("#path");
const btnPending = document.querySelector("#btn-pending");
const btnCompleted = document.querySelector("#btn-completed");
const listResults = document.querySelector("#list-results");
const tplCompany = document.querySelector("#tpl-item");

let current = "pending";

btnCompleted.addEventListener("pointerover", () => {
  path.setAttribute("d", "M 0 175 C 160 260 160 80 320 175 L 320 0 L 0 0 Z");
  btnCompleted.classList.add("active");
  btnPending.classList.remove("active");
});
btnCompleted.addEventListener("click", () => {
  // this is just to preven reloading the results - ideally I need to remove the event listener
  if (current === "pending") {
    renderCompanies(true);
    current = "completed";
  }
});

btnPending.addEventListener("pointerover", () => {
  path.setAttribute("d", "M 0 175 C 160 80 160 260 320 175 L 320 0 L 0 0 Z");
  btnPending.classList.add("active");
  btnCompleted.classList.remove("active");
});
btnPending.addEventListener("click", () => {
  // this is just to preven reloading the results - ideally I need to remove the event listener
  if (current === "completed") {
    renderCompanies(false);
    current = "pending";
  }
});

function renderCompanies(isPaid = false) {
  /*
    // renmove current items
    const currentArticles = listResults.querySelectorAll("article");
    console.log(currentArticles);
    if (currentArticles.length) {
        let delay = 0;
        currentArticles.forEach(a => {
            setTimeout(() => a.classList.add("translate-y-[-1000px]"), delay);
            delay = delay + 200
        })
    }
    */

  listResults.innerHTML = "";

  // filter results to paid or due
  const arr = COMPANIES.filter((c) => c.paid === isPaid);
  delay = 0;
  arr.forEach(({ name, amount, paid }) => {
    const clone = tplCompany.content.cloneNode(true);
    const article = clone.querySelector("article");
    const status = clone.querySelector("[data-status]");

    clone.querySelector("h3").innerText = name;
    clone.querySelector(
      "[data-desc]"
    ).innerText = `Payment request for ${amount} CAD sent`;
    if (paid) {
      status.innerText = `${name} has paid`;
      status.classList.add("text-green-500");
      clone.querySelector("[data-buttons]").remove();
    } else {
      status.innerText = `${name} hasn't paid yet`;
      status.classList.add("text-red-500");
    }
    setTimeout(() => article.classList.remove("translate-y-[1000px]"), delay);
    delay = delay + 200;

    listResults.append(clone);
  });
}

renderCompanies(false);
