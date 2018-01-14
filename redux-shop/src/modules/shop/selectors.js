const selectShopState = state => state.shop

export const selectProducts = state => {
  let shop = selectShopState(state)
  let products = shop.products

  return Object.values(products.byId)
}

export const selectCategories = state => {
  let shop = selectShopState(state)
  let categories = shop.categories

  return Object.values(categories.byId)
}

export const selectCategoryById = (state, categoryId) => {
  let shop = selectShopState(state)
  let categories = shop.categories

  return categories.byId[categoryId]
}

export const selectProductsByCategory = (state, categoryId) => {
  let shop = selectShopState(state)
  let products = shop.products

  let productIds = products.byCategoryId[categoryId] || []

  return productIds.map(id => products.byId[id])
}

export const selectProductDetailsById = (state, productId) => {
  let shop = selectShopState(state)
  let products = shop.products
  let categoriesById = shop.categories.byId

  let product = products.byId[productId]
  let category = categoriesById[product.categoryId]

  return Object.assign({}, product, { category: category })
}