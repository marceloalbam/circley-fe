import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Link as ChakraLink,
  Container,
  AspectRatio,
  Flex,
  Button,
} from '@chakra-ui/react'
import { TwoColumnsSlice } from '../../types'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
export const TwoColumns = ({ primary }: TwoColumnsSlice) => {
  const {
    image,
    link_url: linkUrl,
    link_label: linkLabel,
    content,
    title,
    text_before_title: textBeforeTitle,
    align_image_right: alignImageRight,
    content_alignment: alignment,
    cta_type: ctaType,
    image_shadow_color: imageShadowColor,
    bg_image: bgImage,
    display_default_bg: displayDefaultBg,
    cta_text_color: ctaTextColor,
  } = primary
  const { storeView } = useCoreContext()
  return (
    <Box
      w="full"
      bg={`url(${bgImage.url}) no-repeat center / cover`}
      sx={displayDefaultBg ? bgStyles : undefined}
      pt="55px"
      pb="30px"
    >
      <SimpleGrid
        as={Container}
        columns={{ base: 1, md: 2 }}
        maxW="container.xl"
        spacing={{ base: '40px', md: '0' }}
        sx={alignImageRight ? alignImageRightStyles : undefined}
        alignItems="center"
      >
        <Box className="image">
          <AspectRatio
            ratio={
              (image.dimensions?.width ?? 1) / (image.dimensions?.height ?? 1)
            }
            w="78%"
            mx="auto"
            zIndex="1"
            _after={{
              content: `''`,
              position: 'absolute',
              top: '-25px',
              left: '-6.7%',
              width: '100%',
              height: '100%',
              backgroundColor: imageShadowColor ?? 'secondary.100',
              zIndex: '-1',
            }}
          >
            {image.url && (
              <Image
                src={image.url}
                alt={image.alt ?? ''}
                layout="fill"
                objectFit="cover"
                priority
              />
            )}
          </AspectRatio>
        </Box>
        <Box
          className="content"
          textAlign={alignment}
          px={{ base: '2vw', lg: '5vw' }}
        >
          {textBeforeTitle && (
            <Text
              as="h6"
              textTransform="uppercase"
              mb="10px"
              fontSize="lg"
              w="100%"
            >
              {textBeforeTitle}
            </Text>
          )}
          {title && (
            <Heading mb="30px" w="100%">
              {title}
            </Heading>
          )}
          {Boolean(content.length) && (
            <Text
              fontSize="lg"
              color="secondary.400"
              mb="20px"
              lineHeight="1.5"
            >
              {RichText.render(content)}
            </Text>
          )}
          {linkUrl && linkLabel && (
            <Link href={linkUrl} passHref>
              <Button
                as="a"
                variant={`${ctaType}-${storeView}`}
                fontSize="lg"
                color={ctaTextColor ?? undefined}
              >
                {linkLabel}
              </Button>
            </Link>
          )}
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export const alignImageRightStyles = {
  '.image': {
    gridColumn: { base: undefined, md: '2' },
  },
  '.content': {
    gridRow: { base: undefined, md: '1' },
    gridColumn: { base: undefined, md: '1' },
  },
}

const bgElement = {
  content: `''`,
  left: '0',
  right: '0',
  zIndex: '-1',
  display: 'block',
  pos: 'absolute',
}

const bgStyles = {
  pos: 'relative',
  zIndex: '1',
  _before: {
    ...bgElement,
    top: '-160px',
    mx: 'auto',
    bg: 'url(./images/bg-top.webp)',
    w: '680px',
    h: '770px',
  },
  _after: {
    ...bgElement,
    top: '0',
    w: '650px',
    h: '740px',
    bg: 'url(./images/bg-left.webp)',
  },
}
