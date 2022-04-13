/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { Button, Space } from 'antd';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootStoreData } from '../../common/types/redux-types';
import { commonHideLoader, commonShowLoader } from '../../common/services/action-creators';

const Home: React.FC<PropsFromRedux> = (props) => {
  const { loading, commonHideLoader, commonShowLoader } = props;

  const tempShowLoader = (delay: number) => {
    commonShowLoader();
    setTimeout(() => {
      commonHideLoader();
    }, delay);
  };

  return (
    <Space align="center">
      <h1>{loading ? 'loading' : 'NOT'}</h1>
      <Button type="primary" onClick={() => tempShowLoader(1000)}>
        Show Loader
      </Button>
      <Button type="ghost" onClick={() => tempShowLoader(2000)}>
        2 сек
      </Button>
      <Button type="default" onClick={() => tempShowLoader(5000)}>
        5 сек
      </Button>
      <Button type="link" onClick={() => tempShowLoader(20000)}>
        20 сек
      </Button>
      <Button type="primary" danger onClick={commonHideLoader}>
        Stop Loader
      </Button>
    </Space>
  );
};

const mapState = (state: RootStoreData) => {
  const { loading } = state.common;
  return {
    loading,
  };
};

const mapDispatch = {
  commonShowLoader,
  commonHideLoader,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
