import { BlogCategoryType } from '../types'
import { Box } from '@chakra-ui/react'
import { RenderLink } from './render-link'

interface NavItemProps {
  category: BlogCategoryType
}

export const NavItem = ({ category }: NavItemProps) => {
  return (
    <Box key={category.id}>
      <RenderLink category={category} />
    </Box>
  )
}
