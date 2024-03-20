import { Flex, Box, Stack, Link, Heading, Text } from '@chakra-ui/react'
import { EntityType, FooterType } from '@scope/prismic'
import { SubscribeForm, MenuDesktop, MenuMobile } from './components'
import { ImFacebook, ImInstagram } from 'react-icons/im'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { getSlug, getBlogPath } from '@wpro/prismic'
import { useCmsPageData, useCmsBlockData } from '../../../src/hooks'

export const Footer = () => {

  let { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  if(storeView == 'default'){storeView = 'circley'}

  const pathname = 'footer'//router.asPath
  const identifier = getSlug(pathname)
  const identifier_b = identifier+'-pwa-'+storeView

  try {
    const cmsBlockData = useCmsBlockData({identifier: identifier_b})
    let bodys = cmsBlockData?.data?.body!;
  const {
    newsletter_text: newsletterText,
    social_media_text: socialMediaText,
    facebook_url: facebookUrl,
    instagram_url: instagramUrl,
    copyright_text: copyrightText,
    body: menu,
  } = bodys?.data! ?? {}

  return (
    <Box as="footer" bgColor="primary.50" p="24px" pt="40px">
      <Box maxW="1200px" margin="auto">
        <Box textAlign="center">
          {newsletterText && (
            <Heading
              fontSize="25px"
              fontFamily={
                isReinsman
                  ? 'reinsman'
                  : isHighHorse
                  ? 'highHorse'
                  : isTucker
                  ? 'tucker'
                  : 'heading'
              }
              textTransform="uppercase"
              color={
                isReinsman
                  ? 'reinsman.200'
                  : isHighHorse
                  ? 'highhorse.300'
                  : isTucker
                  ? 'secondary.300'
                  : 'secondary.600'
              }
              letterSpacing="2.5px"
              fontWeight={isHighHorse ? '700' : '400'}
              mb={{ base: '25px', xl: '50px' }}
              display={{ base: 'block', xl: 'inline-block' }}
            >
              {newsletterText}
            </Heading>
          )}
          <SubscribeForm />
        </Box>
        <Box h="2px" bg="#dadad7" w="100%" pos="absolute" left="0" />
        <MenuDesktop menu={menu} />
        <MenuMobile menu={menu} />
        <Text
          textAlign="center"
          textTransform="uppercase"
          fontSize="18px"
          color={isHighHorse ? 'highhorse.300' : 'secondary.600'}
          my="20px"
          fontFamily={isHighHorse ? 'highHorse' : 'body'}
        >
          {socialMediaText}
        </Text>
        <Stack
          spacing="15px"
          mb={{ base: '0', sm: '40px' }}
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          direction="row"
          justifyContent="center"
        >
          {facebookUrl && (
            <Link href={facebookUrl}>
              <Flex w="48px" h="48px" alignItems="center" justify="center">
                <Box
                  as={ImFacebook}
                  fill={
                    isReinsman
                      ? 'reinsman.400'
                      : isHighHorse
                      ? 'highhorse.400'
                      : isTucker
                      ? 'tucker.400'
                      : 'circley.400'
                  }
                  w="20px"
                  h="20px"
                />
              </Flex>
            </Link>
          )}
          {instagramUrl && (
            <Link href={instagramUrl}>
              <Flex w="48px" h="48px" alignItems="center" justify="center">
                <Box
                  as={ImInstagram}
                  fill={
                    isReinsman
                      ? 'reinsman.400'
                      : isHighHorse
                      ? 'highhorse.400'
                      : isTucker
                      ? 'tucker.400'
                      : 'circley.400'
                  }
                  w="20px"
                  h="20px"
                />
              </Flex>
            </Link>
          )}
        </Stack>
        <Flex justifyContent="center" alignItems="center" py="40px">
          <Box fontSize="12px">© {copyrightText}</Box>
        </Flex>
      </Box>
    </Box>
  )
} catch (e) {
    return (<Box></Box>)
  }
}
function reemplazarTexto(texto: string, buscar: string, reemplazo: string): string {
  return texto.replace(new RegExp(buscar, 'g'), reemplazo);
}