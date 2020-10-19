import { editNewSkill, editSkillById, editSkillShow, setIsNewSkill, } from './action-creators';
import { SkillsActions } from "./types";
import { SkillKind } from "../../../dictionary/dic-type";

type SkillsServiceDispatch = (arg: SkillsActions) => SkillsActions;

export const getSkillByIps = (id: SkillKind) => (dispatch: SkillsServiceDispatch) => {
  dispatch(editSkillById(id));
  dispatch(setIsNewSkill(false));
  dispatch(editSkillShow(true));
};

export const createNewsSkill = () => (dispatch: SkillsServiceDispatch) => {
  dispatch(editNewSkill());
  dispatch(setIsNewSkill(true));
  dispatch(editSkillShow(true));
};
