/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { EraKey, EraType } from "./dic-type";

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
