import Link from 'next/link'
import { Flex, IconButton, Link as ChakraLink } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

interface Props {
  url: string
  label: string
  hasSubMenu: boolean
  handleOpen?: () => void
  isCentered?: boolean
  isUserMenu?: boolean
}

export const LinkItem = ({
  url,
  label,
  hasSubMenu,
  handleOpen,
  isCentered = false,
  isUserMenu,
}: Props) => {
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'

  return (
    <Flex
      as="li"
      justify={isCentered ? 'center' : undefined}
      align="center"
      w="100%"
      px="10px"
      pos="relative"
      onClick={handleOpen}
    >
      <Link href={url} passHref>
        <ChakraLink
          variant={
            isReinsman
              ? 'reinsmanNav'
              : isHighHorse
              ? 'highHorseNav'
              : isTucker
              ? 'tuckerNav'
              : 'nav'
          }
          py="18px"
          lineHeight="1"
          fontSize="0.9375rem"
          textTransform={isUserMenu ? 'capitalize' : 'uppercase'}
        >
          {label}
        </ChakraLink>
      </Link>
      {hasSubMenu && (
        <IconButton
          aria-label="Next"
          icon={<FaChevronRight />}
          variant="unstyled"
          pos="absolute"
          right="10px"
          minW="unset"
        />
      )}
    </Flex>
  )
}
