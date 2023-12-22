export const Accordion = {
  baseStyle: {
    container: {
      _first: {
        borderTopWidth: '0',
        borderColor: 'secondary.150',
      },
    },
    button: {
      px: '0',
      py: '15px',
      fontWeight: 'light',
      color: 'secondary.400',
      _hover: {
        bg: 'transparent',
      },
    },
    icon: {
      color: 'secondary.200',
    },
    panel: {
      px: '0',
      fontSize: 'md',
      color: 'secondary.400',
    },
  },
  variants: {
    pdp: {
      container: {
        _last: {
          borderBottomWidth: '0',
        },
      },
      root: {
        borderTop: '1px solid',
        borderColor: 'gray.100',
      },
      button: {
        px: '0',
        py: 5,
        lineHeight: '1.2',
        fontSize: 'lg',
        fontWeight: '500',
        color: 'gray.800',
        _hover: {
          bg: 'transparent',
        },
      },
      icon: {
        color: 'gray.100',
      },
      panel: {
        p: 0,
        mb: 8,
        fontSize: 'md',
      },
    },
  },
}
