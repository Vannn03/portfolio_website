/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bvp: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        text: "rgba(var(--text))",
        accent: "rgba(var(--accent))",
        linkedin: "rgba(var(--linkedin))",
        github: "rgba(var(--github))",
        instagram: "rgba(var(--instagram))",
        navbar: "rgba(var(--navbar))",
        footer: "rgba(var(--footer))",
        skill: "rgba(var(--skill))",
      },
      dropShadow: {
        linkedin: "0 0 10px #0077B5",
        github: "0 0 10px #171515",
        instagram: "0 0 10px #D62976",
      },
      boxShadow: {
        "work-box-glow": "0 0 20px rgba(var(--accent))",
        "nav-line-glow": "0 -4px 20px rgba(var(--accent))",
        "experience-circle-glow": "0 0 10px rgba(var(--accent))",
        "theme-toggler-glow": "0 0 4px rgba(var(--text), 0.25)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(var(--accent)) 0%, rgba(var(--primary)) 100%)",
        "experience-fade":
          "linear-gradient(180deg, rgba(var(--primary), 0) 0%, rgba(var(--primary)) 100%);",
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
