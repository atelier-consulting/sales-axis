/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,pug}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#2a85ff",
      },
      fontSize: {
        xxs: ".6125rem",
      },
      width: {
        logo: "152px",
      },
      height: {
        trend: "28.5rem",
      },
      textIndent: {
        offscreen: "-6999px",
      },
      backgroundImage: {
        logo: "url(\"img/logo.png\")",
        trend: "linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,0)), var(--provided-img)",
      },
      backgroundSize: {
        logo: "152px auto",
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
