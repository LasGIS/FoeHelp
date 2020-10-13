import React from "react";
import { Table } from "antd";
import { ERAS } from "../../dictionary/eras";
import { EraType } from "../../dictionary/dic-type";
import { compareAlphabetically } from "../../utils";

const ErasPage: React.FC = (props) => {

  return (
    <Table
      dataSource={ERAS}
      columns={[ {
        title: 'Абр.',
        dataIndex: 'short',
        width: '60px',
        sorter: (a: EraType, b: EraType) => compareAlphabetically(a.short, b.short),
      }, {
        title: 'Полное название',
        dataIndex: 'name',
        width: '260px',
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
      pagination={false}
      size='small'
    />
  );
}

export default ErasPage;
