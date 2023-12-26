import styled from '@emotion/styled'

export const Container = styled.div`
  table {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray['100']};

    th {
      text-align: left;
      font-size: 12px;
      font-weight: normal;
      line-height: 1;
      color: ${(props) => props.theme.colors.gray['700']};
      text-transform: uppercase;
      padding: 12px 15px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }

      &:nth-child(2) {
        text-align: right;
      }

      &:nth-child(3) {
        text-align: center;
      }

      &:nth-child(5) {
        text-align: right;
      }
    }
  }
`
