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
      return {
        products: {
          byId: getProductsById(action.products),
          byCategoryId: getProductsByCategoryId(action.products)
        },
        categories: {
          byId: getCategoriesById(action.products)
        }
      }
    default:
      return state
  }
}

export default reducer

const getProductsById = products => {
  return products.reduce(
    (byId, product) => {
      let categoryId = product.category.id
      let normalizedProduct = Object.assign({}, product, { category: undefined, categoryId: categoryId })

      return Object.assign(byId, { [product.id]: normalizedProduct })
    },
    {}
  )
}

const getProductsByCategoryId = products => {
  return products.reduce(
    (byCategoryId, product) => {
      let categoryId = product.category.id
      let productsInCategory = byCategoryId[categoryId] || []

      return Object.assign(byCategoryId, { [categoryId]: productsInCategory.concat(product.id) })
    },
    {}
  )
}

const getCategoriesById = products => {
  return products.map(p => p.category)
    .reduce(
      (byId, category) => {
        let categoryId = category.id

        return Object.assign(byId, { [categoryId]: category })
      },
      {}
    )
}