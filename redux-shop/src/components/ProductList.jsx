import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductList = ({ category, products }) => (
  <div>
    <CategoryTitle>{category.name}</CategoryTitle>
    <ItemCount>({products.length} items)</ItemCount>
    <ProductsContainer>
    {
      products.map(({ id, name, price, image }) => (
        <Product key={id} id={id} name={name} price={price} image={image} />
      ))
    }
    </ProductsContainer>
  </div>
)

export default ProductList

const Product = ({ id, name, image, price }) => (
  <ProductContainer to={`/product/${id}`}>
    <ProductImage src={image} alt={name} />
    <ProductTitle>{name}</ProductTitle>
    <ProductPrice>${price}</ProductPrice>
  </ProductContainer>
)

/* STYLES */

const ProductContainer = styled(Link)`
  color: black;
  display: block;
  margin: auto;
  text-decoration: none;
  text-align: center;
`

const ProductImage = styled.img`
  display: block;
  width: 100%;
`

const ProductTitle = styled.div`
  font-size: 1.33em;
  font-weight: 500;
`

const ProductPrice = styled.span`
`

const CategoryTitle = styled.h1`
  text-align: center;
`

const ItemCount = styled.span`
  text-align: center;
  display: block;
  margin: auto;
`

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 5%;
  margin: 0 12.5%;

  @media (max-width: 768px) {
    grid-template-columns: 45% 45%;
    grid-gap: 10%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 100%;
    grid-gap: 0;
  }
`
