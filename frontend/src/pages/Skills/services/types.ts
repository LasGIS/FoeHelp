import { GetAllActionTypes } from '../../../common/types/redux-types';
import * as CommonActionMaps from '../../../common/services/action-creators';
import * as SkillsActionMaps from './action-creators';
import { SkillType } from "../../../dictionary/dic-type";

/** Усиления Великих Строений */
export type SkillsStoreData = {
  searchValue: string;
  /**  Skills list from backend */
  skillList: SkillType[];
  /** текущее Усиление, на редакции */
  editSkill?: SkillType;
  /** если true - значит показываем текущий skill */
  isEditSkillShow: boolean;
  /** если true - значит добавляем новый, а иначе - редактируем уже существующий */
  isNewSkill: boolean;
};

const skillsActions = {
  ...SkillsActionMaps,
  ...CommonActionMaps,
} as const;

export type SkillsActions = ReturnType<GetAllActionTypes<typeof skillsActions>>;
