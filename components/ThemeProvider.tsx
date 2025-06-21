'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/lib/store'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDark, setTheme } = useThemeStore()

  useEffect(() => {
    // 초기 테마 설정
    const savedTheme = localStorage.getItem('theme-storage')
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme)
        setTheme(parsed.state?.isDark || false)
      } catch {
        setTheme(false)
      }
    }
  }, [setTheme])

  useEffect(() => {
    // HTML 클래스 업데이트
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return <>{children}</>
} 