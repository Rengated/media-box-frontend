/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      padding: "20px",
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        "auto-fill-368": "repeat(auto-fill, 368px)",
      },
    },
  },
  plugins: [],
};
