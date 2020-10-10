/*
 * Copyright 2020 LasGIS FOE Helper
 */

import { combineReducers } from 'redux';
import { commonReducer } from '../common/services/reducer';
import { connectRouter } from "connected-react-router";
import { History } from "history";

export default (history: History) => combineReducers({
  router: connectRouter(history),
  common: commonReducer,
});
