import { useQuery } from 'react-query'
import { Prismic, prismicClient } from '@wpro/prismic'
import { BlogCategoryType, EntityType } from '../types'

export const getBlogCategoriesKey = () => {
  return ['prismic', 'useBlogCategories']
}

export const useBlogCategories = () => {
  const { data, isLoading } = useQuery(getBlogCategoriesKey(), async () =>
    getBlogCategoriesService()
  )

  return {
    documents: data,
    loading: isLoading,
  }
}

export const getBlogCategoriesService = async () => {
  
  return Promise.all([
    prismicClient.query(
      Prismic.Predicates.at('document.type', EntityType.BlogCategory),
      {
        orderings: `[my.${EntityType.BlogCategory}.title]`,
      }
    ),
  ]).then((values) => {
    return (values[0].results as unknown as BlogCategoryType[]) ?? null
  })
}
