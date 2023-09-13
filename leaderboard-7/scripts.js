
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Rajdhani', 'sans-serif'],
            },
            colors: {
                orange: "#FC4F1F"
            }
        }
    }
}

// utility - prevent link clicks
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href") == "#") {
            e.preventDefault();
        }
    });
});