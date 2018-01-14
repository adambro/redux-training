TO DO:

- Normalize how data is stored in state, expected state shape
{
  shop: {
    products: {
      byId: {
        [productId]: product
      },
      byCategoryId: {
        [categoryId]: [...productIds]
      }
    },
    categories: {
      byId: {
        [categoryId]: category
      }
    }
  },
  cart: {
    [productId]: quantity
  }
}
- selectors already have been changed - take a look
- change logic of reducers
  - shop reducer - src/modules/shop/reducer
  - cart reducer - src/modules/cart/reducer (notice how simpler it will be)