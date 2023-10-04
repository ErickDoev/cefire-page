import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      "blue-light": {
        extend: "light", // <- inherit default values from dark theme
        colors: {
          background: {
            50: '#ebf2fa',
            100: '#d6e4f5',
            200: '#adcaeb',
            300: '#85afe0',
            400: '#5c95d6',
            500: '#337acc',
            600: '#2962a3',
            700: '#1f497a',
            800: '#143152',
            900: '#0a1829',
            950: '#050c14',
          },
          text: {
            50: '#ebf2f9',
            100: '#d7e5f4',
            200: '#b0cae8',
            300: '#88b0dd',
            400: '#6195d1',
            500: '#397bc6',
            600: '#2e629e',
            700: '#224a77',
            800: '#17314f',
            900: '#0b1928',
            950: '#060c14',
            DEFAULT: "#397bc6"
          },
          primary: {
            50: '#e5f2ff',
            100: '#cce5ff',
            200: '#99ccff',
            300: '#66b2ff',
            400: '#3399ff',
            500: '#007fff',
            600: '#0066cc',
            700: '#004c99',
            800: '#003366',
            900: '#001933',
            950: '#000d1a',
          DEFAULT: "#1B8EFF"
          },
          secondary: {
            50: '#ebf2fa',
            100: '#d7e5f4',
            200: '#afcce9',
            300: '#87b2de',
            400: '#5f99d3',
            500: '#377fc8',
            600: '#2c66a0',
            700: '#214c78',
            800: '#163350',
            900: '#0b1928',
            950: '#050d14',
            DEFAULT: "#B7D1EB",
          },
          accent: {
            50: '#ebf2fa',
            100: '#d7e5f4',
            200: '#afcce9',
            300: '#87b2de',
            400: '#5f99d3',
            500: '#377fc8',
            600: '#2c66a0',
            700: '#214c78',
            800: '#163350',
            900: '#0b1928',
            950: '#050d14',
            DEFAULT: "#2E6BA8",
          },
          focus: "#3f35fc",
        },       
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    }
  })],
}
export default config
