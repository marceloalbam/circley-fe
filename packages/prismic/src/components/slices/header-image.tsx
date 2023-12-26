import { HeaderImageSlice } from '../../types'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { HeadingBanner } from '@scope/ui'

/* New Slice Name: Full Width Image with Navigation */
export const HeaderImage = ({ primary }: HeaderImageSlice) => {
  const {
    background_image: bgImage,
    display_breadcrumbs: displayBreadcrumbs,
    title,
    cta_link: ctaLink,
    cta_label: ctaLabel,
    cta_type: ctaType,
    subtext,
    content_placement: contentPlacement,
    content_alignment: alignment,
  } = primary
  const { storeView } = useCoreContext()
  const background = { url: bgImage.url, alt: bgImage.alt }

  return (
    <HeadingBanner
      bgImage={background}
      contentPlacement={contentPlacement}
      alignment={alignment}
      displayBreadcrumbs={displayBreadcrumbs}
      title={title}
      subtext={subtext}
      ctaLabel={ctaLabel}
      ctaLink={ctaLink}
      ctaType={ctaType}
      storeView={storeView}
      minH={{ base: '350px', lg: '450px' }}
    />
  )
}
