import { NextSeo } from 'next-seo'
import { Box, VStack } from '@chakra-ui/react'
import { EntityType, HomePageType, PageType, PrismicSlices } from '../types'
import { SliceResolver } from '../components'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

import { useRouter } from 'next/router'
import { getSlug, getBlogPath } from '@wpro/prismic'
import { PageLoading } from '@wpro/magento/dist/ui'
import { NotFound } from '@wpro/magento/dist/modules/shared'
import { useEntityResolver } from '../hooks'
import { useCmsPageData, useCmsBlockData } from '../../../../packages/shared/src/hooks'
interface cmsData {
    title: string;
    content: string;
    meta_title: string;
    meta_description: string;
}
interface cmsBlock {
    identifier: string;
    title: string;
    content: string;
}

export const HomePage = ({ data }: PageType) => {
  let { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  if(storeView == 'default'){storeView = 'circley'}

  const router = useRouter()
  const pathname = 'homepage'
  //const pathname = router.asPath
  const identifier = getSlug(pathname)
  const identifier_b = identifier+'-pwa-'+storeView
  
  let title = ''
  let document_1 = ''
  let meta_title = ''
  let meta_description = ''
  
  let title_b = ''
  let content_b = ''
  let meta_title_b = ''
  let meta_description_b = ''
  
  try {
    const cmsBlockData = useCmsBlockData({identifier: identifier_b})
  
    let bodys: PageType = cmsBlockData?.data?.body!;
  
    const { body } = bodys?.data! ?? {}
  
    const spacingForFirstSlice = { base: '30px', md: '30px' }
    const spacingForSlice = { base: '40px', md: '80px' }

  return (
    <Box
      sx={{
        '.hero-home': {
          '+ div': {
            marginTop: '30px !important',
          },
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: isReinsman
            ? 'reinsman'
            : isHighHorse
            ? 'highHorse'
            : isTucker
            ? 'tucker'
            : 'heading',
          fontWeight: isHighHorse ? '700' : 'auto',
        },
        p: {
          fontFamily: isHighHorse ? 'highHorse' : 'body',
        },
      }}
    >
      <NextSeo
        title={meta_title_b}
        description={meta_description_b}
      />
      {body?.map((slice, i) => (
        <VStack
          key={i}
          spacing={{ base: '80px', md: '160px' }}
          overflow="hidden"
          mb={i === 0 ? spacingForFirstSlice : spacingForSlice}
        >
          <SliceResolver slice={slice} index={i} />
        </VStack>
      ))}
    </Box>
  )
  } catch (e) {
    return (<Box></Box>)
  }
}
function reemplazarTexto(texto: string, buscar: string, reemplazo: string): string {
  return texto.replace(new RegExp(buscar, 'g'), reemplazo);
}