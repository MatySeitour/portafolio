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
          '0%': { transform: "translateY(1000px)" },
          '100%': {
            transform: "translateY(0px)"
          },
        },
        skill_animation: {
          '0%': { transform: "translateX(500px)" },
          '100%': {
            transform: "translateX(0px)"
          },
        },
        skill_animation_left: {
          '0%': { transform: "translateX(-500px)" },
          '100%': {
            transform: "translateX(0px)"
          },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out',
        'wiggle1': 'jump 1s .5s ease-in-out',
        'jump': 'jump 1s ease-in-out',
        'jump1': 'jump .3s ease-in-out',
        'jump2': 'jump .5s ease-in-out',
        'jump3': 'jump .7s ease-in-out',
        'jump4': 'jump .9s ease-in-out',
        'skill_left': 'skill_animation .9s ease-in-out',
        'skill_right': 'skill_animation_left .9s ease-in-out',
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