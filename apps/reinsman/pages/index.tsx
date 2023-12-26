import { HomePage } from '@scope/prismic'

// import {
//   coreServerSideDynamicPage,
//   coreServerSideProxy,
// } from '@wpro/magento/dist/ssr'
// import { GetServerSideProps } from 'next'
// import { serverSideHome } from '@scope/ssr'

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await coreServerSideProxy({ context })
//   if (res) {
//     return res
//   }
//   const { getServerSidePropsValue } = await coreServerSideDynamicPage({
//     serverSideApp: serverSideHome,
//     context,
//   })
//
//   return await getServerSidePropsValue()
// }
export default HomePage
