const form = document.getElementById('form-pass-reset');
const wrapperForm = document.querySelector("#wrapper-form");
const wrapperMsg = document.querySelector("#wrapper-msg");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // get email value
    const email = document.querySelector("#email").value;
    const msg = `Your new password link has been sent to <strong>${email}</strong`;
    wrapperMsg.innerHTML = msg;

    wrapperForm.classList.add("hide");
    wrapperMsg.classList.add("show");

    // bring it back for the demo
    setTimeout(function () {
        wrapperForm.classList.remove("hide");
        wrapperMsg.classList.remove("show");
    }, 7000); 
});

// utility - prevent link clicks
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
    });
});
