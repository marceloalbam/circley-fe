import { useRef } from 'react'
import { useIntl } from 'react-intl'
import ReactSelect from 'react-select'
import {
  CATALOG_SORT,
  CATALOG_PAGE,
} from '@wpro/magento/dist/core/resources/constants'
import {
  getSortOptions,
  getSortValue,
  useProductListPage,
} from '@wpro/magento/dist/modules/catalog'
import { COLOR_MAP_PRIMARY } from '@scope/shared/src/constants'
import { Pagination } from '@wpro/magento/dist/modules/shared'
import { Form } from '@wpro/magento/dist/ui'
import {
  useDisclosure,
  Box,
  Container,
  Button,
  BoxProps,
} from '@chakra-ui/react'
import { TotalCountContainer } from '@wpro/magento/dist/modules/catalog/components/LayeredControls/styled'
import { LayeredNavMobile } from './layered-nav-mobile'
import { BrandFilter } from './layered-nav/brand-filter'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props extends BoxProps {
  showTotalCount?: boolean
  showSorter?: boolean
  showPagination?: boolean
  categoryId?: number
  showLayeredNavAction?: boolean
  isDraft?: boolean
  onChange?: () => void
}

export const LayeredControls = ({
  categoryId,
  showPagination = true,
  showSorter = true,
  showTotalCount = true,
  showLayeredNavAction = true,
  isDraft = true,
  onChange,
  ...boxProps
}: Props) => {
  const {
    isFetching,
    pageInfo,
    currentSort,
    sortOptions,
    totalCount,
    handleFilterChange,
  } = useProductListPage({ categoryId })
  const { storeView } = useCoreContext()
  const intl = useIntl()
  const btnRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const renderPagination =
    (pageInfo?.totalItems ?? 0) > (pageInfo?.pageSize ?? 0)
  const options = getSortOptions(sortOptions)

  const handleSortChange = (e: any) => {
    handleFilterChange({
      requestVar: CATALOG_SORT.SORT_BY,
      value: e.value,
    })
    onChange?.()
  }

  const handlePageChange = (e: number) => {
    handleFilterChange({
      requestVar: CATALOG_PAGE.PAGE,
      value: [e.toString()],
    })
    onChange?.()
  }

  return (
    <Box
      sx={{
        cursor: isFetching ? 'wait' : 'initial',
        '> *': {
          pointerEvents: isFetching ? 'none' : 'initial',
        },
      }}
    >
      <Container
        variant="wide"
        display="flex"
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        alignItems="center"
        flexWrap="wrap"
        {...boxProps}
      >
        {!!totalCount && (
          <>
            {showLayeredNavAction && (
              <Button
                display={{ base: 'block', md: 'none' }}
                ref={btnRef}
                onClick={onOpen}
                type="button"
              >
                {intl.formatMessage({
                  id: 'catalog.productList.action.viewFilters',
                })}
              </Button>
            )}

            {showTotalCount && (
              <TotalCountContainer>
                {intl.formatMessage(
                  { id: 'catalog.productList.totalCount' },
                  { totalCount }
                )}
              </TotalCountContainer>
            )}

            {showSorter && (
              <Box
                w="160px"
                marginLeft="25px"
                order={3}
                my={{ base: '15px', md: '0' }}
                position="relative"
                zIndex="2"
              >
                <Form.ReactSelectTheme>
                  <ReactSelect
                    value={getSortValue(currentSort, options)}
                    classNamePrefix={Form.reactSelectThemeClassNamePrefix}
                    options={options}
                    onChange={handleSortChange}
                  />
                </Form.ReactSelectTheme>
              </Box>
            )}

            {showPagination && renderPagination && (
              <Box
                sx={{
                  'ul, li': {
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                  },
                  '.pagination': {
                    d: 'flex',
                    gap: '2px',
                    mt: { base: 14, md: 10 },
                    mb: { base: 10, md: 0 },
                  },
                  li: {
                    a: {
                      px: 3,
                      py: 1,
                      borderRadius: 'sm',
                      fontSize: 'sm',
                      '&:hover': {
                        bg: 'gray.100',
                      },
                    },
                    '&.active a': {
                      bg: COLOR_MAP_PRIMARY[storeView as string],
                      color: '#fff',
                      cursor: 'default',
                    },
                  },
                }}
              >
                {pageInfo && (
                  <Pagination
                    currentPage={pageInfo.currentPage}
                    pageSize={pageInfo.pageSize}
                    totalItems={pageInfo.totalItems}
                    onChange={handlePageChange}
                  />
                )}
              </Box>
            )}
          </>
        )}
      </Container>

      <LayeredNavMobile
        isOpen={isOpen}
        isDraft={isDraft}
        categoryId={categoryId}
        onClose={onClose}
        finalFocusRef={btnRef}
        onApplyFilters={() => {
          onClose()
          if (onChange) {
            setTimeout(onChange, 500)
          }
        }}
      />
      <Box display={{ base: 'block', md: 'none' }} mx="auto" mt="20px">
        <BrandFilter />
      </Box>
    </Box>
  )
}
