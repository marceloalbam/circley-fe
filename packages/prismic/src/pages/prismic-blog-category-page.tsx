import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { getBlogPath } from '@wpro/prismic'

import { PageLoading } from '@wpro/magento/dist/ui'
import { Box, Link as ChakraLink, Heading } from '@chakra-ui/react'
import { IMAGE_PLACEHOLDER } from '@scope/shared'
import { BlogCategoryType } from '../types'
import { useBlogCategoryPosts } from '../hooks'
import { BlogBreadcrumbs } from '../components'

export const PrismicBlogCategoryPage = ({ id, data }: BlogCategoryType) => {
  const { documents: posts, loading } = useBlogCategoryPosts({ id })
  const { description, title } = data

  return (
    <Box>
      <NextSeo title={data.meta_title} description={data.meta_description} />
      <BlogBreadcrumbs items={[{ title }]} />
      <Heading>{title}</Heading>

      <Box display="flex">
        <Box width="40%">
          <Image
            src={data.image.url ?? IMAGE_PLACEHOLDER}
            width={data.image.alt ?? 200}
            height={data.image.alt ?? 200}
            alt={data.image.alt ?? ''}
            layout="responsive"
            objectFit="contain"
          />
        </Box>
        <Box width="60%">
          <p>{description}</p>
        </Box>
      </Box>

      {loading ? (
        <PageLoading />
      ) : (
        <ul>
          {posts?.map((post) => {
            const { uid, data } = post
            const { title } = data

            return (
              <li key={uid}>
                <Link href={getBlogPath(uid)} passHref>
                  <ChakraLink>
                    <div>
                      <strong>{title}</strong>
                    </div>
                  </ChakraLink>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </Box>
  )
}
