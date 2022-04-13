/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import {
  RESIDENTIAL_BUILDING_DELETE,
  RESIDENTIAL_BUILDING_EDIT_BY_IP,
  RESIDENTIAL_BUILDING_EDIT_NEW,
  RESIDENTIAL_BUILDING_EDIT_SHOW,
  RESIDENTIAL_BUILDING_INSERT,
  RESIDENTIAL_BUILDING_SET_IS_NEW,
  RESIDENTIAL_BUILDING_UPDATE,
} from './action-constants';
import { ResidentialBuildingsActions, ResidentialBuildingsStoreData } from './types';
import { RESIDENTIAL_BUILDINGS } from '../../../dictionary/residential-buildings';
import { ResidentialBuilding } from '../../../dictionary/dic-type';

const initialState: ResidentialBuildingsStoreData = {
  residentialBuildingList: RESIDENTIAL_BUILDINGS,
  editResidentialBuilding: undefined,
  isEditResidentialBuildingShow: false,
  isNewResidentialBuilding: false,
};

export function residentialBuildingsReducer(
  state: ResidentialBuildingsStoreData = initialState,
  action: ResidentialBuildingsActions,
): ResidentialBuildingsStoreData {
  switch (action.type) {
    case RESIDENTIAL_BUILDING_EDIT_SHOW:
      return { ...state, isEditResidentialBuildingShow: action.isShow };
    case RESIDENTIAL_BUILDING_SET_IS_NEW:
      return { ...state, isNewResidentialBuilding: action.isNew };

    case RESIDENTIAL_BUILDING_EDIT_NEW:
      return {
        ...state,
        editResidentialBuilding: undefined,
        isEditResidentialBuildingShow: true,
        isNewResidentialBuilding: true,
      };
    case RESIDENTIAL_BUILDING_EDIT_BY_IP: {
      const filtered: ResidentialBuilding[] = state.residentialBuildingList.filter((residentialBuilding) => residentialBuilding.id === action.id);
      if (filtered.length) {
        return {
          ...state,
          editResidentialBuilding: filtered[0],
          isEditResidentialBuildingShow: true,
          isNewResidentialBuilding: false,
        };
      }
      return state;
    }
    case RESIDENTIAL_BUILDING_INSERT:
      return {
        ...state,
        residentialBuildingList: state.residentialBuildingList.concat([action.residentialBuilding]),
        isEditResidentialBuildingShow: false,
      };
    case RESIDENTIAL_BUILDING_UPDATE:
      return {
        ...state,
        residentialBuildingList: state.residentialBuildingList.map((skl) =>
          skl.id === action.residentialBuilding.id ? action.residentialBuilding : skl,
        ),
        isEditResidentialBuildingShow: false,
      };
    case RESIDENTIAL_BUILDING_DELETE:
      return {
        ...state,
        residentialBuildingList: state.residentialBuildingList.filter((skl) => skl.id !== action.id),
        isEditResidentialBuildingShow: false,
      };
    default:
      return state;
  }
}
