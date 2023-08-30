const users = [
  {
    id: 1,
    username: "Chris",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/888e7b16-fa69-4576-9a45-d8f4fe6f6687.png",
  },
  {
    id: 2,
    username: "FlorinPop17",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/b31bde00-b6db-48e5-9798-1c0f053360d4.jpg",
  },
  {
    id: 3,
    username: "Peter",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/9779712a-36d0-427f-8c6b-848bd059ed5f.png",
  },
  {
    id: 4,
    username: "MIRZA_UIUX",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/5c07fc1c-4e73-4951-9157-a07e88fa6807.jpeg",
  },
  {
    id: 5,
    username: "Kamil",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/3c467dfe-3c18-4d4a-9387-70cbe4429f11.png",
  },
  {
    id: 6,
    username: "iMuhammad",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/a20a421f-fc09-4773-96e1-91ae719edb2b.jpg",
  },
  {
    id: 7,
    username: "Mubiru_Angel",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/63639e2e-552f-41d7-ba3a-d1d5e0813d7e.png",
  },
  {
    id: 8,
    username: "Rohit",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/e7026400-3b15-45d5-aef2-0994d40eae99.jpg",
  },
  {
    id: 9,
    username: "AdityaZende",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/8b9bf09e-d755-4775-86eb-51aae8a6a0c0.jpeg",
  },
  {
    id: 10,
    username: "neluttu",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/ef331e37-43e0-48bc-aa39-425ee8295f95.jpg",
  },
  {
    id: 11,
    username: "usere794fc9c",
    avatar: "https://avatars.githubusercontent.com/u/99274997?v=4",
  },
  {
    id: 12,
    username: "idocod3",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/06c26539-cd28-4686-a696-5f68174d1706.jpg",
  },
  {
    id: 14,
    username: "bk7312",
    avatar: "https://avatars.githubusercontent.com/u/14029543?v=4",
  },
  {
    id: 15,
    username: "Tony_Km",
    avatar:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/d1b7d9bc-c3ac-4190-b829-d31d78282640.jpg",
  },
];
users.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase());

