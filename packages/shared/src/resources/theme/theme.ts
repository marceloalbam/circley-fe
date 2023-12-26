import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme, ThemeInterface } from '@wpro/magento/dist/ui'
import { Button } from './button'
import { Heading } from './heading'
import { Link } from './link'
import { Tabs } from './tabs'
import { Text } from '@wpro/magento/dist/ui/theme/text'
import { Checkbox } from '@wpro/magento/dist/ui/theme/checkbox'
import { Drawer } from './drawer'
import { Accordion } from './accordion'
import { Container } from './container'

const fonts = {
  body: 'Muli, Helvetica, sans-serif',
  heading: "'Roboto Slab', Helvetica, sans-serif",
  highHorse: 'Roboto, Muli, sans-serif',
  reinsman: "'SortsMillGoudy', Helvetica, sans-serif",
  tucker: "'BreeSerif', Helvetica, sans-serif",
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const fontSizes = {
  md: '0.9375rem',
}

const sizes = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
}

const colors = {
  primary: {
    50: '#f2f2ef',
    100: '#fff',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  secondary: {
    50: '',
    100: '#dadad7',
    150: '#c9c9c9',
    200: '#b5b5b1',
    300: '#59463f',
    400: '#6b6b68',
    500: '#6d605b',
    600: '#434341',
    700: '',
    800: '',
    900: '#1c1918',
  },
  gray: {
    50: '#F5F4F0',
    100: '#E0E0E0',
    150: '#9D928E',
    200: '#59463f',
    300: '#ccc',
    400: '#c2c5c8',
    500: '#aaa',
    600: '#707070',
    700: '#4C4C4C',
    800: '#333',
    900: '',
  },
  turquoise: {
    50: '',
    100: '',
    200: '#1dada5',
    300: '#9ee3df',
    400: '#71c7c2',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  default: {
    50: '',
    100: '',
    200: '#1a1a1a',
    300: '#ef4123',
    400: '#71c7c2',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '#ef4123',
  },
  circley: {
    50: '',
    100: '',
    200: '#1a1a1a',
    300: '#ef4123',
    400: '#71c7c2',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '#ef4123',
  },
  reinsman: {
    50: '',
    100: '#ca0e3d',
    200: '#59463f',
    300: '#e31921',
    400: '#be060d',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '#1dada5',
  },
  highhorse: {
    50: '#e4e1c7',
    100: '#49a69d',
    200: '#624946',
    300: '#3c1612',
    400: '#dc6145',
    500: '#575757',
    600: '#50a49c',
    700: '',
    800: '',
    900: '#dc6145',
  },
  tucker: {
    50: '',
    100: '#b2b2af',
    200: '#313b6e',
    300: '#59463f',
    400: '#853149',
    500: '#9e1c4d',
    600: '',
    700: '',
    800: '',
    900: '#853149',
  },
}

const styles = {
  global: {
    html: {
      '-webkit-font-smoothing': 'unset',
    },
  },
}

const components = {
  Accordion,
  Button,
  Heading,
  Link,
  Text,
  Checkbox,
  Drawer,
  Tabs,
  Container,
}

export const appTheme = {
  // This is PWAThemeInterface type
  breakpoints,
  colors,
  styles,
  fontSizes,
  components,
  sizes,
  fonts,
}

export const theme = extendTheme(appTheme)

export type AppThemeInterface = ThemeInterface & typeof appTheme

declare module '@emotion/react' {
  export interface Theme extends AppThemeInterface {}
}
