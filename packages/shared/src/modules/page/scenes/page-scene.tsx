//import { CmsPage } from '@wpro/magento/dist/types'
import { CmsPage } from '@wpro/magento/dist/modules/cms'
//import CmsPage from '@wpro/magento/dist/modules/cms'
//import { MagentoCmsPage } from '@wpro/magento/dist/types'
import { ProductListLayout } from '../components/product-list-layout'
import { HeadingBanner } from '@scope/ui'
import { useDocument } from '@wpro/prismic'
import { CategoryListingType, EntityType } from '@scope/prismic'

interface Props {
  cmsPage: CmsPage
}

export const CmsPageScene = ( { cmsPage } : Props) => {
//export const CmsPageScene = CmsPage => {
  console.log("CCCCC");
  console.log(cmsPage);
  
  const { id, name, urlPath } = cmsPage

  console.log("KKKKKKKK");
  console.log(id);
console.log(name);
console.log(urlPath);

  const { document } = useDocument<CategoryListingType>({
    uid: `category-${urlPath}`,
    types: [EntityType.CategoryListing],
  })


  const {
    banner_title: title,
    banner_background_image: bgImage,
    banner_display_breadcrumbs: displayBreadcrumbs,
    banner_content_placement: contentPlacement,
    banner_content_alignment: alignment,
  } = document?.data ?? {}
console.log("AAAAAAAAAAAAAAAA");
console.log(title);
  return (
    <ProductListLayout
      title={name}
      categoryId={id}
      banner={
        !bgImage?.url ? undefined : (
          <HeadingBanner
            bgImage={{ url: bgImage?.url, alt: bgImage?.alt ?? title ?? name }}
            contentPlacement={contentPlacement ?? 'center-left'}
            alignment={alignment ?? 'left'}
            displayBreadcrumbs={displayBreadcrumbs ?? true}
            title={title}
            minH="340px"
          />
        )
      }
    />
  )
}
