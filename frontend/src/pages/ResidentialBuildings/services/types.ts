/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { GetAllActionTypes } from '../../../common/types/redux-types';
import * as CommonActionMaps from '../../../common/services/action-creators';
import * as ResidentialBuildingsActionMaps from './action-creators';
import { ResidentialBuilding } from "../../../dictionary/dic-type";

/** Великие Строения */
export type ResidentialBuildingsStoreData = {
  /**  ResidentialBuildings list from backend */
  residentialBuildingList: ResidentialBuilding[];
  /** текущее Усиление, на редакции */
  editResidentialBuilding?: ResidentialBuilding;
  /** если true - значит показываем текущий building */
  isEditResidentialBuildingShow: boolean;
  /** если true - значит добавляем новый, а иначе - редактируем уже существующий */
  isNewResidentialBuilding: boolean;
};

const residentialBuildingsActions = {
  ...ResidentialBuildingsActionMaps,
  ...CommonActionMaps,
} as const;

export type ResidentialBuildingsActions = ReturnType<GetAllActionTypes<typeof residentialBuildingsActions>>;
