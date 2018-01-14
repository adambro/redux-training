import {
  ADD_PRODUCT,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT,
  CHECKOUT,
} from './constants'

export const addProductToCart = (productId, quantity) => {
  return {
    type: ADD_PRODUCT,
    productId,
    quantity
  }
}

export const increaseProductQuantity = (productId) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    productId
  }
}

export const decreaseProductQuantity = (productId) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    productId
  }
}

export const removeProductFromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    productId
  }
}

export const checkout = () => {
  return {
    type: CHECKOUT
  }
}