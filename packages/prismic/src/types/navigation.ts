import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'

export type Navigation = EntityData<NavData, EntityType.Nav>

export interface NavBarItem {
  label: string
  url: string
  menu?: {
    uid: string | undefined
    type: string
  }
}

export interface TopBarItem {
  label: string
  url: string
}

export interface NavData {
  top_bar: TopBarItem[]
  nav_bar: NavBarItem[]
}
