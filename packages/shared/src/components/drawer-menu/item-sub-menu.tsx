import { StackDivider, useDisclosure, VStack } from '@chakra-ui/react'
import { DrawerSubMenu } from './drawer-sub-menu'
import { MenuTreeItem } from './drawer-menu-item'
import { LinkItem } from './link-item'

export const ItemSubMenu = ({ url, label, children }: MenuTreeItem) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const hasChildren = Boolean(
    children?.length && children?.length > 0 && children[0].url !== ''
  )
  return (
    <>
      <LinkItem
        url={url}
        label={label}
        hasSubMenu={hasChildren}
        handleOpen={onOpen}
      />
      {hasChildren && (
        <DrawerSubMenu
          isOpen={isOpen}
          onClose={onClose}
          url={url}
          label={label}
        >
          <VStack
            divider={<StackDivider borderColor="secondary.100" />}
            spacing="0"
          >
            {children?.map((elem, i) => {
              return (
                <LinkItem
                  key={i}
                  url={elem.url}
                  label={elem.label}
                  hasSubMenu={false}
                />
              )
            })}
          </VStack>
        </DrawerSubMenu>
      )}
    </>
  )
}
