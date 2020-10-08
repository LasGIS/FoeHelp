/*
 * Copyright 2020 LasGIS FOE Helper
 */

import { combineReducers } from 'redux';
import { commonReducer } from '../common/services/reducer';
import { connectRouter } from "connected-react-router";

export default (history: any) => combineReducers({
  router: connectRouter(history),
  common: commonReducer,
});
