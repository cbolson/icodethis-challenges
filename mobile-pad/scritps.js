tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
    },
  },
};

// CHAT GTP generated random contacts
const CONTACTS = [
  {
    name: "John Smith",
    phone: "+1 (123) 456-7890", // USA
  },
  {
    name: "Jane Doe",
    phone: "+44 20 7123 4567", // UK
  },
  {
    name: "Michael Johnson",
    phone: "+49 30 12345678", // Germany
  },
  {
    name: "Emily Davis",
    phone: "+33 1 23 45 67 89", // France
  },
  {
    name: "David Wilson",
    phone: "+81 3-1234-5678", // Japan
  },
  {
    name: "Sarah Anderson",
    phone: "+55 11 1234-5678", // Brazil
  },
  {
    name: "James Martin",
    phone: "+86 10 1234 5678", // China
  },
  {
    name: "Olivia Thompson",
    phone: "+91 11 1234 5678", // India
  },
  {
    name: "William Rodriguez",
    phone: "+61 2 1234 5678", // Australia
  },
  {
    name: "Sophia Garcia",
    phone: "+34 91 234 56 78", // Spain
  },
  {
    name: "Daniel Martinez",
    phone: "+52 55 1234 5678", // Mexico
  },
  {
    name: "Ava Hernandez",
    phone: "+1 (234) 567-8901", // USA
  },
  {
    name: "Matthew Lopez",
    phone: "+44 20 7123 4567", // UK
  },
  {
    name: "Ella Gonzalez",
    phone: "+49 30 12345678", // Germany
  },
  {
    name: "Christopher Wilson",
    phone: "+33 1 23 45 67 89", // France
  },
  {
    name: "Grace Taylor",
    phone: "+81 3-1234-5678", // Japan
  },
  {
    name: "Andrew Moore",
    phone: "+55 11 1234-5678", // Brazil
  },
  {
    name: "Sofia Clark",
    phone: "+86 10 1234 5678", // China
  },
  {
    name: "Joseph Lewis",
    phone: "+91 11 1234 5678", // India
  },
  {
    name: "Chloe Hall",
    phone: "+61 2 1234 5678", // Australia
  },
  {
    name: "Benjamin Walker",
    phone: "+34 91 234 56 78", // Spain
  },
  {
    name: "Lily Young",
    phone: "+52 55 1234 5678", // Mexico
  },
  {
    name: "Muhammad Khan",
    phone: "+92 42 1234567", // Pakistan
  },
  {
    name: "Isabella Lee",
    phone: "+65 6123 4567", // Singapore
  },
  {
    name: "Ethan Brown",
    phone: "+64 9-123 4567", // New Zealand
  },
  {
    name: "Sophie Harris",
    phone: "+44 131 123 4567", // Scotland
  },
  {
    name: "Lucas Martin",
    phone: "+55 21 1234-5678", // Brazil
  },
  {
    name: "Mia Nguyen",
    phone: "+84 28 1234 5678", // Vietnam
  },
  {
    name: "Oliver Patel",
    phone: "+91 22 1234 5678", // India
  },
  {
    name: "Amelia Brown",
    phone: "+64 4-123 4567", // New Zealand
  },
  {
    name: "Liam Kim",
    phone: "+82 2-1234-5678", // South Korea
  },
  {
    name: "Zoe Smith",
    phone: "+61 8 1234 5678", // Australia
  },
  {
    name: "Noah Martinez",
    phone: "+52 81 1234 5678", // Mexico
  },
  {
    name: "Charlotte Wilson",
    phone: "+1 (345) 678-9012", // USA
  },
  {
    name: "Lucas Martin",
    phone: "+55 21 1234-5678", // Brazil
  },
  {
    name: "Liam Kim",
    phone: "+82 2-1234-5678", // South Korea
  },
  {
    name: "Zoe Smith",
    phone: "+61 8 1234 5678", // Australia
  },
  {
    name: "Noah Martinez",
    phone: "+52 81 1234 5678", // Mexico
  },
  {
    name: "Charlotte Wilson",
    phone: "+1 (345) 678-9012", // USA
  },
  {
    name: "Mia Nguyen",
    phone: "+84 28 1234 5678", // Vietnam
  },
  {
    name: "Oliver Patel",
    phone: "+91 22 1234 5678", // India
  },
  {
    name: "Amelia Brown",
    phone: "+64 4-123 4567", // New Zealand
  },
  {
    name: "Liam Kim",
    phone: "+82 2-1234-5678", // South Korea
  },
  {
    name: "Zoe Smith",
    phone: "+61 8 1234 5678", // Australia
  },
  {
    name: "Noah Martinez",
    phone: "+52 81 1234 5678", // Mexico
  },
  {
    name: "Charlotte Wilson",
    phone: "+1 (345) 678-9012", // USA
  },
  {
    name: "Lucas Martin",
    phone: "+55 21 1234-5678", // Brazil
  },
  {
    name: "Liam Kim",
    phone: "+82 2-1234-5678", // South Korea
  },
  {
    name: "Zoe Smith",
    phone: "+61 8 1234 5678", // Australia
  },
  {
    name: "Noah Martinez",
    phone: "+52 81 1234 5678", // Mexico
  },
  {
    name: "Charlotte Wilson",
    phone: "+1 (345) 678-9012", // USA
  },
  {
    name: "Mia Nguyen",
    phone: "+84 28 1234 5678", // Vietnam
  },
  {
    name: "Oliver Patel",
    phone: "+91 22 1234 5678", // India
  },
  {
    name: "Amelia Brown",
    phone: "+64 4-123 4567", // New Zealand
  },
  {
    name: "Liam Kim",
    phone: "+82 2-1234-5678", // South Korea
  },
  {
    name: "Zoe Smith",
    phone: "+61 8 1234 5678", // Australia
  },
  {
    name: "Noah Martinez",
    phone: "+52 81 1234 5678", // Mexico
  },
  {
    name: "Charlotte Wilson",
    phone: "+1 (345) 678-9012", // USA
  },
  {
    name: "Lucas Martin",
    phone: "+55 21 1234-5678", // Brazil
  },
  {
    name: "Liam Kim",
    phone: "+82 2-1234-5678", // South Korea
  },
  {
    name: "Zoe Smith",
    phone: "+61 8 1234 5678", // Australia
  },
  {
    name: "Noah Martinez",
    phone: "+52 81 1234 5678", // Mexico
  },
  {
    name: "Charlotte Wilson",
    phone: "+1 (345) 678-9012", // USA
  },
  {
    name: "Lucas Martin",
    phone: "+55 21 1234-5678", // Brazil
  },
  {
    name: "Liam Kim",
    phone: "+82 2-1234-5678", // South Korea
  },
  {
    name: "Zoe Smith",
    phone: "+61 8 1234 5678", // Australia
  },
  {
    name: "Noah Martinez",
    phone: "+52 81 1234 5678", // Mexico
  },
  {
    name: "Fake Florin",
    phone: "+00 111 222 333",
  },
];

