/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { createSelector } from 'reselect';
import { RootStoreData } from '../types/redux-types';

export const commonRootSelector = (root: RootStoreData) => root.common;

/** 'connected-react-router' */
export const commonConnectedRouterSelector = (root: RootStoreData) => (root && root.router) || null;

export const commonRouterLocationSelector = createSelector(commonConnectedRouterSelector, (router) => (router && router.location) || null);
