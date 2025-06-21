import { useEffect, useCallback } from 'react'

interface KeyboardShortcutsProps {
  onConvert?: () => void
  onCopy?: () => void
  onUndo?: () => void
  onHistory?: () => void
  onTheme?: () => void
  onClear?: () => void
}

export function useKeyboardShortcuts({
  onConvert,
  onCopy,
  onUndo,
  onHistory,
  onTheme,
  onClear
}: KeyboardShortcutsProps) {
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Ctrl/Cmd + 키 조합
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'Enter':
          e.preventDefault()
          onConvert?.()
          break
        case 'c':
          e.preventDefault()
          onCopy?.()
          break
        case 'z':
          e.preventDefault()
          onUndo?.()
          break
        case 'h':
          if (e.shiftKey) {
            e.preventDefault()
            onHistory?.()
          }
          break
        case 't':
          if (e.shiftKey) {
            e.preventDefault()
            onTheme?.()
          }
          break
        case 'k':
          if (e.shiftKey) {
            e.preventDefault()
            onClear?.()
          }
          break
      }
    }
    
    // 단일 키 단축키
    switch (e.key) {
      case 'Escape':
        // 모달 닫기 등
        break
    }
  }, [onConvert, onCopy, onUndo, onHistory, onTheme, onClear])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
} 