'use client'

import { useState, useEffect, useCallback } from 'react'
import { ENCODINGS, type EncodingType, encodeBase64, decodeBase64, isValidBase64 } from '@/lib/base64'
import { useHistoryStore } from '@/lib/store'
import HistoryModal from './HistoryModal'

export default function Base64Converter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [encoding, setEncoding] = useState<EncodingType>('UTF-8')
  const [isUrlSafe, setIsUrlSafe] = useState(false)
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [lastInputChange, setLastInputChange] = useState<'input' | 'output'>('input')
  
  const { addToHistory } = useHistoryStore()

  // 입력값이 변경될 때마다 실시간 변환
  const handleInputChange = useCallback((value: string) => {
    setInput(value)
    setLastInputChange('input')
    
    if (value) {
      const encoded = encodeBase64(value, encoding, isUrlSafe)
      setOutput(encoded)
      
      // 히스토리에 저장
      if (encoded) {
        addToHistory({
          input: value,
          output: encoded,
          encoding,
          isUrlSafe,
        })
      }
    } else {
      setOutput('')
    }
  }, [encoding, isUrlSafe, addToHistory])

  // 출력값이 변경될 때마다 실시간 디코딩
  const handleOutputChange = useCallback((value: string) => {
    setOutput(value)
    setLastInputChange('output')
    
    if (value && isValidBase64(value, isUrlSafe)) {
      const decoded = decodeBase64(value, encoding, isUrlSafe)
      setInput(decoded)
      
      // 히스토리에 저장
      if (decoded) {
        addToHistory({
          input: decoded,
          output: value,
          encoding,
          isUrlSafe,
        })
      }
    } else if (!value) {
      setInput('')
    }
  }, [encoding, isUrlSafe, addToHistory])

  // 인코딩 변경 시 재변환
  useEffect(() => {
    if (lastInputChange === 'input' && input) {
      const encoded = encodeBase64(input, encoding, isUrlSafe)
      setOutput(encoded)
    } else if (lastInputChange === 'output' && output && isValidBase64(output, isUrlSafe)) {
      const decoded = decodeBase64(output, encoding, isUrlSafe)
      setInput(decoded)
    }
  }, [encoding, isUrlSafe, input, output, lastInputChange])

  // URL-safe 옵션 변경 시 재변환
  useEffect(() => {
    if (lastInputChange === 'input' && input) {
      const encoded = encodeBase64(input, encoding, isUrlSafe)
      setOutput(encoded)
    } else if (lastInputChange === 'output' && output && isValidBase64(output, isUrlSafe)) {
      const decoded = decodeBase64(output, encoding, isUrlSafe)
      setInput(decoded)
    }
  }, [isUrlSafe, encoding, input, output, lastInputChange])

  // 클립보드 복사
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // 성공 메시지 표시 (실제로는 토스트나 알림을 사용할 수 있음)
    } catch (err) {
      console.error('클립보드 복사 실패:', err)
    }
  }

  // 모든 필드 초기화
  const clearAll = () => {
    setInput('')
    setOutput('')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* AdSense Placeholder - Side */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            {/* 옵션 컨트롤 */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <label htmlFor="encoding" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  인코딩:
                </label>
                <select
                  id="encoding"
                  value={encoding}
                  onChange={(e) => setEncoding(e.target.value as EncodingType)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {Object.keys(ENCODINGS).map((enc) => (
                    <option key={enc} value={enc}>
                      {enc}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  id="urlSafe"
                  type="checkbox"
                  checked={isUrlSafe}
                  onChange={(e) => setIsUrlSafe(e.target.checked)}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="urlSafe" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  URL-safe
                </label>
              </div>
              
              <button
                onClick={() => setIsHistoryOpen(true)}
                className="btn-secondary"
              >
                히스토리 보기
              </button>
              
              <button
                onClick={clearAll}
                className="btn-secondary"
              >
                모두 지우기
              </button>
            </div>

            {/* 입력/출력 영역 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 입력 영역 */}
              <div>
                <label htmlFor="input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  입력
                </label>
                <textarea
                  id="input"
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="인코딩할 텍스트를 입력하세요..."
                  className="textarea-custom h-64"
                />
              </div>

              {/* 출력 영역 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="output" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    출력
                  </label>
                  <button
                    onClick={() => copyToClipboard(output)}
                    className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    복사
                  </button>
                </div>
                <textarea
                  id="output"
                  value={output}
                  onChange={(e) => handleOutputChange(e.target.value)}
                  placeholder="디코딩할 Base64 문자열을 입력하세요..."
                  className="textarea-custom h-64"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 사이드바 - AdSense */}
        <div className="lg:col-span-1">
          <div className="bg-gray-100 dark:bg-gray-700 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Google AdSense<br />사이드바 영역
            </span>
          </div>
        </div>
      </div>

      {/* 히스토리 모달 */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onSelect={(item) => {
          setInput(item.input)
          setOutput(item.output)
          setEncoding(item.encoding)
          setIsUrlSafe(item.isUrlSafe)
          setIsHistoryOpen(false)
        }}
      />
    </div>
  )
} 