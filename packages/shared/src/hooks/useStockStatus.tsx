import { useQuery } from 'react-query'
import { urql } from '@wpro/magento/dist/core/services/magento/client'

export interface StockStatusParams {
  sku: string | undefined
}

export const getStockStatusQuery = /* GraphQL */ `
  query getStockStatusQuery($sku: String) {
    products(filter: { sku: { eq: $sku } }) {
      items {
        sku
        mp_stock_status
        mp_stock_status_info {
          image
          is_apply_child
          label
        }
      }
    }
  }
`

export const getStockStatusKey = (params?: StockStatusParams) => {
  return ['useStockStatus', params?.sku ?? null]
}

export const getStockStatusService = async (params: StockStatusParams) => {
  const { sku } = params
  const query = await urql
    .query(
      getStockStatusQuery,
      { sku },
      {
        preferGetMethod: true,
      }
    )
    .toPromise()
  return query?.data
}

export const useStockStatus = (params: StockStatusParams) => {
  const result = useQuery(
    getStockStatusKey(params),
    async () => await getStockStatusService(params),
    {
      enabled: Boolean(params?.sku),
    }
  )

  return result
}
