import { LOAD_PRODUCTS_SUCCEEDED } from './constants'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCEEDED:
      return action.products
    default:
      return state
  }
}

export default reducer