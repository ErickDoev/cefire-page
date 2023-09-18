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
          background: "#ffffff",
          foreground: "#000000",
          primary: {
            50: "#e6eeff",
            100: "#D6E4FF",
            200: "#ADC8FF",
            300: "#84A9FF",
            400: "#6690FF",
            500: "#3366FF",
            600: "#254EDB",
            700: "#1939B7",
            800: "#102693",
            900: "#091A7A",
            DEFAULT: "#3366FF",
            foreground: "#ffffff",
          },
          secondary: {
            50: "#e6eeff",
            100: "#D6F7FD",
            200: "#AEEBFC",
            300: "#84D6F6",
            400: "#64BFED",
            500: "#349DE2",
            600: "#267BC2",
            700: "#1A5CA2",
            800: "#104183",
            900: "#092E6C",
            DEFAULT: "#349DE2",
            foreground: "#ffffff",
          },
          success: {
            50: "#e6eeff",
            100: "#E0FCD8",
            200: "#BBF9B2",
            300: "#8CED88",
            400: "#66DC6D",
            500: "#39C64E",
            600: "#29AA48",
            700: "#1C8E42",
            800: "#12723B",
            900: "#0A5F36",
            DEFAULT: "#39C64E",
            foreground: "#ffffff",
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
