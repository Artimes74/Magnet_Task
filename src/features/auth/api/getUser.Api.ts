import { api } from "services";

export const getUserApi = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
