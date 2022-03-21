/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import React from "react";
import { Button, Modal, Row, Table, Tooltip } from "antd";
import { compareAlphabetically, compareNumber, downloadToFile } from "../../utils";
import { EraType, GreatBuilding, Place, SkillType } from "../../dictionary/dic-type";
import { RootStoreData } from "../../common/types/redux-types";
import { connect, ConnectedProps } from "react-redux";
import { ERA_KEY_MAP } from "../../dictionary/eras";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons/lib/icons";
import {
  deleteGreatBuildingByIp,
  editGreatBuildingById,
  editGreatBuildingShow,
  editNewGreatBuilding,
  insertGreatBuilding,
  setIsNewGreatBuilding,
  updateGreatBuilding
} from "./services/action-creators";
import { GreatBuildingDetailForm } from "./GreatBuildingDetailForm";

class GreatBuildingsPage extends React.Component<PropsFromRedux> {

  createNewBuilding = () => {
    const { editNewGreatBuilding } = this.props;
    editNewGreatBuilding();
  };

  editRecord = (id?: number) => {
    const { editGreatBuildingById } = this.props;
    id && editGreatBuildingById(id);
  };

  saveDetail = (greatBuilding: GreatBuilding) => {
    const { isNewGreatBuilding, updateGreatBuilding, insertGreatBuilding } = this.props;
    isNewGreatBuilding ? insertGreatBuilding(greatBuilding) : updateGreatBuilding(greatBuilding);
  };

  detailClose = () => {
    const { editGreatBuildingShow } = this.props;
    editGreatBuildingShow(false);
  };

  saveToFile = () => {
    const { greatBuildingList } = this.props;
    downloadToFile(greatBuildingList, 'great-buildings.ts', 'text/plain',
      "/** Великие Строения */\n" +
      "import { GreatBuilding } from \"./dic-type\";\n\n" +
      "export const GREAT_BUILDING: GreatBuilding[] = ", ";\n");
  }

  render() {
    const { greatBuildingList, editGreatBuilding, isEditGreatBuildingShow, isNewGreatBuilding, skillList } = this.props;
    const iconsSize: string = 'https://foeru.innogamescdn.com/assets/shared/icons/size.png';
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
            onClick={this.createNewBuilding}
          >
            Добавить Великое Строение
          </Button>
        </Row>
        <Table
          dataSource={greatBuildingList}
          columns={[ {
            title: '№',
            dataIndex: 'id',
            ellipsis: true,
            width: '50px',
            sorter: (a: GreatBuilding, b: GreatBuilding) => compareNumber(a.id, b.id),
          }, {
            title: 'Здание',
            dataIndex: 'name',
            ellipsis: true,
            width: '300px',
            sorter: (a: GreatBuilding, b: GreatBuilding) => compareAlphabetically(a.name, b.name),
            render: (name: string, build: GreatBuilding) => (
              <Tooltip placement="topLeft" title={`Редактировать строение "${build.name}"`}>
                <Button
                  type='link'
                  className='era-button'
                  icon={<img src={build.image} height='46px' alt={build.image} className="skill-image"/>}
                  onClick={() => this.editRecord(build.id)}
                >{name}</Button>
              </Tooltip>
            )
          }, {
            title: 'Эра',
            dataIndex: 'era',
            width: '250px',
            sorter: (a: GreatBuilding, b: GreatBuilding) => compareAlphabetically(ERA_KEY_MAP[a.era].name, ERA_KEY_MAP[b.era].name),
            render: (eraKey: number) => {
              const era: EraType = ERA_KEY_MAP[eraKey];
              return <div className='circle-wrapper'>
                <div className='circle' style={{
                  backgroundColor: `${era.background}`,
                  borderColor: `${era.borderColor}`,
                  color: `${era.color}`
                }}>{era.short}</div>
                {era.name}</div>
            },
          }, {
            title: 'Размер',
            dataIndex: 'place',
            width: '90px',
            render: (place?: Place) => place ?
              <><img src={iconsSize} width='25px' alt={iconsSize} className="skill-image"/>{`${place.x}x${place.y}`}</>
              : '',
          }, {
            title: 'Умения',
            dataIndex: 'skillTypes',
            width: '300px',
            render: (skillTypes?: SkillType[]) => skillList.filter(skill => skillTypes?.includes(skill.id)).map((skill, index) =>
              <div><Tooltip key={index} title={skill.definition}>
                <img key={skill.id} src={skill.image} width='25px' alt={skill.image} className="skill-image"/>{skill.name}
              </Tooltip></div>
            ),
          }, {
            title: 'Описание',
            dataIndex: 'definition',
            ellipsis: true,
            sorter: (a: GreatBuilding, b: GreatBuilding) => compareAlphabetically(a.definition, b.definition),
          } ]}
          bordered
          rowKey={(gb: GreatBuilding) => gb.id}
          pagination={false}
          size='small'
        />
        <Modal
          title={`Здание "${editGreatBuilding?.name}"`}
          visible={isEditGreatBuildingShow}
          onCancel={this.detailClose}
          footer={false}
          maskClosable={false}
          width='1024px'
        >
          <GreatBuildingDetailForm
            isExist={!isNewGreatBuilding}
            skills={skillList}
            editGreatBuilding={editGreatBuilding}
            onSave={this.saveDetail}
            onClose={this.detailClose}
          />
        </Modal>
      </>
    );
  }
}

const mapState = (state: RootStoreData) => {
  const { greatBuildingList, editGreatBuilding, isEditGreatBuildingShow, isNewGreatBuilding } = state.greatBuilds;
  const { skillList } = state.skills;
  return {
    greatBuildingList,
    editGreatBuilding,
    isEditGreatBuildingShow,
    isNewGreatBuilding,
    skillList
  };
};

const mapDispatch = {
  editGreatBuildingShow,
  setIsNewGreatBuilding,
  editNewGreatBuilding,
  editGreatBuildingById,
  insertGreatBuilding,
  updateGreatBuilding,
  deleteGreatBuildingByIp,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GreatBuildingsPage);
