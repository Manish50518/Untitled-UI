/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#E9D7FE",
        secondryPurple: "#D6BBFB",
        textPurple: "#6941C6",
        buttonbg: "#7F56D9",
        subText: "#475467",
        subTextBold: "#344054",
        headingFont: "#101828",
        feedBackBg: "#F9FAFB",
        borderGray: "#D0D5DD",
        footerText: "#667085",
      },
    },
  },
  plugins: [],
};
