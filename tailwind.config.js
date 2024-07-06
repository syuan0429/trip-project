/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGrey: "#757575",
        themeColor: "#F3CA52",
      },
    },
  },
  plugins: [],
};
