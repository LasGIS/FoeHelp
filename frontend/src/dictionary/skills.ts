/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { Skill } from "./dic-type";

export const SKILLS: Skill[] = [ {
  id: "population",
  name: "Население",
  definition: "Обеспечивает следующий ресурс: Население.",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_population.png"
}, {
  id: "goods",
  name: "Производство товаров",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_goods.png",
  definition: "Производит случайные товары из эпохи игрока каждые 24 часа. Начиная с эпохи Модерна, производит в два раза больше полуфабрикатов."
}, {
  id: "military",
  name: "Неистовство",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_military.png",
  definition: "Атака и защита атакующих боевых единиц повышаются на определенный процент."
}, {
  id: "happy",
  name: "Уровень счастья",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_happy.png",
  definition: "Обеспечивает следующий ресурс: Уровень счастья."
}, {
  id: "medals",
  name: "Производство медалей",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_medals.png",
  definition: "Производит ресурс «Медали» каждые 24 часа."
}, {
  id: "supplies_plus",
  name: "Изобилие",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_supplies.png",
  definition: "Первые собранные ресурсы здания Ресурсы умножаются на определенный процент."
}, {
  id: "supplies",
  name: "Производство ресурсов",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_supplies.png",
  definition: "Производит ресурс «Ресурсы» каждые 24 часа."
}, {
  id: "forge_points",
  name: "Исследования",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_forgepoints.png",
  definition: "Производит ресурс «Стратегические очки» каждые 24 часа."
}, {
  id: "coins",
  name: "Производство монет",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_coins.png",
  definition: "Производит ресурс «Монеты» каждые 24 часа."
}, {
  id: "coins_plus",
  name: "Приток монет",
  definition: "Первые собранные ресурсы здания Монеты умножаются на определенный процент.",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_coins.png"
}, {
  id: "fierce_resistance",
  name: "Жестокое сопротивление",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_fierce_resistance.png",
  definition: "Атака и защита обороняющихся боевых единиц повышаются на определенный процент. К тому же гильдия получает определенную прибавку к резерву."
}, {
  id: "scroll",
  name: "Квест-бонус",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_scroll.png",
  definition: "Получая за выполненные задания монеты, ресурсы, товары, бриллианты или медали, вы получаете дополнительный процент сверху."
}, {
  id: "penal_unit",
  name: "Карательный юнит",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_penal_unit.png",
  definition: "Производит свободные боевые единицы военного здания в городе игрока каждые 24 часа. Ускорение найма гильдии снижает время."
}, {
  id: "defence",
  name: "Бонус резерва",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_defence.png",
  definition: "Гильдия получает определенную прибавку к резерву."
}, {
  id: "guild_goods",
  name: "Товары гильдии",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_guild_goods.png",
  definition: "Производит некоторое количество каждого текущего товара для казны гильдии. Можно собрать только находясь в гильдии."
}, {
  id: "aid_goods",
  name: "Товары за помощь",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_aid_goods.png",
  definition: "За первые случаи помощи зданию вы получаете случайный товар той эпохи, к которой относится здание."
}, {
  id: "plunder_goods",
  name: "Товары за грабёж",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_plunder_goods.png",
  definition: "За первые грабежи здания вы получаете случайный товар той эпохи, к которой относится здание."
}, {
  id: "contribution_boost",
  name: "Приз за сотрудничество",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_contribution_boost.png",
  definition: "Награды за вложение повышаются на определенный процент."
}, {
  id: "aid_blueprints",
  name: "Чертежи за помощь",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_aid_blueprints.png",
  definition: "Повышает шанс найти чертеж, помогая другому игроку."
}, {
  id: "helping_hands",
  name: "Рука помощи",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_helping_hands.png",
  definition: "Добавляет шанс получить что-нибудь дополнительное за помощь другим игрокам."
}, {
  id: "relic_hunt",
  name: "Охота за реликвиями",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_relic_hunt.png",
  definition: "Шанс появления скрытой реликвии на карте Экспедиции гильдии после разрешения столкновения."
}, {
  id: "critical_hit_chance",
  name: "Критический удар",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_critical_hit_chance.png",
  definition: "Шанс нанести 150% урона боевым единицам той же эпохи."
}, {
  id: "plunder_and_pillage",
  name: "Грабёж и мародёрство",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_plunder_and_pillage.png",
  definition: "Добавляет шанс удвоить награбленные ресурсы."
}, {
  id: "first_strike",
  name: "Первый удар",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_first_strike.png",
  definition: "В первых битвах есть шанс убить одну боевую единицу врага в начале боя. Если в битве две волны, то умение действует только во время первой."
}, {
  id: "double_collect",
  name: "Двойная коллекция",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_double_collect.png",
  definition: "При первом сборе есть шанс удвоить собранные ресурсы. Не касается военных зданий и Великих строений."
}, {
  id: "advanced_tactics",
  name: "Улучшенная тактика",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_advanced_tactics.png",
  definition: "Атака и защита атакующих и обороняющихся боевых единиц повышаются на определенный процент."
}, {
  id: "spoils_of_war",
  name: "Военные трофеи",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_spoils_of_war.png",
  definition: "После победы в первых нескольких битвах у вас будет шанс получить случайную награду."
}, {
  id: "previous_era_good_production",
  name: "Производство товаров предыдущей эпохи",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_previous_era_good_production.png",
  definition: "Производит случайные товары предыдущей эпохи каждые 24 часа. В Бронзовом веке производит товары Бронзового века."
}, {
  id: "missile_launch",
  name: "Запуск ракеты",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_missile_launch.png",
  definition: "В первых битвах есть шанс убить половину войска врага в начале боя. Если в битве две волны, то умение применяется только к первой волне."
}, {
  id: "diplomatic_gifts",
  name: "Дипломатические дары",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_diplomatic_gifts.png",
  definition: "После победы в первых нескольких переговорах (исключая переговоры в поселениях) у вас будет шанс получить случайную награду."
}, {
  id: "special_goods",
  name: "Орбитальный транспорт",
  image: "https://foeru.innogamescdn.com/assets/shared/icons/icon_great_building_bonus_special_goods.png",
  definition: "Начиная с эпохи Арктического будущего производит особые ресурсы каждые 24 часа. Вероятность и типы особых ресурсов зависят от эпохи. До эпохи Арктического будущего производит медали."
} ];
