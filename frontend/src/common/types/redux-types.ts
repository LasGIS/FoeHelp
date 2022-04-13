/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { CommonStoreData } from '../services/types';
import { RouterState } from 'connected-react-router';
import { SkillsStoreData } from '../../pages/Skills/services/types';
import { GreatBuildingsStoreData } from '../../pages/GreatBuildings/services/types';
import { ResidentialBuildingsStoreData } from '../../pages/ResidentialBuildings/services/types';

export type GetAllActionTypes<ActionsMap> = ActionsMap extends { [key: string]: infer Action } ? Action : never;

export type RootStoreData = {
  router: RouterState;
  common: CommonStoreData;
  skills: SkillsStoreData;
  greatBuilds: GreatBuildingsStoreData;
  residencies: ResidentialBuildingsStoreData;
};
