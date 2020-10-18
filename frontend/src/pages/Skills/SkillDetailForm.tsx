/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React, { useEffect, useState } from 'react';
import { SkillType } from "../../dictionary/dic-type";
import { Form, Input } from "antd";

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
        id: editSkill.id
      };
      form.setFieldsValue(fieldsSkill);
    }
  },[form, editSkill]);

  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 17 },
  };

  return (
    <Form {...layout} form={form}>
      <Form.Item
        name="id" label="Название (ID)"
        rules={[ {
          required: true,
          message: 'Название (ID) группы обязательно!',
        }, {
          pattern: /^([A-Z0-9]+[-_])*[A-Z0-9]+$/,
          message: 'Название/ID группы состоит из LAT в верхнем регистре, разделенных "-" или "_"',
        } ]}>
        <Input disabled={isExist}/>
      </Form.Item>
    </Form>
  );
}

