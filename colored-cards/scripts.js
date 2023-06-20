const toggles = document.querySelectorAll("[ toggle-card]");
toggles.forEach((toggle, idx) => {
  toggle.addEventListener("click", () => {
    toggle.closest("div").classList.add("flip-it");
    setTimeout(() => {
      toggle.closest("div").classList.remove("flip-it");
    }, "2000");
  });
});
