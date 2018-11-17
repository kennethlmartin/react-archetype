/**
 * @module app/Client
 */

import 'regenerator-runtime/runtime';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import 'app/styles/main.css';
import AppRoot from 'app/containers/AppRoot';
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
hydrate((
  <Provider store={store}>
    <HelmetProvider>
      <ConnectedRouter history={history}>
        <AppRoot />
      </ConnectedRouter>
    </HelmetProvider>
  </Provider>
), document.getElementById('app-root'));
