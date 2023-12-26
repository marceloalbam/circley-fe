import Link from 'next/link'

import { useDocument } from '@wpro/prismic'
import { Wrap, WrapItem, Link as ChakraLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { CmsNavigationSlice, CmsNavigationType, EntityType } from '../../types'

export const CmsNavigation = ({ primary }: CmsNavigationSlice) => {
  const { navigation } = primary
  const { document } = useDocument<CmsNavigationType>({
    uid: navigation.uid,
    types: [EntityType.CmsNavigation],
  })
  const items = document?.data.items
  const { asPath } = useRouter()

  return (
    <Wrap spacing="24px" mt="30px !important" justify="center">
      {items?.map((item) => {
        const isActive = item.link === asPath
        if (!item.link) {
          return null
        }
        return (
          <WrapItem>
            <Link href={item.link} passHref>
              <ChakraLink
                variant="primary"
                borderColor={isActive ? undefined : 'transparent'}
                fontSize="lg"
              >
                {item.label}
              </ChakraLink>
            </Link>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}
