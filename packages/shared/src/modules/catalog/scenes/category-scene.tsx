import { Category } from '@wpro/magento/dist/types'
import { ProductListLayout } from '../components/product-list-layout'
import { HeadingBanner } from '@scope/ui'
//import { useDocument } from '@wpro/prismic'
import { CategoryListingType, EntityType } from '@scope/prismic'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { getSlug, getBlogPath } from '@wpro/prismic'
import { useCmsBlockData } from '../../../../src/hooks'
interface Props {
  category: Category
}
//console.log("Use Document category scene");
export const CategoryScene = ({ category }: Props) => {
  
  const { id, name, urlPath } = category
  /*
  const { document } = useDocument<CategoryListingType>({
    uid: `category-${urlPath}`,
    types: [EntityType.CategoryListing],
  })
  */

/*
{"id":"","uid":"","url":null,"type":"category_listing","href":"","tags":[],"first_publication_date":"2024-03-15T22:34:21+0000",
"last_publication_date":"2024-03-15T22:34:21+0000","slugs":[],"linked_documents":[],"lang":"en-us","alternate_languages":[],
"data":{"banner_background_image":{"dimensions":{"width":"1920","height":"408"},
"alt":"Saddles Category","copyright":null,
"url":"https://images.prismic.io/circleyn1/ZfTMrHYkiKrtlKHp_category-saddles-banner.jpg?auto=format,compress",
"id":"","edit":{"x":0,"y":0,"zoom":1,"background":"transparent"}},
"banner_content_placement":"center-left",
"banner_content_alignment":"left","banner_display_breadcrumbs":true,"banner_title":"Saddles"}}
*/
  let { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  if(storeView == 'default'){storeView = 'circley'}
  
  const pathname = 'category-'+urlPath
  const identifier = getSlug(pathname)
  const identifier_b = identifier+'-pwa-'+storeView

  try {
    const cmsBlockData = useCmsBlockData({identifier: identifier_b})
    
    let bodys = cmsBlockData?.data?.body!;

  const {
    banner_title: title,
    banner_background_image: bgImage,
    banner_display_breadcrumbs: displayBreadcrumbs,
    banner_content_placement: contentPlacement,
    banner_content_alignment: alignment,
  } = bodys?.data! ?? {}

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
  } catch (e) {
    return (<></>)
  }
}
