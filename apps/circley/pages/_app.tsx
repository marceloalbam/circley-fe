import { AppProps } from 'next/app'

// Core
import { ThemeProvider } from '@wpro/magento/dist/ui'
import { PrismicPreviewScript } from '@wpro/prismic'
import { PWA } from '@wpro/magento/dist/core/components'

// Project
import { theme, Layout, Fonts, Main } from '@scope/shared'

export const App = ({ Component, pageProps }: AppProps) => {
  
  return (
    <PWA pageProps={pageProps}>
      <ThemeProvider theme={theme}>
        <Main layout={Layout}>
          <>
            <Fonts />
            <Layout>
              <PrismicPreviewScript />
              <Component {...pageProps} />
            </Layout>
          </>
        </Main>
      </ThemeProvider>
    </PWA>
  )
}

export default App
