import { apiClient } from "../libraries/api-client";
import type { Task } from "../types/task";

export const getTasks = async (): Promise<Task[]> => {
  const response = (await apiClient.get('/workspaces/tasks')) as Task[];    
  return response;
};

export const deleteTask = async (id: string): Promise<void> => {
  await apiClient.delete(`/workspaces/tasks/${id}`);
};