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
        jump: {
          '0%, 100%': { transform: "translateY(0px)", },
          '50%': {
            transform: "translateY(10px)"
          },
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out',
        'wiggle2': 'wiggle 2s ease-in-out',
        'jump1': 'jump 1s ease-in-out infinite',
        'jump2': 'jump 2s ease-in-out infinite',
        'jump3': 'jump 3s ease-in-out infinite',
      },
      backgroundColor: {
        'primary': '#0cc',
      }
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: {
      mytheme: {
        primary: "#0ff",
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