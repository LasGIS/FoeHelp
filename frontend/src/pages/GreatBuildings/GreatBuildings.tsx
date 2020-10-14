import React from "react";
import { Table } from "antd";
import { GREAT_BUILDING } from "../../dictionary/great-buildings";
import { compareAlphabetically } from "../../utils";
import { GreatBuildingType } from "../../dictionary/dic-type";
import { RootStoreData } from "../../common/types/redux-types";
import { commonHideLoader, commonShowLoader } from "../../common/services/action-creators";
import { connect, ConnectedProps } from "react-redux";

const GreatBuildings: React.FC<PropsFromRedux> = () => {

  return (
    <Table
      style={{ width: '300px' }}
      dataSource={GREAT_BUILDING}
      columns={[ {
        title: 'Название',
        dataIndex: 'name',
        sorter: (a: GreatBuildingType, b: GreatBuildingType) => compareAlphabetically(a.name, b.name),
      } ]}
      bordered
      pagination={false}
      size='small'
    />
  );
};

const mapState = (state: RootStoreData) => {
  const { loading } = state.common;
  return {
    loading
  };
};

const mapDispatch = {
  commonShowLoader,
  commonHideLoader
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GreatBuildings);
