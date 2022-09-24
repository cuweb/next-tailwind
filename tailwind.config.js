module.exports = {
    content: [
        './build-files/components/**/*.{js,ts,jsx,tsx}',
        './build-files/components/**/**/*.{js,ts,jsx,tsx}',
        './build-files/layouts/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './template-parts/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'cu-waves-red': "url('/cu-waves-red.svg')",
                'cu-waves-white-20': "url('/cu-waves-white-20.svg')",
            },
            colors: {
                'cu-red': '#E91C24',
                'cu-red-light': "#f48b8f",
                'cu-blue': "#126B93",
                'cu-black': {
                    50: '#F2F2F2',
                    100: '#e6e6e6',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#191919',
                },
            },
            gridTemplateColumns: {
                'one3rd': '33.33333% auto',
                'two3rd': '66.66666% auto',
            }
        },
    },
    plugins: [
        '@tailwindcss/forms',
    ],
};
