import { takeEvery, call, put } from 'redux-saga/effects'
import { LOAD_PRODUCTS_REQUESTED, LOAD_PRODUCTS_SUCCEEDED } from './constants'

export default function * shopSaga () {
  yield takeEvery(LOAD_PRODUCTS_REQUESTED, retrieveProducts)
}

function * retrieveProducts() {
  try {
    const products = yield call(fetchProducts);
    yield put({type: LOAD_PRODUCTS_SUCCEEDED, products})
  }
  catch (err) {
  }
}

function fetchProducts () {
  return fetch('https://8c8mvg5amh.execute-api.eu-central-1.amazonaws.com/live/products')
    .then(r => r.json())
}