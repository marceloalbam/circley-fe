import { Wrap, WrapItem, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { NavBarItem } from '@scope/prismic'
import { MegaMenu } from './mega-menu'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props {
  menuItems: NavBarItem[] | undefined
  isHeaderCollapsed?: boolean
}

export const Navigation = ({ menuItems, isHeaderCollapsed }: Props) => {
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
try{
  return (
    <Wrap
      justify="center"
      spacing="25px"
      display={{ base: 'none', lg: 'block' }}
      pos="relative"
      px="12px"
      pt={isReinsman ? '25px' : isHeaderCollapsed ? '25px' : '0'}
      w="100%"
    >
      {menuItems?.map((item, i) => {
        return (
          <WrapItem
            key={i}
            my="0 !important"
            py="16px"
            _hover={{
              '> .mega-menu': {
                d: 'block',
              },
            }}
          >
            <Link href={item.url} passHref>
              <ChakraLink
                variant={
                  isReinsman
                    ? 'reinsmanNav'
                    : isHighHorse
                    ? 'highHorseNav'
                    : isTucker
                    ? 'tuckerNav'
                    : 'nav'
                }
                fontSize="0.9375rem"
              >
                {item.label}
              </ChakraLink>
            </Link>
            {item.menu?.uid && (
              <MegaMenu
                uid={item.menu?.uid}
                isHeaderCollapsed={isHeaderCollapsed}
              />
            )}
          </WrapItem>
        )
      })}
    </Wrap>
  )
}catch(e){
  return (<></>)
}
}
