import Head from 'next/head'
import { StoreLocatorSlice } from '../../types'
import { Box } from '@chakra-ui/react'

export const StoreLocator = ({ primary }: StoreLocatorSlice) => {
  const { enable_store_locator: enabled } = primary

  if (!enabled) {
    return null
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          id="googlemapsscript"
          src="//maps.googleapis.com/maps/api/js?key=AIzaSyCkR0_4pzkvhlmwqENprXhs3s2HKCM_WQQ&libraries=places"
        ></script>
        <script
          type="text/javascript"
          id="storelocatorscript"
          data-uid="YJo8fTa6ixxs9Xiag1LzufBv7RQqjPNK"
          src="//cdn.storelocatorwidgets.com/widget/widget.js"
        ></script>
      </Head>

      <Box id="storelocatorwidget" sx={locatorStyles}>
        <p>
          <a href="https://www.storelocatorwidgets.com">
            Loading Store Locator Software
          </a>
          ...
        </p>
      </Box>
    </>
  )
}

const locatorStyles = {
  w: '100%',
  minH: '500px',
  border: 'none !important',
}
