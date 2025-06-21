'use client'

import { useState, useEffect, useCallback } from 'react'
import { ENCODINGS, type EncodingType, encodeBase64, decodeBase64, isValidBase64 } from '@/lib/base64'
import { useHistoryStore } from '@/lib/store'
import { useKeyboardShortcuts } from '@/lib/hooks'
import HistoryModal from '@/components/HistoryModal'
import AdSense from './AdSense'
import ConversionStats from './ConversionStats'
import AdvancedOptions from './AdvancedOptions'
import BatchProcessor from './BatchProcessor'
import ValidationDebug from './ValidationDebug'
import ResultFormatter from './ResultFormatter'
import AccessibilityTools from './AccessibilityTools'

export default function Base64Converter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [encoding, setEncoding] = useState<EncodingType>('UTF-8')
  const [isUrlSafe, setIsUrlSafe] = useState(false)
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [lastInputChange, setLastInputChange] = useState<'input' | 'output'>('input')
  
  // 고급 옵션 상태
  const [removePadding, setRemovePadding] = useState(false)
  const [removeLineBreaks, setRemoveLineBreaks] = useState(false)
  const [toUpperCase, setToUpperCase] = useState(false)
  const [lineBreakInterval, setLineBreakInterval] = useState(0)
  
  // 탭 상태
  const [activeTab, setActiveTab] = useState<'converter' | 'batch' | 'tools'>('converter')
  
  const { addToHistory } = useHistoryStore()

  // 모든 필드 초기화
  const clearAll = () => {
    setInput('')
    setOutput('')
  }

  // 키보드 단축키 설정
  useKeyboardShortcuts({
    onConvert: () => {
      if (input) {
        handleInputChange(input)
      }
    },
    onCopy: () => copyToClipboard(output),
    onUndo: () => {
      // 간단한 실행 취소 (실제로는 더 복잡한 히스토리 관리 필요)
      setInput('')
      setOutput('')
    },
    onHistory: () => setIsHistoryOpen(true),
    onTheme: () => {
      // 테마 토글 (ThemeProvider에서 처리)
      document.documentElement.classList.toggle('dark')
    },
    onClear: clearAll
  })

  // 입력값이 변경될 때마다 실시간 변환
  const handleInputChange = useCallback((value: string) => {
    setInput(value)
    setLastInputChange('input')
    
    if (value) {
      let encoded = encodeBase64(value, encoding, isUrlSafe)
      
      // 고급 옵션 적용
      if (removePadding) {
        encoded = encoded.replace(/=+$/, '')
      }
      if (removeLineBreaks) {
        encoded = encoded.replace(/[\r\n]/g, '')
      }
      if (toUpperCase) {
        encoded = encoded.toUpperCase()
      }
      if (lineBreakInterval > 0) {
        const chunks = []
        for (let i = 0; i < encoded.length; i += lineBreakInterval) {
          chunks.push(encoded.slice(i, i + lineBreakInterval))
        }
        encoded = chunks.join('\n')
      }
      
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
  }, [encoding, isUrlSafe, removePadding, removeLineBreaks, toUpperCase, lineBreakInterval, addToHistory])

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
      handleInputChange(input)
    } else if (lastInputChange === 'output' && output && isValidBase64(output, isUrlSafe)) {
      const decoded = decodeBase64(output, encoding, isUrlSafe)
      setInput(decoded)
    }
  }, [encoding, isUrlSafe, input, output, lastInputChange, handleInputChange])

  // 고급 옵션 변경 시 재변환
  useEffect(() => {
    if (lastInputChange === 'input' && input) {
      handleInputChange(input)
    }
  }, [removePadding, removeLineBreaks, toUpperCase, lineBreakInterval, input, lastInputChange, handleInputChange])

  // 클립보드 복사
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // 성공 메시지 표시 (실제로는 토스트나 알림을 사용할 수 있음)
    } catch (err) {
      console.error('클립보드 복사 실패:', err)
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* 탭 네비게이션 */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('converter')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'converter'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              변환기
            </button>
            <button
              onClick={() => setActiveTab('batch')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'batch'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              배치 처리
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tools'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              도구
            </button>
          </nav>
        </div>
      </div>

      {/* 메인 변환기 탭 */}
      {activeTab === 'converter' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            {/* 고급 옵션 - 메인 변환기 위로 이동 */}
            <AdvancedOptions
              removePadding={removePadding}
              setRemovePadding={setRemovePadding}
              removeLineBreaks={removeLineBreaks}
              setRemoveLineBreaks={setRemoveLineBreaks}
              toUpperCase={toUpperCase}
              setToUpperCase={setToUpperCase}
              lineBreakInterval={lineBreakInterval}
              setLineBreakInterval={setLineBreakInterval}
            />

            {/* 메인 변환기 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
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

            {/* 실시간 통계 */}
            <ConversionStats
              input={input}
              output={output}
              encoding={encoding}
              isUrlSafe={isUrlSafe}
            />

            {/* 검증 & 디버깅 */}
            <ValidationDebug
              input={input}
              output={output}
              isUrlSafe={isUrlSafe}
            />

            {/* 결과 포맷팅 */}
            <ResultFormatter
              output={output}
              onFormattedChange={setOutput}
            />
          </div>

          {/* 사이드바 - AdSense */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center min-h-[400px]">
              <AdSense
                client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || ''}
                slot={process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT || ''}
                format="auto"
                responsive={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* 배치 처리 탭 */}
      {activeTab === 'batch' && (
        <BatchProcessor
          encoding={encoding}
          isUrlSafe={isUrlSafe}
          removePadding={removePadding}
          removeLineBreaks={removeLineBreaks}
          toUpperCase={toUpperCase}
          lineBreakInterval={lineBreakInterval}
        />
      )}

      {/* 도구 탭 */}
      {activeTab === 'tools' && (
        <div className="space-y-6">
          <AccessibilityTools
            output={output}
            input={input}
          />
        </div>
      )}

      {/* 히스토리 모달 */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onSelect={(item: { input: string; output: string; encoding: string; isUrlSafe: boolean }) => {
          setInput(item.input)
          setOutput(item.output)
          setEncoding((item.encoding === 'UTF-8' || item.encoding === 'EUC-KR' ? item.encoding : 'UTF-8') as EncodingType)
          setIsUrlSafe(item.isUrlSafe)
          setIsHistoryOpen(false)
        }}
      />
    </div>
  )
} 