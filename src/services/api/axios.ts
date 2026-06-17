import axios from "axios";
import Config from "react-native-config";

import type { RootState, AppStore } from "store";

export const api = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setupApiInterceptors = (store: AppStore) => {
  api.interceptors.request.use((config) => {
    const state = store.getState() as RootState;
    const token = state.auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};
