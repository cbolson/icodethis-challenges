// tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};
/*
// Set the interval for updating numbers (in milliseconds)
const UPDATE_INTERVAL = 10000; 

function updateNumbers() {
    document.querySelectorAll('[data-total]');.forEach(el =>  {
        el.classList.add("!opacity-0");
        setTimeout(() => {
            // Update the total by adding random value between -20 and 20
            el.textContent = parseInt(el.innerText) + Math.floor(Math.random() * 41) - 20; 
            el.classList.remove("!opacity-0")
        }, 300);
    });
}

updateNumbers();
setInterval(updateNumbers, UPDATE_INTERVAL);
*/
