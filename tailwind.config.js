/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        StrongCyan: "hsl(171, 66%, 44%)",
        LightBlue: "hsl(233, 100%, 69%)",

        DarkGrayishBlue: "hsl(210, 10%, 33%)",
        GrayishBlue: "hsl(201, 11%, 66%)",
        Grayish: "hsl(201, 11%, 93%)",
      },
      fontFamily: {
        Bai: ["Bai Jamjuree"],
      },
    },
  },
  plugins: [],
};
