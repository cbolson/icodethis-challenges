const circles = document.querySelectorAll("[data-circle]");

circles.forEach((dial) => {
  // add hours & numbers
  const steps = dial.getAttribute("data-circle");
  let counter = 0;

  // numbers
  for (let i = 0; i < 170; i += 10) {
    if (i > 70) {
      const newElement = document.createElement("div");
      const numEl = document.createElement("div");
      newElement.className = "number";
      numEl.innerText = counter;

      numEl.style.transform = "rotate(" + i * (-360 / 120) + "deg)";
      newElement.append(numEl);
      newElement.style.transform = "rotate(" + i * (360 / 120) + "deg)";

      dial.append(newElement);
      counter = counter + steps * 1;
    }
  }

  // add dots
  for (i = 0; i < 120; i++) {
    const el = document.createElement("div");
    el.classList.add("bar");
    el.style.setProperty("--i", i);
    dial.append(el);
  }
  // add "minutes"
  for (let i = 0; i < 120; i += 2) {
    if (i < 40 || i > 80) {
      const el = document.createElement("div");
      el.classList.add("bar", "mins");
      el.style.setProperty("--i", i);
      dial.append(el);
    }
  }

  // add "hours "& numbers"

  for (let i = 0; i < 120; i += 10) {
    if (i < 50 || i > 70) {
      const el = document.createElement("div");
      el.classList.add("bar", "hours");
      el.style.setProperty("--i", i);
      dial.append(el);
    }
  }

  /*
    // outer decoration lines
    const el1 = document.createElement("div");
    el1.classList.add("outer");
    el1.style.setProperty('--i', 170);
    dial.append(el1);

    const el2 = document.createElement("div");
    el2.classList.add("outer");
    el2.style.setProperty('--i', 220);
    dial.append(el2);

    const el3 = document.createElement("div");
    el3.classList.add("outer");
    el3.style.setProperty('--i', 240);
    dial.append(el3);
    
*/
});

const axis = document.querySelectorAll(".axis");
axis.forEach((a) => {
  const limit = a.dataset.limit;
  a.style.setProperty("--deg", `${limit}deg`);
});
