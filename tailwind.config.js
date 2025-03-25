/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#607E4C', // The green color
        secondary: {
          DEFAULT: '#E8BEBE', // The new warmer pink color
          light: '#E8BEBE'    // Light pink background
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        button: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}