/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { COMMON_HIDE_LOADER, COMMON_SHOW_LOADER } from './action-constants';
import { CommonActions, CommonStoreData } from './types';

const initialState: CommonStoreData = {
  loading: false,
};

export function commonReducer(state: CommonStoreData = initialState, action: CommonActions): CommonStoreData {
  switch (action.type) {
    case COMMON_SHOW_LOADER:
      return { ...state, loading: true };
    case COMMON_HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
