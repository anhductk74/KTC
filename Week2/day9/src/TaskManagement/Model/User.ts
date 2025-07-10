export type Role = {
    id: number;
    name: string;
  };
  
  export type User = {
    id: number;
    email: string;
    isActive: boolean;
    roles: Role[];
  };

