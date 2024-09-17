/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // themes: ["black", "dark", "cupcake"],
  // theme: {
  //   extend: {},
  // },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['business', 'dark'],
  },
}