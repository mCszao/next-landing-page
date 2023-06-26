const { background } = require('@chakra-ui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#fff',
                sectionBackground: '#f0f8ff',
                primaryBlue: '#007DF9',
                textColor1: '#1c3c50',
                textColor2: '#0084ff',
                buttonGreen: '#9ceddd',
                buttonBlue: '#a1d9ff',
                buttonYeallow: '#fff1a0',
            },

            fontFamily: { jakarta: ['Plus Jakarta Sans', 'sans-serif'] },
        },
    },
    plugins: [],
};
