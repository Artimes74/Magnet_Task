import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "services";

import { getFriendsApi } from "../api/chatApi";

export const useFriends = () => {
  return useQuery({
    queryKey: queryKeys.chat.list,
    queryFn: getFriendsApi,
  });
};
