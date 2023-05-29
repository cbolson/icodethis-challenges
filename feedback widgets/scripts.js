// buttons
const btnSubmit = document.querySelectorAll(".card-submit");
const btnSkip = document.querySelectorAll(".card-skip");
const btnClose = document.querySelector("#cards-close");

// survey close button - this would close the modal window but here I will use it to reset
btnClose.addEventListener("click", () => {
  alert(
    "This would close the modal window. However for this demo I am using it to go back to the first slide"
  );
  document
    .querySelector("#card-1")
    .scrollIntoView({ behavior: "smooth", inline: "start" });
});

// submit buttons - these should really process the data
btnSubmit.forEach((btn) => {
  const nextCardId = btn.getAttribute("data-target");
  const element = document.querySelector(`#${nextCardId}`);

  btn.addEventListener("click", () => {
    console.log(nextCardId);
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
  });
});

// skip buttons - in the demo js they actually have the same funcionality as the submit button
btnSkip.forEach((btn) => {
  const nextCardId = btn.getAttribute("data-target");
  const element = document.querySelector(`#${nextCardId}`);
  btn.addEventListener("click", () => {
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
  });
});
