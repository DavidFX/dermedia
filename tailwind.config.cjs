/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        dark: "#2E2E2E",
        light: "#F2F2F2",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/img/lines.png')",
      },
      scale: {
        "-100": "-1",
      },
      screen: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
