import { createStore, combineReducers } from 'redux'
import shopReducer from './modules/shop/reducer'
import cartReducer from './modules/cart/reducer'

const rootReducer = combineReducers({
  shop: shopReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store