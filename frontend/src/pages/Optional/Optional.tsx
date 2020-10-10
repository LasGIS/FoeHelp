import { Space } from "antd";
import React from "react";

type Props = {
  text: string;
}

const Optional = ({ text }: Props) => <Space align='center'>
  <div>{text}</div>
</Space>;

export default Optional;

