import { DynamicRoute } from '@wpro/magento/dist/modules/shared'
import {
  NoMatchPage,
  ProductScene,
  CategoryScene,
} from '../../../packages/shared'

import { PrismicPageResolver, EntityType } from '@scope/prismic'

export const DynamicPath = () => {
  console.log("entity ype ");
  console.log(EntityType);
  return (
    <DynamicRoute
      prismicPageType={[EntityType.Page, EntityType.SerialNumberPage]}
      components={{
        Category: CategoryScene,
        CmsPage: PrismicPageResolver,
        Product: ProductScene,
        NoMatch: NoMatchPage,
      }}
    />
  )
}

export default DynamicPath
