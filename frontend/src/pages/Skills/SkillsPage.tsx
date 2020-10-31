/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React from "react";
import { Button, Modal, Row, Table, Tooltip } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons/lib/icons";
import { SkillType, Skill } from "../../dictionary/dic-type";
import { compareAlphabetically, downloadToFile } from "../../utils";
import { RootStoreData } from "../../common/types/redux-types";
import { connect, ConnectedProps } from "react-redux";
import {
  deleteSkillByIp,
  editNewSkill,
  editSkillById,
  editSkillShow,
  insertSkill,
  setIsNewSkill,
  setSkillSearchValue,
  updateSkill
} from "./services/action-creators";
import { SkillDetailForm } from "./SkillDetailForm";
import SearchInputWithDelay from "../../components/SearchInputWithDelay";

class SkillsPage extends React.Component<PropsFromRedux> {

  editRecord = (id: SkillType) => {
    const { editSkillById } = this.props;
    editSkillById(id)
  };

  saveDetail = (skill: Skill) => {
    const { isNewSkill, updateSkill, insertSkill } = this.props;
    isNewSkill ? insertSkill(skill) : updateSkill(skill);
  };

  createNewSkill = () => {
    const { editNewSkill } = this.props;
    editNewSkill();
  };

  detailClose = () => {
    const { editSkillShow } = this.props;
    editSkillShow(false);
  };

  saveToFile = () => {
    const { skillList } = this.props;
    downloadToFile(skillList, 'skills.ts', 'text/plain',
      "import { SkillType } from \"./dic-type\";\n\nexport const SKILLS: SkillType[] = ", ";\n");
  }

  setSearchValue = (searchValue: string) => {
    const { setSkillSearchValue } = this.props;
    setSkillSearchValue(searchValue)
  };

  render() {
    const {
      searchValue, skillList, editSkill, isEditSkillShow, isNewSkill
    } = this.props;
    return (
      <>
        <Row style={{ marginBottom: '5px' }}>
          <Button
            type="primary"
            icon={<DownloadOutlined/>}
            onClick={this.saveToFile}
          >
            Сохранить как Файл
          </Button>
          <div style={{ flex: "auto" }}/>
          <Button
            style={{ alignItems: "end" }}
            type="link"
            icon={<PlusOutlined/>}
            onClick={this.createNewSkill}
          >
            Добавить Connectivity
          </Button>
        </Row>
        <SearchInputWithDelay
          value={searchValue}
          onChange={this.setSearchValue}
          placeholder="Начните набирать значение любого из полей"
        />
        <Table
          dataSource={skillList}
          columns={[ {
            title: '№',
            dataIndex: 'id',
            ellipsis: true,
            width: '200px',
            sorter: (a: Skill, b: Skill) => compareAlphabetically(a.id, b.id),
          }, {
            title: 'Название',
            dataIndex: 'name',
            ellipsis: true,
            width: '300px',
            sorter: (a: Skill, b: Skill) => compareAlphabetically(a.name, b.name),
            render: (name: string, skill: Skill) => (
              <Tooltip placement="topLeft" title={`Редактировать умение "${skill.name}"`}>
                <Button
                  type='link' className='gray_button_link'
                  icon={<img src={skill.image} width='25px' alt={skill.image} className="skill-image"/>}
                  onClick={() => this.editRecord(skill.id)}
                >{name}</Button>
              </Tooltip>
            )
          }, {
            title: 'Описание',
            dataIndex: 'definition',
            ellipsis: true
          } ]}
          bordered
          rowKey={(gb: Skill) => gb.id}
          pagination={false}
          size='small'
        />
        <Modal
          title={`Усиление Великих Cтроений ${editSkill?.name}`}
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
  const { searchValue, skillList, editSkill, isEditSkillShow, isNewSkill } = state.skills;
  return {
    searchValue,
    skillList,
    editSkill,
    isEditSkillShow,
    isNewSkill
  };
};

const mapDispatch = {
  editSkillShow,
  setIsNewSkill,
  setSkillSearchValue,
  editNewSkill,
  editSkillById,
  insertSkill,
  updateSkill,
  deleteSkillByIp
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SkillsPage);
