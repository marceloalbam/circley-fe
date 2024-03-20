import { useState, useEffect, ReactNode } from 'react'
import ReactSelect, { ValueType } from 'react-select'
import { usePrevious } from '@wpro/magento/dist/core/hooks'
import { Form } from '@wpro/magento/dist/ui'
import { SWATCHES_ATTRIBUTES } from '@scope/shared/src/resources/constants'
import { COLOR_MAP_PRIMARY } from '../../../../constants'
import {
  AttributeVariant,
  ConfigurableVariant,
  MagentoMediaGalleryEntry,
  MagentoProductPrices,
  MagentoSku,
} from '@wpro/magento/dist/types'
import { Box, Flex, Button } from '@chakra-ui/react'
import {
  findVariant,
  filterVariants,
  getFilters,
  findLowestPrice,
  Option,
  OptionsIndex,
  ConfigurableFilters,
  ConfigurableOptionsType,
  getConfigurableOptions,
  getVariants,
  getAttributeVariants,
  getVariantDefault,
  useProductBySku,
} from '@wpro/magento/dist/modules/catalog'

import { Container, Setting } from './styled'

export interface ConfigurableInitialValues {
  variant?: ConfigurableVariant
  options: ConfigurableOptionsType[]
}

export interface ConfigurableRenderOptions {
  selected?: Option
  label: string
  values: Option[]
  attrCode: string
  onChange: (e: ValueType<Option, false>, attrCode: string) => void
  isDisabled: boolean
}

export type ConfigurableRenderOptionsCallback = (
  props: ConfigurableRenderOptions
) => ReactNode

interface Props {
  sku: string
  basePrice: MagentoProductPrices
  onChange: (a: ConfigurableVariant | undefined) => void
  onPriceChange: (price: MagentoProductPrices) => void
  onGalleryChange?: (gallery: MagentoMediaGalleryEntry[]) => void
  renderOptions?: ConfigurableRenderOptionsCallback
  swatchesAttributes?: string[]
  reloadOptions?: boolean
  defaultVariant?: MagentoSku
  store?: string
}

export const ConfigurableOptions = (props: Props) => {
  const {
    sku,
    basePrice,
    onChange,
    onPriceChange,
    onGalleryChange,
    renderOptions,
    swatchesAttributes = [],
    reloadOptions = true,
    defaultVariant,
    store = 'default',
  } = props
  const { product } = useProductBySku({ sku })
  const variants = getVariants(product)
  const variantDefault = getVariantDefault(product, defaultVariant)
  const prevVariantDefault = usePrevious(variantDefault)
  const attrVariants = getAttributeVariants(product)
  const hasVariants = !!variants?.length
  const [currentValue, setCurrentValue] = useState<OptionsIndex | undefined>()

  const options = getConfigurableOptions({
    product,
    currentValue,
    basePrice,
    reloadOptions,
  })

  useEffect(() => {
    const product = variantDefault?.product
    const prevProduct = prevVariantDefault?.product
    const hasChanged = product?.id !== prevProduct?.id
    const hasNotCurrentValue = !currentValue && options.length

    if (product && (hasChanged || hasNotCurrentValue)) {
      const initialValues = getInitialValues({
        variant: variantDefault,
        options,
      })

      setCurrentValue(initialValues)

      if (onGalleryChange) {
        onGalleryChange(product.mediaGalleryItems)
      }

      if (onPriceChange) {
        onPriceChange(product.price)
      }

      onChange(variantDefault)
    }
  }, [
    currentValue,
    variantDefault,
    prevVariantDefault,
    options,
    setCurrentValue,
    onPriceChange,
    onGalleryChange,
    onChange,
  ])

  function handleSelectChange(e: ValueType<Option, false>, attrCode: string) {
    if (!e) {
      return
    }
    const { id, label, value, swatch, priceDiff, isDisabled, sortWeight } = e
    const optionsIndex: OptionsIndex = {
      ...currentValue,
      [attrCode]: {
        id,
        label,
        value,
        swatch,
        priceDiff,
        isDisabled,
        sortWeight,
      },
    }

    if (reloadOptions) {
      setCurrentValue(resetNextOptions({ optionsIndex, attrCode, options }))
    } else {
      setCurrentValue(optionsIndex)
    }

    const filters = getFilters(optionsIndex)
    const variant = findVariant(attrVariants, filters)
    const lowestPrice = findLowestPrice(attrVariants, filters)
    const mediaGallery = getGalleryImages(attrVariants, filters)
    const hasGalleryImages = swatchesAttributes.includes(attrCode)

    if (onGalleryChange) {
      if (variant?.product?.mediaGalleryItems?.length) {
        onGalleryChange(variant.product.mediaGalleryItems)
      } else if (hasGalleryImages) {
        onGalleryChange(mediaGallery)
      }
    }

    if (onPriceChange && lowestPrice) {
      onPriceChange(lowestPrice)
    }

    if (variant ?? reloadOptions) {
      onChange(variant)
    }
  }

  const optionsToRender = reloadOptions
    ? disableNextOptions({ options: options, currentValue: currentValue ?? {} })
    : options

  return (
    <Container key={hasVariants.toString()} hasVariants={hasVariants}>
      {optionsToRender?.map((option) => {
        const { id, label, attrCode, values, isDisabled } = option
        const currentOptionValue = currentValue
          ? currentValue[attrCode]
          : undefined

        if (isDisabled) {
          return
        }

        if (renderOptions) {
          return renderOptions({
            selected: currentOptionValue,
            label,
            values,
            attrCode,
            isDisabled: Boolean(isDisabled),
            onChange: handleSelectChange,
          })
        }

        switch (attrCode) {
          case SWATCHES_ATTRIBUTES.SADDLE_COLOR: {
            const current = currentOptionValue

            return (
              <Setting.Option key={attrCode}>
                <Setting.Title>
                  {label}
                  {current && `: ${current.label}`}
                </Setting.Title>
                <Box>
                  <Flex gap={2}>
                    {values.map((option, i) => {
                      const { isDisabled, swatch, value, label } = option
                      const isActive = current && current.value === value
                      const isHex = swatch.startsWith('#')

                      return (
                        <Box key={`${attrCode}-${value}-${i}`}>
                          <Button
                            variant="unstyled"
                            w="50px"
                            h="50px"
                            maxW="none"
                            type="button"
                            title={label}
                            className={isActive ? 'active' : undefined}
                            disabled={isDisabled && !isActive}
                            onClick={() => handleSelectChange(option, attrCode)}
                            border="2px solid"
                            borderRadius="sm"
                            borderColor={
                              isActive
                                ? COLOR_MAP_PRIMARY[store as string]
                                : 'transparent'
                            }
                            sx={{
                              '&:hover': {
                                borderColor: isActive
                                  ? COLOR_MAP_PRIMARY[store as string]
                                  : 'gray.800',
                              },
                            }}
                            p="2px"
                          >
                            <Box
                              backgroundSize="cover"
                              backgroundRepeat="none"
                              backgroundPosition="center"
                              backgroundColor={isHex ? swatch : ''}
                              style={{ backgroundImage: `url(${swatch})` }}
                              w="100%"
                              h="100%"
                              borderRadius="sm"
                            />
                          </Button>
                        </Box>
                      )
                    })}
                  </Flex>
                </Box>
              </Setting.Option>
            )
          }

          default: {
            return (
              <Setting.Option key={attrCode}>
                <Setting.Title>{label}</Setting.Title>
                <Box>
                  <Form.ReactSelectTheme>
                    <ReactSelect
                      classNamePrefix={Form.reactSelectThemeClassNamePrefix}
                      options={values}
                      onChange={(e) => handleSelectChange(e, attrCode)}
                      value={currentOptionValue ?? null}
                      isDisabled={isDisabled}
                    />
                  </Form.ReactSelectTheme>
                </Box>
              </Setting.Option>
            )
          }
        }
      })}
    </Container>
  )
}

