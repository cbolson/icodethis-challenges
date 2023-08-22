// Add JavaScript code here
tailwind.config = {
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0B3131",
        },
        bdr: "#0E0D1B50",
      },
    },
  },
};
