import { useProductListPage } from '@wpro/magento/dist/modules/catalog'
import { Filter } from './filter'
import { Box, VStack, BoxProps } from '@chakra-ui/react'
import { BrandFilter } from './brand-filter'
import { BRAND_FILTER_CODE } from '@scope/shared/src/resources/constants'

interface Props extends BoxProps {
  categoryId?: number
  onFilterChange?: () => void
}

export const LayeredNav = ({
  categoryId,
  onFilterChange,
  ...boxProps
}: Props) => {
  const { isFetching, handleFilterChange, layeredNav, handleFilterRemove } =
    useProductListPage({
      categoryId,
      onFilterChange,
      withLayeredNav: true,
      filterElementRenderer: ({ label }) => label,
    })

  return (
    <Box cursor={isFetching ? 'wait' : 'default'} {...boxProps}>
      <BrandFilter />
      {layeredNav?.appliedFilters && (
        <Box pointerEvents={isFetching ? 'none' : undefined}>
          <VStack spacing={6} align="stretch">
            {layeredNav?.filterOptions.map((item) => {
              if (item.code === BRAND_FILTER_CODE) {
                return
              }
              return (
                <Filter
                  key={item.code}
                  isFetching={isFetching}
                  filterOptions={item}
                  handleFilterChange={handleFilterChange}
                />
              )
            })}
          </VStack>
        </Box>
      )}
    </Box>
  )
}
