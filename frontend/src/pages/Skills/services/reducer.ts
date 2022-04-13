/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import {
  SKILLS_DELETE_SKILL,
  SKILLS_EDIT_NEW_SKILL,
  SKILLS_EDIT_SKILL_BY_IP,
  SKILLS_EDIT_SKILL_SHOW,
  SKILLS_INSERT_SKILL,
  SKILLS_SEARCH_VALUE,
  SKILLS_SET_IS_NEW_SKILL,
  SKILLS_UPDATE_SKILL,
} from './action-constants';
import { SkillsActions, SkillsStoreData } from './types';
import { SKILLS } from '../../../dictionary/skills';
import { Skill } from '../../../dictionary/dic-type';

const initialState: SkillsStoreData = {
  searchValue: '',
  skillList: SKILLS,
  editSkill: undefined,
  isEditSkillShow: false,
  isNewSkill: false,
};

export function skillsReducer(state: SkillsStoreData = initialState, action: SkillsActions): SkillsStoreData {
  switch (action.type) {
    case SKILLS_SEARCH_VALUE:
      return { ...state, searchValue: action.searchValue };
    case SKILLS_EDIT_SKILL_SHOW:
      return { ...state, isEditSkillShow: action.isShow };
    case SKILLS_SET_IS_NEW_SKILL:
      return { ...state, isNewSkill: action.isNew };

    case SKILLS_EDIT_NEW_SKILL:
      return {
        ...state,
        editSkill: undefined,
        isEditSkillShow: true,
        isNewSkill: true,
      };
    case SKILLS_EDIT_SKILL_BY_IP: {
      const filtered: Skill[] = state.skillList.filter((skill) => skill.id === action.id);
      if (filtered.length) {
        return {
          ...state,
          editSkill: filtered[0],
          isEditSkillShow: true,
          isNewSkill: false,
        };
      }
      return state;
    }
    case SKILLS_INSERT_SKILL:
      return {
        ...state,
        skillList: state.skillList.concat([action.skill]),
        isEditSkillShow: false,
      };
    case SKILLS_UPDATE_SKILL:
      return {
        ...state,
        skillList: state.skillList.map((skl) => (skl.id === action.skill.id ? action.skill : skl)),
        isEditSkillShow: false,
      };
    case SKILLS_DELETE_SKILL:
      return {
        ...state,
        skillList: state.skillList.filter((skl) => skl.id !== action.id),
        isEditSkillShow: false,
      };
    default:
      return state;
  }
}
