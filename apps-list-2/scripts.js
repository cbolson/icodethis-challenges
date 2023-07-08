/*
const btnSearch = document.querySelector("#toggle-search");
const searchBox = document.querySelector("#search");
const searchInput = searchBox.querySelector("input");


const SEARCH_VISIBLE = 'w-48';
const SEARCH_HIDDEN = 'w-[40px]';


let searchVisible = false
btnSearch.addEventListener("click", () => { 
    if (searchVisible) {
        searchBox.classList.add(SEARCH_HIDDEN);
        searchBox.classList.remove(SEARCH_VISIBLE);
        searchVisible = false
        searchInput.value = '';
    } else {
        searchBox.classList.remove(SEARCH_HIDDEN);
        searchBox.classList.add(SEARCH_VISIBLE);
        searchVisible = true
        searchInput.focus();
    searchInput.value = '';

    }
})
console.log(searchInput);
searchInput.addEventListener("blur", () => {
    searchBox.classList.add(SEARCH_HIDDEN);
    searchBox.classList.remove(SEARCH_VISIBLE);
    searchVisible = false;
    searchInput.value = '';
})
*/

const categories = [
  {
    id: 0,
    title: "All categories",
  },
  {
    id: 1,
    title: "Games",
  },
  {
    id: 2,
    title: "Productivity",
  },
  {
    id: 3,
    title: "Entertainment",
  },
  {
    id: 4,
    title: "Health",
  },
  {
    id: 5,
    title: "Services",
  },
];
// app data

const apps = [
  {
    title: "30 day fit workout",
    company: "Borthpark Android",
    img: "https://play-lh.googleusercontent.com/dCM0CyWMQ9wWUVYw-Xx0s4FlYtzS-PiAmo-mbEkpxTDYF-x8NitA8g89ebGiHMp0cPI=w240-h480-rw",
    rating: 3,
    cat: 4,
  },
  {
    title: "S Health",
    company: "S Health Samsung Electronics",
    img: "https://lh3.googleusercontent.com/KuiyqVCbEoaqKfHCPUwivMXwJZQcB5bK3gUHV6u1luLe7oXEB_ko9itrWFG2W8iEAAWr",
    rating: 4,
    cat: 4,
  },
  {
    title: "CrabWar",
    company: "Appxplore Sdn Bhd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpjZHCijScv6zau5nhLs9T4YzSTwp2nXwCXc7Hmf_491I92Muf_Bzb-83O3gAmKycbsQ&usqp=CAU",
    rating: 5,
    cat: 1,
  },
  {
    title: "Sandstorm: Pirate Wars",
    company: "Ubisoft Entertainment",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1tanvFoxvrEzWS_BMqlsFirV_WJYusOA56wegGwYaZQXMotuIQmge3OfsHWd6BaLbmk&usqp=CAU",
    rating: 1,
    cat: 1,
  },
  {
    title: "Netflix",
    company: "Netflix Inc",
    img: "https://cdn.jim-nielsen.com/ios/512/netflix-2018-11-01.png",
    rating: 5,
    cat: 3,
  },
  {
    title: "Jellyfish Hola 3D theme",
    company: "Holaverse",
    img: "https://image.winudf.com/v2/image/Y29tLmhvbGEuc2NlbmUzZC5zaHVpbXVfaWNvbl9wbTFjZXh1dQ/icon.png?w=&fakeurl=1",
    rating: 3,
    cat: 1,
  },
  {
    title: "Qatar Airways",
    company: "Qatar Airways",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c0/91/1c/c0911c5e-81fd-854f-793b-46dbd007f835/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
    rating: 4,
    cat: 5,
  },
  {
    title: "Microsoft Word",
    company: "Microsoft Coporation",
    img: "https://cdn.jim-nielsen.com/ios/512/microsoft-word-for-ipad-2014-05-02.png",
    rating: 5,
    cat: 2,
  },
  {
    title: "Fruit Ninja Free",
    company: "Halfbrick Studios",
    img: "https://cdn.jim-nielsen.com/ios/512/fruit-ninja-2020-08-31.png",
    rating: 2,
    cat: 1,
  },
];

//let selectedCat = null;

const appsList = document.querySelector("#apps");
const tplApp = document.querySelector("#tpl-app");

function renderApps(selectedCat = null) {
  appsList.innerHTML = "";
  let apps2show = "";
  if (selectedCat > 0 && selectedCat != "all") {
    // filter apps by selected cat id
    apps2show = apps.filter((app) => app.cat === selectedCat);
  } else {
    apps2show = apps;
  }

  apps2show.forEach(({ title, company, img, rating, cat }) => {
    const app = tplApp.content.cloneNode(true);
    app.querySelector("[data-title]").innerText = title;
    app.querySelector("[data-company]").innerText = company;
    app.querySelector("img").src = img;
    app.querySelector("img").alt = `Logo ${title}`;
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `<span class="star material-symbols-outlined ${
        i <= rating ? "active" : ""
      }">star</span>`;
    }
    app.querySelector("[data-rating]").innerHTML = stars;

    // add to dom
    appsList.append(app);
  });
}
renderApps();

// categories

let catIsVisible = false;
const btnCat = document.querySelector("#btn-cat");

const catList = document.querySelector("#cat-list");
const tplCat = document.querySelector("#tpl-cat");

categories.forEach(({ id, title }) => {
  const item = tplCat.content.cloneNode(true);
  const btn = item.querySelector("button");
  btn.value = id;
  btn.innerHTML = title;

  // add button event
  btn.addEventListener("click", () => {
    renderApps(id);
    btnCat.closest("li").classList.remove("active");
    catList.style.transform = "translate(0, -500px)";
    catIsVisible = false;
    btnCat.querySelector("span").style.transform = "rotate(0)";
  });

  catList.append(item);
});

btnCat.addEventListener("click", () => {
  // show cat list
  if (!catIsVisible) {
    btnCat.closest("li").classList.add("active");
    catList.style.transform = "translate(0)";
    catIsVisible = true;
    btnCat.querySelector("span").style.transform = "rotate(180deg)";
  } else {
    btnCat.closest("li").classList.remove("active");
    catList.style.transform = "translate(0, -500px)";
    catIsVisible = false;
    btnCat.querySelector("span").style.transform = "rotate(0)";
  }
});

// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
