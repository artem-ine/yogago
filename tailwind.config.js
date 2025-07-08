// tailwind.config.js
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}", // If using Prismic slices
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B61FF", // Approx YogaGo purple
        accent: "#FCEFF9", // Light pinkish background
        grayLight: "#F7F7F7",
        grayText: "#424242",
        textDark: "#1A1A1A",
        textLight: "#666",
      },
      fontFamily: {
        "sf-pro": [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      spacing: {
        section: "5rem",
        container: "1200px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 12px 24px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
