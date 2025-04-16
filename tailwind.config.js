/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",             // Look for HTML files in the public folder
    "./public/**/*.html",          // Include HTML files in subfolders of public
    "./public/img/**/*.{jpg,png,jpeg,gif,svg}", // Add the img folder and specific image file types
    "./src/**/*.{js,jsx,ts,tsx}"   // Include JavaScript/TypeScript files if you use them
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}