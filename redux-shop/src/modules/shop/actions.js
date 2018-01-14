import { LOAD_PRODUCTS_REQUESTED, LOAD_PRODUCTS_SUCCEEDED } from './constants'

export function loadProducts () {
  return {
    type: LOAD_PRODUCTS_REQUESTED
  }
}

export function loadProductsSucceeded(products) {
  return {
    type: LOAD_PRODUCTS_SUCCEEDED,
    products: products
  }
}

