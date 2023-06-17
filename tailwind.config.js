/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
      "./public/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            dela: ["var(--dela)"],
            raleway: ["var(--raleway)"],
         },
         keyframes: {
            icon: {
               "0%": {
                  transform: "rotate(0)",
               },
               "17%": {
                  transform: "rotate(4deg)",
               },
               "33%": {
                  transform: "rotate(-6deg)",
               },
               "50%": {
                  transform: "rotate(7deg)",
               },
               "67%": {
                  transform: "rotate(-4deg)",
               },
               "83%": {
                  transform: "rotate(5deg)",
               },
               " 100%": {
                  transform: "rotate(0)",
               },
            },
         },
         animation: {
            "swap-icon": "icon 14s cubic-bezier(.455,.03,.515,.955) infinite",
         },
         screens: {
            "2xl": { min: "1535px" },
            xl: { min: "1279px" },
            lg: { min: "1023px" },
            md: { min: "767px" },
            sm: { min: "639px" },
         },
      },
   },
   plugins: [],
};
