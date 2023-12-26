import { Category } from '@wpro/magento/dist/types'
import { ProductListLayout } from '../components/product-list-layout'
import { HeadingBanner } from '@scope/ui'
import { useDocument } from '@wpro/prismic'
import { CategoryListingType, EntityType } from '@scope/prismic'

interface Props {
  category: Category
}

export const CategoryScene = ({ category }: Props) => {
  const { id, name, urlPath } = category
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
