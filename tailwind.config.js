/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptserif: ["PT Serif", "serif"],
        robotoslab: ["Roboto Slab", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    fontSize: {
      "display-2xl": [
        "4.5rem", // 72px
        {
          lineHeight: "5.625rem", // 90px
          letterSpacing: "-0.02em",
        },
      ],
      "display-xl": [
        "3.75rem", // 60px
        {
          lineHeight: "4.5rem", // 72px
          letterSpacing: "-0.02em",
        },
      ],
      "display-lg": [
        "3.5rem", // 56px
        {
          lineHeight: "4rem", // 64px
          letterSpacing: "-0.02em",
        },
      ],
      "display-md": [
        "3rem", // 48px
        {
          lineHeight: "3.5rem", // 56px
          letterSpacing: "-0.02em",
        },
      ],
      "display-sm": [
        "1.875rem", // 30px
        {
          lineHeight: "2.375rem", // 38px
          letterSpacing: "-0.02em",
        },
      ],
      "display-xs": [
        "1.5rem", // 24px
        "2rem", // 32px
      ],
      xl: [
        "1.25rem", // 20px
        "1.875rem", // 30px
      ],
      lg: [
        "1.125rem", // 18px
        "1.175rem", // 28px
      ],
      md: [
        "1rem", // 16px
        "1.5rem", // 24px
      ],
      sm: [
        "0.875rem", // 14px
        "1.25rem", // 20px
      ],
      xs: [
        "0.75rem", // 12px
        "1.125rem", // 18px
      ],
    },
    colors: {
      primary: "#0B1220",
      secondary: "#272726",
      tertiary: "#FAFAFA",
      orange: "#FFBD1D",
      grey: "#BEBEBE",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
