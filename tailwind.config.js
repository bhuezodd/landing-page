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
        'title': '80px',
        'title-2': '75px',
        'title-3': '70px',
        'title-4': '60px',
        'title-5': '50px',
        'sub-text': '24.5px'
      },
      height: {
        's/9': '90vh',
        's/7': '70vh',
        's/6': '70vh',
        's/5': '50vh',
        's/3': '30vh',
      }
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
          fontWeight: '600',
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
      const buttons = {
        '.btn-pag': {
          fontFamily: "Syne",
          width: '20px',
          height: '20px',
          borderRadius: '5px',
          fontSize: "18px",
          fontWeight: '600',
          padding: "1.5rem",
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#000',
          '&:hover': {
            backgroundColor: '#000',
            color: '#FFD600',
          },
          '&.active': {
            backgroundColor: '#000',
            color: '#FFD600',
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
