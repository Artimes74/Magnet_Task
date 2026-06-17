import { useMutation } from "@tanstack/react-query";

import { queryClient, queryKeys } from "services";

import { loginRequest } from "../api/auth.Api";
import { store } from "store";
import { setCredentials } from "../store/authSlice";
import { getUserApi } from "../api/getUser.Api";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginRequest,
    mutationKey: queryKeys.auth.login,
    onSuccess: async (response) => {
      store.dispatch(
        setCredentials({
          token: response.token,
        }),
      );
      await queryClient.fetchQuery({
        queryKey: queryKeys.user.me,
        queryFn: getUserApi,
      });
    },
  });
};
