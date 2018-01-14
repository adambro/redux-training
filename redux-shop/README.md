TO DO:

- Redux-saga middleware has been added
- Add new sagas to src/store.js
  - new saga in src/modules/shop/sagas.js
  - new saga in src/modules/cart/sagas.js
  ```
  export default function* rootSaga() {
    yield all([
      mySaga(),
      anotherSaga(),
      ...
    ])
  }
  ```

- Complete logic of loading products from api
  - actions have been already added to src/modules/shop/actions
  - reducer logic has been implemented in src/modules/shop/reducer
  - complete saga logic in src/modules/shop/sagas
    - saga should respond to all dispatches of `LOAD_PRODUCTS_REQUESTED` action type
    - saga should then load products from api
    - saga should dispatch `LOAD_PRODUCTS_SUCCEEDED` action with products
    - HINT: use takeEvery to watch for action dispatch, use call to make a request and put to dispatch action

- Add new logic for analytics
  - new action has been added to src/modules/cart/actions - `checkout` which is dispatched when users proceeds to checkout
  - new logic: when user adds three products to cart and then for 1 minute does not proceed to checkout notification should be dispatched
  - complete saga logic in src/modules/cart/sagas
    - use provided `notifyProductsAddedToCartWithoutCheckout` function
    - HINT: use take, race, delay