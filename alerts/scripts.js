tailwind.config = {
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
};

// close it if you can!
document.querySelectorAll("[btn-close]").forEach((btn) => {
  const parent = btn.closest("div");
  btn.addEventListener("click", () => {
    parent.style.transform = "scale(4,0)";
    setTimeout(function () {
      parent.style.transform = "scale(1)";
    }, 1500);
  });
});