const getGalleryImages = (
  attrVariants: AttributeVariant[],
  filters: ConfigurableFilters
) => {
  let mediaGalleryItems: MagentoMediaGalleryEntry[] = []
  const variants = filterVariants(attrVariants, filters)

  variants.find((variant) => {
    const { product } = variant
    if (!product) {
      return false
    }

    if (product.mediaGalleryItems.length) {
      mediaGalleryItems = product.mediaGalleryItems
      return true
    } else {
      return false
    }
  })

  return mediaGalleryItems
}

interface ResetOptionsProps {
  attrCode: string
  options: ConfigurableOptionsType[]
  optionsIndex: OptionsIndex
}

interface DisableOptionsProps {
  options: ConfigurableOptionsType[]
  currentValue: OptionsIndex
}

const resetNextOptions = ({
  attrCode,
  optionsIndex,
  options,
}: ResetOptionsProps): OptionsIndex => {
  let flagChange = false
  options.forEach((option) => {
    const { attrCode: optionAttrCode } = option
    if (flagChange) {
      delete optionsIndex[optionAttrCode]
    }
    if (optionAttrCode === attrCode) {
      flagChange = true
    }
  })

  return optionsIndex
}

const disableNextOptions = ({
  options,
  currentValue,
}: DisableOptionsProps): ConfigurableOptionsType[] => {
  const selectedAttrCount = currentValue
    ? Object.keys(currentValue).length + 1
    : 1

  for (let i = selectedAttrCount; i < options.length; i++) {
    options[i].isDisabled = true
  }

  return options
}

const getInitialValues = ({
  variant,
  options,
}: ConfigurableInitialValues): OptionsIndex => {
  let initialValues: OptionsIndex = {}

  if (variant?.product && variant?.attributes) {
    variant.attributes.forEach((attr, i) => {
      const attrCode = attr.code
      const attrOptions = options.find((option) => {
        return option.attrCode === attrCode
      })

      const option = attrOptions?.values.find((element) => {
        return element.id === attr.value_index
      })

      if (!option) {
        return
      }

      initialValues[attrCode] = option
    })
  } else {
    initialValues = options.reduce((obj: OptionsIndex, option) => {
      const { attrCode } = option
      obj[attrCode] = undefined
      return obj
    }, {})
  }

  return initialValues
}
