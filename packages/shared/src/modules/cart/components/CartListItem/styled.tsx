import styled from '@emotion/styled'

export const Li = styled.li`
  padding: 25px 15px;
  border-top: 1px solid ${(props) => props.theme.colors.gray['100']};

  .product-data {
    display: flex;
  }

  .product-actions {
    display: flex;
    margin: 20px 0 0;
  }

  .product-image {
    padding: 0 20px 0 0;

    > a {
      display: block;
      text-decoration: none;

      > div {
        width: 110px;
        height: 110px;
        background: no-repeat 50% 50% / contain;
      }
    }
  }

  .product-sku {
    font-weight: normal;
    line-height: 1;
    margin: 5px 0 0;
  }

  .product-options {
    line-height: 1;
    margin: 10px 0 0;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
  }

  .product-quantity {
    width: 100px;
    padding: 0 18px 0 0;

    input {
      width: 100px;
      height: 40px;
      color: ${(props) => props.theme.colors.gray['500']};
      font-size: 13px;
      font-weight: normal;
      line-height: 20px;
      padding: 10px;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid ${(props) => props.theme.colors.gray['100']};
      background: ${(props) => props.theme.colors.white};
      transition: border 300ms ease, box-shadow 300ms ease;
      outline: none !important;

      &:hover,
      &:focus {
        border: 1px solid ${(props) => props.theme.colors.gray['300']};
        box-shadow: 0 0 4px rgba(0 0 0 20%);
      }
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      opacity: 1;
    }

    button {
      user-select: none;
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      color: ${(props) => props.theme.colors.primary['300']};
      font-size: 13px;
      font-weight: normal;
      line-height: 1;
      padding: 10px;
      border: none;
      background: none;
      outline: 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: opacity 300ms ease;

      &[disabled] {
        cursor: default;
        opacity: 0.6;
      }

      > div {
        position: absolute;
        right: 2px;
        top: 9px;
      }
    }
  }

  .product-remove {
    white-space: nowrap;
    display: flex;
    align-items: flex-start;

    svg {
      display: inline-block;
      width: 8px;
      height: 8px;
      fill: ${(props) => props.theme.colors.gray['500']};
      margin: 0 6px 0 0;
    }

    button {
      user-select: none;
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      color: ${(props) => props.theme.colors.gray['500']};
      font-size: 15px;
      font-weight: normal;
      line-height: 1;
      padding: 10px;
      border: none;
      background: none;
      outline: 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: opacity 300ms ease;

      &[disabled] {
        cursor: default;
        opacity: 0.6;
      }

      > div {
        position: absolute;
        right: 2px;
        top: 9px;
      }
    }
  }

  .product-subtotal {
    margin: 20px 0 0;
    min-width: 100px;
    font-size: 15px;
    font-weight: normal;
    line-height: 1;

    > .oldPrice {
      color: ${(props) => props.theme.colors.gray['300']};
      text-decoration: line-through;
      margin: 0 5px 0 0;
    }

    small {
      font-size: 100%;
      font-weight: normal;
      line-height: 1;
      margin: 0 0 0 7px;
    }
  }
`
