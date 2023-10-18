const CAT = [
  {
    id: 0,
    name: "All Categories",
  },
  {
    id: 1,
    name: "Community Resources",
  },
  {
    id: 2,
    name: "Design Help",
  },
  {
    id: 3,
    name: "JavaScript Development",
  },
  {
    id: 4,
    name: "Performance Optimization",
  },
  {
    id: 5,
    name: "Security and Privacy",
  },
];

const USERS = [
  {
    id: 1,
    username: "Alice Webdev",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    username: "Bob Developer",
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: 3,
    username: "Charlie Coder",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    id: 4,
    username: "David Designer",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 5,
    username: "Ella Frontend",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
];
const TAGS = [
  {
    id: 0,
    name: "All Tags",
  },
  {
    id: 1,
    name: "Responsive Design",
  },
  {
    id: 2,
    name: "UI/UX Design",
  },
  {
    id: 3,
    name: "Graphic Design",
  },
  {
    id: 4,
    name: "Typography",
  },
  {
    id: 5,
    name: "Illustration",
  },
];

const POSTS = [
  {
    id: 1,
    title: "Introduction to HTML5",
    description:
      "Discuss the basics of HTML5, its features, and how to use it to create web content.",
    category: 1,
    users: [1, 2, 3],
    tags: [1, 2],
    date: "2023-10-06",
  },
  {
    id: 2,
    title: "CSS Layout Techniques",
    description:
      "Share your tips and tricks for creating responsive and visually appealing layouts with CSS.",
    category: 2,
    users: [2, 4],
    tags: [1, 3],
    date: "2023-10-14",
  },
  {
    id: 3,
    title: "JavaScript Frameworks Comparison",
    description:
      "Compare popular JavaScript frameworks like React, Angular, and Vue.js to find the right one for your project.",
    category: 3,
    users: [1, 3, 5],
    tags: [2, 4],
    date: "2023-10-08",
  },
  {
    id: 4,
    title: "Responsive Web Design Best Practices",
    description:
      "Learn and share best practices for creating responsive websites that work well on various devices.",
    category: 2,
    users: [4, 5],
    tags: [1, 2],
    date: "2023-10-18",
  },
  {
    id: 5,
    title: "Web Performance Optimization",
    description:
      "Discuss techniques and tools for optimizing the performance of web applications and websites.",
    category: 4,
    users: [1, 2, 3],
    tags: [2, 3],
    date: "2023-10-20",
  },
  {
    id: 6,
    title: "CSS Grid Layout",
    description:
      "Discuss the power of CSS Grid for creating flexible and complex layouts.",
    category: 2,
    users: [3, 4],
    tags: [1, 2],
    date: "2023-10-11",
  },
  {
    id: 7,
    title: "Vue.js vs. React",
    description:
      "Debate the pros and cons of Vue.js and React for building web applications.",
    category: 3,
    users: [2, 4],
    tags: [2, 3],
    date: "2023-10-13",
  },
  {
    id: 8,
    title: "Advanced Web Animation",
    description:
      "Share your knowledge about creating engaging animations on the web.",
    category: 2,
    users: [1, 5],
    tags: [3, 4],
    date: "2023-10-09",
  },
  {
    id: 9,
    title: "Website Security Practices",
    description:
      "Discuss essential practices for securing your web applications from common threats.",
    category: 5,
    users: [2, 3],
    tags: [4, 5],
    date: "2023-10-17",
  },
  {
    id: 10,
    title: "Web Hosting Recommendations",
    description:
      "Share your experiences and recommendations for web hosting providers.",
    category: 1,
    users: [1, 4],
    tags: [3, 4],
    date: "2023-10-21",
  },
];

const psuedoLists = document.querySelectorAll("[data-list]");
const selectLists = document.querySelectorAll("[data-select]");
const btnCreate = document.querySelector("#btn-create");
const formCreate = document.querySelector("#create");
const tplArticle = document.querySelector("#tpl-article");
const listArticles = document.querySelector("#list-articles");
const btnCancel = document.querySelector("#btn-cancel");
const btnClose = document.querySelector("#btn-close");
const btnLatest = document.querySelector("#btn-latest");

let currentCat = 0;
let currentTag = 0;

let showLatest = false;

btnCreate.addEventListener("click", () => {
  loadCreateFrom();
});
btnCancel.addEventListener("click", () => {
  hideCreateForm();
});
btnClose.addEventListener("click", () => {
  hideCreateForm();
});
btnLatest.addEventListener("click", () => {
  showLatest = showLatest ? false : true;
  btnLatest.classList.toggle("active");
  renderArticles();
});

// add articles
function renderArticles() {
  listArticles.innerHTML = "";

  let results = [];
  if (currentCat > 0) {
    results = POSTS.filter((x) => x.category === currentCat);
  } else {
    results = orderByDateDescending(POSTS);
  }

  if (currentTag > 0) {
    results = results.filter((x) => x.tags.includes(currentTag));
  }
  if (showLatest) results = filterTopicsLast7Days(results);

  if (results.length < 1) {
    listArticles.innerHTML =
      '<p class="text-red-500 text-center ">Sorry, there are no posts that match your search criteria</p>';
    return;
  }

  let delayClone = 0;
  results.forEach((post) => {
    const clone = tplArticle.content.cloneNode(true);
    const article = clone.querySelector("article");

    const elTitle = clone.querySelector("[data-title]");
    const elCat = clone.querySelector("p");
    const elImages = clone.querySelector("[data-images]");
    const elTags = clone.querySelector("[data-tags]");
    const elDesc = clone.querySelector("[data-desc]");

    // psot - title
    elTitle.innerText = post.title;

    // post - cat
    const catData = CAT.find((x) => x.id == post.category);
    elCat.innerText = catData.name;
    elCat.classList.add(`cat-${post.category}`);

    // post - desc
    elDesc.innerText = post.description;
    elDesc.classList.add(`cat-${post.category}`);

    // post - images
    let images = "";
    if (post.users.length) {
      post.users.forEach((u) => {
        const user = USERS.find((x) => x.id == u);
        images += `<img src="${user.avatar}" alt="${user.username}" class="scale-0" loading="lazy">`;
      });
    }
    elImages.innerHTML = images;

    // post - tags
    let tags = "";
    if (post.tags.length) {
      post.tags.forEach((u) => {
        const tag = TAGS.find((x) => x.id == u);
        tags += `<span>${tag.name}</span>`;
      });
    }
    elTags.innerHTML = tags;

    // add to dom
    setTimeout(() => {
      listArticles.append(clone);
      // reveal content
      let delay = 300;
      setTimeout(() => elTitle.classList.remove("-translate-y-20"), delay);
      delay += 300;
      setTimeout(() => elCat.classList.remove("translate-y-20"), delay);
      delay += 300;

      setTimeout(() => elTags.classList.remove("translate-y-20"), delay);
      delay += 300;

      elImages.querySelectorAll("img").forEach((img) => {
        setTimeout(() => img.classList.remove("scale-0"), delay);
        delay += 300;
      });
    }, delayClone);
    delayClone += 100;

    article.addEventListener("mouseover", () => {
      elDesc.classList.remove("translate-y-full");
    });
    article.addEventListener("mouseout", () => {
      elDesc.classList.add("translate-y-full");
    });
  });
}
renderArticles();

/*
// CAT - generate select lists
function generateSelect(el, arr) {
  
    arr.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.text = category.name;
      el.appendChild(option);
    });
}

selectLists.forEach(select => { 
  const type = select.dataset.select;
  const arr = (type === "cat") ? CAT : TAGS;
  generateSelect(select,arr)
})
*/

function generateList(el) {
  const type = el.dataset.list;
  const listType = el.dataset.id;

  const arr = type === "cat" ? CAT : TAGS;
  const label = el.children[0];
  const list = el.children[1];

  arr.forEach((item) => {
    const label = document.createElement("label");
    label.textContent = item.name;
    if (listType === "select-cat") label.className = `cat-${item.id}`;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "category";
    radio.value = item.id;
    radio.className = "sr-only";

    label.appendChild(radio);
    list.appendChild(label);

    label.addEventListener("pointerdown", () => {
      radio.checked = true;
      if (listType === "select-cat") currentCat = item.id;
      else if (listType == "select-tags") currentTag = item.id;

      // remove active from all
      el.querySelectorAll("label").forEach((l) => l.classList.remove("active"));

      // mark as active
      label.classList.add("active");
      // reload list
      renderArticles();

      // close parent
      list.classList.add("scale-y-0");
      el.querySelector("span").classList.remove("rotate-180");
    });
  });

  label.addEventListener("click", () => {
    closeSelectLists();

    list.classList.toggle("scale-y-0");
    el.querySelector("span").classList.toggle("rotate-180");
  });
}

function closeSelectLists() {
  // close drop down select lists
  psuedoLists.forEach((list) => {
    list.children[1].classList.add("scale-y-0");
    list.querySelector("span").classList.remove("rotate-180");
  });
}

psuedoLists.forEach((el) => {
  generateList(el);
});

function loadCreateFrom() {
  // hide select lists
  closeSelectLists();

  // hide posts in loop
  let delay = 0;
  listArticles.querySelectorAll("article").forEach((a) => {
    setTimeout(() => a.classList.add("translate-x-[600px]"), delay);
    delay += 100;
  });
  // reveal new post form
  setTimeout(() => formCreate.classList.remove("-translate-x-[1000px]"), delay);
}

function hideCreateForm() {
  let delay = 0;

  // hide new post form
  formCreate.classList.add("-translate-x-[1000px]");
  delay += 300;

  // reveal previoulsy hidden posts
  listArticles.querySelectorAll("article").forEach((a) => {
    setTimeout(() => a.classList.remove("translate-x-[600px]"), delay);
    delay += 100;
  });
}

function filterTopicsLast7Days(arr) {
  const currentDate = new Date();
  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return arr.filter((topic) => {
    const topicDate = new Date(topic.date);
    return topicDate >= sevenDaysAgo && topicDate <= currentDate;
  });
}

// utility - order by date (newest first)
function orderByDateDescending(array) {
  return array.sort(function (a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Compare in descending order
  });
}
//const radioOptionsContainer = document.getElementById("categoryRadioOptions");
//generatePsuedoSelect(radioOptionsContainer);
