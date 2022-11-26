/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,pug}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#2a85ff",
        "brand-green": "#28c25d",
        "concrete": "#f2f2f2",
        "monsoon": "#767779",
        "tuna": "#484a4c",
        "pearl": "#050c23",
      },
      fontSize: {
        xxs: ".6125rem",
      },
      width: {
        logo: "152px",
        "logo-small": "86px",
        card: "75vw",
      },
      minWidth: {
        card: "75vw",
      },
      maxWidth: {
        page: "64rem",
      },
      height: {
        trend: "28.5rem",
        panel: "7.5rem",
      },
      textIndent: {
        offscreen: "-6999px",
      },
      backgroundImage: {
        logo: "url(\"img/logo.png\")",
        "logo-small": "url(\"img/logo.png\")",
        trend: "linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,0)), var(--provided-img)",
      },
      backgroundSize: {
        logo: "152px auto",
        "logo-small": "86px auto",
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
