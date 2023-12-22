import { Box, SimpleGrid, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Menu } from '@scope/prismic'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props {
  menu: Menu[] | undefined
}

export const MenuDesktop = ({ menu }: Props) => {
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'

  return (
    <Box
      flexGrow={1}
      pt="40px"
      display={{ base: 'none', sm: 'block' }}
      pl={{ base: '0', lg: '60px' }}
    >
      <SimpleGrid
        justifyContent="space-around"
        spacing={['30px', '0']}
        columns={{ base: 2, lg: 4 }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        {menu?.map((menuColumn, index) => {
          return (
            <Box key={index} mb={{ base: '40px', lg: '0' }}>
              <Box
                fontSize="18px"
                textTransform="uppercase"
                color={
                  isReinsman
                    ? 'reinsman.200'
                    : isHighHorse
                    ? 'highhorse.300'
                    : 'secondary.600'
                }
                mb="20px"
                fontFamily={isHighHorse ? 'highHorse' : 'body'}
              >
                {menuColumn.primary.header}
              </Box>
              {menuColumn.items.map((item, index) => {
                return (
                  <Box key={index} mb="15px">
                    {item.url && (
                      <NextLink href={item.url} passHref>
                        <Link
                          fontSize="15px"
                          color={
                            isHighHorse ? 'highhorse.200' : 'secondary.400'
                          }
                          _hover={{ color: 'circley.300' }}
                          fontFamily={isHighHorse ? 'highHorse' : 'body'}
                        >
                          {item.label}
                        </Link>
                      </NextLink>
                    )}
                  </Box>
                )
              })}
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}
