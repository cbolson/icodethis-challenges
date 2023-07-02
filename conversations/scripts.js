// user data and chats - this would be from the db and probablly better in 2 separate arrays (users and chats
const users = [
    {
        userID: 1,
        name: "Raymond",
        avatar: "https://i.pravatar.cc/150?img=18",
        role: "Ui/Ux Designer",
        state: "active",
        chat: [
            
            {
                ts: "2023-06-29 09:14:22",
                userID: 0,
                msg: "Ray, have you finished the design?"
            },
            {
                ts: "2023-06-29 12:23:47",
                userID: 1,
                msg: "hello 👋",
            },
            {
                ts: "2023-06-29 12:232:12",
                userID: 0,
                msg: "I need it by the end of the day"
            },
            {
                ts: "2023-06-29 12:39:56",
                userID: 1,
                msg: "Not quite yet, I still have a few things to tweak."
            },
            {
                ts: "2023-06-29 12:44:32",
                userID: 1,
                msg: "Can you confirm that we are going with the diagonal lines?"
            }
        ]
    },
    {
        userID: 2,
        name: "Estelle",
        avatar: "https://i.pravatar.cc/150?img=44",
        role: "Art Director",
        state: "active",
        chat: [
            {
                ts: "2023-06-14 09:17:17",
                userID: 2,
                msg: "What time is the meeting?",
            },
            {
                ts: "2023-06-14 09:24:22",
                userID: 0,
                msg: "I think that it is at 09:30"
            },
            {
                ts: "2023-06-14 09:24:56",
                userID: 2,
                msg: "😟 I'm gonna be a bit late but I\'ll try my best to be there"
            },
            {
                ts: "2023-06-14 09:36:14",
                userID: 2,
                msg: "I'll be there in about 10 minutes 😅"
            }
        ]
    },
    {
        userID: 3,
        name: "Juan",
        avatar: "https://i.pravatar.cc/150?img=11",
        role: "Developer",
        state: "away",
        chat: [
            {
                ts: "2023-06-04 12:23:47",
                userID: 3,
                msg: "Hola",
            },
            {
                ts: "2023-06-04 12:24:22",
                userID: 0,
                msg: "Hola, ¿que tal el fin de semana?"
            },
            {
                ts: "2023-06-04 12:24:56",
                userID: 3,
                msg: "Bien, gracias. Mucho calor! Menos mal que tenenmos la playa a lado! 🏖️ ☀️"
            }
        ]
    },
    {
        userID: 4,
        name: "Wendy",
        avatar: "https://i.pravatar.cc/150?img=23",
        role: "Friend",
        state: "away",
        chat: [
            {
                ts: "2023-07-02 17:13:22",
                userID: 4,
                msg: "Hi there",
            }
        ]
    }
];


const input = document.querySelector("textarea");
const chatContainer = document.querySelector("#messages");
const templateChat = document.querySelector('#tpl-message');
const chatHeader = document.querySelector("#chat-header");

const templateProfile= document.querySelector('#tpl-profile');
const usersContainer = document.querySelector('#users');
let currentUserID = 2;


users.forEach(user => { 
    const state = (user.state === "active") ? "bg-green-400" : "bg-gray-400";
    // add side panel
    const profile = templateProfile.content.cloneNode(true);
    profile.querySelector("[user-name]").classList.add(`before:${state}`);
    profile.querySelector("img").src = user.avatar;
    profile.querySelector("[user-name]").innerText = user.name;
    profile.querySelector("[user-role]").innerText = user.role;

    const numMessages = user.chat.length;

    profile.querySelector("[msg-counter]").innerText = numMessages;
   // msg.textContent = newMessage;
    // add eventl listener to button
    const userBlock = profile.querySelector("[user-wrapper]");

   
    profile.querySelector("[btn-chat]").addEventListener("click", () => {
        // set current user ID
        currentUserID = user.userID;

        setChatHeader(user.name, user.state);

        // load user chat
        loadChat(user.userID);        
    })
   
    // add to dom
    usersContainer.append(profile);
})



function loadChat(currentUserId) { 

    // get user and loop chat messages
    users.forEach(user => { 
        if (user.userID === currentUserId) { 
            const chat = user.chat;
            if (chat.length > 0) { 
                setChatHeader(user.name, user.state);
                loadMessages(chat, user.name, user.avatar);
            }
        }
    })
}

function setChatHeader(name, state) { 
    if (state === "active") {
        chatHeader.classList.add(`before:bg-green-400`);
    } else { 
        chatHeader.classList.remove(`before:bg-green-400`);
    }
    chatHeader.innerText = name;

   
}



function loadMessages(messages, currentUserName, currentUserImg) {
    // clear previous 
    chatContainer.innerHTML = '';

    let lastUserId = "";

   

    messages.forEach(entry => {

    
        const clone = templateChat.content.cloneNode(true);
        const userData = clone.querySelector("[data-user]");
        if (entry.userID !== lastUserId) {
            if (entry.userID === 0) { 
                clone.querySelector("[data-name]").innerText = "You";
            }else{
                 clone.querySelector("img").src = currentUserImg;
                clone.querySelector("[data-name]").innerText = currentUserName;
            }
            clone.querySelector("[data-time]").innerText = entry.ts;
        } else { 
            // no name or photo as it is the same user as the last message
            userData.remove();
        }
        

        let msg = clone.querySelector("[data-msg]");
        if (entry.userID !== 0) {
            // other user
            msg.classList.add(`bg-gray-100`);
        } else { 
            msg.classList.add("bg-blue-400");
            msg.classList.add("text-white");
            msg.classList.add("ml-auto");
            msg.classList.add("text-right");
            userData.classList.add("justify-end");
        }
        
       msg.textContent = entry.msg;

        // add to the DOM
        chatContainer.append(clone);

        // save last user id to then show the user name if the other person has sent a message
        lastUserId = entry.userID;

        scrollToBottom();
    })
        
}

// add new message 
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener('submit', (event) => {
        event.preventDefault();

        // get message value
        const newMessage = input.value;
        if (!newMessage) return;

        
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime;


        // append message to user chat history (should have its own)
        const newMessageData = {
            "ts": dateTime,
            "userID": 0,
            "msg": newMessage
        };

        users.forEach(user => {
            if (user.userID === currentUserID) {
                const chat = user.chat;
                user.chat.push(newMessageData);
            }
        })
        
        // clone template & add new message
        const clone = templateChat.content.cloneNode(true);
        clone.querySelector("[data-user]").remove();
        let msg = clone.querySelector("[data-msg]");
        msg.textContent = newMessage;

        msg.classList.add("bg-blue-400");
        msg.classList.add("text-white");
        msg.classList.add("ml-auto");
        msg.classList.add("text-right");

        chatContainer.append(clone);
        scrollToBottom();

        input.value = '';
    });
});



function scrollToBottom() {
    const lastMessage = chatContainer.lastElementChild;
    chatContainer.scrollIntoView({ behavior: "smooth", block: "end" });
    //chatContainer.scrollIntoView({ behavior: "smooth", block: "end" }); // Bottom
}

// insital load
loadChat(currentUserID);
scrollToBottom();