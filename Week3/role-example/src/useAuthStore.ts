import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';
import type { AuthState } from './types/user';
import { apiClient } from './libraries/api-client';

export const useAuthStore = create<AuthState>()(
    devtools(
      persist(
        (set) => {
          return {
            access_token: undefined,
            refresh_token: undefined,
            loggedInUser: undefined,
            loading: false,
            error: null,
            login: async ({ username, password, navigate }) => {
              try {
                set(
                  {
                    loggedInUser: undefined,
                    access_token: undefined,
                    refresh_token: undefined,
                    error: null,
                    loading: true,
                  },
                  false,
                  { type: '@AUTH/LOGIN/LOADING' }
                );
  
                const response: any = (await apiClient.post('/auth/login', { username, password })) as any;
  
                set(
                  {
                    access_token: response.access_token,
                    refresh_token: response.refresh_token,
                    loggedInUser: response.loggedInUser,
                    loading: false,
                    error: null,
                  },
                  false,
                  { type: '@AUTH/LOGIN/SUCCESS' }
                );
                navigate('/home');
              } catch (error) {
                set({ error, access_token: undefined, refresh_token: undefined, loggedInUser: undefined }, false, {
                  type: '@AUTH/LOGIN/ERROR',
                });
              }
            },
  
            logOut: async () => {
              set({ access_token: undefined, refresh_token: undefined, loggedInUser: undefined });
            },
  
            changeAccessToken: async () => {
              set(
                {
                  access_token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNjYzMjIzLCJleHAiOjE3ODQyMjA4MjN9._SjS09sdc-BWc_7tOINhEfvfYZ2X1QvwtEyc3E8OCXX',
                },
                false,
                { type: '@AUTH/CHANGE_ACCESS_TOKEN' }
              );
            },
            changeRefreshToken: async () => {
              set(
                {
                  refresh_token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzUyNjYzMjIzLCJleHAiOjE3NTMyNjgwMjN9.ATl3GcFXhrr3WUb8BEPU3PdrCbDfutdUoY1P4l7w_Zd',
                },
                false,
                { type: '@AUTH/CHANGE_REFRESH_TOKEN' }
              );
            },
          };
        },
        {
          name: 'auth-storage',
        }
      )
    )
  );