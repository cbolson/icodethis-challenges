// close it if you can!
document.querySelectorAll("[btn-close]").forEach((btn) => {
  const parent = btn.closest("section");
  btn.addEventListener("click", () => {
    // hide close button
    btn.classList.add("translate-y-8");
    // scale down
    setTimeout(() => parent.classList.add("scale-50"), 300);
    // fade out
    setTimeout(() => parent.classList.add("opacity-0"), 800);
    // fade in
    setTimeout(() => parent.classList.remove("opacity-0"), 2000);
    // scale back
    setTimeout(() => parent.classList.remove("scale-50"), 2000);
    // scale back
    setTimeout(() => btn.classList.remove("translate-y-8"), 2500);
  });

  setTimeout(() => btn.classList.remove("translate-y-8"), 1500);
});

// drop down background
setTimeout(
  () => document.body.classList.add("before:[&>section>div]:-translate-y-56"),
  500
);
// rotate background
setTimeout(
  () => document.body.classList.add("before:[&>section>div]:-rotate-12"),
  1000
);
// drop down icon (mainly beacuse it takes time to load)
setTimeout(
  () => document.body.classList.remove("[&_span]:-translate-y-[200px]"),
  1500
);
