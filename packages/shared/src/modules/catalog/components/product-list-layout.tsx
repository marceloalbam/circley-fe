import { useRef } from 'react'
import { PageLoading } from '@wpro/magento/dist/ui'
import { MetaData } from '@wpro/magento/dist/modules/shared'
import { useProductListPage } from '@wpro/magento/dist/modules/catalog'
import { Grid, Center, Container, Spinner } from '@chakra-ui/react'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { ProductList } from './product-list'
import { LayeredControls } from './layered-controls'
import { LayeredNav } from './layered-nav'

interface Props {
  title: string
  categoryId?: number
  loadingState?: boolean
  banner?: JSX.Element
  infiniteScroll?: boolean
}

export const ProductListLayout = ({
  categoryId,
  title,
  banner,
  loadingState,
  infiniteScroll = false,
}: Props) => {
  const categoryTopRef = useRef<HTMLDivElement>(null)
  const { includeSuffix } = useCoreContext()

  const scrollTop = () => {
    window.scroll({
      top: categoryTopRef.current?.offsetTop ?? 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const {
    isError,
    isFetching,
    isLoading,
    products,
    layeredNav,
    setFilters,
    infiniteScrollRef,
    infiniteScrollHasNextPage,
  } = useProductListPage({
    categoryId,
    enableGTM: true,
    withProducts: true,
    withLayeredNav: true,
    withInfiniteScroll: infiniteScroll,
  })

  return (
    <>
      <MetaData
        type={categoryId ? 'PLP' : undefined}
        title={categoryId ? undefined : title}
        includeSuffix={includeSuffix}
      />

      <div ref={categoryTopRef} />

      {banner}

      <Container variant="wide" my="40px">
        {isLoading || loadingState ? (
          <PageLoading />
        ) : (
          <>
            <Grid templateColumns={['1fr', '1fr', '300px 1fr']} gap="20px">
              <LayeredNav
                display={['none', 'none', 'block']}
                categoryId={categoryId}
                onFilterChange={scrollTop}
              />

              <div>
                <LayeredControls
                  categoryId={categoryId}
                  showPagination={false}
                />
                <ProductList
                  listPage={categoryId ? 'Category Page' : 'Search Page'}
                  isError={isError}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  products={products}
                  clearFiltersHandler={
                    layeredNav?.hasAppliedFilters
                      ? () => setFilters({})
                      : undefined
                  }
                />

                {infiniteScroll && infiniteScrollHasNextPage && (
                  <Center>
                    <Spinner margin="90px auto" size="xl" />
                  </Center>
                )}

                <div ref={infiniteScrollRef} />

                <LayeredControls
                  categoryId={categoryId}
                  showSorter={false}
                  showTotalCount={false}
                  showPagination={!infiniteScroll}
                  showLayeredNavAction={false}
                  onChange={scrollTop}
                  justifyContent="center"
                />
              </div>
            </Grid>
          </>
        )}
      </Container>
    </>
  )
}
