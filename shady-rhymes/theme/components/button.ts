export const Button = {
  baseStyle: {
    fontWeight: '500',
    h: '44px',
    _hover: {
      bg: 'brand.40'
    }
  },

  sizes: {
    default: {
      px: '10px',
      minW: '100px',
      fontSize: '16px'
    }
  },

  variants: {
    default: {
      border: '1px solid #dbdbdb',
      bg: 'background.default',
      color: 'text.default',
      borderRadius: '10px',
      cursor: 'pointer'
    },

    close: {
      bg: 'transparent',
      color: 'text.default',
      _hover: {
        bg: 'brand.30'
      }
    }
  },

  defaultProps: {
    size: 'default',
    variant: 'default'
  }
};
