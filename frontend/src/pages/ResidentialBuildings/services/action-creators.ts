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
import { ResidentialBuilding } from '../../../dictionary/dic-type';

export const editResidentialBuildingShow = (isShow: boolean) => ({ type: RESIDENTIAL_BUILDING_EDIT_SHOW, isShow } as const);
export const setIsNewResidentialBuilding = (isNew: boolean) => ({ type: RESIDENTIAL_BUILDING_SET_IS_NEW, isNew } as const);

export const editNewResidentialBuilding = () => ({ type: RESIDENTIAL_BUILDING_EDIT_NEW } as const);

export const editResidentialBuildingById = (id: number) => ({ type: RESIDENTIAL_BUILDING_EDIT_BY_IP, id } as const);

export const insertResidentialBuilding = (residentialBuilding: ResidentialBuilding) =>
  ({
    type: RESIDENTIAL_BUILDING_INSERT,
    residentialBuilding,
  } as const);

export const updateResidentialBuilding = (residentialBuilding: ResidentialBuilding) =>
  ({
    type: RESIDENTIAL_BUILDING_UPDATE,
    residentialBuilding,
  } as const);

export const deleteResidentialBuildingByIp = (id: number) => ({ type: RESIDENTIAL_BUILDING_DELETE, id } as const);
