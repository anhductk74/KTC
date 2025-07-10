import baseUrl from '../config'

const ourTaskService = async () => {
    try {
        const fetchOurTask = await fetch(`${baseUrl}/workspaces/tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        const response = await fetchOurTask.json()
        return response
    } catch (error) {
        console.log("Our task failed")
    }
}




export default ourTaskService