import { apiClient } from "../libraries/api-client";
import type { Roles, User } from "../types/user";

const getAllUser = async (): Promise<User[]> => {
  const response = await apiClient.get('/security/users');
  return response as unknown as User[];
};

const getUserDetail = async (id: number): Promise<User> => {
  const response = await apiClient.get(`/security/users/${id}`);
  return response as unknown as User;
};


const getAllUsersWithRoles = async (): Promise<User[]> => {
  const users = await getAllUser();

  const usersWithFullInfo = await Promise.all(
    users.map(async (user) => {
      const fullUser = await getUserDetail(user.id as number);
      return fullUser;
    })
  );
  return usersWithFullInfo;
};

const getRoles = async (): Promise<Roles[]> => {
  const response = await apiClient.get('/security/roles');
  return response as unknown as Roles[];
};

const updateUser = async (id: number | string, data: any) => {
  const response = await apiClient.patch(`/security/users/${id}`, data);
  return response as unknown as User;
};

const addRoleToUser = async (id: number | string, data: any) => {
  const response = await apiClient.put(`/security/users/${id}/add-role-to-user`, data);
  return response;
}

const removeRoleToUser = async (id: number | string, data: any) => {
  const response = await apiClient.put(`/security/users/${id}/remove-role-from-user`, data);
  return response;
}



export { getAllUser, getUserDetail, getAllUsersWithRoles, getRoles, updateUser, removeRoleToUser, addRoleToUser };
