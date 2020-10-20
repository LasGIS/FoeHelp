import { GetAllActionTypes } from '../../../common/types/redux-types';
import * as CommonActionMaps from '../../../common/services/action-creators';
import * as GreatBuildingsActionMaps from './action-creators';
import { GreatBuildingType } from "../../../dictionary/dic-type";

/** Великие Строения */
export type GreatBuildingsStoreData = {
  /**  GreatBuildings list from backend */
  greatBuildingList: GreatBuildingType[];
  /** текущее Усиление, на редакции */
  editGreatBuilding?: GreatBuildingType;
  /** если true - значит показываем текущий building */
  isEditGreatBuildingShow: boolean;
  /** если true - значит добавляем новый, а иначе - редактируем уже существующий */
  isNewGreatBuilding: boolean;
};

const greatBuildingsActions = {
  ...GreatBuildingsActionMaps,
  ...CommonActionMaps,
} as const;

export type GreatBuildingsActions = ReturnType<GetAllActionTypes<typeof greatBuildingsActions>>;
