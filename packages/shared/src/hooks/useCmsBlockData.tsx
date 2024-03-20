import { useQuery } from 'react-query'
import { urql } from '@wpro/magento/dist/core/services/magento/client'
import { HomePageType, PrismicSlices } from '../../../prismic/src/types'

export interface CmsBlockDataParams {
  identifier: string | undefined
}
interface PageTypeC {
    identifier: string;
    title: string;
    body: PrismicSlices[];
}
/*
interface PageType{
  data: PageType
}
*/
export const getCmsBlockDataQuery = /* GraphQL */ `
  query getCmsBlockDataQuery($identifier: String) {
      cmsBlocks(identifiers: [$identifier] ) {
        items {
          identifier
          title
          content
        }
      }
    }
`

export const getCmsBlockDataKey = (params?: CmsBlockDataParams) => {
  return ['useCmsBlockData', params?.identifier ?? null]
}

export const getCmsBlockDataService = async (params: CmsBlockDataParams) => {
  
  const { identifier } = params
  
  const query = await urql
    .query(
      getCmsBlockDataQuery,
      { identifier },
      {
        preferGetMethod: true,
      }
    )
    .toPromise()
    //return query?.data
//let datacontent = JSON.stringify(query?.data.cmsBlocks.items[0].content);
    try{
    const textoOriginal = query?.data.cmsBlocks.items[0].content;
    let textoModificado = reemplazarTexto(textoOriginal, "\/", "/");
    textoModificado = reemplazarTexto(textoModificado, "_c#d_", '"');
    textoModificado = reemplazarTexto(textoModificado, "_c%d_", "'");

    let body_data = JSON.parse(textoModificado);
//const {data} = PageType;
    let cmsBlockJson = {meta_description:"",meta_keywords:"",meta_title:"",title: query?.data.cmsBlocks.items[0].title,body: body_data};
    let cmsblock = JSON.parse(JSON.stringify(cmsBlockJson));
    return cmsblock
    } catch (e) {
      return query?.data
    }
}
function reemplazarTexto(texto: string, buscar: string, reemplazo: string): string {
  return texto.replace(new RegExp(buscar, 'g'), reemplazo);
}
export const useCmsBlockData = (params: CmsBlockDataParams) => {
  
  const result = useQuery(
    getCmsBlockDataKey(params),
    async () => await getCmsBlockDataService(params),
    {
      enabled: Boolean(params?.identifier),
    }
  )

  return result
}
