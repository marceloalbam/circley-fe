import {
  useAffirmLoaded,
  useAffirmConfig,
} from '@wpro/magento/dist/modules/affirm'
import React, { useEffect } from 'react'
import AffirmScript from './affirm-script'
import { Text } from '@chakra-ui/react'

interface AffirmLabelProps {
  affirmPrice: number | null | undefined
}
export const AffirmLabel = ({ affirmPrice }: AffirmLabelProps) => {
  const { config } = useAffirmConfig()
  const { loaded: affirmLoaded } = useAffirmLoaded()
  useEffect(() => {
    // @ts-expect-error
    affirmLoaded && window.affirm?.ui?.refresh?.()
  }, [affirmLoaded])

  return (
    <>
      <AffirmScript />

      {affirmLoaded && affirmPrice && (
        <Text
          className="affirm-as-low-as"
          data-page-type="product"
          data-amount={getProductPriceCentValue(affirmPrice)}
          mb={5}
        />
      )}
    </>
  )
}

const getProductPriceCentValue = (price: number) => {
  return price * 100
}
