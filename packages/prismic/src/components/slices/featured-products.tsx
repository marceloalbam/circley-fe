import { useState, useMemo } from 'react'

import { Box, Heading, Container, Skeleton } from '@chakra-ui/react'

import { FeaturedProductsSlice } from '../../types'
import { useFeaturedProducts } from '../../hooks'
import {
  carouselAutoPlay,
  CarouselSlide,
  useCarousel,
  Carousel as CarouselWrapper,
  CarouselArrows,
  CarouselNavigation,
} from '@scope/ui'
import { ProductCard } from '../product-cartd'

const VISIBLE_ITEMS = 5
export const FeaturedProducts = ({ primary, items }: FeaturedProductsSlice) => {
  const { products, isLoading } = useFeaturedProducts({ items })
  const {
    title,
    layout,
    display_navigation: displayNavigation,
    display_arrows: displayArrows,
    display_line_behind_title: lineBehindTitle,
    transition_speed: carouselSpeed,
    is_autoplay: autoplay,
  } = primary
  const isWide = layout === 'wide'
  const [created, setCreated] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const hasOnlyOneSlide = products?.length && products?.length <= VISIBLE_ITEMS

  const [ref, slider] = useCarousel({
    options: {
      breakpoints: {
        '(min-width: 480px)': {
          slides: { perView: 2, spacing: 20 },
        },
        '(min-width: 768px)': {
          slides: { perView: 3, spacing: 20 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 4, spacing: 20 },
        },
        '(min-width: 1200px)': {
          slides: { perView: VISIBLE_ITEMS, spacing: 20 },
        },
      },
      slides: {
        perView: 1,
        spacing: 20,
      },
      loop: true,
      initial: 0,
      renderMode: 'performance',
      slideChanged: (slider) => setCarouselIndex(slider.track.details.rel),
      created: () => {
        setTimeout(() => setCreated(true), 200)
      },
    },
    plugin: [
      (sliderInstance) => {
        !hasOnlyOneSlide &&
          autoplay &&
          carouselAutoPlay(sliderInstance, carouselSpeed ?? 5000)
      },
    ],
  })
  // @ts-expect-error
  const slidesPerView = slider.current?.options.slides?.perView as number

  const dotItems = useMemo(() => {
    return slider.current
      ? slider.current?.slides
          .map((x, i) => i)
          .filter((i) => i % (slidesPerView ?? 1) === 0)
      : []
  }, [slidesPerView, slider])

  const handleIndexChange = (i: number) => {
    setCarouselIndex(i)
    slider?.current?.moveToIdx(i)
  }

  return (
    <Container
      maxW={isWide ? 'unset' : 'container.xl'}
      pb={{ base: '20px', lg: '40px' }}
    >
      {title && (
        <Heading
          mb="40px"
          textAlign="center"
          sx={lineBehindTitle ? titleWithLineStyles : undefined}
        >
          {title}
        </Heading>
      )}
      <Skeleton isLoaded={!isLoading} minH="300px">
        {Boolean(products?.length) && (
          <Box px="40px" w="100%" opacity={created ? '1' : '0'} pos="relative">
            <CarouselWrapper ref={ref}>
              {products?.map((item, index) => {
                return (
                  <CarouselSlide key={index}>
                    <ProductCard product={item} />
                  </CarouselSlide>
                )
              })}
            </CarouselWrapper>
            {!hasOnlyOneSlide && (
              <>
                {displayArrows && <CarouselArrows sliderInstance={slider} />}
                {displayNavigation && (
                  <CarouselNavigation
                    carouselIndex={carouselIndex}
                    carouselItems={dotItems}
                    slidesPerView={1}
                    handleChange={handleIndexChange}
                  />
                )}
              </>
            )}
          </Box>
        )}
      </Skeleton>
    </Container>
  )
}

const titleWithLineStyles = {
  display: 'flex',
  borderSpacing: '5px',
  '&:before, &:after': {
    borderTop: '1px solid',
    borderColor: 'secondary.300',
    content: `''`,
    display: 'table-cell',
    position: 'relative',
    top: '0.5em',
    flex: '1',
    minW: { base: 'unset', md: '50px' },
  },
  '&:before': { right: '5px' },
  '&:after': { left: '5px' },
}
