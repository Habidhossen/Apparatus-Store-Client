/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef233c",
        secondary: "#ff6400",
        accent: "#00a9a4",
        heading: "#28214c",
        headingDark: "#212529",
        text: "#555555",
        lightGrey: "#fafafa",
        lightBlue: "#eaf6f6",
        lightOrange: "#feead1",
      },
      fontFamily: {
        krub: ["Krub", "sans-serif"],
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  daisyui: {
    themes: [
      {
        primaryTheme: {
          primary: "#ef233c",
          secondary: "#ff6400",
          accent: "#00a9a4",
          neutral: "#172b34",
          info: "#0dcaf0",
          success: "#12B886",
          warning: "#FFD43B",
          error: "#F03E3E",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
