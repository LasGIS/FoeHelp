/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import React from "react";
import { Table } from "antd";
import { ERAS } from "../../dictionary/eras";
import { EraType } from "../../dictionary/dic-type";
import { compareAlphabetically } from "../../utils";

const ErasPage: React.FC = (props) => {

  return (
    <Table
      style={{ width: '300px' }}
      dataSource={ERAS}
      columns={[ {
        title: '№',
        dataIndex: 'key',
        width: '20px'
      }, {
        title: 'Абр.',
        dataIndex: 'short',
        width: '60px',
        sorter: (a: EraType, b: EraType) => compareAlphabetically(a.short, b.short),
      }, {
        title: 'Полное название',
        dataIndex: 'name',
        sorter: (a: EraType, b: EraType) => compareAlphabetically(a.name, b.name),
      } ]}
      bordered
      onRow={(era: EraType) => ({
        style: {
          background: era.background,
          borderColor: era.borderColor,
          color: era.color
        }
      })}
      rowKey={(era: EraType) => era.key}
      pagination={false}
      size='small'
    />
  );
}

export default ErasPage;
