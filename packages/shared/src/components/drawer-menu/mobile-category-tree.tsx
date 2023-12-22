import { NavBarItem } from '@scope/prismic'
import { VStack, StackDivider } from '@chakra-ui/react'
import { DrawerMenuItem } from './drawer-menu-item'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props {
  menuItems: NavBarItem[] | undefined
}

export const MobileCategoryTree = ({ menuItems }: Props) => {
  const { storeView } = useCoreContext()
  const isHighHorse = storeView === 'highhorse'

  return (
    <VStack
      divider={<StackDivider borderColor="secondary.100" />}
      borderBottom="1px solid"
      borderColor="secondary.100"
      spacing="0"
      fontFamily={isHighHorse ? 'highHorse' : 'body'}
    >
      {menuItems?.map((item, i) => {
        return <DrawerMenuItem key={i} item={item} />
      })}
    </VStack>
  )
}
