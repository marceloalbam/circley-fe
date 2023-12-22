import { CmsPageScene } from '@wpro/magento/dist/modules/cms'
import { DynamicRoute } from '@wpro/magento/dist/modules/shared'
import {
  NoMatchPage,
  ProductScene,
  CategoryScene,
} from '../../../packages/shared'

import { PrismicPageResolver, EntityType } from '@scope/prismic'
// import { prefetchDocumentQuery } from '@wpro/prismic'
// import { GetServerSideProps } from 'next'
//
// import {
//   coreServerSideRedirectVerification,
//   coreServerSideProxy,
//   coreServerSideDynamicPath,
// } from '@wpro/magento/dist/ssr'
//
// import { serverSideApp } from '@scope/ssr'

export const DynamicPath = () => {
  return (
    <DynamicRoute
      prismicPageType={[EntityType.Page, EntityType.SerialNumberPage]}
      components={{
        Category: CategoryScene,
        CmsPage: CmsPageScene,
        Product: ProductScene,
        PrismicPage: PrismicPageResolver,
        NoMatch: NoMatchPage,
      }}
    />
  )
}
//
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { redirectProps } = await coreServerSideRedirectVerification({
//     context,
//   })
//
//   if (redirectProps) {
//     return redirectProps
//   }
//
//   const res = await coreServerSideProxy({ context })
//   if (res) {
//     return res
//   }
//   const { getServerSidePropsValue } = await coreServerSideDynamicPath({
//     serverSideApp,
//     context,
//     options: {
//       prismicPageType: [EntityType.Page, EntityType.SerialNumberPage],
//     },
//
//     getCategoryPagePromiseList: ({ category, queryClient }) => {
//       return [
//         prefetchDocumentQuery({
//           queryClient,
//           documentParams: {
//             uid: `category-${category?.urlPath}`,
//             types: [EntityType.CategoryListing],
//           },
//         }),
//       ]
//     },
//   })
//
//   return await getServerSidePropsValue()
// }

export default DynamicPath
