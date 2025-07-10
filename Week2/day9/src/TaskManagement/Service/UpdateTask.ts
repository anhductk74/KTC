const baseUrl = 'https://server.aptech.io';
import type { Task } from '../Model/Task';
const UpdateTask = async (data: Task) => {
    try {
    const response = await fetch(`${baseUrl}/workspaces/tasks/${data.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(data)
    });
        if (!response.ok) {
            throw new Error('Failed to update task');
        }
        return response.json();
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

export default UpdateTask;