import { EntityData, PrismicImageInterface } from '@wpro/prismic'
import { EntityType } from './entity-type'

export type CategoryListingType = EntityData<
  CategoryListingData,
  EntityType.CategoryListing
>

export interface CategoryListingData {
  banner_background_image: PrismicImageInterface
  banner_content_placement:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
  banner_content_alignment: 'left' | 'center' | 'right'
  banner_title: string | null
  banner_display_breadcrumbs: boolean
}
