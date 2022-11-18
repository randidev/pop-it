/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      poppins: [
        'Poppins',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        orange: '#ffbf69',
        green: '#cbf3f0',
        gray: '#333333',
        black: '#180d06',
      },
      backgroundImage: {
        'hero--background':
          "url('/assets/images/background.png')",
        'contact--background':
          "url('/assets/images/bg-grid.png')",
      },
    },
  },
  plugins: [],
};
