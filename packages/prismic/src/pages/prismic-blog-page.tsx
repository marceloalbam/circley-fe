// import { GetStaticPaths, GetStaticProps } from 'next'
// import { ServerSideInterface } from '@wpro/magento/dist/types'
// import { coreServerSideApp } from '@wpro/magento/dist/ssr'
// import { prefetchDocumentQuery } from '@wpro/prismic'
import { Box } from '@chakra-ui/react'
import { BlogCategoryTree, BlogEntityResolver } from '../components'
// import {
//   getBlogCategoriesKey,
//   getBlogCategoriesService,
//   getBlogCategoryPostsKey,
//   getBlogCategoryPostsService,
//   getEntityResolverKey,
//   getEntityResolverService,
// } from '../hooks'
// import { BLOG_FEATURED_CATEGORY_ID } from './prismic-blog-home-page'

export const PrismicBlogPage = () => {
  return (
    <>
      <Box>
        <BlogCategoryTree />
      </Box>
      <Box as="section">
        <BlogEntityResolver />
      </Box>
    </>
  )
}
//
// export const serverSidePrismicBlogScene: ServerSideInterface = () => {
//   const getStaticPaths: GetStaticPaths = async () => {
//     return {
//       paths: [],
//       fallback: 'blocking',
//     }
//   }
//
//   const getStaticProps: GetStaticProps = async (context) => {
//     const { getStaticProps, queryClient } = await coreServerSideApp()
//     const slug = context.params?.path?.toString() ?? ''
//     const entityResolverParams = { slug }
//
//     const entity = await getEntityResolverService(entityResolverParams)
//     const notFound = Boolean(slug && !entity.category && !entity.post)
//
//     await queryClient.prefetchQuery(
//       getEntityResolverKey(entityResolverParams),
//       async () => entity
//     )
//
//     const queries: Array<Promise<any>> = [
//       queryClient.prefetchQuery(
//         getBlogCategoriesKey(),
//         async () => await getBlogCategoriesService()
//       ),
//     ]
//
//     if (!slug) {
//       // blog home
//       queries.push(
//         prefetchDocumentQuery({
//           queryClient,
//           documentParams: {
//             id: BLOG_FEATURED_CATEGORY_ID,
//           },
//         }),
//
//         queryClient.prefetchQuery(
//           getBlogCategoryPostsKey({ id: BLOG_FEATURED_CATEGORY_ID }),
//           async () =>
//             await getBlogCategoryPostsService({ id: BLOG_FEATURED_CATEGORY_ID })
//         )
//       )
//     }
//
//     if (entity.category) {
//       // blog category
//       queries.push(
//         queryClient.prefetchQuery(
//           getBlogCategoryPostsKey({ id: entity.category.id }),
//           async () =>
//             await getBlogCategoryPostsService({ id: entity.category.id })
//         )
//       )
//     }
//
//     await Promise.all(queries)
//
//     return getStaticProps({
//       notFound,
//     })
//   }
//
//   return {
//     getStaticPaths,
//     getStaticProps,
//   }
// }
