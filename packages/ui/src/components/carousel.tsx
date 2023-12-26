import { forwardRef, MutableRefObject } from 'react'
import {
  KeenSliderOptions,
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
  KeenSliderHooks,
} from 'keen-slider/react'
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Button,
  ButtonProps,
  HStack,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const Carousel = forwardRef<HTMLDivElement, FlexProps>(function Carousel(
  props,
  ref
) {
  return (
    <Flex
      ref={ref}
      className="chakra-carousel"
      overflow="hidden"
      position="relative"
      userSelect="none"
      {...props}
    />
  )
})

export const CarouselSlide = (props: BoxProps) => (
  <Box
    className="chakra-carousel__slide"
    position="relative"
    overflow="hidden"
    minH="100%"
    {...props}
  />
)

interface CarouselArrowsProps extends ButtonProps {
  sliderInstance?: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
}
export const CarouselArrows = (props: CarouselArrowsProps) => {
  const slider = props.sliderInstance?.current
  return (
    <>
      <Button
        className="chakra-carousel__arrows arrow-left"
        left="15px"
        onClick={() => {
          slider?.moveToIdx(
            // @ts-expect-error
            slider?.track.details.rel - slider.options.slides?.perView
          )
        }}
        {...arrowStyles}
        {...props}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        className="chakra-carousel__arrows arrow-right"
        right="15px"
        onClick={() => {
          slider?.moveToIdx(
            // @ts-expect-error
            slider.track.details.rel + slider.options.slides?.perView
          )
        }}
        {...arrowStyles}
        {...props}
      >
        <ChevronRightIcon />
      </Button>
    </>
  )
}

const arrowStyles: ButtonProps = {
  position: 'absolute',
  top: '45%',
  variant: 'ghost',
  size: 'sm',
  px: '0',
  sx: {
    svg: {
      w: '25px',
      h: '25px',
    },
  },
  _hover: {
    opacity: '0.8',
    bg: 'transparent',
  },
}

interface CarouselNavigationProps extends BoxProps {
  carouselItems: number[]
  carouselIndex: number
  handleChange: (i: number) => void
  slidesPerView: number
}

export const CarouselNavigation = ({
  carouselItems,
  handleChange,
  carouselIndex,
  slidesPerView,
  ...boxProps
}: CarouselNavigationProps) => {
  return (
    <HStack
      className="dots"
      spacing="6px"
      justify="center"
      mt="40px"
      {...boxProps}
    >
      {carouselItems.map((item, i) => {
        const isActive =
          carouselIndex >= item && carouselIndex <= item + (slidesPerView - 1)
        return (
          <Box
            key={i}
            w="12px"
            h="12px"
            borderRadius="50%"
            cursor="pointer"
            background={isActive ? 'turquoise.400' : 'turquoise.300'}
            onClick={() => handleChange(item)}
          />
        )
      })}
    </HStack>
  )
}

export interface carouselProps {
  options?: KeenSliderOptions
  plugin?: KeenSliderPlugin[]
}
export const useCarousel = ({ options, plugin }: carouselProps) => {
  const defaultOptions = { selector: '.chakra-carousel__slide' }
  return useKeenSlider<HTMLDivElement>(
    { ...defaultOptions, ...options },
    plugin
  )
}

export const carouselAutoPlay = (slider: any, speed: number) => {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false
  function clearNextTimeout() {
    clearTimeout(timeout)
  }
  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider?.next()
    }, speed)
  }
  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on('dragStarted', clearNextTimeout)
  slider.on('animationEnded', nextTimeout)
  slider.on('updated', nextTimeout)
}
