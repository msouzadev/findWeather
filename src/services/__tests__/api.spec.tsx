import axios, { AxiosError } from 'axios';
import api from '../api';
import { ensureRender, mockAxios } from '@utils/testHelpers';

describe('Api', () => {
  it.skip('calls axios create if we call api', () => {
    const spy = jest.spyOn(axios, 'create');
    api();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('success data', async () => {
    const mockData = { response: true };
    mockAxios.get.mockImplementationOnce(async url => {
      if (url === '/me') {
        return {
          status: 200,
          data: mockData,
          headers: {},
          config: {},
          statusText: 'ok',
        };
      }
    });

    const response = await api().get('/me');
    await ensureRender();

    expect(response.data).toBe(mockData);
  });

  it('error 500', async () => {
    mockAxios.get.mockImplementationOnce(async url => {
      if (url === '/me') {
        return {
          status: 500,
          headers: {},
          config: {},
          statusText: 'ERROR!!!',
        };
      }
    });
    await ensureRender();

    api()
      .get('/me')
      .catch((error: AxiosError) => {
        expect(error?.response?.status).toBe(500);
        expect(error?.response?.statusText).toBe('ERROR!!!');
      });
  });
});