const messages = [
  {
    id: 1,
    parent_id: 0,
    user_id: 3,
    ts: "Aug 29, 2023",
    msg: "Now i'm into the hover effects challenge! Good job!",
  },
  {
    id: 2,
    parent_id: 1,
    user_id: 2,
    ts: "Aug 29, 2023",
    msg: "I try to keep coming up with new hover effects on each challenge just to give them that edge:",
  },
  {
    id: 3,
    parent_id: 0,
    user_id: 2,
    ts: "Aug 29, 2023",
    msg: "Those are a bunch of TW classes! Love the hover effect! 😁",
  },
  {
    id: 4,
    parent_id: 3,
    user_id: 1,
    ts: "Aug 29, 2023",
    msg: `Thanks!
Probably no more TW classes than normal, but, as I like to put them on the parent and(for dev purposes) have them on separate lines, it looks like there is a lot of them.I find it easier to work with TW this way.`,
  },
  {
    id: 5,
    parent_id: 0,
    user_id: "4",
    ts: "Aug 29, 2023",
    msg: `Looks good`,
  },
  {
    id: 6,
    parent_id: 3,
    user_id: 1,
    ts: "Aug 29, 2023",
    msg: `I try to keep coming up with new hover effects on each challenge just to give them that edge :)`,
  },
  {
    id: 7,
    parent_id: 0,
    user_id: 3,
    ts: "Aug 28, 2023",
    msg: `Somehow, the gradient overflow remarks the scene where Stallone and Wesley Snipes are facing each other! Buen trabajo, Chris! `,
  },
  {
    id: 8,
    parent_id: 7,
    user_id: 1,
    ts: "Aug 28, 2023",
    msg: `@Peter, yes, I managed to find an image that fitted well both with the play button and the general color scheme.
Thanks :)`,
  },
  {
    id: 9,
    parent_id: 0,
    user_id: 4,
    ts: "Aug 28, 2023",
    msg: `Wow! nice commercial button effect. ❤️`,
  },
  {
    id: 10,
    parent_id: 0,
    user_id: 2,
    ts: "Aug 28, 2023",
    msg: `The best thing about this project is the back button! 🤣`,
  },
  {
    id: 11,
    parent_id: 0,
    user_id: 5,
    ts: "Aug 28, 2023",
    msg: `Mind-blowing 🤯`,
  },
  {
    id: 12,
    parent_id: 0,
    user_id: 6,
    ts: "Aug 27, 2023",
    msg: `This is cool. Also for those for didn't know, you can click the game and it takes you to their website`,
  },
  {
    id: 13,
    parent_id: 0,
    user_id: 3,
    ts: "Aug 27, 2023",
    msg: `Two orthree extra miles here. Great work!`,
  },
  {
    id: 14,
    parent_id: 0,
    user_id: 4,
    ts: "Aug 27, 2023",
    msg: `nice hover effect. ❤️ love it`,
  },
  {
    id: 15,
    parent_id: 0,
    user_id: 8,
    ts: "Aug 27, 2023",
    msg: `That hover effect is cool.😸`,
  },
  {
    id: 16,
    parent_id: 0,
    user_id: 5,
    ts: "Aug 27, 2023",
    msg: `Cool hover effect! 😎`,
  },
  {
    id: 17,
    parent_id: 16,
    user_id: 1,
    ts: "Aug 27, 2023",
    msg: `Thanks. I wanted to go with the Twitch hover effect on this one.`,
  },
  {
    id: 18,
    parent_id: 0,
    user_id: 5,
    ts: "Aug 26, 2023",
    msg: `I love these animations!`,
  },
  {
    id: 19,
    parent_id: 0,
    user_id: 6,
    ts: "Aug 26, 2023",
    msg: `cool button animation`,
  },
  {
    id: 20,
    parent_id: 0,
    user_id: 4,
    ts: "Aug 26, 2023",
    msg: `Nice toggle animation. love it.  😍  😍 `,
  },
  {
    id: 21,
    parent_id: 0,
    user_id: 3,
    ts: "Aug 26, 2023",
    msg: `El otro día quería hacer algo parecido a lo que has hecho en el body (como unas cortinas cerrándose) al poner el modo oscuro. Tomo nota. 👍`,
  },
  {
    id: 22,
    parent_id: 21,
    user_id: 1,
    ts: "Aug 26, 2023",
    msg: `@Peter tengo unos cuantos ideas de cómo hacer efectos distintos con el mismo método. `,
  },
  {
    id: 23,
    parent_id: 0,
    user_id: 2,
    ts: "Aug 26, 2023",
    msg: `I love the theme toggle animation! Top notch! `,
  },
  {
    id: 24,
    parent_id: 0,
    user_id: 3,
    ts: "Aug 25, 2023",
    msg: `Chris siempre sorprende. Te quedó espectacular. Me gusta!`,
  },
  {
    id: 25,
    parent_id: 24,
    user_id: 1,
    ts: "Aug 25, 2023",
    msg: `Gracias Peter. 
¡Me alegro de que te hayas gustado!`,
  },
  {
    id: 26,
    parent_id: 0,
    user_id: 4,
    ts: "Aug 25, 2023",
    msg: `Woow! Nice color effects. Love it. @Chris`,
  },
  {
    id: 27,
    parent_id: 0,
    user_id: 7,
    ts: "Aug 25, 2023",
    msg: `I'm amazed by your work. It looks so nice with that state of Art creativity`,
  },
  {
    id: 28,
    parent_id: 0,
    user_id: 5,
    ts: "Aug 25, 2023",
    msg: `Well done Chris!`,
  },
  {
    id: 29,
    parent_id: 0,
    user_id: 9,
    ts: "Aug 25, 2023",
    msg: `From where you learn js?`,
  },
  {
    id: 30,
    parent_id: 29,
    user_id: 1,
    ts: "Aug 25, 2023",
    msg: `@AdityaZende I am self-taught - you can probably tell from my code, too many mistakes and poor practice :P`,
  },
  {
    id: 31,
    parent_id: 0,
    user_id: 11,
    ts: "Aug 25, 2023",
    msg: `How did you make the gradient? I'm trying to do this challenge but my gradient is not working..`,
  },
  {
    id: 32,
    parent_id: 31,
    user_id: 3,
    ts: "Aug 25, 2023",
    msg: `@usere794fc9c
Linear gradient 45 degrees color one 0% color two 33%, color two 100% Change color two percentage to fit perfectly`,
  },
  {
    id: 33,
    parent_id: 31,
    user_id: 3,
    ts: "Aug 25, 2023",
    msg: `**Linear gradient 45 degrees color one 0% color one 20%, color two 100% Change color one 20% percentage  as your width to fit perfectly `,
  },
  {
    id: 44,
    parent_id: 0,
    user_id: 10,
    ts: "Aug 25, 2023",
    msg: `Awesome mate!`,
  },
  {
    id: 45,
    parent_id: 0,
    user_id: 4,
    ts: "Aug 30, 2023",

    msg: ` 😍 Chris! I am in your code!! I'm being honored! 
Please accept my ❤️. 
BTW, we are waiting for the finishing effect. Great JOB.`,
  },
  {
    id: 46,
    parent_id: 0,
    user_id: 12,
    ts: "Aug 30, 2023",
    msg: `well done Chris, you did greate job 👏 `,
  },
  {
    id: 47,
    parent_id: 46,
    user_id: 1,
    ts: "Aug 30, 2023",
    msg: `Thsnks @idocod3
It is not  finished yet. Amongst other things it is not yet responsive`,
  },
  {
    id: 48,
    parent_id: 0,
    user_id: 9,
    ts: "Aug 30, 2023",
    msg: `Greate Jon Chris`,
  },
  {
    id: 49,
    parent_id: 45,
    user_id: 1,
    ts: "Aug 30, 2023",
    msg: `Thanks @MIRZA_UIUX
I have included all the messages that I have received since we have the comments section.
It has made me realize that I need to reply and comment more!`,
  },
  {
    id: 50,
    parent_id: 48,
    user_id: 1,
    ts: "Aug 30, 2023",
    msg: `@AdityaZende, thanks for your comments ❤️.`,
  },
  {
    id: 51,
    parent_id: 0,
    user_id: 14,
    ts: "Aug 30, 2023",
    msg: `Wow, this is epic! Can't wait to see the finished version!`,
  },
  {
    id: 52,
    parent_id: 51,
    user_id: 1,
    ts: "Aug 30, 2023",
    msg: ` I'm glad you like it @bk7312 😁
It is nearly finished but I have to get back to work now.I'll add the finishing touches later on.`,
  },
  {
    id: 53,
    parent_id: 0,
    user_id: 15,
    ts: "Aug 30, 2023",
    msg: `Excellent, good work @Chris`,
  },
  {
    id: 54,
    parent_id: 53,
    user_id: 1,
    ts: "Aug 30, 2023",
    msg: ` Thanks @Tony_Km
You have been added to the project 😁`,
  },
  {
    id: 55,
    parent_id: 0,
    user_id: 6,
    ts: "Aug 30, 2023",
    msg: `I would call it perfect but the search doesn't work😏
Awesome stuff though 😄`,
  },
  {
    id: 56,
    parent_id: 55,
    user_id: 1,
    ts: "Aug 30, 2023",
    msg: ` @iMuhammad what is not working in the search ?`,
  },
  {
    id: 57,
    parent_id: 55,
    user_id: 6,
    ts: "Aug 30, 2023",
    msg: `My bad...I guess I didn't test it well`,
  },
  {
    id: 58,
    parent_id: 0,
    user_id: 5,
    ts: "Aug 30, 2023",
    msg: `Great job Chris, I like this way of opening messages!`,
  },
  {
    id: 59,
    parent_id: 58,
    user_id: 1,
    ts: "Aug 30, 2023",
    msg: `@Kamil, thanks! Yes, it seemed like a decent enough way to get around the responsive issue.`,
  },
];
messages.sort((a, b) => a.ts > b.ts);
//console.log(messages);

