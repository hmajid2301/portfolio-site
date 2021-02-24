const config = require('./src/config/config.json');

module.exports = {
  theme: {
    extend: {
      inset: {
        0: 0,
        auto: 'auto',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      fontSize: {
        xxl: '10rem',
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '3/4-screen': '75vh',
      },
      height: {
        80: '30rem',
      },
      screens: {
        '2xl': '1580px',
      },
      colors: {
        primary: config.siteData.primary,
        'primary-alt': config.siteData['primary-alt'],
        secondary: 'var(--secondary)',
        darkGray: '#4E4E55',
        main: 'var(--main)',
        background: 'var(--background)',
        'background-alt': 'var(--background-alt)',
        header: 'var(--header)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        header: ['Fira Sans'],
        body: ['Poppins'],
        code: ['Fira Code'],
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.mdx',
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/**.ts',
  ],
  variants: {},
};
