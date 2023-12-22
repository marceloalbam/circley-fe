import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'
import { PrismicSlices } from './slices'

export type SerialNumberPageType = EntityData<SerialNumberPageData, EntityType.SerialNumberPage>

export interface SerialNumberPageData {
  meta_description: string
  meta_keywords: string
  meta_title: string
  title: string
  body: PrismicSlices[]
}
