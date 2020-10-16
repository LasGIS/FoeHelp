/*
* Copyright 2020 LasGIS FOE Helper
*/

/** Эпохи */
export enum EraKey {
  /** Without Century | Без Века */
  Without = 0,
  /** Stone Age | Каменный Век */
  Stone = 1,
  /** Bronze Age | Бронзовый Век */
  Bronze = 2,
  /** Iron Age | Железный Век */
  Iron = 3,
  /** Early Middle Ages | Раннее Средневековье */
  EarlyMiddle = 4,
  /** High Middle Ages | Высокое Средневековье */
  HighMiddle = 5,
  /** Late Middle Ages | Позднее Средневековье */
  LateMiddle = 6,
  /** Colonial Period | Колониальный период */
  Colonial = 7,
  /** Industrial Era | Индустриальная эпоха */
  Industrial = 8,
  /** Progressivism | Эра прогрессивизма */
  Progressivism = 9,
  /** Age of Modern | Эпоха Модерна */
  Modern = 10,
  /** Postmodern Era | Эпоха Постмодерна */
  Postmodern = 11,
  /** Newest Time | Новейшее время */
  NewestTime = 12,
  /** Tomorrow Era | Завтрашняя эпоха */
  Tomorrow = 13,
  /** Era of the Future | Эра Будущего */
  Future = 14,
  /** Arctic Future | Арктическое будущее */
  Arctic = 15,
  /** Oceanic Future | Океаническое будущее */
  Oceanic = 16,
  /** Virtual Future | Виртуальное будущее */
  Virtual = 17,
  /** Space Age Mars | Космическая эра Марса */
  Mars = 18,
  /** Asteroid Belt | Пояс астероидов из космической эры */
  Asteroid = 19,
}

export type EraType = {
  key: EraKey;
  short: string;
  background: string;
  borderColor: string;
  color: string;
  name: string;
};

export type PlaceType = {
  /** число клеток снизу вправо / */
  x: number;
  /** сверху вправо \ */
  y: number;
  /** число клеток дороги */
  board: 0 | 1 | 2;
}
export type SkillType = "Товары гильдии" | "Производство монет";

export type GreatBuildingType = {
  id: number;
  /** Здание */
  name: string;
  /** Эпоха */
  era: EraKey;
  /** Место */
  place?: PlaceType;
  /** Умения */
  skills?: SkillType[];
};

