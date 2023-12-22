import { FormattedMessage } from 'react-intl'
import { useCart } from '@wpro/magento/dist/core/hooks'
import { Price } from '@wpro/magento/dist/modules/shared'
import { Table } from '@wpro/magento/dist/modules/cart/components/TotalsTable/styled'

interface GiftCard {
  applied_balance: {
    value: number
  }
}

export const TotalsTable = () => {
  const { cart } = useCart()

  if (!cart?.data) {
    return null
  }

  const { data } = cart
  const { prices, appliedGiftCards } = data
  const { discount, grandTotal } = prices || {}

  const giftCardDiscount = {
    value:
      appliedGiftCards?.reduce((total: number, giftCard: GiftCard) => {
        return total + giftCard.applied_balance.value
      }, 0) ?? 0,
    currency: appliedGiftCards?.length && appliedGiftCards[0].currency,
  }

  return (
    <Table>
      <tbody>
        {discount?.value !== 0 && (
          <tr>
            <th>
              <FormattedMessage id="quote.totals.discount" />
            </th>
            <td>
              <Price {...discount} />
            </td>
          </tr>
        )}

        {giftCardDiscount.value !== 0 && (
          <tr>
            <th>
              <FormattedMessage id="quote.totals.giftCardDiscount" />
            </th>
            <td>
              <Price {...giftCardDiscount} />
            </td>
          </tr>
        )}

        {grandTotal && (
          <tr>
            <th>
              <FormattedMessage id="quote.totals.subtotal" />
            </th>
            <td>
              <Price {...grandTotal} />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}
