/** Великие Строения */
import { GreatBuildingType, SkillType } from "./dic-type";

export const SKILLS: SkillType[] = [
  {
    id: 'guild_goods', name: 'Товары гильдии',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_guild_goods.png',
  }, {
    id: 'defence', name: 'Бонус резерва',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_defence.png',
  }, {
    id: 'relic_hunt', name: 'Охота за реликвиями',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_relic_hunt.png',
  }, {
    id: 'supplies', name: 'Производство ресурсов',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_supplies.png',
  }, {
    id: 'happy', name: 'Уровень счастья',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_happy.png',
  }, {
    id: 'goods', name: 'Производство товаров',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_goods.png',
  }, {
    id: 'population', name: 'Население', definition: "Обеспечивает следующий ресурс: Население.",
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_population.png',
  }, {
    id: 'military', name: 'Неистовство',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_military.png',
  }, {
    id: 'medals', name: 'Производство медалей',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_medals.png',
  }, {
    id: 'supplies_plus', name: 'Изобилие',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_supplies.png',
  }, {
    id: 'forge_points', name: 'Исследования',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_forgepoints.png',
  }, {
    id: 'coins', name: 'Производство монет',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_coins.png',
  }, {
    id: 'fierce_resistance', name: 'Жестокое сопротивление',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_fierce_resistance.png',
  }, {
    id: 'scroll', name: 'Квест-бонус',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_scroll.png',
  }, {
    id: 'penal_unit', name: 'Карательный юнит',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_penal_unit.png',
  }, {
    id: 'plunder_goods', name: 'Товары за грабёж',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_plunder_goods.png',
  }, {
    id: 'aid_goods', name: 'Товары за помощь',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_aid_goods.png',
  }, {
    id: 'contribution_boost', name: 'Приз за сотрудничество',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_contribution_boost.png',
  }, {
    id: 'aid_blueprints', name: 'Чертежи за помощь',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_aid_blueprints.png',
  }, {
    id: 'helping_hands', name: 'Рука помощи',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_helping_hands.png',
  }, {
    id: 'critical_hit_chance', name: 'Критический удар',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_critical_hit_chance.png',
  }, {
    id: 'plunder_and_pillage', name: 'Грабёж и мародёрство',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_plunder_and_pillage.png',
  }, {
    id: 'first_strike', name: 'Первый удар',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_first_strike.png',
  }, {
    id: 'double_collect', name: 'Двойная коллекция',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_double_collect.png',
  }, {
    id: 'advanced_tactics', name: 'Улучшенная тактика',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_advanced_tactics.png',
  }, {
    id: 'spoils_of_war', name: 'Военные трофеи',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_spoils_of_war.png',
  }, {
    id: 'previous_era_good_production', name: 'Производство товаров предыдущей эпохи',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_previous_era_good_production.png',
  }, {
    id: 'missile_launch', name: 'Запуск ракеты',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_missile_launch.png',
  }, {
    id: 'special_goods', name: 'Орбитальный транспорт',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_special_goods.png',
  }, {
    id: 'diplomatic_gifts', name: 'Дипломатические дары',
    image: 'https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_diplomatic_gifts.png',
  }
];

export const GREAT_BUILDING: GreatBuildingType[] = [
  {
    id: 1, name: 'Обсерватория', era: 0, place: { x: 3, y: 3, b: 1 },
    image: 'https://foeru.innogamescdn.com/assets/city/buildings/X_SS_AllAge_EasterBonus4.png'
  },
  { id: 2, name: 'Храм Реликвий', era: 0 },
  { id: 3, name: 'Дельфийский Оракул', era: 0 },
  { id: 4, name: 'Вавилонская башня', era: 2 },
  { id: 5, name: 'Статуя Зевса', era: 2 },
  { id: 6, name: 'Колизей', era: 3 },
  { id: 7, name: 'Александрийский маяк', era: 3 },
  { id: 8, name: 'Собор Святой Софии', era: 4 },
  { id: 9, name: 'Ахенский Собор', era: 4 },
  { id: 10, name: 'Собор Святого Марка', era: 5 },
  { id: 11, name: 'Нотр-Дам', era: 5 },
  { id: 12, name: 'Собор Василия Блаженного', era: 6 },
  { id: 13, name: 'Кастель-Дель-Монте', era: 6 },
  { id: 14, name: 'Дильский замок', era: 7 },
  { id: 15, name: 'Фрауэнкирхе', era: 7 },
  { id: 16, name: 'Капитолий', era: 8 },
  { id: 17, name: 'Альберт-Холл', era: 8 },
  { id: 18, name: 'Шато-Фронтенак', era: 9 },
  { id: 19, name: 'Алькатрас', era: 9 },
  { id: 20, name: 'Спейс-Нидл', era: 10 },
  { id: 21, name: 'Атомиум', era: 10 },
  { id: 22, name: 'Хабитат', era: 11 },
  { id: 23, name: 'Космодром Канаверал', era: 11 },
  { id: 24, name: 'Храм Лотоса', era: 12 },
  { id: 25, name: 'Башня Инноваций', era: 12 },
  { id: 26, name: 'Вращающаяся башня', era: 13 },
  { id: 27, name: 'Вояджер V1', era: 13 },
  { id: 28, name: 'Арка', era: 14 },
  { id: 29, name: 'Дождевой лес', era: 14 },
  { id: 30, name: 'Статуя Геи', era: 15 },
  { id: 31, name: 'Арктическая оранжерея', era: 15 },
  { id: 32, name: 'Зернохранилище', era: 15 },
  { id: 33, name: 'Музей Атлантиды', era: 16 },
  { id: 34, name: 'Кракен', era: 16 },
  { id: 35, name: 'Синяя галактика', era: 16 },
  { id: 36, name: 'Терракотовая армия', era: 17 },
  { id: 37, name: 'Замок Химэдзи', era: 17 },
  { id: 38, name: 'Космопорт (Колония на Марсе)', era: 18 },
  { id: 39, name: 'Звездочёт', era: 18 },
  { id: 40, name: 'Проект «Дева»', era: 18 },
];
