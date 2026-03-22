/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./data/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fce8f2",
          100: "#fad1e6",
          200: "#f4a6cd",
          300: "#ed79b2",
          400: "#e3388c",
          500: "#c21f6f",
          600: "#a11f63",
          700: "#2e3d86",
          800: "#1c2c73",
          900: "#0f1b4f",
          950: "#0a1236",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
