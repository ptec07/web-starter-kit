# Next.js Web Starter Kit

빠른 웹 애플리케이션 프로토타이핑을 위한 프로덕션급 Next.js 스타터킷입니다.
인증, 레이아웃, 다크모드, 컴포넌트 쇼케이스가 모두 포함되어 있어 바로 개발을 시작할 수 있습니다.

## 기술 스택

| 레이어 | 라이브러리 | 버전 |
|---|---|---|
| Framework | Next.js (App Router) | 16 |
| Language | TypeScript (strict mode) | 5 |
| Styling | Tailwind CSS | v4 (CSS-first) |
| UI Components | shadcn/ui | 3 |
| Authentication | Auth.js (next-auth) | v5 beta |
| Forms | react-hook-form + zod | - |
| Server State | TanStack Query | v5 |
| Dark Mode | next-themes | - |
| Toast | sonner | - |
| Icons | lucide-react | - |

## 주요 기능

- **인증 시스템** — Credentials / GitHub / Google OAuth 지원 (JWT 전략, DB 불필요)
- **라우트 보호** — `/dashboard`, `/settings`, `/components`는 로그인 필수
- **레이아웃 분리** — `(auth)` 그룹(중앙정렬)과 `(main)` 그룹(Header+Sidebar)
- **다크 모드** — 깜빡임 없는 시스템 테마 연동
- **컴포넌트 쇼케이스** — shadcn/ui 전체 컴포넌트 미리보기 (`/components`)
- **React Query DevTools** — 브라우저 우측 하단 플로팅 버튼

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

```bash
cp .env.example .env.local
```

`.env.local`을 열어 값을 채워주세요:

```env
AUTH_SECRET="..."              # npx auth secret 으로 생성
AUTH_GITHUB_ID="..."           # GitHub OAuth App
AUTH_GITHUB_SECRET="..."
AUTH_GOOGLE_ID="..."           # Google Cloud Console
AUTH_GOOGLE_SECRET="..."
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Starter Kit"
```

> `AUTH_SECRET`만 설정하면 Credentials 로그인으로 즉시 시작할 수 있습니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어주세요.

### 데모 계정

| 이메일 | 비밀번호 | 역할 |
|---|---|---|
| `demo@example.com` | `password` | user |
| `admin@example.com` | `password` | admin |

## 프로젝트 구조

```
src/
├── app/
│   ├── (auth)/               # 로그인/회원가입 — 중앙정렬 레이아웃
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (main)/               # 보호된 페이지 — Header+Sidebar 레이아웃
│   │   ├── dashboard/page.tsx
│   │   ├── settings/page.tsx
│   │   └── components/page.tsx  ← shadcn 쇼케이스
│   └── api/auth/[...nextauth]/route.ts
├── auth.ts                   # Auth.js v5 설정
├── proxy.ts                  # 라우트 보호 (Next.js 16 proxy)
├── components/
│   ├── ui/                   # shadcn/ui 컴포넌트
│   ├── layout/               # Header, Sidebar, Footer, MobileNav
│   ├── auth/                 # LoginForm, RegisterForm, UserButton
│   ├── providers/            # Theme, Query, Session Provider
│   └── shared/               # ThemeToggle, LoadingSpinner, PageHeader
├── lib/
│   ├── utils.ts              # cn() 유틸리티
│   ├── auth-utils.ts         # 서버사이드 auth 헬퍼
│   └── validations/auth.ts   # zod 스키마
├── hooks/
│   ├── use-media-query.ts    # useSyncExternalStore 기반
│   └── use-mounted.ts        # SSR 하이드레이션 안전
└── types/
    ├── next-auth.d.ts        # Session 타입 확장 (id, role)
    └── index.ts
```

## 주요 명령어

```bash
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run lint       # ESLint 검사
npx tsc --noEmit   # TypeScript 타입 검사
```

## 확장 가이드

| 목적 | 방법 |
|---|---|
| DB 연동 | Prisma + `@auth/prisma-adapter` → `strategy: "database"` 전환 |
| API 레이어 | tRPC 또는 Hono 추가 |
| 테스트 | Vitest + React Testing Library + Playwright |
| 에러 모니터링 | Sentry |
| 배포 | Vercel (Next.js 최적화) |

## 라이선스

MIT
