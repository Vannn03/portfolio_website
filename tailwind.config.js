/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bvp: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        softBlack: "#34353A",
        secondary: "#2B2E31",
        softPurple: "#7B68E4",
        linkedin: "#0077B5",
        github: "#171515",
        instagram: "#D62976",
        navbar: "#27272A",
        footer: "#222527",
        skill: "#414248",
      },
      dropShadow: {
        glow: "0 -4px 10px #7B68E4",
        linkedin: "0 0 10px #0077B5",
        github: "0 0 10px #171515",
        instagram: "0 0 10px #D62976",
      },
    },
    screens: {
      xs: "480px",
      ss: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [],
};
