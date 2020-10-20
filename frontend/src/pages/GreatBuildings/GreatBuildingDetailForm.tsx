/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React, { useEffect } from 'react';
import { GreatBuildingType, PlaceType } from "../../dictionary/dic-type";
import { Button, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

type Props = {
  isExist: boolean,
  editGreatBuilding?: GreatBuildingType;
  onSave: (build: GreatBuildingType) => any;
  onClose: () => any;
};

export const GreatBuildingDetailForm = ({ isExist, editGreatBuilding, onSave, onClose }: Props) => {

  const [ form ] = Form.useForm();

  useEffect(() => {
    if (editGreatBuilding) {
      const fieldsGreatBuilding = {
        id: editGreatBuilding.id,
        name: editGreatBuilding.name,
        definition: editGreatBuilding.definition,
        image: editGreatBuilding.image,
        era: editGreatBuilding.era,
        place_x: editGreatBuilding.place?.x,
        place_y: editGreatBuilding.place?.y,
        place_b: editGreatBuilding.place?.b,
      };
      form.setFieldsValue(fieldsGreatBuilding);
    }
  }, [ form, editGreatBuilding ]);

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        const place: PlaceType | undefined =
          (values.place_x && values.place_y && values.place_b) ? {
            x: values.place_x,
            y: values.place_y,
            b: values.place_b
          } : undefined;

        const build: GreatBuildingType = {
          ...editGreatBuilding,
          id: values.id,
          name: values.name,
          definition: values.definition,
          image: values.image,
          era: values.era,
//          place: place,
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
      <Form.Item
        name="name" label="Название"
        rules={[ { required: true } ]}>
        <Input/>
      </Form.Item>
      <Form.Item
        name="era" label="Эра"
        rules={[ { required: true } ]}>
        <Input/>
      </Form.Item>
      <Form.Item name="definition" label="Описание">
        <TextArea/>
      </Form.Item>
      <Form.Item name="image" label="Картинка (URL)">
        <Input/>
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

