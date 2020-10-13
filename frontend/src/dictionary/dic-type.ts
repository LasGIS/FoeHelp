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

/** Великие Строения */
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
