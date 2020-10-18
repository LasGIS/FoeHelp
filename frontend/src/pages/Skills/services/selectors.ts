import { createSelector } from 'reselect';
import { RootStoreData } from "../../../common/types/redux-types";

export const skillsRootSelector = (state: RootStoreData) => state.skills;

export const skillListSelector = createSelector(
  skillsRootSelector,
  state => state && state.skillList);

