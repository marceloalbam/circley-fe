import { prefetchDocumentQuery } from '@wpro/prismic'
import { EntityType } from '@scope/prismic'
import { serverSideApp } from './server-side-app'

export const serverSideHome = async () => {
  const serverSide = await serverSideApp()
  const { queryClient } = serverSide

  await Promise.all([
    prefetchDocumentQuery({
      queryClient,
      documentParams: {
        uid: 'homepage',
        types: [EntityType.HomePage],
      },
    }),
  ])

  return serverSide
}
