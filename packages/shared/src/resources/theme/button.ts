import { COLOR_MAP_PRIMARY } from '../../constants'

const baseSolid = (store: string) => {
  return {
    borderRadius: 'full',
    color: 'white',
    bg: `${store}.900`,
    _hover: {
      opacity: '0.8',
    },
  }
}

const baseOutline = (store: string) => {
  return {
    borderRadius: 'full',
    border: '2px solid',
    borderColor: `${store}.900`,
    color: `${store}.900`,
    _hover: {
      bg: `${store}.900`,
      color: 'white',
    },
    _active: {
      bg: `${store}.900`,
      color: 'white',
    },
    _disabled: {
      _hover: {
        color: `${store}.900`,
      },
    },
  }
}

const baseUnderline = (store: string) => {
  return {
    borderBottom: '2px solid',
    borderColor: `${store}.900`,
    minHeight: '10',
    transition: 'color ease-in-out 0.2s',
    color: 'currentColor',
    _hover: {
      color: `${store}.900`,
      textDecoration: 'none',
    },
  }
}

const basePrimary = {
  color: 'white',
  borderRadius: 'md',
  fontWeight: '600',
  letterSpacing: '2px',
  fontSize: '15px',
  textTransform: 'uppercase',
  px: '75px',
  _hover: {
    opacity: '0.7',
  },
}

const primary = (store: string) => {
  return {
    ...basePrimary,
    bg: COLOR_MAP_PRIMARY[store as string],
  }
}

export const Button = {
  baseStyle: {
    borderRadius: '0',
    fontWeight: 'semibold',
    fontFamily: 'body',
    maxW: '500px',
    whiteSpace: 'normal',
    lineHeight: '1.3',
    _focus: {
      boxShadow: 'none',
    },
    _disabled: {
      pointerEvents: 'none',
    },
  },
  variants: {
    primary: {
      bg: 'circley.300',
      ...basePrimary,
    },
    secondary: {
      bg: 'reinsman.300',
      color: 'white',
      borderRadius: 'md',
      fontWeight: '600',
      letterSpacing: '2px',
      fontSize: '15px',
      height: '45px',
      textTransform: 'uppercase',
      px: '75px',
      _hover: {
        bg: 'reinsman.400',
      },
    },
    highhorse: {
      bg: 'highhorse.400',
      color: 'white',
      borderRadius: 'md',
      fontWeight: '600',
      letterSpacing: '2px',
      fontSize: '15px',
      fontFamily: 'Roboto',
      height: '45px',
      textTransform: 'uppercase',
      px: '75px',
      _hover: {
        bg: 'highhorse.50',
      },
    },
    tucker: {
      bg: 'tucker.400',
      color: 'white',
      borderRadius: 'md',
      fontWeight: '600',
      letterSpacing: '2px',
      fontSize: '15px',
      height: '45px',
      textTransform: 'uppercase',
      px: '75px',
      _hover: {
        bg: 'tucker.200',
      },
    },
    'solid-default': {
      ...baseSolid('circley'),
    },
    'solid-highhorse': {
      ...baseSolid('highhorse'),
    },
    'solid-reinsman': {
      ...baseSolid('reinsman'),
    },
    'solid-tucker': {
      ...baseSolid('tucker'),
    },
    'outline-default': {
      ...baseOutline('circley'),
    },
    'outline-highhorse': {
      ...baseOutline('highhorse'),
    },
    'outline-reinsman': {
      ...baseOutline('reinsman'),
    },
    'outline-tucker': {
      ...baseOutline('tucker'),
    },
    'underline-default': {
      ...baseUnderline('circley'),
    },
    'underline-highhorse': {
      ...baseUnderline('highhorse'),
    },
    'underline-reinsman': {
      ...baseUnderline('reinsman'),
    },
    'underline-tucker': {
      ...baseUnderline('tucker'),
    },
    'primary-default': { ...primary('circley') },
    'primary-circley': { ...primary('circley') },
    'primary-highhorse': { ...primary('highhorse') },
    'primary-reinsman': { ...primary('reinsman') },
    'primary-tucker': { ...primary('tucker') },
  },
  sizes: {
    md: {
      fontSize: 'sm',
      h: 10,
    },
    lg: {
      fontSize: { base: 'sm', lg: '18px' },
      h: 12,
    },
    xl: {
      h: 14,
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}
