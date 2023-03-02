export const Input = {
  baseStyle: {
    field: {
      borderRadius: '30px',
      border: '2px',
      borderColor: 'text.reversal',
      pl: '10px',
      color: 'text.reversal',
      bg: ''
    }
  },

  sizes: {
    default: {
      field: {
        w: '360px',
        h: '60px'
      }
    }
  },

  variants: {
    outline: {
      field: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400'
      }
    }
  },

  defaultProps: {
    size: 'default',
    variant: 'outline'
  }
};
