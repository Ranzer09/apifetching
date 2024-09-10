/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",flowbite.content(),],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 43%, rgba(233,0,255,1) 100%)',
      },
    },
  },
  plugins: [flowbite.plugin(),],
}