// min numbers for phone (this should be coutnry based)
const MIN_NUMBERS = 9;

const buttons = document.querySelectorAll("button");
const contactsPanel = document.querySelector("#panel-contacts");
const contactsList = contactsPanel.querySelector("#contacts-list");
const recentsPanel = document.querySelector("#panel-recents");
const recentsList = recentsPanel.querySelector("#recents-list");
const tplContact = document.querySelector("#tpl-contact");
const searchInput = document.querySelector("#search");
const displayNumber = document.querySelector("#current-number");
const displayName = document.querySelector("#current-name");
const displayNameFrom = document.querySelector("#current-name");
const btnCall = document.querySelector("#btn-call");
const btnRecents = document.querySelector("#btn-recents");
const panelCalling = document.querySelector("#panel-calling");
const callingNameTo = document.querySelector("[data-call-name]");
//const callingNameFrom = document.querySelector("[data-call-from]");
const panelPad = document.querySelector("#panel-pad");
const btnCallAccept = document.querySelector("#call-accept");

// tones
const ringTones = [
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/phone-calling.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/busy-signal.mp3",
];

const dialTones = [
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-0.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-1.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-2.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-3.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-4.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-5.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-6.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-7.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-8.mp3",
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-9.mp3",
];
const dialToneCommon =
  "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/sounds/dial-tone-9.mp3";

let currentNumber = "";
let currentName = "";
let calling = false; // preven incoing calls if user is making a call
let incoming = false; // not used at present
let recents = [];
let newNumber = "";
let ringTone;

// catch all button actions
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;
    //console.log(value);
    switch (value) {
      case "contacts":
        contactsPanel.classList.toggle("translate-y-full");
        break;
      case "contacts-close":
        closeContacts();
        break;
      case "recents":
        openRecents();
        break;
      case "recents-close":
        closeRecents();
        break;

      case "call":
        makeCall();
        break;

      case "call-reject":
        endCall();
        break;
      case "delete":
        // alert("still to do....");
        deleteNum();
        break;
      case "call-answer":
        rejectCall();
        break;
      default:
        //console.log("show that funky number");
        dialling(value);
        break;
    }
  });
});

