import { SWATCHES_ATTRIBUTES } from '@scope/shared/src/resources/constants'
import { MagentoConfigurableProductOptions } from '@wpro/magento/dist/types'
import Image from 'next/image'
import { AspectRatio, VStack, Box, Grid, GridItem } from '@chakra-ui/react'

const MAX_COLORS = 7

interface Props {
  options?: MagentoConfigurableProductOptions[]
}

export const Variants = ({ options }: Props) => {
  if (!options || !options.length) {
    return null
  }

  const availableSwatches = options?.filter((option) =>
    SWATCHES.includes(option.attribute_code)
  )

  return (
    <VStack>
      {availableSwatches.map((swatchGroup) => {
        const length = swatchGroup.values.length
        return (
          <Grid templateColumns="repeat(5, 1fr)" gap={2} justifyContent="left">
            {swatchGroup.values.map((item, i) => {
              const attrId = swatchGroup.id
              const swatch = item.visiture_swatch_data?.value
              const value = item.value_index
              const swatchIsImage = swatch?.includes('http')

              if (i + 1 > MAX_COLORS) {
                return null
              }

              return (
                swatch && (
                  <GridItem key={`${attrId}-${value}-${i}`}>
                    <button type="button" aria-label="swatch">
                      {swatchIsImage ? (
                        <AspectRatio
                          ratio={30 / 20}
                          w="30px"
                          borderWidth="1px"
                          borderColor="gray.200"
                        >
                          <Image
                            src={swatch}
                            alt="swatch"
                            layout="fill"
                            objectFit="cover"
                          />
                        </AspectRatio>
                      ) : (
                        <Box
                          style={{ backgroundColor: swatch }}
                          w="30px"
                          h="20px"
                          borderColor="gray.200"
                        />
                      )}
                    </button>
                  </GridItem>
                )
              )
            })}

            {length > MAX_COLORS && (
              <GridItem>
                <small>+ {length - MAX_COLORS} more</small>
              </GridItem>
            )}
          </Grid>
        )
      })}
    </VStack>
  )
}

const SWATCHES = [
  SWATCHES_ATTRIBUTES.SADDLE_COLOR,
  SWATCHES_ATTRIBUTES.PAD_COLOR,
  SWATCHES_ATTRIBUTES.HORSEWARE_COLOR,
  SWATCHES_ATTRIBUTES.SADDLE_SEAT_COLOR,
  SWATCHES_ATTRIBUTES.STIRRUP_COLOR,
  SWATCHES_ATTRIBUTES.TACK_COLOR,
]
