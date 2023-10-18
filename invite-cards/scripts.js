document.querySelector("#btn-copy").addEventListener("click", () => {
  const copyText = document.querySelector("#link").innerText;
  navigator.clipboard.writeText(copyText);
  alert("Copied the text: " + copyText);
});
