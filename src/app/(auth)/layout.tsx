import type { Metadata } from "next"
import Link from "next/link"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export const metadata: Metadata = {
  title: "인증",
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center justify-between border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-primary">⚡</span>
          <span>{process.env.NEXT_PUBLIC_APP_NAME ?? "Starter Kit"}</span>
        </Link>
        <ThemeToggle />
      </header>
      <main className="flex flex-1 items-center justify-center p-6">{children}</main>
    </div>
  )
}
