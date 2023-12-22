import { useIntl } from 'react-intl'
import { useProductListPage } from '@wpro/magento/dist/modules/catalog'
import { Filter } from '@wpro/magento/dist/modules/catalog/components/LayeredNavMobile/components/Filter'
import {
  Button,
  Box,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps,
} from '@chakra-ui/react'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { BRAND_FILTER_CODE } from '../../../../resources/constants'

interface Props extends Omit<DrawerProps, 'children'> {
  categoryId?: number
  onApplyFilters?: () => void
  visibleItems?: number
  isDraft?: boolean
}

export const LayeredNavMobile = ({
  categoryId,
  onApplyFilters,
  visibleItems = 6,
  isDraft = true,
  isOpen,
  onClose,
}: Props) => {
  const intl = useIntl()
  const {
    isFetching,
    handleFilterChange,
    layeredNav,
    filters,
    setFilters,
    draftFiltersChanged,
    clearDraftFilters,
  } = useProductListPage({
    categoryId,
    withLayeredNav: true,
    draftMode: isDraft,
  })
  const { storeView } = useCoreContext()

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {intl.formatMessage({ id: 'catalog.layeredNav.filterBy' })}
        </DrawerHeader>
        <DrawerBody>
          <Box cursor={isFetching ? 'wait' : 'default'}>
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
                        visibleItems={visibleItems}
                        isDraft={isDraft}
                        onApplyFilters={onApplyFilters}
                      />
                    )
                  })}
                </VStack>
              </Box>
            )}
          </Box>
        </DrawerBody>

        {isDraft && (
          <DrawerFooter>
            <Button
              mr={3}
              variant={`outline-${storeView}`}
              disabled={!draftFiltersChanged}
              onClick={() => {
                clearDraftFilters()
                onClose()
              }}
            >
              {intl.formatMessage({ id: 'action.cancel' })}
            </Button>
            <Button
              variant={`solid-${storeView}`}
              disabled={!draftFiltersChanged}
              onClick={() => {
                setFilters(filters)
                onApplyFilters?.()
              }}
            >
              {intl.formatMessage({ id: 'action.apply' })}
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
