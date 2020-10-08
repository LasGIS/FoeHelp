/*
 * Copyright 2020 LasGIS FOE Helper
 */

import { COMMON_HIDE_LOADER, COMMON_SHOW_LOADER, } from './action-constants';

export const commonShowLoader = () => ({ type: COMMON_SHOW_LOADER } as const);
export const commonHideLoader = () => ({ type: COMMON_HIDE_LOADER } as const);
