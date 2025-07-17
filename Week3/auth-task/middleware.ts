// `next-auth/middleware` now exposes a *default* export.
import authMiddleware from "next-auth/middleware"

export default authMiddleware({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
})

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
}
