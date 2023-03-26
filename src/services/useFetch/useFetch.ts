import { useEffect, useRef, useState } from "react";
import api, { to } from "@services/api";

import axios from "axios";

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
  enabledCache?: boolean;
  contentType?: string;
}

type Method = "get" | "post" | "put" | "delete" | "patch";

export const useFetch = <FetchData = any>(
  path: string,
  method: Method = "get",
  config: Config<FetchData> = {}
) => {
  const { defaultValue, onSuccess, onError, fetchConfig, enabledCache } =
    config;
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<FetchData>(defaultValue);

  const abortController = useRef<AbortController>();

  const handleSuccess = (response: any) => {
    if (onSuccess) {
      onSuccess(response);
    }
    setData(response);
    return response;
  };

  const doFetch = async (
    params: any = undefined,
    newPath = path
  ): Promise<FetchData | boolean> => {
    setIsFetching(true);

    const [error, response] = await to<{ data: FetchData }>(
      api({
        fullResponse: config.fullResponse,
        contentType: config.contentType,
      })[method](newPath, params, fetchConfig || {})
    );

    setIsFetching(false);
    if (response) {
      const responseData = response.data;

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
      if (axios.isCancel(error)) {
        return false;
      }

      // @ts-ignore
      if (error?.status === 401) {
        // return logout();
        // return false;
      }

      if (onError) {
        setData(defaultValue);
        //@ts-ignore
        onError(error?.data || null);
      }

      return false;
    }

    return true;
  };

  const updateData = (modifiedData: FetchData) => setData(modifiedData);
  useEffect(() => {
    () => {
      abortController.current?.abort();
    };
  }, []);
  return { isFetching, doFetch, data, updateData };
};
