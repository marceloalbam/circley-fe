import { PageLoading } from '@wpro/magento/dist/ui'
import { useRouteLoading } from '@wpro/magento/dist/modules/shared'
import { Box } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  const { loading } = useRouteLoading()

  return (
    <>
      <Header />
      <Box minHeight="85vh">{loading ? <PageLoading /> : children}</Box>
      <Footer />
    </>
  )
}
