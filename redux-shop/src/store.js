import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import shopReducer from './modules/shop/reducer'
import cartReducer from './modules/cart/reducer'
import shopSaga from './modules/shop/sagas'
import cartSaga from './modules/cart/sagas'

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootSaga = function * () {
  yield all([
    shopSaga(),
    cartSaga()
  ])
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store