/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select, Tooltip } from "antd";
import { SnippetsOutlined } from "@ant-design/icons/lib/icons";
import { Calc } from "./calc-type";

const { Option } = Select;

const FACTOR_OPTION: number[] = [ 1.85, 1.9, 2.0 ];

type Props = {
  calc: Calc;
  onSaveCalc: (calc: Calc) => void;
};

const CalcForm: React.FC<Props> = ({ calc, onSaveCalc }) => {

  const [ enclosure, setEnclosure ] = useState<number>(0);

  const [ form ] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      fac: calc.fac,
      now: calc.now,
      ned: calc.ned,
      fee: calc.fee,
      rvl: calc.rvl,
    });
    calcEnclosure(calc);
  }, [ form, calc ]);

  const calcEnclosure = (calc: Calc) => {
    const enclosure: number = Math.round(calc.fac * calc.fee);
    setEnclosure(enclosure);
  };

  const onChangeRepayment = () => {
    const calc: Calc = form.getFieldsValue();
    onSaveCalc(calc);
    calcEnclosure(calc);
  };

  const onChangeFactor = (factor: number) => {
    const calc: Calc = form.getFieldsValue();
    calc.fac = factor;
    onSaveCalc(calc);
    calcEnclosure(calc);
  };

  const clipboardWriteText = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(r => console.log('clipboard.writeText успешно', r))
      .catch(err => console.log('clipboard.writeText провал', err));
  };

  return (
    <Form layout='vertical' form={form}>
      <Input.Group compact>
        <Form.Item name="fac" noStyle>
          <Select style={{ width: 80 }} onChange={onChangeFactor}>
            {FACTOR_OPTION.map((value: number, index: number) => <Option key={index} value={value}>{value}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item name="now">
          <InputNumber placeholder='внесено' min={0} onChange={onChangeRepayment}/>
        </Form.Item>
        <Form.Item name="ned">
          <InputNumber placeholder='нужно' min={0} onChange={onChangeRepayment}/>
        </Form.Item>
        <Form.Item name="fee" rules={[{ required: true, message: 'Откат ?' } ]}>
          <InputNumber placeholder='откат' min={0} onChange={onChangeRepayment}/>
        </Form.Item>
        <Form.Item name="rvl">
          <InputNumber placeholder='конкур.' min={0} onChange={onChangeRepayment}/>
        </Form.Item>
        <Form.Item>
          <Tooltip title='Сохранить в Буфер обмена'>
            <Button type='primary' icon={<SnippetsOutlined/>} onClick={() => clipboardWriteText(enclosure.toString())}> {enclosure}</Button>
          </Tooltip>
        </Form.Item>

      </Input.Group>
    </Form>
  );

};

export default CalcForm;

