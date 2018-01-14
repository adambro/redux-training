import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NavigationMenu from '../components/NavigationMenu'
import { selectCategories, selectProductDetailsById } from '../modules/shop/selectors'
import routes from '../routes'

const mapStateToProps = (state, props) => {
  const activeCategoryId = getActiveCategoryForRoute(state, props.match)
  const backNavigationLink = getBackNavigationLinkForRoute(state, props.match)

  return {
    categories: selectCategories(state),
    activeCategoryId: activeCategoryId,
    backNavigationLink: backNavigationLink
  }
}

export default withRouter(connect(mapStateToProps)(NavigationMenu))

const getActiveCategoryForRoute = (state, match) => {
  switch(match.path) {
    case routes.category:
      return Number(match.params.categoryId)
    case routes.product:
      const productId = Number(match.params.productId)
      const product = selectProductDetailsById(state, productId)

      return product && product.category.id
    default:
      return undefined
  }
}

const getBackNavigationLinkForRoute = (state, match) => {
  switch (match.path) {
    case routes.product:
      const productId = Number(match.params.productId)
      const product = selectProductDetailsById(state, productId)

      return product ? `/category/${product.category.id}` : '/'
    default:
      return undefined
  }
}