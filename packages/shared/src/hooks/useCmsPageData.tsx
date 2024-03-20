import { useQuery } from 'react-query'
import { urql } from '@wpro/magento/dist/core/services/magento/client'

export interface CmsPageDataParams {
  identifier: string | undefined
}
interface cmsData {
    title: string;
    content: string;
    meta_title: string;
    meta_description: string;
}
export const getCmsPageDataQuery = /* GraphQL */ `
  query getCmsPageDataQuery($identifier: String) {
  cmsPage( identifier: $identifier ) {
    title
    url_key
    content_heading
    content
    page_layout
    meta_title
    meta_keywords
    meta_description
  }
}
`

export const getCmsPageDataKey = (params?: CmsPageDataParams) => {
  return ['useCmsPageData', params?.identifier ?? null]
}

export const getCmsPageDataService = async (params: CmsPageDataParams) => {
  const { identifier } = params
  const query = await urql
    .query(
      getCmsPageDataQuery,
      { identifier },
      {
        preferGetMethod: true,
      }
    )
    .toPromise()
    
    let cmsDataJson = {title: query?.data.cmsPage.title,content: query?.data.cmsPage.content,meta_title: query?.data.cmsPage.meta_title,meta_description: query?.data.cmsPage.meta_description};
    
    let cmsdata: cmsData = JSON.parse(JSON.stringify(cmsDataJson));
  return cmsdata
}

export const useCmsPageData = (params: CmsPageDataParams) => {
  const result = useQuery(
    getCmsPageDataKey(params),
    async () => await getCmsPageDataService(params),
    {
      enabled: Boolean(params?.identifier),
    }
  )

  return result
}
