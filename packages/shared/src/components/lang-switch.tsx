import { Box, BoxProps, Select } from '@chakra-ui/react'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'

export const LangSwitch = (props: BoxProps) => {
  const { intl, setLocale, locale } = useCoreContext()
  return (
    <Box {...props}>
      <Select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value)
        }}
      >
        {intl.map((el) => {
          return (
            <option key={el.code} value={el.code}>
              {el.title}
            </option>
          )
        })}
      </Select>
    </Box>
  )
}
