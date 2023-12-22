import { EntityData } from '@wpro/prismic'
import { PrismicPage, PrismicSerialNumberPage } from '../pages'

export const PrismicPageResolver = (props: EntityData<any, string>) => {
  switch(props.type){
    case 'serial_number_page':
      return <PrismicSerialNumberPage {...(props as any)} />
    case 'page':
    default:
      return <PrismicPage {...(props as any)} />
  }
}
