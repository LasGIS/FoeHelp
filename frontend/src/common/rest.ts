/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import { ErrorDto } from './types/util-types';
import { showErrors } from './utils/notification-utils';

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const get = (url: string, data?: any, options?: RequestInit): Promise<any> => {
  return requestDecorator(url, {
    ...{
      method: HTTP_METHODS.GET,
    },
    ...options,
  });
};

export const post = (url: string, data?: any, options?: RequestInit): Promise<any> => {
  return requestDecorator(url, {
    ...{
      method: HTTP_METHODS.POST,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    ...options,
  });
};

export const put = (url: string, data?: any, options?: RequestInit): Promise<any> =>
  requestDecorator(url, {
    ...{
      method: HTTP_METHODS.PUT,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    ...options,
  });

export const del = (url: string, data?: any, options?: RequestInit): Promise<any> =>
  requestDecorator(url, {
    ...{
      method: HTTP_METHODS.DELETE,
    },
    ...options,
  });

const requestDecorator = (url: string, options?: RequestInit): Promise<any> => {
  const endOptions: RequestInit = {
    ...options,
    ...{
      redirect: 'manual',
    },
  };
  return request(url, endOptions)
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      const errors: ErrorDto[] = toArrayErrors(error);
      showErrors(errors);
      return Promise.reject(errors);
    });
};

export const request = (url: string, options: RequestInit): Promise<any> =>
  new Promise((resolve: (result: any) => void, reject: (error: ErrorDto[]) => void) => {
    fetch(url, options)
      .then((response: Response) => {
        if (response.type === 'opaqueredirect') {
          window.location.pathname = '/login';
        } else {
          response
            .json()
            .then((result: unknown) => {
              if (!checkIfResponseOk(response) && checkIfResultIsError(result)) {
                reject(result);
              } else {
                resolve(result);
              }
            })
            .catch((error) => {
              reject(toArrayErrors(error));
            });
        }
      })
      .catch((error) => {
        reject(toArrayErrors(error));
      });
  });

function checkIfResponseOk(response: Response): boolean {
  return response.ok && response.status >= 200 && response.status < 300;
}

function checkIfResultIsError(result: unknown | ErrorDto): result is ErrorDto[] {
  const obj = Array.isArray(result) && Boolean(result.length) ? result[0] : {};
  return Boolean(typeof obj.code === 'number' && typeof obj.message === 'string');
}

function toArrayErrors(error: any): ErrorDto[] {
  if (error.constructor === Array) {
    return error.map((err: any) => toErrorDto(err));
  } else {
    return [toErrorDto(error)];
  }
}

function toErrorDto(error: any): ErrorDto {
  return typeof error.code === 'number' && error.message ? error : { code: -1, message: error.toString() };
}
