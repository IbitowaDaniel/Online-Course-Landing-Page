/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#343D48', // body color and primary color
        text_secondary: '#02073E', // secondary body color
        heading: '#0F2137', // primary heading color
        heading_secondary: '#343D48', // heading color
        background: '#FFFFFF', // body background color
        background_secondary: '#F9FBFD', // secondary background color
        border_color: '#E9EDF5', // border color
        primary: '#EF9E48', // primary button and link color
        primaryLight: '#FCF2E8',
        black: '#0F2137',
        secondary: '#30c', // secondary color - can be used for hover states
        muted: '#7B8188', // muted color
        accent: '#609', // a contrast color for emphasizing UI
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn2: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        header: 'fadeIn 0.8s ease-in',
        listText: 'fadeIn2 0.7s ease-in',
        price: 'fadeIn2 0.9s ease-in',
        button: 'fadeIn2 1s ease-in',
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },
  },
   
}
