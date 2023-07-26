tailwind.config = {
  darkMode: "class",
};
let userLang = "en";

function renderTexts(lang) {
  const langTexts = document.querySelectorAll("[data-lang]");
  langTexts.forEach((txt) => {
    const textAlt = txt.getAttribute("data-lang");
    const textCurrent = txt.innerText;
    txt.innerText = textAlt;
    txt.setAttribute("data-lang", textCurrent);
  });
}
//renderTexts(userLang);
// swap language
const selectLang = document.querySelectorAll("[data-lang]");
selectLang.forEach((s) => {
  s.addEventListener("change", () => {
    if (s.checked) userLang = s.value;

    renderTexts(userLang);
  });
});

const toggles = document.querySelectorAll("[toggle]");

toggles.forEach((toggle) => {
  const type = toggle.getAttribute("toggle");
  toggle.addEventListener("change", () => {
    const icons = toggle.nextElementSibling;
    const iconON = icons.querySelectorAll("span")[0];
    const iconOFF = icons.querySelectorAll("span")[1];
    if (toggle.checked) {
      iconON.classList.remove("text-white");
      iconON.classList.remove("bg-pink-500");
      iconOFF.classList.add("text-white");
      iconOFF.classList.add("bg-pink-500");
    } else {
      iconON.classList.add("text-white");
      iconON.classList.add("bg-pink-500");
      iconOFF.classList.remove("text-white");
      iconOFF.classList.remove("bg-pink-500");
    }
    switch (type) {
      case "theme":
        document.documentElement.classList.toggle("dark");
        break;

      default:
        break;
    }
  });
});

const slideToggles = document.querySelectorAll("[toggle-slide]");
slideToggles.forEach((toggle) => {
  const el = document.querySelector(`#${toggle.getAttribute("toggle-slide")}`);
  toggle.addEventListener("click", () => {
    el.classList.toggle("hidden");
  });
});

const TYPES = [
  {
    id: 1,
    type: "products",
    desc: {
      en: "Product Discovery",
      es: "Descubriemento productos",
    },
  },
  {
    id: 2,
    type: "products",
    desc: {
      en: "Accounting Software",
      es: "Software Gestoria",
    },
  },
  {
    id: 3,
    type: "marketing",
    desc: {
      en: "Social distribution",
      es: "Marketing Social",
    },
  },
  {
    id: 4,
    type: "marketing",
    desc: {
      en: "Email marketing",
      es: "marketing e-mail",
    },
  },
  {
    id: 5,
    type: "services",
    desc: {
      en: "Delivery",
      es: "Entrega",
    },
  },
  {
    id: 6,
    type: "services",
    desc: {
      en: "Onboarding",
      es: "Onboarding",
    },
  },
  {
    id: 7,
    type: "services",
    desc: {
      en: "Customer comunications",
      es: "Comunicaciones cliente",
    },
  },
];

const tplItem = document.querySelector("#tpl-item");
const listTypes = document.querySelector("#list-types");

function renderList(selectType = "") {
  listTypes.innerHTML = "";
  const results = selectType
    ? TYPES.filter((x) => x.type === selectType)
    : TYPES;
  results.forEach(({ id, desc }) => {
    const item = tplItem.content.cloneNode(true);
    const label = item.querySelector("label");
    label.setAttribute("for", `type-${id}`);
    item.querySelector("input").setAttribute("id", `type-${id}`);
    item.querySelector("input").setAttribute("value", desc);
    item.querySelector("[item-desc]").setAttribute("data-lang", desc["es"]);
    item.querySelector("[item-desc]").innerText = desc[userLang];
    listTypes.append(item);
  });
}

renderList();

const selectTypes = document.querySelector("#select-type");
document.querySelector("#select-type").addEventListener("change", () => {
  renderList(selectTypes.value);
});
