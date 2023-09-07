const USERS = [
    "Peter",
    "Florin",
    "John Smith",
    "Jane Doe",
    "Michael Johnson",
    "Emily Williams",
    "William Davis",
    "Sarah Jones",
    "James Brown",
    "Mary Miller",
    "Robert Anderson",
    "Jennifer Wilson",
    "David Taylor",
    "Linda Moore",
    "Richard Jackson",
    "Patricia Harris",
    "Charles Martin",
    "Susan Thompson",
    "Joseph White",
    "Nancy Lee",
    "Thomas Clark",
    "Karen Hall",
    "Daniel Lewis",
    "Lisa Turner",
    "Matthew Walker",
    "Sandra Garcia",
    "Donald Rodriguez",
    "Karen Wright",
    "Paul Martinez",
    "Laura Hernandez",
    "Mark Davis",
    "Cynthia King",
    "Christopher Scott",
    "Donna Rodriguez",
    "Daniel Martinez",
    "Linda Young",
    "Kenneth Evans",
    "Barbara Harris",
    "Brian Lopez",
    "Margaret Adams",
    "Kevin Harris",
    "Elizabeth Hall",
    "John Thomas",
    "Carol Wilson",
    "Edward King",
    "Ruth Turner",
    "George Garcia",
    "Deborah Brown",
    "Ronald Anderson",
    "Betty Martin",
    "Jason Green",
    "Dorothy Perez"
]

// utility - get random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// selectors
const searchInput = document.querySelector("#search");
const listUsers = document.querySelector("#list-users");
const btnResetSearch = document.querySelector("#btn-reset");
const tplUser = document.querySelector("#tpl-user");
const btnAll = document.querySelector("#btn-all");

document.querySelector("#tot-users").innerText = USERS.length;

// debounce to prevent calling the apis if the user is still typing
function debounce(func, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const sendDebounce = debounce((q) => {
    searchUsers(q);
}, 500);

searchInput.addEventListener("keyup", (e) => {
    const q = e.target.value;;
    sendDebounce(q);
})

btnResetSearch.addEventListener("click", () => {
    searchInput.value = '';
    listUsers.innerHTML = '';
})

let delayf = 0;
function searchUsers(q = '') {
    let delay = 0;
    // clear list
    listUsers.innerHTML = '';
    // define array to loop
    let data = [];
    if (q) data = USERS.filter(x => x.toLowerCase().includes(q.toLowerCase()));
    else data = USERS;
    if (data.length) {
        data.forEach(user => {
            // get random number for avatar
            let image = '';
            switch (user) { 
                case "Florin":
                    image = 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/b31bde00-b6db-48e5-9798-1c0f053360d4.jpg';
                    break;
                case "Peter":
                    image = 'https://img.freepik.com/premium-photo/little-chicken-animal-nft-art_796651-2409.jpg?w=826';
                    break;
                default:
                    const random = getRndInteger(1, 70);
                    image = `https://i.pravatar.cc/100?img=${random}`
                    break;
            }
           
            
            const item = tplUser.content.cloneNode(true);
            const btn = item.querySelector("button");
            const img = item.querySelector("img");
            const p = item.querySelector("p");
            img.src = image
            p.innerText = user;
            listUsers.append(item);
            // show image after short delay
            setTimeout(() => {
                img.classList.add("scale-100");
            }, delay);

            btn.addEventListener("click", () => {
                img.classList.toggle("border-blue-500")
                img.classList.toggle("border-green-500")


                p.classList.toggle("bg-blue-500/90")
                p.classList.toggle("bg-green-500/90")
            })

            delay = delay + 50;
        })
    } else { 
        listUsers.innerHTML = '<p class="absolute w-full top-2 text-center text-red-400">No users with that name</p>';
    }
}

btnAll.addEventListener("click", () => {
    searchUsers();
});

searchUsers("Peter");