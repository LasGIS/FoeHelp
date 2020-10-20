/*
 * Copyright 2020 LasGIS FOE Helper
 */

import { CommonStoreData } from '../services/types';
import { RouterState } from 'connected-react-router';
import { SkillsStoreData } from "../../pages/Skills/services/types";
import { GreatBuildingsStoreData } from "../../pages/GreatBuildings/services/types";

export type GetAllActionTypes<ActionsMap> = ActionsMap extends { [key: string]: infer Action } ? Action : never;

export type RootStoreData = {
  router: RouterState;
  common: CommonStoreData;
  skills: SkillsStoreData;
  greatBuilds: GreatBuildingsStoreData;
};
