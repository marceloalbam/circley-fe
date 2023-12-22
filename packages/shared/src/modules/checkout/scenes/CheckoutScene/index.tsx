import {
  TwoStepsCheckout,
  SuccessScene,
  ShippingScene,
} from '@wpro/magento/dist/modules/checkout/'
import { BillingScene } from '@scope/shared/src/modules/checkout'

export const CheckoutScene = () => {
  return (
    <TwoStepsCheckout
      components={{
        ShippingScene,
        BillingScene,
        SuccessScene,
      }}
    />
  )
}
