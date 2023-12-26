import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { getBlogPath, useDocument } from '@wpro/prismic'
import { PageLoading } from '@wpro/magento/dist/ui'

import { Box, Link as ChakraLink, Heading } from '@chakra-ui/react'
import { BlogCategoryType } from '../types'
import { useBlogCategoryPosts } from '../hooks'
import { BlogBreadcrumbs } from '../components'

export const BLOG_FEATURED_CATEGORY_ID = 'YCE9XBUAACYApaMA'

export const PrismicBlogHomePage = () => {
  const { document: category } = useDocument<BlogCategoryType>({
    id: BLOG_FEATURED_CATEGORY_ID,
  })

  const { documents: posts, loading } = useBlogCategoryPosts({
    id: BLOG_FEATURED_CATEGORY_ID,
  })

  const title = 'Prismic Blog Home'

  return (
    <Box>
      <NextSeo title={title} noindex />
      <BlogBreadcrumbs />
      <Heading mb="30px">{title}</Heading>

      {loading ? (
        <PageLoading />
      ) : (
        <Box borderWidth="1px" p="10px">
          <Heading size="md">{category?.data.title}</Heading>
          <Box>
            {posts?.map((post) => {
              const { uid, data } = post
              const { title } = data

              return (
                <Box my="20px" key={uid} width="100%">
                  <Link href={getBlogPath(uid)} passHref>
                    <ChakraLink>{title}</ChakraLink>
                  </Link>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </Box>
  )
}
