import {
  ADD_PRODUCT,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT,
} from './constants'

const initialState = {
}

const reducer = (state = initialState, action) => {
  let productId = action.productId
  let existingQuantity = state[productId] || 0

  switch (action.type) {
    case ADD_PRODUCT:
      return Object.assign({}, state, { [productId]: existingQuantity + action.quantity })
    case INCREASE_PRODUCT_QUANTITY:
      return (productId in state)
        ? Object.assign({}, state, { [productId]: existingQuantity + 1 })
        : state
    case DECREASE_PRODUCT_QUANTITY:
      if (!(productId in state)) {
        return state
      }
      return existingQuantity > 1
        ? Object.assign({}, state, { [productId]: existingQuantity -1 })
        : withoutKey(state, productId)
    case REMOVE_PRODUCT:
      return withoutKey(state, productId)
    default:
      return state
  }
}

export default reducer

const withoutKey = (obj, key) => {
  let copy = Object.assign({}, obj)

  delete copy[key]
  console.log('delete', key, 'before', obj, 'after', copy)
  return copy
}