import { SearchBox as CoreSearchBox } from '@wpro/magento/dist/modules/shared'
import { Box, chakra } from '@chakra-ui/react'

export const SearchBox = () => {
  return (
    <Container>
      <CoreSearchBox />
    </Container>
  )
}

const Container = chakra(Box, {
  baseStyle: {
    p: '18px 10px',
    form: {
      pos: 'relative',
    },

    input: {
      d: 'block',
      w: '100%',
      h: '45px',
      color: 'secondary.600',
      fontSize: 'md',
      fontWeight: 'normal',
      lineHeight: '20px',
      p: '0 46px 0 16px',
      bg: 'primary.50',
      borderRadius: '5px',
      boxShadow: '1px 2px 0 var(--chakra-colors-secondary-150)',
      border: '1px solid transparent',
      _placeholder: {
        color: 'secondary.200',
      },
      _focus: {
        borderColor: 'secondary.600',
      },
    },

    button: {
      pos: 'absolute',
      top: 'calc(50% - 20px)',
      right: '8px',

      svg: {
        w: '16px',
        h: '16px',
        color: 'circley.300',
      },
    },
  },
})
