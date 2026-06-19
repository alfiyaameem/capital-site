/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        grass: {
          DEFAULT: '#3F8C2B',
          dark: '#2C611E',
          light: '#6CB24D',
          50: '#F0F7EC',
        },
        ink: {
          DEFAULT: '#15171A',
          soft: '#2A2D31',
        },
        steel: {
          DEFAULT: '#7A8085',
          light: '#C9CDD0',
          50: '#F2F3F4',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
}
