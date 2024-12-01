/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "purple-gradient": `linear-gradient(0deg, #662FFF, #662FFF),
        linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)`,
        "dp-gradient":
          "linear-gradient(0deg, #0B091C, #0B091C), linear-gradient(0deg, rgba(11, 9, 28, 0) 0%, rgba(102, 47, 255, 0.18) 100%), linear-gradient(174.1deg, rgba(11, 9, 28, 0) 56.76%, rgba(21, 94, 239, 0.04) 82.71%)",
      },
      colors: {
        "slate-gray": "#6C737F",
        navy: "#141C53",
        ash: "#F8F9FB",
        purple: "#662FFF",
      },
    },
  },
  plugins: [],
};
