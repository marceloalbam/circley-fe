import React from 'react'
import 'react-rater/lib/react-rater.css'
import { Box, BoxProps, Link } from '@chakra-ui/react'
import { useReviews } from '@wpro/magento/dist/core/hooks'
import { RatingStars } from './RatingStars'

interface Props extends BoxProps {
  store?: string
  ratingCount?: number
  handleClick?: () => void
  productId: number
}

export const ReviewSummary = ({
  store = 'default',
  ratingCount,
  handleClick,
  productId,
  ...boxProps
}: Props) => {
  const { reviewList } = useReviews(productId)
  const reviewsCount = reviewList?.length
  const getAverage = () => {
    let sum = 0
    reviewList?.forEach((review) => {
      sum += review?.rating_votes?.[0]?.value ?? 0
    })

    return sum / (reviewList?.length ?? 0)
  }
  const averageRating = getAverage()

  return (
    <Box display="flex" alignItems="center" gap={3} {...boxProps}>
      <RatingStars ratingCount={averageRating} isInteractive={false} />
      <Box d="flex" alignItems="center" gap={2} fontSize="md">
        <Link onClick={handleClick}>{reviewsCount ?? 0} Reviews</Link>
        <Box as="span" color="gray.100">
          |
        </Box>
        <Link onClick={handleClick}>Add Your Review</Link>
      </Box>
    </Box>
  )
}
