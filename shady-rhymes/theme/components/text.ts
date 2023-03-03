export const Text = {
  baseStyle: {
    color: 'text.default',
    fontWeight: '400'
  },

  sizes: {
    tiny: {
      fontSize: '12px',
      lineHeight: '18px'
    },
    small: {
      fontSize: '14px',
      lineHeight: '28px'
    },
    medium: {
      fontSize: '18px',
      lineHeight: '36px'
    },
    large: {
      fontSize: '24px',
      lineHeight: '48px'
    }
  },

  variants: {
    default: {
      color: 'text.reversal'
    },
    helper: {
      color: 'text.helper'
    },
    footer: {
      color: 'text.primary'
    }
  },

  defaultProps: {
    size: 'small'
  }
};
