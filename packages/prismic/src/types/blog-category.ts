import { EntityData, PrismicImageInterface } from '@wpro/prismic'
import { EntityType } from './entity-type'

export type BlogCategoryType = EntityData<
  BlogCategoryDataType,
  EntityType.BlogCategory
>

export interface BlogCategoryDataType {
  meta_description: string
  meta_keywords: string
  meta_title: string
  title: string
  description: string
  image: PrismicImageInterface
  thumbnail: PrismicImageInterface
}
