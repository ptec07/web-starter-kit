"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/**
 * SSR 하이드레이션 안전성을 위한 훅.
 * 클라이언트 전용 렌더링이 필요한 컴포넌트에서 사용합니다.
 * (useSyncExternalStore 패턴 — React 18+)
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,   // client snapshot
    () => false,  // server snapshot
  )
}
