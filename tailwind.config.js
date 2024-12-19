/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,vue}', './components/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      width:{
        '982': '982px'
      },
      height: {
        '439': '439px'
      },
      fontFamily: {
        proxima: ['Proxima', 'sans-serif'],
      },
      colors: {
        bodyBg: '#F7F8FA',
        red: {
          100: '#FDD3DE',
          200: '#FDDFE7',
          300: '#FF4433',
          400: '#FC3F1D',
          500: '#F62559',
          600: '#EB6666',
          700: '#FBE0E0',
          800: '#F97495',
          900: '#FA89A5',
          950: '#FEEBF0',
        },
        black: {
          default: '#000000',
          100: '#292929',
          200: '#282828',
          300: '#1A1A1A',
          400: '#333333',
          500: '#383838',
          600: '#1D1D1D',
          700: '#2B2B2B',
        },
        white: {
          default: '#ffffff',
          100: '#FEF9FA',
          200: '#FEF8FA',
          300: '#F9F9F9',
          400: '#F2F3F5',
        },
        gray: {
          100: '#9E9EA5',
          200: '#6F6F6F'
          400: '#EAEBED',
          500: '#CDCDD0',
          600: '#F2F3F5',
        },
        grey: {
<<<<<<< HEAD
          100: '#9E9EA5',
          200: '#6F6F6F',
          500: '#CDCDD0',
=======
         
        },
        grey: {
          100: '#6F6F6F',
          200: '#9E9EA5',
          500: '#CDCDD0'
>>>>>>> 7115d7afbdebf6d8e89e791686325871594be6ac
        },
      },
      backgroundImage: {
        'red-gradient':
          'linear-gradient(90deg, rgba(255,58,68,1) 0%, rgba(195,17,98,1) 100%)',
        'black-gradient':
          'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,8,8,1) 100%)',
        'dark-gradient':
          'linear-gradient(90deg, rgba(26,26,26,1) 0%, rgba(26,26,26,0.8) 74%, rgba(26,26,26,1) 100%)',
        'dark-btn':
          'linear-gradient(90deg, rgba(56,56,56,1) 0%, rgba(111,111,111,1) 100%)',
          'dark-btn-hover':
          'linear-gradient(84.8deg,#d7d7d7,#f4f4f4 131.39%)',
        'header-btn': ''
      },
    },
  },
  plugins: [],
};
