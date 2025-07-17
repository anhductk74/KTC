import { apiClient } from "@/libraries/api-client";
import { Task } from "@/type/task";

export const getTasks = async (): Promise<Task[]> => {
  const response = (await apiClient.get('https://server.aptech.io/workspaces/tasks')) as Task[];    
  return response;
};

export const deleteTask = async (id: string): Promise<void> => {
  await apiClient.delete(`/workspaces/tasks/${id}`);
};
