import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const ENDPOINTS = {
  LOGIN: "auth/login",
  ME: "/auth/me",
};
