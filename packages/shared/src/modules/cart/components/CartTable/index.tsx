import { useCart } from '@wpro/magento/dist/core/hooks'
import { BLANK_SPACE } from '@wpro/magento/dist/core/resources/constants'
import { CartTableRow } from '../../index'
import { Container } from './styled'

export const CartTable = () => {
  const { cart } = useCart()
  const items = cart?.data?.items

  if (!items) {
    return null
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>{BLANK_SPACE}</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((cartItem) => {
            return <CartTableRow key={cartItem.id} cartItem={cartItem} />
          })}
        </tbody>
      </table>
    </Container>
  )
}
