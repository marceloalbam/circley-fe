import { InstagramGallery } from 'instagram-gallery'
import { Box, Heading, Text, BoxProps } from '@chakra-ui/react'
import { InstagramFeedSlice } from '../../types'
import React from 'react'
import { ErrorBoundary } from '@scope/shared'

export const InstagramFeed = ({ primary }: InstagramFeedSlice) => {
  const {
    title,
    text_before_title: textBeforeTitle,
    token,
    image_count: count,
  } = primary

  if (!token) {
    return null
  }

  return (
    <Box w="full" textAlign="center">
      {textBeforeTitle && (
        <Text
          as="h6"
          textTransform="uppercase"
          mb="5px"
          fontSize="lg"
          lineHeight="1.5"
          color="secondary.400"
        >
          {textBeforeTitle}
        </Text>
      )}
      {title && (
        <Heading mb="25px" color="secondary.600">
          {title}
        </Heading>
      )}
      <Box sx={feedStyles}>
        <ErrorBoundary>
          <InstagramGallery accessToken={token} count={count ?? 6} />
        </ErrorBoundary>
      </Box>
    </Box>
  )
}

const feedStyles: BoxProps['sx'] = {
  '.instagram': {
    '&-gallery': {
      display: 'grid',
      gridTemplateColumns: { base: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' },
      gridGap: '24px',
    },
    '&-item': {
      'img, video': {
        aspectRatio: '1',
      },
    },
  },
}
