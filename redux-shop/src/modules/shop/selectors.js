const selectShopState = state => state.shop

const uniqueCategoryFilter = (value, index, array) => {
  return array.findIndex(c => c.id === value.id) === index
}

export const selectCategories = state => {
  const shop = selectShopState(state)

  return shop.map(p => p.category)
    .filter(uniqueCategoryFilter)
}

export const selectCategoryById = (state, categoryId) => {
  const categories = selectCategories(state)

  return categories.find(c => c.id === categoryId)
}

export const selectProductsByCategory = (state, categoryId) => {
  const shop = selectShopState(state)

  return shop.filter(p => p.category.id === categoryId)
}

export const selectProductDetailsById = (state, productId) => {
  const shop = selectShopState(state)

  return shop.find(p => p.id === productId)
}