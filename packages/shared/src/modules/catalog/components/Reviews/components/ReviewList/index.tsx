import React from 'react'
import { FormattedDate } from 'react-intl'
import { RatingStars } from '../RatingStars'
import { Box, Heading, Stack, StackDivider, Skeleton } from '@chakra-ui/react'
import { Maybe, Review } from '@wpro/magento/dist/types/magento/schema'

interface Prop {
  reviewList: Maybe<Maybe<Review>[]> | undefined
  isLoading: boolean
}

export const ReviewList = ({ reviewList, isLoading }: Prop) => {
  if (isLoading) {
    return (
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '10px', lg: '30px' }}
      >
        <Skeleton w={{ base: '100%', lg: '25%' }} />
        <Skeleton />
      </Stack>
    )
  }

  return (
    <Stack
      direction="column"
      spacing="24px"
      divider={<StackDivider borderColor="gray.50" />}
      pb={{ base: '80px', lg: '110px' }}
      mb={{ base: '80px', lg: '110px' }}
      mt="30px"
      borderBottomWidth="1px"
      borderBottomColor="gray.100"
    >
      {reviewList?.map((review: any, i: number) => {
        const {
          nickname,
          created_at: createdAt,
          detail,
          title,
          rating_votes: ratingVotes,
        } = review

        const rating = ratingVotes[0]?.value ?? ''
        const dateNumber = new Date(createdAt)

        return (
          <Stack
            key={i}
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '10px', lg: '30px' }}
          >
            <Box
              className="review__overview"
              w={{ base: '100%', lg: '25%' }}
              flex={1}
            >
              <Heading as="h4" size="sm" mb="25px">
                {title}
              </Heading>
              <RatingStars ratingCount={rating} />
            </Box>
            <Box className="review__content" flex={2}>
              <p className="review__detail">{detail}</p>
              <Stack
                direction="row"
                divider={<Box borderLeftColor="gray.100" />}
                spacing="16px"
                mt="30px"
              >
                <p className="review__name">
                  <strong>{nickname}</strong>
                </p>
                <p className="review__date">
                  <FormattedDate
                    value={dateNumber}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </p>
              </Stack>
            </Box>
          </Stack>
        )
      })}
    </Stack>
  )
}
