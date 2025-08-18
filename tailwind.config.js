/** @type {import('tailwindcss').Config} */
export default {
    content: [
    './app/**/*.{js,ts,jsx,tsx}',      
    './components/**/*.{js,ts,jsx,tsx}', 
    './ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',      
  ],
    theme: {
        extend: {
            fontFamily: {
                logo: ['var(--font-logo)', 'sans-serif'],
            },
            colors: {
            brand: 'rgb(13 148 136 / <alpha-value>)', 
        },
        },
    },
    plugins: [],
};
