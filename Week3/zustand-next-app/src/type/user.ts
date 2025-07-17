export interface Roles {  
    id: number | string;
    name: string;
}
export interface User {
    id: number | string;
    email: string;
    isActive: boolean;
    roles: Roles[];
}

export interface AuthState {
    access_token?: string;
    refresh_token?: string;
    loggedInUser?: User;
    loading: boolean;
    error: any;
    login: ({ username, password, navigate }: { username: string; password: string; navigate: any }) => Promise<void>;
    logOut: () => Promise<void>;
    changeAccessToken: () => Promise<void>;
    changeRefreshToken: () => Promise<void>;
  }
