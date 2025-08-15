/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx,html}',
        './public/index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                logo: ['var(--font-logo)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
