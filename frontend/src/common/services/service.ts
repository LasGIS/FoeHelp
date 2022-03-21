/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { get } from '../rest';

export const fetchAppSettings = () => get(`/v1.0/settings`);
