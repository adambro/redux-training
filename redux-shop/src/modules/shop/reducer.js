import { LOAD_PRODUCTS_SUCCEEDED } from './constants'

const initialState = {
  products: {
    byId: {},
    byCategoryId: {}
  },
  categories: {
    byId: {}
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCEEDED:
    default:
      return state
  }
}

export default reducer