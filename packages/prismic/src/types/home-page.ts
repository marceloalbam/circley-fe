import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'
import { PrismicSlices } from './slices'

export type HomePageType = EntityData<HomePageData, EntityType.HomePage>

export interface HomePageData {
  meta_description: string
  meta_keywords: string
  meta_title: string
  body: PrismicSlices[]
}
