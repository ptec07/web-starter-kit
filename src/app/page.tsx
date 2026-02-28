import Link from "next/link"
import { ArrowRight, Layers, Lock, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Next.js 15 + React 19",
    description: "최신 App Router, Server Components, Server Actions를 활용한 최적화된 아키텍처",
  },
  {
    icon: Lock,
    title: "Auth.js v5 인증",
    description: "Credentials, GitHub, Google OAuth를 지원하는 JWT 기반 인증 시스템",
  },
  {
    icon: Palette,
    title: "shadcn/ui + Tailwind v4",
    description: "OKLCH 색상 변수와 CSS-first 설정으로 일관된 디자인 시스템",
  },
  {
    icon: Layers,
    title: "TanStack Query v5",
    description: "서버 상태 관리와 SSR 패턴, React Query DevTools 내장",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-20 text-center">
        <Badge variant="secondary" className="text-sm">
          ⚡ Next.js 15 Starter Kit
        </Badge>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            빠른 프로토타이핑을 위한
            <br />
            <span className="text-primary">프로덕션급 베이스</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            인증, 레이아웃, 컴포넌트 쇼케이스까지 — 개발 시작부터 배포까지 필요한 모든 것이
            포함되어 있습니다.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/dashboard">
              대시보드 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/components">컴포넌트 쇼케이스</Link>
          </Button>
        </div>

        <p className="text-muted-foreground text-sm">
          데모 계정:{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">demo@example.com</code>
          {" / "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">password</code>
        </p>
      </main>

      {/* Features */}
      <section className="border-t px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold">포함된 기술 스택</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title}>
                  <CardHeader className="pb-2">
                    <Icon className="text-primary mb-2 h-6 w-6" />
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>Next.js 15 Starter Kit · MIT License</p>
      </footer>
    </div>
  )
}
