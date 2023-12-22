import { Link as CoreLink } from '@wpro/magento/dist/ui/theme/link'

export const Link = {
  variants: {
    ...CoreLink.variants,
    primary: {
      borderBottom: '2px solid',
      borderColor: 'circley.300',
      pb: '5px',
      transition: 'color ease-in-out 0.2s',
      _hover: {
        color: 'circley.300',
        textDecoration: 'none',
      },
    },
    nav: {
      textTransform: 'uppercase',
      letterSpacing: '0.375px',
      color: 'circley.200',
      _hover: {
        textDecoration: 'none',
        color: 'circley.300',
      },
    },
    parentNav: {
      textTransform: 'uppercase',
      fontSize: 'lg',
      letterSpacing: '0.375px',
      color: 'circley.300',
      fontWeight: 'bold',
      _hover: {
        textDecoration: 'none',
        color: 'circley.300',
      },
    },
    childNav: {
      color: 'secondary.400',
      fontSize: '0.9375rem',
      letterSpacing: '0.375px',
      _hover: {
        textDecoration: 'none',
        color: 'circley.300',
      },
    },
    reinsmanNav: {
      color: 'reinsman.200',
      textTransform: 'uppercase',
      letterSpacing: '0.375px',
      _hover: {
        textDecoration: 'none',
        color: 'turquoise.200',
      },
    },
    reinsmanChildNav: {
      color: 'reinsman.200',
      fontSize: '0.9375rem',
      letterSpacing: '0.375px',
      _hover: {
        textDecoration: 'none',
        color: 'turquoise.200',
      },
    },
    reinsmanParentNav: {
      color: 'reinsman.100',
      fontSize: 'lg',
      textTransform: 'capitalize',
      letterSpacing: '0.375px',
      fontWeight: 'bold',
      _hover: {
        textDecoration: 'none',
        color: 'turquoise.200',
      },
    },
    highHorseNav: {
      fontFamily: 'highHorse',
      color: 'highhorse.300',
      textTransform: 'uppercase',
      letterSpacing: '0.375px',
      _hover: {
        textDecoration: 'none',
        color: 'highhorse.400',
      },
    },
    highHorseParentNav: {
      color: 'highhorse.600',
      fontSize: 'lg',
      fontFamily: 'highHorse',
      textTransform: 'capitalize',
      letterSpacing: '0.375px',
      fontWeight: 'bold',
      _hover: {
        textDecoration: 'none',
        color: 'highhorse.400',
      },
    },
    highHorseChildNav: {
      color: 'highhorse.300',
      fontSize: '0.9375rem',
      fontFamily: 'highHorse',
      letterSpacing: '0.375px',
      _hover: {
        textDecoration: 'none',
        color: 'highhorse.400',
      },
    },
    tuckerNav: {
      color: 'tucker.300',
      textTransform: 'uppercase',
      letterSpacing: '0.375px',
      _hover: {
        textDecoration: 'none',
        color: 'tucker.400',
      },
    },
    tuckerParentNav: {
      color: 'tucker.300',
      fontSize: 'lg',
      textTransform: 'capitalize',
      letterSpacing: '0.375px',
      fontWeight: 'bold',
      _hover: {
        textDecoration: 'none',
        color: 'tucker.400',
      },
    },
    tuckerChildNav: {
      color: 'tucker.300',
      fontSize: '0.9375rem',
      letterSpacing: '0.375px',
      _hover: {
        textDecoration: 'none',
        color: 'tucker.400',
      },
    },
  },
}
