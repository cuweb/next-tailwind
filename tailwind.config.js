module.exports = {
    presets: [
        require('./tailwind.theme.js'),
    ],
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
            gridTemplateColumns: {
                'cutheme': '260px auto',
            },
        },
    },
};