/*
,
    {
        id: ,
        parent_id: 0,
        user_id: ,
        ts: 'Aug 30, 2023',
        msg: ``
    },
    */
// selectors
const listContacts = document.querySelector("#list-contacts");
const listMessages = document.querySelector("#list-messages");
const tplContact = document.querySelector("#tpl-contact");
const tplMessage = document.querySelector("#tpl-message");
const userSearch = document.querySelector("#user-search");
const msgWrapper = document.querySelector("#messages-wrapper");
const msgUserName = msgWrapper.querySelector("h1");
const btnCloseMessages = document.querySelector("#btn-close");
const form = document.querySelector("form");
const tplDate = document.querySelector("#tpl-date");
const msgInput = document.querySelector("#new-msg");
const meData = findUserById(1);

const today = new Date();

let currentParentID = "";
let currentUserID = "";

// add contacts
function showContacts(arr, num = 0) {
  listContacts.innerHTML = "";
  // remove me
  const data = [...arr].filter((c) => c.id !== 1);
  // only show X number of contacts on initial load
  if (num > 0) data.length = num;

  data.forEach((user) => {
    const item = tplContact.content.cloneNode(true);

    btn = item.querySelector("button");
    btn.dataset.user = user.id;
    item.querySelector("img").src = user.avatar;
    item.querySelector("img").setAttribute("alt", user.username);
    item.querySelector("[msg-user]").innerText = `@${user.username}`;

    // get lastest message
    const lastMsg = messages.findLast((m) => m.user_id === user.id);
    if (lastMsg) {
      item.querySelector("p").innerText = lastMsg.msg;
      item.querySelector("time").innerText = lastMsg.ts;
    }

    // add event
    btn.addEventListener("click", () => {
      loadMessages(user.id);
    });
    listContacts.append(item);
  });
}
// load contacts
showContacts(users, 0);

