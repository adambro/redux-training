# Redux training

2018-03-22, Rafał Kostrzewski

## Actions

Actions are simple objects with `type` attr.
Usually action creators (factory) are used.

## Reducers

It should return new object, becuase tools rely on reference comparision. Modification of state is not recommended.

## Store

Enhancer allows to change store API.

Middleware - changes dispatch behaviour. Examples:

* logger: reduc-logger
* async actions

redux-logger: applyMiddleare(logger): action, prev state, curr state

### redux-devtools

* recommended browser plugin
* can also connect to server
* time travel: jump to any point in time
* easier to detect race conditions

## Redux goals

* Avoid detecting changes in big objects.

## Best practices

* Always start with one store.
* Action `type` values are global! Use prefixes.
* If you need one action handled in many reducers - is that good design?

## Selectors

* Use selectors for getting something from state that is deep in object.
* Selector is a function that gets data from object.
* Example `const selectProducts = state => state.cart.products`
* Use case `mapStateToProps`.
* Lib `reselect` makes it easy to combine selectors.

### Denormalization

* Lib `normalizr` creates normalized objects using declarative schema.

## Async

3 approaches, one is `redux-thunk` lib.

### redux-thunk

    git co 4-redux-thunk

* One source of logic.
* Actions chaining is easy.
* Can mix sync and async actions.

## redux-saga

* It's not the same as DDD saga.
* `yield take('PING')` is waiting on action with type `PING`
* Effect `yield call(loadAsync)` waits on async function finish.
* Adds `run()` function to Redux store.


# Tips

Użyj Lubuntu / Xubuntu. Jest znacznie szybsze niż Unity na VM.
Użyj dysku który ma minimum 40GB.
Nie duplikuj obrazków w przykładzie. Myślałem że pętla mi nie działa bo są widzę duplikaty, a pierwszy i ostatni obraz był taki sam ;)
Wyszarz kod który nie jest istotny w przykładach.
Może trzymać taki sam `package.json` dla wszystkich branchy? Nie trzeba robić `npm install` po każdej zmianie.
