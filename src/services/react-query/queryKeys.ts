export const queryKeys = {
  auth: {
    login: ['auth', 'login'] as const,
  },

  chat: {
    list: ['chat', 'list'] as const,
    acceptRequest: ['chat', 'accept-request'] as const,
    declineRequest: ['chat', 'decline-request'] as const,
    cancelRequest: ['chat', 'cancel-request'] as const,
  },
};
