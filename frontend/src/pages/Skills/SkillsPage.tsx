import React from "react";
import { Table } from "antd";
import { SKILLS } from "../../dictionary/great-buildings";
import { SkillType } from "../../dictionary/dic-type";
import { compareAlphabetically } from "../../utils";
import { RootStoreData } from "../../common/types/redux-types";
import { commonHideLoader, commonShowLoader } from "../../common/services/action-creators";
import { connect, ConnectedProps } from "react-redux";

class SkillsPage extends React.Component<PropsFromRedux> {

  render() {
    return (
      <Table
        dataSource={SKILLS}
        columns={[ {
          title: '№',
          dataIndex: 'id',
          width: '250px',
          sorter: (a: SkillType, b: SkillType) => compareAlphabetically(a.id, b.id),
          render: (id: string, skill: SkillType) => <><img src={skill.image} width='25px' alt={skill.image} className="skill-image"/>{id}</>,
        }, {
          title: 'Название',
          dataIndex: 'name',
          width: '300px',
          sorter: (a: SkillType, b: SkillType) => compareAlphabetically(a.name, b.name),
        }, {
          title: 'Описание',
          dataIndex: 'definition',
        } ]}
        bordered
        rowKey={(gb: SkillType) => gb.id}
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

export default connector(SkillsPage);
