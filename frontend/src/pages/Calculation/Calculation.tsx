/*
 * Copyright 2020 LasGIS FOE Helper
 */

import React, { useState } from "react";
import { Form } from "antd";
import CalcForm from "./CalcForm";
import { Calc } from "./calc-type";

export type Primary = 'min' | 'just' | 'max' | undefined;
export type CalcFormKey = 'calc0' | 'calc1' | 'calc2' | 'calc3';

type SelectedPrimary = {
  key?: CalcFormKey;
  primary: Primary;
}

const Calculation: React.FC = () => {

  const [ selectedPrimary, setSelectedPrimary ] = useState<SelectedPrimary>({ key: undefined, primary: undefined });

  const getSelectedPrimary = (key: CalcFormKey): Primary => {
    return selectedPrimary.key === key ? selectedPrimary.primary : undefined;
  }

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
        <CalcForm key='calc-form-0'
                  calc={storageLoadCalc("calc0")}
                  onSaveCalc={(calc: Calc) => storageSaveCalc("calc0", calc)}
                  primary={getSelectedPrimary('calc0')}
                  onSetPrimary={(primary: Primary) => setSelectedPrimary({ key: 'calc0', primary })}
        />
        <CalcForm key='calc-form-1'
                  calc={storageLoadCalc("calc1")}
                  onSaveCalc={(calc: Calc) => storageSaveCalc("calc1", calc)}
                  primary={getSelectedPrimary('calc1')}
                  onSetPrimary={(primary: Primary) => setSelectedPrimary({ key: 'calc1', primary })}
        />
        <CalcForm key='calc-form-2'
                  calc={storageLoadCalc("calc2")}
                  onSaveCalc={(calc: Calc) => storageSaveCalc("calc2", calc)}
                  primary={getSelectedPrimary('calc2')}
                  onSetPrimary={(primary: Primary) => setSelectedPrimary({ key: 'calc2', primary })}
        />
        <CalcForm key='calc-form-3'
                  calc={storageLoadCalc("calc3")}
                  onSaveCalc={(calc: Calc) => storageSaveCalc("calc3", calc)}
                  primary={getSelectedPrimary('calc3')}
                  onSetPrimary={(primary: Primary) => setSelectedPrimary({ key: 'calc3', primary })}
        />
      </Form.Item>
    </div>
  );
};

export default Calculation;

