/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F8F9",
        card: "#ffff",
        panel: "#E7ECEF",
        open: "#fcbf49",
        inProgress: "#45B2F1",
        done: "#46C75B",
      },
    },
  },
  plugins: [],
};
