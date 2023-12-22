import { coreServerSideApp } from '@wpro/magento/dist/ssr'
import { prefetchDocumentQuery } from '@wpro/prismic'
import { EntityType } from '@scope/prismic'
import { Navigation } from '@scope/prismic'

export const serverSideApp = async () => {
  const serverSide = await coreServerSideApp()
  const { queryClient } = serverSide

  const [nav] = await Promise.all([
    prefetchDocumentQuery({
      queryClient,
      documentParams: {
        uid: EntityType.Nav,
        types: [EntityType.Nav],
      },
    }),
    prefetchDocumentQuery({
      queryClient,
      documentParams: {
        uid: EntityType.Footer,
        types: [EntityType.Footer],
      },
    }),
  ])

  const megaMenus = (nav as Navigation).data.nav_bar
    .filter((nav) => Boolean(nav.menu?.uid))
    .map((item) => item.menu?.uid)

  const megaMenuQueries = megaMenus?.map((item) => {
    return prefetchDocumentQuery({
      queryClient,
      documentParams: {
        uid: item,
        types: [EntityType.MegaMenu],
      },
    })
  })

  await Promise.all(megaMenuQueries)

  return serverSide
}
