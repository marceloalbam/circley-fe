import React, { useRef } from 'react'
import { PRODUCT_IMAGE_URL } from '@wpro/magento/dist/core/resources/constants'
import { MagentoMediaGalleryEntry } from '@wpro/magento/dist/types'
// @ts-expect-error
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Box, useMediaQuery, Image } from '@chakra-ui/react'
import { COLOR_MAP_PRIMARY } from '../../../../../../constants'

export interface Props {
  configurableGalleryImages: MagentoMediaGalleryEntry[]
  mediaGalleryItems: MagentoMediaGalleryEntry[]
  productName: string
  store?: string
}

export const MediaGallery = ({
  configurableGalleryImages,
  mediaGalleryItems,
  productName,
  store = 'default',
}: Props) => {
  const items: any[] = []
  const [isTablet] = useMediaQuery('(max-width: 831px)')
  const galleryRef = useRef<any>(null)

  mediaGalleryItems.forEach((item, index) => {
    const { file, media_type, video_content } = item

    items.push({
      original: `${PRODUCT_IMAGE_URL}${file}`,
      thumbnail: `${PRODUCT_IMAGE_URL}${file}`,
      originalAlt: item.label ?? `${productName} ${index}`,
      thumbnailAlt: item.label ?? `${productName} ${index}`,
      renderItem: () =>
        media_type == 'image' ? (
          <ImageItem
            label={item.label ?? ''}
            img={`${PRODUCT_IMAGE_URL}${file}`}
          />
        ) : (
          <VideoItem
            videoTitle={video_content?.video_title}
            videoEmbedUrl={video_content?.video_url}
          />
        ),
    })
  })

  if (mediaGalleryItems.length !== configurableGalleryImages.length) {
    configurableGalleryImages.forEach((item, index) => {
      const { file, media_type, video_content } = item
      items.push({
        original: `${PRODUCT_IMAGE_URL}${file}`,
        thumbnail: `${PRODUCT_IMAGE_URL}${file}`,
        originalAlt: item.label ?? `${productName} ${index}`,
        thumbnailAlt: item.label ?? `${productName} ${index}`,
        renderItem: () =>
          media_type == 'image' ? (
            <ImageItem
              label={item.label ?? ''}
              img={`${PRODUCT_IMAGE_URL}${file}`}
            />
          ) : (
            <VideoItem
              videoTitle={video_content?.video_title}
              videoEmbedUrl={video_content?.video_url}
            />
          ),
      })
    })
  }

  const showGallery = items.length > 1

  const properties = {
    ref: galleryRef,
    thumbnailPosition: !isTablet ? 'left' : 'bottom',
    useBrowserFullscreen: false,
    showPlayButton: false,
    showFullscreenButton: false,
    showNav: false,
    items: items,
    showThumbnails: showGallery,
    showBullets: false,
    showVideo: true,
  }

  const galleryStyles = {
    '.image-gallery-content': {
      height: '100%',
      bg: '#fff',
    },
    '.image-gallery-slide': {
      cursor: 'default',
    },
    '.image-gallery-slide-wrapper img': {
      margin: '0 auto',
    },
    '.image-gallery-thumbnail': {
      borderWidth: '2px',
      borderRadius: 'sm',
      '&:hover': {
        borderColor: 'transparent',
      },
      '&.active': {
        borderColor: COLOR_MAP_PRIMARY[store as string],
      },
    },
    '.image-gallery-fullscreen-button:hover': {
      color: COLOR_MAP_PRIMARY[store as string],
    },
  }

  const handleFullScreenClick = (e: any) => {
    const fullScreenElement = document.fullscreenElement
    const imageGallery = galleryRef?.current?.imageGallery?.current
    const isFullscreen =
      galleryRef?.current === fullScreenElement ||
      imageGallery.classList.contains('fullscreen-modal')

    if (isFullscreen) {
      galleryRef?.current?.exitFullScreen()
    } else {
      galleryRef?.current?.fullScreen()
    }
  }

  const ImageItem = ({ label, img }: { label?: string; img: string }) => {
    return (
      <Box cursor="pointer" onClick={(e) => handleFullScreenClick(e)}>
        <Image src={img} alt={label} />
      </Box>
    )
  }

  const VideoItem = ({
    videoTitle,
    videoEmbedUrl,
  }: {
    videoTitle?: string
    videoEmbedUrl: string
  }) => {
    return (
      <Box
        width="100%"
        minHeight={{ md: '380px', lg: '500px' }}
        position="relative"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Box
          position="relative"
          pb="56.25%"
          height={0}
          sx={{
            iframe: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          }}
        >
          <iframe
            src={videoEmbedUrl}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={galleryStyles}>
      <ImageGallery {...properties} />
    </Box>
  )
}
