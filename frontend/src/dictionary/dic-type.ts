/*
* Copyright 2020 LasGIS FOE Helper
*/

/** Эпоха */
export enum EraKey {
  Without = 0,   //  Without Century          | Без Века
  Stone = 1,   //  Stone Age                | Каменный Век
  Bronze = 2,   //  Bronze Age               | Бронзовый Век
  Iron = 3,   //  Iron Age                 | Железный Век
  EarlyMiddle = 4,   //  Early Middle Ages        | Раннее Средневековье
  HighMiddle = 5,   //  High Middle Ages         | Высокое Средневековье
  LateMiddle = 6,   //  Late Middle Ages         | Позднее Средневековье
  Colonial = 7,   //  Colonial Period          | Колониальный период
  Industrial = 8,   //  Industrial Era           | Индустриальная эпоха
  Progressivism = 9,   //  Progressivism            | Эра прогрессивизма
  Modern = 10,  //  Age of Modern            | Эпоха Модерна
  Postmodern = 11,  //  Postmodern Era           | Эпоха Постмодерна
  NewestTime = 12,  //  Newest Time              | Новейшее время
  Tomorrow = 13,  //  Tomorrow Era             | Завтрашняя эпоха
  Future = 14,  //  Era of the Future        | Эра Будущего
  Arctic = 15,  //  Arctic Future            | Арктическое будущее
  Oceanic = 16,  //  Oceanic Future           | Океаническое будущее
  Virtual = 17,  //  Virtual Future           | Виртуальное будущее
  Mars = 18,  //  Space Age Mars           | Космическая эра Марса
  Asteroid = 19,  //  Asteroid Belt            | Пояс астероидов из космической эры
}

export type EraType = {
  key: EraKey;
  short: string;
  background: string;
  borderColor: string;
  color: string;
  name: string;
};

export const ERAS: EraType[] = [
  { short: 'БЭ', background: '#216565', borderColor: '#79bcbc', color: '#ffffff', key: EraKey.Without, name: "Без Века" },
  { short: 'КЭ', background: '#5a4d3c', borderColor: '#837864', color: '#ffffff', key: EraKey.Stone, name: "Каменный Век" },
  { short: 'БВ', background: '#503d09', borderColor: '#d5b945', color: '#ffe783', key: EraKey.Bronze, name: "Бронзовый Век" },
  { short: 'ЖВ', background: '#521e09', borderColor: '#ff7772', color: '#f4eea7', key: EraKey.Iron, name: "Железный Век" },
  { short: 'РС', background: '#324125', borderColor: '#77ad81', color: '#cce2a2', key: EraKey.EarlyMiddle, name: "Раннее Средневековье" },
  { short: 'ВС', background: '#154040', borderColor: '#3bbaba', color: '#9bf7f7', key: EraKey.HighMiddle, name: "Высокое Средневековье" },
  { short: 'ПС', background: '#46254a', borderColor: '#d178db', color: '#f4c5f9', key: EraKey.LateMiddle, name: "Позднее Средневековье" },
  { short: 'КП', background: '#6b3c08', borderColor: '#ffffff', color: '#fecead', key: EraKey.Colonial, name: "Колониальный период" },
  { short: 'ИЭ', background: '#561918', borderColor: '#ffafaf', color: '#ffafaf', key: EraKey.Industrial, name: "Индустриальная эпоха" },
  { short: 'ЭП', background: '#70490d', borderColor: '#ffb065', color: '#ffead5', key: EraKey.Progressivism, name: "Эра прогрессивизма" },
  { short: 'ЭМ', background: '#27426d', borderColor: '#65b4ff', color: '#ffead5', key: EraKey.Modern, name: "Эпоха Модерна" },
  { short: 'ПМ', background: '#4f5751', borderColor: '#f8f8f8', color: '#ffead5', key: EraKey.Postmodern, name: "Эпоха Постмодерна" },
  { short: 'НВ', background: '#c1522e', borderColor: '#ff8946', color: '#ffd6cb', key: EraKey.NewestTime, name: "Новейшее время" },
  { short: 'ЭЗ', background: '#1e2126', borderColor: '#3d76c8', color: '#b9b9b9', key: EraKey.Tomorrow, name: "Завтрашняя эпоха" },
  { short: 'ЭБ', background: '#3d5f1b', borderColor: '#80ff00', color: '#cce5ac', key: EraKey.Future, name: "Эра Будущего" },
  { short: 'АБ', background: '#b1b1b1', borderColor: '#daf0ff', color: '#1b1d29', key: EraKey.Arctic, name: "Арктическое будущее" },
  { short: 'ОБ', background: '#19483c', borderColor: '#3fffe1', color: '#cbfff3', key: EraKey.Oceanic, name: "Океаническое будущее" },
  { short: 'ВБ', background: '#371a52', borderColor: '#bf77ff', color: '#e1bfff', key: EraKey.Virtual, name: "Виртуальное будущее" },
  { short: 'КМ', background: '#9c4536', borderColor: '#e04021', color: '#ffcbc1', key: EraKey.Mars, name: "Космическая эра Марса" },
  { short: 'КА', background: '#291daf', borderColor: '#0d72fc', color: '#ccceff', key: EraKey.Asteroid, name: "Пояс астероидов из космической эры" },
];

export const ERA_KEY_MAP: { [eraKey: number]: EraType } = ERAS.reduce((acc: { [eraKey: number]: EraType }, era: EraType) => {
  acc[era.key] = era;
  return acc;
}, {});

export const ERA_SHORT_MAP: { [short: string]: EraType } = ERAS.reduce((acc: { [short: string]: EraType }, era: EraType) => {
  acc[era.short] = era;
  return acc;
}, {});

/** ВС */
/*
1	Обсерватория	0 нет
2	Храм Реликвий	0 нет
3	Дельфийский Оракул	0 нет
4	Вавилонская башня	2 БВ
5	Статуя Зевса	2 БВ
6	Колизей	3 ЖВ
7	Александрийский маяк	3 ЖВ
8	Собор Святой Софии	4 РС
9	Ахенский Собор	4 РС
10	Собор Святого Марка	5 ВС
11	Нотр-Дам	5 ВС
12	Собор Василия Блаженного	6 ПС
13	Кастель-Дель-Монте	6 ПС
14	Дильский замок	7 КП
15	Фрауэнкирхе	7 КП
16	Капитолий 	8 ИЭ
17	Альберт-Холл	8 ИЭ
18	Шато-Фронтенак	9 ЭП
19	Алькатрас	9 ЭП
20	Спейс-Нидл	A ЭМ
21	Атомиум	A ЭМ
22	Хабитат	B ПМ
23	Космодром Канаверал	B ПМ
24	Храм Лотоса	C НВ
25	Башня Инноваций	C НВ
26	Вращающаяся башня	D За
27	Вояджер V1	D За
28	Арка	E Бу
29	Дождевой лес	E Бу
30	Статуя Геи	F АБ
31	Арктическая оранжерея	F АБ
32	Зернохранилище	F АБ
33	Музей Атлантиды	G ОБ
34	Кракен	G ОБ
35	Синяя галактика	G ОБ
36	Терракотовая армия	H ВБ
37	Замок Химэдзи	H ВБ
38	Космопорт (Колония на Марсе)	I КЭ
39	Звездочёт	I КЭ
40	Проект «Дева»	I КЭ
*/
