const apps = [

    
    {
        name: "iCodethis",
        included: true,
        img: `https://icodethis.com/logos/small-dark.svg`
    },
    {
        name: "Slack",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/slack.png`
    },
    {
        name: "Trelio",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/trelio.png`
        
    },
    {
        name: "Jira",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/jira.png`

    },
    {
        name: "Dropbox",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/dropbox.png`
    },
    {
        name: "Guest",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/guest.png`

    },
    {
        name: "Kayak",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/kayak.png`

    },
    {
        name: "Testlodge",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/testlodge.png`

    },
    {
        name: "TikTok",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/tiktok.png`

    },
    {
        name: "Maps",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/google-maps.png`

    },
    {
        name: "Nextdoor",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/nextdoor.png`

    },
    {
        name: "Duolingo",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/duolingo.png`

    },
    {
        name: "La Tour",
        included:true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/latour.png`

    },
    {
        name: "Deliveroo",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/deliveroo.png`

    },
    {
        name: "Vine",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/vine.png`

    },
    {
        name: "Shazam",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/shazam.png`

    },
    {
        name: "Airbnb",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/airbnb.png`

    },
    {
        name: "Twitch",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/twitch.png`

    },
    {
        name: "Pando",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/pando-health.png`

    }
]

const appsList = document.querySelector("#apps-list");
const tplAApp = document.querySelector("#template-app");
function renderUserApps() {
    appsList.innerHTML = '';
    apps.forEach(app => {
        if (app.included) {
            const item = tplAApp.content.cloneNode(true);
            item.querySelector("img").src = app.img;
            item.querySelector("p").innerText = app.name;

            appsList.append(item);
        }
    })
};

const btnAddApp = document.querySelector("#btn-add");
const apsAdd = document.querySelector("#more-apps");
const apsAddList = document.querySelector("#more-apps-list");

btnAddApp.addEventListener("click", () => {
    apsAddList.innerHTML = '';
    // load apps into list - ONLY NON selected ones
    apps.forEach(app => {
        if (!app.included) {
            const item = tplAApp.content.cloneNode(true);
            const btn = item.querySelector("button");
            item.querySelector("img").src = app.img;
            item.querySelector("p").innerText = app.name;
            // add to user apps list

            btn.addEventListener("click", () => { 
                addAppToUserList(app.name); /* this shold really be an ID*/
                btn.style.opacity = "0.2";
            })

            apsAddList.append(item);
        }
    })
    // show apps
    apsAdd.style.transform = "translate(0)";
});

document.querySelector("#btn-close").addEventListener("click", () => {
    apsAdd.style.transform = "translate(0,100%)";
});

function addAppToUserList(name) { 
    const app = apps.find(x => x.name == name);
    app.included = true;
   // console.log(apps)
    renderUserApps();

}
// load user apps
renderUserApps();