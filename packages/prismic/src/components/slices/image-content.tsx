import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import {
  Container,
  Text,
  Heading,
  AspectRatio,
  Flex,
  Button,
  Box,
} from '@chakra-ui/react'
import { ImageContentSlice } from '../../types'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

/* New Slice Name: Text Next to Image */
export const ImageContent = ({ primary }: ImageContentSlice) => {
  const {
    image,
    content,
    title,
    text_before_title: textBeforeTitle,
    align_image_right: alignImageRight,
    content_alignment: contentAlignment,
    cta_label: ctaLabel,
    cta_link: ctaLink,
    image_width: imageWidth,
    cta_type: ctaType,
  } = primary
  const { storeView } = useCoreContext()

  return (
    <Flex
      as={Container}
      flexDirection={{
        base: 'column',
        md: alignImageRight ? 'row-reverse' : 'row',
      }}
      maxW="container.xl"
      spacing={{ base: '40px', md: '24px' }}
      alignItems="center"
      py="30px"
    >
      <AspectRatio
        ratio={(image.dimensions?.width ?? 1) / (image.dimensions?.height ?? 1)}
        className="image"
        pos="relative"
        w={`${imageWidth ?? 50}%`}
      >
        {image.url && (
          <Image
            src={image.url}
            alt={image.alt ?? ''}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        )}
      </AspectRatio>
      <Box
        className="content"
        flex="1"
        p={{ base: '0', md: '50px 24px' }}
        textAlign={contentAlignment}
      >
        {textBeforeTitle && (
          <Text
            as="h6"
            mb="20px"
            fontSize="lg"
            w="100%"
            fontWeight="400 !important"
          >
            {textBeforeTitle}
          </Text>
        )}
        {title && (
          <Heading mb="40px" w="100%">
            {title}
          </Heading>
        )}
        {Boolean(content.length) && (
          <Text
            fontSize="lg"
            color="secondary.400"
            mb="20px"
            lineHeight="1.5"
            w="100%"
          >
            {RichText.render(content)}
          </Text>
        )}
        {ctaLabel && ctaLink && (
          <Link href={ctaLink} passHref>
            <Button as="a" variant={`${ctaType}-${storeView}`} w="auto">
              {ctaLabel}
            </Button>
          </Link>
        )}
      </Box>
    </Flex>
  )
}
