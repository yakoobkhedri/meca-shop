/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.html"],
    theme: {
        extend: {
            backgroundImage: {
                'main': "url('../../dist/img/main_bg.png')",
                'banner': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);'
            },
            colors: {
                'primary': '#8e4868',
                'secondary': '#f5d6ea',
                'customgray': '#929292',
                'light': '#444',
                'info': '#2DB5C2',
                'info2': 'rgb(28, 139, 150)',
                'info3': 'rgb(215, 241, 243)',
                'footer': '#F2F2F2',
                'pay': '#F9F9F9',
                'firozei': '#0B5961',
                'dark': '#212121',
                'black2': '#212121',
                'searchbox': '#F5F5F5',
                'gray20': '#CCC',
                'gray75': '#757575',
                'gray60': '#666666',
                'gray42': '#424242',
                'gray200': '#EEE',
                'gray400': '#BDBDBD',
                'danger': '#EC4C4C',
                'error': '#CC1D33',
                'line': '#E6E6E6',
                'pink': '#fdeded',
                'gray61': '#616161',
                'gray2': '#FAFAFA',
                'gray300': '#E0E0E0',
                'checkborder': '#B2B2B2',
                'basegreen': '#31B04D',
                'success': '#22A958',
                'success2': '#EAF7ED',
                'yellow2': '#FFFAE6',
                'baseyellow': '#FFC909',
                'toggle': '#9E9E9E',
                'gray99': '#999',
                'green': '#ADDFB8',
                'gray66': '#666',
                'skyd5':'#D5F0F3',
                'gray33':'#333747',
                'gray69':'#666975',
                'primary10':'#EAF8F9'
            },
            borderWidth: {
                '1': '1.5px'
            },
            boxShadow: {
                '3xl': '0px 10px 24px 0px rgba(163, 163, 163, 0.15)',
                'header': '0px 4px 15px 0px rgba(188, 188, 188, 0.15)',
                'button': '0px 0px 15px 0px rgba(90, 90, 90, 0.15)',
                'shadowMenu': '0px 0px 4px 0px rgba(0, 0, 0, 0.20)',
            },
            borderRadius: {
                '4px': '4px',
                '4xl': '35px',
                '32':'2rem',
                '77':'77px'
            },
            fontSize: {
                'tiny': '10px',
                '44': '44px',
                '32':'2rem'
            },
            width: {
                '22': '88px',
                '25': '100px',
                '50': '198px',
                '58': '234px',
                '68': '276px',
                '100': '400px',
                '992': '992px',
                '1176': '1176px'
            },
            maxWidth: {
                '472': '472px',
                '624': '624px',
                '890': '890px',
                '936': '936px',
                '992': '992px',
                '1176': '1176px'
            },
            maxHeight: {
                '890': '890px',
            },
            height: {
                '18': '72px',
                '22': '88px',
                '50': '198px',
                '68': '274px',
                '84': '330px',
                '90': '363px',
                '100': '400px',
                '484': '484px',
                '504': '504px',
                '520': '520px',
                '590': '590px',
                '598': '598px',
            },
            margin: {
                '15': '60px',
                '18': '72px',
                '22': '86px',
                '30': '124px'
            },
            inset: {
                '46': '186px',
                '900': '900px',
                '1200': '1200px',
            },
            padding: {
                '10px': '10px'
            }
        }
    },
    plugins: [
        // ...
        require('tailwind-scrollbar'),
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}

