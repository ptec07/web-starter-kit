import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { AlertCircle, CheckCircle2, Info, Terminal } from "lucide-react"

export const metadata: Metadata = {
  title: "Components",
}

const tableData = [
  { name: "Button", category: "Form", status: "Stable" },
  { name: "Input", category: "Form", status: "Stable" },
  { name: "Card", category: "Layout", status: "Stable" },
  { name: "Dialog", category: "Overlay", status: "Stable" },
  { name: "Sheet", category: "Overlay", status: "Stable" },
]

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="컴포넌트 쇼케이스"
        description="shadcn/ui 컴포넌트 라이브러리 전체 미리보기"
      />

      <Tabs defaultValue="buttons">
        <TabsList className="flex flex-wrap gap-1 h-auto">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="display">Display</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>

        {/* === BUTTONS === */}
        <TabsContent value="buttons" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>다양한 스타일의 버튼 컴포넌트</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Button size="lg">Large</Button>
              <Button>Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon">⚡</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>
        </TabsContent>

        {/* === FORMS === */}
        <TabsContent value="forms" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Input & Label</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-w-sm">
              <div className="space-y-2">
                <Label htmlFor="demo-input">이메일</Label>
                <Input id="demo-input" type="email" placeholder="me@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-textarea">메시지</Label>
                <Textarea id="demo-textarea" placeholder="메시지를 입력하세요..." rows={3} />
              </div>
              <div className="space-y-2">
                <Label>역할 선택</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="역할을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Checkbox & Switch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">이용약관에 동의합니다</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="marketing" defaultChecked />
                <Label htmlFor="marketing">마케팅 정보 수신 동의</Label>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="notifications">알림 활성화</Label>
                <Switch id="notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="dark-mode">다크 모드</Label>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* === DISPLAY === */}
        <TabsContent value="display" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Avatar</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>DU</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">SM</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
              <CardDescription>로딩 상태 플레이스홀더</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
              <Skeleton className="h-32 w-full" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breadcrumb</CardTitle>
            </CardHeader>
            <CardContent>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Components</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Auth.js v5는 무엇인가요?</AccordionTrigger>
                  <AccordionContent>
                    Auth.js v5는 Next.js 15를 공식 지원하는 인증 라이브러리입니다. JWT 전략으로
                    DB 없이도 즉시 인증을 구현할 수 있습니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Tailwind v4의 주요 변경점은?</AccordionTrigger>
                  <AccordionContent>
                    설정 파일 없이 CSS-first 방식으로 동작합니다. HSL 대신 OKLCH 색상 포맷을
                    사용하며, @theme 블록으로 커스터마이징합니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>TanStack Query는 왜 필요한가요?</AccordionTrigger>
                  <AccordionContent>
                    서버 상태 캐싱, 자동 재요청, 낙관적 업데이트 등을 처리합니다. useState
                    팩토리 패턴으로 SSR에서도 안전하게 사용할 수 있습니다.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* === FEEDBACK === */}
        <TabsContent value="feedback" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Alert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>기본 알림</AlertTitle>
                <AlertDescription>일반적인 정보를 제공하는 알림입니다.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>오류 발생</AlertTitle>
                <AlertDescription>요청을 처리하는 중 오류가 발생했습니다.</AlertDescription>
              </Alert>
              <Alert className="border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>성공</AlertTitle>
                <AlertDescription>작업이 성공적으로 완료되었습니다.</AlertDescription>
              </Alert>
              <Alert className="border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                <Info className="h-4 w-4" />
                <AlertTitle>안내</AlertTitle>
                <AlertDescription>추가적인 정보가 있습니다. 확인해주세요.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Variants</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">기본 카드</CardTitle>
                  <CardDescription>설명 텍스트입니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">카드 본문 내용입니다.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">액션</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-base">강조 카드</CardTitle>
                  <CardDescription>primary 색상 테두리</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">중요한 내용을 강조할 때 사용합니다.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">자세히</Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* === DATA === */}
        <TabsContent value="data" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>데이터 테이블 컴포넌트</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>shadcn/ui 컴포넌트 목록</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>컴포넌트</TableHead>
                    <TableHead>카테고리</TableHead>
                    <TableHead>상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{row.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{row.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
