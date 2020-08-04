module.exports = {
  theme: {
    extend: {
      inset: {
        '0': 0,
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
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      minHeight: {
        '0': '0',
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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        main: 'var(--main)',
        background: 'var(--background)',
        'secondary-background': 'var(--secondary-background)',
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
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/**.ts',
  ],
  variants: {},
};
