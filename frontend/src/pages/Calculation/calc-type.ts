/*
 * Copyright 2020 LasGIS FOE Helper
 */

export type Calc = {
  /** множитель для расчета (factor) */
  fac: number;
  /** сколько уже внесено (now) */
  now?: number;
  /** сколько всего внести для уровня (need) */
  ned?: number;
  /** мой взнос без учета Арки */
  fee: number;
  /** взнос конкурента (rival) */
  rvl?: number;
};

export type LSCalc = Calc[];

export const LOCAL_STORAGE_CALC: LSCalc = [
  { fac: 1.9, fee: 0 },
];
