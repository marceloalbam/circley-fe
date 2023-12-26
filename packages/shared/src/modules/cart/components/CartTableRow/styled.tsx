import styled from '@emotion/styled'

export const Tr = styled.tr`
  td {
    color: ${(props) => props.theme.colors.gray['700']};
    padding: 25px 15px;
    border-top: 1px solid ${(props) => props.theme.colors.gray['100']};

    &:first-child {
      width: 1%;
      padding-left: 0;
    }

    &:last-child {
      width: 1%;
      padding-right: 0;
    }
  }

  .product-image {
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

  .product-price {
    min-width: 100px;
    font-size: 15px;
    font-weight: normal;
    line-height: 1;
    text-align: right;

    > .oldPrice {
      color: ${(props) => props.theme.colors.gray['300']};
      text-decoration: line-through;
      margin: 0 5px 0 0;
    }
  }

  .product-quantity {
    width: 90px;
    margin: 0 auto;
    transform: translateY(18px);

    input {
      width: 90px;
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
    align-items: center;

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
    min-width: 100px;
    font-size: 15px;
    font-weight: normal;
    line-height: 1;
    text-align: right;
  }
`
