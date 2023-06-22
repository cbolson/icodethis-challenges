const toggles = document.querySelectorAll("[toggle-state]");
const container = document.querySelector("#alerts");
toggles.forEach(btn => { 
    const toast = btn.closest(".toast");

    btn.addEventListener("click", () => {
        toast.classList.add("hide");

        // remove it from the dom to allow others to move up and then add it again below 
        setTimeout(function () {
            toast.remove();
        }, 550); /* needs to be the same or higher than the transition to avoid removing it before it has finihshed animating*/

        // add it back in
        setTimeout(function () {
            container.append(toast);
            toast.classList.remove('hide');
        }, 750); 
    })
})