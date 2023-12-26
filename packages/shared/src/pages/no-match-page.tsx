import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { Box, Heading, Button, Text } from '@chakra-ui/react'

import { NextSeo } from 'next-seo'

export const NoMatchPage = () => {
  const intl = useIntl()
  const router = useRouter()
  const title = intl.formatMessage({ id: 'notFound.title' })

  return (
    <Box>
      <NextSeo title={title} noindex nofollow />

      <Box
        height="400px"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading mb={3}>{title}</Heading>
        <Text>{intl.formatMessage({ id: 'notFound.description' })}</Text>
        <Box mt={6}>
          <Button onClick={async () => router.push('/')}>
            {intl.formatMessage({ id: 'action.continueShopping' })}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
