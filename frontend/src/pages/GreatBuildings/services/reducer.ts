/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import {
  GREAT_BUILDING_DELETE,
  GREAT_BUILDING_EDIT_NEW,
  GREAT_BUILDING_EDIT_BY_IP,
  GREAT_BUILDING_EDIT_SHOW,
  GREAT_BUILDING_INSERT,
  GREAT_BUILDING_SET_IS_NEW,
  GREAT_BUILDING_UPDATE
} from './action-constants';
import { GreatBuildingsActions, GreatBuildingsStoreData } from './types';
import { GREAT_BUILDING } from "../../../dictionary/great-buildings";
import { GreatBuilding } from "../../../dictionary/dic-type";

const initialState: GreatBuildingsStoreData = {
  greatBuildingList: GREAT_BUILDING,
  editGreatBuilding: undefined,
  isEditGreatBuildingShow: false,
  isNewGreatBuilding: false,
};

export function greatBuildingsReducer(state: GreatBuildingsStoreData = initialState, action: GreatBuildingsActions): GreatBuildingsStoreData {
  switch (action.type) {
    case GREAT_BUILDING_EDIT_SHOW:
      return { ...state, isEditGreatBuildingShow: action.isShow };
    case GREAT_BUILDING_SET_IS_NEW:
      return { ...state, isNewGreatBuilding: action.isNew };

    case GREAT_BUILDING_EDIT_NEW:
      return {
        ...state,
        editGreatBuilding: undefined,
        isEditGreatBuildingShow: true,
        isNewGreatBuilding: true,
      };
    case GREAT_BUILDING_EDIT_BY_IP: {
      const filtered: GreatBuilding[] = state.greatBuildingList.filter(greatBuilding => greatBuilding.id === action.id);
      if (filtered.length) {
        return {
          ...state,
          editGreatBuilding: filtered[0],
          isEditGreatBuildingShow: true,
          isNewGreatBuilding: false,
        };
      }
      return state;
    }
    case GREAT_BUILDING_INSERT:
      return {
        ...state,
        greatBuildingList: state.greatBuildingList.concat([ action.greatBuilding ]),
        isEditGreatBuildingShow: false,
      };
    case GREAT_BUILDING_UPDATE:
      return {
        ...state,
        greatBuildingList: state.greatBuildingList.map(skl => (skl.id === action.greatBuilding.id) ? action.greatBuilding : skl),
        isEditGreatBuildingShow: false,
      };
    case GREAT_BUILDING_DELETE:
      return {
        ...state,
        greatBuildingList: state.greatBuildingList.filter(skl => skl.id !== action.id),
        isEditGreatBuildingShow: false,
      };
    default:
      return state;
  }
}
