import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Box,
  Icon,
  Text,
} from '@chakra-ui/react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { NavBarItem, TopBarItem } from '@scope/prismic'
import { SearchBox } from './search-box'
import { MobileCategoryTree } from './mobile-category-tree'
import { UserMenu } from './user-menu'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props {
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
  menuItems: NavBarItem[] | undefined
  topItems: TopBarItem[] | undefined
}

export const DrawerMenu = ({
  isOpen,
  onClose,
  onToggle,
  menuItems,
  topItems,
}: Props) => {
  const router = useRouter()
  const btnRef = useRef<HTMLButtonElement>(null)
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'

  useEffect(() => {
    onClose()
  }, [router.asPath, onClose])

  return (
    <Box display={{ base: 'flex', lg: 'none' }}>
      <Button
        display={{ base: 'block', md: 'flex' }}
        alignItems="center"
        variant="unstyled"
        onClick={onToggle}
        ref={btnRef}
        ml={{ base: '10px', md: '25px' }}
      >
        <Icon
          as={isOpen ? FaTimes : FaBars}
          w={6}
          h={6}
          color={
            isReinsman
              ? 'reinsman.300'
              : isTucker
              ? 'tucker.400'
              : 'circley.300'
          }
          mt="3px"
        />
        <Text
          px="10px"
          fontSize={{ base: '0.625rem', md: '0.9375rem' }}
          display={{ base: 'block', md: 'inline-block' }}
          mt={{ base: '-6px', md: '0' }}
          fontFamily={isHighHorse ? 'highHorse' : 'body'}
        >
          Shop
        </Text>
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="left"
        size="full"
      >
        <DrawerContent h="calc(100vh - 100px)" top="unset !important">
          <DrawerHeader p={0}>
            <SearchBox />
          </DrawerHeader>
          <DrawerBody p={0}>
            <MobileCategoryTree menuItems={menuItems} />
            <UserMenu topItems={topItems} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
