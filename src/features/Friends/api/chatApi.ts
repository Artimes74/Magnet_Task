import { api } from "services";
import { FriendsResponse, RequestActionPayload } from "../types/chat.types";

export const getFriendsApi = async () => {
  const response = await api.get<FriendsResponse>("/friends");
  return response.data;
};

export const cancelRequest = async ({
  requestId,
}: RequestActionPayload): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};

export const acceptRequest = async ({
  requestId,
}: RequestActionPayload): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};

export const declineRequest = async ({
  requestId,
}: RequestActionPayload): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};
