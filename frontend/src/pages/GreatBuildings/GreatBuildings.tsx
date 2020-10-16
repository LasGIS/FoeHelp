import React from "react";
import { Table } from "antd";
import { GREAT_BUILDING } from "../../dictionary/great-buildings";
import { compareAlphabetically, compareNumber } from "../../utils";
import { EraKey, EraType, GreatBuildingType } from "../../dictionary/dic-type";
import { RootStoreData } from "../../common/types/redux-types";
import { commonHideLoader, commonShowLoader } from "../../common/services/action-creators";
import { connect, ConnectedProps } from "react-redux";
import { ERA_KEY_MAP } from "../../dictionary/eras";

class GreatBuildings extends React.Component<PropsFromRedux> {

  render() {
    return (
      <Table
//        style={{ width: '520px' }}
        dataSource={GREAT_BUILDING}
        columns={[ {
          title: '№',
          dataIndex: 'id',
          width: '20px',
          sorter: (a: GreatBuildingType, b: GreatBuildingType) => compareNumber(a.id, b.id),
        }, {
          title: 'Название',
          dataIndex: 'name',
          width: '300px',
          sorter: (a: GreatBuildingType, b: GreatBuildingType) => compareAlphabetically(a.name, b.name),
        }, {
          title: 'Эра',
          dataIndex: 'era',
          width: '200px',
          sorter: (a: GreatBuildingType, b: GreatBuildingType) => compareAlphabetically(ERA_KEY_MAP[a.era].name, ERA_KEY_MAP[b.era].name),
          render: (era: EraKey) => ERA_KEY_MAP[era].name,
        } ]}
        bordered
        rowKey={(gb: GreatBuildingType) => gb.id}
        onRow={(gb: GreatBuildingType) => {
          const era: EraType = ERA_KEY_MAP[gb.era];
          return ({
            style: {
              background: era.background,
              borderColor: era.borderColor,
              color: era.color
            }
          });
        }}
        pagination={false}
        size='small'
      />
    );
  }
}

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
