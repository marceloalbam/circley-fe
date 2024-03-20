import Head from 'next/head'
import { PageLoading } from '@wpro/magento/dist/ui'
import { useCoreContext, useMain } from '@wpro/magento/dist/core/hooks'
import { LoggedOutModal } from '@wpro/magento/dist/modules/auth'
import { ErrorBoundary, Maintenance } from '@wpro/magento/dist/modules/shared'
import { useSharedCart } from '../hooks'
import { EntityType, PageType, PrismicPage } from '@scope/prismic'
//import { useDocument } from '@wpro/prismic'

interface Props {
  children: JSX.Element
  layout: (props: { children: JSX.Element }) => JSX.Element
}

export const Main = ({ children, layout: LayoutComponent }: Props) => {
  const { onError } = useCoreContext()
  const { isLoading, storeConfigError } = useMain()
  /*const { document: maintenancePageDocument } = useDocument<PageType>({
    uid: EntityType.MaintenancePage,
    types: [EntityType.Page],
  })*/
  useSharedCart()
  return (
    <ErrorBoundary onError={onError} layout={LayoutComponent}>
      <>
        {process.env.NEXT_PUBLIC_TITLE && (
          <Head>
            <title key="title">{process.env.NEXT_PUBLIC_TITLE}</title>
          </Head>
        )}
        {storeConfigError ? (
          <></>
        ) : isLoading ? (
          <LayoutComponent>
            <PageLoading />
          </LayoutComponent>
        ) : (
          children
        )}
        <LoggedOutModal />
      </>
    </ErrorBoundary>
  )
}
