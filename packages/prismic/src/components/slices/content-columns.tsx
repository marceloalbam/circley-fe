import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import {
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Box,
  Heading,
  Link as ChakraLink,
  Container,
} from '@chakra-ui/react'
import { ContentColumnsSlice } from '../../types'

interface Props extends ContentColumnsSlice {
  index?: number
}
export const ContentColumns = ({ primary, items, index }: Props) => {
  const { column_count: columnCount, layout } = primary
  const hasBg = Boolean(index && index > 1)
  const isWide = layout === 'wide'

  if (items.length < 1) {
    return null
  }

  return (
    <Box sx={hasBg ? bgStyles : undefined}>
      <SimpleGrid
        as={Container}
        columns={{ base: 1, md: columnCount ?? 3 }}
        w="100%"
        spacing={{ base: '40px', md: '30px' }}
        pb={{ base: '20px', md: '40px' }}
        maxW={isWide ? 'unset' : 'container.xl'}
      >
        {items.map((item, index) => {
          const {
            title,
            link_url: linkUrl,
            image,
            link_label: linkLabel,
            content,
          } = item

          return (
            <LinkBox
              key={index}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {image.url && (
                <Image
                  src={image.url}
                  alt={image.alt ?? ''}
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                />
              )}
              {title && (
                <Heading
                  as="h3"
                  mt="30px"
                  mb="10px"
                  fontSize={{ base: 'md', md: '2xl' }}
                >
                  {title}
                </Heading>
              )}
              {Boolean(content?.length) && (
                <Box
                  fontSize="sm"
                  textAlign="left"
                  my="14px"
                  color="secondary.400"
                  letterSpacing=".3px"
                >
                  {RichText.render(content)}
                </Box>
              )}
              {linkLabel && linkUrl && (
                <Link href={linkUrl} passHref>
                  <LinkOverlay as={ChakraLink} variant="primary" mt="auto">
                    {linkLabel}
                  </LinkOverlay>
                </Link>
              )}
            </LinkBox>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

const bgStyles = {
  pos: 'relative',
  zIndex: '1',
  w: 'full',
  _before: {
    content: `''`,
    right: '0',
    zIndex: '-1',
    display: 'block',
    pos: 'absolute',
    top: '-640px',
    mx: 'auto',
    bg: 'url(./images/bg-right.webp)',
    w: '510px',
    h: '740px',
  },
}
