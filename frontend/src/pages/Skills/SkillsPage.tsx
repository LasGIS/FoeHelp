import React from "react";
import { Modal, Table } from "antd";
import { SkillType } from "../../dictionary/dic-type";
import { compareAlphabetically } from "../../utils";
import { RootStoreData } from "../../common/types/redux-types";
import { connect, ConnectedProps } from "react-redux";
import {
  deleteSkillByIp,
  editNewSkill,
  editSkillByIp,
  editSkillShow,
  insertSkill,
  setIsNewSkill,
  setSkillSearchValue,
  updateSkill
} from "./services/action-creators";
import { SkillDetailForm } from "./SkillDetailForm";

class SkillsPage extends React.Component<PropsFromRedux> {

  saveDetail = (skill: SkillType) => {
    const { isNewSkill, updateSkill, insertSkill } = this.props;
    isNewSkill ? insertSkill(skill) : updateSkill(skill);
  };

  detailClose = () => {
    const { editSkillShow } = this.props;
    editSkillShow(false);
  };

  render() {
    const {
      skillList, editSkill, isEditSkillShow, isNewSkill,
    } = this.props;
    return (
      <>
        <Table
          dataSource={skillList}
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
        <Modal
          title={`Детали Host ${editSkill}`}
          visible={isEditSkillShow}
          onCancel={this.detailClose}
          footer={false}
          maskClosable={false}
          width='1024px'
        >
          <SkillDetailForm
            isExist={!isNewSkill}
            editSkill={editSkill}
            onSave={this.saveDetail}
            onClose={this.detailClose}
          />
        </Modal>
      </>

    )
      ;
  }
}

const mapState = (state: RootStoreData) => {
  const { skillList, editSkill, isEditSkillShow, isNewSkill } = state.skills;
  return {
    skillList,
    editSkill,
    isEditSkillShow,
    isNewSkill
  };
};

const mapDispatch = {
  editSkillShow, setIsNewSkill, setSkillSearchValue, editNewSkill, editSkillByIp, insertSkill, updateSkill, deleteSkillByIp
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SkillsPage);
