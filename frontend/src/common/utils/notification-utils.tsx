/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import * as React from 'react';
import { notification } from 'antd';
import { ErrorDto, SimpleResponse } from '../types/util-types';
import { IconType } from 'antd/es/notification';

export const showNotification = (message: React.ReactNode, detail?: React.ReactNode, type?: IconType) => {
  notification.open({
    type: type ? type : 'info',
    message: message,
    description: detail,
    duration: 20,
  });
};

export const showErrors = (errors: ErrorDto[]) => {
  errors.forEach((error) => {
    showNotification(error.message, error.detail, 'error');
  });
};

export const clearErrors = () => {
  notification.destroy();
};

export const showSimpleResponse = (message: string, response: SimpleResponse) => {
  const detail = response.message ? (
    response.message
  ) : response.messageList ? (
    <>
      {response.messageList.map((str, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {str}
        </span>
      ))}
    </>
  ) : (
    ''
  );
  showNotification(message, detail, response.status === 'OK' ? 'info' : 'error');
};
