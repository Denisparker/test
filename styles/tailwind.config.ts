module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './globalComponents/**/*.{js,ts,jsx,tsx,mdx}',
    './scene/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    screens: {
      "sm": {"max": "767px"},
      "md": {"min": "768px", "max": "1023px"},
      "lg": {"min": "1024px"}
    },
    colors: {
      basic: "#f37232",
      darkGray: "#323740",
      black: "#000000",
      white: "#FFFFFF",
      error: "#ce3737"
    }
  }
}
