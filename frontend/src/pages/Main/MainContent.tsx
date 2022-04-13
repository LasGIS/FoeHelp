/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';

const MainContent = () => (
  <Content className="app__content">
    <Outlet />
  </Content>
);

export default MainContent;
