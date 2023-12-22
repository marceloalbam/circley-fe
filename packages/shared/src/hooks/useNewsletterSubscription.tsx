import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/react'
import { useIntl } from 'react-intl'
import { gql, Client } from '@urql/core'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

export interface ProcessNewsletterSignupVariables {
  email: string
  captcha?: string | null
}

export type GraphqlOverwrite = {
  queries: Record<string, string>
  mutations: Record<string, string>
}

export interface ServiceDeps<T extends {} = {}> {
  client: Client
  graphqlOverwrite?: GraphqlOverwrite
  params?: T
}

export const getProcessNewsletterSignupKey = () => {
  return 'processNewsletterSignup'
}

export const getProcessNewsletterSignupService = async (
  args: ServiceDeps<ProcessNewsletterSignupVariables>
): Promise<any> => {
  const { client, params } = args
  const query = await client.mutation(mutation, params).toPromise()

  if (!query?.data?.subscribeEmailToNewsletter?.status) {
    throw new Error('Error')
  }
  return query?.data
}

interface NewsletterSubscriptionOptions {
  onSubscriptionSuccess?: () => void
}

export const useNewsletterSubscription = (
  options?: NewsletterSubscriptionOptions
) => {
  const toast = useToast()
  const intl = useIntl()
  const { graphqlClient } = useCoreContext()
  const { mutate: subscribeToNewsletter, isLoading: mutationLoading } =
    useMutation(
      getProcessNewsletterSignupKey(),
      async (variables: ProcessNewsletterSignupVariables) => {
        return await getProcessNewsletterSignupService({
          client: graphqlClient,
          params: variables,
        })
      },
      {
        onSuccess: () => {
          toast({
            title: 'Thanks for subscribing!',
            status: 'success',
            duration: 4000,
          })
          options?.onSubscriptionSuccess?.()
        },
        onError: (err) => {
          toast({
            title: intl.formatMessage({ id: 'app.whoops' }),
            status: 'error',
            duration: 4000,
          })
        },
      }
    )

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  return {
    subscribeToNewsletter,
    mutationLoading,
    isValidEmail,
  }
}

export const mutation = gql`
  mutation subscribeEmailToNewsletter($email: String!, $captcha: String) {
    subscribeEmailToNewsletter(email: $email, captcha: $captcha) {
      status
    }
  }
`
