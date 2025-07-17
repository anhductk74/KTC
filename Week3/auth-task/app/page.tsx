"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Users, Lock, Zap } from "lucide-react"

export default function Home() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/dashboard")
    }
  }, [user, isLoading, router])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hệ thống đăng nhập</h1>
          <p className="text-xl text-gray-600 mb-8">Sử dụng API Aptech để xác thực người dùng</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/auth/signin">Đăng nhập</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">Xem Dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Bảo mật</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Xác thực an toàn với API server chuyên dụng</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Đăng nhập đơn giản</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Sử dụng username và password để đăng nhập</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Bảo vệ trang</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Các trang được bảo vệ yêu cầu đăng nhập</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>Dễ sử dụng</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Giao diện thân thiện và dễ sử dụng</CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Hướng dẫn</CardTitle>
            <CardDescription>Nhập username và password để đăng nhập vào hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>• Nhấn nút "Đăng nhập" để truy cập trang đăng nhập</p>
              <p>• Nhập thông tin tài khoản của bạn</p>
              <p>• Sau khi đăng nhập thành công, bạn sẽ được chuyển đến Dashboard</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
