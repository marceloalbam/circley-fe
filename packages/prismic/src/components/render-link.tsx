import { BlogCategoryType } from '../types'
import Link from 'next/link'
import { getBlogPath } from '@wpro/prismic'
import { Link as ChakraLink } from '@chakra-ui/react'

interface RenderLinkProps {
  category: BlogCategoryType
}

export const RenderLink = ({ category }: RenderLinkProps) => {
  return (
    <Link href={getBlogPath(category.uid)} passHref>
      <ChakraLink>{category.data.title}</ChakraLink>
    </Link>
  )
}
