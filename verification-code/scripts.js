
let userTel;
let randomCode;
const HIDE_TEL = '*******';
const DELAY_ALERT = 2000; // delay to show alert with code

const panelTel = document.querySelector("#panel-tel");
const panelCode = document.querySelector("#panel-code");

const formTel = document.querySelector("#form-tel");
const fieldTel = formTel.querySelector("input");
const displayNum = document.querySelector("[data-tel]");
const btnResendCode = document.querySelector("#btn-resend-code");
const codeInserts = document.querySelectorAll("[code-insert]");
const btnConfirm = document.querySelector("#btn-confirm");
const msgConfirm = document.querySelector("#msg");
const msgBtnClose = document.querySelector("#btn-close-msg");
const btnBack = panelCode.querySelector("#btn-back");

formTel.addEventListener("submit", (e) => { 
    e.preventDefault();

    // get user tel and only show last 2 numbers
    userTel = formTel.querySelector("input").value;
    userTel = HIDE_TEL.concat(userTel.slice(7));
    displayNum.innerText = userTel;

    // code
    generateCode()

    // show confirmation panel
    panelTel.style.transform = "scale(0)";
    setTimeout(function () {
        panelCode.style.transform = "scale(1)";
    }, 500);
   
    // activate timer for SMS
    sendCode();
})
// btn - back to tel
btnBack.addEventListener("click", () => { 
   
    closeMsg(); 
    closeAlert();
    panelCode.style.transform = "scale(0)";
    setTimeout(function () {
        panelTel.style.transform = "scale(1)";
    }, 500);
})

// btn - resend code
btnResendCode.addEventListener("click", () => { 
    sendCode();
})

function generateCode() { 
    // generate random 4 digit code
    randomCode = Math.floor(Math.random() * 9000 + 1000);
}

const alertPanel = document.querySelector("#code-alert");
const alertCodes = alertPanel.querySelectorAll("[data-code]");
const alertBtnClose = alertPanel.querySelector("#btn-close-alert");
const alertBtnCopy = alertPanel.querySelector("#btn-copy-code");

function sendCode() { 
    // reset code inputs
    codeInserts.forEach(c => c.value = '');
    if (randomCode) { 
        // insert each number into it's cell
        String(randomCode).split("").forEach((c,i) => { 
            alertCodes[i].innerText = c;
        })
    }
    setTimeout(() => { 
        alertPanel.style.transform = "translateY(-240px)";
        setTimeout(() => closeAlert(), 15000);
    }, DELAY_ALERT);
   
}
// btn - close SMS 
alertBtnClose.addEventListener("click", () => {
    closeAlert()
});

function closeAlert() { 
    // bounce out
    alertPanel.style.transform = "translateY(10%)";
    setTimeout(function () {
        alertPanel.style.transform = "translateY(-1000px)";
    }, 150); 
}

// clone SMS code to inputs
alertBtnCopy.addEventListener("click", () => { 
    if (randomCode) {
        // insert each number into it's cell
        String(randomCode).split("").forEach((c, i) => {
            codeInserts[i].value = c;
        })
        closeAlert()
    }
})

// confirm code
btnConfirm.addEventListener("click", () => { 
    // check random code against input
    if (randomCode) { 
        // create string of user input values
        let inputCode='';
        codeInserts.forEach(c => inputCode += c.value);

        // comparte random code with user input and insert message
        msgConfirm.querySelector("span").innerText = (inputCode == randomCode) ? "Thanks, your code has been verified" : "Incorrect code, please try again";

        // show message
        msgConfirm.style.transform = "translateY(0)";

        // hide message autaomtatly
        /*
        setTimeout(() => {
            
            closeMsg()
        }, 3000);
        */
    }
})

// btn - close message box
msgBtnClose.addEventListener("click", () => {
    closeMsg()
})
function closeMsg() { 
    msgConfirm.style.transform = "translateY(-10%)"; // move slightly up before down
    setTimeout(function () {
        msgConfirm.style.transform = "translateY(120%)";
    }, 150);
}

// auto tab on user code inserts
codeInserts.forEach((el, i) => {
    el.addEventListener("keyup", (e) => {
        const key = e.keyCode || e.charCode;
       // console.log(key)
        if (key == 8 || key == 46 || key == 13) {
            // 8 = delete
            // 346 = backsapce
            // 13 = enter
            return false;
    }

        const nextInput = codeInserts[i + 1];
        // move to next
        if (nextInput) {
            nextInput.focus();
           // nextInput.value = '';
        }
    })
});


// utility - numbers only
function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
}