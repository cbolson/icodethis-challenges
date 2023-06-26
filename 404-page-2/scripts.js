const bubbles = document.querySelector("[bubbles]");
const template = document.querySelector("#template-bubble");
const BUBBLES_NUM = 10;

// render bubbles
for (let i = 0; i < BUBBLES_NUM; i++) {
  const bubble = template.content.cloneNode(true).querySelector("div");

  // random size
  const radius = generateRandom(10, 50);
  bubble.style.width = `${radius}0px`;
  bubble.style.height = `${radius}0px`;

  // random X position
  const x = generateRandom(-200, window.innerWidth);
  bubble.style.left = `${x}px`;

  // random animation data
  const floatDuration = generateRandom(5000, 10000);
  const floatDelay = generateRandom(300, 2000);

  //bubble.style.animationName = `float-up`;
  bubble.style.animationDelay = `${floatDelay}ms`;
  bubble.style.animationDuration = `${floatDuration}ms`;

  bubbles.append(bubble);
}

// utility - random number bewtween values
function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}
// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