document.querySelector("#search-icon").addEventListener("click", () => {
  userSearch.focus();
});
// search
userSearch.addEventListener("keyup", (e) => {
  const str = e.target.value.toLowerCase();
  listContacts.innerHTML = "";
  //if (str) {
  closeMessages();
  const items = users.filter((user) =>
    user.username.toLowerCase().includes(str)
  );

  if (items.length) showContacts(items);
  //}
});

function loadMessages(userID, close = true) {
  currentUserID = userID;
  if (close) closeMessages();
  listMessages.innerHTML = "";

  let lastTime;

  setTimeout(() => {
    // console.log(meData);
    const userData = findUserById(userID);
    const userMsgs = messages.filter((x) => x.user_id === userID);
    // add user name
    msgUserName.innerHTML = `<a href="https://icodethis.com/${userData.username}" target="_blank">@${userData.username}</a>`;

    Array.from(userMsgs).forEach((msg) => {
      const item = tplMessage.content.cloneNode(true);
      item.querySelector("img").src = userData.avatar;
      item.querySelector("img").setAttribute("alt", userData.username);
      item.querySelector("[msg-text]").innerText = msg.msg;

      currentParentID = msg.id;
      //console.log(parentID);
      let time;

      if (msg.ts === "Aug 30, 2023") {
        time = "Today";
      } else {
        time = msg.ts;
      }
      if (time !== "lastTime") {
        const t = tplDate.content.cloneNode(true);
        // need to check if message date is today
        // this is a complete hack - I need to store the dates properly and compare them correctly but it will do for the challenge
        t.querySelector("div").innerText = time;

        listMessages.append(t);
      }
      lastTime = time;

      // add msg to dom
      listMessages.append(item);

      // get replies
      const replies = messages.filter(
        (x) => x.user_id === 1 && x.parent_id === msg.id
      );
      if (replies) {
        Array.from(replies).forEach((msg2) => {
          const item = tplMessage.content.cloneNode(true);
          item.querySelector("article").classList.add("flex-row-reverse");
          item.querySelector("img").src = meData.avatar;
          item.querySelector("img").classList.add("!border-purple-400");
          item.querySelector("[msg-text]").innerText = msg2.msg;
          item.querySelector("[msg-text]").classList.remove("before:-left-1");
          item.querySelector("[msg-text]").classList.add("before:-right-1");

          listMessages.append(item);
        });
      }
    });
    listMessages.scrollTop = listMessages.scrollHeight;
    // define last parent id for next message

    msgWrapper.classList.remove("translate-y-full");
  }, 300);
}

// evnet - click button to close messages
btnCloseMessages.addEventListener("click", () => {
  closeMessages();
});

// function - close message windo
function closeMessages() {
  msgWrapper.classList.add("translate-y-full");
}

// event - form submission - add new message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = msgInput.value;

  const obj = {
    parent_id: currentParentID,
    user_id: 1,
    msg: `${msg}`,
  };
  // save new message to message array (will be deletted on page reload)
  messages.push(obj);

  // clear inpyt
  msgInput.value = "";

  // add msg to list - I really need to create a function to add each message rather than repeating code
  const item = tplMessage.content.cloneNode(true);
  item.querySelector("article").classList.add("flex-row-reverse");
  item.querySelector("img").src = meData.avatar;
  item.querySelector("img").classList.add("!border-purple-400");
  item.querySelector("[msg-text]").innerText = msg;
  item.querySelector("[msg-text]").classList.remove("before:-left-1");
  item.querySelector("[msg-text]").classList.add("before:-right-1");

  listMessages.append(item);
  listMessages.scrollTop = listMessages.scrollHeight;
});

// egt user byt id
function findUserById(id) {
  return users.find((x) => x.id === id);
}
