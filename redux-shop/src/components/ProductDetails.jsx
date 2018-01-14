import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'

export default class ProductDetails extends Component {
  constructor() {
    super()
    this.state = { quantity: 1 }
  }

  setQuantity = e => {
    this.setState({
      quantity: Number(e.target.value)
    })
  }

  render() {
    const { id, name, price, description, image, addToCart } = this.props
    const { quantity } = this.state
    const minimumQuantity = 1
    const isValidQuantity = minimumQuantity <= quantity

    return (
      <ProductContainer>
        <ProductImage src={image} alt={name} />
        <Details>
          <ProductName>{name}</ProductName>
          <ProductPrice>${price}</ProductPrice>
          <QuantitySelection>
            <QuantityLabel>Quantity</QuantityLabel>
            <QuantityInput type="number" value={quantity} min={minimumQuantity} onChange={this.setQuantity} />
          </QuantitySelection>
          <ProductDescriptionWrapper>
            <BoldText>Description</BoldText>
            <div>{description}</div>
          </ProductDescriptionWrapper>
          <Button onClick={() => addToCart(id, quantity)} disabled={!isValidQuantity}>
            Add to cart
          </Button>
        </Details>
      </ProductContainer>
    )
  }
}

/* STYLES */

const ProductContainer = styled.div`
  display: grid;
  grid-gap: 10%;
  grid-template-columns: 50% 40%;
  margin: 0 20%;

  @media (max-width: 768px) {
    margin: 0 10%;
  }

  @media (max-width: 480px) {
    margin: 0;
    grid-gap: 0;
    grid-template-columns: 100%;
  }
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 640px;
  margin-left: auto;
`

const Details = styled.div`

  @media (max-width: 480px) {
    margin: 0 2em;
  }
`

const ProductName = styled.h1`
  font-family: 'Montserrat', sans-serif;
`

const ProductPrice = styled.div`
  opacity: 0.6;
`

const QuantitySelection = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
  margin: 1em 0;
  padding: 1em 0;
  align-items: baseline;
`

const QuantityLabel = styled.label`
  font-weight: 500;
  flex: 0 0 auto;
`

const QuantityInput = styled.input`
  appearance: none;
  font-size: 1em;
  margin: 0 1em;
  flex: 1;
  outline: none;
  border: none;
  padding: 0.25em;

  &:active, &:focus {
    border-bottom: 2px solid #486982;
  }
`

const ProductDescriptionWrapper = styled.div`
  margin: 1em 0;
`

const BoldText = styled.div`
  font-weight: 700;
  margin-bottom: 1em;
`