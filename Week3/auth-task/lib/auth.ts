export interface Role {
  id: number
  name: string
}

export interface User {
  id: number
  email: string
  isActive: boolean
  roles: Role[]
  access_token: string
  refresh_token: string
}

export interface LoginResponse {
  success: boolean
  user?: User
  message?: string
}

export async function loginUser(username: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch("https://server.aptech.io/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const data = await response.json()

    if (response.ok && data.access_token && data.loggedInUser) {
      const user: User = {
        id: data.loggedInUser.id,
        email: data.loggedInUser.email,
        isActive: data.loggedInUser.isActive,
        roles: data.loggedInUser.roles,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      }

      return {
        success: true,
        user: user,
      }
    } else {
      return {
        success: false,
        message: data.message || "Đăng nhập thất bại",
      }
    }
  } catch (error) {
    return {
      success: false,
      message: "Lỗi kết nối đến server",
    }
  }
}

export function saveUserSession(user: User) {
  localStorage.setItem("user", JSON.stringify(user))
  localStorage.setItem("token", user.access_token)
}

export function getUserSession(): User | null {
  if (typeof window === "undefined") return null

  const userStr = localStorage.getItem("user")
  if (userStr) {
    return JSON.parse(userStr)
  }
  return null
}

export function clearUserSession() {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null
  const user = getUserSession()
  return user?.access_token || null
}
