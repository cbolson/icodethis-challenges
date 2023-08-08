const btnEdit = document.querySelector("#btn-edit");
const btnSave = document.querySelector("#btn-save");
const btnCancel = document.querySelector("#btn-cancel");
const panelEdit = document.querySelector("#panel-edit");
let editVisible = false;
btnEdit.addEventListener("click", () => {
    if (!editVisible) {
        panelEdit.style.transform = "translate(0)";
        editVisible = true;
        btnEdit.innerText = 'close';
        btnEdit.classList.toggle("bg-slate-300");
        btnEdit.classList.toggle("text-black");
    } else { 
        closePanel();
    }
})

btnCancel.addEventListener("click", () => {
    closePanel();
});


function closePanel() { 
    panelEdit.style.transform = "translate(0,80px)";
    setTimeout( () => panelEdit.style.transform = "translate(0,-1000px", 300);

    btnEdit.innerText = 'edit';
    btnEdit.classList.toggle("bg-white");
    btnEdit.classList.toggle("text-slate-500");
    editVisible = false;
}

document.querySelector("form").addEventListener("submit", (e) => { 
    e.preventDefault();

    document.querySelector("#display-property-type").innerText = document.querySelector("#select-property-type").value;
document.querySelector("#display-property-time").innerText = document.querySelector("#select-property-time").value
    document.querySelector("#display-property-size").innerText = document.querySelector("#select-property-size").value
    closePanel();
})

/*
document.querySelector("#select-property-type").addEventListener("change", (e) => document.querySelector("#display-property-type").innerText = e.target.value);
document.querySelector("#select-property-time").addEventListener("change", (e) => document.querySelector("#display-property-time").innerText = e.target.value)
document.querySelector("#select-property-size").addEventListener("keyup", (e) => document.querySelector("#display-property-size").innerText = e.target.value)
*/


// utility - numbers only
function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
}