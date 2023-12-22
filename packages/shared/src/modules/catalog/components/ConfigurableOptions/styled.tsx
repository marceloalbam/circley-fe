import styled from '@emotion/styled'

export const Container = styled.div<any>`
  transition: opacity 300ms ease;
  ${(props) =>
    !props.hasVariants &&
    `
    cursor: wait;
    > * {
      pointer-events: none;
    }
  `}
`

export const Setting = {
  Option: styled.div`
    margin: 0 0 15px;
  `,

  Title: styled.div`
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 5px;
  `,
}
