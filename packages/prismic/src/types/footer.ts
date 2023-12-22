import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'

export type FooterType = EntityData<FooterData, EntityType.Footer>

export interface FooterData {
  newsletter_text: string
  social_media_text: string
  facebook_url: string
  instagram_url: string
  copyright_text: string
  body: Menu[]
}

export interface Menu {
  primary: MenuHeader
  items: MenuItem[]
}

interface MenuHeader {
  header: string
}

interface MenuItem {
  label: string
  url: string
}
