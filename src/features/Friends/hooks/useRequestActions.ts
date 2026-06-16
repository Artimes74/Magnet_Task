import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "services";

import { acceptRequest, cancelRequest, declineRequest } from "../api/chatApi";

export const useAcceptRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: acceptRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.chat.list,
      });
    },
  });
};

export const useDeclineRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: declineRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.chat.list,
      });
    },
  });
};

export const useCancelRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.chat.list,
      });
    },
  });
};
