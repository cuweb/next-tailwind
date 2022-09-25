module.exports = {
    content: [
        './build-files/components/**/*.{js,ts,jsx,tsx}',
        './build-files/components/**/**/*.{js,ts,jsx,tsx}',
        './build-files/layouts/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './template-parts/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './examples/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'cu-waves-red': "url('/cu-waves-red.svg')",
                'cu-waves-white-20': "url('/cu-waves-white-20.svg')",
            },
            // https://htmlcolorcodes.com/color-picker/
            colors: {
                'cu-red': '#E91C24',
                'cu-blue': "#126b93",
                'cu-blue-tint' : {
                    1: '#126b93',
                    2: '#307ea1',
                    3: '#4d90ae',
                    4: '#6ba3bc',
                    5: '#89b5c9',
                    6: '#a6c7d7',
                    7: '#c4dae4',
                    8: '#e1ecf2',
                },
                'cu-red-tint' : {
                    1: '#e91c24',
                    2: '#ec383f',
                    3: '#ee555b',
                    4: '#f17176',
                    5: '#f48e92',
                    6: '#f7aaad',
                    7: '#f9c6c8',
                    8: '#fce3e4',
                },
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
