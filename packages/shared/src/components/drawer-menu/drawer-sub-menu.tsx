import Link from 'next/link'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props {
  isOpen: boolean
  onClose: () => void
  url: string
  label: string
  children: JSX.Element | JSX.Element[]
}
export const DrawerSubMenu = ({
  isOpen,
  onClose,
  url,
  label,
  children,
}: Props) => {
  const { storeView } = useCoreContext()
  const isHighHorse = storeView === 'highhorse'

  return (
    <Drawer
      size="full"
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      variant="drawerSubMenu"
    >
      <>
        <DrawerContent h="100%" maxH="100%">
          <DrawerBody>
            <Box
              position="sticky"
              bg="white"
              top="0"
              left="0"
              right="0"
              zIndex="99"
            >
              <Flex
                onClick={onClose}
                justify="center"
                align="center"
                w="100%"
                px="10px"
                pos="relative"
                borderBottomWidth="2px"
                borderColor="secondary.100"
              >
                <Box position="absolute" left="10px">
                  <FaChevronLeft />
                </Box>
                <Link href={url} passHref>
                  <ChakraLink
                    variant="nav"
                    py="18px"
                    lineHeight="1"
                    fontSize="0.9375rem"
                    fontWeight="bold"
                    fontFamily={isHighHorse ? 'highHorse' : 'body'}
                  >
                    {label}
                  </ChakraLink>
                </Link>
              </Flex>
            </Box>
            <Box>{children}</Box>
          </DrawerBody>
        </DrawerContent>
      </>
    </Drawer>
  )
}
