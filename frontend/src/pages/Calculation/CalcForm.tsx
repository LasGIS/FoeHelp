/*
 * Copyright 2020 LasGIS FOE Helper
 */

import "./styles.scss";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Input, InputNumber, Select, Tooltip } from "antd";
import { SnippetsOutlined } from "@ant-design/icons/lib/icons";
import { Calc } from "./calc-type";
import classNames from "classnames";
import { Primary } from "./Calculation";

const { Option } = Select;

const FACTOR_OPTION: number[] = [ 1.85, 1.9, 1.92, 2.0 ];

type Error = {
  message: string;
  type: 'info' | 'warn' | 'error'
}

type Props = {
  calc: Calc;
  primary: Primary;
  onSaveCalc: (calc: Calc) => void;
  onSetPrimary: (primary: Primary) => void;
};

const CalcForm: React.FC<Props> = ({ calc, onSaveCalc, primary, onSetPrimary }) => {

  const [ minEncl, setMinEncl ] = useState<number | undefined>(undefined);
  const [ justEncl, setJustEncl ] = useState<number | undefined>(undefined);
  const [ maxEncl, setMaxEncl ] = useState<number | undefined>(undefined);

  const [ errors, setErrors ] = useState<Error[]>([]);
  const [ form ] = Form.useForm();

  const facRef = useRef<any>(null);
  const nowRef = useRef<any>(null);
  const nedRef = useRef<any>(null);
  const feeRef = useRef<any>(null);
  const rvlRef = useRef<any>(null);

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
    const errorList: Error[] = [];
    let minEnclosure: number | undefined = undefined;
    let enclosure: number | undefined = undefined;
    let maxEnclosure: number | undefined = undefined;

    if (calc.fee) {

      enclosure = Math.round(calc.fac * calc.fee);
      if (calc.ned) {
        const calcNow: number = calc.now || 0;
        if (calc.rvl) {

          minEnclosure = Math.round((calc.ned - calcNow + calc.rvl) / 2);
          if (calc.rvl >= Math.round(calc.ned - calcNow)) {
            errorList.push({
              type: 'error',
              message: `Конкурент уже занял это место:   ${calc.rvl} >= ${calc.ned} - ${calcNow} = ${Math.round(calc.ned - calcNow)}`
            });
            enclosure = undefined;
            minEnclosure = undefined;
          } else if (calc.fee > calc.ned - calcNow) {
            errorList.push({
              type: 'error',
              message: `Вложение превышает остаток:   ${calc.fee} > ${calc.ned} - ${calcNow} = ${Math.round(calc.ned - calcNow)}`
            });
            enclosure = undefined;
          } else if (enclosure > calc.ned - calcNow) {
            errorList.push({
              type: 'warn',
              message: `Вложение превышает остаток:   ${calc.fac} * ${calc.fee} = ${Math.round(calc.fac * calc.fee)}`
                + ` >= ${calc.ned} - ${calcNow} = ${Math.round(calc.ned - calcNow)}`
            });
            enclosure = undefined;
          } else if (enclosure === minEnclosure) {
            minEnclosure = undefined;
          } else if (enclosure < (calc.ned - calcNow + calc.rvl) / 2) {
            errorList.push({
              type: 'warn',
              message: `Нет ГАРАНТА для занятия места:  ${calc.fac} * ${calc.fee} = ${Math.round(calc.fac * calc.fee)}`
                + ` <= (${calc.ned} - ${calcNow} + ${calc.rvl}) / 2 = ${Math.round((calc.ned - calcNow + calc.rvl) / 2)}`
            });
            maxEnclosure = minEnclosure;
            minEnclosure = undefined;
          }

        } else {

          minEnclosure = Math.round((calc.ned - calcNow) / 2);
          if (calc.fee > calc.ned - calcNow) {
            errorList.push({
              type: 'error',
              message: `Вложение превышает остаток:   ${calc.fee} >= ${calc.ned} - ${calcNow} = ${Math.round(calc.ned - calcNow)}`
            });
            enclosure = undefined;
          } else if (enclosure > calc.ned - calcNow) {
            errorList.push({
              type: 'warn',
              message: `Вложение превышает остаток:   ${calc.fac} * ${calc.fee} = ${Math.round(calc.fac * calc.fee)}`
                + ` >= ${calc.ned} - ${calcNow} = ${Math.round(calc.ned - calcNow)}`
            });
            enclosure = undefined;
          } else if (enclosure === minEnclosure) {
            minEnclosure = undefined;
          } else if (enclosure < (calc.ned - calcNow) / 2) {
            errorList.push({
              type: 'warn',
              message: `Нет ГАРАНТА для занятия места:  ${calc.fac} * ${calc.fee} = ${Math.round(calc.fac * calc.fee)}`
                + ` <= (${calc.ned} - ${calcNow}) / 2 = ${Math.round((calc.ned - calcNow) / 2)}`
            });
            maxEnclosure = minEnclosure;
            minEnclosure = undefined;
          }

        }
      }
    } else {
      errorList.push({ type: 'error', message: "Введи Откат" });
    }

    setMinEncl(minEnclosure);
    setJustEncl(enclosure);
    setMaxEncl(maxEnclosure);
    setErrors(errorList);
  };

  const onChangeRepayment = () => {
    const calc: Calc = form.getFieldsValue();
    onSaveCalc(calc);
    calcEnclosure(calc);
    onSetPrimary(undefined);
  };

  const onChangeFactor = (factor: number) => {
    const calc: Calc = form.getFieldsValue();
    calc.fac = factor;
    onSaveCalc(calc);
    calcEnclosure(calc);
    onSetPrimary(undefined);
  };

  const clipboardWriteText = (text: string, primary: Primary) => {
    navigator.clipboard.writeText(text)
      .then(() => onSetPrimary(primary))
      .catch(() => onSetPrimary(undefined))
  };

  const onKeyPress = (ev: React.KeyboardEvent) => {
    // @ts-ignore
    console.log("ev = ", ev.key, "; id:", ev.target.id);
//    if (ev.ctrlKey && !ev.shiftKey) {
      // @ts-ignore
      switch (`${ev.key}-${ev.target.id}`) {
        case "Control-fac":
          //console.log("Control-fac: nowRef = ", nowRef);
          nowRef.current!.focus({ cursor: 'all' });
          break;
        // case "ArrowLeft-fac":
        //   //console.log("ArrowLeft-fac");
        //   break;

        case "Control-now":
          //console.log("Control-now: nedRef = ", nedRef);
          nedRef.current!.focus({ cursor: 'all' });
          break;
        // case "ArrowLeft-now":
        //   //console.log("ArrowLeft-now: facRef = ", facRef);
        //   facRef.current!.focus({ cursor: 'all' });
        //   break;

        case "Control-ned":
          //console.log("Control-ned: nedRef = ", feeRef);
          feeRef.current!.focus({ cursor: 'all' });
          break;
        // case "ArrowLeft-ned":
        //   //console.log("ArrowLeft-ned: nowRef = ", nowRef);
        //   nowRef.current!.focus({ cursor: 'all' });
        //   break;

        case "Control-fee":
          //console.log("Control-fee: rvlRef = ", rvlRef);
          rvlRef.current!.focus({ cursor: 'all' });
          break;
        // case "ArrowLeft-fee":
        //   //console.log("ArrowLeft-fee: nedRef = ", nedRef);
        //   nedRef.current!.focus({ cursor: 'all' });
        //   break;

        case "Control-rvl":
          //console.log("Control-rvl");
          break;
        // case "ArrowLeft-rvl":
        //   //console.log("ArrowLeft-rvl: nedRef = ", feeRef);
        //   feeRef.current!.focus({ cursor: 'all' });
        //   break;
      }
//      return true;
//    }
    return false;
  }

  return (
    <Form className='calc-form' layout='vertical' form={form}>
      <Input.Group compact>
        <Form.Item name="fac" noStyle>
          <Select id="fac" ref={facRef} style={{ width: 80 }} onChange={onChangeFactor} onKeyUp={onKeyPress}>
            {FACTOR_OPTION.map((value: number, index: number) => <Option key={index} value={value}>{value}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item name="now">
          <InputNumber ref={nowRef} placeholder='внесено' min={0} onChange={onChangeRepayment} onKeyUp={onKeyPress}/>
        </Form.Item>
        <Form.Item name="ned">
          <InputNumber ref={nedRef} placeholder='нужно' min={0} onChange={onChangeRepayment} onKeyUp={onKeyPress}/>
        </Form.Item>
        <Form.Item name="fee">
          <InputNumber ref={feeRef} placeholder='откат' min={0} onChange={onChangeRepayment} onKeyUp={onKeyPress}/>
        </Form.Item>
        <Form.Item name="rvl">
          <InputNumber ref={rvlRef} placeholder='конкур.' min={0} onChange={onChangeRepayment} onKeyUp={onKeyPress}/>
        </Form.Item>
        {minEncl &&
        <Form.Item>
          <Tooltip title='Для занятия места с ГАРАНТОМ'>
            <Button className={classNames('button-min', { 'selected': primary === 'min' })} type='primary' icon={<SnippetsOutlined/>}
                    onClick={() => clipboardWriteText(minEncl.toString(), 'min')}> {minEncl}</Button>
          </Tooltip>
        </Form.Item>
        }
        {justEncl &&
        <Form.Item>
          <Tooltip title='Вложение по откату'>
            <Button className={classNames('button-just', { 'selected': primary === 'just' })} type='primary' icon={<SnippetsOutlined/>}
                    onClick={() => clipboardWriteText(justEncl.toString(), 'just')}> {justEncl}</Button>
          </Tooltip>
        </Form.Item>
        }
        {maxEncl &&
        <Form.Item>
          <Tooltip title='Для занятия места с ГАРАНТОМ'>
            <Button className={classNames('button-max', { 'selected': primary === 'max' })} type='primary' icon={<SnippetsOutlined/>}
                    onClick={() => clipboardWriteText(maxEncl.toString(), 'max')}> {maxEncl}</Button>
          </Tooltip>
        </Form.Item>
        }
      </Input.Group>
      <div className='errors'>{errors.map((err: Error, index) => <div key={index} className={`${err.type}`}>{err.message}</div>)}</div>
    </Form>
  );
};

export default CalcForm;

