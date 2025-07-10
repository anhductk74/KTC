import baseUrl from '../config'

const myTaskService = async (userId: number) => {
    try {
    const fetchMyTask = await fetch(`${baseUrl}/workspaces/tasks/assignee/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    })
    const response = await fetchMyTask.json()
    return response
} catch (error) {
    console.log("My task failed: "+ error)
}
}

export default myTaskService