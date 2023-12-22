import { RichTextBlock } from 'prismic-reactjs'
import { PrismicImageInterface, PrismicSlice } from '@wpro/prismic'
import { PrismicEmbedInterface } from '@wpro/prismic'

export type PrismicSlices =
  | ImageObjectSlice
  | ImageSliderSlice
  | RichTextSlice
  | HeroHomeSlice
  | ContentColumnsSlice
  | TwoColumnsSlice
  | InstagramFeedSlice
  | FeaturedProductsSlice
  | HeaderImageSlice
  | DividerSlice
  | ImageContentSlice
  | CmsNavigationSlice
  | VideoSlice
  | FaqsGridSlice
  | CarouselSlice
  | DownloadImageLinkSlice
  | HTMLSnippetSlice
  | StoreLocatorSlice
  | FaqWidgetSlice

export type ImageSliderSlice = PrismicSlice<
  'image_slider',
  {},
  {
    image_slider_title: string
    image_slider_description: string
    image_slider_image: PrismicImageInterface
  }
>

export type ImageObjectSlice = PrismicSlice<
  'image_object',
  {
    section_title: string | null
    section_subtitle: RichTextBlock[]
    text_alignment: 'left' | 'center' | 'right'
    cta_label: string | null
    cta_link: string | null
    cta_type: 'outline' | 'solid' | 'underline'
    layout: 'standard' | 'full' | 'narrow'
  },
  {
    image: PrismicImageInterface
    content: RichTextBlock[]
    content_alignment: 'left' | 'center' | 'right'
    cta_label: string | null
    cta_link: string | null
    cta_type: 'outline' | 'solid' | 'underline'
    link_to_file: {
      url: string | null
    }
  }
>

export type RichTextSlice = PrismicSlice<
  'rich_text',
  {
    bg_color: string | null
    content: RichTextBlock[]
    layout: 'full' | 'standard' | 'narrow'
    content_alignment: 'left' | 'center' | 'right'
    inner_padding: number | null
  },
  {}
>

export type HeroHomeSlice = PrismicSlice<
  'hero',
  {
    display_arrows: boolean
    display_navigation: boolean
    is_autoplay: boolean
    transition_speed: number | null
  },
  {
    content_placement:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'center-left'
      | 'center-center'
      | 'center-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
    main_image: PrismicImageInterface
    title: string | null
    title_alignment: 'left' | 'center' | 'right'
    title_color: string | null
    subtext: RichTextBlock[]
    subtext_alignment: 'left' | 'center' | 'right'
    subtext_color: string | null
    link_text: string | null
    link_url: string | null
    link_type: 'outline' | 'solid' | 'underline'
    cta_alignment: 'left' | 'center' | 'right'
    cta_text_color: string | null
  }
>

export type ContentColumnsSlice = PrismicSlice<
  'content_columns',
  {
    column_count: number | null
    layout: 'narrow' | 'wide'
  },
  {
    image: PrismicImageInterface
    title: string | null
    link_label: string | null
    link_url: string | null
    content: RichTextBlock[]
  }
>

export type TwoColumnsSlice = PrismicSlice<
  'two_columns',
  {
    image: PrismicImageInterface
    text_before_title: string | null
    title: string | null
    content: RichTextBlock[]
    link_label: string | null
    link_url: string | null
    align_image_right: boolean
    image_shadow_color: string | null
    content_alignment: 'left' | 'center' | 'right'
    cta_type: 'outline' | 'solid' | 'underline'
    cta_text_color: string | null
    bg_image: PrismicImageInterface
    display_default_bg: boolean
  },
  {}
>

export type InstagramFeedSlice = PrismicSlice<
  'instagram_feed',
  {
    text_before_title: string | null
    title: string | null
    token: string | null
    image_count: number | null
  },
  {}
>

export type FeaturedProductsSlice = PrismicSlice<
  'featured_products',
  {
    title: string | null
    layout: 'narrow' | 'wide'
    display_arrows: boolean
    display_navigation: boolean
    display_line_behind_title: boolean
    is_autoplay: boolean
    transition_speed: number | null
  },
  {
    sku: string | null
  }
>

export type HeaderImageSlice = PrismicSlice<
  'header_image',
  {
    title: string | null
    display_breadcrumbs: boolean
    background_image: PrismicImageInterface
    content_placement:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'center-left'
      | 'center-center'
      | 'center-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
    subtext: RichTextBlock[]
    cta_label: string | null
    cta_link: string | null
    cta_type: 'outline' | 'solid' | 'underline'
    content_alignment: 'left' | 'center' | 'right'
  },
  {}
>

export type DividerSlice = PrismicSlice<
  'divider',
  {
    display_line: boolean
    size: 'default' | 'small' | 'large'
  },
  {}
>

export type ImageContentSlice = PrismicSlice<
  'image_and_content',
  {
    image: PrismicImageInterface
    image_width: number | null
    text_before_title: string | null
    title: string | null
    content: RichTextBlock[]
    align_image_right: boolean
    cta_label: string | null
    cta_link: string | null
    cta_type: 'outline' | 'solid' | 'underline'
    content_alignment: 'left' | 'center' | 'right'
  },
  {}
>

export type CmsNavigationSlice = PrismicSlice<
  'cms_navigation',
  {
    navigation: {
      uid: string
    }
  },
  {}
>

export type VideoSlice = PrismicSlice<
  'video',
  {
    video_url: PrismicEmbedInterface
    image: PrismicImageInterface
    title: string | null
    content: RichTextBlock[]
  },
  {}
>

export type FaqsGridSlice = PrismicSlice<
  'faqs_grid',
  {
    accordion: {
      id: string | null
    }
  },
  {}
>

export type CarouselSlice = PrismicSlice<
  'carousel',
  {
    display_arrows: boolean
    display_dots: boolean
    autoplay: boolean
    content_max_width: number | null
    display_bg: boolean
  },
  {
    image: PrismicImageInterface
    title: string | null
    content: RichTextBlock[]
  }
>

export type DownloadImageLinkSlice = PrismicSlice<
  'download_image_link',
  {
    image: PrismicImageInterface
    link_to_file: {
      url: string | null
    }
    content: RichTextBlock[]
  },
  {}
>

export type HTMLSnippetSlice = PrismicSlice<
  'html_snippet',
  {
    html: string | null
    scripts: string | null
  },
  {}
>

export type StoreLocatorSlice = PrismicSlice<
  'store_locator',
  {
    enable_store_locator: boolean
  },
  {}
>

export type FaqWidgetSlice = PrismicSlice<
  'faq_widget',
  {
    enable_widget: boolean
  },
  {}
>
