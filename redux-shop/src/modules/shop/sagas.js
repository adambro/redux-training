import { takeEvery, call, put } from 'redux-saga/effects'

export default function * shopSaga () {
  // TODO: Implement
}

function fetchProducts () {
  return fetch('https://8c8mvg5amh.execute-api.eu-central-1.amazonaws.com/live/products')
    .then(r => r.json())
}