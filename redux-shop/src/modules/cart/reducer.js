import {
  ADD_PRODUCT,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT,
} from './constants'

const initialState = {
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
    case INCREASE_PRODUCT_QUANTITY:
    case DECREASE_PRODUCT_QUANTITY:
    case REMOVE_PRODUCT:
    default:
     return state
  }
}

export default reducer
