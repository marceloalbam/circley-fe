import { useDisclosure, VStack, StackDivider } from '@chakra-ui/react'
import {
  EntityType,
  MegaMenu as MegaMenuType,
  NavBarItem,
  MegamenuData,
} from '@scope/prismic'
import { useDocument } from '@wpro/prismic'
import { DrawerSubMenu } from './drawer-sub-menu'
import { LinkItem } from './link-item'
import { ItemSubMenu } from './item-sub-menu'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { getSlug, getBlogPath } from '@wpro/prismic'
import { useCmsBlockData } from '../../../src/hooks'
interface Props {
  item: NavBarItem
}

export const DrawerMenuItem = ({ item }: Props) => {
  let { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { menu, url, label } = item
  const hasSubMenu = menu?.uid
  /*
  const { document } = useDocument<MegaMenuType>({
    uid: menu?.uid,
    types: [EntityType.MegaMenu],
  })
  const menuTree = getMenuElements({
    column_1: document?.data.column_1,
    column_2: document?.data.column_2,
    column_3: document?.data.column_3,
    column_4: document?.data.column_4,
  })
console.log("hasSubMenu");
console.log(hasSubMenu);
* /
  let { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  if(storeView == 'default'){storeView = 'circley'}
*/
  
  if(storeView == 'default'){storeView = 'circley'}
  const pathname = 'mega-'//router.asPath
  const identifier = getSlug(pathname)
  const identifier_b = identifier+hasSubMenu+'-pwa-'+storeView

  try {
    const cmsBlockData = useCmsBlockData({identifier: identifier_b})
    
    let bodys: MegaMenuType = cmsBlockData?.data?.body!;

    const menuTree = getMenuElements({
    column_1: bodys?.data.column_1,
    column_2: bodys?.data.column_2,
    column_3: bodys?.data.column_3,
    column_4: bodys?.data.column_4,
  })

  return (
    <>
      <LinkItem
        url={url}
        label={label}
        hasSubMenu={Boolean(hasSubMenu)}
        handleOpen={onOpen}
        isCentered
      />
      {hasSubMenu && (
        <DrawerSubMenu
          url={url}
          label={label}
          isOpen={isOpen}
          onClose={onClose}
        >
          <VStack
            divider={<StackDivider borderColor="secondary.100" />}
            spacing="0"
            fontFamily={isHighHorse ? 'highHorse' : 'body'}
          >
            {menuTree.map((item, i) => {
              return (
                <ItemSubMenu key={i} url={item.url} label={item.label}>
                  {item.children}
                </ItemSubMenu>
              )
            })}
          </VStack>
        </DrawerSubMenu>
      )}
    </>
  )
  } catch (e) {
    return (<></>)
  }
}

export interface MenuTreeItem {
  url: string
  label: string
  children?: MenuTreeItem[]
}

const getMenuElements = ({
  column_1,
  column_2,
  column_3,
  column_4,
}: MegamenuData) => {
  const elements = [
    ...(column_1 ?? []),
    ...(column_2 ?? []),
    ...(column_3 ?? []),
    ...(column_4 ?? []),
  ]
  const menuTree = elements.reduce((acc: MenuTreeItem[], obj, index) => {
    if (obj.is_parent_category) {
      acc.push({
        url: obj?.link_url ?? '',
        label: obj?.link_title ?? '',
        children: [],
      })
    } else {
      const lastItem = acc.length - 1
      acc[lastItem].children?.push({
        url: obj?.link_url ?? '',
        label: obj?.link_title ?? '',
      })
    }

    return acc
  }, [])

  return menuTree
}
