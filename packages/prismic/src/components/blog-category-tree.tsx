import { Box } from '@chakra-ui/react'
import { useBlogCategories } from '../hooks'
import { NavItem } from './nav-item'

export const BlogCategoryTree = () => {
  const { documents } = useBlogCategories()
  if (!documents) {
    return null
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderWidth="1px"
      mb="20px"
      p="20px"
    >
      {documents?.map((category) => {
        return <NavItem key={category.id} category={category} />
      })}
    </Box>
  )
}
