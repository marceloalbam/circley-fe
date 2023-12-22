import { RichTextBlock } from 'prismic-reactjs'
import { EntityData } from '@wpro/prismic'
import { EntityType } from './entity-type'
import { PrismicSlice } from '@wpro/prismic'

export type FaqsAccordionType = EntityData<
  FaqsAccordionData,
  EntityType.FaqsAccordions
>

export type FaqAccordionSlice = PrismicSlice<
  'accordions_section',
  {
    title: string | null
  },
  {
    title: string | null
    content: RichTextBlock[]
  }
>

export interface FaqsAccordionData {
  body: FaqAccordionSlice[]
}
