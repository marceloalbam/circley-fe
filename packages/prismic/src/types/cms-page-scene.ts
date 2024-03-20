import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'
import { PrismicSlices } from './slices'

export type CmsPageSceneType = EntityData<CmsPageSceneData, EntityType.Page>

export interface CmsPageSceneData {
  meta_description: string
  meta_keywords: string
  meta_title: string
  title: string
  body: PrismicSlices[]
}
