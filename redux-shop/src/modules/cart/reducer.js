import {
  ADD_PRODUCT,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT,
} from './constants'

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(state, action.productId, action.quantity)
    case INCREASE_PRODUCT_QUANTITY:
      return changeProductQuantity(state, action.productId, 1)
    case DECREASE_PRODUCT_QUANTITY:
      return changeProductQuantity(state, action.productId, -1)
    case REMOVE_PRODUCT:
      return Object.assign({}, state, {
        products: state.products
          .filter(pq => pq.productId !== action.productId)
      })
    default:
     return state
  }
}

export default reducer

function addProduct(state, productId, quantity) {
  if(state.products.find(pq => pq.productId === productId)) {
    return changeProductQuantity(state, productId, quantity)
  }

  return Object.assign({}, state, {
    products: state.products
      .concat({ productId, quantity })
  })
}

function changeProductQuantity (state, productId, quantityIncrease) {
  return Object.assign({}, state, {
    products: state.products
      .map(pq => pq.productId === productId
        ? { ...pq, quantity: pq.quantity + quantityIncrease }
        : pq
      )
      .filter(p => p.quantity > 0)
  })
}