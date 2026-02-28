import type { Metadata } from "next"
import { getRequiredSession } from "@/lib/auth-utils"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = {
  title: "Settings",
}

export default async function SettingsPage() {
  const session = await getRequiredSession()
  const { user } = session

  return (
    <div className="space-y-6">
      <PageHeader title="설정" description="계정 및 애플리케이션 설정을 관리합니다." />

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>이름과 이메일 정보를 확인합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" defaultValue={user.name ?? ""} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" defaultValue={user.email ?? ""} disabled />
          </div>
          <p className="text-muted-foreground text-xs">
            * 데모 환경에서는 프로필 수정이 비활성화되어 있습니다.
          </p>
          <Button disabled>변경사항 저장</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>알림을 받을 항목을 선택합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "이메일 알림", description: "중요 업데이트를 이메일로 받습니다.", defaultChecked: true },
            { label: "마케팅 알림", description: "새 기능 및 프로모션 정보를 받습니다.", defaultChecked: false },
            { label: "보안 알림", description: "로그인 및 계정 변경 시 알림을 받습니다.", defaultChecked: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} disabled />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
