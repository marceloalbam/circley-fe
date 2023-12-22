import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import { Box, Container, Link } from '@chakra-ui/react'
import { DownloadImageLinkSlice } from '../../types'
import { IMAGE_PLACEHOLDER } from '../../../../shared'
import { contentStyles } from './rich-text'

export const DownloadImageLink = ({ primary }: DownloadImageLinkSlice) => {
  const { image, content, link_to_file: linkToFile } = primary

  return (
    <Container maxW="container.xl">
      {linkToFile.url ? (
        <Link href={linkToFile.url} isExternal>
          <Image
            src={image.url ?? IMAGE_PLACEHOLDER}
            width={image.dimensions?.width ?? 200}
            height={image.dimensions?.height ?? 200}
            alt={image.alt ?? ''}
            layout="responsive"
            objectFit="contain"
          />
        </Link>
      ) : (
        <Image
          src={image.url ?? IMAGE_PLACEHOLDER}
          width={image.dimensions?.width ?? 200}
          height={image.dimensions?.height ?? 200}
          alt={image.alt ?? ''}
          layout="responsive"
          objectFit="contain"
        />
      )}
      <Box sx={contentStyles}>{RichText.render(content)}</Box>
    </Container>
  )
}
