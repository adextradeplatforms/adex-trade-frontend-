/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // Blue
        profit: "#FACC15",    // Yellow
        accent: "#7C3AED",    // Purple
        soft: "#F9FAFB",      // Light background
        card: "#FFFFFF",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  plugins: [],
};
