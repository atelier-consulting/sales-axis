/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,pug}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ".6125rem",
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
