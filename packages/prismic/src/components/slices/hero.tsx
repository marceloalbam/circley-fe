import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box, Heading, Button, BoxProps } from '@chakra-ui/react'
import { HeroHomeSlice } from '../../types'
import {
  carouselAutoPlay,
  CarouselSlide,
  useCarousel,
  Carousel as CarouselWrapper,
  CarouselArrows,
  CarouselNavigation,
} from '@scope/ui'
import { useMemo, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

export interface HeroProps extends HeroHomeSlice {
  carouselRootProps?: BoxProps
}

export const Hero = ({ primary, items, carouselRootProps }: HeroProps) => {
  const [created, setCreated] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const hasOnlyOneSlide = items.length <= 1

  const {
    display_navigation: displayNavigation,
    transition_speed: speed,
    is_autoplay: autoplay,
    display_arrows: displayArrows,
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
        !hasOnlyOneSlide &&
          autoplay &&
          carouselAutoPlay(sliderInstance, speed ?? 3000)
      },
    ],
  })

  const dotItems = useMemo(() => {
    return slider.current
      ? slider.current?.slides.map((x, i) => i).filter((i) => i % 1 === 0)
      : []
  }, [slider.current])

  const handleIndexChange = (i: number) => {
    setCarouselIndex(i)
    slider?.current?.moveToIdx(i)
  }

  return Boolean(items.length > 1) ? (
    <Box
      w="100%"
      opacity={created ? '1' : '0'}
      pos="relative"
      {...carouselRootProps}
    >
      <CarouselWrapper ref={ref}>
        {items?.map((item, index) => {
          return (
            <CarouselSlide key={index}>
              <HeroItem {...item} />
            </CarouselSlide>
          )
        })}
      </CarouselWrapper>
      {displayArrows && (
        <CarouselArrows sliderInstance={slider} color="white" />
      )}
      {displayNavigation && (
        <CarouselNavigation
          carouselIndex={carouselIndex}
          carouselItems={dotItems}
          slidesPerView={1}
          handleChange={handleIndexChange}
          pos="absolute"
          bottom="10px"
          left="0"
          w="100%"
        />
      )}
    </Box>
  ) : (
    <HeroItem {...items[0]} />
  )
}

const HeroItem = (props: HeroHomeSlice['items'][0]) => {
  const {
    title,
    title_alignment: titleAlignment,
    title_color: titleColor,
    subtext,
    subtext_alignment: subtextAlignment,
    subtext_color: subtextColor,
    link_text: linkText,
    link_url: linkUrl,
    link_type: linkType,
    main_image: mainImage,
    content_placement: contentPlacement,
    cta_alignment: ctaAlignment,
    cta_text_color: ctaTextColor,
  } = props
  const { storeView } = useCoreContext()

  return (
    <Flex
      className="hero-home"
      minH={{ base: '420px', lg: '520px' }}
      w="100%"
      h="100%"
      pos="relative"
      _before={{
        content: `''`,
        pos: 'absolute',
        top: '0',
        left: '0',
        w: '100%',
        h: '100%',
        bgColor: 'blackAlpha.300',
        zIndex: '1',
      }}
    >
      {mainImage.url && (
        <Image
          src={mainImage.url}
          alt={mainImage.alt ?? ''}
          layout="fill"
          objectFit="cover"
          objectPosition="64%"
        />
      )}
      <Flex
        w={{ base: '90vw', md: '80vw' }}
        mx="auto"
        pos="relative"
        zIndex="2"
      >
        <Box
          h="100%"
          w="100%"
          display="flex"
          {...placementOptions[contentPlacement]}
        >
          <Box
            maxW="550px"
            p="30px 10px"
            textAlign={ctaAlignment}
            sx={{
              '> *': {
                fontWeight: 'semibold',
              },
            }}
          >
            {title && (
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textShadow={{
                  base: '0 0 16px black',
                  lg: '0 0 16px rgb(0 0 0 / 10%)',
                }}
                mb="20px"
                textAlign={titleAlignment}
                color={titleColor ?? 'white'}
              >
                {title}
              </Heading>
            )}
            {Boolean(subtext.length) && (
              <Box
                fontSize="xl"
                lineHeight="30px"
                mb="60px"
                textTransform="none"
                textAlign={subtextAlignment}
                color={subtextColor ?? 'white'}
              >
                {RichText.render(subtext)}
              </Box>
            )}
            {linkUrl && linkText && (
              <Link href={linkUrl} passHref>
                <Button
                  as="a"
                  variant={`${linkType}-${storeView}`}
                  fontWeight="semibold"
                  size="lg"
                  color={ctaTextColor ?? 'white'}
                >
                  {linkText}
                </Button>
              </Link>
            )}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export const placementOptions = {
  'top-left': {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  'top-center': {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  'top-right': {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  'center-left': {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  'center-center': {
    justifyContent: 'center',
    alignItems: 'center',
  },
  'center-right': {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  'bottom-left': {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  'bottom-center': {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  'bottom-right': {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
}
