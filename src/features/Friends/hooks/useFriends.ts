import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "services";

import { getFriendsApi } from "../api/FriendsApi";

export const useFriends = () => {
  return useQuery({
    queryKey: queryKeys.Friends.list,
    queryFn: getFriendsApi,
    gcTime: 30 * 60 * 1000,
    staleTime: 30 * 60 * 1000,
  });
};
