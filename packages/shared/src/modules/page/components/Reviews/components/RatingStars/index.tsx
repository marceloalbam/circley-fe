import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Box, BoxProps } from '@chakra-ui/react'
import { COLOR_MAP_PRIMARY } from '../../../../../../constants'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props extends BoxProps {
  store?: string
  ratingCount?: number
  isInteractive?: boolean
  onRate?: (rate: any) => void
  ratingPercentage?: number
  reviewsCount?: number
}

export const RatingStars = ({
  store = 'default',
  ratingCount,
  isInteractive = false,
  onRate,
  ratingPercentage,
  reviewsCount,
  ...boxProps
}: Props) => {
  const StarsTotal = 5
  const rating = ratingCount
  const { storeView } = useCoreContext()

  return (
    <Box
      d="flex"
      alignItems="center"
      py="7px"
      {...boxProps}
      sx={{
        '.react-rater': {
          '> div': {
            mr: '2px',
          },
        },
        '.react-rater-star': {
          fontSize: '2xl',
          color: 'gray.100',
          letterSpacing: '-2px',
          lineHeight: '0',
          '&.is-active, &.will-be-active': {
            color: COLOR_MAP_PRIMARY[storeView as string],
          },
          '&.is-disabled:not(.is-active)': {
            color: 'gray.100',
          },
        },
      }}
    >
      <Rater
        total={StarsTotal}
        rating={rating}
        interactive={isInteractive}
        onRate={onRate}
      />
    </Box>
  )
}
