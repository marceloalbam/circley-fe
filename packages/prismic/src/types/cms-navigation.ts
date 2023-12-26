import { EntityType } from './entity-type'
import { EntityData } from '@wpro/prismic'

export type CmsNavigationType = EntityData<CmsNavigationData, EntityType.Footer>

export interface CmsNavigationData {
  items: NavigationItem[]
}

interface NavigationItem {
  label: string | null
  link: string | null
}
