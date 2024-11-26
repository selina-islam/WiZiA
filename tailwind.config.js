/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepJungleGreen: "#002228",
        electricCyan: "#0FF1F6",
        secondary: "#E9EEF1",
      },
      backgroundColor: {
        deepJungleGreen: "#002228",
        electricBlue: "#0FF1F6",
        richBlack: "#07292F",
      },
      fontFamily: {
        workSans: '"Work Sans", sans-serif',
        montserrat: ' "Montserrat", sans-serif',
      },
    },
  },
  plugins: [],
};

