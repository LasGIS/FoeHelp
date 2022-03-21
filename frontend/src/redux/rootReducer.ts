/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { combineReducers } from 'redux';
import { commonReducer } from '../common/services/reducer';
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { skillsReducer } from "../pages/Skills/services/reducer";
import { greatBuildingsReducer } from "../pages/GreatBuildings/services/reducer";
import { residentialBuildingsReducer } from "../pages/ResidentialBuildings/services/reducer";

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  common: commonReducer,
  skills: skillsReducer,
  greatBuilds: greatBuildingsReducer,
  residencies: residentialBuildingsReducer
});

export default rootReducer;
