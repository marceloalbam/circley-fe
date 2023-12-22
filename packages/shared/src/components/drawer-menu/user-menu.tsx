import { Box, VStack } from '@chakra-ui/react'
import { TEXT_PLACEHOLDER } from '@wpro/magento/dist/core/resources/constants'
import { useCustomer, usePath } from '@wpro/magento/dist/core/hooks'
import { TopBarItem } from '@scope/prismic'
import { LinkItem } from './link-item'

interface Props {
  topItems: TopBarItem[] | undefined
}
export const UserMenu = ({ topItems }: Props) => {
  const path = usePath()
  const { customer, isFetching, isSessionDefined, isLoggedIn } = useCustomer()

  return (
    <VStack spacing="0" w="100%" my="12px">
      {isFetching || !isSessionDefined ? (
        <Box as="span">{TEXT_PLACEHOLDER}</Box>
      ) : isLoggedIn ? (
        <LinkItem
          url={path.CustomerDashboard}
          label={customer?.firstName ?? ''}
          hasSubMenu={false}
          isCentered
          isUserMenu
        />
      ) : (
        <LinkItem
          url={path.AuthLogin}
          label="My Account"
          hasSubMenu={false}
          isCentered
          isUserMenu
        />
      )}
      {topItems?.map((item, i) => {
        if (item.url === '/customer/account/login') {
          return null
        }

        return (
          <LinkItem
            key={i}
            url={item.url}
            label={item.label}
            hasSubMenu={false}
            isCentered
            isUserMenu
          />
        )
      })}
    </VStack>
  )
}
