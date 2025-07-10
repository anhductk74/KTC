const baseUrl = 'https://server.aptech.io';
const DeleteTask = async (id: number) => {
    const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to delete task');
    }
    return response.json();
};

export default DeleteTask;