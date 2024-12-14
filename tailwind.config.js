/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,vue}', './components/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['Proxima', 'sans-serif'],
      },
      colors: {
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
          default: '#fff',
          100: '#FEF9FA',
          200: '#FEF8FA',
          300: '#F9F9F9',
        },
      },
      backgroundImage: {
        'red-gradient':
          'linear-gradient(90deg, rgba(255,58,68,1) 0%, rgba(195,17,98,1) 100%)',
        'black-gradient':
          'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,8,8,1) 100%)',
        'dark-gradient':
          'linear-gradient(90deg, rgba(26,26,26,1) 0%, rgba(26,26,26,0.8) 74%, rgba(26,26,26,1) 100%)',
      },
    },
  },
  plugins: [],
};