module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#1e293b",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      spacing: {
        128: "32rem",
      },

      borderRadius: {
        xl: "1rem",
      },

      scale: {
        104: "1.04",
      },

      animation: {
        float: "float 3s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },

  plugins: [],
};