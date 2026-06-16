import { api } from 'services';
import { LoginRequest, LoginResponse } from '../types/auth.types';

export const loginRequest = async (
  payload: LoginRequest,
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>('/login', payload);

  return data;
};
