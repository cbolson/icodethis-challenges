// nav toggles
const toggles = document.querySelectorAll(".toggle");
toggles.forEach((toggle) => {
  const element = document.querySelector(`#${toggle.value}`);
  toggle.addEventListener("change", () => {
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
  });
});

// copy to clipboarrd
const pickers = document.querySelectorAll(".picker");
const cb = navigator.clipboard;
pickers.forEach((picker) => {
  const value = picker.value;
  picker.addEventListener("click", () => {
    //console.log(value);
    cb.writeText(value).then(() => alert(`${value} copied to clipboard`));
  });
});
