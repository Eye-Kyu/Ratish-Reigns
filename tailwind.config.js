/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navbar:     '#0c6338',
          hero:       '#254d32',
          advantages: '#336744',
          features:   '#337247',
          about:      '#3f7651',
          footer:     '#4f9265',
          cream:      '#fffdc7',
          muted:      '#e2e2e2',
          dark:       '#0b0b0b',
        },
      },
      fontFamily: {
        modak:  ['Modak', 'sans-serif'],
        bagel:  ['"Bagel Fat One"', 'sans-serif'],
        bungee: ['"Bungee Shade"', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
