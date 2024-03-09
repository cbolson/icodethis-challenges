// tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        hand: ["Gochi Hand", "sans-serif"],
      },
    },
  },
};

let lineDelay = 3000;

// Marcin Małecki preview hack
// NOTE - This JS is not relevant to the submission, it is just to ensure that the preview thumnail looks ok.
if (navigator.userAgent.includes("Headless")) {
  lineDelay = 10;
  // remove intro amimations
  const attributesToRemove = [
    "slide-in-left",
    "slide-in-right",
    "slide-down",
    "slide-up",
    "scale-up",
    "scale-from-top",
  ];
  attributesToRemove.forEach((attribute) => {
    document.querySelectorAll(`[${attribute}]`).forEach((el) => {
      if (el.hasAttribute(attribute)) {
        el.removeAttribute(attribute);
      }
    });
  });
}

const svgLine = document.querySelector("#svg-lines");
const mindMap = document.querySelector("#mindmap");

function drawLines(parent, children) {
  const parentRect = parent.getBoundingClientRect();

  children.forEach((child) => {
    const childRect = child.getBoundingClientRect();

    const newLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newLine.classList.add("line", "deleteMe");

    const x1 = parentRect.left + parentRect.width / 2;
    const y1 = parentRect.top + parentRect.height / 2;
    const x2 = childRect.left + childRect.width / 2;
    const y2 = childRect.top + childRect.height / 2;

    // Calculate control points for a quadratic Bézier curve
    const cx1 = x1 + (x2 - x1) / 2;
    const cy1 = y1;

    // Define the path data attribute
    const pathData = `M${x1},${y1} Q${cx1},${cy1} ${x2},${y2}`;
    const clr = child.dataset.clr;
    newLine.setAttribute("d", pathData);
    newLine.style.stroke = `${clr}`;
    newLine.style.strokeWidth = "2px";
    newLine.style.strokeDasharray = "5,5";
    newLine.style.fill = "none";

    // add path  to SVG
    svgLine.appendChild(newLine);
  });
}

function renderMindMap(element) {
  const prevLines = document.querySelectorAll(".deleteMe");
  prevLines.forEach((line) => {
    line.remove();
  });

  function traverseAndDrawLines(parentElement) {
    const children = Array.from(parentElement.children);
    children.forEach((child) => {
      if (child.classList.contains("item")) {
        drawLines(parentElement, [child]);
        traverseAndDrawLines(child);
      }
    });
  }
  traverseAndDrawLines(element);
}
// inital render
setTimeout(() => {
  renderMindMap(mindMap);

  // Redraw on page resize with debounce
  window.addEventListener(
    "resize",
    debounce(function (event) {
      renderMindMap(mindMap);
    }, 2)
  );
}, lineDelay);

// Debounce
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
