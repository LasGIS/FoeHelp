import { editNewSkill, editSkillByIp, editSkillShow, setIsNewSkill, } from './action-creators';
import { SkillsActions } from "./types";
import { SkillKindType, SkillType } from "../../../dictionary/dic-type";

type SkillsServiceDispatch = (arg: SkillsActions) => SkillsActions;

export const getSkillByIp = (id: SkillKindType) => (dispatch: SkillsServiceDispatch) => {
  dispatch(editSkillByIp(id));
  dispatch(setIsNewSkill(false));
  dispatch(editSkillShow(true));
};

export const createNewSkill = (skill: SkillType) => (dispatch: SkillsServiceDispatch) => {
  dispatch(editNewSkill(skill));
  dispatch(setIsNewSkill(true));
  dispatch(editSkillShow(true));
};
