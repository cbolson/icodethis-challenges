tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        primary: "'Montserrat', sans-serif",
      },
    },
  },
};

const btnsCopy = document.querySelectorAll("[copy-code]");
const cb = navigator.clipboard;

btnsCopy.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("copy-code");
    btnsCopy.forEach((b) => {
      // remove copied message
      b.querySelector("[copy-msg]").innerText = "";
    });
    btn.querySelector("[copy-msg]").innerText = "copied";
  });
});

// set focus on password
//document.querySelector("input[type=password]").focus();
