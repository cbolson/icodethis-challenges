
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: {
                    200: "#29AFFE",
                    400: "#2D3968",
                    700: "#283360",
                    900: "#111423",
                }
            }
        }
    }
}


// close it if you can!
const popup = document.querySelector("#popup");
document.querySelector("#btn-close").addEventListener("click", () => {

    popup.style.transform = "scale(1000%,0)";
    popup.style.opacity = 0;


    // set to 0
    setTimeout(function () {
        popup.style.transform = "scale(0)";
    }, 1000);


    setTimeout(function () {
        popup.style.transform = "scale(1)";
        popup.style.opacity = 1;
    }, 3000);
});

