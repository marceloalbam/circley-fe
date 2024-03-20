import Link from 'next/link'
//import { useDocument } from '@wpro/prismic'
import { EntityType, MegaMenu as MegaMenuType, MenuItem } from '@scope/prismic'
import { Box, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { getSlug, getBlogPath } from '@wpro/prismic'
import { useCmsPageData, useCmsBlockData } from '../../../../src/hooks'
interface Props {
  uid: string
  isHeaderCollapsed?: boolean
}

export const MegaMenu = ({ uid, isHeaderCollapsed }: Props) => {
/*
  const { document } = useDocument<MegaMenuType>({
    uid,
    types: [EntityType.MegaMenu],
  })
*/
  //console.log("DRAER MENU")
  //console.log(document)

  let { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  if(storeView == 'default'){storeView = 'circley'}

 // const router = useRouter()
  const pathname = 'mega-'//router.asPath
  const identifier = getSlug(pathname)
  const identifier_b = identifier+uid+'-pwa-'+storeView

  //let document = ''
  try {
    const cmsBlockData = useCmsBlockData({identifier: identifier_b})
    /*
    // / \/
    // " _c#d_
    // ' _c%d_
    //document = JSON.parse(JSON.stringify(cmsBlockData));
    document = cmsBlockData?.data?.body;
    
    const textoOriginal = document
    let textoModificado = reemplazarTexto(textoOriginal, "\/", "/");
    textoModificado = reemplazarTexto(textoModificado, "_c#d_", '"');
    textoModificado = reemplazarTexto(textoModificado, "_c%d_", "'");

    document = JSON.parse(textoModificado);
  //console.log("DRAER MENU--->>>>>> "+identifier_b)
  //console.log(document)
  */
    let bodys: MegaMenuType = cmsBlockData?.data?.body!;

    //const { topItems } = bodys?.data?.top_bar! ?? {}
    //const { menuItems } = bodys?.data?.nav_bar! ?? {}
    const {
    column_1: col1,
    column_2: col2,
    column_3: col3,
    column_4: col4,
  } = bodys?.data ?? {}
  /*
  const {
    column_1: col1,
    column_2: col2,
    column_3: col3,
    column_4: col4,
  } = document?.data ?? {}
*/
  return (
    <Box
      className="mega-menu"
      pos="absolute"
      top="100%"
      left={isHeaderCollapsed ? `-17.6vw` : '0'}
      w={isHeaderCollapsed ? { base: '103vw', xl: '107.5vw' } : '100%'}
      bg="primary.100"
      opacity=".969"
      d="none"
    >
      <SimpleGrid
        columns={4}
        gap="24px"
        maxW="container.lg"
        m="50px auto"
        px="12px"
      >
        {col1?.length && Boolean(col1?.length > 0) && <LinkList col={col1} />}
        {col2?.length && Boolean(col2?.length > 0) && <LinkList col={col2} />}
        {col3?.length && Boolean(col3?.length > 0) && <LinkList col={col3} />}
        {col4?.length && Boolean(col4?.length > 0) && <LinkList col={col4} />}
      </SimpleGrid>
    </Box>
  )
  } catch (e) {
    // Do something with the error
    
    //console.log(e);
    return (<Box></Box>)
  }
}

interface LinkListProps {
  col: MenuItem[]
}
const LinkList = ({ col }: LinkListProps) => {
  return (
    <Box
      sx={{
        '.child-item': {
          '+ .main-item': {
            mt: '35px',
          },
        },
      }}
    >
      {col?.map((item, i) => {
        const { storeView } = useCoreContext()
        const isReinsman = storeView === 'reinsman'
        const isHighHorse = storeView === 'highhorse'
        const isTucker = storeView === 'tucker'

        const isMainNav = item.is_parent_category

        if (!item?.link_url) return null
        return (
          <Link key={i} href={item.link_url} passHref>
            <ChakraLink
              d="block"
              variant={
                isMainNav
                  ? isReinsman
                    ? 'reinsmanParentNav'
                    : isHighHorse
                    ? 'highHorseParentNav'
                    : isTucker
                    ? 'tuckerParentNav'
                    : 'parentNav'
                  : isReinsman
                  ? 'reinsmanChildNav'
                  : isHighHorse
                  ? 'highHorseChildNav'
                  : isTucker
                  ? 'tuckerChildNav'
                  : 'childNav'
              }
              mb={isMainNav ? '20px' : '5px'}
              className={isMainNav ? 'main-item' : 'child-item'}
            >
              {item.link_title}
            </ChakraLink>
          </Link>
        )
      })}
    </Box>
  )
}
function reemplazarTexto(texto: string, buscar: string, reemplazo: string): string {
  return texto.replace(new RegExp(buscar, 'g'), reemplazo);
}