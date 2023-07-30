const tagsInput = document.querySelector("#tags-input");
const tagsList = document.querySelector("[data-tags]");
const tplTag = document.querySelector("#tpl-tags");

// check if we have tags saved
let myTags = [];
if (localStorage.getItem("myTags")) {
  myTags = JSON.parse(localStorage.getItem("myTags"));
  renderTags(myTags);
}

// tags inpput keyup
tagsInput.addEventListener("keyup", function (e) {
  const str = e.target.value.trim(" ");
  if (e.which === 13 || str.charAt(str.length - 1) === ",") {
    // "enter" key or last char is a "","

    // split text by commas, remove spaces, add to array tags
    const tags = e.target.value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    // empty input
    tagsInput.value = "";

    const newTag = tags.pop();

    if (!myTags.includes(newTag)) {
      myTags.push(newTag);
      renderTags(myTags);
    }
  }
});

function renderTags(tags) {
  // set local storage with the latest array
  localStorage.setItem("myTags", JSON.stringify(tags));

  // clear current list
  tagsList.innerHTML = "";

  // sort
  tags.sort();

  // display each tag
  tags.forEach((tag) => {
    const tagElement = tplTag.content.cloneNode(true);
    tagElement.querySelector("p").innerText = tag;
    tagElement.querySelector("button").addEventListener("click", () => {
      tags.splice(tags.indexOf(tag), 1);
      renderTags(tags);
    });
    tagsList.appendChild(tagElement);
  });
}

// instant tags
const instantTags = document.querySelectorAll("[tag-this]");
instantTags.forEach((tag) => {
  const val = tag.innerText;
  tag.addEventListener("click", () => {
    if (!myTags.includes(val)) {
      myTags.push(val);
      renderTags(myTags);
    }
  });
});

const CATEGORIES = [
  {
    id: 1,
    desc: "web",
  },
  {
    id: 2,
    desc: "mobile",
  },
  {
    id: 3,
    desc: "UI kit",
  },
  {
    id: 4,
    desc: "Coded",
  },
  {
    id: 5,
    desc: "Other",
  },
];

// cat-input
const tplItem = document.querySelector("#tpl-item");
const listCat = document.querySelector("#list-cat");
const inputCat = document.querySelector("#cat-input");
const inputCatDesc = inputCat.querySelector("p");

const inputCatArrow = inputCat.querySelector("span");

let myCat;
if (localStorage.getItem("myCat")) {
  myCat = localStorage.getItem("myCat");
  const catDesc = CATEGORIES.find((x) => x.id == myCat);
  setSelectedCat(catDesc.desc);
}

function setSelectedCat(cat) {
  inputCatDesc.innerText = cat;
  inputCatDesc.style.opacity = 1;
}

const DELAY = 100; // time for each option so slide in
function renderList() {
  listCat.innerHTML = "";
  CATEGORIES.forEach(({ id, desc }) => {
    const item = tplItem.content.cloneNode(true);
    const label = item.querySelector("label");
    label.setAttribute("for", `type-${id}`);
    label.innerText = desc;
    const input = item.querySelector("input");
    input.setAttribute("id", `type-${id}`);
    input.setAttribute("value", id);
    if (myCat == id) input.checked = true;
    input.addEventListener("change", () => {
      // save selected cat to local storage
      myCat = id;
      localStorage.setItem("myCat", id);
      setSelectedCat(desc);
    });
    listCat.append(item);
  });
  listCat.style.maxHeight = "300px";
  let i = DELAY;
  listCat.querySelectorAll("label").forEach((p) => {
    setTimeout(() => {
      p.style.transform = "translate(0)";
    }, i);
    i += DELAY;
  });
}

inputCat.addEventListener("click", () => {
  inputCat.classList.toggle(
    "border-slate-300"
  ); /* I am taking advantage of Tawilind css order by having 2 bg colors on this element and toggleing off the first one */
  inputCatArrow.classList.add("rotate-180");
  renderList();
});
// close list on click outside - this also includes selection an option
document.addEventListener("click", function handleClickOutsideBox(event) {
  if (!inputCat.contains(event.target)) {
    listCat.style.maxHeight = "0";
    inputCat.classList.add("border-slate-300");
    inputCatArrow.classList.remove("rotate-180");
  }
});
