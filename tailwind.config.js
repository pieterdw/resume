/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "page-bg-image": "url('https://straffekoffie.com/pieter/bg.jpg')",
      },
    },
  },
  plugins: [],
};
