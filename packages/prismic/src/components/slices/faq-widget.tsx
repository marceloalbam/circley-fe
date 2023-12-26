import Head from 'next/head'
import { FaqWidgetSlice } from '../../types'

export const FaqWidget = ({ primary }: FaqWidgetSlice) => {
  const { enable_widget: enableWidget } = primary

  if (!enableWidget) return null

  return (
    <>
      <Head>
        <script
          src="https://cdn.commoninja.com/sdk/latest/commonninja.js"
          defer
        />
      </Head>
      <div className="commonninja_component pid-01d3f993-ab46-49b4-a2f1-a553eb1b55bd" />
    </>
  )
}
