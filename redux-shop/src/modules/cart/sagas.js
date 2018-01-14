import { delay } from 'redux-saga'
import { take, race, call } from 'redux-saga/effects'
import { ADD_PRODUCT, CHECKOUT } from './constants'

export default function * cartSaga () {
  yield race([
    take(CHECKOUT),
    call(notifyAfter3ProductsAddedToCartSaga),
  ])
}

function * notifyAfter3ProductsAddedToCartSaga () {
  // Take 3 ADD_PRODUCT actions
  yield take(ADD_PRODUCT)
  yield take(ADD_PRODUCT)
  yield take(ADD_PRODUCT)

  // Wait for 1 minute
  yield delay(60 * 1000)

  // notify
  yield call(notifyProductsAddedToCartWithoutCheckout)
}

function notifyProductsAddedToCartWithoutCheckout () {
  console.log('3 products added to cart without checkout!')
}