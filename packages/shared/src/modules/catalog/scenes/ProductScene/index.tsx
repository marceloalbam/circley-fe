import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Select from 'react-select'
import {
  MagentoProductPrices,
  ProductData,
  ConfigurableVariant,
  MagentoMediaGalleryEntry,
} from '@wpro/magento/dist/types'
import { SWATCHES_ATTRIBUTES } from '@scope/shared/src/resources/constants'
import {
  PRODUCT_IMAGE_URL,
  PRODUCT_TYPENAME,
} from '@wpro/magento/dist/core/resources/constants'
import { useCart, useCoreContext, usePath } from '@wpro/magento/dist/core/hooks'
import { Breadcrumbs, MetaData } from '@wpro/magento/dist/modules/shared'
import { Form } from '@wpro/magento/dist/ui'
import { AddToWishlist } from '../../components/AddToWishlist'
import { MediaGallery } from './components/MediaGallery'
import { SocialShare } from './components/SocialShare'

import { ReviewSummary } from '@scope/shared/src/modules/catalog/components/Reviews'
import { ProductCard } from '@scope/shared/src/modules/catalog/components/product-card'
import {
  ProductNotification,
  ProductPrice,
  CustomOptions,
  CustomOptionsEvent,
  getCustomizableOptions,
  useProductStatus,
  useComparison,
} from '@wpro/magento/dist/modules/catalog/index'
import { ConfigurableOptions } from '../../components/ConfigurableOptions'

import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useStockStatus } from '../../../../../../../packages/shared/src/hooks'
import Image from 'next/image'
import { IMAGE_PLACEHOLDER } from '../../../../constants'
import { useStoreData } from '../../../../../../../packages/shared/src/hooks'
import { Reviews } from './components/reviews'
import { AffirmLabel } from '../../../../components'

interface Props {
  product: ProductData
}

interface ColorMap {
  [key: string]: string
}

