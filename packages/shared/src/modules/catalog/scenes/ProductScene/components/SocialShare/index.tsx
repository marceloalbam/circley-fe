import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
  EmailShareButton,
  PinterestShareButton,
  PinterestIcon,
} from 'next-share'
import { Box, HStack } from '@chakra-ui/react'
import { COLOR_MAP_PRIMARY } from '../../../../../../constants'

interface Props {
  url: string
  productImage: string
  store?: string
}

export const SocialShare = ({
  url,
  productImage,
  store = 'default',
}: Props) => {
  return (
    <Box mt={3}>
      <HStack
        spacing={3}
        justifyContent="center"
        color={COLOR_MAP_PRIMARY[store as string]}
      >
        <EmailShareButton url={url}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <PinterestShareButton url={url} media={productImage}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </HStack>
    </Box>
  )
}
