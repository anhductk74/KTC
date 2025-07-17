import { Badge } from "@/components/ui/badge"
import { Shield, Crown, Users } from "lucide-react"

interface RoleBadgeProps {
  role: {
    id: number
    name: string
  }
}

export function RoleBadge({ role }: RoleBadgeProps) {
  const getRoleIcon = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case "administrators":
        return <Crown className="h-3 w-3" />
      case "managers":
        return <Shield className="h-3 w-3" />
      default:
        return <Users className="h-3 w-3" />
    }
  }

  const getRoleColor = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case "administrators":
        return "bg-red-100 text-red-800 border-red-200"
      case "managers":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Badge variant="outline" className={`${getRoleColor(role.name)} flex items-center gap-1`}>
      {getRoleIcon(role.name)}
      {role.name}
    </Badge>
  )
}
