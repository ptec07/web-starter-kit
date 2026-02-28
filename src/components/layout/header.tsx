"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { UserButton } from "@/components/auth/user-button"
import { MobileNav } from "@/components/layout/mobile-nav"

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="flex h-14 items-center gap-4 px-4 md:px-6">
        {/* Mobile nav */}
        <MobileNav />

        {/* Logo */}
        <Link href="/" className="hidden items-center gap-2 font-semibold md:flex">
          <span className="text-primary">⚡</span>
          <span>{process.env.NEXT_PUBLIC_APP_NAME ?? "Starter Kit"}</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  )
}
