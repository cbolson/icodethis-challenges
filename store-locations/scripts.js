const wrapper = document.querySelector("main");
const shadow = document.querySelector("#shadow");
const rect = wrapper.getBoundingClientRect();

document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX / 1.5 - rect.left;
  let mouseY = e.clientY / 1.5 - rect.top;
  // console.log(rect.left);

  // set constraints
  if (mouseX < -50) mouseX = -50;
  if (mouseX > 150) mouseX = 150;
  if (mouseY < -50) mouseY = -50;
  if (mouseY > 220) mouseY = 220;

  if (mouseX > 100) {
    shadow.style.borderRadius = "2rem 0 2rem 0";
  } else {
    shadow.style.borderRadius = "2em 0 2rem 0";
  }

  shadow.style.setProperty("--left", `${mouseX}px`);
  shadow.style.setProperty("--top", `${mouseY}px`);
});
