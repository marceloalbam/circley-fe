import { GetServerSideProps } from 'next'
import {
  prismicSitemapGenerator,
  serverSideSitemaps,
  shopifySitemapGenerator,
} from '@wpro/sitemap'
import { magentoSitemapGenerator } from '@wpro/sitemap'

export const Sitemap = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const mainSitemapPath = '/sitemap/index.xml'

  const originUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ''
  const pathname = ctx.resolvedUrl ?? ''

  const prismicSitemapGenerator = getPrismicSitemapGenerator(
    originUrl,
    pathname
  )

  const magentoSitemapGenerator = getMagentoSitemapGenerator(
    pathname,
    originUrl
  )

  const { getServerSidePropsValue } = await serverSideSitemaps(ctx, {
    generators: [prismicSitemapGenerator, magentoSitemapGenerator],
    mainSitemapPath,
  })

  return getServerSidePropsValue()
}

export default Sitemap

const prismicTypeUrlResolver = (type: string, url: string) => {
  if (type === 'blog_category' || type === 'blog_post') {
    return `${process.env.NEXT_PUBLIC_PRISMIC_BLOG_PATH}${url}`
  }
  return url
}

const getPrismicSitemapGenerator = (originUrl: string, pathname: string) => {
  const cmsSitemapPath = '/sitemap/cms.xml'
  const prismicPageTypes = ['page', 'blog_category', 'blog_post']
  const pagesUrls = [`${process.env.NEXT_PUBLIC_PRISMIC_BLOG_PATH}`]

  return prismicSitemapGenerator({
    options: {
      cmsSitemapPath,
      originUrl,
      pathname,
      prismicPageTypes,
      pagesUrls,
      prismicTypeUrlResolver,
    },
  })
}

const getMagentoSitemapGenerator = (pathname: string, originUrl: string) => {
  const sitemapUrl = process.env.NEXT_PUBLIC_MAGENTO_SITEMAP_URL ?? ''

  return magentoSitemapGenerator({
    options: {
      sitemapUrl,
      originUrl,
      pathname,
    },
  })
}
