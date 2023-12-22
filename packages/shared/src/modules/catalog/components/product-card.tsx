import Link from 'next/link'
import Image from 'next/image'
import { ProductData } from '@wpro/magento/dist/types'
import { useGa3Gtm } from '@wpro/magento/dist/gtm/ga3/index'
import { ListPages } from '@wpro/magento/dist/gtm/ga3/events/ga3-events'
import {
  ProductPrice,
  useProductStatus,
} from '@wpro/magento/dist/modules/catalog'
import { Box, LinkBox, LinkOverlay, chakra } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useBrandLogoUrl } from '../../../hooks'
import { Variants } from './product-variants'

interface Props {
  product: ProductData
  listPage: ListPages
}

export const ProductCard = ({ product, listPage }: Props) => {
  const {
    name,
    image,
    price,
    sku,
    typeName,
    getUrlPath,
    customAttribute,
    configurableOptions,
  } = product
  const { getIsNew, getIsSale } = useProductStatus(product)
  const { triggerProductClick } = useGa3Gtm()
  const [brand] = customAttribute?.manufacturer ?? []

  const callGTM = () => {
    triggerProductClick({ sku, name, listPage })
  }
  const brandLogo = useBrandLogoUrl(brand, 'product')

  const isNew = getIsNew()
  const isSale = getIsSale()
  const urlPath = getUrlPath()

  return (
    <LinkBox width="100%">
      <Container>
        <Image
          src={image.small.url}
          width={400}
          height={400}
          alt={name}
          layout="responsive"
          objectFit="contain"
        />
        <Box
          textAlign="center"
          borderTopWidth="1px"
          borderTopColor="gray.100"
          mt="20px"
          pt="15px"
        >
          <Box w="30px" h="30px" mb="10px" textAlign="center" mx="auto">
            {brandLogo && (
              <Image src={brandLogo} alt={brand} width="30px" height="30px" />
            )}
          </Box>
          <Name>
            <Link href={urlPath} passHref>
              <LinkOverlay onClick={callGTM}>{name}</LinkOverlay>
            </Link>
          </Name>

          <Price>
            <ProductPrice price={price} type={typeName} />
          </Price>
          <Variants options={configurableOptions} />
        </Box>
        <Flags>
          {isNew && <span className="flag-new">New</span>}

          {isSale && <span className="flag-sale">Sale</span>}
        </Flags>
      </Container>
    </LinkBox>
  )
}

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 30px 5px;
  background: ${(props) => props.theme.colors.white};
  height: 100%;
  box-sizing: border-box;
`

export const Name = chakra(Box, {
  baseStyle: {
    margin: '10px 0',
    padding: '0 20px',
    minHeight: '2.2em',
    a: {
      textTransform: 'uppercase',
      lineHeight: '1.7',
      fontSize: '15px',
      fontWeight: 'medium',
      color: 'secondary.600',
    },
  },
})

export const Price = styled.div`
  margin: 10px 0;
  padding-bottom: 1em;
  color: ${(props) => props.theme.colors.secondary['300']};
  font-size: 14px;

  > .oldPrice {
    color: ${(props) => props.theme.colors.gray['500']};
    text-decoration: line-through;
    margin: 0 5px 0 0;
  }

  .regularPrice {
    color: ${(props) => props.theme.colors.gray['700']};
  }

  .startsAt {
    color: ${(props) => props.theme.colors.gray['500']};

    > span {
      color: ${(props) => props.theme.colors.gray['700']};
    }
  }
`

export const Flags = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  padding: 15px;

  > span {
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    padding: 10px 24px;
    border-radius: 1px;
    margin: 0 5px 3px 0;
    letter-spacing: 1px;

    &.flag-sale {
      background: ${(props) => props.theme.colors.secondary['300']};
    }

    &.flag-new {
      background: ${(props) => props.theme.colors.primary['300']};
    }
  }
`
