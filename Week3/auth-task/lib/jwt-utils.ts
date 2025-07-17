export function decodeJWT(token: string) {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    return null
  }
}

export function isTokenExpired(token: string): boolean {
  const decoded = decodeJWT(token)
  if (!decoded || !decoded.exp) return true

  const currentTime = Date.now() / 1000
  return decoded.exp < currentTime
}

export function getTokenExpiration(token: string): Date | null {
  const decoded = decodeJWT(token)
  if (!decoded || !decoded.exp) return null

  return new Date(decoded.exp * 1000)
}
