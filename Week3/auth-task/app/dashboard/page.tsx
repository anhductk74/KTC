"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Mail, Calendar, Shield, LogOut } from "lucide-react"

export default function Dashboard() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/signin")
    }
  }, [user, isLoading, router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Đang tải...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2 bg-transparent">
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* User Profile Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Thông tin người dùng
              </CardTitle>
              <CardDescription>Chi tiết tài khoản và phiên đăng nhập</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt={user.email} />
                  <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{user.email}</h3>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {user.email}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {user.roles?.map((role) => (
                      <Badge key={role.id} variant="secondary" className="text-xs">
                        {role.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Trạng thái tài khoản</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Shield className="h-3 w-3 mr-1" />
                    Đã xác thực
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Phiên đăng nhập</span>
                  <Badge variant="outline">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date().toLocaleDateString("vi-VN")}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Session Info */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin phiên</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">User ID</p>
                  <p className="text-lg">{user.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trạng thái</p>
                  <Badge variant={user.isActive ? "default" : "destructive"}>
                    {user.isActive ? "Hoạt động" : "Không hoạt động"}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Vai trò</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user.roles?.map((role) => (
                      <Badge key={role.id} variant="outline" className="text-xs">
                        {role.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Access Token</p>
                  <p className="text-xs font-mono bg-gray-100 p-2 rounded break-all">
                    {user.access_token?.substring(0, 30)}...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protected Content */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Nội dung được bảo vệ</CardTitle>
              <CardDescription>Nội dung này chỉ hiển thị cho người dùng đã đăng nhập</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Tính năng 1</h4>
                  <p className="text-sm text-muted-foreground">Truy cập các tính năng cao cấp</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Tính năng 2</h4>
                  <p className="text-sm text-muted-foreground">Dashboard cá nhân hóa</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Tính năng 3</h4>
                  <p className="text-sm text-muted-foreground">Lưu trữ dữ liệu an toàn</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
