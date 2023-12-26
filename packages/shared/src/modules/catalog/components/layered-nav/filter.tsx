import { useState } from 'react'
import { CATALOG_FILTER } from '@wpro/magento/dist/core/resources/constants'
import { Box, Button, Checkbox, Collapse } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  ChangeFilterHandler,
  FilterOptions,
  getPriceFilterRange,
  LayeredPriceFilter,
} from '@wpro/magento/dist/modules/catalog'

interface Props {
  isFetching: boolean
  filterOptions: FilterOptions
  handleFilterChange: ChangeFilterHandler
}

export const Filter = ({
  filterOptions,
  handleFilterChange,
  isFetching,
}: Props) => {
  const { code, items, name, selected, settings } = filterOptions

  const [toggle, setToggle] = useState(Boolean(settings?.collapsed))
  const isPriceFilter = code === CATALOG_FILTER.PRICE
  const priceRange = isPriceFilter ? getPriceFilterRange(items) : undefined

  if (!items.length) {
    return null
  }

  if (isPriceFilter && !priceRange) {
    return null
  }

  return (
    <Box key={code}>
      <Button
        position="relative"
        width="100%"
        display="block"
        variant="unstyled"
        textAlign="left"
        padding="0 12px"
        borderRadius="none"
        onClick={() => setToggle((toggle) => !toggle)}
        background="gray.100"
      >
        {name}
        <ChevronDownIcon position="absolute" right="12px" top="12px" />
      </Button>
      <Collapse in={!toggle} animateOpacity>
        <Box
          maxHeight="215px"
          overflow="auto"
          padding="5px 0"
          borderColor="gray.100"
          borderWidth="1px"
        >
          {priceRange ? (
            <LayeredPriceFilter
              minRange={priceRange[0]}
              maxRange={priceRange[1]}
              isFetching={isFetching}
              onChange={(e) => {
                handleFilterChange({
                  requestVar: code,
                  value: [e],
                })
              }}
              value={selected?.[0].value}
            />
          ) : (
            <>
              {items.map((item) => {
                return (
                  <div key={`f-${item.requestVar}-${item.value}`}>
                    <Checkbox
                      padding="2px 12px"
                      isChecked={Boolean(
                        selected?.find((el) => el.value === item.value)
                      )}
                      value={item.value}
                      onChange={(e) => {
                        handleFilterChange({
                          requestVar: item.requestVar,
                          value: [item.value],
                        })
                      }}
                    >
                      {item.label}
                    </Checkbox>
                  </div>
                )
              })}
            </>
          )}
        </Box>
      </Collapse>
    </Box>
  )
}
