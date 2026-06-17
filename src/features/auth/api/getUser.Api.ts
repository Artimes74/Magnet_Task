import { api, ENDPOINTS } from "services";
import { IUser } from "../types/user.types";

export const getUserApi = async () => {
  const response = await api.get<IUser>(ENDPOINTS.ME);
  return response.data;
};
