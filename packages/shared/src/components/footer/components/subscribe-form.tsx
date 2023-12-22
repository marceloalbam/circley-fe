import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { useState } from 'react'

export const SubscribeForm = () => {
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!isValidEmail(e.target.email.value)) {
      toast({
        title: 'Email is invalid',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })

      return
    }

    setIsLoading(true)

    const endpoint = '/api/newsletter'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target.email.value,
      }),
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()

    if (result.success) {
      setEmail('')
      setIsLoading(false)

      toast({
        title: 'Thanks for subscribing!',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    }

    if (result.error) {
      setEmail('')
      setIsLoading(false)

      toast({
        title: 'Error',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <Box display="inline-block" mb="20px">
      <form onSubmit={handleSubmit}>
        <Box mt="10px" display={{ md: 'flex' }} maxW="xl">
          <FormControl
            id="email"
            marginEnd="-1px"
            color="gray.600"
            ml={{ base: '0', md: '20px' }}
            mr={2}
            border="transparent"
            boxShadow="1px 2px 0 #c4c3bc, inset 0 0 0 45px #fff !important"
            borderRadius="5px"
            mb={{ base: '15px', lg: '0' }}
          >
            <FormLabel srOnly>Enter Email Address</FormLabel>
            <Input
              h="45px"
              width="100%"
              flex="1"
              bg="white"
              placeholder="Enter Email Address"
              onChange={handleChange}
              type="text"
              name="email"
              value={email}
              _placeholder={{
                color: isReinsman ? 'gray.200' : 'auto',
                fontSize: isReinsman ? '0.875rem' : 'auto',
              }}
              _focus={{
                boxShadow: 'none',
              }}
              _hover={{
                border: 'transparent',
              }}
            />
          </FormControl>
          <Button
            type="submit"
            variant={
              isReinsman
                ? 'secondary'
                : isHighHorse
                ? 'highhorse'
                : isTucker
                ? 'tucker'
                : 'primary'
            }
            w={{ base: 'full', md: 'auto' }}
            size="md"
            disabled={isLoading}
            isLoading={isLoading}
            d="block"
            minW="none"
            px={4}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}
