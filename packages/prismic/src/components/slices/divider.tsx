import { Divider as ChakraDivider, Container, Center } from '@chakra-ui/react'
import { DividerSlice } from '../../types'

export const Divider = ({ primary }: DividerSlice) => {
  const { display_line: displayLine, size } = primary

  return (
    <Container as={Center} maxW="container.xl" h={sizeOptions[size]}>
      <ChakraDivider
        borderColor={displayLine ? 'secondary.100' : 'transparent'}
      />
    </Container>
  )
}

const sizeOptions = {
  default: '148px',
  small: '60px',
  large: '200px',
}
