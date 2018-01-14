import { selectProductDetailsById } from '../shop/selectors'

export const selectCartProductsDetails = state => {
  const cart = state.cart
  const productQuantities = Object.keys(state.cart)
    .map(id => ({ id, quantity: cart[id] }))

  return productQuantities.map(p => {
    return {
      product: selectProductDetailsById(state, p.id),
      quantity: p.quantity
    }
  })
  .sort((a, b) => a.productId - b.productId)
}