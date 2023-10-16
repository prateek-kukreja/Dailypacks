/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: "rgba(0, 0, 0, 0.205)",
        hover: "rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: [],
};
