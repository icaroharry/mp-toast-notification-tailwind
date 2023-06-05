/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      animation: {
        notification: "notification 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s",
      },
      keyframes: {
        notification: {
          "0%": { transform: "translateX(1000px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
