import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { loginSchema } from "@/lib/validations/auth"

// 데모 사용자 (DB 없이 즉시 테스트 가능)
const DEMO_USERS = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password",
    image: null,
    role: "user",
  },
  {
    id: "2",
    name: "Admin User",
    email: "admin@example.com",
    password: "password",
    image: null,
    role: "admin",
  },
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials)
        if (!parsed.success) return null

        const user = DEMO_USERS.find(
          (u) => u.email === parsed.data.email && u.password === parsed.data.password,
        )

        if (!user) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        }
      },
    }),
    ...(process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET
      ? [GitHub({ clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET })]
      : []),
    ...(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
      ? [Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET })]
      : []),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string
        token.role = (user.role as string) ?? "user"
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = (token.role as string) ?? "user"
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
})
