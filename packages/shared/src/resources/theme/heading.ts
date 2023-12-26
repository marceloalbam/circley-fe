import { Heading as CoreHeading } from '@wpro/magento/dist/ui/theme/heading'

export const Heading = {
  baseStyle: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  variants: {
    ...CoreHeading.variants,
    primary: {
      letterSpacing: { base: '2px', md: '2.5px' },
      lineHeight: '1.2',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
