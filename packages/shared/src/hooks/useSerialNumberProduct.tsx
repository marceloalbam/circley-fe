import { useQuery } from 'react-query'
import { urql } from '@wpro/magento/dist/core/services/magento/client'
import { Maybe, Scalars } from '@wpro/magento/dist/types/magento/schema'

export type SerialNumber = {
  __typename?: 'SerialNumber'

  brand?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  date_made?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  fenders?: Maybe<Scalars['String']>
  freedom_fit?: Maybe<Scalars['String']>
  hardware?: Maybe<Scalars['String']>
  information?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['String']>
  model_number?: Maybe<Scalars['String']>
  product_line?: Maybe<Scalars['String']>
  rigging?: Maybe<Scalars['String']>
  saddle_color?: Maybe<Scalars['String']>
  seat_color?: Maybe<Scalars['String']>
  seat_size?: Maybe<Scalars['String']>
  seat_type?: Maybe<Scalars['String']>
  serial_number?: Maybe<Scalars['String']>
  skirt?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  stirrups?: Maybe<Scalars['String']>
  tooling?: Maybe<Scalars['String']>
  tree_fit?: Maybe<Scalars['String']>
  tree_size?: Maybe<Scalars['String']>
  upgrades?: Maybe<Scalars['String']>
}

export type GetSerialNumberProductQuery = { __typename?: 'Query' } & {
  getSerialNumberProduct?: Maybe<
    { __typename?: 'SerialNumber' } & {
      items?: Maybe<
        Array<
          Maybe<
            { __typename?: 'CmsBlock' } & Pick<
              SerialNumber,
              | 'brand'
              | 'category'
              | 'date_made'
              | 'description'
              | 'fenders'
              | 'freedom_fit'
              | 'hardware'
              | 'information'
              | 'model'
              | 'model_number'
              | 'product_line'
              | 'rigging'
              | 'saddle_color'
              | 'seat_color'
              | 'seat_size'
              | 'seat_type'
              | 'serial_number'
              | 'skirt'
              | 'status'
              | 'stirrups'
              | 'tooling'
              | 'tree_fit'
              | 'tree_size'
              | 'upgrades'
            >
          >
        >
      >
    }
  >
}

export interface SerialNumberProductParams {
  serial_number: String
}

export const getSerialNumberProductQuery = /* GraphQL */ `
  query getSerialNumberProductQuery($serial_number: String) {
    getSerialNumberProduct(serial_number: $serial_number) {
      brand
      serial_number
      description
      category
      date_made
      model
      model_number
      product_line
      saddle_color
      seat_color
      seat_size
      tree_size
      status
    }
  }
`

export const getSerialNumberProductKey = (
  params?: SerialNumberProductParams
) => {
  return ['useSerialNumberProduct', params?.serial_number ?? null]
}

export const getSerialNumberProductService = async (
  params: SerialNumberProductParams
) => {
  const { serial_number } = params
  const query = await urql
    .query<GetSerialNumberProductQuery>(
      getSerialNumberProductQuery,
      { serial_number },
      {
        preferGetMethod: true,
      }
    )
    .toPromise()
    
  return query?.data
}

export const useSerialNumberProduct = (params: SerialNumberProductParams) => {
  return useQuery(
    getSerialNumberProductKey(params),
    async () => await getSerialNumberProductService(params),
    {
      enabled: Boolean(params?.serial_number),
    }
  )
}
