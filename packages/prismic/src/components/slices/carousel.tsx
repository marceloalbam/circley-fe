import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

import { useState } from 'react'
import {
  Box,
  Center,
  Heading,
  Text,
  Container,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CarouselSlice } from '../../types'
import { carouselAutoPlay, CarouselSlide, useCarousel } from '@scope/ui'
import { CarouselWrapper } from '@wpro/magento/dist/modules/rolex/components/RolexModelPage/styled'

export const Carousel = ({ primary, items }: CarouselSlice) => {
  const [created, setCreated] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const speed = 5000
  const hasOnlyOneSlide = items.length === 1
  const {
    autoplay,
    display_arrows: displayArrows,
    display_dots: displayDots,
    content_max_width: contentMaxWidth,
    display_bg: displayBg,
  } = primary

  const [ref, slider] = useCarousel({
    options: {
      slides: {
        perView: 1,
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
        autoplay && !hasOnlyOneSlide && carouselAutoPlay(sliderInstance, speed)
      },
    ],
  })

  const handleIndexChange = (i: number) => {
    setCarouselIndex(i)
    slider?.current?.moveToIdx(i)
  }

  return (
    <Container maxW="container.xl">
      {Boolean(items.length) && (
        <Box w="100%" opacity={created ? '1' : '0'} pos="relative">
          <CarouselWrapper ref={ref}>
            {items.map((item, i) => {
              const { image, title, content } = item
              return (
                <CarouselSlide
                  key={i}
                  bgImage={
                    displayBg ? 'url(./images/carousel-bg.webp)' : undefined
                  }
                  p="40px"
                >
                  <Center
                    flexDirection="column"
                    maxW={contentMaxWidth ? `${contentMaxWidth}px` : undefined}
                    mx={contentMaxWidth ? 'auto' : undefined}
                  >
                    {image.url && (
                      <Image
                        src={image.url}
                        alt={image.alt ?? ''}
                        width={image.dimensions?.width}
                        height={image.dimensions?.height}
                      />
                    )}
                    {title && <Heading mb="15px">{title}</Heading>}
                    {Boolean(content.length) && (
                      <Text textAlign="center">{RichText.render(content)}</Text>
                    )}
                  </Center>
                </CarouselSlide>
              )
            })}
          </CarouselWrapper>
          {displayDots && (
            <HStack className="dots" spacing="6px" justify="center" mt="40px">
              {slider?.current?.track?.details?.slides?.map((slider, i) => {
                const isActive = carouselIndex === i
                return (
                  <Box
                    key={i}
                    w="14px"
                    h="14px"
                    border="1px solid"
                    borderColor="secondary.100"
                    borderRadius="50%"
                    cursor="pointer"
                    background={isActive ? 'secondary.900' : 'transparent'}
                    onClick={() => handleIndexChange(i)}
                  />
                )
              })}
            </HStack>
          )}
          {displayArrows && (
            <>
              <IconButton
                icon={<FaChevronLeft />}
                aria-label="Prev"
                variant="ghost"
                onClick={() => slider.current?.prev()}
                sx={arrowStyles}
                left="0"
              />
              <IconButton
                icon={<FaChevronRight />}
                aria-label="Next"
                variant="ghost"
                onClick={() => slider.current?.next()}
                sx={arrowStyles}
                right="0"
              />
            </>
          )}
        </Box>
      )}
    </Container>
  )
}

const faderStyles = {
  position: 'relative',
  overflow: 'hidden',
  h: '300px',
  '.fader__slide': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
  },
}

const arrowStyles = {
  pos: 'absolute',
  top: '45%',
  bg: 'whiteAlpha.700',
  w: '60px',
  h: '60px',
  color: 'secondary.400',
  _hover: {
    bg: 'whiteAlpha.700',
  },
  svg: {
    w: '30px',
    h: '30px',
  },
}
