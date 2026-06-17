import { api } from "services";
import { FriendsResponse } from "../types/friends.types";

export const getFriendsApi = async () => {
  const response = await api.get<FriendsResponse>("/friends");
  return response.data;
};
