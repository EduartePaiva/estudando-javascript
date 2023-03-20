/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  safelist: [
    {pattern: /from-(gray|green|blue)-400/},
    {pattern: /to-(gray|green|blue)-700/}
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
