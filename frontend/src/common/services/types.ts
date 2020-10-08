/*
 * Copyright 2020 LasGIS FOE Helper
 */

import { GetAllActionTypes } from '../types/redux-types';
import * as actions from '../services/action-creators';

export enum RequestState {
  UNDEFINED, START, SUCCESS, FAIL
}

export type CommonStoreData = {
  loading?: boolean;
};

export type CommonActions = ReturnType<GetAllActionTypes<typeof actions>>;
