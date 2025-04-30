/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // 请根据你的项目路径调整
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'], // 自定义 sans 字体
      },
    },
  },
  plugins: [],
};
