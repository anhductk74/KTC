import { type User } from "../Model/User"

const baseUrl = 'https://server.aptech.io'
const loginService = async (data: User) => {
    try {
        const fetchLogin = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await fetchLogin.json()
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('users', JSON.stringify(response.loggedInUser))
        return response
    } catch (error) {
        console.log("Login failed")
    }
}

export default loginService