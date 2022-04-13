/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import history from './history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), thunk));

export default function configureStore(preloadedState = {}) {
  return createStore(rootReducer(history), preloadedState, enhancer);
}
