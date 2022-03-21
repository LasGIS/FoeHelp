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
import { SkillType, Skill } from "../../../dictionary/dic-type";

export const editSkillShow = (isShow: boolean) => ({ type: SKILLS_EDIT_SKILL_SHOW, isShow } as const);
export const setIsNewSkill = (isNew: boolean) => ({ type: SKILLS_SET_IS_NEW_SKILL, isNew } as const);
export const setSkillSearchValue = (searchValue: string) => ({ type: SKILLS_SEARCH_VALUE, searchValue } as const);

export const editNewSkill = () => ({ type: SKILLS_EDIT_NEW_SKILL } as const);

export const editSkillById = (id: SkillType) => ({ type: SKILLS_EDIT_SKILL_BY_IP, id } as const);

export const insertSkill = (skill: Skill) => ({ type: SKILLS_INSERT_SKILL, skill } as const);

export const updateSkill = (skill: Skill) => ({ type: SKILLS_UPDATE_SKILL, skill } as const);

export const deleteSkillByIp = (id: SkillType) => ({ type: SKILLS_DELETE_SKILL, id } as const);
