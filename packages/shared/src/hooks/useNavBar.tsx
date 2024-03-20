import { useQuery } from 'react-query'
import { urql } from '@wpro/magento/dist/core/services/magento/client'

export interface NavBarParams {
  sku: string | undefined
}

export const GetCategoryNodes = /* GraphQL */ `
  {
  categoryList(filters: {}) {
    id
    name
    include_in_menu
    children_count
    children {
      id
      level
      name
      path
      url_path
      url_key
      image
      description
      children {
        id
        level
        name
        path
        url_path
        url_key
        image
        description
        children {
          id
          level
          name
          path
          url_path
          url_key
          image
          description
          children {
            id
            level
            name
            path
            url_path
            url_key
            image
            description
          }
        }
      }
    }
  }
}
`

export const getNavBarKey = (params?: NavBarParams) => {
  return ['useNavBar', params?.sku ?? null]
}

export const getNavBarService = async (params: NavBarParams) => {
  const { sku } = params
  const query = await urql
    .query(
      GetCategoryNodes,
      { sku },
      {
        preferGetMethod: true,
      }
    )
    .toPromise()
  return query?.data
}

export const useNavBar = (params: NavBarParams) => {
  const result = useQuery(
    getNavBarKey(params),
    async () => await getNavBarService(params),
    {
      enabled: Boolean(params?.sku),
    }
  )

  return result
}
