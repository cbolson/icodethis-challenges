const btnCheck = document.querySelector("#btn-checklist");
const listCheck = document.querySelector("#checklist");
let checlListVisible = false;
btnCheck.addEventListener("click", () => {
  checlListVisible ? hideList() : showList();
});
btnCheck.addEventListener("mouseover", () => {
  showList();
});
function showList() {
  listCheck.style.height = "fit-content";
  checlListVisible = true;
  btnCheck.style.transform = "rotate(180deg)";
}

function hideList() {
  listCheck.style.height = "0";
  checlListVisible = false;
  btnCheck.style.transform = "rotate(0)";
}
