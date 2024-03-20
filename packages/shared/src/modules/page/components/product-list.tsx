import { FormattedMessage } from 'react-intl'
import { Alert, Box } from '@chakra-ui/react'
import { PageLoading } from '@wpro/magento/dist/ui'
import { ProductData } from '@wpro/magento/dist/types'
import { ListPages } from '@wpro/magento/dist/gtm/ga3/events/ga3-events'
import { ProductCard } from './product-card'
import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'

interface Props {
  products?: ProductData[]
  isLoading: boolean
  isFetching: boolean
  isError?: boolean
  listPage: ListPages
  clearFiltersHandler?: () => void
}

export const ProductList = ({
  products,
  isError,
  isFetching,
  isLoading,
  listPage,
  clearFiltersHandler,
}: Props) => {
  const hasItems = Boolean(products?.length)
  const showSpinner = isLoading || (!hasItems && isFetching)

  return (
    <>
      {showSpinner ? (
        <PageLoading />
      ) : (
        <>
          {isError ? (
            <Box height="85vh">
              <Alert>
                <FormattedMessage id="app.whoops" />
              </Alert>
            </Box>
          ) : (
            <>
              {hasItems ? (
                <Grid
                  templateColumns={{
                    base: 'repeat(1, minmax(0, 1fr))',
                    md: 'repeat(2, minmax(0, 1fr))',
                    lg: 'repeat(3, minmax(0, 1fr))',
                    xl: 'repeat(4, minmax(0, 1fr))',
                  }}
                  gap={4}
                  mb={4}
                >
                  {products?.map((product) => {
                    const { id } = product
                    return (
                      <div key={id}>
                        <ProductCard product={product} listPage={listPage} />
                      </div>
                    )
                  })}
                </Grid>
              ) : (
                <NoItems>
                  <FormattedMessage id="catalog.productList.emptyState" />
                  {clearFiltersHandler && (
                    <button type="button" onClick={clearFiltersHandler}>
                      <FormattedMessage id="catalog.productList.action.clearFilters" />
                    </button>
                  )}
                </NoItems>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export const NoItems = styled.div`
  max-width: ${(props) => props.theme.sizes.container.xl};
  margin: 30px auto;
  padding: 40px 20px;
  color: ${(props) => props.theme.colors.gray['300']};
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
  min-height: 300px;

  button {
    cursor: pointer;
    font-size: 18px;
    font-weight: normal;
    line-height: 1;
    color: ${(props) => props.theme.colors.gray['700']};
    margin: 0;
    padding: 7px;
    border: none;
    background: none;
  }
`
