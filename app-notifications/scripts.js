// utility - prevent link clicks
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href") == "#") {
            e.preventDefault();
        }
    });
});