import { useCart } from '@wpro/magento/dist/core/hooks'
import { CartListItem } from '../../index'
import { Container } from './styled'

export const CartList = () => {
  const { cart } = useCart()
  const items = cart?.data?.items

  if (!items) {
    return null
  }

  return (
    <Container>
      <ul>
        {items.map((cartItem) => {
          return <CartListItem key={cartItem.id} cartItem={cartItem} />
        })}
      </ul>
    </Container>
  )
}
