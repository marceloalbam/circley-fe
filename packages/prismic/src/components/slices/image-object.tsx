import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import {
  Box,
  Container,
  Heading,
  Button,
  Link as ChakraLink,
  Stack,
  AspectRatio,
} from '@chakra-ui/react'
import { ImageObjectSlice } from '../../types'
import { IMAGE_PLACEHOLDER } from '../../../../shared'
import { contentStyles, getSliceLayout } from './rich-text'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

/* New Slice Name: Images with Centered Text Below */
export const ImageObject = ({ primary, items }: ImageObjectSlice) => {
  const {
    text_alignment: alignment,
    cta_label: ctaLabel,
    cta_link: ctaLink,
    cta_type: ctaType,
    section_subtitle: subtitle,
    section_title: title,
    layout,
  } = primary
  const containerMaxW = getSliceLayout(layout)
  const { storeView } = useCoreContext()

  return (
    <Container maxW={containerMaxW} mx="auto">
      {(title || ctaLabel || Boolean(subtitle.length)) && (
        <Box
          w="100%"
          textAlign={alignment}
          mb="40px"
          maxW="container.md"
          mx="auto"
        >
          {title && (
            <Heading as="h2" size="lg">
              {title}
            </Heading>
          )}
          {Boolean(subtitle.length > 0) && (
            <Box sx={contentStyles} my="15px">
              {RichText.render(subtitle)}
            </Box>
          )}
          {ctaLabel && ctaLink && (
            <Link href={ctaLink} passHref>
              <Button as="a" variant={`${ctaType}-${storeView}`}>
                {ctaLabel}
              </Button>
            </Link>
          )}
        </Box>
      )}
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        justifyContent="center"
        spacing="20px"
        sx={{
          '> div': {
            w: { sm: `${100 / (items.length ?? 1)}%` },
          },
        }}
      >
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Stack>
    </Container>
  )
}

const Item = ({
  image,
  content,
  cta_type: ctaType,
  cta_label: ctaLabel,
  cta_link: ctaLink,
  content_alignment: contentAlignment,
  link_to_file: linkToFile,
}: ImageObjectSlice['items'][0]) => {
  const { storeView } = useCoreContext()

  return (
    <Box textAlign={contentAlignment} d="flex" flexDirection="column" w="100%">
      <AspectRatio
        ratio={
          (image?.dimensions?.width ?? 1) / (image?.dimensions?.height ?? 1)
        }
        w="100%"
        maxW="1920px"
        mx="auto"
      >
        <Image
          src={image.url ?? IMAGE_PLACEHOLDER}
          width={image.dimensions?.width ?? 200}
          height={image.dimensions?.height ?? 200}
          alt={image.alt ?? ''}
          layout="fill"
          objectFit="contain"
        />
      </AspectRatio>
      <Box sx={contentStyles} my="15px" flex="1" mx="auto">
        {RichText.render(content)}
      </Box>
      {linkToFile.url ? (
        <ChakraLink href={linkToFile.url} isExternal>
          <Button as="a" variant={`${ctaType}-${storeView}`}>
            {ctaLabel}
          </Button>
        </ChakraLink>
      ) : (
        <>
          {ctaLabel && ctaLink && (
            <Box>
              <Link href={ctaLink} passHref>
                <Button as="a" variant={`${ctaType}-${storeView}`}>
                  {ctaLabel}
                </Button>
              </Link>
            </Box>
          )}
        </>
      )}
    </Box>
  )
}
