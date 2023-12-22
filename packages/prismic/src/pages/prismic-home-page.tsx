import { NextSeo } from 'next-seo'
import { Box, VStack } from '@chakra-ui/react'
import { useDocument } from '@wpro/prismic'
import { EntityType, HomePageType } from '../types'
import { SliceResolver } from '../components'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

export const HomePage = () => {
  const { document } = useDocument<HomePageType>({
    uid: 'homepage',
    types: [EntityType.HomePage],
  })
  const { body } = document?.data ?? {}

  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
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
        title={document?.data.meta_title}
        description={document?.data.meta_description}
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
}
