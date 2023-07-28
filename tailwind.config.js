/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        modal: 'rgb(var(--color-modal) / <alpha-value>)',
        accent1: {
          DEFAULT: 'rgb(var(--color-accent1) / <alpha-value>)',
          hover: 'rgb(var(--color-accent1-hover) / <alpha-value>)',
        },
        accent2: 'rgb(var(--color-accent2) / <alpha-value>)',
        accent3: 'rgb(var(--color-accent3) / <alpha-value>)',
        accent4: 'rgb(var(--color-accent4) / <alpha-value>)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  blocklist: ['container'],
  plugins: [],
};
