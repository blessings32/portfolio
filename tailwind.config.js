/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        textColor: "#fff",
        background: "#404051",
        primary: "#060d91",
        secondary: "#dedcff",
        accent: "#acbd0f",
      },
    },
  },
  plugins: [],
};