export const ProductScene = ({ product }: Props) => {
  const {
    name,
    image,
    sku,
    price,
    relatedProducts,
    options,
    customAttributeList,
    typeName,
    descriptionHtml,
    mediaGalleryItems,
    id,
  } = product
  const { includeSuffix, storeView } = useCoreContext()
  const path = usePath()
  const router = useRouter()
  const { currentStoreUrl } = useStoreData()

  const productAbsoluteUrl = `${currentStoreUrl}${router.asPath.replace(
    /^\/|\/$/g,
    ''
  )}`

  const [qty, setQty] = useState(1)
  const { addSimpleProduct, addConfigurableProduct } = useCart()
  const { isAddingToCart } = useProductStatus(product)
  const { addProductToCompare } = useComparison()
  const [variant, setVariant] = useState<ProductData | undefined>(undefined)
  const [renderPrice, setRenderPrice] = useState(price)
  const [renderPriceType, setRenderPriceType] = useState(typeName)
  const [selectedRelated, setSelectedRelated] = useState<
    Record<string, boolean>
  >({})
  const [customOptions, setCustomOptions] = useState<
    CustomOptionsEvent | undefined
  >()

  const swatchesAttributes = Object.values(SWATCHES_ATTRIBUTES)
  const defaultSimpleSku = router.query.sku?.toString()
  const isSimpleProduct = typeName === PRODUCT_TYPENAME.SIMPLE // TODO: add to ProductData
  const isConfigurableProduct = typeName === PRODUCT_TYPENAME.CONFIGURABLE // TODO: add to ProductData
  const customOptionsErrors = Boolean(
    Object.keys(customOptions?.errors ?? {}).length
  )
  const productImage = variant?.image.default.url ?? image.default.url
  const productImages =
    variant && variant.mediaGalleryItems.length
      ? variant.mediaGalleryItems.filter((el) => !el.disabled)
      : mediaGalleryItems.filter((el) => !el.disabled)

  const [galleryItems, setGalleryItems] =
    useState<MagentoMediaGalleryEntry[]>(productImages)

  const productAttributes = variant?.customAttributeList ?? customAttributeList
  const stockStatus = useStockStatus({
    sku: isSimpleProduct ? sku : variant?.sku,
  })
  const stockStatusMessage =
    stockStatus &&
    stockStatus.data?.products?.items[0]?.mp_stock_status_info?.label
  const disableAddToCart = Boolean(
    stockStatusMessage === 'Out of Stock' ||
      stockStatusMessage === 'Call For Availability'
  )

  function handleGalleryChange(newItems: MagentoMediaGalleryEntry[]) {
    setGalleryItems(newItems)
  }

  const [tabIndex, setTabIndex] = useState(0)
  const reviewTabIndex = 2
  const tabsRef = useRef<HTMLDivElement>(null)

  const handleReviewSummaryClick = (tabIndex: number) => {
    const top = tabsRef.current?.offsetTop ?? 0

    window.scroll({
      top: top - 175,
      left: 0,
      behavior: 'smooth',
    })

    handleTabChange(tabIndex)
  }

  const handleTabChange = (index: number) => {
    setTabIndex(index)
  }

  const addCurrentProductToCompare = () => {
    addProductToCompare(sku)
    router.push(path.Compare)
  }

  const getRelatedProducts = () => {
    const products =
      relatedProducts
        ?.filter((product) => selectedRelated[product.sku])
        .map(({ sku }) => ({
          quantity: qty,
          sku,
        })) ?? []

    return products
  }

  const handleQtyChange = (qtyOption: any) => {
    setQty(parseInt(qtyOption.value))
  }

  const handlePriceChange = (price: MagentoProductPrices) => {
    setRenderPrice(price)
    setRenderPriceType(PRODUCT_TYPENAME.SIMPLE)
  }

  const handleConfigurableChange = (variant?: ConfigurableVariant) => {
    const product = variant?.product ?? undefined
    setVariant(product)
  }

  const handleAddConfigurableToCart = () => {
    const configurableSku = sku
    if (!variant) {
      return
    }

    const cartItems = [
      {
        configurableSku,
        quantity: qty,
        sku: variant.sku,
        customizableOptions: getCustomizableOptions(customOptions),
      },
    ]

    addConfigurableProduct({
      configurableSku,
      cartItems,
      simpleProductsItems: getRelatedProducts(),
    })
  }

  const colorMapping: ColorMap = {
    default: '#71c7c2',
    circley: '#71c7c2',
    tucker: '#ba9867',
    reinsman: '#1dada5',
    highhorse: '#49a69d',
  }

  const handleAddSimpleToCart = () => {
    const cartItems = [
      {
        quantity: qty,
        sku: sku,
        customizableOptions: getCustomizableOptions(customOptions),
      },
      ...getRelatedProducts(),
    ]

    addSimpleProduct({
      sku,
      cartItems,
    })
  }

  const affirmPrice = variant
    ? variant.price?.regularPrice?.amount?.value
    : price?.regularPrice?.amount?.value

  const CmsStyles = {
    '> *': {
      m: 0,
      mb: 6,
      _last: {
        mb: 0,
      },
    },
    '*': {
      fontSize: 'var(--chakra-fontSizes-md) !important',
      lineHeight: '1.7 !important',
    },
    'ul, ol': {
      listStyle: 'disc inside',
      'ul, ol': {
        pl: 3,
      },
    },
  }

  const Description = () => {
    return (
      <Box
        sx={CmsStyles}
        dangerouslySetInnerHTML={{
          __html: descriptionHtml,
        }}
      />
    )
  }

  const Specs = () => {
    return (
      <VStack
        spacing={0}
        align="flexStart"
        sx={{
          '> div:nth-child(odd)': {
            bg: 'gray.50',
          },
        }}
      >
        {productAttributes?.map((attr) => {
          return (
            <Flex
              key={attr.code}
              py={2}
              px={{ base: 3, md: 5 }}
              gap={2}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <Box flex="1">
                <strong>{attr.label}:</strong>
              </Box>
              <Box
                flex="1"
                sx={CmsStyles}
                dangerouslySetInnerHTML={{
                  __html: attr.value.join(', '),
                }}
              />
            </Flex>
          )
        })}
      </VStack>
    )
  }

  return (
    <Box pb={{ base: 16, sm: 20, md: 24 }} pt={8}>
      <Container maxW="container.xl" px={4}>
        <MetaData type="PDP" includeSuffix={includeSuffix} />
        <ProductNotification
          showToasts
          showModal
          sku={sku}
          productName={name}
          productImage={productImage}
        />

        <Breadcrumbs
          d={{ base: 'none', md: 'block' }}
          fontSize="sm"
          color="secondary.400"
          pb={14}
          separator="|"
          sx={{
            span: {
              color: 'secondary.200',
            },
          }}
        />

        <Box
          d="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 10, lg: 14 }}
        >
          <Box flex="1.45" textAlign="center">
            {galleryItems.length || productImages.length ? (
              <MediaGallery
                configurableGalleryImages={product.mediaGalleryItems}
                mediaGalleryItems={
                  galleryItems.length ? galleryItems : productImages
                }
                productName={name}
                store={storeView}
              />
            ) : (
              <Image
                src={`${PRODUCT_IMAGE_URL}${IMAGE_PLACEHOLDER}`}
                alt={name}
                width="500px"
                height="500px"
              />
            )}
            <Box
              d={{ base: 'flex', md: 'inline-flex' }}
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
              mt={10}
              ml={{ md: productImages.length > 1 ? '110px' : 0 }}
              borderTop="1px solid"
              borderColor="gray.100"
              px={14}
              pt={5}
            >
              <AddToWishlist product={product} />
              <SocialShare
                url={productAbsoluteUrl}
                productImage={productImage}
                store={storeView}
              />

              {/* <Button
                variant="ghost"
                onClick={() => addCurrentProductToCompare()}
              >
                Add to Compare
              </Button> */}
            </Box>
          </Box>

          <Box flex="1">
            <Heading fontSize="3xl" mb={2}>
              {name}
            </Heading>

            <Flex mb={5}>
              <Text color="secondary.400">Sku: {variant?.sku ?? sku}</Text>
              <Text
                ml="auto"
                textAlign={['left', 'left', 'right']}
                color={`${colorMapping[storeView as string]}`}
              >
                <Box as="strong">{stockStatusMessage}</Box>
              </Text>
            </Flex>

            <ReviewSummary
              my={4}
              handleClick={() => handleReviewSummaryClick(reviewTabIndex)}
              productId={id}
            />

            <Text
              fontSize="2xl"
              fontFamily="heading"
              letterSpacing="2px"
              mb="5px"
            >
              <ProductPrice
                extraPrice={customOptions?.priceDiff}
                price={renderPrice}
                type={renderPriceType}
              />
            </Text>

            <AffirmLabel affirmPrice={affirmPrice} />

            <Box mb={8}>
              <ConfigurableOptions
                sku={sku}
                basePrice={renderPrice}
                onPriceChange={handlePriceChange}
                onGalleryChange={handleGalleryChange}
                onChange={handleConfigurableChange}
                defaultVariant={defaultSimpleSku}
                swatchesAttributes={swatchesAttributes}
                store={storeView}
                reloadOptions={false}
              />

              {options && (
                <CustomOptions options={options} onChange={setCustomOptions} />
              )}
            </Box>
            <Flex gap={4}>
              <Box
                w="85px"
                sx={{
                  '.react-select__control': {
                    h: 14,
                  },
                }}
              >
                <Form.ReactSelectTheme>
                  <Select
                    classNamePrefix={Form.reactSelectThemeClassNamePrefix}
                    options={quantityOptions}
                    onChange={handleQtyChange}
                    defaultValue={quantityOptions[0]}
                  />
                </Form.ReactSelectTheme>
              </Box>
              <Box flex="1">
                {isSimpleProduct && (
                  <Button
                    isLoading={isAddingToCart}
                    isDisabled={customOptionsErrors || disableAddToCart}
                    onClick={handleAddSimpleToCart}
                    variant={`primary-${storeView as string}`}
                    size="xl"
                    px={2}
                    w="100%"
                    maxW="none"
                  >
                    {disableAddToCart ? stockStatusMessage : 'Add To Cart'}
                  </Button>
                )}

                {isConfigurableProduct && (
                  <Button
                    isLoading={isAddingToCart}
                    isDisabled={
                      !variant || customOptionsErrors || disableAddToCart
                    }
                    onClick={handleAddConfigurableToCart}
                    variant={`primary-${storeView as string}`}
                    size="xl"
                    px={2}
                    w="100%"
                    maxW="none"
                  >
                    {disableAddToCart ? stockStatusMessage : 'Add To Cart'}
                  </Button>
                )}
              </Box>
            </Flex>
          </Box>
        </Box>

        <div ref={tabsRef}></div>

        <Box mt={{ base: 12, md: 16 }}>
          <Accordion
            display={{ md: 'none' }}
            variant="pdp"
            allowMultiple
            allowToggle
          >
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Description
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Description />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Specifications
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Specs />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Reviews
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Reviews product={product} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Container
            display={{ base: 'none', md: 'block' }}
            maxW="container.lg"
          >
            <Tabs
              index={tabIndex}
              variant={`pdp-${storeView as string}`}
              onChange={handleTabChange}
            >
              <TabList>
                <Tab>Description</Tab>
                <Tab>Specifications</Tab>
                <Tab>Reviews</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Description />
                </TabPanel>
                <TabPanel>
                  <Specs />
                </TabPanel>
                <TabPanel>
                  <Reviews product={product} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Box>

        {relatedProducts.length > 0 && (
          <Box mt={{ base: 12, md: 16 }}>
            <Heading as="h4" fontSize="3xl" textAlign="center" mb={10}>
              Goes Well With
            </Heading>
            <Box
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              gap={{ base: 12, md: 16 }}
              justifyContent="center"
              sx={{
                '> div': {
                  width: { base: 'auto', md: '280px' },
                  maxW: { sm: '380px', md: '280px' },
                  mx: { base: 'auto', md: 0 },
                  '.chakra-linkbox > div': {
                    p: 0,
                  },
                },
              }}
            >
              {relatedProducts.map((product) => {
                return (
                  <Box key={product.id} flex="0 0 auto" width="280px">
                    <ProductCard product={product} listPage="Other" />
                  </Box>
                )
              })}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  )
}

const quantityOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
]
