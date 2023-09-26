const progressBar = document.querySelector("#progress-bar");
const progressPercent = document.querySelector("#progress-percent");

const scrollEl = document.querySelector("#scroll-contents");

// function - scroll progress bar
scrollEl.addEventListener("scroll", () => {
  const scroll = scrollEl.scrollTop;
  const height = scrollEl.scrollHeight - scrollEl.clientHeight;
  const percent = Math.floor((scroll / height) * 100);
  progressBar.style.width = `${percent}%`;
  progressBar.setAttribute("percent", `${percent}%`);

  progressPercent.innerText = `${percent}%`;
  progressPercent.style.left = `${percent}%`;
});
