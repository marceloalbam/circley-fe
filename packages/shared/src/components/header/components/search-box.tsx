import { SearchBox as CoreSearchBox } from '@wpro/magento/dist/modules/shared'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import { useSearchBox } from '@wpro/magento/dist/modules/shared/hooks'
import { Input, IconButton, Link as ChakraLink } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import Image from 'next/image'
import { useCoreContext } from '@wpro/magento/dist/core/hooks'
import { getCategoryListDataKey } from '@wpro/magento/dist/modules/catalog'

interface Props {
  withSuggestions?: boolean
}

export const SearchBox = ({ withSuggestions }: Props) => {
  const { storeView } = useCoreContext()
  const isReinsman = storeView === 'reinsman'
  const isHighHorse = storeView === 'highhorse'
  const isTucker = storeView === 'tucker'

  const intl = useIntl()
  const {
    value,
    products,
    totalCount,
    showSuggestions,
    isAwaiting,
    goToSearchPage,
    handleFormSubmit,
    handleInputBlur,
    handleInputChange,
    handleInputFocus,
  } = useSearchBox({ withSuggestions })

  return (
    <Container
      isReinsman={isReinsman}
      isHighHorse={isHighHorse}
      isTucker={isTucker}
    >
      <div>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            autoComplete="off"
            maxLength={128}
            placeholder="Enter Search"
            value={value}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            variant="unstyled"
          />
          <IconButton
            aria-label={intl.formatMessage({ id: 'action.search' })}
            variant="unstyled"
            color="highhorse.400"
            type="submit"
            display="flex"
            alignItems="center"
            justifyContent="center"
            isLoading={isAwaiting}
            borderRadius="full"
            icon={<Search2Icon />}
          />
        </form>
        {showSuggestions && (
          <div>
            <ul>
              {products?.map((product) => {
                return (
                  <li key={product.id}>
                    <Link href={product.getUrlPath()} passHref>
                      <ChakraLink>
                        <Image
                          width="50px"
                          height="50px"
                          alt={''}
                          src={product.image.thumbnail.url}
                        />
                        <span>{product.name}</span>
                      </ChakraLink>
                    </Link>
                  </li>
                )
              })}
              <li>
                <button type="button" onClick={() => goToSearchPage()}>
                  See more results ({totalCount})
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div<{
  isReinsman?: boolean
  isHighHorse?: boolean
  isTucker?: boolean
}>`
  position: relative;
  z-index: 1;
  width: 240px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 1200px) {
    width: 320px;
  }

  @media (min-width: 1440px) {
    width: 395px;
  }

  form {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: ${(props) => props.theme.radii.md};
    box-shadow: 1px 2px 0 #c4c3bc;
    background: white;

    input {
      width: 100%;
      display: block;
      color: ${(props) => props.theme.colors.gray['700']};
      font-size: 15px;
      font-weight: normal;
      line-height: 20px;
      height: 44px;
      padding: 5px 20px 5px 25px;
      box-sizing: border-box;
      background: none;
      border: none;
      border-radius: 0;
      outline: none;

      &::placeholder {
        color: ${(props) =>
          props.isReinsman
            ? props.theme.colors.reinsman['200']
            : props.theme.colors.gray['400']};
      }
    }

    button {
      svg {
        color: ${(props) =>
          props.isReinsman
            ? props.theme.colors.reinsman['300']
            : props.isHighHorse
            ? props.theme.colors.highhorse['400']
            : props.isTucker
            ? props.theme.colors.tucker['400']
            : props.theme.colors.circley['300']};
        width: 1.3em;
        height: 1.3em;
      }
    }

    & + div {
      position: absolute;
      z-index: 1;
      top: 42px;
      left: 0;
      width: 100%;
      border: 1px solid ${(props) => props.theme.colors.gray['100']};
      border-radius: 5px;
      box-sizing: border-box;
      background: ${(props) => props.theme.colors.white};
      box-shadow: 0 0 5px rgba(0 0 0 10%);

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        a {
          display: flex;
          align-items: center;
          width: 100%;
          color: ${(props) => props.theme.colors.gray['700']};
          font-size: 13px;
          padding: 10px;
          text-decoration: none;
          box-sizing: border-box;
          border-bottom: 1px solid ${(props) => props.theme.colors.gray['100']};

          img {
            margin: 0 15px 0 0;
          }
        }

        li {
          &:last-child {
            padding: 10px;
          }
        }

        button {
          display: block;
          cursor: pointer;
          font-size: 13px;
          width: 100%;
          border: none;
          padding: 10px;
          box-sizing: border-box;
          background: white;
        }
      }
    }
  }
`
