import { take, race, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { CHECKOUT } from './constants'

export default function * cartSaga () {
  const {checkout} = yield race({
    checkout: yield take(CHECKOUT),
    timeout: yield delay(1000)
  })
  if (!checkout) {
    call(notifyProductsAddedToCartWithoutCheckout)
  }
}

function notifyProductsAddedToCartWithoutCheckout () {
  console.log('3 products added to cart without checkout!')
}