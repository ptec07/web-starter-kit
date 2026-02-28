import type { Metadata } from "next"
import { getRequiredSession } from "@/lib/auth-utils"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const session = await getRequiredSession()
  const { user } = session

  const initials = user.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) ?? "?"

  return (
    <div className="space-y-6">
      <PageHeader
        title="대시보드"
        description="안녕하세요! 오늘도 좋은 하루 되세요."
      />

      {/* User info card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">현재 세션 정보</CardTitle>
          <CardDescription>Auth.js v5로 인증된 사용자 정보입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.image ?? undefined} alt={user.name ?? "User"} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="font-medium">{user.name ?? "사용자"}</p>
                <Badge variant="secondary">{user.role}</Badge>
              </div>
              <p className="text-muted-foreground text-sm">{user.email}</p>
              <p className="text-muted-foreground text-xs">ID: {user.id}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "총 방문수", value: "1,234", description: "지난 30일" },
          { label: "활성 사용자", value: "56", description: "현재 온라인" },
          { label: "컴포넌트", value: "26+", description: "shadcn/ui" },
          { label: "빌드 시간", value: "< 1s", description: "Turbopack" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-1">
              <CardDescription className="text-xs">{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground text-xs">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
