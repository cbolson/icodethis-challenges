const main = document.querySelector("#slider");
/* This was just for fun - it would be better done in CSS (or not at all) */

document.querySelector("#btn-back").addEventListener("click", () => {
  // main.classList.add("translate-x-[-4000px]");
  main.classList.add("scale-x-[1000%]");
  //main.classList.add("opacity-0");
  setTimeout(() => {
    main.classList.add("origin-left");
    main.classList.add("translate-x-[-4000px]");
    main.classList.remove("scale-x-[1000%]");
  }, 500);

  setTimeout(() => {
    // hide it completely to relocate to the right
    main.classList.add("opacity-0");
  }, 800);

  setTimeout(() => {
    // move to right and reset most values
    main.classList.add("translate-x-[3000px]");
    main.classList.remove("translate-x-[-4000px]");
    main.classList.remove("scale-x-[1000%]");
    main.classList.remove("origin-left");
  }, 1300);

  setTimeout(() => {
    main.classList.remove("opacity-0");
    main.classList.remove("translate-x-[3000px]");
    main.classList.remove("scale-x-[1000%]");
  }, 3000);
});
