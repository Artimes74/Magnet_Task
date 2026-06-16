import { useMutation } from "@tanstack/react-query";

import { loginRequest } from "../api/auth.Api";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginRequest,
    mutationKey: ["postLogin"] as const,
    gcTime: 0,
  });
};
