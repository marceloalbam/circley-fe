import {
  Box,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Menu } from '@scope/prismic'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props {
  menu: Menu[] | undefined
}

export const MenuMobile = ({ menu }: Props) => {
  const { storeView } = useCoreContext()
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'

  return (
    <Accordion allowMultiple display={{ base: 'block', sm: 'none' }} pt="20px">
      {menu?.map((menuColumn, i) => {
        return (
          <AccordionItem
            key={i}
            border="none"
            alignItems="center"
            textAlign="center"
          >
            <h2>
              <AccordionButton _hover={{ bg: 'transparent' }}>
                <Box
                  flex="1"
                  fontSize="18px"
                  textTransform="uppercase"
                  color={
                    isHighHorse
                      ? 'highhorse.300'
                      : isTucker
                      ? 'secondary.300'
                      : 'secondary.600'
                  }
                  mb="20px"
                  fontFamily={isHighHorse ? 'highHorse' : 'body'}
                  fontWeight="400"
                >
                  {menuColumn.primary.header}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {menuColumn.items.map((item, index) => {
                return (
                  <Box key={index} mb="15px">
                    {item.url && (
                      <NextLink href={item.url} passHref>
                        <Link
                          fontSize="15px"
                          color={
                            isHighHorse
                              ? 'highhorse.200'
                              : isTucker
                              ? 'secondary.500'
                              : 'secondary.400'
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
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
