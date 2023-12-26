import Image from 'next/image'
import { Box, BoxProps } from '@chakra-ui/react'

export interface ImageBannerProps {
  rootProps?: Omit<BoxProps, 'children'>
  image?: {
    src?: string
    alt?: string
  }
  imageMobile?: {
    src?: string
    alt?: string
  }
}

export const ImageBanner = ({
  image,
  imageMobile,
  rootProps,
}: ImageBannerProps) => {
  if (!image?.src && !imageMobile?.src) {
    return null
  }

  return (
    <>
      <Box
        {...rootProps}
        position="relative"
        width="100%"
        height="300px"
        overflow="hidden"
        display={['none', 'none', 'block']}
      >
        <Image
          src={image?.src ?? imageMobile?.src ?? ''}
          alt={image?.alt ?? imageMobile?.alt ?? ''}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        {...rootProps}
        position="relative"
        width="100%"
        height="300px"
        overflow="hidden"
        display={['block', 'block', 'none']}
      >
        <Image
          src={imageMobile?.src ?? image?.src ?? ''}
          alt={imageMobile?.alt ?? image?.alt ?? ''}
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </>
  )
}
