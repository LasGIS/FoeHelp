/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import React from 'react';
import { Button, Modal, Row, Table, Tooltip } from 'antd';
import { compareAlphabetically, compareNumber, downloadToFile } from '../../utils';
import { EraType, Place, ResidentialBuilding, SkillType } from '../../dictionary/dic-type';
import { RootStoreData } from '../../common/types/redux-types';
import { connect, ConnectedProps } from 'react-redux';
import { ERA_KEY_MAP } from '../../dictionary/eras';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons/lib/icons';
import {
  deleteResidentialBuildingByIp,
  editNewResidentialBuilding,
  editResidentialBuildingById,
  editResidentialBuildingShow,
  insertResidentialBuilding,
  setIsNewResidentialBuilding,
  updateResidentialBuilding,
} from './services/action-creators';
import { ResidentialBuildingDetailForm } from './ResidentialBuildingDetailForm';

class ResidentialBuildingsPage extends React.Component<PropsFromRedux> {
  createNewBuilding = () => {
    const { editNewResidentialBuilding } = this.props;
    editNewResidentialBuilding();
  };

  editRecord = (id?: number) => {
    const { editResidentialBuildingById } = this.props;
    if (id) {
      editResidentialBuildingById(id);
    }
  };

  saveDetail = (residentialBuilding: ResidentialBuilding) => {
    const { isNewResidentialBuilding, updateResidentialBuilding, insertResidentialBuilding } = this.props;
    if (isNewResidentialBuilding) {
      insertResidentialBuilding(residentialBuilding);
    } else {
      updateResidentialBuilding(residentialBuilding);
    }
  };

  detailClose = () => {
    const { editResidentialBuildingShow } = this.props;
    editResidentialBuildingShow(false);
  };

  saveToFile = () => {
    const { residentialBuildingList } = this.props;
    downloadToFile(
      residentialBuildingList,
      'residential-buildings.ts',
      'text/plain',
      '/** Великие Строения */\nimport { ResidentialBuilding } from "./dic-type";\n\nexport const GREAT_BUILDING: ResidentialBuilding[] = ',
      ';\n',
    );
  };

  render() {
    const { residentialBuildingList, editResidentialBuilding, isEditResidentialBuildingShow, isNewResidentialBuilding, skillList } = this.props;
    const iconsSize: string = 'https://foeru.innogamescdn.com/assets/shared/icons/size.png';
    return (
      <>
        <Row style={{ marginBottom: '5px' }}>
          <Button type="primary" icon={<DownloadOutlined />} onClick={this.saveToFile}>
            Сохранить как Файл
          </Button>
          <div style={{ flex: 'auto' }} />
          <Button style={{ alignItems: 'end' }} type="link" icon={<PlusOutlined />} onClick={this.createNewBuilding}>
            Добавить Великое Строение
          </Button>
        </Row>
        <Table
          dataSource={residentialBuildingList}
          columns={[
            {
              title: '№',
              dataIndex: 'id',
              ellipsis: true,
              width: '50px',
              sorter: (a: ResidentialBuilding, b: ResidentialBuilding) => compareNumber(a.id, b.id),
            },
            {
              title: 'Здание',
              dataIndex: 'name',
              ellipsis: true,
              width: '300px',
              sorter: (a: ResidentialBuilding, b: ResidentialBuilding) => compareAlphabetically(a.name, b.name),
              render: (name: string, build: ResidentialBuilding) => (
                <Tooltip placement="topLeft" title={`Редактировать строение "${build.name}"`}>
                  <Button
                    type="link"
                    className="era-button"
                    icon={<img src={build.image} height="46px" alt={build.image} className="skill-image" />}
                    onClick={() => this.editRecord(build.id)}
                  >
                    {name}
                  </Button>
                </Tooltip>
              ),
            },
            {
              title: 'Эра',
              dataIndex: 'era',
              width: '250px',
              sorter: (a: ResidentialBuilding, b: ResidentialBuilding) => compareAlphabetically(ERA_KEY_MAP[a.era].name, ERA_KEY_MAP[b.era].name),
              render: (eraKey: number) => {
                const era: EraType = ERA_KEY_MAP[eraKey];
                return (
                  <div className="circle-wrapper">
                    <div
                      className="circle"
                      style={{
                        backgroundColor: `${era.background}`,
                        borderColor: `${era.borderColor}`,
                        color: `${era.color}`,
                      }}
                    >
                      {era.short}
                    </div>
                    {era.name}
                  </div>
                );
              },
            },
            {
              title: 'Размер',
              dataIndex: 'place',
              width: '90px',
              render: (place?: Place) =>
                place ? (
                  <>
                    <img src={iconsSize} width="25px" alt={iconsSize} className="skill-image" />
                    {`${place.x}x${place.y}`}
                  </>
                ) : (
                  ''
                ),
            },
            {
              title: 'Умения',
              dataIndex: 'skillTypes',
              width: '300px',
              render: (skillTypes?: SkillType[]) =>
                skillList
                  .filter((skill) => skillTypes?.includes(skill.id))
                  .map((skill, index) => (
                    <div>
                      <Tooltip key={index} title={skill.definition}>
                        <img key={skill.id} src={skill.image} width="25px" alt={skill.image} className="skill-image" />
                        {skill.name}
                      </Tooltip>
                    </div>
                  )),
            },
            {
              title: 'Описание',
              dataIndex: 'definition',
              ellipsis: true,
              sorter: (a: ResidentialBuilding, b: ResidentialBuilding) => compareAlphabetically(a.definition, b.definition),
            },
          ]}
          bordered
          rowKey={(gb: ResidentialBuilding) => gb.id}
          pagination={false}
          size="small"
        />
        <Modal
          title={`Здание "${editResidentialBuilding?.name}"`}
          visible={isEditResidentialBuildingShow}
          onCancel={this.detailClose}
          footer={false}
          maskClosable={false}
          width="1024px"
        >
          <ResidentialBuildingDetailForm
            isExist={!isNewResidentialBuilding}
            editResidentialBuilding={editResidentialBuilding}
            onSave={this.saveDetail}
            onClose={this.detailClose}
          />
        </Modal>
      </>
    );
  }
}

const mapState = (state: RootStoreData) => {
  const { residentialBuildingList, editResidentialBuilding, isEditResidentialBuildingShow, isNewResidentialBuilding } = state.residencies;
  const { skillList } = state.skills;
  return {
    residentialBuildingList,
    editResidentialBuilding,
    isEditResidentialBuildingShow,
    isNewResidentialBuilding,
    skillList,
  };
};

const mapDispatch = {
  editResidentialBuildingShow,
  setIsNewResidentialBuilding,
  editNewResidentialBuilding,
  editResidentialBuildingById,
  insertResidentialBuilding,
  updateResidentialBuilding,
  deleteResidentialBuildingByIp,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ResidentialBuildingsPage);
