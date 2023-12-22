import { Disabler } from '@wpro/magento/dist/ui'
import { Heading, Box, Text, Link } from '@chakra-ui/react'
import {
  useBillingScene,
  Aside,
  Layout,
  EmailForm,
  PaymentMethods,
  PaymentOptions,
  BillingAddress,
} from '@wpro/magento/dist/modules/checkout'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { COLOR_MAP_PRIMARY } from '@scope/shared/src'

export const BillingScene = () => {
  const { storeView } = useCoreContext()
  const { paymentMethodRequired, paymentMethodLoading, displayEmailForm } =
    useBillingScene()

  return (
    <Layout
      main={
        <>
          {displayEmailForm && <EmailForm mb={12} />}

          {paymentMethodRequired && (
            <Disabler isDisabled={paymentMethodLoading} mb={12}>
              <PaymentOptions />
              <PaymentMethods />
            </Disabler>
          )}

          <Heading variant="checkout" mb={4}>
            Billing Address
          </Heading>
          <BillingAddress />

          <Box mt={6}>
            <Text>
              <strong>WARNING:</strong> Cancer and Reproductive Harm{' '}
              <Box as="br" display={{ base: 'none', sm: 'inline' }} />
              <Link
                color={COLOR_MAP_PRIMARY[storeView as string]}
                target="_blank"
                rel="noreferrer"
                href="https://www.p65warnings.ca.gov/"
              >
                https://www.p65warnings.ca.gov/
              </Link>
            </Text>
          </Box>
        </>
      }
      aside={<Aside />}
    />
  )
}
