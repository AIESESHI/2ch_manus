module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        '2ch-bg': '#efefef',
        '2ch-header': '#0a0',
        '2ch-thread': '#f0e0d6',
        '2ch-thread-hover': '#ffe',
        '2ch-link': '#00f',
        '2ch-visited': '#90f',
      },
      fontFamily: {
        'meiryo': ['Meiryo', 'sans-serif'],
        'monospace': ['MS Gothic', 'monospace'],
      },
    },
  },
  plugins: [],
}
