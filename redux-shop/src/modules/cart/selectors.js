import { selectProductDetailsById } from '../shop/selectors'

export const selectCartProductsDetails = state => {
  const products = state.cart.products

  return products.map(p => {
    return {
      product: selectProductDetailsById(state, p.productId),
      quantity: p.quantity
    }
  })
  .sort((a, b) => a.productId - b.productId)
}