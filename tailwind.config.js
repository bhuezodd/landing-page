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

    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
      'black': '#000000',
      'white': '#FFFFFF',
      'yellow': '#FFD600',
      'gray': {
        100: '#00000066',
        200: '#0202026a',
        300: '#78909C',
        400: '#7B7B7B'
      },
    }),
    backgroundColor: {
      'black': '#000000',
      'white': '#FFFFFF',
      'yellow': '#FFD600',
      'beige': '#FFF1BF',
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
        'title-2': '75px',
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
            backgroundColor: '#aaa',
            fill: '#fff'
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
    }),
    plugin(function ({ addComponents }) {
      const group = {
        '.control-input': {
          backgroundColor: '#000',
          borderRadius: '0.375rem',
          width: '100%',
          padding: '0.5rem',
          borderColor: '#fff',
          borderWidth: '1px',
          '&:focus': {
            borderColor: '#FFD600',
            outline: 'none'
          }

        },
      }

      addComponents(group)
    }),
    plugin(function ({ addComponents }) {
      const line = {
        '.line': {
          width: '100%',
          height: "1px",
          backgroundColor: '#FFD600',
          margin: '10px 0'
        },
      }

      addComponents(line)
    }),
  ],

}
