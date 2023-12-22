import { NextSeo } from 'next-seo'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { BlogPostType } from '../types'
import { BlogBreadcrumbs, SliceResolver } from '../components'

export const PrismicBlogPostPage = ({ data }: BlogPostType) => {
  const { body, title } = data

  return (
    <Box>
      <NextSeo title={data.meta_title} description={data.meta_description} />
      <BlogBreadcrumbs items={[{ title }]} />
      <Heading mb="30px">{title}</Heading>

      <VStack spacing="30px">
        {body.map((slice, i) => {
          return <SliceResolver key={i} slice={slice} />
        })}
      </VStack>
    </Box>
  )
}
