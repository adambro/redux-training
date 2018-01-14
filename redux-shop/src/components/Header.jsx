import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Header = () => (
  <ShopHeader>
    <TitleLink to='/'>Redux Shop</TitleLink>
  </ShopHeader>
)

export default Header

/* STYLES */

const ShopHeader = styled.header`
  margin: 0.5em 0;
  text-align: center;
  width: 100%;
`

const TitleLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  text-transform: uppercase;
  color: black;
`
