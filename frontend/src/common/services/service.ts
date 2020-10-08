/*
 * Copyright 2020 LasGIS FOE Helper
 */

import { get } from '../rest';

export const fetchAppSettings = () => get(`/v1.0/settings`);
