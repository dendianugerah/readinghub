module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-nesting": {
      reportBadSelector: false,
    },
    tailwindcss: {
      config: "./tailwind.config.js",
    },
    autoprefixer: {},
  },
  quiet: true,
};
