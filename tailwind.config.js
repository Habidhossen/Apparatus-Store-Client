module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        primaryTheme: {
          primary: "#fdb819",
          secondary: "#ad4684",
          accent: "#43aee1",
          neutral: "#172b34",
          info: "#5e7dd9",
          success: "#13aa75",
          warning: "#f69c18",
          error: "#f21842",
          "base-100": "#f7f7f7",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
