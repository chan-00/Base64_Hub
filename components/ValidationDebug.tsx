'use client'

import { useState } from 'react'
import { isValidBase64 } from '@/lib/base64'

interface ValidationDebugProps {
  input: string
  output: string
  isUrlSafe: boolean
}

export default function ValidationDebug({ input, output, isUrlSafe }: ValidationDebugProps) {
  const [showDebug, setShowDebug] = useState(false)

  const validationResults = {
    inputLength: input.length,
    outputLength: output.length,
    isValidBase64: output.length > 0 ? isValidBase64(output, isUrlSafe) : true,
    hasPadding: output.includes('='),
    hasSpecialChars: /[^A-Za-z0-9+/=]/.test(output),
    isUrlSafeCompatible: !output.includes('+') && !output.includes('/'),
    encoding: 'UTF-8', // 기본값
    binaryLength: output.length > 0 ? Math.ceil((output.length * 6) / 8) : 0
  }

  const debugInfo = {
    inputBytes: new TextEncoder().encode(input).length,
    outputBytes: output.length,
    compressionRatio: input.length > 0 ? ((output.length / input.length) * 100).toFixed(1) : '0',
    paddingCount: (output.match(/=/g) || []).length,
    lineBreakCount: (output.match(/\n/g) || []).length,
    spaceCount: (output.match(/\s/g) || []).length
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          검증 & 디버깅
        </h3>
        <button
          onClick={() => setShowDebug(!showDebug)}
          className="text-sm text-primary-600 hover:text-primary-700"
        >
          {showDebug ? '간단히 보기' : '상세 보기'}
        </button>
      </div>

      {/* 기본 검증 결과 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <div className="text-lg font-bold text-primary-600">
            {validationResults.isValidBase64 ? '✅' : '❌'}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Base64 유효성</div>
        </div>
        
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <div className="text-lg font-bold text-primary-600">
            {validationResults.hasPadding ? '✅' : '❌'}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">패딩 포함</div>
        </div>
        
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <div className="text-lg font-bold text-primary-600">
            {validationResults.isUrlSafeCompatible ? '✅' : '❌'}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">URL-safe</div>
        </div>
        
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <div className="text-lg font-bold text-primary-600">
            {validationResults.binaryLength}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">바이너리 길이</div>
        </div>
      </div>

      {/* 상세 디버그 정보 */}
      {showDebug && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                입력 분석
              </h4>
              <div className="space-y-1 text-sm">
                <div>문자 수: {validationResults.inputLength}</div>
                <div>바이트 수: {debugInfo.inputBytes}</div>
                <div>인코딩: {validationResults.encoding}</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                출력 분석
              </h4>
              <div className="space-y-1 text-sm">
                <div>문자 수: {validationResults.outputLength}</div>
                <div>바이트 수: {debugInfo.outputBytes}</div>
                <div>압축률: {debugInfo.compressionRatio}%</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              문자 분석
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div>패딩(=): {debugInfo.paddingCount}개</div>
              <div>줄바꿈: {debugInfo.lineBreakCount}개</div>
              <div>공백: {debugInfo.spaceCount}개</div>
              <div>특수문자: {validationResults.hasSpecialChars ? '있음' : '없음'}</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              바이너리 정보
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs font-mono break-all">
              {output.length > 0 ? (
                <div>
                  <div>원본 길이: {input.length} 문자</div>
                  <div>Base64 길이: {output.length} 문자</div>
                  <div>예상 바이너리: {validationResults.binaryLength} 바이트</div>
                  <div>실제 바이너리: {debugInfo.inputBytes} 바이트</div>
                </div>
              ) : (
                '입력이 없습니다.'
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 