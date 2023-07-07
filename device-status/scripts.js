// data
const devices = [
  {
    name: "Desktop",
    total: 22.5,
    color: "#4B33DB",
  },
  {
    name: "Mobile",
    total: 64.5,
    color: "#1C9A9C",
  },
  {
    name: "Tablet",
    total: 10,
    color: "#1F66DF",
  },
  {
    name: "Smartwatch",
    total: 1.7,
    color: "#A34BAD",
  },
];

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const key = document.querySelector("#key");
const tplKey = document.querySelector("#tpl-key");
const totalDevices = devices.reduce((acc = 0, { total }) => acc + total, 0);
let currentAngle = 0; /* offset start position */

(function draw() {
  devices.forEach(({ name, total, color }) => {
    // add to pie cjart
    let portionAngle = (total / totalDevices) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);

    ctx.lineTo(100, 100);
    ctx.fillStyle = color;
    ctx.fill();

    currentAngle += portionAngle;

    // add key
    const keyItem = tplKey.content.cloneNode(true);
    keyItem.querySelector("p").classList.add(`before:bg-[${color}]`);
    keyItem.querySelector("[key-label]").innerText = name;
    keyItem.querySelector("[key-percent]").innerText = `${total}%`;
    key.append(keyItem);
  });

  // cover center
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#131621";
  ctx.fill();

  // add text
  ctx.fillStyle = "white";
  ctx.font = "12px Arial";
  ctx.fillText(
    "Sessions by device",
    canvas.width / 2 - 50,
    canvas.height / 2 + 8
  );
})();
