/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {


    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        brut: ["OT-Brut"],
        montreal: ["PP-Neue-Montreal"],
        eiko: ["PP-Eiko"],
        untitledsans: ["Untitled-Sans"],
      },
      colors: {
        customGray: '#7C7C7C',
      },
      fontSize: {
        '5xl': '3rem', // Change the font size to your desired size
      },
      lineHeight: {
        '5xl': '137%',  // Change the line height to your desired value
      },
      margin: {
        'custom-top': '27rem', // Your custom margin value
      },
    },
  },
  plugins: [],
}