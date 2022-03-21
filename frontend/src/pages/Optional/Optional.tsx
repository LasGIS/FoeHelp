/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { Space } from "antd";
import React from "react";

type Props = {
  text: string;
}

const Optional: React.FC<Props> = ({ text }) => <Space align='center'>
  <h1>{text}</h1>
</Space>;

export default Optional;

