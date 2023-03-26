/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */

import { AxiosError } from "axios";

export interface ApiError extends AxiosError {
  data: {
    message: string;
    exception_message: string;
    error: boolean;
    error_code: number;
  };
}
interface ServerResponse {
  data: any;
  error: any;
  message: string;
  date: string;
}

export function to<T = ServerResponse, U = ApiError>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        // @ts-ignore
        Object.assign(err, errorExt);
      }

      return [err, undefined];
    });
}

export default to;
