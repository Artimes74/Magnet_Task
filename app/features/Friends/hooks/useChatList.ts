import { useQuery } from '@tanstack/react-query';

import { queryKeys } from 'services';

import { getChatList } from '../api/chatApi';

export const useChatList = () => {
  return useQuery({
    queryKey: queryKeys.chat.list,
    queryFn: getChatList,
  });
};
