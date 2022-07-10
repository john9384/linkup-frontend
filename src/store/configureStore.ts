import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'
import { createReducer } from './reducers'

export function configureAppStore() {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  const middlewares = [sagaMiddleware, thunkMiddleware]

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[]

  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({ serializableCheck: false }),
      ...middlewares,
    ],
    enhancers,
    devTools:
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
  })

  return store
}
