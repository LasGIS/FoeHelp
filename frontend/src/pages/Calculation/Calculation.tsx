/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select, Tooltip } from "antd";
import { ToTopOutlined } from "@ant-design/icons/lib/icons";

const { Option } = Select;

const Calculation: React.FC = () => {

  const [ enclosure, setEnclosure ] = useState<number>(0);

  const [ form ] = Form.useForm();

  useEffect(() => {
    const repayment: string | null = localStorage.getItem('repayment');
    const factor: string | null = localStorage.getItem('factor');
    form.setFieldsValue({
      repayment: repayment ? parseInt(repayment) : null,
      factor: factor ? parseFloat(factor) : 1.9
    });
  }, [ form ]);


  const calcEnclosure = (factor: number, repayment: number) => {
    const enclosure: number = Math.round(factor * repayment);
    setEnclosure(enclosure);
  };

  const onChangeRepayment = (rep?: string | number) => {
    const factor: number = form.getFieldValue('factor');
    const repayment: number = (rep && typeof (rep) === 'number') ? rep : 0;
    localStorage.setItem("repayment", repayment.toString());
    calcEnclosure(factor, repayment);
  };

  const onChangeFactor = (value: number) => {
    const factor: number = value;
    const repayment: number = form.getFieldValue('repayment')
    localStorage.setItem("factor", factor.toString());
    calcEnclosure(factor, repayment);
  };

  const clipboardWriteText = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(r => console.log('clipboard.writeText успешно', r))
      .catch(err => console.log('clipboard.writeText провал', err));
  };

  return (
    <Form layout='vertical' form={form}>
      <Form.Item label="Расчет вложения">
        <Input.Group compact>
          <Form.Item name="factor" noStyle>
            <Select style={{ width: 70 }} onChange={onChangeFactor}>
              <Option value={1.85}>1.85</Option>
              <Option value={1.9}>1.9</Option>
              <Option value={2.0}>2.0</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="repayment"
            rules={[ { required: true, message: 'Размер возврата?' } ]}
          >
            <InputNumber placeholder='возврат' onChange={onChangeRepayment}/>
          </Form.Item>
          <Form.Item>
            <Tooltip title='Сохранить в Буфер обмена'>
              <Button type='primary' icon={<ToTopOutlined/>} onClick={() => clipboardWriteText(enclosure.toString())}> {enclosure}</Button>
            </Tooltip>
          </Form.Item>

        </Input.Group>
      </Form.Item>
    </Form>
  );

};

export default Calculation;

