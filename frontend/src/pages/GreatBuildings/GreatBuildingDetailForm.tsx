/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React, { useEffect } from 'react';
import { GreatBuilding, Road, Skill } from "../../dictionary/dic-type";
import { Button, Form, Input, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ERAS } from "../../dictionary/eras";
import { ROADS } from "../../dictionary/simple";

const { Option } = Select;

type Props = {
  skills: Skill[];
  isExist: boolean;
  editGreatBuilding?: GreatBuilding;
  onSave: (build: GreatBuilding) => any;
  onClose: () => any;
};

const GreatBuildingDetailForm = ({ skills, isExist, editGreatBuilding, onSave, onClose }: Props) => {

  const [ form ] = Form.useForm();

  useEffect(() => {
    if (editGreatBuilding) {
      const fieldsGreatBuilding = {
        id: editGreatBuilding.id,
        name: editGreatBuilding.name,
        definition: editGreatBuilding.definition,
        image: editGreatBuilding.image,
        era: editGreatBuilding.era,
        skillTypes: editGreatBuilding.skillTypes,
        place: editGreatBuilding.place ? editGreatBuilding.place : { b: 1 },
      };
      form.setFieldsValue(fieldsGreatBuilding);
    }
  }, [ form, editGreatBuilding ]);

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        const build: GreatBuilding = {
          ...editGreatBuilding,
          id: values.id,
          type: "great",
          name: values.name,
          definition: values.definition,
          image: values.image,
          era: values.era,
          skillTypes: values.skillTypes,
          place: values.place,
        };
        onSave(build);
      });
  };

  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 17 },
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Form {...layout} form={form}>
      <Form.Item
        name="id" label="ID"
        rules={[ {
          required: true,
          message: 'ID обязательно!',
        }, {
          pattern: /^([a-z0-9]+[_])*[a-z0-9]+$/,
          message: 'ID состоит из LAT в нижнем регистре, разделенных "_"',
        } ]}>
        <Input disabled={isExist}/>
      </Form.Item>
      <Form.Item name="image" label="Картинка (URL)">
        <Input/>
      </Form.Item>
      <Form.Item
        name="name" label="Название"
        rules={[ { required: true } ]}>
        <Input/>
      </Form.Item>
      <Form.Item
        name="era" label="Эра / Эпоха"
        rules={[ { required: true } ]}>
        <Select
          placeholder={"Выберите эпоху"} showSearch optionLabelProp='label'
          filterOption={(input, option) => {
            const label: string = (option && option.label && typeof (option.label) === 'string') ? option.label : '';
            return Boolean(label.toLowerCase().indexOf(input.toLowerCase()) >= 0)
          }}
        >
          {ERAS.map((era, index) => (
            <Option key={`era_id_option_${index}`} value={era.key} label={era.name}>
              <div style={{
                padding: "0 11px",
                background: era.background,
                borderColor: era.borderColor,
                color: era.color
              }}>{era.name}</div>
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Размер" required={true}>
        <Input.Group compact>
          <Form.Item
            name={[ 'place', 'x' ]}
            noStyle
            rules={[ { required: true } ]}
          >
            <InputNumber placeholder='X' min={1} max={10} step={1} style={{ width: '50px' }}/>
          </Form.Item>
          <Form.Item
            name={[ 'place', 'y' ]}
            noStyle
            rules={[ { required: true } ]}
          >
            <InputNumber placeholder='Y' min={1} max={10} step={1} style={{ width: '50px' }}/>
          </Form.Item>
          <Form.Item
            name={[ 'place', 'b' ]}
            noStyle
            rules={[ { required: true } ]}
          >
            <Select placeholder="дорога" style={{ width: '200px' }}>
              {ROADS.map((road: Road, index: number) => <Option key={index} value={road.type}>
                {road.image && <img src={road.image} width='25px' alt={road.name} className="skill-image"/>}{road.name}
              </Option>)}
            </Select>
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item
        name="skillTypes" label="Усиление ВC"
        rules={[ { required: true } ]}>
        <Select mode='multiple' placeholder={"добавьте усиление"} showSearch filterOption={(input, option) => {
          return Boolean(option && option.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0)
        }}>
          {skills?.map((skill, index) => (
            <Option key={`skill_id_option_${index}`} value={skill.id}>
              <img src={skill.image} width='25px' alt={skill.image} className="skill-image"/>{skill.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="definition" label="Описание">
        <TextArea rows={4} autoSize={true} />
      </Form.Item>
      <Row justify="center">
        <Form.Item noStyle>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Сохранить
          </Button>
          <Button style={{ marginLeft: 8 }} htmlType="reset" onClick={handleClose}>
            Закрыть
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}

export default GreatBuildingDetailForm;
