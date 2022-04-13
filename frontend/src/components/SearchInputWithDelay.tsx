/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import React, { ChangeEvent, useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  delay?: number;
};

const SearchInputWithDelay = ({ value, placeholder, onChange, delay = 500 }: Props) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
  const [tempValue, setTempValue] = useState<string>(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const onPressEnter = () => {
    if (timer) clearTimeout(timer);
    setTimer(undefined);
    onChange(tempValue);
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTempValue(newValue);
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        onChange(newValue);
      }, delay),
    );
  };

  return <Search value={tempValue} onChange={onChangeValue} onPressEnter={onPressEnter} placeholder={placeholder} allowClear />;
};

export default SearchInputWithDelay;
