import { api, ENDPOINTS } from "services";
import { ILoginRequest, ILoginResponse } from "../types/auth.types";

export const loginRequest = async (
  payload: ILoginRequest,
): Promise<ILoginResponse> => {
  const { data } = await api.post<ILoginResponse>(ENDPOINTS.LOGIN, payload);
  return data;
};
