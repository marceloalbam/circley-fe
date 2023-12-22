import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'
import { PrismicSlices } from './slices'

export type BlogPostType = EntityData<BlogPostData, EntityType.BlogPost>

export interface BlogPostData {
  meta_description: string
  meta_keywords: string
  meta_title: string
  title: string
  body: PrismicSlices[]
}
