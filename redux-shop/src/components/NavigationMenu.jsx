import React from 'react'
import Link from './Link'
import styled from 'styled-components'

const NavigationMenu = ({ categories, activeCategoryId, backNavigationLink }) => (
  <Navigation>
    {
      backNavigationLink
        ? (
          <BackLink tabIndex="-1" to={backNavigationLink}>
            <i className="material-icons" aria-label="Go back" role="button" tabIndex="0" aria-disabled="false">
              arrow_back
            </i>
          </BackLink>
        )
        : null
    }
    <CategoryNavigation>
      {
        categories.map(c => (
          <CategoryLink key={c.id} to={`/category/${c.id}`} active={activeCategoryId === c.id}>
            {c.name}
          </CategoryLink>
        ))
      }
    </CategoryNavigation>
    <CartLink to='/cart'>
      <i className="material-icons">shopping_cart</i>
    </CartLink>
  </Navigation>
)

export default NavigationMenu

/* STYLES */

const Navigation = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0.25em 2em 0 2em;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    padding-bottom: 0.25em;
  }
`

const BackLink = Link.extend`
  margin: 0 1em;

  @media (min-width: 769px) {
    display: none
  }
`

const CartLink = Link.extend`
  margin-left: auto;
  margin-right: 1em;
`

const CategoryNavigation = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const CategoryLink = styled(({ active, ...rest }) => <Link {...rest} />) `
  border-bottom: 2px solid ${props => props.active ? '#486982' : 'transparent'};
  font-size: 0.8em;
  margin: 0 1em;

  &:hover {
    border-bottom-color: 2px solid ${props => props.active ? '#486982' : '#d1dfea'};
  }
`