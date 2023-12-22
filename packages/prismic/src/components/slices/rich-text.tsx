import { RichText as PrismicRichText } from 'prismic-reactjs'
import { Box, Container } from '@chakra-ui/react'
import { RichTextSlice } from '../../types'

export const getSliceLayout = (layout: 'full' | 'standard' | 'narrow') => {
  return layout === 'full' ? 'unset' : layout === 'standard' ? '85%' : '75%'
}

export const RichText = ({ primary }: RichTextSlice) => {
  const {
    content,
    content_alignment: alignment,
    layout,
    inner_padding: innerPadding,
    bg_color: bgColor,
  } = primary
  const containerMaxW = getSliceLayout(layout)

  return (
    <Box
      py={`${innerPadding ?? 0}px`}
      bgColor={bgColor ?? 'unset'}
      textAlign={alignment}
      w="100%"
    >
      <Container maxW={{ base: '100%', md: containerMaxW }}>
        <Box sx={contentStyles}>{PrismicRichText.render(content)}</Box>
      </Container>
    </Box>
  )
}

export const contentStyles = {
  w: '100%',
  'h1, h2, h3, h4': {
    fontFamily: 'heading',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textTransform: 'uppercase',
  },
  a: {
    color: '#ef4123'
  },
  'h1, h2, h3, h4, h5, h6': {
    color: 'secondary.600',
  },
  h4: {
    letterSpacing: '2px',
    fontSize: '1.25rem',
  },
  p: {
    color: 'secondary.400',
    lineHeight: '1.5625rem',
    fontSize: 'md',
    '&:not(:last-of-type)': {
      mb: '1.85rem',
    },
  },
  '.embed': {
    width: '100%',
    maxWidth: '65%',
    margin: '0 auto',
    '> div': {
      width: '100%',
      position: 'relative',
      padding: '0 0 56.25%',
      height: 0,
      iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
    },
  },
}
