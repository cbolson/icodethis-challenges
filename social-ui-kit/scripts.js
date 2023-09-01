// Add JavaScript code here
tailwind.config = {
    theme: {
        screens: {
            'xs': '400px',
            'sm': '600px',
            'md': '900px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',

        },
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: {
                    300: "#0D1D37",
                    DEFAULT: "#070F1E"
                },
                secondary: {
                    300: "#4751AE",
                    DEFAULT: "#244499"
                }
            }
        }
    }
}

const panelButtons = document.querySelectorAll("[data-toggle]");
const panels = document.querySelectorAll("[data-panel]");
panelButtons.forEach(btn => { 
    btn.addEventListener("click", () => { 
        panels.forEach(panel => {
            panel.classList.add("translate-y-[2000px]");
        })
        const p = btn.dataset.toggle;
        console.log(p);
        document.querySelector(`[data-panel="${p}"]`).classList.toggle("translate-y-[2000px]");

    })
})
function closePanels() { 
    panels.forEach(panel => {
        panel.classList.add("translate-y-[2000px]");
    })
}