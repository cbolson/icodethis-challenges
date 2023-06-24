const btbSubmit = document.querySelector("#btn-submit");
const percentage = document.querySelector("#percentage");
const amount = document.querySelector("#amount");
const results = document.querySelector("#results");
const template = document.querySelector("#template-toast");

btbSubmit.addEventListener("click", () => {
  let msg = "";
  let msgType = "OK";

  const p = percentage.value;
  const a = amount.value;

  if (!p) {
    msg = "add a PERCENTAGE";
    msgType = "alert";
  } else if (!a) {
    msg = "add an AMOUNT";
    msgType = "alert";
  } else {
    //const total = Math.floor(p / 100 * a);
    const total = (p / 100) * a;
    msg = `${p}% of ${a} = <strong>${total}</strong>`;
  }
  // create alert
  const toast = template.content.cloneNode(true).querySelector("li");
  if (msgType === "alert") {
    toast.classList.add("bg-red-100");
  } else {
    toast.classList.add("bg-green-100");
  }
  toast.querySelector("p").innerHTML = msg;
  results.append(toast);

  toast.querySelector("button").addEventListener("click", () => {
    toast.style.transform = "scale(0)";
    setTimeout(function () {
      toast.remove();
    }, 300);
  });
});

// utilities

// numbers only
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
// de-activate links
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
