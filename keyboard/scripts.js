const keyboard = document.querySelector("#keyboard");
const keyboardNormal = keyboard.querySelector("#keyboard-normal");
const keyboardNumeric = keyboard.querySelector("#keyboard-numeric");
const keyboardNumericAlt = keyboard.querySelector("#keyboard-numeric-alt");
const keyboardES = keyboard.querySelector("#keyboard-es");

const btnShiftEN = document.querySelector("#btn-shift-en");
const btnShiftES = document.querySelector("#btn-shift-es");
const btnNumeric = document.querySelector("#btn-numeric");
const btnNumericBase = document.querySelector("#btn-numeric-base");
const btnNumericAlt = document.querySelector("#btn-numeric-alt");
const btnLang = document.querySelector("#btn-lang");

btnShiftEN.addEventListener("click", () => {
    keyboardNormal.classList.toggle("[&_button]:uppercase");
    keyboardES.classList.toggle("[&_button]:uppercase");
    btnShiftEN.classList.toggle("active");
    btnShiftES.classList.toggle("active");
});

btnShiftES.addEventListener("click", () => {
    keyboardNormal.classList.toggle("[&_button]:uppercase");
    keyboardES.classList.toggle("[&_button]:uppercase");
    btnShiftES.classList.toggle("active");
    btnShiftEN.classList.toggle("active");
});


let currentLang = 'en';
btnLang.addEventListener("click", () => {
    keyboardNumeric.classList.add("hidden");
    keyboardNumericAlt.classList.add("hidden");

    if (currentLang=="en") {
        keyboardNormal.classList.add("hidden");
        keyboardES.classList.remove("hidden");
        currentLang = "es";
    } else {
        keyboardES.classList.add("hidden");
        keyboardNormal.classList.remove("hidden");
        currentLang = "en";
    }
})

let showNumeric = false;
btnNumeric.addEventListener("click", (event) => {
    keyboardES.classList.add("hidden");
    keyboardNumericAlt.classList.add("hidden");

    if (!showNumeric) {
        keyboardNormal.classList.add("hidden");
        keyboardNumeric.classList.remove("hidden");
        btnNumeric.classList.add("active");
        showNumeric = true;
    } else {
        keyboardNumeric.classList.add("hidden");
        keyboardNormal.classList.remove("hidden");

        btnNumeric.classList.remove("active");
        showNumeric = false;

    }

})

btnNumericAlt.addEventListener("click", () => {
    btnNumericBase.classList.toggle("active");

    keyboardNormal.classList.add("hidden");
    keyboardES.classList.add("hidden");
    keyboardNumeric.classList.add("hidden");

    keyboardNumericAlt.classList.remove("hidden");
    
})

btnNumericBase.addEventListener("click", () => {

    keyboardNormal.classList.add("hidden");
    keyboardES.classList.add("hidden");
    keyboardNumericAlt.classList.add("hidden");

    keyboardNumeric.classList.remove("hidden");

})

const keys = document.querySelectorAll("button");
keys.forEach(key => { 
    const val = key.innerText;
    key.addEventListener("click", () => { 
        console.log(val);
    })
    
})