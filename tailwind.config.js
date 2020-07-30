const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'title': ["Druk Text Wide"],
      "syne": ["Syne", "sans serif"],
      "syne-bold": ["Syne", "sans serif", "bold"]
    },
    textColor: {
      'black': '#000000',
      'white': '#FFFFFF',
      'yellow': '#FFD600',
      'gray': {
        100: '#00000066',
        200: '#0202026a',
        300: '#78909C',
        400: '#7B7B7B'
      },
    },
    backgroundColor: {
      'black': '#000000',
      'white': '#FFFFFF',
      'yellow': '#FFD600',
      'test': '#000',
      'gray': {
        100: '#00000066',
        200: '#0202026a',
        300: '#78909C',
        400: '#7B7B7B'
      },
    },
    extend: {
      fontSize: {
        'title': '90px',
        'sub-text': '24.5px'
      },
    },
  },
  variants: {
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn': {
          fontFamily: "Syne",
          width: '50%',
          fontSize: "22px",
          fontWeight: '600',
          padding: "2rem",
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          color: '#000',
          '&:hover': {
            backgroundColor: '#aaa'
          },
          cursor: 'pointer'
        },
        '.active': {
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#666'
          },
        },
      }

      addComponents(buttons)
    })
  ],

}
