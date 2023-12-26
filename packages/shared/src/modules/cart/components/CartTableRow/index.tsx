import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { useCartItem } from '@wpro/magento/dist/core/hooks'
import { CartItem } from '@wpro/magento/dist/core/data/quote/cart/types'
import { Price } from '@wpro/magento/dist/modules/shared'
import { Disabler } from '@wpro/magento/dist/ui'
import {
  Button,
  Link as ChakraLink,
  Spinner,
  VStack,
  Text,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { Tr } from './styled'

interface Props {
  cartItem: CartItem
}

export const CartTableRow = ({ cartItem }: Props) => {
  const { product, variantProduct } = cartItem
  const {
    removeCartItem,
    updateCartItemQuantity,
    setInputQuantity,
    inputQuantity,
    isCartLoading,
    isUpdateFetching,
    isRemoveFetching,
    isRemoveDisabled,
    isUpdateDisabled,
    prices,
    productPath,
    configurableOptions,
    customizableOptions,
    minQuantity,
  } = useCartItem({ cartItem })

  return (
    <Tr>
      <td>
        <div className="product-image">
          <Link href={productPath} passHref>
            <ChakraLink>
              <div
                style={{
                  backgroundImage: `url(${product.image.thumbnail.url})`,
                }}
              />
            </ChakraLink>
          </Link>
        </div>
      </td>
      <td>
        <div className="product-name">{product.name}</div>

        <Text className="product-sku" fontSize="sm">
          <FormattedMessage id="cart.label.sku" />{' '}
          {variantProduct?.sku ?? product.sku}
        </Text>

        {configurableOptions && (
          <div className="product-options">
            <VStack as="ul" alignItems="flex-start" spacing="12px">
              {configurableOptions.map((option) => {
                const {
                  option_label: optionName,
                  value_label: label,
                  id,
                } = option
                return (
                  <VStack
                    as="li"
                    key={id}
                    alignItems="flex-start"
                    spacing="5px"
                  >
                    <Text as="span" fontSize="md">
                      {optionName}
                    </Text>
                    <Text as="span" fontSize="sm" color="gray.600">
                      {label}
                    </Text>
                  </VStack>
                )
              })}
            </VStack>
          </div>
        )}

        {customizableOptions && (
          <div className="product-options">
            <ul>
              {customizableOptions.map((option) => {
                const { id, label, values } = option
                return (
                  <li key={id}>
                    {label}:{' '}
                    {values.map((val) => val.label || val.value).join(' - ')}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </td>
      <td>
        <div className="product-price">
          <Price {...prices.price} />
        </div>
      </td>
      <td>
        <div className="product-quantity">
          <Disabler isDisabled={isCartLoading}>
            <input
              type="number"
              value={inputQuantity}
              min={minQuantity}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setInputQuantity(e.target.value)}
            />
            <button
              onClick={() => updateCartItemQuantity()}
              disabled={isUpdateDisabled}
            >
              <span>
                <FormattedMessage id="cart.item.action.update" />
              </span>
              {isUpdateFetching && <Spinner />}
            </button>
          </Disabler>
        </div>
      </td>
      <td>
        <div className="product-remove">
          <Button
            variant="link"
            onClick={removeCartItem}
            disabled={isRemoveDisabled}
            isLoading={isRemoveFetching}
            isDisabled={isCartLoading}
            leftIcon={<CloseIcon />}
          >
            <FormattedMessage id="cart.item.action.remove" />
          </Button>
        </div>
      </td>
      <td>
        <div className="product-subtotal">
          <Price {...prices.row_total} />
        </div>
      </td>
    </Tr>
  )
}
