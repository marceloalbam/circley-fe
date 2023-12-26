import { NextSeo } from 'next-seo'
import {
  Box,
  Heading,
  VStack,
  Grid,
  GridItem,
  Button,
  Input,
  Text,
} from '@chakra-ui/react'
import { SerialNumberPageType } from '../types'
import { SliceResolver } from '../components'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { useSerialNumberProduct } from '../../../../packages/shared/src/hooks/useSerialNumberProduct'
import { useState } from 'react'

export const PrismicSerialNumberPage = ({ data }: SerialNumberPageType) => {
  const { body, title } = data
  const [serial, setSerial] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [serialProduct, setSerialProduct]: any = useState({})

  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'
  let content = null
  const serialProductResult = useSerialNumberProduct({ serial_number: serial })

  const updateSerial = (e: any) => {
    setSerial(e.target.value)
  }

  interface SerialProductType {
    [key: string]: string
  }

  const updateSerialProductData = () => {
    const hasData = serialProductResult?.data !== undefined
    setShowResults(hasData)
    const product = serialProductResult.data
      ?.getSerialNumberProduct as SerialProductType
    setSerialProduct(product)
  }

  return (
    <Box
      sx={{
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: isReinsman
            ? 'reinsman'
            : isHighHorse
            ? 'highHorse'
            : isTucker
            ? 'tucker'
            : 'heading',
          fontWeight: isHighHorse ? '700' : 'auto',
        },
        p: {
          fontFamily: isHighHorse ? 'highHorse' : 'body',
        },
      }}
    >
      <NextSeo title={data.meta_title} description={data.meta_description} />
      {title && <Heading mb="30px">{title}</Heading>}
      <VStack spacing="0" overflow="hidden">
        {body.map((slice, i) => {
          if (slice.slice_type === 'rich_text') {
            content = <SliceResolver key={i} slice={slice} />
          } else {
            return <SliceResolver key={i} slice={slice} />
          }
        })}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 2fr' }}
          width="60%"
          mt="2rem !important"
          gap={5}
          mb="2rem !important"
        >
          <GridItem>
            <Box>{content}</Box>
          </GridItem>
          <GridItem padding="0 2rem">
            <Text
              as="h2"
              textTransform="uppercase"
              fontSize="1.5rem"
              mb="2rem !important"
            >
              Serial Number Lookup
            </Text>
            <Box backgroundColor="#f2f2ef" padding="2rem">
              <Text
                as="h2"
                mb="2rem"
                textAlign="center"
                textTransform="uppercase"
              >
                Enter your serial number
              </Text>
              <Grid
                templateColumns={{ base: '1fr', md: '1fr', lg: '2fr 1fr' }}
                gap={3}
              >
                <Input
                  type="text"
                  variant="primary"
                  onChange={updateSerial}
                  placeholder="Serial Number &#40;Ex: 20061234&#41;"
                />
                <Button
                  type="submit"
                  variant="primary"
                  width="100%"
                  onClick={updateSerialProductData}
                >
                  SEARCH
                </Button>
              </Grid>

              <Text mt="2rem" textAlign="center">
                The serial number Search is for saddles 2006 and newer.
              </Text>
            </Box>
          </GridItem>
        </Grid>
        {showResults ? (
          serialProduct ? (
            <Box
              backgroundColor="#f2f2ef"
              width="50%"
              mb="2rem !important"
              padding="3rem"
            >
              <Text
                as="h1"
                borderBottom="1px solid #ccc"
                textTransform="uppercase"
                mb="1rem"
              >
                Saddle Information
              </Text>
              <Grid templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr' }}>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Serial Number</strong>:{' '}
                  {serialProduct['serial_number']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Description</strong>: {serialProduct['description']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Date</strong>: {serialProduct['date_made']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Seat Size</strong>: {serialProduct['seat_size']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Model Number</strong>: {serialProduct['model_number']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Tree Size</strong>: {serialProduct['tree_size']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Saddle Style</strong>: {serialProduct['model']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Color</strong>: {serialProduct['saddle_color']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Brand</strong>: {serialProduct['brand']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Seat Color</strong>: {serialProduct['seat_color']}
                </GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Product Line</strong>: {serialProduct['product_line']}
                </GridItem>
                <GridItem>{/** Intentionally left empty */}</GridItem>
                <GridItem textTransform="capitalize" pb=".5rem">
                  <strong>Category</strong>: {serialProduct['category']}
                </GridItem>
              </Grid>
            </Box>
          ) : (
            <Box
              mt="2rem !important"
              backgroundColor="#f2f2ef"
              width="50%"
              margin="2rem !important"
              padding="3rem"
            >
              <Text
                as="h1"
                borderBottom="1px solid #ccc"
                textTransform="uppercase"
                mb="1rem"
              >
                No Results Found
              </Text>
              <Text>
                {
                  "The serial number that was requested doesn't exist. Verify it and try again."
                }
              </Text>
            </Box>
          )
        ) : null}
      </VStack>
    </Box>
  )
}
