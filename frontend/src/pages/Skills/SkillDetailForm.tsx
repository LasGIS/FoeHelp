/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React, { useEffect } from 'react';
import { SkillType } from "../../dictionary/dic-type";
import { Button, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

type Props = {
  isExist: boolean,
  editSkill?: SkillType;
  onSave: (skill: SkillType) => any;
  onClose: () => any;
};

export const SkillDetailForm = ({ isExist, editSkill, onSave, onClose }: Props) => {

  const [ form ] = Form.useForm();

  useEffect(() => {
    if (editSkill) {
      const fieldsSkill = {
        id: editSkill.id,
        name: editSkill.name,
        definition: editSkill.definition,
        image: editSkill.image
      };
      form.setFieldsValue(fieldsSkill);
    }
  }, [ form, editSkill ]);

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        const skill: SkillType = {
          ...editSkill,
          id: values.id,
          name: values.name,
          definition: values.definition,
          image: values.image
        };
        onSave(skill);
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

