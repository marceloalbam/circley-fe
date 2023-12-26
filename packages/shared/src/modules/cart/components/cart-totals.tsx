import { TotalsTable } from '../../index'
import { Box, Text } from '@chakra-ui/react'

export const CartTotals = () => {
  return (
    <Box padding="35px 25px">
      <Text fontSize="18px" fontWeight="bold" mb={3}>
        <span>Order Summary</span>
      </Text>
      <TotalsTable />
      <Text fontSize="sm" mt="20px">
        * Shipping and Tax are calculated at Checkout
      </Text>
    </Box>
  )
}