// using dail pad to call a number
function dialling(value) {
  if (currentNumber) {
    // clear current number if name and nuymber set
    currentNumber = "";
    newNumber = "";
    if (currentName) currentName = "";

    displayNumber.innerText = "";
    displayName.innerText = "";
  }

  const len = newNumber.length;
  if (len > 11) return;

  setCallButtonState(newNumber.length);

  // play tone
  let dialTone;
  if (!isNaN(+value)) {
    dialTone = new Audio(dialTones[value]);
  } else {
    dialTone = new Audio(dialToneCommon);
  }
  dialTone.play();
  newNumber += value;
  displayNumber.innerText = formatTel(newNumber);
}

// delete last digit
function deleteNum() {
  newNumber = newNumber.slice(0, -1);
  displayNumber.innerText = formatTel(newNumber);
  setCallButtonState(newNumber.length);
}

function setCallButtonState(len) {
  if (len >= MIN_NUMBERS) btnCall.disabled = false;
  else btnCall.disabled = true;
}

// format number into groups of 3
function formatTel(num) {
  const arr = num.match(/.{1,3}/g) ?? [];
  return arr.join(" ");
}
// close contacts panel
function closeContacts() {
  contactsPanel.classList.add("translate-y-full");
}
// close recents panel
function closeRecents() {
  recentsPanel.classList.add("translate-y-full");
}

// open and load recent calls panel
function openRecents() {
  recentsList.innerHTML = "";
  // add recent numbers
  if (recents.length > 0) {
    recents.forEach(({ ts, name, phone }) => {
      const item = tplContact.content.cloneNode(true);
      item.querySelector("[data-name]").innerText = name ? name : phone;
      item.querySelector(
        "[data-number]"
      ).innerText = `${ts.getHours()}:${ts.getMinutes()}`;
      item.querySelector("button").addEventListener("click", () => {
        calUser(phone, name);
      });
      recentsList.append(item);
    });
  }
  recentsPanel.classList.remove("translate-y-full");
}

// load contacts (complete or filteered with search)
function loadContacts(q = "") {
  contactsList.innerHTML = "";

  // create array as we will add search capabilities later
  let data = [];
  if (q)
    data = CONTACTS.filter((x) =>
      x.name.toLowerCase().includes(q.toLowerCase())
    );
  else data = [...CONTACTS];

  data.forEach(({ name, phone }) => {
    const item = tplContact.content.cloneNode(true);
    item.querySelector("[data-name]").innerText = name;
    item.querySelector("[data-number]").innerText = phone;
    item.querySelector("button").addEventListener("click", () => {
      calUser(phone, name);
    });
    contactsList.append(item);
  });
}
loadContacts();

// call the user
function calUser(phone, name) {
  currentNumber = phone;
  currentName = name;
  displayName.innerHTML = currentName;
  displayNumber.innerHTML = currentNumber;
  btnCall.disabled = false;
  closeContacts();
  closeRecents();
  makeCall();
}

function makeCall() {
  calling = true;

  if (!incoming) {
    btnCallAccept.classList.add("hidden");
  }
  if (!currentNumber) {
    // calling number not from contacts
    currentNumber = formatTel(newNumber);
  }
  callingNameTo.innerText = currentName ? currentName : currentNumber;
  panelCalling.classList.toggle("scale-0");

  let tone;
  if (incoming) tone = ringTones[0];
  else tone = ringTones[Math.floor(Math.random() * ringTones.length)];

  ringTone = new Audio(tone);

  setTimeout(() => ringTone.play(), 1000);
  panelPad.classList.add("blur-sm", "pointer-events-none");
  const obj = {
    ts: new Date(),
    name: currentName,
    phone: currentNumber,
  };
  recents.push(obj);
  //console.log(recents);
  btnRecents.classList.remove("opacity-0");

  incoming = false;
}

// end call
function endCall() {
  panelPad.classList.remove("blur-sm", "pointer-events-none");
  panelCalling.classList.toggle("scale-0");
  ringTone.pause();
  calling = false;
}
// reject call (basically the same as end call for this demo)
function rejectCall() {
  endCall();
  alert(`only kidding,  ${currentName} isn't really calling you`);
}

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
const sendDebounce = debounce((term) => {
  loadContacts(term);
}, 500);

// search users (with debounce)
searchInput.addEventListener("keyup", (e) => {
  sendDebounce(e.target.value);
});

// clear input on focus
searchInput.addEventListener("focus", () => {
  searchInput.value = "";
});

// this is FLorin calling
//calling = true;
setTimeout(() => {
  const caller = CONTACTS[Math.floor(Math.random() * CONTACTS.length)];
  //console.log(caller);
  if (!calling) {
    incoming = true;
    currentName = caller.name;
    currentNumber = caller.phone;
    // show accepct button
    btnCallAccept.classList.remove("hidden");
    btnCall.disabled = false;
    closeContacts();
    closeRecents();
    makeCall();
  }
}, Math.floor(Math.random() * 10000));
