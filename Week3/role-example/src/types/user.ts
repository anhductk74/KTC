export interface Roles {  
    id: number;
    code: string;
    name: string;
    description: string | null;
}
export interface User {
    id: number | string;
    fullName?: string;
    username: string;
    status: string;
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
