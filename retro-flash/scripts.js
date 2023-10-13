// close it if you can!
document.querySelectorAll("[btn-close]").forEach((btn) => {
  const parent = btn.closest("div");
  btn.addEventListener("click", () => {
    // scale down and remove pointer events (to avoid flicker)
    parent.classList.add("scale-50", "pointer-events-none");
    // slide to right out of view
    setTimeout(() => parent.classList.add("translate-x-[2000px]"), 500);
    // move to left
    /*
        setTimeout(() => parent.classList.add("opacity-0"), 600);
        setTimeout(() => parent.classList.add("-translate-x-[1000px]"), 900);
        setTimeout(() => parent.classList.remove("translate-x-[1000px]"), 900);
        setTimeout(() => parent.classList.remove("opacity-0"), 1200);
       */
    // slide back in
    setTimeout(() => parent.classList.remove("translate-x-[2000px]"), 2000);
    // scale back
    setTimeout(
      () => parent.classList.remove("scale-50", "pointer-events-none"),
      2500
    );
  });
});
