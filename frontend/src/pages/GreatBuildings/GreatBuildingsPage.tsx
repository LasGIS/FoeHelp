import React from "react";
import { Button, Modal, Row, Table, Tooltip } from "antd";
import { compareAlphabetically, compareNumber, downloadToFile } from "../../utils";
import { EraKey, EraType, GreatBuildingType } from "../../dictionary/dic-type";
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

  saveDetail = (greatBuilding: GreatBuildingType) => {
    const { isNewGreatBuilding, updateGreatBuilding, insertGreatBuilding } = this.props;
    isNewGreatBuilding ? insertGreatBuilding(greatBuilding) : updateGreatBuilding(greatBuilding);
  };

  createNewGreatBuilding = () => {
    const { editNewGreatBuilding } = this.props;
    editNewGreatBuilding();
  };

  detailClose = () => {
    const { editGreatBuildingShow } = this.props;
    editGreatBuildingShow(false);
  };

  saveToFile = () => {
    const { greatBuildingList } = this.props;
    downloadToFile(greatBuildingList, 'great-buildings.ts', 'text/plain',
      "/** Великие Строения */\n" +
      "import { GreatBuildingType } from \"./dic-type\";\n\n" +
      "export const GREAT_BUILDING: GreatBuildingType[] = ", ";\n");
  }

  render() {
    const { greatBuildingList, editGreatBuilding, isEditGreatBuildingShow, isNewGreatBuilding } = this.props;
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
            Добавить Connectivity
          </Button>
        </Row>
        <Table
          dataSource={greatBuildingList}
          columns={[ {
            title: '№',
            dataIndex: 'id',
            ellipsis: true,
            width: '20px',
            sorter: (a: GreatBuildingType, b: GreatBuildingType) => compareNumber(a.id, b.id),
          }, {
            title: 'Название',
            dataIndex: 'name',
            ellipsis: true,
            width: '300px',
            sorter: (a: GreatBuildingType, b: GreatBuildingType) => compareAlphabetically(a.name, b.name),
            render: (name: string, build: GreatBuildingType) => (
              <Tooltip placement="topLeft" title={`Редактировать строение "${build.name}"`}>
                <Button
                  type='link'
                  icon={<img src={build.image} width='25px' alt={build.image} className="skill-image"/>}
                  onClick={() => this.editRecord(build.id)}
                >{name}</Button>
              </Tooltip>
            )
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
        // editGreatBuilding, isEditGreatBuildingShow, isNewGreatBuilding
        <Modal
          title={`Детали Host ${editGreatBuilding?.name}`}
          visible={isEditGreatBuildingShow}
          onCancel={this.detailClose}
          footer={false}
          maskClosable={false}
          width='1024px'
        >
          <GreatBuildingDetailForm
            isExist={!isNewGreatBuilding}
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
  return {
    greatBuildingList,
    editGreatBuilding,
    isEditGreatBuildingShow,
    isNewGreatBuilding
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
