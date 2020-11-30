/*
 * Copyright 2020 LasGIS FOE Helper
 */

import {
  GREAT_BUILDING_DELETE,
  GREAT_BUILDING_EDIT_NEW,
  GREAT_BUILDING_EDIT_BY_IP,
  GREAT_BUILDING_EDIT_SHOW,
  GREAT_BUILDING_INSERT,
  GREAT_BUILDING_SET_IS_NEW,
  GREAT_BUILDING_UPDATE,
} from './action-constants';
import { GreatBuilding } from "../../../dictionary/dic-type";

export const editGreatBuildingShow = (isShow: boolean) => ({ type: GREAT_BUILDING_EDIT_SHOW, isShow } as const);
export const setIsNewGreatBuilding = (isNew: boolean) => ({ type: GREAT_BUILDING_SET_IS_NEW, isNew } as const);

export const editNewGreatBuilding = () => ({ type: GREAT_BUILDING_EDIT_NEW } as const);

export const editGreatBuildingById = (id: number) => ({ type: GREAT_BUILDING_EDIT_BY_IP, id } as const);

export const insertGreatBuilding = (greatBuilding: GreatBuilding) => ({ type: GREAT_BUILDING_INSERT, greatBuilding } as const);

export const updateGreatBuilding = (greatBuilding: GreatBuilding) => ({ type: GREAT_BUILDING_UPDATE, greatBuilding } as const);

export const deleteGreatBuildingByIp = (id: number) => ({ type: GREAT_BUILDING_DELETE, id } as const);
