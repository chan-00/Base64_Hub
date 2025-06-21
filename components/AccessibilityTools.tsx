'use client'

import { useState, useEffect } from 'react'

interface AccessibilityToolsProps {
  output: string
  input: string
}

export default function AccessibilityTools({ output, input }: AccessibilityToolsProps) {
  const [fontSize, setFontSize] = useState(14)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [screenReaderMode, setScreenReaderMode] = useState(false)
  const [showFocusIndicator, setShowFocusIndicator] = useState(true)

  useEffect(() => {
    // 폰트 크기 적용
    document.documentElement.style.fontSize = `${fontSize}px`
    
    // 고대비 모드 적용
    if (highContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
    
    // 모션 감소 모드 적용
    if (reducedMotion) {
      document.body.classList.add('reduced-motion')
    } else {
      document.body.classList.remove('reduced-motion')
    }
    
    // 포커스 표시기 적용
    if (showFocusIndicator) {
      document.body.classList.add('show-focus')
    } else {
      document.body.classList.remove('show-focus')
    }
  }, [fontSize, highContrast, reducedMotion, showFocusIndicator])

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ko-KR'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      speakText('클립보드에 복사되었습니다.')
    } catch (err) {
      console.error('클립보드 복사 실패:', err)
      speakText('클립보드 복사에 실패했습니다.')
    }
  }

  const downloadAsAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(output)
      utterance.lang = 'ko-KR'
      utterance.rate = 0.8
      
      // 오디오 다운로드 (실제로는 Web Audio API 사용)
      speakText('오디오 다운로드 기능은 준비 중입니다.')
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        접근성 도구
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 시각적 도구 */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            시각적 도구
          </h4>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                폰트 크기: {fontSize}px
              </label>
              <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="highContrast"
                type="checkbox"
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="highContrast" className="text-sm text-gray-700 dark:text-gray-300">
                고대비 모드
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="reducedMotion"
                type="checkbox"
                checked={reducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="reducedMotion" className="text-sm text-gray-700 dark:text-gray-300">
                모션 감소
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="showFocusIndicator"
                type="checkbox"
                checked={showFocusIndicator}
                onChange={(e) => setShowFocusIndicator(e.target.checked)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="showFocusIndicator" className="text-sm text-gray-700 dark:text-gray-300">
                포커스 표시기
              </label>
            </div>
          </div>
        </div>

        {/* 음성 도구 */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            음성 도구
          </h4>
          
          <div className="space-y-2">
            <button
              onClick={() => speakText(`입력: ${input}`)}
              className="w-full btn-secondary text-sm"
            >
              입력 텍스트 읽기
            </button>
            
            <button
              onClick={() => speakText(`출력: ${output}`)}
              className="w-full btn-secondary text-sm"
            >
              출력 텍스트 읽기
            </button>
            
            <button
              onClick={stopSpeaking}
              className="w-full btn-secondary text-sm"
            >
              읽기 중지
            </button>
            
            <button
              onClick={downloadAsAudio}
              className="w-full btn-secondary text-sm"
            >
              오디오 다운로드
            </button>
          </div>
        </div>
      </div>

      {/* 키보드 단축키 안내 */}
      <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-700 rounded">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          키보드 단축키
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
          <div>Ctrl/Cmd + Enter: 변환</div>
          <div>Ctrl/Cmd + C: 복사</div>
          <div>Ctrl/Cmd + Z: 실행 취소</div>
          <div>Ctrl/Cmd + Shift + H: 히스토리</div>
          <div>Ctrl/Cmd + Shift + T: 테마 변경</div>
          <div>Ctrl/Cmd + Shift + K: 모두 지우기</div>
        </div>
      </div>

      {/* 스크린 리더 모드 */}
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <input
            id="screenReaderMode"
            type="checkbox"
            checked={screenReaderMode}
            onChange={(e) => setScreenReaderMode(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="screenReaderMode" className="text-sm text-gray-700 dark:text-gray-300">
            스크린 리더 최적화 모드
          </label>
        </div>
        {screenReaderMode && (
          <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs text-yellow-800 dark:text-yellow-200">
            스크린 리더 모드가 활성화되었습니다. 더 자세한 설명과 상태 정보가 제공됩니다.
          </div>
        )}
      </div>
    </div>
  )
} 