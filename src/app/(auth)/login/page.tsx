import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "로그인",
}

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">로그인</CardTitle>
        <CardDescription>이메일과 비밀번호로 로그인하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense>
          <LoginForm />
        </Suspense>
        <div className="mt-4 space-y-3">
          <Separator />
          <p className="text-muted-foreground text-center text-xs">
            데모 계정: <strong>demo@example.com</strong> / <strong>password</strong>
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-muted-foreground text-sm">
          계정이 없으신가요?{" "}
          <Link href="/register" className="font-medium underline underline-offset-4 hover:text-foreground">
            회원가입
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
