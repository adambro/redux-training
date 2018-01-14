import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { selectCartProductsDetails } from '../modules/cart/selectors'
import { increaseProductQuantity, decreaseProductQuantity, removeProductFromCart, checkout } from '../modules/cart/actions'

const mapStateToProps = (state, props) => {
  return {
    products: selectCartProductsDetails(state)
  }
}

/*
 * Same as:
 * 
 * const mapDispatchToProps = dispatch => {
 *   return {
 *     increaseQuantity: productId => dispatch(increaseProductQuantity(productId)),
 *     decreaseQuantity: productId => dispatch(decreaseProductQuantity(productId)),
 *     removeProduct: productId => dispatch(removeProductFromCart(productId))
 *   }
 * }
 */
const mapDispatchToProps = dispatch => bindActionCreators({
  increaseQuantity: increaseProductQuantity,
  decreaseQuantity: decreaseProductQuantity,
  removeProduct: removeProductFromCart,
  checkout: checkout,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)