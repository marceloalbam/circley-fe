import { useIntl } from 'react-intl'
import { PageLoading } from '@wpro/magento/dist/ui'
import { useCart, useCoreContext } from '@wpro/magento/dist/core/hooks'
import { Breadcrumbs, MetaData } from '@wpro/magento/dist/modules/shared'
import { CartCoupon, CartActions } from '@wpro/magento/dist/modules/cart'
import { Container, Heading, Fade, Text, useMediaQuery } from '@chakra-ui/react'
import {
  CartLayout,
  CartMain,
  CartAside,
} from '@wpro/magento/dist/modules/cart/scenes/CartScene/styled'
import { CartTotals, CartList, CartTable } from '../components'

export const CartScene = () => {
  const intl = useIntl()
  const { count, isFirstLoad } = useCart()
  const { includeSuffix } = useCoreContext()

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  const title = intl.formatMessage({ id: 'cart.title' })

  return (
    <Container maxW="container.xl">
      <MetaData title={title} includeSuffix={includeSuffix} />
      <Breadcrumbs pageTitle={title} my={5} />
      {isFirstLoad ? (
        <>
          <Heading my={5}>{title}</Heading>
          <PageLoading />
        </>
      ) : (
        <Fade in>
          {!count ? (
            <>
              <Heading my={5}>{title}</Heading>
              <Text>{intl.formatMessage({ id: 'cart.emptyMessage' })}</Text>
            </>
          ) : (
            <CartLayout>
              <CartMain>
                <Heading my={5}>
                  {title} <span>({count})</span>
                </Heading>
                {isLargerThan1280 ? <CartTable /> : <CartList />}
              </CartMain>
              <CartAside>
                <CartTotals />
                <CartCoupon />
                <CartActions />
              </CartAside>
            </CartLayout>
          )}
        </Fade>
      )}
    </Container>
  )
}
