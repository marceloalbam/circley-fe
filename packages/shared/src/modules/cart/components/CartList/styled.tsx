import styled from '@emotion/styled'

export const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray['100']};

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`
