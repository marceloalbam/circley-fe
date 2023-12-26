import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'
import { PrismicSlices } from './slices'

export type PageType = EntityData<PageData, EntityType.Page>

export interface PageData {
  meta_description: string
  meta_keywords: string
  meta_title: string
  title: string
  body: PrismicSlices[]
}
