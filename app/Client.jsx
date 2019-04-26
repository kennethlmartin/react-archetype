/**
 * @module app/Client
 */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';

import 'app/styles/main.css';
import AppRoot from 'app/AppRoot';
import { configureStore } from './state/store';

// Initial state prepared by the server
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// Routing is relative to our app's basename
const { app } = preloadedState;
const history = createBrowserHistory({ basename: app.basePath });

// Configure Redux store
const store = configureStore(history, preloadedState);

// Render App
loadableReady(() => {
  const root = document.getElementById('app-root');

  hydrate((
    <Provider store={store}>
      <HelmetProvider>
        <ConnectedRouter history={history}>
          <AppRoot />
        </ConnectedRouter>
      </HelmetProvider>
    </Provider>
  ), root);
});
