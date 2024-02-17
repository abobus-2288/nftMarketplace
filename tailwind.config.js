/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            'colors': {
                'bg': '#2B2B2B',
                'bg-secondary': '#3B3B3B',
                'label': '#858584',

                'action': '#A259FF',
            },

            'fontFamily': {
                'mono': ['Space Mono', 'monospace'],
                'sans': ['Work Sans', 'sans-serif'],
            },

            'fontSize': {
                // Space Mono font
                'space-base': ['16px', {
                    'lineHeight': '140%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                }],

                'space-caption': ['12px', {
                    'lineHeight': '110%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                }],

                'space-h1': ['67px', {
                    'lineHeight': '110%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'fontWeight': 'bold',
                }],

                'space-h2': ['51px', {
                    'lineHeight': '110%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'fontWeight': 'bold',
                }],

                'space-h3': ['38px', {
                    'lineHeight': '120%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'fontWeight': 'bold',
                }],

                'space-h4': ['28px', {
                    'lineHeight': '140%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'fontWeight': 'bold',
                }],

                'space-h5': ['22px', {
                    'lineHeight': '160%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'fontWeight': 'bold',
                }],

                // Work Sans font
                'work-button': ['16px', {
                    'lineHeight': '16px',
                    'letterSpacing': '10%',
                    'paragraphSpacing': '0',
                    'weight': 'semibold',
                }],

                'work-base': ['16px', {
                    'lineHeight': '140%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                }],

                'work-caption': ['12px', {
                    'lineHeight': '110%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                }],

                'work-body': ['22px', {
                    'lineHeight': '160%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                }],

                'work-h1': ['67px', {
                    'lineHeight': '110%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'weight': 'semibold',
                }],

                'work-h2': ['51px', {
                    'lineHeight': '110%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'weight': 'semibold',
                }],

                'work-h3': ['38px', {
                    'lineHeight': '120%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'weight': 'semibold',
                }],

                'work-h4': ['28px', {
                    'lineHeight': '140%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'weight': 'semibold',
                }],

                'work-h5': ['22px', {
                    'lineHeight': '140%',
                    'letterSpacing': '0',
                    'paragraphSpacing': '0',
                    'weight': 'semibold',
                }],
            }
        },
    },
    plugins: [],
}

