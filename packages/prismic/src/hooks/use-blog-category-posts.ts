import { useQuery } from 'react-query'
import { Prismic, prismicClient } from '@wpro/prismic'
import { BlogPostType, EntityType } from '../types'

export interface BlogCategoryPostsParams {
  id: string
}

export const getBlogCategoryPostsKey = ({ id }: BlogCategoryPostsParams) => {
  return ['prismic', 'useBlogCategoryPosts', id]
}

export const useBlogCategoryPosts = (params: BlogCategoryPostsParams) => {
  const { data, isLoading } = useQuery(
    getBlogCategoryPostsKey(params),
    async () => getBlogCategoryPostsService(params)
  )

  return {
    documents: data,
    loading: isLoading,
  }
}

export const getBlogCategoryPostsService = async (
  params: BlogCategoryPostsParams
) => {
  const { id } = params
  return Promise.all([
    prismicClient.query(
      [
        Prismic.Predicates.at('document.type', EntityType.BlogPost),
        Prismic.Predicates.at(
          `my.${EntityType.BlogPost}.categories.category`,
          id
        ),
      ],
      {
        orderings: `[my.${EntityType.BlogPost}.date desc]`,
      }
    ),
  ]).then((values) => {
    return values[0]?.results as unknown as BlogPostType[] | undefined
  })
}
