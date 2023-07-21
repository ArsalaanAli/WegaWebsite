/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        imagescale: {
          from: { transform: "scale(1.2)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        imageanim: "imagescale 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
