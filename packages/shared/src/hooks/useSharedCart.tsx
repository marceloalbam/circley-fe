import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { localStorage } from '@wpro/magento/dist/core/services/localStorage'
import { fetchCart } from '@wpro/magento/dist/core/data/quote/cart'
import { CART_TOKEN_KEY } from '../constants'

export const useSharedCart = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const cartId = router.query.proxy?.toString()

  useEffect(() => {
    if (cartId) {
      localStorage.set(CART_TOKEN_KEY, cartId)
      dispatch(fetchCart(cartId))
    }
  }, [cartId])
}
