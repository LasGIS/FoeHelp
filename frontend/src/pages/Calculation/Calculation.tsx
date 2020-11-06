/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React from "react";
import { Form } from "antd";
import CalcForm from "./CalcForm";
import { Calc } from "./calc-type";

const Calculation: React.FC = () => {

  const storageLoadCalc = (storageName: string): Calc => {
    const calcJson: string | null = localStorage.getItem(storageName);
    if (typeof (calcJson) === 'string') {
      return JSON.parse(calcJson);
    } else {
      return {
        fac: 1.9,
        fee: 0
      }
    }
  };

  const storageSaveCalc = (storageName: string, calc: Calc) => {
    localStorage.setItem(storageName, JSON.stringify(calc));
  };

  return (
    <div className='ant-form-vertical'>
      <Form.Item label="Расчет вложения">
        <CalcForm key='calc-form-0' calc={storageLoadCalc("calc")} onSaveCalc={(calc: Calc) => storageSaveCalc("calc", calc)}/>
        <CalcForm key='calc-form-1' calc={storageLoadCalc("calc1")} onSaveCalc={(calc: Calc) => storageSaveCalc("calc1", calc)}/>
        <CalcForm key='calc-form-2' calc={storageLoadCalc("calc2")} onSaveCalc={(calc: Calc) => storageSaveCalc("calc2", calc)}/>
        <CalcForm key='calc-form-3' calc={storageLoadCalc("calc3")} onSaveCalc={(calc: Calc) => storageSaveCalc("calc3", calc)}/>
      </Form.Item>
    </div>
  );
};

export default Calculation;

