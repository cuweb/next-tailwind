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
                'cu-waves-red': "url('https://rds-tailwind.s3.amazonaws.com/assets/cu-waves-red.svg')",
                'cu-waves-white-10': "url('https://rds-tailwind.s3.amazonaws.com/assets/cu-waves-white-10.svg')",
            },
            gridTemplateColumns: {
                'sidenav': '300px auto',
            },
            boxShadow: {
                'sidenav': '-10px -1px 10px -5px rgba(128,128,128,0.1) inset',
            }
        },
    },
};
