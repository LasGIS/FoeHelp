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
import { SkillKindType, SkillType } from "../../../dictionary/dic-type";

export const editSkillShow = (isShow: boolean) => ({ type: SKILLS_EDIT_SKILL_SHOW, isShow } as const);
export const setIsNewSkill = (isNew: boolean) => ({ type: SKILLS_SET_IS_NEW_SKILL, isNew } as const);
export const setSkillSearchValue = (searchValue: string) => ({ type: SKILLS_SEARCH_VALUE, searchValue } as const);

export const editNewSkill = (editSkill: SkillType) => ({ type: SKILLS_EDIT_NEW_SKILL, editSkill } as const);

export const editSkillByIp = (id: SkillKindType) => ({ type: SKILLS_EDIT_SKILL_BY_IP, id } as const);

export const insertSkill = (skill: SkillType) => ({ type: SKILLS_INSERT_SKILL, skill } as const);

export const updateSkill = (skill: SkillType) => ({ type: SKILLS_UPDATE_SKILL, skill } as const);

export const deleteSkillByIp = (id: SkillKindType) => ({ type: SKILLS_DELETE_SKILL, id } as const);
