/**
 * @module app/state/store
 */

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { rootSaga } from 'app/state/sagas';

import { createRootReducer } from 'app/state/reducers';

export const configureStore = (history: History, initialState: object) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(middleware),
  );

  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('app/state/reducers', function() {
      const { createRootReducer } = require('app/state/reducers');
      store.replaceReducer(createRootReducer(history));
    });
  }

  // Run sagas only after store creation
  sagaMiddleware.run(rootSaga);
  return store;
};
