const paymentButtons = document.querySelectorAll("[payment-type]");
const paymentPanels = document.querySelectorAll("[payment-panel]");

//const paymentPanel = document.querySelector("#payment-panels");

paymentButtons.forEach((btn) => {
  const type = btn.getAttribute("payment-type");
  btn.addEventListener("change", () => {
    paymentPanels.forEach((p) => {
      p.classList.add("hidden");
    });
    const element = document.querySelector(`[payment-panel="${type}"]`);
    element.classList.remove("hidden");
    document.querySelector(`[payment-panel=${type}]`).classList.add("active");
  });
});

const panelSummary = document.querySelector("#stage-summary");

document.querySelector("#btn-confirn").addEventListener("click", () => {
  panelSummary.scrollIntoView({ behavior: "smooth", inline: "start" });
  document.querySelector("#stage-marker-payment").classList.remove("current");
  document.querySelector("#stage-marker-payment").classList.add("completed");
  document.querySelector("#stage-marker-summary").classList.add("current");
});
document
  .querySelector("#stage-payment")
  .scrollIntoView({ behavior: "smooth", inline: "start" });

// utilities
// credit card format (thanks Google)
const input = document.querySelector("#credit-card");
input.addEventListener("input", () => {
  input.value = formatNumber(input.value.replaceAll(" ", ""));
});
const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

// utility - numbers only
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
// utility - prevent link clicks
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});
