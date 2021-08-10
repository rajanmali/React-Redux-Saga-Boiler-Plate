import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  window.window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;

/* To use redux dev tools with nextjs and typescript */

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// const store = createStore(rootReducer, enhancer);

// sagaMiddleware.run(rootSaga);
