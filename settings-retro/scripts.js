tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
      colors: {
        primary: "#3A5F76",
        secondary: "#B4A396",
        checked: "#FB993A",
      },
    },
  },
};
const buttonsNav = document.querySelectorAll("[btn-nav]");
const panels = document.querySelectorAll(".panel");
const buttonsPanelClose = document.querySelectorAll("[btn-close]");

const dialogButtons = document.querySelectorAll("[btn-toggle]");
const dialogs = document.querySelectorAll(".dialog");
const dialogClose = document.querySelectorAll("[btn-save]");
const body = document.body;
const controlBrightness = document.querySelector("#brightness");
const controlBrighnessAuto = document.querySelector("#auto-bright");
const controlAirplane = document.querySelector("#airplane");
const controlWifi = document.querySelector("#wifi");
const controlBluetooth = document.querySelector("#bluetooth");
const btnReset = document.querySelector("#btn-reset");
const controlTextSize = document.querySelector("#text-szie");
const controlTextStyle = document.querySelector("#text-style");

const fontStyles = ["font-sans", "font-serif", "font-mono"];
const defaultFontStyle = fontStyles[0];
const defaultBrightness = 0.75;
const defaultFontSize = 16;

// nav
buttonsNav.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panelName = btn.value;
    const selectedPanel = document.querySelector(`#panel-${panelName}`);
    // hide all panels
    panels.forEach((panel) => {
      panel.classList.add("translate-x-full");
    });
    selectedPanel.classList.remove("translate-x-full");
  });
});
// close panels
buttonsPanelClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.closest("div");
    panel.classList.add("translate-x-full");
  });
});

// text - size
controlTextSize.addEventListener("click", (e) => {
  const fontSize = e.target.valueAsNumber;
  body.style.fontSize = `${fontSize}px`;
  if (fontSize === 24) {
    alert("Peter's favorite font size (only kidding)");
  }
});
// text - style (family)
controlTextStyle.addEventListener("change", (e) => changeFont(e.target.value));

// font - change famlily (also used in reset)
function changeFont(font) {
  fontStyles.forEach((style) => {
    body.classList.remove(`${style}`);
  });
  body.classList.add(`${font}`);
}

// font bold
document.querySelector("#text-bold").addEventListener("change", () => {
  body.classList.toggle("font-bold");
});
// brightness - range
controlBrightness.addEventListener("change", (e) => {
  let val = e.target.valueAsNumber === 100 ? 1 : `0.${e.target.valueAsNumber}`;
  //body.style.filter = `brightness(${val})`
  setBrightness(val);
});

// brightness - auto
controlBrighnessAuto.addEventListener("change", (e) => {
  if (e.target.checked) {
    controlBrightness.value = defaultBrightness * 100;
    controlBrightness.disabled = true;
    setBrightness(defaultBrightness);
  } else {
    controlBrightness.disabled = false;
  }
});
// Set brightness
function setBrightness(val) {
  body.style.filter = `brightness(${val})`;
}

// airplane mode
controlAirplane.addEventListener("change", (e) => {
  if (e.target.checked) {
    controlWifi.checked = false;
    controlWifi.disabled = true;
    controlBluetooth.checked = false;
    controlBluetooth.disabled = true;
  } else {
    controlWifi.checked = true;
    controlWifi.disabled = false;
    controlBluetooth.checked = true;
    controlBluetooth.disabled = false;
  }
});

// reset de defaults
btnReset.addEventListener("click", () => {
  // whilst the default reset behavior is working fine and resets the for, the brightness "change" event is not being fired so we have to reset the brightness manually
  setBrightness(defaultBrightness);
  body.classList.remove("font-bold");
  body.style.fontSize = `${defaultFontSize}px`;
  changeFont(defaultFontStyle);
});

dialogButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = btn.nextElementSibling;
    dialogs.forEach((d) => {
      if (d === dialog) dialog.classList.toggle("scale-0");
      else d.classList.add("scale-0");
    });
  });
});

dialogClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    //btn.closest("div").classList.add("scale-0");
    dialogs.forEach((d) => {
      d.classList.add("scale-0");
    });
  });
});
