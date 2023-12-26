import {
  ReviewList,
  ReviewsForm,
} from '@scope/shared/src/modules/catalog/components/Reviews'
import { useCoreContext, useReviews } from '@wpro/magento/dist/core/hooks'
import { ProductData } from '@wpro/magento/dist/types/core'

export const Reviews = ({ product }: { product: ProductData }) => {
  const { reviewList, isLoading } = useReviews(product.id)
  const { storeView } = useCoreContext()

  return (
    <>
      <ReviewList reviewList={reviewList} isLoading={isLoading} />
      <ReviewsForm productName={product.name} store={storeView} />
    </>
  )
}
