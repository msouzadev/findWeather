import React, { useEffect } from 'react';
import { render, screen, renderHook, waitFor } from '@testing-library/react-native';
import { useFetch } from '../useFetch';
import { ensureRender, mockAxios, renderWithTheme } from '../../../src/utils/testHelpers';
import { Text, View } from 'react-native';

const mocks = {
  onSuccess: jest.fn(),
  onError: jest.fn(),
};
const ComponentWithUseFetch = () => {
  const {
    data: names,
    doFetch: getNames,
    isFetching: loading,
  } = useFetch<string[]>('names', 'get', {
    defaultValue: [],
    onSuccess: mocks.onSuccess,
    onError: mocks.onError,
  });

  useEffect(() => {
    getNames({ params: { page: 1 } });
  }, []);

  return (
    <View>
      <Text> Lista de nomes</Text>
      {loading && <Text>carregando</Text>}
      {names?.map(name => (
        <Text>{name}</Text>
      ))}
    </View>
  );
};

describe('useFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call passed api', () => {
    jest.useFakeTimers();
    const mock = mockAxios.get.mockImplementation(async () => ['Maria', 'João', 'Francisco']);

    render(<ComponentWithUseFetch />);

    screen.getByText('carregando');
    expect(mock).toBeCalled();
    expect(mock.mock.calls[0]).toMatchObject(['names', { params: { page: 1 } }, {}]);
  });

  it('should load response', async () => {
    jest.useFakeTimers();
    mockAxios.get.mockImplementation(async () => ({
      data: ['Maria', 'João', 'Francisco'],
    }));
    render(<ComponentWithUseFetch />);

    await ensureRender();

    expect(screen.queryByText('carregando')).not.toBeTruthy();
    screen.getByText('Maria');
    screen.getByText('João');
    screen.getByText('Francisco');

    expect(mocks.onSuccess).toBeCalled();
    expect(mocks.onError).not.toBeCalled();
  });
  it('should handle error', async () => {
    mockAxios.get.mockRejectedValueOnce(async () => ({
      status: 500,
      data: {},
      headers: {},
      config: {},
      statusText: 'ok',
    }));

    renderWithTheme(
      <>
        <ComponentWithUseFetch />
      </>,
    );
    await ensureRender();

    expect(mocks.onSuccess).not.toBeCalled();
    expect(mocks.onError).toBeCalled();
  });

  it('update data should refresh data', async () => {
    const responseData = ['Maria', 'João', 'Francisco'];
    const dataToUpdate = ['Lucas', ...responseData];
    mockAxios.get.mockImplementation(async () => ({
      data: responseData,
      status: 200,
    }));

    const { result } = renderHook(() => useFetch('test'));
    await result.current.doFetch();
    await ensureRender();
    expect(result.current.data).toBe(responseData);
    result.current.updateData(dataToUpdate);
    await ensureRender();

    await waitFor(() => expect(result.current.data).toBe(dataToUpdate));
  });
  it('should make get request passing params', async () => {
    const mock = mockAxios.get.mockImplementation(async () => true);
    const params = { name: 'Gustavo' };

    const { result } = renderHook(() => useFetch('test', 'get'));
    await result.current.doFetch(params);

    expect(mock).toBeCalled();
    expect(mock.mock.calls[0][0]).toStrictEqual('test');
    expect(mock.mock.calls[0][1]).toStrictEqual(params as any);
  });
  it('should make post request passing payload', async () => {
    const mock = mockAxios.post.mockImplementation(async () => true);
    const payload = { name: 'Gustavo' };

    const { result } = renderHook(() => useFetch('test', 'post'));
    await result.current.doFetch(payload);

    expect(mock).toBeCalled();
    expect(mock.mock.calls[0][0]).toStrictEqual('test');
    expect(mock.mock.calls[0][1]).toStrictEqual(payload);
  });
  it('should make put request passing payload', async () => {
    const mock = mockAxios.put.mockImplementation(async () => true);
    const payload = { name: 'Gustavo' };

    const { result } = renderHook(() => useFetch('test', 'put'));
    await result.current.doFetch(payload);

    expect(mock).toBeCalled();
    expect(mock.mock.calls[0][0]).toStrictEqual('test');
    expect(mock.mock.calls[0][1]).toStrictEqual(payload);
  });
  it('should make delete request passing payload', async () => {
    const mock = mockAxios.delete.mockImplementation(async () => true);
    const param = { id: '123123' };

    const { result } = renderHook(() => useFetch('test', 'delete'));
    await result.current.doFetch(param);

    expect(mock).toBeCalled();
    expect(mock.mock.calls[0][0]).toStrictEqual('test');
    expect(mock.mock.calls[0][1]).toStrictEqual(param as any);
  });
});
