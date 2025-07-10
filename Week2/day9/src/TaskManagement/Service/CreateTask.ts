import baseUrl from '../config'
import type { Task } from '../Model/Task'

const createTaskService = async (data: Task) => {
    try {
    const response = await fetch(`${baseUrl}/workspaces/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(data)
    })
    return response
} catch (error) {
    console.log("Create task failed: "+ error)
}
}

export default createTaskService