module.exports = {
  theme: {
    themeVariants: ['dark'],
    inset: {
      '0': 0,
      auto: 'auto',
      '1/8': '12.5%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    extend: {
      colors: {
        blue: {
          100: '#EBF2FD',
          200: '#CDDFFA',
          300: '#AFCBF6',
          400: '#72A5F0',
          500: '#367EE9',
          600: '#3171D2',
          700: '#204C8C',
          800: '#183969',
          900: '#102646',
        },
        monochrome: {
          900: '#333',
          800: '#444',
          700: '#666',
          600: '#999',
          500: '#ddd',
          400: '#eee',
          300: '#f3f3f3',
          200: '#f8f8f8',
          100: '#fff',
        },
      },
      fontFamily: {
        header: ['Inter'],
        body: ['Muli'],
      },
    },
  },
  variants: {},
};
