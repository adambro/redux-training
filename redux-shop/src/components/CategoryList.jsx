import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const CategoryList = ({ categories }) => (
  <div>
    {
      categories.map(({ id, name, image }) => (
        <ProductCategory key={id} id={id} name={name} image={image} />
      ))
    }
  </div>
)

export default CategoryList

const ProductCategory = ({ id, name, image }) => {
  const link = `/category/${id}`

  return (
    <Container>
      <Link to={link}>
        <CategoryImage src={image} alt={name} />
      </Link>
      <ProductCategoryTitle>
        {name}
      </ProductCategoryTitle>
      <ShopNowLink to={link}>
        Shop Now
      </ShopNowLink>
    </Container>
  )
}

/* STYLES */

const Container = styled.div`
  margin-bottom: 3em;
  text-align: center;
`

const CategoryImage = styled.img`
  width: 100%;
  max-height: 15em;
  object-fit: cover;
`

const ProductCategoryTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0.5em 0;
`

const ShopNowLink = Button.withComponent(Link).extend`
  display: inline-block;
`