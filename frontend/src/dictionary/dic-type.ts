/*
 * Copyright (c) 2022 LasGIS FOE Helper
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

/** единица времени */
export type UnitTimeType = '5m' | '15m' | '1h' | '4h' | '8h' | '1d' | '2d';

/** Ресурсы (население, монеты, молотки, бриллианты) */
export type ResourceType = 'population' | 'money' | 'tools' | 'diamond';

export type Resource = {
  type: RoadType;
  name: string;
  image?: string;
};

/** число конкретного ресурса */
export type ResourceCount = Resource & {
  count: number;
};

/** проиводительность конкретного ресурса в единицу времени */
export type ResourceProductivity = ResourceCount & {
  time: number;
  unitTime: UnitTimeType;
};

/** дороги */
export type RoadType = 0 | 1 | 2;

export type Road = {
  type: RoadType;
  name: string;
  image?: string;
};

export type Place = {
  /** число клеток снизу вправо / */
  x: number;
  /** сверху вправо \ */
  y: number;
  /** число клеток дороги */
  b: RoadType;
};

export type ImageType = string;

/**
 * 'residential' - Жилые постройки
 * 'production' - Производственные постройки (молотки)
 * 'industrial' - Промышленные постройки
 * 'social' - Общественные постройки
 * 'decor' - Декоры
 * 'military' - Военные постройки
 * 'great' - Великие строения
 * 'special' - Особые постройки
 */
export type BuildingType = 'residential' | 'production' | 'industrial' | 'social' | 'decor' | 'military' | 'great' | 'special';

export type Building = {
  /** тип строения */
  type: BuildingType;
  /** номер по списку (уникален для типа строения) */
  id: number;
  /** url картинки */
  image?: ImageType;
  /** Название */
  name: string;
  /** Описание */
  definition?: string;
  /** Эпоха */
  era: EraKey;
  /** Место */
  place?: Place;
};

export type SkillType =
  'guild_goods'
  | 'defence'
  | 'relic_hunt'
  | 'supplies'
  | 'happy'
  | 'goods'
  | 'population'
  | 'military'
  | 'medals'
  | 'supplies_plus'
  | 'forge_points'
  | 'coins'
  | 'coins_plus'
  | 'fierce_resistance'
  | 'scroll'
  | 'penal_unit'
  | 'plunder_goods'
  | 'aid_goods'
  | 'contribution_boost'
  | 'aid_blueprints'
  | 'helping_hands'
  | 'critical_hit_chance'
  | 'plunder_and_pillage'
  | 'first_strike'
  | 'double_collect'
  | 'advanced_tactics'
  | 'spoils_of_war'
  | 'previous_era_good_production'
  | 'missile_launch'
  | 'special_goods'
  | 'diplomatic_gifts';

export type Skill = {
  id: SkillType;
  name: string;
  definition?: string;
  image?: ImageType;
};

export type GreatBuilding = Building & {
  /** Умения */
  skillTypes?: SkillType[];
}

export type ResidentialBuilding = Building & {
  /** Стоимость строительства (Монеты, Ресурсы, Бриллианты) */
  expense?: ResourceCount[];
  /** Приносит */
  benefit?: ResourceCount[];
  /** Производит */
  produce?: ResourceProductivity[];
}
