// close it if you can!
document.querySelectorAll("[btn-close]").forEach(btn => {
    const parent = btn.closest("section");
    btn.addEventListener("click", () => {
        parent.style.transform = "scale(0,1)";
        setTimeout(function () {
            parent.style.transform = "scale(1)";
        }, 1500);
    });
})