"use client"

import { useSyncExternalStore } from "react"

/**
 * 미디어 쿼리를 구독합니다.
 * (useSyncExternalStore 패턴 — React 18+)
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia(query)
      mediaQuery.addEventListener("change", callback)
      return () => mediaQuery.removeEventListener("change", callback)
    },
    () => window.matchMedia(query).matches,
    () => false, // server snapshot
  )
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 768px)")
}
