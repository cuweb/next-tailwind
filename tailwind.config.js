module.exports = {
    // presets: [
    //     require('./tailwind.theme.js'),
    // ],
    content: [
        // './_rds-final/components/**/*.{js,ts,jsx,tsx}',
        // './_rds-final/components/**/**/*.{js,ts,jsx,tsx}',
        // './_rds-final/layouts/**/*.{js,ts,jsx,tsx}',
        // './_rds-final/layouts/**/**/*.{js,ts,jsx,tsx}',
        // './_rds-final/utils/**/*.{js,ts,jsx,tsx}',
        // './_rds-final/utils/**/**/*.{js,ts,jsx,tsx}',
        // './_rds-final/_misc/**/*.{js,ts,jsx,tsx}',
        // './_rds-final/_misc/**/**/*.{js,ts,jsx,tsx}',
        './_rds-final/components/Toasts/*.{js,ts,jsx,tsx}',
        './_rds-final/components/Footer/FooterCondensed/*.{js,ts,jsx,tsx}',
        './_rds-final/components/SubmitForm/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './pages/**/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './components/**/**/*.{js,ts,jsx,tsx}',
        './node_modules/rds-tailwind/src/**/**/*.{js,ts,jsx,tsx}',
        './node_modules/rds-tailwind/src/**/**/**/*.{js,ts,jsx,tsx}',
        './node_modules/rds-tailwind/src/layouts/Panel/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'cu-waves-red': "url('../assets/cu-waves-red.svg')",
                'cu-waves-white-20': "url('../assets/cu-waves-white-20.svg')",
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                css: {
                    a: {
                    'font-weight': 'semibold',
                    'text-decoration': 'none',
                    '&:hover': {
                        'text-decoration': 'underline',
                    },
                    },
                },
                },
                article: {
                css: {
                    '--tw-prose-body': theme('colors.cu-black[700]'),
                    '--tw-prose-headings': theme('colors.cu-black[800]'),
                    '--tw-prose-links': theme('colors.cu-red[DEFAULT]'),
                    '--tw-prose-quote-borders': theme('colors.cu-red[DEFAULT]'),
                },
                },
            }),
            colors: {
                'cu-red': {
                DEFAULT: '#E91C24',
                50: '#FDE9E9',
                100: '#FBD6D7',
                200: '#F7B1B4',
                300: '#F48C90',
                400: '#F0666C',
                500: '#ED4148',
                600: '#E91C24',
                700: '#BB1219',
                800: '#880D12',
                900: '#55080B',
                },
                'cu-black': {
                DEFAULT: '#000000',
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
        },
    },
};
