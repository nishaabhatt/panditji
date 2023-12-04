/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC926",
        primaryDark: "#D6A100",
        primaryLight: "#FFD145",
        secondary: "#000050",
        textPrimary: "#DBA500",
        textSecondary: "#FFFFFF",
        textFooter: "#B2BEB5",
        footerPrimaryColor: "#16232E",
        footerSecondaryColor: "#2D3E40",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",
    },
  },
  plugins: [],
};
