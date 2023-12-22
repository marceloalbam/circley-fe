import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { ImageSliderSlice } from '../../types'
import { IMAGE_PLACEHOLDER } from '../../../../shared'

export const ImageSlider = ({ items }: ImageSliderSlice) => {
  return (
    <Box borderWidth="1px" width="100%">
      <Box display="flex" width="100%">
        {items.map((element) => {
          const {
            image_slider_title: title,
            image_slider_description: description,
            image_slider_image: image,
          } = element

          return (
            <Box key={image.url} width="100%">
              <Text>{title}</Text>
              {description && (
                <Text>
                  <small>{description}</small>
                </Text>
              )}
              <Image
                src={image.url ?? IMAGE_PLACEHOLDER}
                width={image.dimensions?.width ?? 200}
                height={image.dimensions?.height ?? 200}
                alt={image.alt ?? ''}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
