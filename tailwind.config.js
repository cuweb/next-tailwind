module.exports = {
    content: [
        './_rds-final/components/**/*.{js,ts,jsx,tsx}',
        './_rds-final/components/**/**/*.{js,ts,jsx,tsx}',
        './_rds-final/layouts/**/*.{js,ts,jsx,tsx}',
        './_rds-final/layouts/**/**/*.{js,ts,jsx,tsx}',
        './_rds-final/_misc/**/*.{js,ts,jsx,tsx}',
        './_rds-final/_misc/**/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './pages/**/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './components/**/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'cu-waves-red': "url('/cu-waves-red.svg')",
                'cu-waves-white-20': "url('/cu-waves-white-20.svg')",
            },
            // https://htmlcolorcodes.com/color-picker/
            // https://www.tailwindshades.com/
            colors: {
                'cu-red': {
                    DEFAULT: '#E91C24',
                    '50': '#FDE9E9',
                    '100': '#FBD6D7',
                    '200': '#F7B1B4',
                    '300': '#F48C90',
                    '400': '#F0666C',
                    '500': '#ED4148',
                    '600': '#E91C24',
                    '700': '#BB1219',
                    '800': '#880D12',
                    '900': '#55080B'
                },
                'cu-blue': {
                    DEFAULT: '#126B93',
                    '50': '#DCF1FB',
                    '100': '#CAEAF9',
                    '200': '#A6DCF4',
                    '300': '#81CDF0',
                    '400': '#5DBFEB',
                    '500': '#39B1E7',
                    '600': '#1BA0DC',
                    '700': '#1685B7',
                    '800': '#126B93',
                    '900': '#0C4761'
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
