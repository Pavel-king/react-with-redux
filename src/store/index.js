import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer.js'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

//redux-thunk的使用
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//   //applyMiddleware(...middleware),
//   applyMiddleware(thunk)
//   // other store enhancers if any
// );
// const store = createStore(reducer, enhancer);

//redux-saga的使用

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
//
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// mount it on the Store
const store = createStore(
  reducer,
  enhancer
)
// then run the saga
sagaMiddleware.run(mySaga)


export default store