import { useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import NextImage from 'next/image'
import { useCart, usePath } from '@wpro/magento/dist/core/hooks'
import {
  Box,
  Link as ChakraLink,
  HStack,
  Grid,
  Icon,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { useDocument } from '@wpro/prismic'
import { EntityType, Navigation as HeaderType } from '@scope/prismic'
import { ImCart } from 'react-icons/im'
import { Search2Icon } from '@chakra-ui/icons'
import { TopBar } from './components/top-bar'
import { Navigation } from './components/navigation'
import { SearchBox } from './components/search-box'
import { DrawerMenu } from '../drawer-menu'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

export const Header = () => {
  const intl = useIntl()
  const path = usePath()
  const { isOpen, onClose, onToggle } = useDisclosure()
  const { count } = useCart()
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'

  const { document } = useDocument<HeaderType>({
    uid: 'header',
    types: [EntityType.Nav],
  })
  const topItems = document?.data.top_bar
  const menuItems = document?.data.nav_bar

  const [windowScrolled, setWindowScrolled] = useState(false)

  const isHeaderCollapsed = getIsHeaderCollapsed({
    windowScrolled,
  })

  useEffect(() => {
    const handleScroll = () => {
      const userScrolled = window.scrollY > 45
      setWindowScrolled(userScrolled)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box pos="relative" zIndex="3">
      <TopBar topItems={topItems} isHeaderCollapsed />
      <Box
        as="header"
        bg="primary.50"
        w="100%"
        pos={isHeaderCollapsed ? 'fixed' : 'sticky'}
        top={isHeaderCollapsed ? '0' : 'auto'}
        minH="50px"
      >
        <Grid
          templateColumns={{ base: '1fr 1fr 1fr', md: '1fr 1fr', lg: '1fr' }}
          alignItems="center"
          pt={{ base: '0', md: '23px', lg: '0' }}
        >
          <DrawerMenu
            isOpen={isOpen}
            onClose={onClose}
            onToggle={onToggle}
            menuItems={menuItems}
            topItems={topItems}
          />
          <HStack
            mx={{ base: '0', lg: 'auto' }}
            w="100%"
            spacing="5%"
            pl="15px"
          >
            <Link href={path.Home} passHref>
              <ChakraLink
                borderRadius={6}
                display="inline-block"
                pos={{
                  base: 'absolute',
                  lg: isHeaderCollapsed ? 'relative' : 'absolute',
                }}
                left="0"
                right="0"
                top={
                  isReinsman
                    ? { base: '10%', md: '10%' }
                    : isHighHorse
                    ? {
                        base: isHeaderCollapsed ? '0' : '5%',
                        md: isHeaderCollapsed ? '0' : '-15%',
                        lg: '-25%',
                      }
                    : { base: isHeaderCollapsed ? '0' : '5%', lg: '-20%' }
                }
                mx="auto"
                w={{
                  base: isHighHorse ? '54px' : isTucker ? '90px' : '142px',
                  md: isHeaderCollapsed
                    ? isHighHorse
                      ? '66px'
                      : isTucker
                      ? '110px'
                      : '180px'
                    : isHighHorse
                    ? '100px'
                    : isTucker
                    ? '168px'
                    : '230px',
                  lg: isHighHorse
                    ? '100px'
                    : isTucker
                    ? '168px'
                    : isHeaderCollapsed
                    ? '180px'
                    : '230px',
                }}
                mb="5px"
                transition="all ease 0.3s"
              >
                <NextImage
                  src={
                    isReinsman
                      ? '/images/logos/reinsman-logo.png'
                      : isHighHorse
                      ? '/images/logos/highhorse-main-logo.png'
                      : isTucker
                      ? '/images/logos/tucker-logo.png'
                      : '/images/logos/circley-main-logo.png'
                  }
                  width={
                    isReinsman
                      ? '230px'
                      : isHighHorse
                      ? '100px'
                      : isTucker
                      ? '168px'
                      : '257px'
                  }
                  height={isReinsman ? '70px' : '84px'}
                />
              </ChakraLink>
            </Link>
            {!isHeaderCollapsed && (
              <Box bg="primary.50" h={{ base: '50px', md: '65px' }}></Box>
            )}
            {isHeaderCollapsed && (
              <Navigation
                menuItems={menuItems}
                isHeaderCollapsed={isHeaderCollapsed}
              />
            )}
            <HStack
              minW={{ base: '50px', md: '150px' }}
              h={{ base: '43px', md: '70px' }}
              marginLeft="auto"
              fontSize={{ base: '0.625rem', md: '0.9375rem' }}
              pos={
                isHeaderCollapsed
                  ? { base: 'absolute', lg: 'relative' }
                  : 'absolute'
              }
              right={{ base: '0', md: '1.5vw' }}
              top={isHeaderCollapsed ? '5px' : { base: '5px', lg: '0' }}
            >
              <Box
                display={{
                  base: 'none',
                  lg: isHeaderCollapsed ? 'none' : 'block',
                }}
              >
                <SearchBox />
              </Box>
              <Box
                display={{ base: 'block', lg: 'none' }}
                onClick={onToggle}
                cursor="pointer"
                textAlign="center"
              >
                <Search2Icon
                  mr="10px"
                  mb="5px"
                  h={{ base: '15px', md: '20px' }}
                  w={{ base: '15px', md: '20px' }}
                  color={
                    isReinsman
                      ? 'reinsman.300'
                      : isHighHorse
                      ? 'highhorse.400'
                      : isTucker
                      ? 'tucker.400'
                      : 'circley.300'
                  }
                />
                <Text
                  display={{ base: 'block', md: 'inline-block' }}
                  mt="3px"
                  fontFamily={isHighHorse ? 'highHorse' : 'body'}
                >
                  Search
                  {/*{intl.formatMessage({ id: 'Search' })}*/}
                </Text>
              </Box>
              <Link href={path.Cart} passHref>
                <ChakraLink
                  pr={{ base: '10px', md: '20px' }}
                  pl={{ base: '5px', md: '20px' }}
                  pb={isHeaderCollapsed ? '15px' : '0'}
                  h={{ base: '40px', md: '28px' }}
                  d="block"
                >
                  <Icon
                    as={ImCart}
                    mr="10px"
                    h="20px"
                    w="20px"
                    color={
                      isReinsman
                        ? 'reinsman.300'
                        : isHighHorse
                        ? 'highhorse.400'
                        : isTucker
                        ? 'tucker.400'
                        : 'circley.300'
                    }
                    display="inline-block"
                  />
                  <Text
                    display={{ base: 'none', md: 'inline-block' }}
                    _hover={{
                      color: isReinsman
                        ? 'reinsman.300'
                        : isHighHorse
                        ? 'highhorse.400'
                        : isTucker
                        ? 'tucker.400'
                        : 'circley.300',
                    }}
                    fontFamily={isHighHorse ? 'highHorse' : 'body'}
                  >
                    My Cart {count}
                    {/* TODO: Fix translation not working
                      {intl.formatMessage({ id: 'cart.titleCount' }, { count })}
                    */}
                  </Text>
                  <Text
                    display={{ base: 'block', md: 'none' }}
                    fontFamily={isHighHorse ? 'highHorse' : 'body'}
                  >
                    Cart {count}
                    {/*{intl.formatMessage({ id: 'cart.titleCount' }, { count })}*/}
                  </Text>
                </ChakraLink>
              </Link>
            </HStack>
          </HStack>
        </Grid>
        {!isHeaderCollapsed && (
          <Navigation
            menuItems={menuItems}
            isHeaderCollapsed={isHeaderCollapsed}
          />
        )}
      </Box>
    </Box>
  )
}

const getIsHeaderCollapsed = (params: { windowScrolled: boolean }) => {
  const { windowScrolled } = params
  if (windowScrolled) {
    return true
  }

  return false
}
