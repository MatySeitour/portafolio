/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: 0, transform: "translateY(-50px)" },
          '100%': {
            opacity: 1
          },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out',
        'wiggle2': 'wiggle 2s ease-in-out',
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: {
      mytheme: {
        primary: "#7c3aed",
        secondary: "#4c1d95",
        accent: "#1FB2A6",
        neutral: "#191D24",
        "base-100": "#2A303C",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(255, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require("daisyui")],
}