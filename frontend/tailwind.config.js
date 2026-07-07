/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        chutney: "#D9471B",
        mint: "#0F9F6E",
        charcoal: "#1F2933",
        paper: "#FFF8EF"
      }
    }
  },
  plugins: []
};
