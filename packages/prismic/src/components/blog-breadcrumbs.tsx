import Link from 'next/link'
import { useRouter } from 'next/router'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

interface Props {
  items?: Array<{
    title: string
    path?: string
  }>
}

export const BlogBreadcrumbs = ({ items }: Props) => {
  const router = useRouter()

  if (!process.env.NEXT_PUBLIC_PRISMIC_BLOG_PATH) {
    return null
  }

  return (
    <Breadcrumb mb="20px">
      <BreadcrumbItem>
        <Link href="/" passHref>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link href={process.env.NEXT_PUBLIC_PRISMIC_BLOG_PATH} passHref>
          <BreadcrumbLink>Blog</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>

      {items?.map((item, i) => {
        const { path, title } = item
        return (
          <BreadcrumbItem key={i}>
            <Link
              href={path ?? router.asPath.split('#')[0].split('?')[0]}
              passHref
            >
              <BreadcrumbLink>{title}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}
