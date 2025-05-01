/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        primary: {
          DEFAULT: '#1D503A',  // Your green text color
          light: '#2A7458',    // Optional lighter variant
          dark: '#143C2C',     // Optional darker variant
        },
        secondary: {
          DEFAULT: '#FAF5EE',  // Your cream background
          dark: '#F0E9DD',     // Optional darker variant
          light: '#FFFFFF',    // Optional lighter variant
        }
      },
      backgroundColor: {
        DEFAULT: '#FAF5EE',    // Sets default bg to your cream color
      },
      textColor: {
        DEFAULT: '#1D503A',    // Sets default text to your green
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "4rem",
          "2xl": "5rem",
        }
      }
    },
  },
  plugins: [],
}