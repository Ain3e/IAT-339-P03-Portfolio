/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
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
        '4xl': '2.5rem'
      },
      lineHeight: {
        '5xl': '137%',  // Change the line height to your desired value
        '4xl': '137%',  // Change the line height to your desired value
      },
      margin: {
        'custom-top': '27rem', // Your custom margin value
      },
    },
  },
  plugins: [],
}