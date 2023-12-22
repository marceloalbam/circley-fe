import { useRouter } from 'next/router'
import { getSlug, getBlogPath } from '@wpro/prismic'
import { PageLoading } from '@wpro/magento/dist/ui'
import { NotFound } from '@wpro/magento/dist/modules/shared'
import { useEntityResolver } from '../hooks'
import {
  PrismicBlogCategoryPage,
  PrismicBlogHomePage,
  PrismicBlogPostPage,
} from '../pages'

export const BlogEntityResolver = () => {
  const router = useRouter()
  const pathname = router.asPath
  const { category, post, loading } = useEntityResolver({
    slug: getSlug(pathname),
  })

  if (pathname === getBlogPath()) {
    return <PrismicBlogHomePage />
  }

  if (category) {
    return <PrismicBlogCategoryPage key={category.id} {...category} />
  }

  if (post) {
    return <PrismicBlogPostPage key={post.id} {...post} />
  }

  if (loading) {
    return <PageLoading />
  }

  return <NotFound />
}
