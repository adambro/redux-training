import { LOAD_PRODUCTS_SUCCEEDED } from './contants'

export function loadProducts () {
  return dispatch => 
    fetchProducts()
      .then(products => loadProductsSucceeded(products))
      .then(action => dispatch(action))
}

export function loadProductsSucceeded (products) {
  return {
    type: LOAD_PRODUCTS_SUCCEEDED,
    products
  }
}

function fetchProducts () {
  return fetch('https://8c8mvg5amh.execute-api.eu-central-1.amazonaws.com/live/products')
    .then(r => r.json())
}