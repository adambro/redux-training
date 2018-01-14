import { takeEvery, call, put } from 'redux-saga/effects'
import { LOAD_PRODUCTS_REQUESTED } from './constants'
import { loadProductsSucceeded } from './actions'

export default function * shopSaga () {
  yield takeEvery(LOAD_PRODUCTS_REQUESTED, fetchProductsSaga)
}

export function * fetchProductsSaga () {
  let products = yield call(fetchProducts)
  yield put(loadProductsSucceeded(products))
}

function fetchProducts () {
  return fetch('https://8c8mvg5amh.execute-api.eu-central-1.amazonaws.com/live/products')
    .then(r => r.json())
}