/** Великие Строения */
import { GreatBuildingType } from "./dic-type";

export const GREAT_BUILDING: GreatBuildingType[] = [ {
  id: 1,
  name: "Обсерватория",
  era: 0,
  place: { x: 3, y: 3, b: 1 },
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_AllAge_EasterBonus4.png",
  definition: "Построенная для наблюдения астрономических событий, высокая Обсерватория собирает знания, которые неоценимы для альянсов. Помимо наблюдения за звездами и небом, слежение за земными событиями помогает обнаружить новые ресурсы и получить преимущество над конкурентами.",
  skillTypes: [ "guild_goods", "defence" ]
}, {
  id: 2,
  name: "Храм Реликвий",
  era: 0,
  definition: "Храм реликвий основан на древней мудрости, полученной во время ваших экспедиций гильдии. Он хранит знания редких реликвий, которые вы можете найти в ходе исследования карты экспедиций.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_AllAge_Expedition.png",
  skillTypes: [ "relic_hunt" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 3,
  name: "Дельфийский Оракул",
  era: 0,
  skillTypes: [ "supplies", "happy" ],
  place: { x: 3, y: 3, b: 1 },
  definition: "Жрица Дельфийского оракула слышала слова бога Аполлона и говорила от его имени. Древние греки и чужеземцы задавали ей вопросы, чтобы заглянуть в своё будущее.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_AllAge_Oracle.png"
}, {
  id: 4,
  name: "Вавилонская башня",
  era: 2,
  skillTypes: [ "goods", "population" ],
  place: { x: 4, y: 4, b: 1 },
  definition: "Легендарная Вавилонская башня должна была быть произведением искусства древних архитекторов. Если бы она существовала, она бы утонула в посетителях со всех уголков планеты.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_BronzeAge_Landmark1.png"
}, {
  id: 5,
  name: "Статуя Зевса",
  era: 2,
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_BronzeAge_Landmark2.png",
  skillTypes: [ "military" ],
  place: { x: 2, y: 3, b: 1 },
  definition: "Статуя Зевса на Олимпе была одним из семи чудес света Древнего мира. Её великолепие вдохновляло поколения греческих солдат."
}, {
  id: 6,
  name: "Колизей",
  era: 3,
  definition: "Колизей — бриллиант, венчающий корону города городов, коим являлся Рим. В нём устраивалось множество развлечений, но нам он запомнился как место проведения кровавых боёв гладиаторов.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_IronAge_Landmark1.png",
  skillTypes: [ "medals", "happy" ],
  place: { x: 6, y: 7, b: 1 }
}, {
  id: 7,
  name: "Александрийский маяк",
  era: 3,
  definition: "Веками Александрийский Маяк был самым высоким рукотворным строением на Земле. Его луч света направлял путников со всего света в порт Александрии.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_IronAge_Landmark2.png",
  skillTypes: [ "goods", "supplies_plus" ],
  place: { x: 4, y: 4, b: 1 }
}, {
  id: 8,
  name: "Собор Святой Софии",
  era: 4,
  definition: "Одна из самых старых и самых великих церквей в мире, Собор святой Софии, была посвящена мудрости Бога. Она была гордостью всех империй, которые удерживали её.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_EarlyMiddleAge_Landmark1.png",
  skillTypes: [ "forge_points", "happy" ],
  place: { x: 7, y: 6, b: 1 }
}, {
  id: 9,
  name: "Ахенский Собор",
  era: 4,
  definition: "Ахенский Собор, также известный как Имперский Собор, был построен Карлом Великим и обозначал Ахен центром империи.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_EarlyMiddleAge_Landmark2.png",
  skillTypes: [ "coins", "military" ],
  place: { x: 4, y: 6, b: 1 }
}, {
  id: 10,
  name: "Собор Святого Марка",
  era: 5,
  definition: "Построенная торговцами Венецианской республики, Базилика показывала богатство и силу Венецианских торговцев. Веками добавлялось всё больше и больше украшений, большинство из которых, были привезены из далёких стран.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_HighMiddleAge_Landmark1.png",
  skillTypes: [ "goods", "coins_plus" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 11,
  name: "Нотр-Дам",
  era: 5,
  definition: "Собор Парижской Богоматери был вершиной архитектурного искусства и не имел аналогов в западной Европе. Его великолепие и безупречность вдохновляли всех ремесленников, которые смотрели на него.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_HighMiddleAge_Landmark3.png",
  skillTypes: [ "happy", "supplies" ],
  place: { x: 4, y: 6, b: 1 }
}, {
  id: 12,
  name: "Собор Василия Блаженного",
  era: 6,
  definition: "Храм Василия Блаженного на Красной площади Москвы был построен в честь завершения Русско-Казанской войны. Он вдохновляет всех россиян и является центральной точкой Москвы.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_LateMiddleAge_Landmark1.png",
  skillTypes: [ "coins", "fierce_resistance" ],
  place: { x: 5, y: 5, b: 1 }
}, { id: 13, name: "Кастель-Дель-Монте", era: 6 }, { id: 14, name: "Дильский замок", era: 7 }, { id: 15, name: "Фрауэнкирхе", era: 7 }, {
  id: 16,
  name: "Капитолий",
  era: 8
}, { id: 17, name: "Альберт-Холл", era: 8 }, { id: 18, name: "Шато-Фронтенак", era: 9 }, { id: 19, name: "Алькатрас", era: 9 }, {
  id: 20,
  name: "Спейс-Нидл",
  era: 10
}, { id: 21, name: "Атомиум", era: 10 }, { id: 22, name: "Хабитат", era: 11 }, { id: 23, name: "Космодром Канаверал", era: 11 }, {
  id: 24,
  name: "Храм Лотоса",
  era: 12
}, { id: 25, name: "Башня Инноваций", era: 12 }, { id: 26, name: "Вращающаяся башня", era: 13 }, { id: 27, name: "Вояджер V1", era: 13 }, {
  id: 28,
  name: "Арка",
  era: 14
}, { id: 29, name: "Дождевой лес", era: 14 }, { id: 30, name: "Статуя Геи", era: 15 }, { id: 31, name: "Арктическая оранжерея", era: 15 }, {
  id: 32,
  name: "Зернохранилище",
  era: 15
}, { id: 33, name: "Музей Атлантиды", era: 16 }, { id: 34, name: "Кракен", era: 16 }, { id: 35, name: "Синяя галактика", era: 16 }, {
  id: 36,
  name: "Терракотовая армия",
  era: 17
}, { id: 37, name: "Замок Химэдзи", era: 17 }, { id: 38, name: "Космопорт (Колония на Марсе)", era: 18 }, { id: 39, name: "Звездочёт", era: 18 }, {
  id: 40,
  name: "Проект «Дева»",
  era: 18
} ];
