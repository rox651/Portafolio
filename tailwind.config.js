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
