import { Space } from "antd";
import React from "react";

type Props = {
  text: string;
}

const Optional = ({ text }: Props) => <Space align='center'>
  <h1>{text}</h1>
</Space>;

export default Optional;

