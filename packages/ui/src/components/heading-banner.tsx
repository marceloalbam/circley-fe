import Image from 'next/image'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { Box, Button, Flex, Heading, BoxProps } from '@chakra-ui/react'
import { contentStyles, placementOptions } from '@scope/prismic'
import { Breadcrumbs } from '@wpro/magento/dist/modules/shared'
import Link from 'next/link'

interface Props extends Omit<BoxProps, 'title' | 'bgImage'> {
  bgImage: { url: string; alt: string | null }
  contentPlacement:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
  alignment: 'left' | 'center' | 'right'
  displayBreadcrumbs: boolean
  title?: string | null
  subtext?: RichTextBlock[]
  ctaLabel?: string | null
  ctaLink?: string | null
  ctaType?: 'outline' | 'solid' | 'underline'
  storeView?: string
}
export const HeadingBanner = ({
  bgImage,
  contentPlacement,
  alignment,
  displayBreadcrumbs,
  title,
  subtext,
  ctaLabel,
  ctaLink,
  ctaType,
  storeView,
  ...BoxProps
}: Props) => {
  const hasBg = bgImage.url
  return (
    <Flex
      w="100%"
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
      {...BoxProps}
    >
      {hasBg && (
        <Image
          src={bgImage.url}
          alt={bgImage.alt ?? ''}
          layout="fill"
          objectFit="cover"
        />
      )}
      <Flex
        maxW="container.xl"
        mx="auto"
        pos="relative"
        zIndex="2"
        px={{ base: '15px', md: '40px' }}
        {...placementOptions[contentPlacement]}
        sx={{
          '*': {
            color: `${hasBg ? 'white' : 'secondary.600'} !important`,
          },
        }}
        w="100%"
      >
        <Box textAlign={alignment} sx={{ '> *': { mb: '20px' } }}>
          {displayBreadcrumbs && (
            <Breadcrumbs my={5} pageTitle={title ?? 'Page'} separator="|" />
          )}
          {title && <Heading fontSize="3.125rem">{title}</Heading>}
          {subtext && Boolean(subtext?.length) && (
            <Box sx={contentStyles}>{RichText.render(subtext)}</Box>
          )}
          {ctaLabel && ctaLink && (
            <Link href={ctaLink} passHref>
              <Button as="a" variant={`${ctaType}-${storeView}`}>
                {ctaLabel}
              </Button>
            </Link>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}
