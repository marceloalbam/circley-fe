import React from 'react'
import { PrismicSlices } from '../../types'
import { ImageObject } from './image-object'
import { ImageSlider } from './image-slider'
import { RichText } from './rich-text'
import { Hero } from './hero'
import { ContentColumns } from './content-columns'
import { TwoColumns } from './two-columns'
import { InstagramFeed } from './instagram-feed'
import { FeaturedProducts } from './featured-products'
import { HeaderImage } from './header-image'
import { Divider } from './divider'
import { ImageContent } from './image-content'
import { CmsNavigation } from './cms-navigation'
import { Video } from './video'
import { FaqsGrid } from './faqs-grid'
import { Carousel } from './carousel'
import { DownloadImageLink } from './download-image-link'
import { HtmlSnippet } from './html-snippet'
import { StoreLocator } from './store-locator'
import { FaqWidget } from './faq-widget'
import { BoxProps } from '@chakra-ui/react'

interface Props {
  slice: PrismicSlices
  index?: number
  heroCarouselRootProps?: BoxProps
}

export const SliceResolver = ({
  slice,
  index,
  heroCarouselRootProps,
}: Props) => {
  switch (slice.slice_type) {
    case 'image_object':
      return <ImageObject {...slice} />

    case 'image_slider':
      return <ImageSlider {...slice} />

    case 'rich_text':
      return <RichText {...slice} />

    case 'hero':
      return <Hero {...slice} carouselRootProps={heroCarouselRootProps} />

    case 'content_columns':
      return <ContentColumns {...slice} index={index} />

    case 'two_columns':
      return <TwoColumns {...slice} />

    case 'instagram_feed':
      return <InstagramFeed {...slice} />

    case 'featured_products':
      return <FeaturedProducts {...slice} />

    case 'header_image':
      return <HeaderImage {...slice} />

    case 'divider':
      return <Divider {...slice} />

    case 'image_and_content':
      return <ImageContent {...slice} />

    case 'cms_navigation':
      return <CmsNavigation {...slice} />

    case 'video':
      return <Video {...slice} />

    case 'faqs_grid':
      return <FaqsGrid {...slice} />

    case 'carousel':
      return <Carousel {...slice} />

    case 'download_image_link':
      return <DownloadImageLink {...slice} />

    case 'html_snippet':
      return <HtmlSnippet {...slice} />

    case 'store_locator':
      return <StoreLocator {...slice} />

    case 'faq_widget':
      return <FaqWidget {...slice} />

    default:
      return null
  }
}
