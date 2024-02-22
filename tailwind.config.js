/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Pretendard': ["Pretendard"],
      },
      width: {
        '1920': '1920px',
      },
      height: {
        '1000': '1000px',
      },
      margin: {
        '200': '200px',
      },
      padding: {
        '100': '100px',
        '200': '200px',
        '230': '230px',
        '250': '250px',
      },
      fontSize: {
        '64': '64px',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    },
  },
  plugins: [],
}