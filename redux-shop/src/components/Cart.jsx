import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Link from './Link'

const Cart = ({ products = [], increaseQuantity, decreaseQuantity, removeProduct, checkout }) => {
  if(!products.length) {
    return (
      <CartContainer>
        There are no items in cart
      </CartContainer>
    )
  }

  return (
    <CartContainer>
      {
        products.map(({ product, quantity }) => (
          <ProductInCart
            key={product.id}
            product={product}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeProduct={removeProduct}
          />
        ))
      }
      <CheckoutButton to='/checkout' onClick={checkout}>
        Checkout
      </CheckoutButton>
    </CartContainer>
  )
}

export default Cart

const ProductInCart = ({ product, quantity, increaseQuantity, decreaseQuantity, removeProduct }) => (
  <ProductContainer>
    <ProductName>{product.name}</ProductName>
    <IconButton onClick={() => decreaseQuantity(product.id)} aria-label="decrease quantity">remove</IconButton>
    <ProductQuantity>{quantity}</ProductQuantity>
    <IconButton onClick={() => increaseQuantity(product.id)} aria-label="add quantity">add</IconButton>
    <IconButton onClick={() => removeProduct(product.id)} aria-label="remove product">clear</IconButton>
  </ProductContainer>
)

/* STYLES */

const CartContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 2em;
  text-align: center;
`

const ProductContainer = styled.div`
  display: flex;
  margin: 0.5em auto;
  width: 70%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 1em;
    margin-right: 1em;
  }
`

const ProductName = styled.div`
  flex: 1;
  font-weight: 500;
  text-align: left;
`

const ProductQuantity = styled.div`
  flex: 0;
  margin: 0 0.25em;
`

const IconButton = styled.i.attrs({
  className: 'material-icons',
  role: 'button',
  tabIndex: '1',
})`
  color: black;
  cursor: pointer;
  font-size: 1.2em;
  flex: 0;
  margin: 0 0.25em;
  outline: none;
  vertical-align: bottom;

  &:hover {
    color: #486982;
  }

  &:active {
    color: black;
  }
`

const CheckoutButton = Button.withComponent(Link).extend`
  display: inline-block;
  margin: 1em 0;
`