import { connect } from 'react-redux'
import ProductDetails from '../components/ProductDetails'
import { selectProductDetailsById } from '../modules/shop/selectors'
import { addProductToCart } from '../modules/cart/actions'

const mapStateToProps = (state, props) => {
  const productId = Number(props.match.params.productId)

  return selectProductDetailsById(state, productId)
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productId, quantity) => {
      const action = addProductToCart(productId, quantity)

      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)