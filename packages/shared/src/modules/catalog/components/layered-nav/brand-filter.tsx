import Image from 'next/image'
import {
  ChangeFilterHandler,
  FilterOptions,
  RemoveFilterHandler,
  SetFilter,
  useProductAttributeList,
} from '@wpro/magento/dist/modules/catalog'
import {
  pathToObj,
  objToPath,
} from '@wpro/magento/dist/modules/catalog/hooks/useProductListPage/utils'
import {
  Heading,
  useRadioGroup,
  useRadio,
  Box,
  Wrap,
  UseRadioGroupReturn,
  AspectRatio,
  RadioProps,
} from '@chakra-ui/react'
import { BRAND_FILTER_CODE } from '@scope/shared/src/resources/constants'
import { useBrandLogoUrl } from '../../../../hooks'
import { useRouter } from 'next/router'
import { getPathnameFromAsPath } from '@wpro/magento/dist/core/resources/helpers'

export const BrandFilter = () => {
  const router = useRouter()
  const { attributeList } = useProductAttributeList()
  const items = attributeList?.[BRAND_FILTER_CODE].options

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'brand',
    onChange: (value) => {
      const queryObj = pathToObj(router.query.q?.toString())
      queryObj[BRAND_FILTER_CODE] = { op: undefined, value: [value] }
      const queryString = objToPath(queryObj)
      const path = `${getPathnameFromAsPath(router.asPath)}${
        queryString.length ? `?q=${queryString}` : ''
      }`
      router.push(path)
    },
  })

  const group = getRootProps()

  return (
    <Wrap
      align="center"
      justify={{ base: 'center', md: 'initial' }}
      spacing="20px"
      mb={6}
    >
      <Heading size="xs" letterSpacing="initial">
        Brands:
      </Heading>
      <Wrap {...group}>
        {Object.keys(items ?? {})?.map((key, index) => {
          return (
            <BrandItem
              key={key}
              label={items?.[key] as string}
              value={key}
              getRadioProps={getRadioProps}
            />
          )
        })}
      </Wrap>
    </Wrap>
  )
}

interface BrandItemProps {
  label: string
  value: string
  getRadioProps: UseRadioGroupReturn['getRadioProps']
}
const BrandItem = ({ label, value, getRadioProps }: BrandItemProps) => {
  const radio = getRadioProps({ value })
  const logoUrl = useBrandLogoUrl(label, 'filter')
  return (
    <RadioCard {...radio}>
      {logoUrl && (
        <Image src={logoUrl} alt={label} layout="fill" objectFit="cover" />
      )}
    </RadioCard>
  )
}

function RadioCard(props: RadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <AspectRatio
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderColor="gray.400"
        borderRadius="0"
        transition="all ease-in-out 0.3s"
        _hover={{
          boxShadow: 'md',
        }}
        _checked={{
          borderColor: 'gray.700',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
        ratio={47 / 28}
      >
        {props.children}
      </AspectRatio>
    </Box>
  )
}
