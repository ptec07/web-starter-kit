import { auth } from "@/auth"
import { redirect } from "next/navigation"

/**
 * 서버 컴포넌트에서 현재 세션을 가져옵니다.
 * 인증이 필요한 페이지에서 사용합니다.
 */
export async function getRequiredSession() {
  const session = await auth()
  if (!session?.user) {
    redirect("/login")
  }
  return session
}

/**
 * 서버 컴포넌트에서 현재 세션을 가져옵니다.
 * 인증 여부와 관계없이 사용합니다.
 */
export async function getOptionalSession() {
  return await auth()
}

/**
 * 현재 사용자가 admin 역할인지 확인합니다.
 */
export async function requireAdmin() {
  const session = await getRequiredSession()
  if (session.user.role !== "admin") {
    redirect("/dashboard")
  }
  return session
}
