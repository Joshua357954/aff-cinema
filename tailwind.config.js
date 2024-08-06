/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "",
        "gradient-conic": "",
      },
      colors: {
        'carrot-orange': '#f09733',
        'storm-dust': '#6b6b6a',
        'cod-gray': '#070606',
        'pickled-bean': '#653f20',
        'copper': '#a46d34',
        'brown-bramble': '#511d04',
        'tobacco-brown': '#6a523c',
        'pablo': '#7c7464',
        'mine-shaft': '#3c3c3c',
        'indochine': '#bc5c04',
      },
    },
  },
  plugins: [],
};
