/** Великие Строения */
import { GreatBuilding } from "./dic-type";

export const GREAT_BUILDING: GreatBuilding[] = [ {
  id: 1, type: "great",
  name: "Обсерватория",
  era: 0,
  place: { x: 3, y: 3, b: 1 },
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_AllAge_EasterBonus4.png",
  definition: "Построенная для наблюдения астрономических событий, высокая Обсерватория собирает знания, которые неоценимы для альянсов. Помимо наблюдения за звездами и небом, слежение за земными событиями помогает обнаружить новые ресурсы и получить преимущество над конкурентами.",
  skillTypes: [ "guild_goods", "defence" ]
}, {
  id: 2, type: "great",
  name: "Храм Реликвий",
  era: 0,
  definition: "Храм реликвий основан на древней мудрости, полученной во время ваших экспедиций гильдии. Он хранит знания редких реликвий, которые вы можете найти в ходе исследования карты экспедиций.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_AllAge_Expedition.png",
  skillTypes: [ "relic_hunt" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 3, type: "great",
  name: "Дельфийский Оракул",
  era: 0,
  skillTypes: [ "supplies", "happy" ],
  place: { x: 3, y: 3, b: 1 },
  definition: "Жрица Дельфийского оракула слышала слова бога Аполлона и говорила от его имени. Древние греки и чужеземцы задавали ей вопросы, чтобы заглянуть в своё будущее.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_AllAge_Oracle.png"
}, {
  id: 4, type: "great",
  name: "Вавилонская башня",
  era: 2,
  skillTypes: [ "goods", "population" ],
  place: { x: 4, y: 4, b: 1 },
  definition: "Легендарная Вавилонская башня должна была быть произведением искусства древних архитекторов. Если бы она существовала, она бы утонула в посетителях со всех уголков планеты.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_BronzeAge_Landmark1.png"
}, {
  id: 5, type: "great",
  name: "Статуя Зевса",
  era: 2,
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_BronzeAge_Landmark2.png",
  skillTypes: [ "military" ],
  place: { x: 2, y: 3, b: 1 },
  definition: "Статуя Зевса на Олимпе была одним из семи чудес света Древнего мира. Её великолепие вдохновляло поколения греческих солдат."
}, {
  id: 6, type: "great",
  name: "Колизей",
  era: 3,
  definition: "Колизей — бриллиант, венчающий корону города городов, коим являлся Рим. В нём устраивалось множество развлечений, но нам он запомнился как место проведения кровавых боёв гладиаторов.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_IronAge_Landmark1.png",
  skillTypes: [ "medals", "happy" ],
  place: { x: 6, y: 7, b: 1 }
}, {
  id: 7, type: "great",
  name: "Александрийский маяк",
  era: 3,
  definition: "Веками Александрийский Маяк был самым высоким рукотворным строением на Земле. Его луч света направлял путников со всего света в порт Александрии.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_IronAge_Landmark2.png",
  skillTypes: [ "goods", "supplies_plus" ],
  place: { x: 4, y: 4, b: 1 }
}, {
  id: 8, type: "great",
  name: "Собор Святой Софии",
  era: 4,
  definition: "Одна из самых старых и самых великих церквей в мире, Собор святой Софии, была посвящена мудрости Бога. Она была гордостью всех империй, которые удерживали её.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_EarlyMiddleAge_Landmark1.png",
  skillTypes: [ "forge_points", "happy" ],
  place: { x: 7, y: 6, b: 1 }
}, {
  id: 9, type: "great",
  name: "Ахенский Собор",
  era: 4,
  definition: "Ахенский Собор, также известный как Имперский Собор, был построен Карлом Великим и обозначал Ахен центром империи.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_EarlyMiddleAge_Landmark2.png",
  skillTypes: [ "coins", "military" ],
  place: { x: 4, y: 6, b: 1 }
}, {
  id: 10, type: "great",
  name: "Собор Святого Марка",
  era: 5,
  definition: "Построенная торговцами Венецианской республики, Базилика показывала богатство и силу Венецианских торговцев. Веками добавлялось всё больше и больше украшений, большинство из которых, были привезены из далёких стран.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_HighMiddleAge_Landmark1.png",
  skillTypes: [ "goods", "coins_plus" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 11, type: "great",
  name: "Нотр-Дам",
  era: 5,
  definition: "Собор Парижской Богоматери был вершиной архитектурного искусства и не имел аналогов в западной Европе. Его великолепие и безупречность вдохновляли всех ремесленников, которые смотрели на него.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_HighMiddleAge_Landmark3.png",
  skillTypes: [ "happy", "supplies" ],
  place: { x: 4, y: 6, b: 1 }
}, {
  id: 12, type: "great",
  name: "Собор Василия Блаженного",
  era: 6,
  definition: "Храм Василия Блаженного на Красной площади Москвы был построен в честь завершения Русско-Казанской войны. Он вдохновляет всех россиян и является центральной точкой Москвы.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_LateMiddleAge_Landmark1.png",
  skillTypes: [ "coins", "fierce_resistance" ],
  place: { x: 5, y: 5, b: 1 }
}, {
  id: 13, type: "great",
  name: "Кастель-Дель-Монте",
  era: 6,
  definition: "Таинственный Кастель-дель-Монте скорее всего предназначался для того, чтобы удерживать дворян-повстанцев. Множество его загадок и особенностей озадачивают учёных до сих пор.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_LateMiddleAge_Landmark3.png",
  skillTypes: [ "forge_points", "military" ],
  place: { x: 5, y: 5, b: 1 }
}, {
  id: 14, type: "great",
  name: "Дильский замок",
  era: 7,
  definition: "Построенный Генрихом VIII, чтобы противостоять объединённому франко-испанскому нашествию, Дильский замок прошёл проверку временем, доказав, что он является ценным стратегическим достоянием Британской империи.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ColonialAge_Landmark2.png",
  skillTypes: [ "medals", "fierce_resistance" ],
  place: { x: 7, y: 7, b: 1 }
}, {
  id: 15, type: "great",
  name: "Фрауэнкирхе",
  era: 7,
  definition: "Построенный совместными усилиями протестантского населения Дрездена и их Римско-Католическим правителем, Фрауэнкирхе устояла перед многим трудностями и войнами.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ColonialAge_Landmark1.png",
  skillTypes: [ "goods", "happy" ],
  place: { x: 5, y: 5, b: 1 }
}, {
  id: 16, type: "great",
  name: "Капитолий",
  era: 8,
  definition: "Здание Капитолия в Вашингтоне, округ Колумбия, где собирались представители всех штатов входящих в состав страны. Он является символом победы демократии в Новом Свете, манящий к себе людей со всех уголков земного шара.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_IndustrialAge_Landmark2.png",
  skillTypes: [ "supplies", "population" ],
  place: { x: 7, y: 5, b: 1 }
}, {
  id: 17, type: "great",
  name: "Альберт-Холл",
  era: 8,
  definition: "Назван в память об Альберте, Принце-консорте Соединенного королевства при королеве Виктории, Королевский Альберт-холл место проведения самых значимых событий Великобритании. Его атмосфера и репутация притягивает лучшие творческие умы планеты.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_IndustrialAge_Landmark1.png",
  skillTypes: [ "goods", "supplies_plus" ],
  place: { x: 7, y: 6, b: 1 }
}, {
  id: 18, type: "great",
  name: "Шато-Фронтенак",
  era: 9,
  definition: "На фоне неба Квебек-Сити чётко выделяется Шато-Фронтенак - легендарный гранд-отель. Известное имя и роскошь отеля привлекают состоятельных гостей со всего мира. Они готовы платить любые деньги за комфорт, предлагаемый им в Шато. В свою очередь, они ожидают безоговорочного выполнения всех своих - порой очень экстравагантных - желаний.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ProgressiveEra_Landmark2.png",
  skillTypes: [ "coins", "scroll" ],
  place: { x: 5, y: 6, b: 1 }
}, {
  id: 19, type: "great",
  name: "Алькатрас",
  era: 9,
  definition: "Тюрьма строгого режима на острове Алькатрас, использовалась как место заключения одних из самых известных преступников в новейшей истории. Изначально на острове размещался военный гарнизон позднее ставший тюрьмой. Не смотря на короткий период 30-ти летнего использования Алькатрас в качестве федеральной тюрьмы, он стал символом самых низменных аспектов человеческой природы и крайностей, на которое готово пойти общество для удержания их.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ProgressiveEra_Landmark1.png",
  skillTypes: [ "penal_unit", "happy" ],
  place: { x: 10, y: 7, b: 1 }
}, {
  id: 20, type: "great",
  name: "Спейс-Нидл",
  era: 10,
  definition: "Сиэтлская башня Спейс-Нидл была построена в 1962 году для Всемирной выставки. Воплотив в себе новейший дизайн и инженерное искусство, она стала символом северо-западного побережья Америки, привлекающим миллионы туристов со всего мира.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ModernEra_Landmark1.png",
  skillTypes: [ "coins", "happy" ],
  place: { x: 6, y: 5, b: 1 }
}, {
  id: 21, type: "great",
  name: "Атомиум",
  era: 10,
  definition: "Построенный для Всемирной выставки 1958 года, первой после Второй Мировой войны, Атомиум быстро стал культовым сооружением для Брюсселя. Он продолжает олицетворять дух деятельности, технологического продвижения и сотрудничества, которые являются ключом к будущему Европы.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ModernEra_Landmark2.png",
  skillTypes: [ "guild_goods", "happy" ],
  place: { x: 7, y: 6, b: 1 }
}, {
  id: 22, type: "great",
  name: "Хабитат",
  era: 11,
  definition: "Жилищный комплекс Хабитат-67 являет собой блоки, поставленные друг на друга с виду в хаотическом порядке. Он является одним из самых зрелищных и дальновидных достижений канадской архитектуры. Его сложный дизайн, архитектура, учитывающая аспекты человеческого жилья и плотность застройки городов, продолжает вдохновлять архитекторов всего мира.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_PostModernEra_Landmark2.png",
  skillTypes: [ "coins", "population" ],
  place: { x: 7, y: 6, b: 1 }
}, {
  id: 23, type: "great",
  name: "Космодром Канаверал",
  era: 11,
  definition: "Основанная после Второй Мировой Войны, база ВВС на мысе Канаверал получила свою известность во время «космической гонки», кульминационным моментом которой стала легендарная миссия Апполон-11. В наши дни мыс Канаверал продолжает отправлять космические корабли, чтобы смело идти туда, где ещё не ступала нога человечества.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_PostModernEra_Landmark1.png",
  skillTypes: [ "forge_points" ],
  place: { x: 4, y: 5, b: 1 }
}, {
  id: 24, type: "great",
  name: "Храм Лотоса",
  era: 12,
  definition: "Храм Лотоса в Нью-Дели — святилище открытое для последователей всех религий, находится в самой густонаселенной части мира. Миллионы людей находят в храме веру и понимание.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ContemporaryEra_Landmark1.png",
  skillTypes: [ "coins", "happy" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 25, type: "great",
  name: "Башня Инноваций",
  era: 12,
  definition: "Башня Инноваций в Гонконге символизирует смелый уход от классической архитектуры и представляет собой уникальную смесь инноваций и интуитивной организации. Может быть, это форма будущего?",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ContemporaryEra_Landmark2.png",
  skillTypes: [ "forge_points", "population" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 26, type: "great",
  name: "Башня перемирия",
  era: 13,
  definition: "Эта постройка символизирует единство. Затонувшее здание состоит из нескольких эффектных архитектурных элементов и хранится в прочной стеклянной витрине. Впечатляющая конструкция напоминает собор и опирается на саму себя, являясь символом поддержки и сотрудничества.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_TomorrowEra_Landmark2.png",
  skillTypes: [ "supplies", "aid_goods" ],
  place: { x: 6, y: 5, b: 1 }
}, {
  id: 27, type: "great",
  name: "Вояджер V1",
  era: 13,
  definition: "Смесь отеля и гигантского вращающегося колеса, Вояджер V1 обладает роскошными кабинами, которые медленно вращаются и открывает превосходный обзор. Они подойдут для коктейльных вечеринок, свадебных торжеств, небольших конференций или тайных встреч, на которых будет решаться судьба стран.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_TomorrowEra_Landmark1.png",
  skillTypes: [ "supplies", "plunder_goods" ],
  place: { x: 4, y: 7, b: 1 }
}, {
  id: 28, type: "great",
  name: "Арка",
  era: 14,
  definition: "Построенный в научных целях гигантский биосферный проект «Арка» включает в себя ряд различных экосистем, заключенных в лаборатории замкнутого цикла. Ученые со всего мира собираются, чтобы поделиться уникальными открытиями о нашей планете.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_FutureEra_Landmark1.png",
  skillTypes: [ "guild_goods", "contribution_boost" ],
  place: { x: 7, y: 5, b: 1 }
}, {
  id: 29, type: "great",
  name: "Дождевой лес",
  era: 14,
  definition: "Для борьбы с природными бедствиями типа пожаров и засух в огромном небоскребе проекта «Дождевой лес» производится сбор и хранение дождевой воды. Этой уникальной конструкцией управляют люди из разных стран мира, взамен получающие широкий спектр научных знаний.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_FutureEra_Landmark2.png",
  skillTypes: [ "goods", "aid_blueprints" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 30, type: "great",
  name: "Статуя Геи",
  era: 15,
  definition: "Гея, Гайя, Теллура или Мать Природа, она — это персонификация планеты Земля. Эта статуя посвящена Богине, которая может быть одновременно мирной и воинственной.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ArcticFuture_Landmark1.png",
  skillTypes: [ "medals", "happy" ],
  place: { x: 6, y: 4, b: 1 }
}, {
  id: 31, type: "great",
  name: "Арктическая оранжерея",
  era: 15,
  definition: "Изначально Оранжерея должна была быть построена в Антарктике для выращивания снежных маков и являться ботаническим и медицинским центром исследования и зоной отдыха. Эта адаптация пошла несколько дальше. Покров снега создает достаточно света, чтобы вырастить все виды экзотических растений со всего света.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ArcticFuture_Landmark2.png",
  skillTypes: [ "forge_points", "critical_hit_chance" ],
  place: { x: 7, y: 7, b: 1 }
}, {
  id: 32, type: "great",
  name: "Зернохранилище",
  era: 15,
  definition: "Зернохранилище сохраняет большое разнообразие семян растений и защищает их генетический код от глобальных катастроф и стихийных бедствий. Хранящиеся замороженные образцы семян являются резервными копиями других банков мировых семян.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_ArcticFuture_Landmark3.png",
  skillTypes: [ "supplies", "helping_hands" ],
  place: { x: 5, y: 6, b: 1 }
}, {
  id: 33, type: "great",
  name: "Музей Атлантиды",
  era: 16,
  definition: "В прошлом это был памятник бесстрашию и неукротимой мощи империи. Не так давно его снова открыли и превратили в популярный музей. Некоторые считают, что это единственное веское доказательство существования Атлантиды, поэтому легенда о ней всё ещё жива",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_OceanicFuture_Landmark1.png",
  skillTypes: [ "goods", "plunder_and_pillage" ],
  place: { x: 6, y: 7, b: 1 }
}, {
  id: 34, type: "great",
  name: "Кракен",
  era: 16,
  definition: "Выпускайте кракена!",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_OceanicFuture_Landmark2.png",
  skillTypes: [ "forge_points", "first_strike" ],
  place: { x: 5, y: 5, b: 1 }
}, {
  id: 35, type: "great",
  name: "Синяя галактика",
  era: 16,
  definition: "В Синей галактике содержится самая полная в мире коллекция медуз. Также здесь посетители могут исследовать чудеса подводных глубин.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_OceanicFuture_Landmark3.png",
  skillTypes: [ "medals", "double_collect" ],
  place: { x: 7, y: 5, b: 1 }
}, {
  id: 36, type: "great",
  name: "Терракотовая армия",
  era: 17,
  definition: "Терракотовая армия была создана в честь китайского императора Цинь Шихуанди. Сейчас туристы могут увидеть не только статуи воинов, но и виртуальные дополнения, демонстрирующие армию в движении, а также дополнительную информацию.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_VirtualFuture_Landmark1.png",
  skillTypes: [ "advanced_tactics" ],
  place: { x: 4, y: 6, b: 1 }
}, {
  id: 37, type: "great",
  name: "Замок Химэдзи",
  era: 17,
  definition: "Замок Химэдзи невероятно красив, однако поговаривали, что захватить его невозможно. Сейчас на него наложены виртуальные изображения, которые показывают, как он менялся в ходе строительства.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_VirtualFuture_Landmark2.png",
  skillTypes: [ "supplies", "spoils_of_war" ],
  place: { x: 6, y: 6, b: 1 }
}, {
  id: 38, type: "great",
  name: "Звездочёт",
  era: 18,
  definition: "«Звездочёт» — один из самых мощных наземных телескопов, с помощью которого можно в подробностях рассмотреть Солнечную систему. Он сыграл ключевую роль в колонизации Марса.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_SpaceAgeMars_Landmark1.png",
  skillTypes: [ "previous_era_good_production" ],
  place: { x: 5, y: 5, b: 1 }
}, {
  id: 39, type: "great",
  name: "Проект «Дева»",
  era: 18,
  definition: "Целью проекта «Дева» являлся запуск космических зондов. Но при строительстве произошла ошибка, в результате которой изначальная цель оказалась недостижимой. Поэтому проект теперь используется для запуска военных ракет.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_SpaceAgeMars_Landmark2.png",
  skillTypes: [ "coins", "missile_launch" ],
  place: { x: 5, y: 5, b: 1 }
}, {
  id: 40, type: "great",
  name: "Космический авианосец",
  era: 19,
  definition: "Космический авианосец обеспечивает связь с городами по всему миру и даже с другими планетами. Чем лучше связь, тем больше ресурсов в нашей столице.",
  image: "https://foeru.innogamescdn.com/assets/city/buildings/X_SS_SpaceAgeAsteroidBelt_Landmark1.png",
  skillTypes: [ "special_goods", "diplomatic_gifts" ],
  place: { x: 7, y: 4, b: 1 }
} ];
