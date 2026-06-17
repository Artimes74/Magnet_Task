import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "services";
import { getUserApi } from "../api/getUser.Api";

export const useFriends = () => {
  return useQuery({
    queryKey: queryKeys.user.me,
    queryFn: getUserApi,
    gcTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};
