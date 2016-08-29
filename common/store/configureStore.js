import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import scoreReducer from '../reducers'

export default function configureStore(preloadedState) {
  const store = createStore(
    scoreReducer,
    preloadedState,
    applyMiddleware(thunk)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
