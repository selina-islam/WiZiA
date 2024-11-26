/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ElectricCyan: '#0FF1F6',
      },
      backgroundColor: {
        DeepJungleGreen: "#002228",
        ElectricBlue: '#0FF1F6',
                RichBlack: '#07292F'

      },
      fontFamily: {
        workSans: '"Work Sans", sans-serif',
        montserrat: ' "Montserrat", sans-serif',
      },
    },
  },
  plugins: [],
};

