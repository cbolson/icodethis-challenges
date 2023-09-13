const img = document.querySelector("#img-main");
const previewImg = document.querySelector("#img-zoom");
//const previewImgParent = document.querySelector("#preview-wrapper");

const zoomSlider = document.querySelector("#zoom-slider");
const buttonsZoom = document.querySelectorAll("[btn-zoom]");
const btnReset = document.querySelector("#btn-reset");
let lens = "";
let zoom = 1;

(function imageZoom() {
  // lens
  lens = document.createElement("div");
  lens.classList.add("lens");
  img.parentElement.insertBefore(lens, img);

  const cx = previewImg.offsetWidth / lens.offsetWidth;
  const cy = previewImg.offsetHeight / lens.offsetHeight;

  previewImg.style.backgroundImage = "url('" + img.src + "')";
  previewImg.style.backgroundSize =
    img.width * cx + "px " + img.height * cy + "px";
  //previewImg.style.backgroundPosition = "center center";

  //lens.addEventListener("mousemove", moveLens);
  //img.addEventListener("mousemove", moveLens);
  //lens.addEventListener("touchmove", moveLens);
  //img.addEventListener("touchmove", moveLens);
  lens.addEventListener("pointerdown", moveLens);
  img.addEventListener("pointerdown", moveLens);
  lens.addEventListener("pointerup", moveLens);
  img.addEventListener("pointerup", moveLens);

  function moveLens(e) {
    e.preventDefault();

    const pos = getCursorPos(e);
    let x = pos.x - lens.offsetWidth / 2;
    let y = pos.y - lens.offsetHeight / 2;

    if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
    if (x < 0) x = 0;
    if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
    if (y < 0) y = 0;

    lens.style.left = x + "px";
    lens.style.top = y + "px";

    previewImg.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    let a;
    let x = 0;
    let y = 0;

    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }

  // preview drag (not 100% there yet)
  previewImg.addEventListener("mousedown", moveStart);
  previewImg.addEventListener("mousemove", moving);
  previewImg.addEventListener("mouseup", moveEnd);
  previewImg.addEventListener("mouseout", moveEnd);

  let dragging = false;
  function moveStart(e) {
    e.preventDefault();
    dragging = true;
    //previewImg.classList.remove("cursor-grab");
    previewImg.classList.add("cursor-grabbing");
  }

  function moveEnd(e) {
    e.preventDefault();
    dragging = false;
    previewImg.classList.remove("cursor-grabbing");
  }

  function moving(e) {
    e.preventDefault();

    if (dragging) {
      const rect = previewImg.getBoundingClientRect();

      // get x position from mouse
      let newX = e.clientX - rect.left;
      // if (newX < rect.x) newX = 0
      // if (newX > (rect.x + rect.width)) newX = rect.width

      // get y position from mouse
      let newY = e.clientY - rect.top;
      // if (newY < rect.y) newY = 0;
      // if (newY > (rect.y + rect.height)) newY = rect.bottom;
      //console.log(newX,newY);

      previewImg.style.backgroundPositionX = -newX + "px";
      previewImg.style.backgroundPositionY = -newY + "px";
      // would also like to move the selector area....
    }
  }

  reset();
})();

// zoom slider
zoomSlider.addEventListener("input", (event) => {
  const zoomlevel = event.target.valueAsNumber;
  zoom = zoomlevel;
  setZoom();
});

// zoom buttons
buttonsZoom.forEach((btn) => {
  const action = btn.getAttribute("btn-zoom");
  btn.addEventListener("click", () => {
    if (action === "in") zoom = zoom + 0.1;
    else zoom = zoom - 0.1;
    if (zoom < 1) zoom = 1;
    if (zoom > 4) zoom = 4;
    setZoom();
    zoomSlider.value = zoom;

    // get current zoom level
  });
});

// zoom preview
function setZoom() {
  // console.log(zoom);
  previewImg.style.transform = `scale(${zoom})`;
  let t = "0.5";
  if (zoom < 2) {
    // prevent it from getting too small - needed?
    t = zoom / 4;
  }
  lens.style.transform = `scale(-${1 - t})`;
}

// button - reset
btnReset.addEventListener("click", () => {
  reset();
});
// reset everything to start
function reset() {
  zoom = 1;
  setZoom();
  zoomSlider.value = zoom;
  previewImg.style.backgroundPosition = "center center";
  // lens.style.inset = "0";
  // lens.style.margin = "auto";
  //lens.style.left = "50%";
  //lens.style.top = "50%";
  //lens.style.transform = "translate(-50%,-50%) scale(1)";
  lens.style.transform = "scale(1)";
}
