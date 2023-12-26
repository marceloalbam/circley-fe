import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { useCallback } from 'react'
import { STORE_VIEWS } from '../constants'
import { useMemo } from 'react'

export const useStoreData = () => {
  const { storeView } = useCoreContext()

  const getStoreLogoHoverSrcProps = useCallback(
    (store: keyof typeof STORE_VIEWS) => {
      const storeName = store === 'default' ? 'circle-y' : store

      return {
        src: `/images/logos/${storeName}-logo.png`,
      }
    },
    []
  )

  const getStoreLogoSrcProps = useCallback(
    (store: keyof typeof STORE_VIEWS) => {
      const storeName = store === 'default' ? 'circle-y' : store
      const notCurrentSuffix = store !== storeView ? '-gray' : ''
      return {
        src: `/images/logos/${storeName}-logo${notCurrentSuffix}.png`,
      }
    },
    [storeView]
  )

  const currentStoreUrl = useMemo(() => {
    const isReinsman = storeView === 'reinsman'
    const isHighHorse = storeView === 'highhorse'
    const isTucker = storeView === 'tucker'
    const storeUrl = isReinsman
      ? process.env.NEXT_PUBLIC_PWA_REINSMAN_STORE_DOMAIN
      : isHighHorse
      ? process.env.NEXT_PUBLIC_PWA_HIGHHORSE_STORE_DOMAIN
      : isTucker
      ? process.env.NEXT_PUBLIC_PWA_TUCKER_STORE_DOMAIN
      : process.env.NEXT_PUBLIC_PWA_DEFAULT_STORE_DOMAIN

    return storeUrl
  }, [storeView])

  const getStoreUrl = useCallback((store?: keyof typeof STORE_VIEWS) => {
    const isReinsman = store === 'reinsman'
    const isHighHorse = store === 'highhorse'
    const isTucker = store === 'tucker'

    return isReinsman
      ? process.env.NEXT_PUBLIC_PWA_REINSMAN_STORE_DOMAIN
      : isHighHorse
      ? process.env.NEXT_PUBLIC_PWA_HIGHHORSE_STORE_DOMAIN
      : isTucker
      ? process.env.NEXT_PUBLIC_PWA_TUCKER_STORE_DOMAIN
      : process.env.NEXT_PUBLIC_PWA_DEFAULT_STORE_DOMAIN
  }, [])

  return {
    getStoreLogoSrcProps,
    getStoreUrl,
    getStoreLogoHoverSrcProps,
    currentStoreUrl,
  }
}
