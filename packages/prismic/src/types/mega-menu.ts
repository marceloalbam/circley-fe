import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'

export type MegaMenu = EntityData<MegamenuData, EntityType.MegaMenu>

export interface MenuItem {
  link_title: string | null
  link_url: string | null
  is_parent_category: boolean
}

export interface MegamenuData {
  column_1: MenuItem[] | undefined
  column_2: MenuItem[] | undefined
  column_3: MenuItem[] | undefined
  column_4: MenuItem[] | undefined
}
