import { ProductData } from '@wpro/magento/dist/types'
import { AspectRatio, Box, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Image from 'next/image'
import { IMAGE_PLACEHOLDER } from '../../../shared'
import Link from 'next/link'
import { ProductPrice } from '@wpro/magento/dist/modules/catalog'

interface Props {
  product: ProductData
}

export const ProductCard = ({ product }: Props) => {
  const { name, image, price, sku, typeName, getUrlPath } = product
  const urlPath = getUrlPath()
  return (
    <LinkBox w="100%" textAlign="center">
      <AspectRatio ratio={1} w="100%">
        <Image
          src={image.small.url ?? IMAGE_PLACEHOLDER}
          alt={image.small.label ?? name}
          layout="fill"
          objectFit="contain"
          priority
        />
      </AspectRatio>
      <Box
        mt="30px"
        pt="30px"
        textAlign="center"
        borderTop="1px solid"
        borderColor="secondary.100"
        w="auto"
        mx="auto"
        display="inline-block"
        color="secondary.400"
      >
        <Box mb="20px">
          <Link href={urlPath} passHref>
            <LinkOverlay fontSize="sm" textTransform="uppercase">
              {name}
            </LinkOverlay>
          </Link>
        </Box>
        <Box>
          <ProductPrice price={price} type={typeName} />
        </Box>
      </Box>
    </LinkBox>
  )
}
