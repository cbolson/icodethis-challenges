// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});

const friends = [
  {
    id: 1,
    name: "Emma",
    avatar: "https://i.pravatar.cc/120?img=26",
  },
  {
    id: 2,
    name: "David",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: 3,
    name: "Gordon",
    avatar: "https://i.pravatar.cc/120?img=13",
  },
  {
    id: 4,
    name: "Brad",
    avatar: "https://i.pravatar.cc/120?img=14",
  },
  {
    id: 5,
    name: "Katrina",
    avatar: "https://i.pravatar.cc/120?img=16",
  },
  {
    id: 6,
    name: "Angel ",
    avatar: "https://i.pravatar.cc/120?img=56",
  },
  {
    id: 7,
    name: "Julie",
    avatar: "https://i.pravatar.cc/120?img=44",
  },
];

const friendsAdded = [1, 2, 3];

const tplFriend = document.querySelector("#tpl-friend");
const friemdsList = document.querySelector("#friends-list");
function renderFriends() {
  friemdsList.innerHTML = "";
  friendsAdded.forEach((idFriend) => {
    const friend = friends.find((x) => x.id == idFriend);
    const item = tplFriend.content.cloneNode(true);

    item.querySelector("span").innerText = friend.name;
    item.querySelector("img").src = friend.avatar;

    item.querySelector("button").addEventListener("click", () => {
      friendsAdded.splice(friendsAdded.indexOf(friend.id), 1);
      renderFriends();
      btnAddFriends.style.display = "block";
    });
    friemdsList.append(item);
  });
}
renderFriends();

const fiendsAdd = document.querySelector("#friends-add");
const btnAddFriends = document.querySelector("#btn-add-friend");

let friendsAddVisible = false;
btnAddFriends.addEventListener("click", (e) => {
  if (friendsAddVisible) {
    closeFriendsAdd();
  } else {
    friendsAddVisible = true;
    btnAddFriends.innerText = "close";
    console.log("show");
    renderFriendsToAdd();
  }
});

function renderFriendsToAdd() {
  fiendsAdd.innerHTML = "";
  // load friends to add
  let counter = 0;
  friends.forEach((friend) => {
    if (!friendsAdded.find((x) => x == friend.id)) {
      const item = tplFriend.content.cloneNode(true);

      item.querySelector("span").innerText = friend.name;
      item.querySelector("img").src = friend.avatar;

      item.querySelector("button").addEventListener("click", () => {
        friendsAdded.push(friend.id);
        renderFriends();
        renderFriendsToAdd();
      });
      fiendsAdd.append(item);
      counter++;
    }
  });
  if (counter > 0) {
    fiendsAdd.style.height = "fit-content";
    fiendsAdd.style.transform = "translate(0)";
    btnAddFriends.style.display = "block";
  } else {
    btnAddFriends.style.display = "none";

    closeFriendsAdd();
  }
}

function closeFriendsAdd() {
  fiendsAdd.innerHTML = "";
  fiendsAdd.style.height = 0;
  fiendsAdd.style.transform = "translate(0,-40px)";
  btnAddFriends.innerText = "add";
  friendsAddVisible = false;
}
