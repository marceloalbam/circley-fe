import { useQuery } from 'react-query'
import { Prismic, prismicClient } from '@wpro/prismic'
import { BlogCategoryType, BlogPostType, EntityType } from '../types'

export interface EntityResolverParams {
  slug: string
}

export const getEntityResolverKey = ({ slug }: EntityResolverParams) => {
  return ['prismic', 'useEntityResolver', slug]
}

export const useEntityResolver = (params: EntityResolverParams) => {
  const { data, isLoading } = useQuery(getEntityResolverKey(params), async () =>
    getEntityResolverService(params)
  )

  return {
    loading: isLoading,
    post: data?.post,
    category: data?.category,
  }
}

export const getEntityResolverService = async (
  params: EntityResolverParams
) => {
  const { slug } = params
  return Promise.all([
    // Blog Posts
    prismicClient.query(
      [
        Prismic.Predicates.at('document.type', EntityType.BlogPost),
        Prismic.Predicates.at(`my.${EntityType.BlogPost}.uid`, slug),
      ],
      {
        orderings: `[my.${EntityType.BlogPost}.date desc]`,
      }
    ),

    // Blog Category
    prismicClient.query(
      [
        Prismic.Predicates.at('document.type', EntityType.BlogCategory),
        Prismic.Predicates.at(`my.${EntityType.BlogCategory}.uid`, slug),
      ],
      {
        orderings: `[my.${EntityType.BlogCategory}.title]`,
      }
    ),
  ]).then((values) => {
    const [posts, categories] = values

    return {
      post: (posts.results?.[0] as unknown as BlogPostType) ?? null,
      category:
        (categories.results?.[0] as unknown as BlogCategoryType) ?? null,
    }
  })
}
