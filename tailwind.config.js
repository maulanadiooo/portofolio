import theme from "tailwindcss/defaultTheme.js";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px'
        },
        extend: {
            colors: {
                primary: '#06b6d4',
                secondary: '#737373',
                'secondary-dark': '#94a3b8',
                dark: '#171717'
            },
            screens: {
                '2xl': '1320px',
            }
        },
    },
    plugins: [],
}

