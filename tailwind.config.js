/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/src/assets/images/bg-header-desktop.svg')",
        mobile: "url('/src/assets/images/bg-header-mobile.svg')",
      },
      colors: {
        DarkCyan: "hsl(180, 29%, 50%)",
        MainBg: "hsl(180, 52%, 96%)",
        LightBg: "hsl(180, 31%, 95%)",
        GrayishCyan: "hsl(180, 8%, 52%)",
        DarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
