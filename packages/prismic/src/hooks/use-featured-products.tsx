import { useProductsBySku } from '@wpro/magento/dist/modules/catalog'

export interface Item {
  sku: string | null
}
interface Props {
  items: Item[]
}
export const useFeaturedProducts = ({ items }: Props) => {
  const skus = getItemSkus({ items })
  const { isLoading, isError, isFetching, products } = useProductsBySku({
    sku: skus,
  })

  return {
    isLoading,
    isError,
    isFetching,
    products,
  }
}

export const getItemSkus = (params: { items: Item[] }) => {
  const { items } = params
  return items?.reduce((acc: string[], elem, index) => {
    if (elem.sku) {
      acc.push(elem.sku)
    }

    return acc
  }, [])
}
