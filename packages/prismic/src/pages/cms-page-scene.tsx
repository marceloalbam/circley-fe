import { NextSeo } from 'next-seo'
import { Box, Heading, VStack } from '@chakra-ui/react'
import PageType from '../types'
import { SliceResolver } from '../components'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

export const CmsPageScene = ({ data }: PageType) => {
  const { body, title } = data

  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'

  return (
    <Box
      sx={{
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
      <NextSeo title={data.meta_title} description={data.meta_description} />
      {title && <Heading mb="30px">{title}</Heading>}
      <VStack spacing="0" overflow="hidden">
        {body.map((slice, i) => {
          return <SliceResolver key={i} slice={slice} />
        })}
      </VStack>
    </Box>
  )
}
