/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import './styles.scss';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Tooltip } from 'antd';
import { SnippetsOutlined } from '@ant-design/icons/lib/icons';
import { Calc } from './calc-type';
import classNames from 'classnames';
import { Primary } from './Calculation';

const { Option } = Select;

const FACTOR_OPTION: number[] = [1.85, 1.9, 1.92, 2.0];

type Error = {
  message: string;
  type: 'info' | 'warn' | 'error';
};

type Props = {
  calc: Calc;
  primary: Primary;
  onSaveCalc: (calc: Calc) => void;
  onSetPrimary: (primary: Primary) => void;
};

const CalcForm: React.FC<Props> = ({ calc, onSaveCalc, primary, onSetPrimary }) => {
  const [minEncl, setMinEncl] = useState<number | undefined>(undefined);
  const [justEncl, setJustEncl] = useState<number | undefined>(undefined);
  const [maxEncl, setMaxEncl] = useState<number | undefined>(undefined);

  const [errors, setErrors] = useState<Error[]>([]);
  const [form] = Form.useForm();

  const calcEnclosure = (cln: Calc) => {
    const errorList: Error[] = [];
    let minEnclosure: number | undefined = undefined;
    let enclosure: number | undefined = undefined;
    let maxEnclosure: number | undefined = undefined;

    if (cln.fee) {
      enclosure = Math.round(cln.fac * cln.fee);
      if (cln.ned) {
        const calcNow: number = cln.now || 0;
        if (cln.rvl) {
          minEnclosure = Math.round((cln.ned - calcNow + cln.rvl) / 2);
          if (cln.rvl >= Math.round(cln.ned - calcNow)) {
            errorList.push({
              type: 'error',
              message: `Конкурент уже занял это место:   ${cln.rvl} >= ${cln.ned} - ${calcNow} = ${Math.round(cln.ned - calcNow)}`,
            });
            enclosure = undefined;
            minEnclosure = undefined;
          } else if (cln.fee > cln.ned - calcNow) {
            errorList.push({
              type: 'error',
              message: `Вложение превышает остаток:   ${cln.fee} > ${cln.ned} - ${calcNow} = ${Math.round(cln.ned - calcNow)}`,
            });
            enclosure = undefined;
          } else if (enclosure > cln.ned - calcNow) {
            errorList.push({
              type: 'warn',
              message:
                `Вложение превышает остаток:   ${cln.fac} * ${cln.fee} = ${Math.round(cln.fac * cln.fee)}` +
                ` >= ${cln.ned} - ${calcNow} = ${Math.round(cln.ned - calcNow)}`,
            });
            enclosure = undefined;
          } else if (enclosure === minEnclosure) {
            minEnclosure = undefined;
          } else if (enclosure < (cln.ned - calcNow + cln.rvl) / 2) {
            errorList.push({
              type: 'warn',
              message:
                `Нет ГАРАНТА для занятия места:  ${cln.fac} * ${cln.fee} = ${Math.round(cln.fac * cln.fee)}` +
                ` <= (${cln.ned} - ${calcNow} + ${cln.rvl}) / 2 = ${Math.round((cln.ned - calcNow + cln.rvl) / 2)}`,
            });
            maxEnclosure = minEnclosure;
            minEnclosure = undefined;
          }
        } else {
          minEnclosure = Math.round((cln.ned - calcNow) / 2);
          if (cln.fee > cln.ned - calcNow) {
            errorList.push({
              type: 'error',
              message: `Вложение превышает остаток:   ${cln.fee} >= ${cln.ned} - ${calcNow} = ${Math.round(cln.ned - calcNow)}`,
            });
            enclosure = undefined;
          } else if (enclosure > cln.ned - calcNow) {
            errorList.push({
              type: 'warn',
              message:
                `Вложение превышает остаток:   ${cln.fac} * ${cln.fee} = ${Math.round(cln.fac * cln.fee)}` +
                ` >= ${cln.ned} - ${calcNow} = ${Math.round(cln.ned - calcNow)}`,
            });
            enclosure = undefined;
          } else if (enclosure === minEnclosure) {
            minEnclosure = undefined;
          } else if (enclosure < (cln.ned - calcNow) / 2) {
            errorList.push({
              type: 'warn',
              message:
                `Нет ГАРАНТА для занятия места:  ${cln.fac} * ${cln.fee} = ${Math.round(cln.fac * cln.fee)}` +
                ` <= (${cln.ned} - ${calcNow}) / 2 = ${Math.round((cln.ned - calcNow) / 2)}`,
            });
            maxEnclosure = minEnclosure;
            minEnclosure = undefined;
          }
        }
      }
    } else {
      errorList.push({ type: 'error', message: 'Введи Откат' });
    }

    setMinEncl(minEnclosure);
    setJustEncl(enclosure);
    setMaxEncl(maxEnclosure);
    setErrors(errorList);
  };

  useEffect(() => {
    form.setFieldsValue({
      fac: calc.fac,
      now: calc.now,
      ned: calc.ned,
      fee: calc.fee,
      rvl: calc.rvl,
    });
    calcEnclosure(calc);
  }, [form, calc]);

  const onChangeRepayment = () => {
    const ncalc: Calc = form.getFieldsValue();
    onSaveCalc(ncalc);
    calcEnclosure(ncalc);
    onSetPrimary(undefined);
  };

  const onChangeFactor = (factor: number) => {
    const ncalc: Calc = form.getFieldsValue();
    ncalc.fac = factor;
    onSaveCalc(ncalc);
    calcEnclosure(ncalc);
    onSetPrimary(undefined);
  };

  const clipboardWriteText = (text: string, prim: Primary) => {
    navigator.clipboard
      .writeText(text)
      .then(() => onSetPrimary(prim))
      .catch(() => onSetPrimary(undefined));
  };

  return (
    <Form className="calc-form" layout="vertical" form={form}>
      <Input.Group compact>
        <Form.Item name="fac" noStyle>
          <Select id="fac" style={{ width: 80 }} onChange={onChangeFactor}>
            {FACTOR_OPTION.map((value: number, index: number) => (
              <Option key={index} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="now">
          <InputNumber placeholder="внесено" min={0} onChange={onChangeRepayment} />
        </Form.Item>
        <Form.Item name="ned">
          <InputNumber placeholder="нужно" min={0} onChange={onChangeRepayment} />
        </Form.Item>
        <Form.Item name="fee">
          <InputNumber placeholder="откат" min={0} onChange={onChangeRepayment} />
        </Form.Item>
        <Form.Item name="rvl">
          <InputNumber placeholder="конкур." min={0} onChange={onChangeRepayment} />
        </Form.Item>
        {minEncl && (
          <Form.Item>
            <Tooltip title="Для занятия места с ГАРАНТОМ">
              <Button
                className={classNames('button-min', {
                  selected: primary === 'min',
                })}
                type="primary"
                icon={<SnippetsOutlined />}
                onClick={() => clipboardWriteText(minEncl.toString(), 'min')}
              >
                {' '}
                {minEncl}
              </Button>
            </Tooltip>
          </Form.Item>
        )}
        {justEncl && (
          <Form.Item>
            <Tooltip title="Вложение по откату">
              <Button
                className={classNames('button-just', {
                  selected: primary === 'just',
                })}
                type="primary"
                icon={<SnippetsOutlined />}
                onClick={() => clipboardWriteText(justEncl.toString(), 'just')}
              >
                {' '}
                {justEncl}
              </Button>
            </Tooltip>
          </Form.Item>
        )}
        {maxEncl && (
          <Form.Item>
            <Tooltip title="Для занятия места с ГАРАНТОМ">
              <Button
                className={classNames('button-max', {
                  selected: primary === 'max',
                })}
                type="primary"
                icon={<SnippetsOutlined />}
                onClick={() => clipboardWriteText(maxEncl.toString(), 'max')}
              >
                {' '}
                {maxEncl}
              </Button>
            </Tooltip>
          </Form.Item>
        )}
      </Input.Group>
      <div className="errors">
        {errors.map((err: Error, index) => (
          <div key={index} className={`${err.type}`}>
            {err.message}
          </div>
        ))}
      </div>
    </Form>
  );
};

export default CalcForm;
