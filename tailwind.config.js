/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@shadcn/ui/dist/**/*.{ts, js, jsx, tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'blue': 'rgb(var(--color-blue))',
                'indigo': 'rgb(var(--color-indigo))',
                'purple': 'rgb(var(--color-purple))',
                'pink': 'rgb(var(--color-pink))',
                'red': 'rgb(var(--color-red))',
                'orange': 'rgb(var(--color-orange))',
                'yellow': 'rgb(var(--color-yellow))',
                'green': 'rgb(var(--color-green))',
                'teal': 'rgb(var(--color-teal))',
                'cyan': 'rgb(var(--color-cyan))',
                'black': 'rgb(var(--color-black))',
                'white': 'rgb(var(--color-white))',
                'primary': 'rgb(var(--color-primary))',
                'secondary': 'rgb(var(--color-secondary))',
                'success': 'rgb(var(--color-success))',
                'dark': 'rgb(var(--color-dark))',
                'muted': 'rgb(var(--color-muted))',
                'caption': 'rgb(var(--color-caption))',
                'title': 'rgb(var(--color-title))',
                'zinc': 'rgb(var(--color-zinc))',
                gray: {
                    DEFAULT: 'rgba(var(--color-gray))',
                    25: 'rgba(var(--color-gray-25))',
                    50: 'rgba(var(--color-gray-50))',
                    dark: 'rgba(var(--color-gray-dark))',
                    light: 'rgba(var(--color-gray-light))',
                }
            },
            fontFamily: {
                'Estedad-Regular': 'Estedad Regular',
                'Estedad-Medium': 'Estedad Medium',
                'Estedad-Bold': 'Estedad Bold',
                'IranYekan-Regular': 'IranYekan Regular',
                'IranYekan-Medium': 'IranYekan Medium',
                'IranYekan-Bold': 'IranYekan Bold',
            },
            fontSize: {
                '2xs': ['0.8125rem', '1.5rem'],
                '2sm': ['0.9375rem', '1.375rem'],
            },
            boxShadow: {
                DEFAULT: '0 2px 14px rgb(0, 0, 0, 0.1)',
                'md': '0 4px 16px rgb(0, 0, 0, 0.1)'
            },
            content: {

            },
            container: {
                screens: {
                    DEFAULT: '1440px'
                },
                center: true,
                padding: {
                    lg: '1.875rem'
                }
            }
        },
    },
    plugins: [
        function ({addVariant}) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}

