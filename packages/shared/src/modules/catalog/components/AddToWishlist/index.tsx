import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCustomer, useWishlist } from '@wpro/magento/dist/core/hooks'
import { LoginModal } from '@wpro/magento/dist/modules/auth'
import { Link, Box, Spinner } from '@chakra-ui/react'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { ProductData } from '@wpro/magento/dist/types'
interface Props {
  product: ProductData
}

export const AddToWishlist = ({ product }: Props) => {
  const router = useRouter()
  const {
    handleRemoveFromWishlist,
    handleAddToWishlist,
    isAddedToWishlist,
    isLoading,
  } = useWishlist(product)
  const { isLoggedIn } = useCustomer()
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)

  const handleAddItem = () => {
    if (!isLoggedIn) {
      setIsLoginModalVisible(true)
    } else {
      handleAddToWishlist()
    }
  }

  return (
    <>
      <Link
        onClick={
          isAddedToWishlist
            ? () => router.push('/customer/account/wishlist')
            : handleAddItem
        }
        pointerEvents={isLoading ? 'none' : 'unset'}
        fontSize="md"
        h="23px"
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <Box d="inline-flex" alignItems="center" gap={2}>
            {isAddedToWishlist ? (
              <>
                <Box as="span" color="green.400">
                  <IoCheckmarkSharp />
                </Box>
                <Box as="span">View wishlist</Box>
              </>
            ) : (
              <>
                <Box as="span">Add to wishlist</Box>
              </>
            )}
          </Box>
        )}
      </Link>

      {isLoginModalVisible && (
        <LoginModal
          isOpen
          handleCloseModal={() => setIsLoginModalVisible(false)}
          onLoginSuccess={() => {
            handleAddToWishlist()
            setIsLoginModalVisible(false)
          }}
        />
      )}
    </>
  )
}
