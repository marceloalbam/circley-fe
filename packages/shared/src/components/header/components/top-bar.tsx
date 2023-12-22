import Link from 'next/link'
import NextImage from 'next/image'
import { Box, Link as ChakraLink, HStack, Divider } from '@chakra-ui/react'
import { TopBarItem } from '@scope/prismic'
import { CART_TOKEN_KEY } from '../../../constants'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { useStoreData } from '../../../hooks'
import { localStorage } from '@wpro/magento/dist/core/services/localStorage'
import { useCustomer } from '@wpro/magento/dist/core/hooks'

interface Props {
  topItems: TopBarItem[] | undefined
  isHeaderCollapsed: boolean
}

export const TopBar = ({ topItems, isHeaderCollapsed }: Props) => {
  const { isLoggedIn } = useCustomer()
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  const cartId = localStorage.get(CART_TOKEN_KEY)

  const { getStoreLogoSrcProps, getStoreUrl, getStoreLogoHoverSrcProps } =
    useStoreData()

  const logoHoverStyles = {
    position: 'relative',
    h: { base: '75%', lg: '100%' },
    'span:last-child img': {
      opacity: '0',
    },
    '&:hover': {
      'span:first-child img': { opacity: '0' },
      'span:last-child img': { opacity: '1' },
    },
  }

  return (
    <Box
      bg={
        isReinsman
          ? 'reinsman.200'
          : isHighHorse
          ? 'highhorse.100'
          : isTucker
          ? 'tucker.200'
          : 'black'
      }
      display={isHeaderCollapsed ? 'flex' : 'none'}
    >
      <HStack
        mx="20px"
        spacing={{ base: 2, lg: 4 }}
        w={{ base: '100%', lg: 'auto' }}
        h={{ base: '38px', lg: '44px' }}
      >
        <Link
          href={
            cartId
              ? `${getStoreUrl('default')}?proxy=${cartId}`
              : `${getStoreUrl('default')}`
          }
          passHref
        >
          <ChakraLink width="41px" sx={logoHoverStyles}>
            <NextImage
              {...getStoreLogoSrcProps('default')}
              layout="fill"
              objectFit="contain"
            />
            <NextImage
              {...getStoreLogoHoverSrcProps('default')}
              layout="fill"
              objectFit="contain"
            />
          </ChakraLink>
        </Link>
        <Divider orientation="vertical" d={{ base: 'block', lg: 'block' }} />
        <Link
          href={
            cartId
              ? `${getStoreUrl('tucker')}?proxy=${cartId}`
              : `${getStoreUrl('tucker')}`
          }
          passHref
        >
          <ChakraLink width="78px" sx={logoHoverStyles}>
            <NextImage
              {...getStoreLogoSrcProps('tucker')}
              layout="fill"
              objectFit="contain"
            />
            <NextImage
              {...getStoreLogoHoverSrcProps('tucker')}
              layout="fill"
              objectFit="contain"
            />
          </ChakraLink>
        </Link>
        <Divider orientation="vertical" d={{ base: 'block', lg: 'block' }} />
        <Link
          href={
            cartId
              ? `${getStoreUrl('reinsman')}?proxy=${cartId}`
              : `${getStoreUrl('reinsman')}`
          }
          passHref
        >
          <ChakraLink width="78px" sx={logoHoverStyles}>
            <NextImage
              {...getStoreLogoSrcProps('reinsman')}
              layout="fill"
              objectFit="contain"
            />
            <NextImage
              {...getStoreLogoHoverSrcProps('reinsman')}
              layout="fill"
              objectFit="contain"
            />
          </ChakraLink>
        </Link>
        <Divider orientation="vertical" d={{ base: 'block', lg: 'block' }} />
        <Link
          href={
            cartId
              ? `${getStoreUrl('highhorse')}?proxy=${cartId}`
              : `${getStoreUrl('highhorse')}`
          }
          passHref
        >
          <ChakraLink width="78px" sx={logoHoverStyles}>
            <NextImage
              {...getStoreLogoSrcProps('highhorse')}
              layout="fill"
              objectFit="contain"
            />
            <NextImage
              {...getStoreLogoHoverSrcProps('highhorse')}
              layout="fill"
              objectFit="contain"
            />
          </ChakraLink>
        </Link>
      </HStack>
      <Box
        fontSize={['0.875rem', '0.9375rem']}
        display={{ base: 'none', lg: 'flex' }}
        position="relative"
        zIndex="1"
        justifyContent="right"
        fontWeight="400"
        pl={['7px', '0']}
        pr="30px"
        pt="12px"
        pb="10px"
        textAlign="center"
        ml="auto"
      >
        {topItems?.map((item, i) => {
          return (
            <Link key={i} href={item.url} passHref>
              <ChakraLink
                fontFamily={isHighHorse ? 'highHorse' : 'body'}
                color={isHighHorse || isTucker ? 'primary.50' : 'secondary.100'}
                mx="10px"
                _hover={{
                  textDecoration: 'none',
                  color: isHighHorse
                    ? 'highhorse.400'
                    : isTucker
                    ? 'tucker.100'
                    : 'circley.300',
                }}
              >
                {item.label}
              </ChakraLink>
            </Link>
          )
        })}

        <Link
          href={`/customer/account/${isLoggedIn ? 'dashboard' : 'login'}`}
          passHref
        >
          <ChakraLink
            fontFamily={isHighHorse ? 'highHorse' : 'body'}
            color={isHighHorse || isTucker ? 'primary.50' : 'secondary.100'}
            mx="10px"
            _hover={{
              textDecoration: 'none',
              color: isHighHorse
                ? 'highhorse.400'
                : isTucker
                ? 'tucker.100'
                : 'circley.300',
            }}
          >
            My Account
          </ChakraLink>
        </Link>
      </Box>
    </Box>
  )
}
