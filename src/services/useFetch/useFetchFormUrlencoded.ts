/* eslint-disable dot-notation */
import { useState } from 'react';
import { to } from '@services/api';
import { delay } from '@utils/delay';
import axios from 'axios';
// import EncryptedStorage from 'react-native-encrypted-storage';
import { API_URL } from '@env';

interface ServerErrorResponse {
  message: string;
  exception_message: string;
  error: boolean;
  error_code: number;
}
interface Config<FetchData> {
  defaultValue?: any;
  onSuccess?: (response: FetchData) => void;
  onError?: (error: ServerErrorResponse | null) => void;
  fetchConfig?: any;
  headers?: any;
  fullResponse?: boolean;
  delay?: number;
  contentType?: string;
}

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';

export const useFetchFormUrlencoded = <FetchData = any>(path: string, method: Method = 'post', config: Config<FetchData> = {}) => {
  const { defaultValue, onSuccess, onError, fetchConfig } = config;
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<FetchData>(defaultValue);

  const doFetch = async (params: any = undefined, newPath = path): Promise<FetchData | boolean> => {
    setIsFetching(true);
    // const token = await EncryptedStorage.getItem('@AgzMEI:token');
    axios.defaults['baseURL'] = API_URL;
    const [error, response] = await to<{ data: FetchData; error: any }>(
      axios[method](newPath, params, {
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        ...fetchConfig,
      }),
    );
    if (config.delay) {
      await delay(config.delay);
    }
    setIsFetching(false);
    if (response) {
      const responseData = config.fullResponse ? response : response.data;
      if (onSuccess) {
        // @ts-ignore
        onSuccess(responseData);
      }
      // @ts-ignore
      setData(responseData);
      // @ts-ignore
      return responseData;
    }

    if (error) {
      if (onError) {
        setData(defaultValue);
        //@ts-ignore
        onError(error?.response?.data || null);
      }

      return false;
    }

    return true;
  };

  const updateData = (modifiedData: FetchData) => setData(modifiedData);

  return { isFetching, doFetch, data, updateData };
};
